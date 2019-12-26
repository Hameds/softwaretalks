const utils = require('./scripts/utils')
const moment = require('moment-jalaali')

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
        resolve(source, _args, context) {
          const file = context.nodeModel.getNodeById({
            id: source.parent,
            type: 'File',
          })

          return utils.getGuestSlugFromFile(file)
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
            .filter(episodeYAML => {
              const file = context.nodeModel.getNodeById({
                id: source.parent,
                type: 'File',
              })

              return episodeYAML.guests.includes(
                utils.getGuestSlugFromFile(file)
              )
            })
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
        resolve(source, _args, context) {
          const file = context.nodeModel.getNodeById({
            id: source.parent,
            type: 'File',
          })

          return utils.getEpisodeTypeFromFile(file)
        },
      },
      season: {
        type: 'Int',
        resolve(source, _args, context) {
          const file = context.nodeModel.getNodeById({
            id: source.parent,
            type: 'File',
          })

          return utils.getEpisodeSeasonFromFile(file)
        },
      },
      slug: {
        type: 'String!',
        resolve(source, _args, context) {
          const file = context.nodeModel.getNodeById({
            id: source.parent,
            type: 'File',
          })

          return utils.getEpisodeSlugFromFile(file)
        },
      },
      scheduledAt: {
        type: 'Date!',
        resolve(source) {
          return moment(source.scheduled_at, 'jYYYY/jM/jD HH:mm')
            .utc()
            .format('YYYY-MM-DDTHH:mm:ssZ')
        },
        extensions: {
          dateformat: {},
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
            .filter(guestYAML => {
              const file = context.nodeModel.getNodeById({
                id: guestYAML.parent,
                type: 'File',
              })

              return source.guests.includes(utils.getGuestSlugFromFile(file))
            })
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

module.exports = { createSchemaCustomization }
