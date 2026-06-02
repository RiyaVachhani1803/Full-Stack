import { useState } from 'react'

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    let [click, setClicks] = useState(0);    

    let toggleLike = () => {
        setIsLiked(!isLiked);
        setClicks(click + 1);
    }

    let LikeStyle = {color: "red"}

    return (
        <div>
            <p>Clicks: {click}</p>
            <p onClick={toggleLike}>
                {isLiked ? (
                    <i className="fa-solid fa-heart" style={LikeStyle} ></i>
                ) : (
                    <i className="fa-regular fa-heart"></i>
                )}
            </p>
        </div>
    );
}