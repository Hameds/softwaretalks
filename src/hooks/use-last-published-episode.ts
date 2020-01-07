import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImageProps } from 'gatsby-image'

import { Episode } from '~/components'
import { isNil } from '~/utils'

import { LastPublishedEpisodeQuery } from '../../types/generated/graphql'

const lastPublishedEpisodeQuery = graphql`
  query LastPublishedEpisode {
    allEpisodeYaml(
      sort: { fields: scheduledAt, order: DESC }
      filter: { isPublished: { eq: true }, platforms: { aparat: { ne: null } } }
      limit: 1
    ) {
      edges {
        node {
          title
          type
          spoiler
          season: seasonPersianOrdinal
          episode
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

export function useLastPublishedEpisode() {
  const edge = useStaticQuery<LastPublishedEpisodeQuery>(
    lastPublishedEpisodeQuery
  ).allEpisodeYaml.edges[0]

  if (isNil(edge)) {
    return undefined
  }

  return {
    ...edge.node,
    scheduledAt: new Date(edge.node.scheduledAt),
    type: Episode.Type[edge.node.type],
    guests: edge.node.guests.map(({ fullName }) => fullName),
    platforms: {
      ...edge.node.platforms,
      aparat: edge.node.platforms.aparat!,
    },
  }
}
