import React from 'react'

import { Page, LastPublishedEpisode, Episodes } from '~/components'
import { useLastPublishedEpisode } from '~/hooks'
import { isNil } from '~/utils'

const classNames = {
  elements: {
    lastPublishedEpisode: 'c-episodes__last-published-episode',
  },
}

export function component() {
  const lastPublishedEpisode = useLastPublishedEpisode()

  return (
    <Page.gray>
      {!isNil(lastPublishedEpisode) && (
        <LastPublishedEpisode.component
          {...lastPublishedEpisode}
          className={classNames.elements.lastPublishedEpisode}
        />
      )}
      <Episodes.episodeTypes />
    </Page.gray>
  )
}

export default component
