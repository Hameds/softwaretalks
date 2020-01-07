import React from 'react'
import cc from 'classcat'
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby'

type OwnProps = {
  className: {
    block?: string
    isActive?: string
  }
}

export type Props = Omit<GatsbyLinkProps<any>, 'className' | 'innerRef'> &
  OwnProps

const classNames = {
  block: 'c-link',
  modifiers: {
    isActive: 'is-active',
  },
}

export function component<TState>({ className, ...props }: Props) {
  const blockClassName = cc([classNames.block, className.block])
  const activeClassName = cc([
    classNames.modifiers.isActive,
    className.isActive,
  ])

  return (
    // GatsbyLinkProps typescript type not working for custom <Link /> component
    // https://github.com/gatsbyjs/gatsby/issues/16682
    // @ts-ignore
    <GatsbyLink
      className={blockClassName}
      activeClassName={activeClassName}
      {...props}
    />
  )
}

component.defaultProps = {
  className: {},
}
