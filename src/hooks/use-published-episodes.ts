import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImageProps } from 'gatsby-image'

import { Episode } from '~/components'

import { PublishedEpisodesQuery } from '../../types/generated/graphql'

const publishedEpisodesQuery = graphql`
  query PublishedEpisodes {
    allEpisodeYaml(
      sort: { fields: scheduledAt, order: DESC }
      filter: { isPublished: { eq: true }, platforms: { aparat: { ne: null } } }
      skip: 1
    ) {
      edges {
        node {
          title
          type
          spoiler
          season: seasonPersianOrdinal
          episode
          slug
          scheduledAt
          platforms {
            aparat
          }
          guests {
            fullName
          }
        }
      }
    }
  }
`

export function usePublishedEpisodes() {
  return useStaticQuery<PublishedEpisodesQuery>(
    publishedEpisodesQuery
  ).allEpisodeYaml.edges.map(({ node }) => ({
    ...node,
    scheduledAt: new Date(node.scheduledAt),
    type: Episode.Type[node.type],
    guests: node.guests.map(({ fullName }) => fullName),
    platforms: {
      ...node.platforms,
      aparat: node.platforms.aparat!,
    },
  }))
}
