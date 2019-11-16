import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import 'normalize.css'
import '../src/scss/main.scss'
import '../src/scss/storybook.scss'

addDecorator(withInfo)
addDecorator(storyFn => <div className="container">{storyFn()}</div>)

// automatically import all files ending in *.stories.tsx
configure(require.context('../stories', true, /\.stories\.tsx$/), module)
