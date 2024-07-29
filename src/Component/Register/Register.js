import React from 'react'
import logo from '../Image/logo.png'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import register_img from '../Image/register_img.png'
import googlelogo from '../Image/google.png'
function Register() {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const navigate=useNavigate();
function home(){
    navigate('/home')
}
    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setSelectedState(""); // Reset state when country changes
    };

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
    };
    const companyTypes = ["Select Company Type", "Private", "Public", "Non-Profit", "Government"];
    const sizes = ["Select Size", "Small", "Medium", "Large"];
    const countries = [
        { name: "Select Country", states: [] },
        { name: "United States", states: ["California", "Florida", "New York"] },
        { name: "India", states: ["Delhi", "Karnataka", "Maharashtra"] },
        // Add more countries and their states as needed
    ];

    const states = selectedCountry
        ? countries.find(country => country.name === selectedCountry)?.states || []
        : [];
  return (
   <>
   <div className='main_register_div'>
   <div className='firstpg_Maindiv'>
        
        <div className='logo'>
        <img src={logo}></img>
        <p>WORKTOOL</p>
        <button className='logo_home_btn' onClick={home}>Home</button>
        </div>
        
        {/* <div className='nav_div'>
        <ul className='nav_div'>
            <li>
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
        </div> */}
        </div>

       <div className='heading_register'>
       <p>Registeration</p>
       </div>

 <div className='full_form_div'>
    <div className='left_one'>
    <div className='leftside'>
      <div className='form_data'>
         <input className='fullname' placeholder='Full name' type=''/>
         <div className='date_gender'>
         <input placeholder='D-O-B' type='string'/> 
         <select className='gender_select'>
                                        <option value="" disabled selected>Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
         </div>
         <input placeholder='Phone number' className='Phone_number' type='string'/>
       </div>
       <div className='otp'>
    <input placeholder='OTP' type='number'/>
    <button >VERIFY</button>
   
       </div>
       <p className='resend'>Resend</p>
       <input placeholder='Email' type='string' className='email'/>
      </div>
      <div className='otp'>
    <input placeholder='OTP' type='number'/>
    <button >VERIFY</button>
   
       </div>
       <p className='resend'>Resend</p>
       
<p className='oruse'>-------------------or use-------------------</p>
<button className='google_btn_register_pg'>
        <img src={googlelogo}/>
        <p className='googlelogo_text'>VERIFY</p>
    </button>
    </div>
    <div className='right_one'>
    <div className='leftside'>
      <div className='form_data'>
         <input className='fullname' placeholder='Company Name' type='string'/>
         <div className='date_gender'>
         <select>
                                    {companyTypes.map((type, index) => (
                                        <option key={index} value={type}>{type}</option>
                                    ))}
                                </select>
                                <select>
                                    {sizes.map((size, index) => (
                                        <option key={index} value={size}>{size}</option>
                                    ))}
                                </select>
         </div>
         <input placeholder='Company Field' className='Phone_number' type='string'/>
       </div>
       
       
       <input placeholder='Address' type='string' className='email'/>
      </div>
      <div className='date_gender'>
    
                                    <select value={selectedCountry} onChange={handleCountryChange} className='country_select'>
                                        {countries.map((country, index) => (
                                            <option key={index} value={country.name}>{country.name}</option>
                                        ))}
                                    </select>
                                    <select value={selectedState} onChange={handleStateChange} className='state_select' disabled={!selectedCountry}>
                                        <option value="" disabled selected>Select State</option>
                                        {states.map((state, index) => (
                                            <option key={index} value={state}>{state}</option>
                                        ))}
                                    </select>
                               
         </div>
         <input placeholder='pin/zip/postal/code' className='Phone_number' type='string'/>
       
    </div>
<div className='img_register_btn'>
<img className='register_img' src={register_img} />
<button  className='Registration_buton'>REGISTER</button>
</div>
 </div>
   </div>
   </>
  )
}

export default Register