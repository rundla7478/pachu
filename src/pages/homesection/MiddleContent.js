import React from 'react';

function MiddleContent({data}){
    return(
       <>
        <div className="middle-content">
		<div className="container">
		<div className="row">
        {data.map((item, index) => (
		<div className="col-md-3" key={index}>
		<div className="middle-content-text">
		<i className={item.iconClass}></i>
		<h3>{item.title}</h3>
		<h2>{item.value}</h2>
		</div>
		</div>
        ))}
		</div>
		</div>
		</div>
       </>
    );
}
export default MiddleContent;