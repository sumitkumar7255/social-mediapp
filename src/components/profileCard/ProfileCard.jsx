import React from 'react'
import classes from './profileCard.module.css'
import profileUserImg from '../../assets/woman.jpg'


const ProfileCard = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.top}>
                    <div className={classes.imgContainer}>
                        <img src={profileUserImg} className={classes.profileUserImg} />
                    </div>
                    <div className={classes.usernameAndCreatedAt}>
                        <p><span>Username:</span> Sumit</p>
                        <p><span>Created At:</span> 4th of Oct 2023</p>
                    </div>
                </div>
                    <hr />
                <div className={classes.bottom}>
                    <p>Followers: <span>43123</span></p>
                    <p>Followings: <span>3274</span></p>
                </div>
            </div>
            <h3 className={classes.myProfile}>My profile</h3>
        </div>
    )
}

export default ProfileCard