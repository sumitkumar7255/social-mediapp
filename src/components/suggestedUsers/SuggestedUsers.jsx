import React from 'react'
import classes from './suggestedUsers.module.css'
import profileUserImg from '../../assets/woman.jpg'
import man from '../../assets/man.jpg'


const SuggestedUsers = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.myProfile}>
                    <img src={profileUserImg} className={classes.profileUserImg} alt="" />
                    <div className={classes.profileData}>
                        <span>Sumit</span>
                        <span className={classes.shortBio}>Live is full of adventures</span>
                    </div>
                </div>
                <div className={classes.suggestedUsers}>
                    <h3 className={classes.title}>Recommended users to Follow</h3>
                    <div className={classes.suggestedUser}>
                        <img src={man} className={classes.imgUser} alt="" />
                        <div className={classes.suggestedUserData}>
                            <span>Abhishek Kuttba</span>
                            <span className={classes.suggestedMsg}>Suggested to you</span>
                        </div>
                        <button className={classes.followBtn}>Follow</button>
                    </div>
                    <div className={classes.suggestedUser}>
                        <img src={man} className={classes.imgUser} alt="" />
                        <div className={classes.suggestedUserData}>
                            <span>Abhishek Kuttba</span>
                            <span className={classes.suggestedMsg}>Suggested to you</span>
                        </div>
                        <button className={classes.followBtn}>Follow</button>
                    </div>
                    <div className={classes.suggestedUser}>
                        <img src={man} className={classes.imgUser} alt="" />
                        <div className={classes.suggestedUserData}>
                            <span>Abhishek Kuttba</span>
                            <span className={classes.suggestedMsg}>Suggested to you</span>
                        </div>
                        <button className={classes.followBtn}>Follow</button>
                    </div>
                    <div className={classes.suggestedUser}>
                        <img src={man} className={classes.imgUser} alt="" />
                        <div className={classes.suggestedUserData}>
                            <span>Abhishek Kuttba</span>
                            <span className={classes.suggestedMsg}>Suggested to you</span>
                        </div>
                        <button className={classes.followBtn}>Follow</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuggestedUsers