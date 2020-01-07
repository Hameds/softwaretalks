import React from 'react'

import { Section, Episode, Heading, Link, Button } from '~/components'

const classNames = {
  block: 'c-more-episodes',
  elements: {
    headline: 'c-more-episodes__headline',
    content: 'c-more-episodes__content',
    episodesLink: 'c-more-episodes__episodes-link',
  },
}

type Props = {
  episodes: Episode.Minimal.Props[]
}

export function component({ episodes }: Props) {
  return (
    <Section.component>
      <div className={classNames.block}>
        <div className={classNames.elements.headline}>
          <Heading.H5 as="h3">ویدئو‌های بیشتر</Heading.H5>
          <Button.text
            as={Link.Internal.component}
            color={Button.Color.Primary}
            className={classNames.elements.episodesLink}
            to="/episodes"
          >
            آرشیو برنامه‌ها
          </Button.text>
        </div>
        <div className={classNames.elements.content}>
          {episodes.map(episode => (
            <Episode.Minimal.component {...episode} />
          ))}
        </div>
      </div>
    </Section.component>
  )
}
