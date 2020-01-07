import React from 'react'
import { GatsbyImageProps } from 'gatsby-image'

import { EpisodeCover, Heading, Link } from '~/components'

const classNames = {
  block: 'c-episode-minimal',
  elements: {
    coverIcon: 'c-episode-minimal__cover-icon',
    title: 'c-episode-minimal__title',
  },
}

export type Props = {
  cover: GatsbyImageProps['fluid']
  slug: string
  title: string
}

export function component({ slug, cover, title }: Props) {
  return (
    <Link.Internal.component to={slug} className={{ block: classNames.block }}>
      <EpisodeCover.component
        fluid={cover}
        className={{ icon: classNames.elements.coverIcon }}
      />
      <Heading.H6 as="h4" className={classNames.elements.title}>
        {title}
      </Heading.H6>
    </Link.Internal.component>
  )
}
