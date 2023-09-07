import Empty from "./Empty";
import Cactus from "./Cactus";
import React, {useRef} from "react";
import Ptero from "./Ptero";

function Cell({code}) {
    if(code === 0){
        return (<Empty></Empty>)
    }
    else if (code === 1){
        return (<Cactus></Cactus>)
    }else{
        return (<Ptero></Ptero>)
    }
}
export default Cell


