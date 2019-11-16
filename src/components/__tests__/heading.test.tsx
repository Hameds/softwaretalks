import React from 'react'
import { render } from '@testing-library/react'

import * as Heading from '../heading'

describe('<Heading.component/>', () => {
  it.each`
    variant               | tagName
    ${Heading.Variant.H1} | ${'H1'}
    ${Heading.Variant.H2} | ${'H2'}
    ${Heading.Variant.H3} | ${'H3'}
    ${Heading.Variant.H4} | ${'H4'}
    ${Heading.Variant.H5} | ${'H5'}
    ${Heading.Variant.H6} | ${'H6'}
  `(
    'should render component as $tagName element when variant property is "$variant"',
    ({ variant, tagName }: { variant: Heading.Variant; tagName: string }) => {
      const { container } = render(<Heading.component variant={variant} />)

      expect((container.firstChild as Element).tagName).toBe(tagName)
    }
  )
})
