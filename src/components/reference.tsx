import React from 'react'

import { Heading, Icon } from '~/components'

const classNames = {
  block: 'c-reference',
  elements: {
    headline: 'c-reference__headline',
  },
}

type Props = React.PropsWithChildren<{
  headline: string
  icon: React.FC<{ size: Icon.Size }>
}>

export function component({ headline, icon, children }: Props) {
  return (
    <div className={classNames.block}>
      <Heading.H5 as="h3" className={classNames.elements.headline}>
        {React.createElement(icon, { size: Icon.Size.S24 })}
        {headline}
      </Heading.H5>
      {children}
    </div>
  )
}
