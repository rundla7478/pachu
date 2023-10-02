import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import causesData from '../causesData.json';
import ReactPaginate from 'react-paginate';

function OurCauses(){
 const itemsPerPage = 4;
 const [currentPage, setCurrentPage] = useState(0);

 const offset = currentPage * itemsPerPage;

 const paginatedCauses = causesData.slice(offset, offset + itemsPerPage);

  const handlePageChange = (selectedPage) => {
  	 setCurrentPage(selectedPage.selected);
  }


  return(
     <>
		<div className="top_banner_head" style={{backgroundImage: 'url(/images/banner-top.png)'}}>
		<div className="container">
		<div className="top_banner_head_content">
		<h1>Our Causes</h1>
		<ul>
		<li>
		<Link to="/">Home ></Link>
		</li>
		<li>
		<Link to="#">Our Causes</Link>
		</li>
		</ul>
		</div>
		</div>
		</div>

		<div className="our-causes-listing">
		<div className="container">
    {paginatedCauses.map((cause, index) => (
		<div className="row" key={index}>
		<div className="col-md-5">
		<div className="our-causes-listing-img">
		<img src={cause.imageSrc}/>
		</div>
		</div>
		<div className="col-md-7">
		<div className="our-causes-listing-inner">
		<h3>{cause.title}</h3>
		<div className="our-causes-tag">
		<ul>
		<li>Raised: {cause.raisedAmount}</li>
		<li>Goal: {cause.goalAmount}</li>
		</ul>
		</div>
		<p>{cause.description}</p>
		<Link to={cause.donateLink} className="btn_donate_now_causes">Donate Now</Link>
		</div>
		</div>
		</div>
    ))}

		<nav aria-label="Page navigation example">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={Math.ceil(causesData.length / itemsPerPage)}
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
export default OurCauses;