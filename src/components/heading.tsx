import React from 'react'
import cc from 'classcat'

import { defineDisplayName } from '~/utils'

export enum Variant {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export const classNames = {
  variants: {
    [Variant.H1]: 'c-heading--h1',
    [Variant.H2]: 'c-heading--h2',
    [Variant.H3]: 'c-heading--h3',
    [Variant.H4]: 'c-heading--h4',
    [Variant.H5]: 'c-heading--h5',
    [Variant.H6]: 'c-heading--h6',
  },
}

type TagName = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type Props<TTagName extends TagName> = React.PropsWithChildren<{
  variant: Variant
  as?: TTagName
}> &
  JSX.IntrinsicElements[TagName | Variant]

export function component<TTagName extends TagName>({
  variant,
  as: tagName,
  className: customClassName,
  ...props
}: Props<TTagName>) {
  const className = cc([
    'o-text',
    classNames.variants[variant],
    customClassName,
  ])

  return React.createElement(tagName || variant, { ...props, className })
}

function createVariantComponent(variant: Variant) {
  function variantComponent<TTagName extends TagName>(
    props: Omit<Props<TTagName>, 'variant'>
  ) {
    return component({ ...props, variant })
  }

  return variantComponent
}

export const H1 = createVariantComponent(Variant.H1)
export const H2 = createVariantComponent(Variant.H2)
export const H3 = createVariantComponent(Variant.H3)
export const H4 = createVariantComponent(Variant.H4)
export const H5 = createVariantComponent(Variant.H5)
export const H6 = createVariantComponent(Variant.H6)

defineDisplayName('Heading', { component, H1, H2, H3, H4, H5, H6 })
