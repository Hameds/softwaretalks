import React from 'react'
import cc from 'classcat'

import { Heading, Icon, Link } from '~/components'
import enterURL from '~/assets/images/enter.png'
import { useMetadata } from '~/hooks'

const classNames = {
  block: 'c-call-to-contribution',
  elements: {
    container: 'c-call-to-contribution__container',
    headline: 'c-call-to-contribution__headline',
    image: 'c-call-to-contribution__image',
    contacts: 'c-call-to-contribution__contacts',
    contact: 'c-call-to-contribution__contact',
    contactLabel: 'c-call-to-contribution__contact-label',
    contactValue: 'c-call-to-contribution__contact-value',
  },
}

export function component() {
  const metadata = useMetadata()

  const containerClassName = cc(['l-container', classNames.elements.container])
  const contactValueClassName = cc([
    'o-text',
    'o-text--up-1',
    classNames.elements.contactValue,
  ])

  return (
    <div className={classNames.block}>
      <div className={containerClassName}>
        <Heading.H5 as="h3" className={classNames.elements.headline}>
          اگر تمایل به مشارکت در برنامه‌ها دارید با ما تماس بگیرید.
        </Heading.H5>
        <img
          src={enterURL}
          className={classNames.elements.image}
          alt="Contribute in SoftwareTalks"
          title="Contribute in SoftwareTalks"
        />
        <div className={classNames.elements.contacts}>
          <div className={classNames.elements.contact}>
            <Icon.email size={Icon.Size.S24} />
            <Heading.H6 as="h4" className={classNames.elements.contactLabel}>
              ایمیل
            </Heading.H6>
            <Link.External.component
              href={metadata.platforms.email}
              className={contactValueClassName}
            >
              info@softwaretalks.com
            </Link.External.component>
          </div>
          <div className={classNames.elements.contact}>
            <Icon.Telegram.bare size={Icon.Size.S24} />
            <Heading.H6 as="h4" className={classNames.elements.contactLabel}>
              تلگرام
            </Heading.H6>
            <Link.External.component
              href={metadata.platforms.telegram}
              className={contactValueClassName}
            >
              @softwaretalks
            </Link.External.component>
          </div>
        </div>
      </div>
    </div>
  )
}
