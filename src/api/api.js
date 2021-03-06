import axios from "axios";

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: {
		"API-KEY": "5fc817bd-20e9-4869-bd30-5ba423724883",
	},
});

export const authAPI = {
	authUser() {
		return instance.get(`auth/me`).then(response => response.data);
	},
	login(email, password, rememberMe, captcha = null) {
		return instance.post(`auth/login`, { email, password, rememberMe, captcha }).then(response => response.data);
	},
	logout() {
		return instance.delete(`auth/login`).then(response => response.data);
	},
	captcha() {
		return instance.get(`security/get-captcha-url`).then(response => response.data);
	},
};

export const securityAPI = {
	getCaptchaUrl() {
		return instance.get(`security/get-captcha-url`).then(response => response.data);
	},
};

export const profileAPI = {
	setUser(userId) {
		return instance.get(`profile/${userId}`).then(response => response.data);
	},
	setStatus(userId) {
		return instance.get(`profile/status/${userId}`).then(response => response.data);
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status: status }).then(response => response.data);
	},
	savePhoto(photoFile) {
		const formData = new FormData();
		formData.append("image", photoFile);
		return instance
			.put(`profile/photo`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then(response => response.data);
	},
	saveProfile(profile) {
		return instance.put(`profile`, profile).then(response => response.data);
	},
};

export const usersAPI = {
	getUsers(currentPage, getCountUsers) {
		return instance.get(`users?page=${currentPage}&count=${getCountUsers}`).then(response => response.data);
	},
	follow(userId) {
		return instance.post(`follow/${userId}`).then(response => response.data);
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`).then(response => response.data);
	},
};
