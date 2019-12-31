import React from 'react'

import { Page, Home } from '~/components'
import { useNextEpisode, useLastContributedGuests } from '~/hooks'

function component() {
  const nextEpisode = useNextEpisode()
  const lastContributedGuests = useLastContributedGuests()

  return (
    <Page.primary>
      <Home.hero />
      <Home.lastPublishedEpisode />
      <Home.moreEpisodes />
      {nextEpisode && <Home.nextEpisode {...nextEpisode} />}
      {!!lastContributedGuests.length && (
        <Home.lastContributedGuests guests={lastContributedGuests} />
      )}
      <Home.callToContribution />
      <Home.platforms />
    </Page.primary>
  )
}

export default component
