import React from 'react'
import cc from 'classcat'

import { defineDisplayName } from '../utils'

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
  Black,
}

export type TagName = 'button' | 'a'

type Props<TTagName extends TagName> = React.PropsWithChildren<{
  as: TTagName
  variant: Variant
  color: Color
  block: boolean
}> &
  Omit<JSX.IntrinsicElements[TTagName], 'color'>

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
  },
  modifiers: {
    color: {
      [Color.Primary]: '-color-primary',
      [Color.White]: '-color-white',
      [Color.Black]: '-color-black',
    },
    block: '-width-full',
  },
}

export function component<TTagName extends TagName = 'button'>({
  variant,
  color,
  block,
  as: tagName,
  className: customClassName,
  children,
  ...props
}: Props<TTagName>) {
  const className = cc([
    classNames.variants[variant],
    classNames.modifiers.color[color],
    block && classNames.modifiers.block,
    customClassName,
  ])

  return React.createElement(tagName, {
    ...props,
    className,
    children: React.Children.map(children, child =>
      typeof child === 'string' ? (
        <span className={classNames.elements.label}>{child}</span>
      ) : (
        child
      )
    ),
  })
}
component.defaultProps = {
  as: 'button',
  variant: Variant.Ordinary,
  color: Color.Primary,
  block: false,
}

function createVariantComponent(variant: Variant) {
  function variantComponent<TTagName extends TagName = 'button'>(
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
