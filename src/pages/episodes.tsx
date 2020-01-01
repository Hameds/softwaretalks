import React from 'react'

import { Page, LastPublishedEpisode } from '~/components'
import { useLastPublishedEpisode } from '~/hooks'
import { isNil } from '~/utils'

export function component() {
  const lastPublishedEpisode = useLastPublishedEpisode()

  return (
    <Page.gray className={{ main: 'c-episodes' }}>
      {!isNil(lastPublishedEpisode) && (
        <LastPublishedEpisode.component {...lastPublishedEpisode} />
      )}
    </Page.gray>
  )
}

export default component
