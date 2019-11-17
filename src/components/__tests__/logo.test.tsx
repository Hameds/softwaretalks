import React from 'react'
import { render } from '@testing-library/react'

import * as Logo from '../logo'

describe('<Logo.component/>', () => {
  it.each`
    name         | variant
    ${'primary'} | ${Logo.Variant.Primary}
    ${'black'}   | ${Logo.Variant.Black}
  `(
    'should contain $name variant class name when variant is $name',
    ({ variant }: { variant: Logo.Variant }) => {
      const { container } = render(<Logo.component variant={variant} />)

      expect(container.firstChild).toHaveClass(
        Logo.classNames.variants[variant]
      )
    }
  )

  it('should contain inverse modifier class name when component is inverse', () => {
    const { container } = render(<Logo.component inverse />)

    expect(container.firstChild).toHaveClass(Logo.classNames.modifiers.inverse)
  })

  it('should add custom class name in front of other class names', () => {
    const { container } = render(
      <Logo.component
        className={{
          block: 'test-block',
          frame: 'test-frame',
          shape: 'test-shape',
        }}
      />
    )

    expect(container.firstChild).toHaveAttribute(
      'class',
      expect.stringMatching(/test-block$/)
    )
    expect(
      container.getElementsByClassName(Logo.classNames.elements.frame)[0]
    ).toHaveAttribute('class', expect.stringMatching(/test-frame$/))
    expect(
      container.getElementsByClassName(Logo.classNames.elements.shape)[0]
    ).toHaveAttribute('class', expect.stringMatching(/test-shape$/))
  })
})
