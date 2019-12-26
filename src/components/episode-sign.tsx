import React from 'react'

import * as Episode from './episode'
import { defineDisplayName } from '../utils'

type Props = { type: Episode.Type } | { label: string }

export const classNames = {
  block: 'c-episode-sign',
}

export const typeToLabelMap = {
  [Episode.Type.Live]: 'برنامـــــه نویســی زنـــــــــده',
  [Episode.Type.Meetup]: 'دورهمی آنلایـــــن',
}

export function component(props: Props) {
  const label = 'label' in props ? props.label : typeToLabelMap[props.type]

  return <div className={classNames.block}>{label}</div>
}

function createTypeComponent(type: Episode.Type) {
  function typeComponent() {
    return component({ type })
  }

  return typeComponent
}

export const live = createTypeComponent(Episode.Type.Live)
export const meetup = createTypeComponent(Episode.Type.Meetup)

defineDisplayName('EpisodeSign', { component, live, meetup })
