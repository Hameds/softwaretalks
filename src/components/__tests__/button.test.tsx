import React from 'react'
import { render } from '@testing-library/react'

import * as Button from '../button'

describe('<Button.component>', () => {
  it.each`
    as          | tagName
    ${'a'}      | ${'A'}
    ${'button'} | ${'BUTTON'}
  `(
    'should render component as $as element when as property is "$as"',
    ({ as, tagName }: { as: Button.TagName; tagName: string }) => {
      const { container } = render(<Button.component as={as} />)

      expect((container.firstChild as Element).tagName).toBe(tagName)
    }
  )

  it.each`
    name          | variant
    ${'ordinary'} | ${Button.Variant.Ordinary}
    ${'CTA'}      | ${Button.Variant.CTA}
    ${'ghost'}    | ${Button.Variant.Ghost}
    ${'link'}     | ${Button.Variant.Link}
    ${'text'}     | ${Button.Variant.Text}
  `(
    'should contain $name variant modifier class name when variant property is $name',
    ({ variant }: { variant: Button.Variant }) => {
      const { container } = render(<Button.component variant={variant} />)

      expect(container.firstChild).toHaveClass(
        Button.classNames.variants[variant]
      )
    }
  )

  it.each`
    name         | color
    ${'primary'} | ${Button.Color.Primary}
    ${'white'}   | ${Button.Color.White}
  `(
    'should contain $name color modifier class name when color property is $name',
    ({ color }: { color: Button.Color }) => {
      const { container } = render(<Button.component color={color} />)

      expect(container.firstChild).toHaveClass(
        Button.classNames.modifiers.color[color]
      )
    }
  )

  it('should contain block modifier class name when component is block', () => {
    const { container } = render(<Button.component block />)

    expect(container.firstChild).toHaveClass(Button.classNames.modifiers.block)
  })

  it('should add custom class name in front of other class names', () => {
    const { container } = render(<Button.component className="test" />)

    expect(container.firstChild).toHaveAttribute(
      'class',
      expect.stringMatching(/test$/)
    )
  })
})
