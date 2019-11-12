import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import 'normalize.css'
import '../src/scss/main.scss'

addDecorator(withInfo)

// automatically import all files ending in *.stories.tsx
configure(require.context('../stories', true, /\.stories\.tsx$/), module)
