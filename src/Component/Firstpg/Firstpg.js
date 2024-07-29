import React from 'react'
import googlelogo from '../Image/google.png'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logo from '../Image/logo.png'
import tableman from '../Image/tableman.png'
import Slider from 'react-slick';
import './Firstpg.css'
function Firstpg() {
    const navigate=useNavigate();
   function handle_register(){
    navigate('/register')
   }
   function home(){
    navigate('/home')
   }

    const carouselSlides = [
        { img: tableman, text: "Meaningful alt text for Image 1nnnnnnnn nnnnnnnnnnn jjjjjjjjjjjjjj" },
        { img: tableman, text: "Meaningful altlorem23mkfkrn jnrg jrgjmmmmmmmmmmm kkkkkkkkk kkkkkkkkkkkk jjjjjjjjjjj text for Image 2" },
        { img: tableman, text: "Meaningful alt text for Image 3" },
        { img: tableman, text: "Meaningful alt text for Image 4" },
        // Add more slides as needed
      ];
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <>
   <div className='main_box'>
   <div className='firstpg_Maindiv'>
        
        <div className='logo'>
        <img src={logo}></img>
        <p>WORKTOOL</p>
        </div>
        <div className='nav_div'>
        <ul className='nav_div'>
            <li onClick={home}>
                HOME
            </li>
            <li>
                ABOUT
            </li>
            <li>
                CONTACT
            </li>
            <li>
                HELP
            </li>
        </ul>
        </div>
       <div className='sign_register_btn'>
         <p>Sign In</p>
         <button onClick={handle_register}>Register</button>
       </div>
       </div>
       <div className='second_div'>
       <p>
        <span >All in one</span>{' '}
        <span className="blue_text">office tool</span>{' '}
        <span >you need</span>
      </p>
      
</div>
<p className='crmhrm_text'>CRM + HRM and much more</p>

<div className='third_div'>
    <div className='left_div'>
    <Slider {...settings}>
            {carouselSlides.map((slide, index) => (
              <div key={index} className='carousel-slide'>
                <img src={slide.img} alt={`Slide ${index + 1}`} />
                {slide.text && <p className='carousel-text'>{slide.text}</p>}
              </div>
            ))}
          </Slider>
    </div>

    
    
    <div className='right_div'>
   <input type='string' placeholder='username'/>
   <input type='password' placeholder='password'/>
  <p className='forget'>Forget Password</p>
  <button className='signin'>SIGIN IN</button>
  <p className='continue'>-------------or continue with-------------</p>
  <button className='googlebtn'>
        <img src={googlelogo}/>
        <p className='google_text'>continue to sing in</p>
    </button>
     </div>
    
</div>
   </div>
    </>
  )
}

export default Firstpg