import Cell from "./Cell";

function RoadGenerator({codeArray}){
    let road = []

    codeArray.forEach(
        (code, index) => {
            road.push(<Cell code={code} key={`Cell_${index}`}></Cell> )
        }
    )
    return road;
}

export default RoadGenerator;