import React from 'react'

import { Section, Episode } from '~/components'

const classNames = {
  elements: {
    item: 'c-episodes-index__item',
  },
}

type Props = {
  episodes: Omit<Episode.Preview.Props, 'variant'>[]
}

export function component({ episodes }: Props) {
  return (
    <Section.component terminal>
      <ul className="l-list">
        {episodes.map(episode => (
          <li className={classNames.elements.item}>
            <Episode.Preview.horizontal {...episode} />
          </li>
        ))}
      </ul>
    </Section.component>
  )
}
