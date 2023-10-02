import React from 'react';

function OurCausesSection({causesData}){
   return(
      <>
        <div className="our-causes">
		<div className="container">
		<div className="row">
		<div className="our-causes-top">
		<h1>{causesData.title}</h1>
		<p>{causesData.description}</p>
		</div>
		</div>
		<div className="row">
        
        {causesData.causesList.map((list, index) => (
		<div className="col-md-3">
		<div className="our-causes-list">
		<div className="our-causes-list-img">
		<img src={list.image}/>
		</div>
		<h3>{list.title}</h3>
		<p>{list.description}</p>
		<div className="btn_our-view">
		<a href={list.link} className="btn-read-more">View More</a>
		</div>
		</div>
		</div>
        ))}

		</div>
		</div>
		</div>
      </>
   );
}
export default OurCausesSection;