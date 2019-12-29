import React from 'react'

import { Page, Home } from '~/components'
import { useNextEpisode } from '~/hooks'

function component() {
  const nextEpisode = useNextEpisode()

  return (
    <Page.primary>
      <Home.hero />
      <Home.lastPublishedEpisode />
      <Home.moreEpisodes />
      {nextEpisode && <Home.nextEpisode {...nextEpisode} />}
    </Page.primary>
  )
}

export default component
