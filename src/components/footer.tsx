import React from 'react'
import cc from 'classcat'
import * as Logo from '~/components/logo'
import * as Paragraph from '~/components/paragraph'
import { defineDisplayName } from '~/utils'

import pkg from '../../package.json'

const classNames = {
  block: 'c-footer',
  elements: {
    container: 'c-footer__container',
    logo: 'c-footer__logo',
    note: 'c-footer__note',
    link: 'c-footer__link',
  },
}

const githubAnchor = (
  <a
    className={classNames.elements.link}
    href={pkg.repository.url}
    target="_blank"
  >
    گیت‌هاب
  </a>
)

type Props = {
  licenseSpecLink: string
}

export function component({ licenseSpecLink }: Props) {
  const licenseAnchor = (
    <a
      className={classNames.elements.link}
      href={licenseSpecLink}
      target="_blank"
    >
      {pkg.license}
    </a>
  )

  return (
    <footer className={classNames.block}>
      <div className={cc(['l-container', classNames.elements.container])}>
        <Logo.primary className={{ block: classNames.elements.logo }} inverse />
        <Paragraph.component className={classNames.elements.note}>
          این وب‌سایت به صورت متن باز در {githubAnchor} در حال توسعه است.
          <br />
          تمامی حقوق وب‌سایت و محتوای ارائه شده تحت مجوز {licenseAnchor} است.
        </Paragraph.component>
      </div>
    </footer>
  )
}

defineDisplayName('Footer', { component })
