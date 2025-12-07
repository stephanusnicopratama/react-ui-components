cd src

generateStoryBook() {
    echo "/* THIS IS GENERATED FILE DO NOT EDIT DIRECTLY INTO THIS FILE */
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import $1 from '.';

export default {
  title: 'Component/Icons/$1',
  component: $1
} as ComponentMeta<typeof $1>;

const Template: ComponentStory<typeof $1> = (args) => (
  <$1 {...args} />
);

export const base$1 = Template.bind({});
base$1.args = {};" >> $1.stories.tsx
    mv "$1.stories.tsx" "$2"
}

for file in *.tsx; do
    fileName=$(echo "$(basename "$file" | cut -f 1 -d '.')")
    mkdir -p $fileName
    
    [ -f "$file" ] || continue
    dir="${file%.*}"
    mv "$file" "$dir/index.tsx"
    
    generateStoryBook $fileName $dir

    echo "moving and rename $fileName to index.tsx"
done