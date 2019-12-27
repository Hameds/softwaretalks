import React from 'react'
import cc from 'classcat'

import * as Heading from '~/components/heading'

const classNames = {
  elements: {
    container: 'c-section__container',
    headline: 'c-section__headline',
  },
}

type Props = React.PropsWithChildren<{
  headline?: string
}>

export function component({ headline, children }: Props) {
  const containerClassName = cc(['l-container', classNames.elements.container])

  return (
    <section className="c-section">
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
