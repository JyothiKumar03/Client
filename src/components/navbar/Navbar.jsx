import React from 'react';
// import logo from './../../assets/logofont.svg';
//import  Name from './images/Name.png'
import './../../components/navbar/navbar.css';
import Name from '../../Name.png';
// import studentImage from '../../';

const NavLinks = () => (
	<React.Fragment>
		<p>
			<a href="/role-selection">Get Started</a>
		</p>
		{/* <p>
			<a href="/">Product</a>
		</p> */}
		<p>
			<a href="/">Login</a>
		</p>
		 <p>
			<a href="/">Pricing</a>
		</p>
		<p>
			<a href="/">Contact Us</a>
		</p>
		<p>
			<a href="/login">Login</a>
		</p>
	</React.Fragment>
);

const Navbar = () => {
	return (
		<div className="landing-navbar">
			<div className="landing-navbar-logo">
				<img src={Name} alt="aankh-logo" />
			</div>
			<div className="landing-navbar-links">
				<NavLinks />
			</div>
		</div>
	);
};

export default Navbar;
