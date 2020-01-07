import { defineDisplayName } from '~/utils'

import * as External from './external'
import * as Internal from './internal'

defineDisplayName('Link.External', External)
defineDisplayName('Link.Internal', Internal)

export { External, Internal }
