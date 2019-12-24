import React from 'react'

import * as Heading from '../heading'
import thoughtBubbleUrl from '../../assets/images/thought-bubble.svg'

const classNames = {
  block: 'c-hero',
  elements: {
    headline: 'c-hero__headline',
    image: 'c-hero__image',
  },
}

export function component() {
  return (
    <section className={classNames.block}>
      <Heading.H1 className={classNames.elements.headline}>
        <img
          className={classNames.elements.image}
          src={thoughtBubbleUrl}
          alt="Thought Bubble"
          title="Thought Bubble"
        />
        SoftwareTalks
      </Heading.H1>
    </section>
  )
}
