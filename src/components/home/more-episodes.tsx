import React from 'react'
import cc from 'classcat'

import * as Section from '~/components/section'
import * as Episode from '~/components/episode'
import * as Heading from '~/components/heading'
import * as Link from '~/components/link'
import { useLastPublishedEpisodes } from '~/hooks'

const classNames = {
  block: 'c-more-episodes',
  elements: {
    headline: 'c-more-episodes__headline',
    content: 'c-more-episodes__content',
    episodesLink: 'c-more-episodes__episodes-link',
  },
}

export function component() {
  const lastPublishedEpisodes = useLastPublishedEpisodes()

  return (
    <Section.component>
      <div className={classNames.block}>
        <div className={classNames.elements.headline}>
          <Heading.H5 as="h3">ویدئو‌های بیشتر</Heading.H5>
          <Link.component
            to="/episodes"
            className={{ block: classNames.elements.episodesLink }}
          >
            آرشیو برنامه‌ها
          </Link.component>
        </div>
        <div className={classNames.elements.content}>
          {lastPublishedEpisodes.map(episode => (
            <Episode.Minimal.component {...episode} />
          ))}
        </div>
      </div>
    </Section.component>
  )
}
