import React from 'react';
import './TitleBar.css';


function TitleBar(props){
    return(
        <div className="row row-spacer">
            <div className="col-md-12" style={{padding:0}}>
                <div className = "titlebar-nav">
                    <h1>Anything & Everything</h1>
                </div>
            </div>
        </div>
    )
}

export default TitleBar;