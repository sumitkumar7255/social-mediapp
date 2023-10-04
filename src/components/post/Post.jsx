import React from 'react'
import classes from './post.module.css'
import profileUserImg from '../../assets/woman.jpg'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiMessageRounded} from 'react-icons/bi'
import {BsBookmark} from 'react-icons/bs'


const Post = () => {
  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <div className={classes.top}>
              <div className={classes.topLeft}>
              <img src={profileUserImg} className={classes.profileUserImg}/>
                <div className={classes.profileMetadata}>
                    <span>Sumit</span>
                    <span>4'Oct 2023</span>
                </div>
              </div>
             <HiOutlineDotsVertical size={25}/>
            </div>
            <div className={classes.center}>
                <div className={classes.desc}>My first post!</div>
                <img src={profileUserImg} className={classes.postImg} />
            </div>
            <div className={classes.controls}>
                <div className={classes.controlsLeft}>
                    <AiOutlineHeart />
                    <BiMessageRounded />
                </div>
                <div className={classes.controlsRight}>
                    <BsBookmark />
                </div>
            </div>
            <div className={classes.comments}>
                <div className={classes.comment}>
                    <div className={classes.commentLeft}>
                      <img src={profileUserImg} className={classes.commentImg}/>
                      <div className={classes.commentData}>
                        <span>Sumit</span>
                        <span className={classes.commentTimeago}>1 hour ago</span>
                      </div>
                      <div className={classes.commentText}>Nice post Sumit!</div>
                    </div>
                    <div className={classes.commentRight}>
                        <AiOutlineHeart />
                        <span>5k likes</span>
                    </div>
                </div>
                <div className={classes.comment}>
                    <div className={classes.commentLeft}>
                      <img src={profileUserImg} className={classes.commentImg}/>
                      <div className={classes.commentData}>
                        <span>Sumit</span>
                        <span className={classes.commentTimeago}>1 hour ago</span>
                      </div>
                      <div className={classes.commentText}>Nice post Sumit!</div>
                    </div>
                    <div className={classes.commentRight}>
                        <AiOutlineHeart />
                        <span>50M likes</span>
                    </div>
                </div>
                <div className={classes.comment}>
                    <div className={classes.commentLeft}>
                      <img src={profileUserImg} className={classes.commentImg}/>
                      <div className={classes.commentData}>
                        <span>Sumit</span>
                        <span className={classes.commentTimeago}>1 hour ago</span>
                      </div>
                      <div className={classes.commentText}>Nice post Sumit!</div>
                    </div>
                    <div className={classes.commentRight}>
                        <AiOutlineHeart />
                        <span>5k likes</span>
                    </div>
                </div>
            </div>
            <div className={classes.postCommentSection}>
                <input type="text" className={classes.inputSection} placeholder='Type here...'/>
                <button>Post</button>
            </div>
        </div>
    </div>
  )
}

export default Post