import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs/react'

import Section from './index'

storiesOf('A - Section', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Section>{text('Content', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda cum illo, nemo sequi voluptas? Accusamus aut autem blanditiis consectetur deleniti dignissimos doloremque dolorum eaque earum eligendi enim eos eum id illum inventore ipsum iste iusto laboriosam laborum laudantium, natus omnis porro quaerat quam recusandae rem repellendus soluta unde veniam vero! Aspernatur debitis, distinctio eligendi error hic, minima molestiae mollitia nostrum omnis, quia ratione soluta sunt vel! Delectus, dolorem incidunt iusto nam nisi quia ut vel. Ab adipisci alias aperiam aspernatur consectetur cupiditate, debitis ea enim esse, excepturi libero, modi mollitia necessitatibus obcaecati odio porro quasi quisquam reprehenderit sint tenetur.')}</Section>
    ))
