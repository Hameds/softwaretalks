import React from 'react'
import cc from 'classcat'

import * as Link from './link'
import { intersperse, defineDisplayName } from '~/utils'

export enum Variant {
  Black,
  White,
}

const classNames = {
  variants: {
    [Variant.Black]: 'c-navigation--black',
    [Variant.White]: 'c-navigation--white',
  },
  elements: {
    item: 'c-navigation__item',
    divider: 'c-navigation__divider',
    link: 'c-navigation__link',
  },
}

type Props = JSX.IntrinsicElements['ul'] & {
  variant: Variant
  children: React.ReactElement[]
}

const divider = <li className={classNames.elements.divider}>/</li>

export function component({
  variant,
  children,
  className: customClassName,
}: Props) {
  const blockClassName = cc([
    'l-list',
    classNames.variants[variant],
    customClassName,
  ])

  return (
    <ul className={blockClassName}>
      {intersperse(divider, React.Children.toArray(children))}
    </ul>
  )
}

component.defaultProps = {
  variant: Variant.Black,
}

function createVariantComponent(variant: Variant) {
  function variantComponent(props: Omit<Props, 'variant'>) {
    return component({ ...props, variant })
  }

  const { variant: _, ...defaultProps } = component.defaultProps
  variantComponent.defaultProps = defaultProps

  return variantComponent
}

export const black = createVariantComponent(Variant.Black)
export const white = createVariantComponent(Variant.White)

type ItemProps = Link.Props

export function item({ className, ...props }: ItemProps) {
  return (
    <li className={classNames.elements.item}>
      <Link.component
        {...props}
        className={{
          ...className,
          block: cc([classNames.elements.link, className.block]),
        }}
      />
    </li>
  )
}

item.defaultProps = Link.component.defaultProps

defineDisplayName('Navigation', { component, black, white, item })
