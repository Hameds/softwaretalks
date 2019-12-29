import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImageProps } from 'gatsby-image'

import { Episode } from '~/components'
import { isNil } from '~/utils'

import { NextEpisodeQuery } from '../../types/generated/graphql'

const nextEpisodeQuery = graphql`
  query NextEpisode {
    allEpisodeYaml(
      sort: { fields: scheduledAt, order: ASC }
      filter: { isPublished: { eq: false } }
      limit: 1
    ) {
      edges {
        node {
          title
          type
          scheduledAt
          guests {
            fullName
          }
          platforms {
            youtube
          }
          cover {
            childImageSharp {
              fluid(maxWidth: 780, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export function useNextEpisode() {
  const edge = useStaticQuery<NextEpisodeQuery>(nextEpisodeQuery).allEpisodeYaml
    .edges[0]

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
