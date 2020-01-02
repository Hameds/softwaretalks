import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImageProps } from 'gatsby-image'

import { Episode } from '~/components'

import { PublishedEpisodesQuery } from '../../types/generated/graphql'

const publishedEpisodesQuery = graphql`
  query PublishedEpisodes {
    allEpisodeYaml(
      sort: { fields: scheduledAt, order: DESC }
      filter: { isPublished: { eq: true } }
      skip: 1
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
              fluid(maxWidth: 920, maxHeight: 520, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
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
    cover: node.cover.childImageSharp!.fluid as GatsbyImageProps['fluid'],
    guests: node.guests.map(({ fullName }) => fullName),
  }))
}
