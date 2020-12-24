import React from 'react'

const Loading = () => {

    const gif = "https://thumbs.gfycat.com/BitterEarnestBeardeddragon-small.gif";

    return (
        <div className="loading-gif flex flex-center">
            <img src={gif} alt="Loading Gif"/>
        </div>
    )
}

export default Loading
