import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import TopNavLogo from '../TopNav/TopNavLogo/TopNavLogo'

storiesOf('TopNavLogo', module)
  .add(
    'TopNavLogo component',
    withInfo({
      inline: true,
      text:
        'Use the <Button />,  <GreenButton />, components to render a primitive button.'
    })(() => {
      return (<TopNavLogo product="teleport" version="3.2.1" />);
    })
  );