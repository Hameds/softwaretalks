import React from 'react'
import Image, { GatsbyImageProps } from 'gatsby-image'

const classNames = {
  block: 'c-avatar',
}

const aspectRatios = {
  large: 300 / 460,
}

type Props = {
  fluid: GatsbyImageProps['fluid']
}

export function component({ fluid }: Props) {
  return (
    <Image
      fluid={{ ...fluid!, aspectRatio: aspectRatios.large }}
      className={classNames.block}
    />
  )
}
