import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImageProps } from 'gatsby-image'

import { Episode } from '~/components'
import { isNil } from '~/utils'

import { LastPublishedEpisodeQuery } from '../../types/generated/graphql'

const lastPublishedEpisodeQuery = graphql`
  query LastPublishedEpisode {
    allEpisodeYaml(
      sort: { fields: scheduledAt, order: DESC }
      filter: { isPublished: { eq: true } }
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
          guests {
            fullName
          }
          cover {
            childImageSharp {
              fluid(maxWidth: 1260, maxHeight: 680, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
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
    cover: edge.node.cover.childImageSharp!.fluid as GatsbyImageProps['fluid'],
    guests: edge.node.guests.map(({ fullName }) => fullName),
  }
}
