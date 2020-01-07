import React from 'react'

import microphoneURL from '~/assets/images/microphone.png'
import cameraURL from '~/assets/images/camera.png'
import { Section, Heading, PlatformCategory, Icon, Link } from '~/components'
import { useMetadata } from '~/hooks'

const classNames = {
  block: 'c-platforms',
  elements: {
    microphone: 'c-platforms__microphone',
    camera: 'c-platforms__camera',
    content: 'c-platforms__content',
    headline: 'c-platforms__headline',
  },
}

export function component() {
  const metadata = useMetadata()

  return (
    <Section.component terminal>
      <div className={classNames.block}>
        <img
          src={cameraURL}
          className={classNames.elements.camera}
          alt="Camera"
          title="Camera"
        />
        <img
          src={microphoneURL}
          className={classNames.elements.microphone}
          alt="Microphone"
          title="Microphone"
        />

        <div className={classNames.elements.content}>
          <Heading.H1 as="h2" className={classNames.elements.headline}>
            از کجا ببینید،
            <br />
            بشنوید و بخوانید؟
          </Heading.H1>
          <PlatformCategory.component label="کانال‌های ویدئویی">
            <Link.External.component href={metadata.platforms.twitch}>
              <Icon.twitch />
            </Link.External.component>
            <Link.External.component href={metadata.platforms.youtube}>
              <Icon.youtube />
            </Link.External.component>
          </PlatformCategory.component>
          <PlatformCategory.component label="کانال‌های صوتی">
            <Link.External.component href={metadata.platforms.podcast}>
              <Icon.podcast />
            </Link.External.component>
            <Link.External.component href={metadata.platforms.spotify}>
              <Icon.spotify />
            </Link.External.component>
            <Link.External.component href={metadata.platforms.overcast}>
              <Icon.overcast />
            </Link.External.component>
          </PlatformCategory.component>
          <PlatformCategory.component label="کانال‌های دیگر">
            <Link.External.component href={metadata.platforms.hazy}>
              <Icon.hazy />
            </Link.External.component>
            <Link.External.component href={metadata.platforms.virgool}>
              <Icon.virgool />
            </Link.External.component>
            <Link.External.component href={metadata.platforms.github}>
              <Icon.github />
            </Link.External.component>
          </PlatformCategory.component>
          <PlatformCategory.component label="شبکه‌های اجتماعی">
            <Link.External.component href={metadata.platforms.instagram}>
              <Icon.instagram />
            </Link.External.component>
            <Link.External.component href={metadata.platforms.telegram}>
              <Icon.Telegram.circle />
            </Link.External.component>
            <Link.External.component href={metadata.platforms.twitter}>
              <Icon.twitter />
            </Link.External.component>
          </PlatformCategory.component>
        </div>
      </div>
    </Section.component>
  )
}
