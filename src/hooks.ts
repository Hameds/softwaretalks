import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImageProps } from 'gatsby-image'

import { Episode } from './components'

import { LastPublishedEpisodeQuery } from '../types/generated/graphql'

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
  const {
    title,
    type,
    spoiler,
    season,
    episode,
    scheduledAt,
    cover,
    guests,
  } = useStaticQuery<LastPublishedEpisodeQuery>(
    lastPublishedEpisodeQuery
  ).allEpisodeYaml.edges[0].node

  return {
    title,
    spoiler,
    season,
    episode,
    scheduledAt: new Date(scheduledAt),
    type: Episode.Type[type],
    cover: cover.childImageSharp!.fluid as GatsbyImageProps['fluid'],
    guests: guests.map(({ fullName }) => fullName),
  }
}
