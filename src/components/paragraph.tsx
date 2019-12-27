import React from 'react'
import cc from 'classcat'

import { defineDisplayName } from '~/utils'

type Props = JSX.IntrinsicElements['p']

const classNames = {
  block: 'c-paragraph',
}

export function component({ className: customClassName, ...props }: Props) {
  const className = cc([classNames.block, customClassName])

  return <p {...props} className={className} />
}

defineDisplayName('Paragraph', { component })
