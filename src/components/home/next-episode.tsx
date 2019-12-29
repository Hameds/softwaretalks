import React from 'react'
import cc from 'classcat'
import Image, { GatsbyImageProps } from 'gatsby-image'

import * as Episode from '~/components/episode'
import * as Section from '~/components/section'
import * as EpisodeTypeSign from '~/components/episode-type-sign'
import * as EpisodeDetail from '~/components/episode-detail'
import * as Heading from '~/components/heading'
import * as Button from '~/components/button'
import * as Icon from '~/components/icon'
import { useMetadata } from '~/hooks'
import { YouTube } from '~/platforms'

const classNames = {
  block: 'c-next-episode',
  elements: {
    cover: 'c-episode-cover__image c-next-episode__cover',
    content: 'c-next-episode__content',
    typeSign: 'c-next-episode__type-sign',
    share: 'c-next-episode__share',
    information: 'c-next-episode__information',
    title: 'c-next-episode__title',
    promotion: 'c-next-episode__promotion',
    promotionIcon: 'c-next-episode__promotion-icon',
  },
}

type Props = {
  cover: GatsbyImageProps['fluid']
  type: Episode.Type
  title: string
  scheduledAt: Date
  guests: string[]
  platforms: {
    youtube: string
  }
}

export function component({
  cover,
  type,
  title,
  scheduledAt,
  guests,
  platforms,
}: Props) {
  const metadata = useMetadata()

  const promotionClassName = cc([
    'o-text',
    'o-text--down-2',
    classNames.elements.promotion,
  ])

  return (
    <Section.component headline="برنامه هفته آینده">
      <div className={classNames.block}>
        <Image fluid={cover} className={classNames.elements.cover} />
        <div className={classNames.elements.content}>
          <EpisodeTypeSign.component
            type={type}
            className={classNames.elements.typeSign}
          />
          <Button.text
            color={Button.Color.Dark}
            className={classNames.elements.share}
          >
            <Icon.share size={Icon.Size.S24} />
          </Button.text>
          <div className={classNames.elements.information}>
            <Heading.H5 as="h3" className={classNames.elements.title}>
              {title}
            </Heading.H5>
            <EpisodeDetail.component
              name={'زمان پخش'}
              value={scheduledAt.toLocaleDateString('fa-IR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            />
            <EpisodeDetail.component name={'مهمانان'} value={guests} />
          </div>
          <Button.component
            as="a"
            href={YouTube.watch(platforms.youtube)}
            target="_blank"
          >
            تماشای پخش زنده
          </Button.component>
          <Button.text
            as="a"
            href={metadata.platforms.hazy}
            target="_blank"
            color={Button.Color.Dark}
          >
            <Icon.hazy size={Icon.Size.S24} />
            ارسال پیام ناشناس
          </Button.text>
          <p className={promotionClassName}>
            برای دریافت اطلاع‌رسانی در زمان شروع پخش زنده کلید
            <Icon.notification
              size={Icon.Size.S24}
              className={classNames.elements.promotionIcon}
            />
            را در کانال یوتیوب فعال کنید تا به محض شروع برنامه با نوتیفیکیشن
            مطلع شوید.
          </p>
        </div>
      </div>
    </Section.component>
  )
}
