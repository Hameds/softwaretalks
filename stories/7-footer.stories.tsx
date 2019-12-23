import React from 'react'
import { storiesOf } from '@storybook/react'

import { Footer } from '../src/components'

storiesOf('Footer', module).add('Default', story)

function story() {
  return <Footer.component licenseSpecLink="https://XXX" />
}
