/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/user_photo.jpg";
import { NavLink } from "react-router-dom";

const Users = props => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.getCountUsers);
	let arrayPages = [];

	for (let i = 1; i <= pagesCount; i++) {
		arrayPages.push(i);
		arrayPages.splice(15, i);
	}

	// console.log(props);
	// console.log(props.users.filter(user => user.followed === true));

	return (
		<div className={style.users}>
			<div className={style.users_buttons}>
				{arrayPages.map(page => {
					return (
						<div
							key={page}
							onClick={e => {
								props.onPageChanged(page);
							}}
							className={props.currentPage === page ? style.selectedPage : style.unselectedPage}>
							{page}
						</div>
					);
				})}
			</div>

			<div className={style.users_wrapper}>
				{props.users.map(user => (
					<div key={user.id} className={style.user}>
						<div className={style.wrapper_user}>
							<img
								className={style.user_cover}
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5vLBH3Npz2mxJ8aaPSOiMU2AiPLsnnv8nxCObjgoiMfrqyKThENMVnsTqYj0ov4xulI&usqp=CAU'
								alt=''
							/>

							<div className={style.user_line_location}>
								<div className={style.user_info}>
									<div>
										<img
											className={style.user_info_avatarka}
											src={user.photos.small != null ? user.photos.small : userPhoto}
											alt=''
										/>
									</div>
								</div>

								<div className={style.user_location}>
									{/* <div>{"user.location.country"}</div>
                                            <div>{"user.location.city"}</div> */}
									<div>Ukraine</div>
									<div>Lviv</div>
								</div>
							</div>

							<div>
								<div className={style.user_info_fullname}>
									<NavLink to={"/profile/" + user.id}>{user.name}</NavLink>
								</div>

								<div className={style.user_status}>{user.status}</div>

								{user.followed ? (
									<button
										disabled={props.followingInProgress.some(id => id == user.id)}
										className={style.user_button}
										onClick={() => {
											props.unfollow(user.id);
										}}>
										Unfollow
									</button>
								) : (
									<button
										disabled={props.followingInProgress.some(id => id == user.id)}
										className={style.user_button}
										onClick={() => {
											props.follow(user.id);
										}}>
										Follow
									</button>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Users;