import {useRef} from "react";

function Cactus() {
    const cactus= useRef(null)
    function handleClick(){
        console.log(cactus.current.offsetWidth)
        console.log(cactus.current.scrollWidth)
        console.log(cactus.current.clientWidth)
    }
    return (
        <td className= "cell-bot" ref={cactus}>
            <img src = "/img/cactus.png" className="obj-bot" onClick={handleClick} alt=""/>
        </td>
    )
}
export default Cactus