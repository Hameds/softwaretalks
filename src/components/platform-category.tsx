import React from 'react'
import cc from 'classcat'

import * as Heading from '~/components/heading'

const classNames = {
  block: 'c-platform-category',
  elements: {
    label: 'c-platform-category__label',
    item: 'c-platform-category__item',
  },
}

type Props = { label: string; children: React.ReactElement[] }

export function component({ label, children }: Props) {
  return (
    <div className={classNames.block}>
      <Heading.H5 as="h3" className={classNames.elements.label}>
        {label}
      </Heading.H5>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          className: cc([classNames.elements.item, child.props.className]),
        })
      )}
    </div>
  )
}
