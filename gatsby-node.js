const moment = require('moment-jalaali')
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
        getter(node, _context, _actions, getNode) {
          return moment(node.scheduled_at, 'jYYYY/jM/jD HH:mm')
            .utc()
            .format('YYYY-MM-DDTHH:mm:ssZ')
        },
      },
    ],
  },
]

function onCreateNode({ node, actions, getNode }) {
  attachFields(node, actions, getNode, descriptor)
}

function createSchemaCustomization({ actions, schema }) {
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
        extensions: {
          dateformat: {},
        },
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
      references: 'EpisodeYAMLReferences',
    },
  })
  const episodeYAMLTypeEnumDef = schema.buildEnumType({
    name: 'EpisodeYAMLType',
    values: {
      LIVE: { value: 0 },
      MEETUP: { value: 1 },
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
    guestYAMLTypeDef,
    guestYAMLSocialLinksTypeDef,
    episodeYAMLTypeDef,
    episodeYAMLTypeEnumDef,
    episodeYAMLReferencesTypeDef,
    episodeYAMLBookReferenceTypeDef,
    episodeYAMLVideoReferenceTypeDef,
    episodeYAMLPodcastReferenceTypeDef,
    episodeYAMLPaperReferenceTypeDef,
  ])
}

module.exports = { onCreateNode, createSchemaCustomization }
