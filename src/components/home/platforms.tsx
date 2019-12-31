import React from 'react'
import cc from 'classcat'

import * as Section from '~/components/section'
import * as Heading from '~/components/heading'
import * as PlatformCategory from '~/components/platform-category'
import * as Icon from '~/components/icon'

import microphoneURL from '~/assets/images/microphone.png'
import cameraURL from '~/assets/images/camera.png'
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
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={metadata.platforms.twitch}
            >
              <Icon.twitch />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={metadata.platforms.youtube}
            >
              <Icon.youtube />
            </a>
          </PlatformCategory.component>
          <PlatformCategory.component label="کانال‌های صوتی">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={metadata.platforms.podcast}
            >
              <Icon.podcast />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={metadata.platforms.spotify}
            >
              <Icon.spotify />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={metadata.platforms.overcast}
            >
              <Icon.overcast />
            </a>
          </PlatformCategory.component>
          <PlatformCategory.component label="کانال‌های دیگر">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={metadata.platforms.hazy}
            >
              <Icon.hazy />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={metadata.platforms.virgool}
            >
              <Icon.virgool />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={metadata.platforms.github}
            >
              <Icon.github />
            </a>
          </PlatformCategory.component>
          <PlatformCategory.component label="شبکه‌های اجتماعی">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={metadata.platforms.instagram}
            >
              <Icon.instagram />
            </a>
            <Icon.Telegram.circle />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={metadata.platforms.twitter}
            >
              <Icon.twitter />
            </a>
          </PlatformCategory.component>
        </div>
      </div>
    </Section.component>
  )
}
