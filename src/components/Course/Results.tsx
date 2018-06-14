import * as React from 'react';

import { connect } from 'react-redux';

import { Frame } from '../../Frame'

import { Link } from 'react-router-dom'

interface IStateProps {
  course?: any
  username?: string
}

class Results extends React.Component<IStateProps> {

  public render() {

    return (
      <Frame>
        <h1>Resultaten</h1>


        <div className="navigator">
          <Link to="/course/rights" className="navigator_button button-prev">Prev</Link>
        </div>
      </Frame>
    )
  }
}

function mapStateToProps(state: any, ownProps: any): IStateProps {
  return {
    course: state.course.course,
    username: state.session.username,
  }
}

export default connect(mapStateToProps)(Results)
