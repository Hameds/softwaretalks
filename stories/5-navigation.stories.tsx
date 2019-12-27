import React from 'react'
import { storiesOf } from '@storybook/react'

import { backgrounds } from './utils'
import * as Navigation from '~/components/navigation'

storiesOf('Navigation', module)
  .add('Black', black)
  .add('White', white, {
    backgrounds: [{ ...backgrounds.primary, default: true }],
  })

function black() {
  return (
    <Navigation.black>
      <Navigation.item to="/home">لینک ۱</Navigation.item>
      <Navigation.item to="/archive">لینک ۲</Navigation.item>
      <Navigation.item to="/guests">لینک ۳</Navigation.item>
      <Navigation.item to="/about">لینک ۴</Navigation.item>
    </Navigation.black>
  )
}

function white() {
  return (
    <div>
      <Navigation.white>
        <Navigation.item to="/home">لینک ۱</Navigation.item>
        <Navigation.item to="/archive">لینک ۲</Navigation.item>
        <Navigation.item to="/guests">لینک ۳</Navigation.item>
        <Navigation.item to="/about">لینک ۴</Navigation.item>
      </Navigation.white>
    </div>
  )
}
