import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImageProps } from 'gatsby-image'

import { Page, Section, Episode } from '~/components'
import '~/scss/episode.scss'

import { EpisodeQuery } from '../../types/generated/graphql'

const classNames = {
  block: 'c-episode',
}

type Props = {
  data: EpisodeQuery
}

function component({ data }: Props) {
  const episode = {
    ...data.episode!,
    scheduledAt: new Date(data.episode!.scheduledAt),
    type: Episode.Type[data.episode!.type],
    cover: data.episode!.cover.childImageSharp!
      .fluid as GatsbyImageProps['fluid'],
    guests: data.episode!.guests.map(({ fullName }) => fullName),
  }

  return (
    <Page.gray className={{ main: classNames.block }}>
      <Section.component>
        <Episode.Preview.vertical {...episode} />
      </Section.component>
    </Page.gray>
  )
}

export const query = graphql`
  query Episode($slug: String!) {
    episode: episodeYaml(slug: { eq: $slug }) {
      episode
      season: seasonPersianOrdinal
      scheduledAt
      slug
      spoiler
      title
      type
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
`

export default component
