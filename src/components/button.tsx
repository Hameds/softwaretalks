import React from 'react'
import cc from 'classcat'

import { Link } from '~/components'
import { defineDisplayName } from '~/utils'

export enum Variant {
  Ordinary,
  CTA,
  Ghost,
  Link,
  Text,
}

export enum Color {
  Primary,
  White,
  Dark,
}

export type As =
  | 'button'
  | typeof Link.Internal.component
  | typeof Link.External.component

type OwnProps<TAs extends As> = React.PropsWithChildren<{
  as: TAs
  variant: Variant
  color: Color
  block: boolean
  className?: string
}>

type Props<TAs extends As> = OwnProps<TAs> &
  Omit<
    TAs extends 'button'
      ? JSX.IntrinsicElements['button']
      : TAs extends (props: infer U) => any
      ? U
      : never,
    keyof OwnProps<TAs>
  >

export const classNames = {
  variants: {
    [Variant.Ordinary]: 'c-button--ordinary',
    [Variant.CTA]: 'c-button--cta',
    [Variant.Ghost]: 'c-button--ghost',
    [Variant.Link]: 'c-button--link',
    [Variant.Text]: 'c-button--text',
  },
  elements: {
    label: 'c-button__label',
    triangle: 'c-button__triangle',
  },
  modifiers: {
    color: {
      [Color.Primary]: '-color-primary',
      [Color.White]: '-color-white',
      [Color.Dark]: '-color-dark',
    },
    block: '-width-full',
  },
}

const triangle = <span className={classNames.elements.triangle}>▸</span>

export function component<TAs extends As = 'button'>({
  variant,
  color,
  block,
  as: tagName,
  className: customClassName,
  children: customChildren,
  ...props
}: Props<TAs>) {
  const className = cc([
    classNames.variants[variant],
    classNames.modifiers.color[color],
    block && classNames.modifiers.block,
    customClassName,
  ])
  const children = React.Children.map(customChildren, child =>
    typeof child === 'string' ? (
      <span className={classNames.elements.label}>{child}</span>
    ) : (
      child
    )
  ).concat([variant === Variant.Link && triangle])

  return React.createElement(tagName as any, {
    ...props,
    children,
    className:
      tagName === Link.Internal.component ? { block: className } : className,
  })
}
component.defaultProps = {
  as: 'button',
  variant: Variant.Ordinary,
  color: Color.Primary,
  block: false,
}

function createVariantComponent(variant: Variant) {
  function variantComponent<TTagName extends As = 'button'>(
    props: Omit<Props<TTagName>, 'variant'>
  ) {
    return component({
      ...props,
      variant,
    } as Props<TTagName>)
  }

  const { variant: _, ...defaultProps } = component.defaultProps
  variantComponent.defaultProps = defaultProps

  return variantComponent
}

export const cta = createVariantComponent(Variant.CTA)
export const ghost = createVariantComponent(Variant.Ghost)
export const link = createVariantComponent(Variant.Link)
export const text = createVariantComponent(Variant.Text)

defineDisplayName('Button', { component, cta, ghost, link, text })
