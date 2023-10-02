import React from 'react';

function BannerSection({backbroundImage, titleImage, buttonText, buttonLink}){
  return(
      <>
        <div className="slider_banner" style={{backgroundImage: `url(${backbroundImage})`}}>
		<div className="container">
		<div className="slider_content">
		<img src={titleImage} />
		<div className="slider_content_btn">
		<a href={buttonLink} className="btn_check_causes">{buttonText}</a>
		</div>
		</div>
		</div>
		</div>
      </>
  );
}
export default BannerSection;