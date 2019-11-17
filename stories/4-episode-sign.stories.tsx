import React from 'react'
import { storiesOf } from '@storybook/react'

import { EpisodeSign } from '../src/components'

storiesOf('EpisodeSign', module)
  .add('Live', live)
  .add('Meetup', meetup)

function live() {
  return <EpisodeSign.live />
}

function meetup() {
  return <EpisodeSign.meetup />
}
