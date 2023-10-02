import React from 'react';
import BannerSection from './homesection/BannerSection';
import MiddleContent from './homesection/MiddleContent';
import OurCausesSection from './homesection/OurCausesSection';
import MiddleBannerContent from './homesection/MiddleBannerContent';
import BlogSection from './homesection/BlogSection';

function Home(){
 const middlecontentData = [
      {
      	iconClass: 'fa fa-heart',
      	title: 'DONATE HEART',
      	value: '6580'
      },
      {
      	iconClass: 'fa fa-users',
      	title: 'SAVE LIFE',
      	value: '252'
      },
      {
      	iconClass: 'fa fa-home',
      	title: 'DONATE HOUSE',
      	value: '2521'
      },
      {
      	iconClass: 'fa fa-money',
      	title: 'DONATE MONEY',
      	value: '25.2K'
      }
 ];

 const causesData = {
      title: 'OUR CAUSES',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      causesList: [
          {
          	title: 'Homeless People',
          	description: 'Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industrys',
          	image: '/images/our-causes1.png',
          	link: '#'
          },
          {
          	title: 'Feeding Hungar',
          	description: 'Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industrys',
          	image: '/images/our-causes2.png',
          	link: '#'
          },
          {
          	title: 'Clean Drinking water',
          	description: 'Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industrys',
          	image: '/images/our-causes3.png',
          	link: '#'
          },
          {
          	title: 'Child Education',
          	description: 'Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industrys',
          	image: '/images/our-causes4.png',
          	link: '#'
          }
      ]
 };

 const middleBannerContentData = {
 	  title: 'Charity sees the needs, not the cause',
 	  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been<br/>the industrys standard dummy text ever since the 1500s',
 	  buttonTitleOne: 'DONATE NOW',
 	  ButtonOneLink: '#',
 	  buttonTitleTwo: 'READ MORE',
 	  buttonTwoLink: '#'
 };

 const blogData={
 	   heading: 'OUR BLOG',
     title: 'How to Donate to childrens?',
     description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,',
     image: '/images/blog-img1.png',
     date: 'Dec 05,2016',
     author: 'Lorem K'
 }


  return(
     <>
		 <BannerSection backbroundImage="/images/banner-home.png" titleImage="/images/chiller-text.png" buttonText="Check Our Causes" buttonLink="#" />
       
		 <MiddleContent data={middlecontentData} />

		 <OurCausesSection causesData={causesData} />
     
     <MiddleBannerContent middleBannerContentData = {middleBannerContentData} />
		
     <BlogSection blogData = {blogData} />

     </>
  );
}
export default Home;