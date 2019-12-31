const moment = require('moment-jalaali')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const { attachFields } = require('gatsby-plugin-node-fields')

const utils = require('./scripts/utils')

function isGuestYAMLNode(node) {
  return node.internal.type === 'GuestYAML'
}

function isEpisodeYAMLNode(node) {
  return node.internal.type === 'EpisodeYAML'
}

const descriptor = [
  {
    predicate: isGuestYAMLNode,
    fields: [
      {
        name: 'slug',
        getter(node, _context, _actions, getNode) {
          const file = getNode(node.parent)

          return utils.getGuestSlugFromFile(file)
        },
      },
    ],
  },
  {
    predicate: isEpisodeYAMLNode,
    fields: [
      {
        name: 'slug',
        getter(node, _context, _actions, getNode) {
          const file = getNode(node.parent)

          return utils.getEpisodeSlugFromFile(file)
        },
      },
      {
        name: 'type',
        getter(node, _context, _actions, getNode) {
          const file = getNode(node.parent)

          return utils.getEpisodeTypeFromFile(file)
        },
      },
      {
        name: 'season',
        getter(node, _context, _actions, getNode) {
          const file = getNode(node.parent)

          return utils.getEpisodeSeasonFromFile(file)
        },
      },
      {
        name: 'scheduledAt',
        getter(node, _context, _actions) {
          return moment(node.scheduled_at, 'jYYYY/jM/jD HH:mm')
            .utc()
            .toISOString()
        },
      },
    ],
  },
]

function onCreateNode({ node, actions, getNode }) {
  attachFields(node, actions, getNode, descriptor)
}

function createSchemaCustomization({ actions, schema }) {
  // Site
  const siteTypeDef = schema.buildObjectType({
    name: 'Site',
    interfaces: ['Node'],
    extensions: {
      infer: true,
    },
    fields: {
      siteMetadata: 'SiteSiteMetadata!',
    },
  })
  // SiteSiteMetadata
  const siteSiteMetadataTypeDef = schema.buildObjectType({
    name: 'SiteSiteMetadata',
    extensions: {
      infer: true,
    },
    fields: {
      licenseSpecLink: 'String!',
      platforms: 'SiteSiteMetadataPlatforms!',
    },
  })
  // SiteSiteMetadataPlatforms
  const siteSiteMetadataPlatformsTypeDef = schema.buildObjectType({
    name: 'SiteSiteMetadataPlatforms',
    extensions: {
      infer: true,
    },
    fields: {
      youtube: 'String!',
      hazy: 'String!',
      telegram: 'String!',
      email: 'String!',
      twitch: 'String!',
      overcast: 'String!',
      spotify: 'String!',
      podcast: 'String!',
      github: 'String!',
      virgool: 'String!',
      twitter: 'String!',
      instagram: 'String!',
    },
  })

  // GuestYAML
  const guestYAMLTypeDef = schema.buildObjectType({
    name: 'GuestYAML',
    interfaces: ['Node'],
    extensions: {
      infer: false,
    },
    fields: {
      firstName: {
        type: 'String!',
        resolve(source) {
          return source.first_name
        },
      },
      lastName: {
        type: 'String!',
        resolve(source) {
          return source.last_name
        },
      },
      fullName: {
        type: 'String!',
        resolve(source) {
          return source.first_name + ' ' + source.last_name
        },
      },
      bio: 'String!',
      avatar: {
        type: 'File!',
        extensions: {
          fileByRelativePath: {},
        },
      },
      slug: {
        type: 'String!',
        resolve(source) {
          return source.fields.slug
        },
      },
      socialLinks: {
        type: 'GuestYAMLSocialLinks',
        resolve(source) {
          return source.social_links
        },
      },
      episodes: {
        type: '[EpisodeYAML!]!',
        resolve(source, _args, context) {
          return context.nodeModel
            .getAllNodes({ type: 'EpisodeYAML' })
            .filter(episodeYAML =>
              episodeYAML.guests.includes(source.fields.slug)
            )
        },
      },
    },
  })
  const guestYAMLSocialLinksTypeDef = schema.buildObjectType({
    name: 'GuestYAMLSocialLinks',
    fields: {
      twitter: 'String',
      github: 'String',
      telegram: 'String',
      youtube: 'String',
    },
  })

  // EpisodeYAML
  const episodeYAMLTypeDef = schema.buildObjectType({
    name: 'EpisodeYAML',
    interfaces: ['Node'],
    extensions: {
      infer: false,
    },
    fields: {
      title: 'String!',
      spoiler: 'String!',
      type: {
        type: 'EpisodeYAMLType!',
        resolve(source) {
          return source.fields.type
        },
      },
      season: {
        type: 'Int',
        resolve(source) {
          return source.fields.season
        },
      },
      seasonPersianOrdinal: {
        type: 'String',
        resolve(source) {
          return (
            source.fields.season &&
            utils.numberToPersianOrdinal(source.fields.season.toString())
          )
        },
      },
      episode: {
        type: 'Int!',
        resolve(source, _args, context) {
          const index = context.nodeModel
            .getAllNodes({ type: 'EpisodeYAML' })
            .filter(
              episodeYAML =>
                episodeYAML.fields.type === source.fields.type &&
                episodeYAML.fields.season === source.fields.season
            )
            .sort(
              (a, b) =>
                new Date(a.fields.scheduledAt).getTime() -
                new Date(b.fields.scheduledAt).getTime()
            )
            .findIndex(
              episodeYAML => episodeYAML.fields.slug === source.fields.slug
            )

          return index + 1
        },
      },
      slug: {
        type: 'String!',
        resolve(source) {
          return source.fields.slug
        },
      },
      scheduledAt: {
        type: 'Date!',
        resolve(source) {
          return source.fields.scheduledAt
        },
        // There is an issue with sorting based on custom fields
        // which are using dateformat extension.
        // https://github.com/gatsbyjs/gatsby/issues/20328
        // extensions: {
        //   dateformat: {},
        // },
      },
      isPublished: {
        type: 'Boolean!',
        resolve(source) {
          return new Date() > new Date(source.fields.scheduledAt)
        },
      },
      cover: {
        type: 'File!',
        extensions: {
          fileByRelativePath: {},
        },
      },
      guests: {
        type: '[GuestYAML!]!',
        resolve(source, _args, context) {
          return context.nodeModel
            .getAllNodes({ type: 'GuestYAML' })
            .filter(guestYAML => source.guests.includes(guestYAML.fields.slug))
        },
      },
      platforms: 'EpisodeYAMLPlatforms!',
      references: 'EpisodeYAMLReferences',
    },
  })
  const episodeYAMLTypeEnumDef = schema.buildEnumType({
    name: 'EpisodeYAMLType',
    values: {
      Live: { value: 0 },
      Meetup: { value: 1 },
    },
  })
  const episodeYAMLPlatformsTypeDef = schema.buildObjectType({
    name: 'EpisodeYAMLPlatforms',
    fields: {
      aparat: 'String',
      youtube: 'String!',
    },
  })
  const episodeYAMLReferencesTypeDef = schema.buildObjectType({
    name: 'EpisodeYAMLReferences',
    fields: {
      books: '[EpisodeYAMLBookReference!]!',
      videos: '[EpisodeYAMLVideoReference!]!',
      podcasts: '[EpisodeYAMLPodcastReference!]!',
      papers: '[EpisodeYAMLPaperReference!]!',
    },
  })
  const episodeYAMLBookReferenceTypeDef = schema.buildObjectType({
    name: 'EpisodeYAMLBookReference',
    fields: {
      name: 'String!',
      author: 'String!',
      image: {
        type: 'File!',
        extensions: {
          fileByRelativePath: {},
        },
      },
      url: 'String!',
    },
  })
  const episodeYAMLVideoReferenceTypeDef = schema.buildObjectType({
    name: 'EpisodeYAMLVideoReference',
    fields: {
      title: 'String!',
      image: {
        type: 'File!',
        extensions: {
          fileByRelativePath: {},
        },
      },
      url: 'String!',
    },
  })
  const episodeYAMLPodcastReferenceTypeDef = schema.buildObjectType({
    name: 'EpisodeYAMLPodcastReference',
    fields: {
      name: 'String!',
      image: {
        type: 'File!',
        extensions: {
          fileByRelativePath: {},
        },
      },
      url: 'String!',
    },
  })
  const episodeYAMLPaperReferenceTypeDef = schema.buildObjectType({
    name: 'EpisodeYAMLPaperReference',
    fields: {
      title: 'String!',
      spoiler: 'String!',
      url: 'String!',
    },
  })

  actions.createTypes([
    siteSiteMetadataTypeDef,
    siteSiteMetadataPlatformsTypeDef,
    guestYAMLTypeDef,
    guestYAMLSocialLinksTypeDef,
    episodeYAMLTypeDef,
    episodeYAMLTypeEnumDef,
    episodeYAMLPlatformsTypeDef,
    episodeYAMLReferencesTypeDef,
    episodeYAMLBookReferenceTypeDef,
    episodeYAMLVideoReferenceTypeDef,
    episodeYAMLPodcastReferenceTypeDef,
    episodeYAMLPaperReferenceTypeDef,
  ])
}

function onCreateWebpackConfig({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  })
}

module.exports = {
  onCreateNode,
  createSchemaCustomization,
  onCreateWebpackConfig,
}
