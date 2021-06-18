import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getStatus, setUser, setUserProfile, updateStatus } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getProfileSelector, getStatusSelector } from "../../redux/profile-selectors";
import { getAuthorizedUserIdSelector } from "../../redux/auth-selectors";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;

		if (!userId) {
			userId = this.props.authorizedUserId;
			if (!userId) {
				this.props.history.push("/login");
			}
		}

		this.props.setUser(userId);
		this.props.getStatus(userId);
	}

	render() {
		return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />;
	}
}

const mapStateToProps = state => {
	return {
		profile: getProfileSelector(state),
		status: getStatusSelector(state),
		authorizedUserId: getAuthorizedUserIdSelector(state),
	};
};

export default compose(
	connect(mapStateToProps, { setUserProfile, setUser, getStatus, updateStatus }),
	withRouter,
	withAuthRedirect
)(ProfileContainer);