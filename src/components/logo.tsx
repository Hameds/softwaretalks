import React from 'react'
import cc from 'classcat'

import { defineDisplayName } from '~/utils'

export enum Variant {
  Primary,
  Black,
}

type Props = {
  variant: Variant
  inverse: boolean
  className: {
    block?: string
    frame?: string
    shape?: string
  }
}

export const classNames = {
  variants: {
    [Variant.Primary]: 'c-logo--primary',
    [Variant.Black]: 'c-logo--black',
  },
  elements: {
    frame: 'c-logo__frame',
    shape: 'c-logo__shape',
  },
  modifiers: {
    inverse: '-inverse',
  },
}

export function component({ variant, inverse, className }: Props) {
  const blockClassName = cc([
    classNames.variants[variant],
    inverse && classNames.modifiers.inverse,
    className.block,
  ])
  const frameClassName = cc([classNames.elements.frame, className.frame])
  const shapeClassName = cc([classNames.elements.shape, className.shape])

  return (
    <svg viewBox="0 0 160 160" className={blockClassName}>
      <rect
        x="0.5"
        y="0.5"
        width="159.5"
        height="159.5"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        shapeRendering="optimizeSpeed"
        className={frameClassName}
      />
      <path
        className={shapeClassName}
        d="M160 46.667H87V60.76h25.952v52.573h14.389V60.76H160zM82.222 93.296c0-10.895-8.882-19.796-20.001-20.043H34.386c-3.097 0-5.608-2.46-5.608-5.493v-1.505c0-3.034 2.51-5.493 5.608-5.493H78V46.667H35.429c-11.48 0-21.285 9.09-21.285 20.337s9.886 20.342 21.275 20.34h27.795c3.097 0 5.607 2.46 5.607 5.493v1.5c0 3.034-2.51 5.494-5.607 5.494H0v13.502h62.22c11.115-.253 19.997-9.146 20.002-20.037z"
      />
    </svg>
  )
}
component.defaultProps = {
  variant: Variant.Primary,
  inverse: false,
  className: {},
}

function createVariantComponent(variant: Variant) {
  function variantComponent(props: Omit<Props, 'variant'>) {
    return component({ ...props, variant })
  }

  const { variant: _, ...defaultProps } = component.defaultProps
  variantComponent.defaultProps = defaultProps

  return variantComponent
}

export const primary = createVariantComponent(Variant.Primary)
export const black = createVariantComponent(Variant.Black)

defineDisplayName('Logo', { component, primary, black })
