import * as Caret from './caret'
import * as Link from './link'
import * as Telegram from './telegram'
import * as View from './view'
import { defineDisplayName } from '../../utils'
import { ReactComponent as check } from '../../assets/icons/check.svg'
import { ReactComponent as close } from '../../assets/icons/close.svg'
import { ReactComponent as email } from '../../assets/icons/email.svg'
import { ReactComponent as github } from '../../assets/icons/github.svg'
import { ReactComponent as hazy } from '../../assets/icons/hazy.svg'
import { ReactComponent as instagram } from '../../assets/icons/instagram.svg'
import { ReactComponent as menu } from '../../assets/icons/menu.svg'
import { ReactComponent as notification } from '../../assets/icons/notification.svg'
import { ReactComponent as overcast } from '../../assets/icons/overcast.svg'
import { ReactComponent as play } from '../../assets/icons/play.svg'
import { ReactComponent as podcast } from '../../assets/icons/podcast.svg'
import { ReactComponent as share } from '../../assets/icons/share.svg'
import { ReactComponent as shows } from '../../assets/icons/shows.svg'
import { ReactComponent as spotify } from '../../assets/icons/spotify.svg'
import { ReactComponent as tag } from '../../assets/icons/tag.svg'
import { ReactComponent as time } from '../../assets/icons/time.svg'
import { ReactComponent as twitch } from '../../assets/icons/twitch.svg'
import { ReactComponent as twitter } from '../../assets/icons/twitter.svg'
import { ReactComponent as virgool } from '../../assets/icons/virgool.svg'
import { ReactComponent as youtube } from '../../assets/icons/youtube.svg'

defineDisplayName('Icon', {
  check,
  close,
  email,
  github,
  hazy,
  instagram,
  menu,
  notification,
  overcast,
  play,
  podcast,
  share,
  shows,
  spotify,
  tag,
  time,
  twitch,
  twitter,
  virgool,
  youtube,
})
defineDisplayName('Icon.Caret', Caret)
defineDisplayName('Icon.Link', Link)
defineDisplayName('Icon.Telegram', Telegram)
defineDisplayName('Icon.View', View)

export {
  Caret,
  Link,
  Telegram,
  View,
  check,
  close,
  email,
  github,
  hazy,
  instagram,
  menu,
  notification,
  overcast,
  play,
  podcast,
  share,
  shows,
  spotify,
  tag,
  time,
  twitch,
  twitter,
  virgool,
  youtube,
}
