import {useRef} from "react";

function Ptero() {
    const cell = useRef(null)
    function getCellWidth(){
        return cell === null ? null : cell.current.scrollWidth;
    }

    return (
    <td className= "cell-top" ref={cell}>
        <img src = "/img/ptero.png" className="obj-top" alt=""/>
    </td>
    )
}
export default Ptero

