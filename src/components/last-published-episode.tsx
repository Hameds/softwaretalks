import React from 'react'
import cc from 'classcat'

import * as Section from '~/components/section'
import * as Episode from '~/components/episode'

const classNames = {
  block: 'c-last-published-episode',
}

type Props = Omit<Episode.Preview.Props, 'variant'> & {
  className?: string
}

export function component({ className: customClassName, ...episode }: Props) {
  const blockClassName = cc([classNames.block, customClassName])

  return (
    <Section.component headline="آخرین برنامه پخش شده">
      <div className={blockClassName}>
        <Episode.Preview.vertical {...episode} />
      </div>
    </Section.component>
  )
}
