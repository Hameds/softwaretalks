import React from 'react'
import cc from 'classcat'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'

import {
  Page,
  Section,
  Episode,
  Heading,
  Icon,
  Reference,
  Paragraph,
  Link,
} from '~/components'
import '~/scss/episode.scss'

import { EpisodeQuery } from '../../types/generated/graphql'

const classNames = {
  block: 'c-episode',
  elements: {
    books: 'c-episode__books',
    book: 'c-episode__book',
    videos: 'c-episode__videos',
    podcasts: 'c-episode__podcasts',
    podcast: 'c-episode__podcast',
    podcastImage: 'c-episode__podcast-image',
    podcastName: 'c-episode__podcast-name',
    papers: 'c-episode__papers',
    paperTitle: 'c-episode__paper-title',
    paperURL: 'c-episode__paper-url',
  },
}

const aspectRatios = {
  book: 300 / 450,
  video: 400 / 230,
  podcast: 1,
}

type Props = {
  data: EpisodeQuery
}

function component({ data }: Props) {
  const episode = {
    ...data.episode!,
    scheduledAt: new Date(data.episode!.scheduledAt),
    type: Episode.Type[data.episode!.type],
    guests: data.episode!.guests.map(({ fullName }) => fullName),
    platforms: {
      ...data.episode!.platforms,
      aparat: data.episode!.platforms.aparat!,
    },
  }

  const booksClassName = cc(['l-list', classNames.elements.books])
  const videosClassName = cc(['l-list', classNames.elements.videos])
  const podcastsClassName = cc(['l-list', classNames.elements.podcasts])
  const papersClassName = cc(['l-list', classNames.elements.papers])
  const paperURLClassName = cc([
    'o-text o-text--down-1',
    classNames.elements.paperURL,
  ])

  const books = episode.references?.books.map(
    ({ name, author, url, image }) => {
      const title = `${name} - ${author}`

      return (
        <li>
          <Link.External.component href={url} title={title}>
            <Image
              className={classNames.elements.book}
              fluid={{
                ...image.childImageSharp?.fluid,
                aspectRatio: aspectRatios.book,
              }}
              title={title}
              alt={title}
            />
          </Link.External.component>
        </li>
      )
    }
  )
  const videos = episode.references?.videos.map(({ title, image }) => (
    <li>
      <Episode.Minimal.component
        title={title}
        cover={image.childImageSharp?.fluid}
      />
    </li>
  ))
  const podcasts = episode.references?.podcasts.map(({ url, image, name }) => (
    <li>
      <Link.External.component
        className={classNames.elements.podcast}
        href={url}
        title={name}
      >
        <Image
          className={classNames.elements.podcastImage}
          fluid={{
            ...image.childImageSharp?.fluid,
            aspectRatio: aspectRatios.podcast,
          }}
          title={name}
          alt={name}
        />
        <Heading.H6 as="h4" className={classNames.elements.podcastName}>
          {name}
        </Heading.H6>
      </Link.External.component>
    </li>
  ))
  const papers = episode.references?.papers.map(({ title, url, spoiler }) => (
    <li>
      <Heading.H6 as="h4" className={classNames.elements.paperTitle}>
        {title}
      </Heading.H6>
      <Link.External.component
        className={paperURLClassName}
        title={title}
        href={url}
      >
        {url}
      </Link.External.component>
      <Paragraph.component>{spoiler}</Paragraph.component>
    </li>
  ))

  return (
    <Page.gray className={{ main: classNames.block }}>
      <Section.component>
        <Episode.Preview.vertical {...episode} />
      </Section.component>
      <Section.component>
        <Heading.H3 as="h2">منابع معرفی شده</Heading.H3>
        <Reference.component headline="کتاب" icon={Icon.book}>
          <ul className={booksClassName}>{books}</ul>
        </Reference.component>
        <Reference.component headline="ویدئو" icon={Icon.video}>
          <ul className={videosClassName}>{videos}</ul>
        </Reference.component>
        <Reference.component headline="پادکست" icon={Icon.microphone}>
          <ul className={podcastsClassName}>{podcasts}</ul>
        </Reference.component>
        <Reference.component headline="لینک" icon={Icon.Link.chain}>
          <ul className={papersClassName}>{papers}</ul>
        </Reference.component>
      </Section.component>
    </Page.gray>
  )
}

export const query = graphql`
  query Episode($slug: String!) {
    episode: episodeYaml(
      slug: { eq: $slug }
      platforms: { aparat: { ne: null } }
    ) {
      episode
      season: seasonPersianOrdinal
      scheduledAt
      spoiler
      title
      type
      platforms {
        aparat
      }
      guests {
        fullName
      }
      references {
        books {
          name
          url
          author
          image {
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 450, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        videos {
          title
          url
          image {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 230, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        podcasts {
          name
          url
          image {
            childImageSharp {
              fluid(maxWidth: 350, maxHeight: 350, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        papers {
          title
          spoiler
          url
        }
      }
    }
  }
`

export default component
