import React from 'react'
import cc from 'classcat'

import * as Heading from '~/components/heading'

const classNames = {
  block: 'c-section',
  elements: {
    container: 'c-section__container',
    headline: 'c-section__headline',
  },
  modifiers: {
    terminal: '-is-terminal',
  },
}

type Props = React.PropsWithChildren<{
  headline?: string
  terminal: boolean
}>

export function component({ headline, terminal, children }: Props) {
  const blockClassName = cc([
    classNames.block,
    terminal && classNames.modifiers.terminal,
  ])
  const containerClassName = cc(['l-container', classNames.elements.container])

  return (
    <section className={blockClassName}>
      <div className={containerClassName}>
        {headline && (
          <Heading.H2 className={classNames.elements.headline}>
            {headline}
          </Heading.H2>
        )}
        {children}
      </div>
    </section>
  )
}

component.defaultProps = {
  terminal: false,
}
