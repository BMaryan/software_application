/* eslint-disable no-unused-vars */
import React from "react";
import { authUser } from "./auth-reducer";

const INITIALIZED_SUCCESS = "software_application/app/INITIALIZED_SUCCESS";

let initialState = {
	initialized: false,
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS: {
			return {
				...state,
				initialized: true,
			};
		}
		default: {
			return state;
		}
	}
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

// thunks
export const initializeApp = () => dispatch => {
	let promise = dispatch(authUser());

	Promise.all([promise]).then(() => {
		dispatch(initializedSuccess());
	});
};

export default appReducer;
