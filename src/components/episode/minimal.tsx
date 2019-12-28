import React from 'react'
import { GatsbyImageProps } from 'gatsby-image'

import * as EpisodeCover from '../episode-cover'
import * as Heading from '../heading'

const classNames = {
  block: 'c-episode-minimal',
  elements: {
    coverIcon: 'c-episode-minimal__cover-icon',
    title: 'c-episode-minimal__title',
  },
}

type Props = {
  cover: GatsbyImageProps['fluid']
  title: string
}

export function component({ cover, title }: Props) {
  return (
    <div className={classNames.block}>
      <EpisodeCover.component
        fluid={cover}
        className={{ icon: classNames.elements.coverIcon }}
      />
      <Heading.H6 as="h4" className={classNames.elements.title}>
        {title}
      </Heading.H6>
    </div>
  )
}
