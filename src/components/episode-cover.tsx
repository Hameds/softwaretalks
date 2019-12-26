import React from 'react'
import Image, { GatsbyImageProps } from 'gatsby-image'
import cc from 'classcat'

import * as Icon from './icon'

const classNames = {
  block: 'c-episode-cover',
  elements: {
    icon: 'c-episode-cover__icon',
    image: 'c-episode-cover__image',
  },
}

type Props = Omit<GatsbyImageProps, 'className'> & {
  className: {
    block?: string
    image?: string
    icon?: string
  }
}

export function component({ className, ...props }: Props) {
  const blockClassName = cc([classNames.block, className.block])
  const imageClassName = cc([classNames.elements.image, className.block])
  const iconClassName = cc([classNames.elements.icon, className.icon])

  return (
    <div className={blockClassName}>
      <Image {...props} className={imageClassName} />
      <Icon.play className={iconClassName} />
    </div>
  )
}

component.defaultProps = {
  className: {},
}
