import React from 'react'
import cc from 'classcat'

type Props = Omit<JSX.IntrinsicElements['a'], 'target'>

export function component({ rel: customRel, ...props }: Props) {
  const rel = cc(['noopener noreferrer', customRel])

  return <a target="_blank" rel={rel} {...props} />
}
