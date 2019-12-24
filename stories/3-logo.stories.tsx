import React from 'react'
import { storiesOf } from '@storybook/react'

import * as Preview from '../src/components/preview'
import * as Logo from '../src/components/logo'

storiesOf('Logo', module)
  .add('Primary', primary)
  .add('Black', black)

function primary() {
  return (
    <Preview.component>
      <Logo.primary />
      <Logo.primary inverse />
    </Preview.component>
  )
}

function black() {
  return (
    <Preview.component>
      <Logo.black />
      <Logo.black inverse />
    </Preview.component>
  )
}
