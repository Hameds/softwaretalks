import React from 'react'
import Image, { GatsbyImageProps } from 'gatsby-image'
import { graphql } from 'gatsby'

import {
  Page,
  Section,
  Episode,
  Heading,
  Icon,
  Reference,
  Paragraph,
} from '~/components'
import '~/scss/episode.scss'

import { EpisodeQuery } from '../../types/generated/graphql'

const classNames = {
  block: 'c-episode',
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
    cover: data.episode!.cover.childImageSharp!
      .fluid as GatsbyImageProps['fluid'],
    guests: data.episode!.guests.map(({ fullName }) => fullName),
  }

  return (
    <Page.gray className={{ main: classNames.block }}>
      <Section.component>
        <Episode.Preview.vertical {...episode} />
      </Section.component>
      <Section.component>
        <Heading.H3 as="h2">منابع معرفی شده</Heading.H3>
        <Reference.component headline="کتاب" icon={Icon.book}>
          <ul className="l-list c-episode__books">
            {episode.references?.books.map(({ name, author, url, image }) => (
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={url}
                  title={`${name} - ${author}`}
                >
                  <Image
                    className="c-episode__book"
                    fluid={{
                      ...image.childImageSharp?.fluid,
                      aspectRatio: aspectRatios.book,
                    }}
                    title={`${name} - ${author}`}
                    alt={`${name} - ${author}`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reference.component>
        <Reference.component headline="ویدئو" icon={Icon.video}>
          <ul className="l-list c-episode__videos">
            {episode.references?.videos.map(({ title, image }) => (
              <li>
                <Episode.Minimal.component
                  title={title}
                  cover={image.childImageSharp?.fluid}
                />
              </li>
            ))}
          </ul>
        </Reference.component>
        <Reference.component headline="پادکست" icon={Icon.microphone}>
          <ul className="l-list c-episode__podcasts">
            {episode.references?.podcasts.map(({ url, image, name }) => (
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="c-episode__podcast"
                  href={url}
                  title={name}
                >
                  <Image
                    className="c-episode__podcast-image"
                    fluid={{
                      ...image.childImageSharp?.fluid,
                      aspectRatio: aspectRatios.podcast,
                    }}
                    title={name}
                    alt={name}
                  />
                  <Heading.H6 as="h4" className="c-episode__podcast-name">
                    {name}
                  </Heading.H6>
                </a>
              </li>
            ))}
          </ul>
        </Reference.component>
        <Reference.component headline="لینک" icon={Icon.Link.chain}>
          <ul className="l-list c-episode__papers">
            {episode.references?.papers.map(({ title, url, spoiler }) => (
              <li>
                <Heading.H6 as="h4" className="c-episode__paper-title">
                  {title}
                </Heading.H6>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="o-text o-text--down-1 c-episode__paper-url"
                  href={url}
                >
                  {url}
                </a>
                <Paragraph.component>{spoiler}</Paragraph.component>
              </li>
            ))}
          </ul>
        </Reference.component>
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
