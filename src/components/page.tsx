import React from 'react'
import cc from 'classcat'

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
  className: {
    main?: string
  }
}

export function component({ variant, children, className }: Props) {
  const metadata = useMetadata()

  const mainClassName = cc([classNames.elements.main, className.main])

  return (
    <div className={classNames.block}>
      <Header.component
        variant={variant}
        youtubeSocialLink={metadata.platforms.youtube}
      />
      {variant === Variant.Gray && <Squares.component />}
      <main className={mainClassName}>{children}</main>
      <Footer.component licenseSpecLink={metadata.licenseSpecLink} />
    </div>
  )
}

component.defaultProps = {
  className: {},
}

function createVariantComponent(variant: Variant) {
  function variantComponent(props: Omit<Props, 'variant'>) {
    return component({ ...props, variant })
  }

  variantComponent.defaultProps = component.defaultProps

  return variantComponent
}

export const primary = createVariantComponent(Variant.Primary)
export const gray = createVariantComponent(Variant.Gray)

defineDisplayName('Page', { component, primary, gray })
