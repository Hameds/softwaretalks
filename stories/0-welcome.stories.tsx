import React from 'react'
import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'

const { Welcome } = require('@storybook/react/demo')

storiesOf('Welcome', module).add('To Storybook', toStorybook)

function toStorybook() {
  return <Welcome showApp={linkTo('Button')} />
}
