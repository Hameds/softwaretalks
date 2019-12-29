import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as Header from './header'
import * as Squares from './squares'
import * as Footer from './footer'
import { Variant } from './header'
import { defineDisplayName } from '~/utils'
import { useMetadata } from '~/hooks'

import '~/scss/main.scss'

export { Variant } from './header'

const classNames = {
  block: 'c-page',
  elements: {
    main: 'c-page__main',
  },
}

type Props = {
  variant: Variant
  children: React.ReactNode
}

export function component({ variant, children }: Props) {
  const metadata = useMetadata()

  return (
    <div className={classNames.block}>
      <Header.component
        variant={variant}
        youtubeSocialLink={metadata.platforms.youtube}
      />
      {variant === Variant.Gray && <Squares.component />}
      <main className={classNames.elements.main}>{children}</main>
      <Footer.component licenseSpecLink={metadata.licenseSpecLink} />
    </div>
  )
}

function createVariantComponent(variant: Variant) {
  function variantComponent(props: Omit<Props, 'variant'>) {
    return component({ ...props, variant })
  }

  return variantComponent
}

export const primary = createVariantComponent(Variant.Primary)
export const gray = createVariantComponent(Variant.Gray)

defineDisplayName('Page', { component, primary, gray })
