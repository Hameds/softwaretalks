module.exports = {
  icon: true,
  prettier: false,
  replaceAttrValues: { '#000': 'currentColor', '#000000': 'currentColor' },
  template({ template }, _options, { jsx }) {
    return template.ast`
      import React from 'react';
      import cc from 'classcat';

      export function ReactComponent ({ className, size, ...remain }) {
        const props = { ...remain, className: cc(['c-icon', size && '-size-' + size, className]) }

        return ${jsx}        
      };
    `
  },
}
