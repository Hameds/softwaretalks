import React from 'react'
import cc from 'classcat'

type Props = Omit<JSX.IntrinsicElements['a'], 'target'>

export function component({
  rel: customRel,
  className: customClassName,
  ...props
}: Props) {
  const rel = cc(['noopener noreferrer', customRel])
  const className = cc(['o-link', customClassName])

  return <a target="_blank" rel={rel} className={className} {...props} />
}
