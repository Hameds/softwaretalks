import React from 'react'
import { storiesOf } from '@storybook/react'

import { backgrounds } from './utils'
import * as Header from '~/components/header'

storiesOf('Header', module)
  .add('Primary', primary, {
    backgrounds: [{ ...backgrounds.primary, default: true }],
  })
  .add('gray', gray, {
    backgrounds: [{ ...backgrounds.gray1, default: true }],
  })

function gray() {
  return (
    <Header.component
      variant={Header.Variant.Gray}
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
