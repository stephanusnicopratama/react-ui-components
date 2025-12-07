const template = (variables, { tpl }) => {
  const size = variables.componentName.match(/\d+$/)[0];
  variables.componentName = variables.componentName.replace('Svg', '') + 'Icon';
  const imports = `/* THIS IS GENERATED FILE DO NOT EDIT DIRECTLY INTO THIS FILE */
  import React from 'react';\n\n
  import type { IconProps } from '../types';\n\n`;

  return tpl`
  ${imports}

  const size = ${size};

  const ${variables.componentName} = ({ color = 'currentColor', ...props }: IconProps) => {
    const activeColor =
      color === 'currentColor' ? color : 'var(--color-icon-' + color + ')';
    
    return ${variables.jsx}
  };
   
  export default ${variables.componentName}
  `;
};

module.exports = template;
