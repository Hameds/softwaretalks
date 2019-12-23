import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as Header from './header'
import * as Footer from './footer'
import { Variant } from './header'

import '../scss/main.scss'

export { Variant } from './header'

const siteMetadataQuery = graphql`
  query siteMetadataQuery {
    site {
      siteMetadata {
        licenseSpecLink
        socialLinks {
          youtube
        }
      }
    }
  }
`

const classNames = {
  block: 'c-page',
  elements: {
    main: 'c-page__main',
  },
}

type Props = {
  variant: Variant
  children: React.ReactNode
}

export function component({ variant, children }: Props) {
  const siteMetadata = useStaticQuery(siteMetadataQuery).site.siteMetadata

  return (
    <div className={classNames.block}>
      <Header.component
        variant={variant}
        youtubeSocialLink={siteMetadata.socialLinks.youtube}
      />
      <main className={classNames.elements.main}>{children}</main>
      <Footer.component licenseSpecLink={siteMetadata.licenseSpecLink} />
    </div>
  )
}
