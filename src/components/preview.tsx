import React from 'react'
import cc from 'classcat'

import { intersperse, defineDisplayName } from '~/utils'

type Props = React.PropsWithChildren<{}>

export const classNames = {
  block: 'c-preview',
  elements: {
    space: 'c-preview__space',
  },
}

export function component({ children }: Props) {
  return (
    <div className={classNames.block}>
      {intersperse(
        <span className={classNames.elements.space} />,
        React.Children.toArray(children)
      )}
    </div>
  )
}

defineDisplayName('Preview', { component })
