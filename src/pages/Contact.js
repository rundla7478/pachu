import React, {useState} from 'react';

function Contact(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle form submission logic here, such as sending the data to a server
    console.log('Form submitted with data:', { name, email, phone, message });

    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };



   return(
      <>
		<div className="top_banner_head" style={{backgroundImage: 'url(images/banner-top.png)'}}>
		<div className="container">
		<div className="top_banner_head_content">
		<h1>Contact Us</h1>
		<ul>
		<li>
		<a href="#">Home ></a>
		</li>
		<li>
		<a href="#">Contact Us</a>
		</li>
		</ul>
		</div>
		</div>
		</div>

		<div className="get-in-touch">
		<div className="container">
		<div className="top_head_get">
		<h2><span>GET</span> IN TOUCH</h2>
		<p>Lorem ipsum dolor sit amet, mei vitae labitur omittam cu,<br/>te dolore ea sumo admodum cum.</p>
		</div>
		<div className="row">
		<div className="col-md-4">
		<div className="get-touch-address">
		<i className="fa fa-home"></i>
		<h3>ADDRESS</h3>
		<p>Jaipur Textile Market ( JTM )<br/> Jaipur, India</p>
		</div>
		</div>
		<div className="col-md-4">
		<div className="get-touch-address">
		<i className="fa fa-phone-square" aria-hidden="true"></i>
		<h3>CALL US</h3>
		<p>+91 9461017829 <br/>+91 9414464158</p>
		</div>
		</div>
		<div className="col-md-4">
		<div className="get-touch-address">
		<i className="fa fa-envelope" aria-hidden="true"></i>
		<h3>EMAIL US</h3>
		<p>donate@charity.com <br/>causes@charity.com</p>
		</div>
		</div>
		</div>
		</div>
		</div>

		<div className="leave-msg-form">
		<div className="container">
		<div className="top_head_get">
		<h2><span>LEAVE</span> A MESSAGE</h2>
		<p>Lorem ipsum dolor sit amet, mei vitae labitur omittam cu,<br/>te dolore ea sumo admodum cum.</p>
		</div>
		<form className="contact-form" onSubmit={handleSubmit}>
		<div className="row">
		<div className="col-md-6">
		 <div className="form-group">
		   <input
		     type="text"
		     className="form-control"
		     id="yourname"
		     placeholder="Your Name*"
		     value={name}
		     onChange={(e) => setName(e.target.value)}
		     required
		   />
		 </div>
		 <div className="form-group">
		   <input
		     type="email"
		     className="form-control"
		     id="youremail"
		     placeholder="Your Email*"
		     value={email}
		     onChange={(e) => setEmail(e.target.value)}
		     required
		   />
		 </div>
		 <div className="form-group">
		   <input
		     type="tel"
		     className="form-control"
		     id="yourphone"
		     placeholder="Your Phone*"
		     value={phone}
		     onChange={(e) => setPhone(e.target.value)}
		     required
		   />
		 </div>
		</div>
		<div className="col-md-6">
		 <div className="form-group">
		   <textarea
		     className="form-control"
		     id="yourmessage"
		     rows="3"
		     placeholder="Your Message*"
		     value={message}
		     onChange={(e) => setMessage(e.target.value)}
		     required
		   ></textarea>
		 </div>
		</div>
		<div className="col-md-12">
		 <input type="submit" className="btn-submit" value="Submit" />
		</div>
		</div>
		</form>
		</div>
		</div>
      </>
   );
}
export default Contact;