import React from 'react';
import { NavLink } from 'react-router-dom';
function Header(){
   return(
       <>
		<div className="top_bar">
		<div className="container">
		<div className="row">
		<div className="col-md-6">
		<div className="left_top">
		<ul>
		<li>
		<a href="#"><img src="/images/globe.png"/> LANGUAGES</a>
		</li>
		<li>
		<a href="#"><img src="/images/share.png"/> OUR  SOCIAL</a>
		</li>
		</ul>
		<ul>
		<li>
		<a href="#"><i className="fa fa-facebook"></i></a>
		</li>
		<li>
		<a href="#"><i className="fa fa-twitter"></i></a>
		</li>
		<li>
		<a href="#"><i className="fa fa-linkedin"></i></a>
		</li>
		<li>
		<a href="#"><i className="fa fa-pinterest-p"></i></a>
		</li>
		</ul>
		</div>
		</div>
		<div className="col-md-6">
		<div className="right_btn_donate">
		<a href="#">DONATE NOW</a>
		</div>
		</div>
		</div>
		</div>
		</div>

		<div className="main_header">
		<div className="container">
		<div className="row">
		<div className="col-md-3">
		<div className="logo">
		<NavLink to="/" activeClassName="active"><img src="/images/logo.png" alt="Logo"/></NavLink>
		</div>
		</div>
		<div className="col-md-9">
		<div className="menu_main">
		<nav className="navbar navbar-expand-lg navbar-light">
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarText">
		<ul className="navbar-nav">
		<li className="nav-item">
		<NavLink className="nav-link" exact to="/" activeClassName="active">HOME</NavLink>
		</li>
		<li className="nav-item">
		<NavLink className="nav-link" to="/our-causes" activeClassName="active">CAUSES</NavLink>
		</li>
		<li className="nav-item">
		<NavLink className="nav-link" to="/shop" activeClassName="active">SHOP</NavLink>
		</li>
		<li className="nav-item">
		<NavLink className="nav-link" to="/blog" activeClassName="active">BLOGS</NavLink>
		</li>
		<li className="nav-item">
		<NavLink className="nav-link" to="/contact" activeClassName="active">CONTACT</NavLink>
		</li>
		</ul>
		</div>
		</nav>
		</div>
		</div>
		</div>
		</div>
		</div>

       </>
   	);
}
export default Header;