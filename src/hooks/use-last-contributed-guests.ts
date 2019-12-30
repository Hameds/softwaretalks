import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImageProps } from 'gatsby-image'

import { LastContributedGuestsQuery } from '../../types/generated/graphql'

const lastContributedGuestsQuery = graphql`
  query LastContributedGuests {
    allGuestYaml(
      sort: { fields: episodes___scheduledAt, order: DESC }
      filter: { episodes: { elemMatch: { isPublished: { eq: true } } } }
      limit: 4
    ) {
      edges {
        node {
          fullName
          bio
          avatar {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 460, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export function useLastContributedGuests() {
  const data = useStaticQuery<LastContributedGuestsQuery>(
    lastContributedGuestsQuery
  )

  return data.allGuestYaml.edges.map(({ node }) => ({
    ...node,
    avatar: node.avatar.childImageSharp!.fluid as GatsbyImageProps['fluid'],
  }))
}
