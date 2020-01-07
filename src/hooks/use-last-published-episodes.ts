import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImageProps } from 'gatsby-image'

import { LastPublishedEpisodesQuery } from '../../types/generated/graphql'

const lastPublishedEpisodesQuery = graphql`
  query LastPublishedEpisodes {
    allEpisodeYaml(
      sort: { fields: scheduledAt, order: DESC }
      filter: { isPublished: { eq: true } }
      limit: 4
      skip: 1
    ) {
      edges {
        node {
          title
          slug
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

export function useLastPublishedEpisodes() {
  return useStaticQuery<LastPublishedEpisodesQuery>(
    lastPublishedEpisodesQuery
  ).allEpisodeYaml.edges.map(({ node }) => ({
    ...node,
    cover: node.cover.childImageSharp!.fluid as GatsbyImageProps['fluid'],
  }))
}
