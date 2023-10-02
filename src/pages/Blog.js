import React, {useState} from 'react';
import blogData from '../blogData';
import ReactPaginate from 'react-paginate';

function Blog(){

  const itemsPerPage = 8;
 const [currentPage, setCurrentPage] = useState(0);

 const offset = currentPage * itemsPerPage;

 const paginatedCauses = blogData.slice(offset, offset + itemsPerPage);

  const handlePageChange = (selectedPage) => {
  	 setCurrentPage(selectedPage.selected);
  }

   return(
      <>
		<div className="top_banner_head" style={{backgroundImage: 'url(images/banner-top.png)'}}>
		<div className="container">
		<div className="top_banner_head_content">
		<h1>Blog</h1>
		<ul>
		<li>
		<a href="#">Home ></a>
		</li>
		<li>
		<a href="#">Blog</a>
		</li>
		</ul>
		</div>
		</div>
		</div>

		<div className="blog-listing">
		<div className="container">
		<div className="row">
      {paginatedCauses.map((blog, index) => (
		<div className="col-md-3">
		<div className="blog-listing-inner">
		<div className="blog-listing-inner-img">
		<img src={blog.image}/>
		</div>
		<h3>{blog.title}</h3>
		<div className="our-blog-dates-inner">
		<ul>
		<li><i className="fa fa-calendar" aria-hidden="true"></i> {blog.date}</li>
		<li><i className="fa fa-comment"></i> {blog.comments}</li>
		</ul>
		</div>
		<p>{blog.content}</p>
		</div>
		</div>
      ))}

		</div>

		<nav aria-label="Page navigation example">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={Math.ceil(blogData.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          nextClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextLinkClassName={'page-link'}
        />
		</nav>
		</div>
		</div>
      </>
   );
}
export default Blog;