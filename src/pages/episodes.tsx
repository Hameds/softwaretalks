import React from 'react'

import { Page, LastPublishedEpisode, Episodes } from '~/components'
import { useLastPublishedEpisode, usePublishedEpisodes } from '~/hooks'
import { isNil } from '~/utils'

const classNames = {
  elements: {
    lastPublishedEpisode: 'c-episodes__last-published-episode',
  },
}

export function component() {
  const lastPublishedEpisode = useLastPublishedEpisode()
  const publishedEpisodes = usePublishedEpisodes()

  return (
    <Page.gray>
      {!isNil(lastPublishedEpisode) && (
        <LastPublishedEpisode.component
          {...lastPublishedEpisode}
          className={classNames.elements.lastPublishedEpisode}
        />
      )}
      <Episodes.episodeTypes />
      <Episodes.episodesIndex episodes={publishedEpisodes} />
    </Page.gray>
  )
}

export default component
