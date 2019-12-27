import React from 'react'
import cc from 'classcat'

import * as Heading from './heading'
import { castArray, isString } from '~/utils'

const classNames = {
  block: 'c-episode-detail',
  elements: {
    divider: 'c-episode-detail__divider',
    value: 'c-episode-detail__value',
  },
}

type Props = {
  name: string | (string | null | undefined)[]
  value: string | (string | null | undefined)[]
  className: {
    block?: string
    name?: string
    divider?: string
    value?: string
  }
}

export function component({ name, value, className }: Props) {
  const blockClassName = cc([classNames.block, className.block])
  const dividerClassName = cc([classNames.elements.divider, className.divider])
  const valueClassName = cc([classNames.elements.value, className.value])

  return (
    <Heading.H6 as="h4" className={blockClassName}>
      <span className={className.name}>
        {castArray(name)
          .filter(isString)
          .join(' ∙ ')}
      </span>
      <span className={dividerClassName}> | </span>
      <span className={valueClassName}>
        {castArray(value)
          .filter(isString)
          .join(' ∙ ')}
      </span>
    </Heading.H6>
  )
}

component.defaultProps = {
  className: {},
}
