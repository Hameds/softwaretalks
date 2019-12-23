import React from 'react'
import { storiesOf } from '@storybook/react'

import { backgrounds } from './utils'
import { Header } from '../src/components'

storiesOf('Header', module)
  .add('White', white, {
    backgrounds: [{ ...backgrounds.primary, default: true }],
  })
  .add('Primary', primary, {
    backgrounds: [{ ...backgrounds.gray1, default: true }],
  })

function white() {
  return (
    <Header.component
      variant={Header.Variant.White}
      youtubeSocialLink="https://XXX"
    />
  )
}

function primary() {
  return (
    <Header.component
      variant={Header.Variant.Primary}
      youtubeSocialLink="https://XXX"
    />
  )
}
