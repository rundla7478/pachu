import React from 'react';

function removeBrTags(html) {
  // Use a regular expression to remove <br> tags
  return html.replace(/<br\s*\/?>/g, '');
}

function MiddleBannerContent({middleBannerContentData}){
   return(
      <>
        <div className="middle_banner_content">
		<div className="container">
		<div className="row">
		<h1>{middleBannerContentData.title}</h1>
		<p dangerouslySetInnerHTML={{ __html: removeBrTags(middleBannerContentData.description) }} />
		<div className="middle-btn">
		<a href={middleBannerContentData.ButtonOneLink} className="btn_donate_now">{middleBannerContentData.buttonTitleOne}</a>
		<a href={middleBannerContentData.buttonTwoLink} className="btn_read_more">{middleBannerContentData.buttonTitleTwo}</a>
		</div>
		</div>
		</div>
		</div>
      </>
   );
}
export default MiddleBannerContent;