import React from 'react'

import { Page, LastPublishedEpisode, Home } from '~/components'
import {
  useNextEpisode,
  useLastContributedGuests,
  useLastPublishedEpisodes,
  useLastPublishedEpisode,
} from '~/hooks'
import { isEmpty, isNil } from '~/utils'

function component() {
  const lastPublishedEpisode = useLastPublishedEpisode()
  const lastPublishedEpisodes = useLastPublishedEpisodes()
  const nextEpisode = useNextEpisode()
  const lastContributedGuests = useLastContributedGuests()

  return (
    <Page.primary>
      <Home.hero />
      {!isNil(lastPublishedEpisode) && (
        <LastPublishedEpisode.component {...lastPublishedEpisode} />
      )}
      {!isEmpty(lastPublishedEpisodes) && (
        <Home.moreEpisodes episodes={lastPublishedEpisodes} />
      )}
      {!isNil(nextEpisode) && <Home.nextEpisode {...nextEpisode} />}
      {!isEmpty(lastContributedGuests) && (
        <Home.lastContributedGuests guests={lastContributedGuests} />
      )}
      <Home.callToContribution />
      <Home.platforms />
    </Page.primary>
  )
}

export default component
