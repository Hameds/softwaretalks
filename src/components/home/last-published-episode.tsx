import React from 'react'

import * as Section from '../section'
import * as Episode from '../episode'
import { useLastPublishedEpisode } from '../../hooks'

export function component() {
  const lastPublishedEpisode = useLastPublishedEpisode()

  return (
    <Section.component headline="آخرین برنامه پخش شده">
      <Episode.Preview.vertical {...lastPublishedEpisode} />
    </Section.component>
  )
}
