import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { Button, Preview } from '../src/components'

storiesOf('Button', module)
  .add('Ordinary', ordinary)
  .add('CTA', cta)
  .add('Ghost', ghost)
  .add('Link', link)
  .add('Text', text)

function ordinary() {
  return (
    <Preview.component>
      <Button.component>رنگ اصلی</Button.component>
      <Button.component disabled>غیر فعال</Button.component>
    </Preview.component>
  )
}

function cta() {
  return (
    <Preview.component>
      <Button.cta color={Button.Color.Primary}>رنگ اصلی</Button.cta>
      <Button.cta color={Button.Color.White}>رنگ سفید</Button.cta>
      <Button.cta disabled>غیر فعال</Button.cta>
    </Preview.component>
  )
}

function ghost() {
  return (
    <Preview.component>
      <Button.ghost>رنگ اصلی</Button.ghost>
      <Button.ghost disabled>غیر فعال</Button.ghost>
    </Preview.component>
  )
}

function link() {
  return (
    <Preview.component>
      <Button.link>رنگ اصلی</Button.link>
      <Button.link disabled>غیر فعال</Button.link>
    </Preview.component>
  )
}

function text() {
  return (
    <Preview.component>
      <Button.text color={Button.Color.Black}>رنگ سیاه</Button.text>
      <Button.text color={Button.Color.Primary}>رنگ اصلی</Button.text>
      <Button.text disabled>غیر فعال</Button.text>
    </Preview.component>
  )
}
