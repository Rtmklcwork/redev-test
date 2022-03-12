import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?s=612x612'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    new post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        Post1
                    </div>
                    <div className={s.item}>
                        Post2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;