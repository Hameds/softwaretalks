import { useStaticQuery, graphql } from 'gatsby'

import { MetadataQuery } from '../../types/generated/graphql'
import { isNil } from '~/utils'

const metadataQuery = graphql`
  query Metadata {
    site {
      siteMetadata {
        licenseSpecLink
        platforms {
          youtube
          hazy
          telegram
          email
        }
      }
    }
  }
`

export function useMetadata() {
  const metadata = useStaticQuery<MetadataQuery>(metadataQuery).site
    ?.siteMetadata

  if (isNil(metadata)) {
    throw new Error(
      'There is not any site entity. Maybe gatsby/you made a fetal mistake!'
    )
  }

  return metadata
}
