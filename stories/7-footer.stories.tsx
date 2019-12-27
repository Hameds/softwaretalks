import React from 'react'
import { storiesOf } from '@storybook/react'

import * as Footer from '~/components/footer'

storiesOf('Footer', module).add('Default', story)

function story() {
  return <Footer.component licenseSpecLink="https://XXX" />
}
