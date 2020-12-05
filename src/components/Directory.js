import React from "react";

function Directory(props) {
    return (
        <div className="container">
            <center><h2>Employee Directory</h2></center>
            {props.results.map(result => (
                <div className="card" key={result.login.username}>
                    <div className="card-body row">
                        <div className="col-3">
                        <img alt={result.name.first} className="img-fluid" src={result.picture.large} />
                        </div>
                        <div className="col-5">    
                        <h5>{result.name.first} {result.name.last}</h5>
                        <p>Home Phone: {result.phone}</p>
                        <p>Cell Phone: {result.cell}</p>
                        <p>email: {result.email}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Directory;