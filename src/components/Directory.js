import React from "react";

function Directory(props) {
    return (
        <div className="container">
            {props.results.map((result) => (
                <div className="card">
                    <div className="card-body" key={result.id.value}>
                        <h5>{result.name.first}</h5>
                        <img alt={result.name.first} className="img-fluid" src={result.picture.thumbnail.url} />

                    </div>
                </div>
            ))}
        </div>
    );
}

export default Directory;