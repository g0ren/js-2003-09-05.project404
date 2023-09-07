import React from 'react';
import ReactDOM from 'react-dom/client';
import RoadContent from "./RoadContent";
import Road from "./Road";

const root = ReactDOM.createRoot(document.getElementById('react'));

root.render(
<>
        <p>Hello world!</p>
        <Road RoadContent={new RoadContent()}></Road>
</>
);
