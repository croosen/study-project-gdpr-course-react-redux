import * as React from 'react';

import './Frame.css';

export class Frame extends React.Component {

  public componentDidMount() {
    global.console.log('whoop')
    window.scrollTo(0, 0)
  }

  public render() {
    const { children } = this.props

    return (
      <div className="frame">
        <div className="frame_container">
          {children}
        </div>
      </div>
    )
  }
}

export default Frame
