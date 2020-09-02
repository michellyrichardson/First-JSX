import React from "react";

class Myfirstjsx extends React.Component {
    constructor(prop){
        super(prop);
    }

    render() {
        return(
            <div>
                <h3>Things I need to do:</h3>
                <li>Learn React</li>
                <li>Climb Mt. Everest</li>
                <li>Run a Marathon</li>
                <li>Feed the dogs</li>
            </div>
        )
    }
}

export default Myfirstjsx;