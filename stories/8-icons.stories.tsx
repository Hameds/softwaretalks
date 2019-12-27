import React from 'react'
import isPlainObject from 'is-plain-object'
import { storiesOf } from '@storybook/react'

import { backgrounds } from './utils'
import * as Icon from '~/components/icon'

storiesOf('Icons', module).add('Default', story, {
  backgrounds: [{ ...backgrounds.gray1, default: true }],
})

function valuesDeep<TValue>(object: { [key: string]: TValue }): TValue[] {
  return Object.values<TValue>(object).flatMap(value =>
    typeof value === 'object' ? valuesDeep(value as any) : [value]
  )
}

function story() {
  return (
    <div className="icons">{valuesDeep(Icon).map(React.createElement)}</div>
  )
}
