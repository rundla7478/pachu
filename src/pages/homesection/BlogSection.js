import React from 'react';

function BlogSection({blogData}){
  return(
     <>
       <div class="our-blog">
		<div class="container">
		<div class="our-causes-top">
		<h1>{blogData.heading}</h1>
		</div>
		<div class="our-blog-inner">
		<div class="our-blog-inner-img">
		<img src={blogData.image}/>
		</div>
		<h2>{blogData.title}</h2>
		<div class="our-blog-dates">
		<ul>
		<li><i class="fa fa-calendar" aria-hidden="true"></i> {blogData.date}</li>
		<li><i class="fa fa-user"></i> {blogData.author}</li>
		</ul>
		</div>
		<p>{blogData.description}</p>
		</div>
		</div>
		</div>
     </>
  );
}
export default BlogSection;