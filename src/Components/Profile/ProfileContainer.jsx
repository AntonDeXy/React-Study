import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { getUserProfile} from './../../redux/profileReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2;
    }


    this.props.getUserProfile(userId)
  }

  render() {
    return(
    <div className='content'>
      <Profile {...this.props} profile={this.props.profile}/>
    </div>
  )
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
  profile: state.profileReducer.profile
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
