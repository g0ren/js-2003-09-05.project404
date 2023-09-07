import {useState} from "react";

function Player() {
    let frames = [
        "/img/dino.png",
        "/img/dinostep1.png",
        "/img/dino.png",
        "/img/dinostep2.png"
    ]

    const [currentFrame, setCurrentFrame] = useState(0);
    const [url, setUrl] = useState(frames[currentFrame])

    setTimeout(() => {
        setCurrentFrame((currentFrame + 1) % frames.length)
        setUrl(frames[currentFrame])
        },
        125
    )

    return(
        <td className="cell-bot">
            <img className="obj-bot" src={url} alt=""/>
        </td>
    )
}
export default Player