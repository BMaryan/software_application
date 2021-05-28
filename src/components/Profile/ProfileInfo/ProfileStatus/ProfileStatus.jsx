import React from "react";

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status,
	};

	activateEditMode = () => {
		this.setState({
			editMode: true,
		});

		// this.props.profileId === 10
		// 	? this.setState({
		// 			editMode: true,
		// 	  })
		// 	: this.setState({
		// 			editMode: false,
		// 	  });
	};

	deactivateEditMode = () => {
		this.setState({
			editMode: false,
		});

		this.props.updateStatus(this.state.status);
	};

	onStatusChange = event => {
		this.setState({
			status: event.currentTarget.value,
		});
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status,
			});
		}
	}

	render() {
		return (
			<div>
				{!this.state.editMode ? (
					<div>
						<div onDoubleClick={this.activateEditMode}>{this.props.status}</div>
					</div>
				) : (
					<div>
						<input
							onChange={this.onStatusChange}
							autoFocus={true}
							onBlur={this.deactivateEditMode}
							type='text'
							value={this.state.status}
						/>
					</div>
				)}
			</div>
		);
	}
}

export default ProfileStatus;
