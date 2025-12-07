const path = require('path');

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `export { default as ${exportName}Icon } from './${basename}'`;
  });
  const exportEntriesWithTypes = [
    ...exportEntries,
    'export type { IconProps } from \'./types\''
  ];
  return exportEntriesWithTypes.join('\n');
}

module.exports = defaultIndexTemplate;
