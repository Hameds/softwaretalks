import React from 'react'

import { Section, Heading, Button, Guest, Link } from '~/components'

const classNames = {
  block: 'c-last-contributed-guests',
  elements: {
    headline: 'c-last-contributed-guests__headline',
  },
}

type Props = {
  guests: Guest.Props[]
}

export function component({ guests }: Props) {
  return (
    <Section.component terminal>
      <div className={classNames.block}>
        <div className={classNames.elements.headline}>
          <Heading.H1 as="h2">
            مهمانانی{' '}
            <span className="-weight-regular">
              که در برنامه‌ها حضور داشته‌اند
            </span>
          </Heading.H1>
          <Button.link as={Link.Internal.component} to="/guests">
            همه مهمانان
          </Button.link>
        </div>
        <div className={classNames.elements.headline}>
          <Heading.H4>
            SoftwareTalks{' '}
            <span className="-weight-regular">
              جامعه‌ای آزاد از فعــالیـن حـوزه آی‌تی اســت که در تلاشند با هم
              یاد بگیرند و یاد بدهند.
            </span>
          </Heading.H4>
          <Button.link as={Link.Internal.component} to="/about">
            اطلاعات بیشتر
          </Button.link>
        </div>
        {guests.map(props => (
          <Guest.component {...props} />
        ))}
      </div>
    </Section.component>
  )
}
