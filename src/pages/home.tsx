import React from 'react'

import { Page, Home } from '~/components'

function component() {
  return (
    <Page.primary>
      <Home.hero />
      <Home.lastPublishedEpisode />
      <Home.moreEpisodes />
    </Page.primary>
  )
}

export default component
