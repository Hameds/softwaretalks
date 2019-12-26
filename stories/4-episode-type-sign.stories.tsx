import React from 'react'
import { storiesOf } from '@storybook/react'

import * as EpisodeTypeSign from './components/episode-type-sign'

storiesOf('EpisodeTypeSign', module)
  .add('Live', live)
  .add('Meetup', meetup)

function live() {
  return <EpisodeTypeSign.live />
}

function meetup() {
  return <EpisodeTypeSign.meetup />
}
