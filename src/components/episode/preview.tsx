import React from 'react'
import { GatsbyImageProps } from 'gatsby-image'

import * as Episode from '~/components/episode'
import * as EpisodeCover from '~/components/episode-cover'
import * as EpisodeTypeSign from '~/components/episode-type-sign'
import * as EpisodeDetail from '~/components/episode-detail'
import * as Heading from '~/components/heading'
import * as Paragraph from '~/components/paragraph'
import * as Icon from '~/components/icon'
import { defineDisplayName } from '~/utils'

export enum Variant {
  Vertical,
  Horizontal,
}

const classNames = {
  variants: {
    [Variant.Vertical]: 'c-episode-preview--vertical',
    [Variant.Horizontal]: 'c-episode-preview--horizontal',
  },
  elements: {
    cover: 'c-episode-preview__cover',
    typeSign: 'c-episode-preview__type-sign',
    content: 'c-episode-preview__content',
    information: 'c-episode-preview__information',
    title: 'c-episode-preview__title',
    seasonDetail: 'c-episode-preview__season-detail',
    seasonDetailDivider: 'c-episode-preview__season-detail-divider',
    seasonDetailValue: 'c-episode-preview__season-detail-value',
    guestsDetail: 'c-episode-preview__guests-detail',
    spoiler: 'c-episode-preview__spoiler',
    scheduledTime: 'c-episode-preview__scheduled-time',
    scheduledTimeIcon: 'c-episode-preview__scheduled-time-icon',
  },
}

type Props = {
  variant: Variant
  cover: GatsbyImageProps['fluid']
  type: Episode.Type
  title: string
  season?: string | null
  episode: number
  scheduledAt: Date
  guests: string[]
  spoiler: string
}

export function component({
  variant,
  cover,
  type,
  title,
  season,
  episode,
  scheduledAt,
  guests,
  spoiler,
}: Props) {
  return (
    <div className={classNames.variants[variant]}>
      <EpisodeCover.component
        fluid={cover}
        className={{ block: classNames.elements.cover }}
      />
      <div className={classNames.elements.content}>
        <EpisodeTypeSign.component
          type={type}
          className={classNames.elements.typeSign}
        />
        <div className={classNames.elements.information}>
          <Heading.H5 as="h3" className={classNames.elements.title}>
            {title}
          </Heading.H5>
          <EpisodeDetail.component
            name={[
              season && `فصل ${season}`,
              `اپیزود ${episode.toLocaleString('fa-IR')}`,
            ]}
            value={scheduledAt.toLocaleDateString('fa-IR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            className={{
              block: classNames.elements.seasonDetail,
              divider: classNames.elements.seasonDetailDivider,
              value: classNames.elements.seasonDetailValue,
            }}
          />
          <EpisodeDetail.component
            name={'مهمانان'}
            value={guests}
            className={{ block: classNames.elements.guestsDetail }}
          />
          <Paragraph.component className={classNames.elements.spoiler}>
            {spoiler}
          </Paragraph.component>
        </div>
        <div className={classNames.elements.scheduledTime}>
          {scheduledAt.toLocaleTimeString('fa-IR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
          <Icon.time
            size={Icon.Size.S24}
            className={classNames.elements.scheduledTimeIcon}
          />
        </div>
      </div>
    </div>
  )
}

function createVariantComponent(variant: Variant) {
  function variantComponent(props: Omit<Props, 'variant'>) {
    return component({ ...props, variant })
  }

  return variantComponent
}

export const vertical = createVariantComponent(Variant.Vertical)
export const horizontal = createVariantComponent(Variant.Horizontal)

defineDisplayName('Episode.Preview', { component, vertical, horizontal })
