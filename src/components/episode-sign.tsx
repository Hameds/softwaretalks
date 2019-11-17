import React from 'react'
import { defineDisplayName } from '../utils'

type Props = {
  label: string
}

export const classNames = {
  block: 'c-episode-sign',
}

export function component({ label }: Props) {
  return <div className={classNames.block}>{label}</div>
}

function createLabelComponent(label: string) {
  function labelComponent() {
    return component({ label })
  }

  return labelComponent
}

export const live = createLabelComponent('برنامـــــه نویســی زنـــــــــده')
export const meetup = createLabelComponent('دورهمی آنلایـــــن')

defineDisplayName('EpisodeSign', { component, live, meetup })
