import React from 'react'
import { GatsbyImageProps } from 'gatsby-image'

import * as Avatar from '~/components/avatar'
import * as Heading from '~/components/heading'

export type Props = {
  fullName: string
  bio: string
  avatar: GatsbyImageProps['fluid']
}

export function component({ avatar, fullName, bio }: Props) {
  return (
    <div className="c-guest">
      <Avatar.component fluid={avatar} />
      <div className="c-guest__content">
        <Heading.H5 as="h3">{fullName}</Heading.H5>
        <Heading.H6 as="h4">{bio}</Heading.H6>
      </div>
    </div>
  )
}
