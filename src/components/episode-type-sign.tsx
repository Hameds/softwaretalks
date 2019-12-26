import React from 'react'
import cc from 'classcat'

import * as Episode from './episode'
import { defineDisplayName } from '../utils'

type Props =
  | { type: Episode.Type; className?: string }
  | { label: string; className?: string }

export const classNames = {
  block: 'c-episode-type-sign',
}

export const typeToLabelMap = {
  [Episode.Type.Live]: 'برنامـــــه نویســی زنـــــــــده',
  [Episode.Type.Meetup]: 'دورهمی آنلایـــــن',
}

export function component(props: Props) {
  const className = cc([classNames.block, props.className])
  const label = 'label' in props ? props.label : typeToLabelMap[props.type]

  return <div className={className}>{label}</div>
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
