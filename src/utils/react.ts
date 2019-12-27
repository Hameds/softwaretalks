import { navigate as gatsbyNavigate } from 'gatsby'
import { NavigateOptions } from '@reach/router'

export function defineDisplayName(
  moduleName: string,
  componentMap: { [name: string]: Function }
) {
  Object.entries(componentMap).forEach(([name, component]) => {
    Object.defineProperty(component, 'displayName', {
      value: `${moduleName}.${name}`,
    })
  })
}
