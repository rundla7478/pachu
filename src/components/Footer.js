import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
   return(
   	  <>
		<div className="footer_section">
		<div className="container">
		<div className="row">
		<div className="col-md-4">
		<div className="footer_par">
		<p>Copyright@2017 All Rights Reserved</p>
		</div>
		</div>
		<div className="col-md-4">
		<div className="footer-logo">
		<Link to="/"><img src="/images/footer-logo.png"/></Link>
		</div>
		</div>
		<div className="col-md-4">
		<div className="footer_social_icon">
		<ul>
		<li>
		<a href="#"><i className="fa fa-facebook"></i></a>
		</li>
		<li>
		<a href="#"><i className="fa fa-twitter"></i></a>
		</li>
		<li>
		<a href="#"><i className="fa fa-instagram"></i></a>
		</li>
		<li>
		<a href="#"><i className="fa fa-pinterest-p"></i></a>
		</li>
		<li>
		<a href="#"><i className="fa fa-linkedin"></i></a>
		</li>
		</ul>
		</div>
		</div>
		</div>
		</div>
		</div>
   	  </>
   );
}
export default Footer;