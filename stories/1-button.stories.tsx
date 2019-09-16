import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

const { Button } = require('@storybook/react/demo')

storiesOf('Button', module)
  .add('Text', text)
  .add('Emoji', emoji)

function text() {
  return <Button onClick={action('clicked')}>Hello Button</Button>
}

function emoji() {
  return (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  )
}
