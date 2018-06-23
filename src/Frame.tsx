import * as React from 'react';

import { connect } from 'react-redux';

import './Frame.css';

interface IStateProps {
  course?: any
  submission?: any
  username?: string
}

export class Frame extends React.Component<IStateProps> {

  public componentDidMount() {
    window.scrollTo(0, 0)
  }

  public render() {
    const { children, username } = this.props

    return (
      <div className="frame">
        <div className="headerbar">
          <span className="logo">{username ? 'Hey ' + username + ', ben jij een Struisvogel?' : 'Ben jij een Struisvogel?'}</span>
        </div>
        <div className="frame_container">
          {children}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state: any, ownProps: any): IStateProps {
  return {
    course: state.course.course,
    submission: state.session.courseSubmissions,
    username: state.session.username,
  }
}

export default connect(mapStateToProps)(Frame)
