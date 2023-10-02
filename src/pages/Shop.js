import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ecommerceData from '../ecommerceData';
import ReactPaginate from 'react-paginate';

function Shop(){

const itemsPerPage = 8;
 const [currentPage, setCurrentPage] = useState(0);

 const offset = currentPage * itemsPerPage;

 const paginatedCauses = ecommerceData.slice(offset, offset + itemsPerPage);

  const handlePageChange = (selectedPage) => {
  	 setCurrentPage(selectedPage.selected);
  }


  return(
    <>
     <div className="top_banner_head" style={{backgroundImage: 'url(images/banner-top.png)'}}>
      <div className="container">
        <div className="top_banner_head_content">
	        <h1>Shop</h1>
          <ul>
            <li>
              <Link to="/">Home ></Link>
            </li>
            <li>
              <Link to="#">Shop</Link>
            </li>
          </ul>
	      </div>
      </div>
    </div>

	<div className="shop-inner">
	<div className="container">
	<div className="row">
  {paginatedCauses.map((product, index) => (
	<div className="col-md-3" key={index}>
	<div className="shop-inner-txt">
	<div className="shop-inner-txt-img">
	<img src={product.image} />
	<div className="shop-donate">
	<Link to="#" className="shop-donate-btn">Donate Now</Link>
	</div>
	</div>
	<div className="shop-inner-content">
	<h3>{product.name}</h3>
	<p>${product.price}</p>
	</div>
	</div>
	</div>
  ))}


	</div>
	<nav aria-label="Page navigation example">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={Math.ceil(ecommerceData.length / itemsPerPage)}
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
export default Shop;