import Cell from "./Cell";
import Player from "./Player";
import {useState} from "react";
import RoadGenerator from "./RoadGenerator";

function Road({RoadContent})
{
    const [roadContent, setRoadContent] = useState(RoadContent);
    const [road, setRoad] = useState(roadContent.content);
    setTimeout(() => {
        setRoadContent(roadContent.move);
        setRoad(roadContent.content)
    }, 1000)

    console.log(`roadContent=${roadContent}`)
    return [
        <p>{road}</p>,
        <table className="road">
            <tbody>
            <tr>
                <Player></Player>
                <RoadGenerator codeArray={road}></RoadGenerator>
            </tr>
            </tbody>
        </table>
    ]
}
export default Road

