import React from 'react'

import * as Section from '~/components/section'
import * as Episode from '~/components/episode'

type Props = Omit<Episode.Preview.Props, 'variant'>

export function component(props: Props) {
  return (
    <Section.component headline="آخرین برنامه پخش شده">
      <Episode.Preview.vertical {...props} />
    </Section.component>
  )
}
