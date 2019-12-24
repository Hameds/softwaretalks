import React from 'react'
import { storiesOf } from '@storybook/react'

import * as EpisodeSign from '../src/components/episode-sign'

storiesOf('EpisodeSign', module)
  .add('Live', live)
  .add('Meetup', meetup)

function live() {
  return <EpisodeSign.live />
}

function meetup() {
  return <EpisodeSign.meetup />
}
