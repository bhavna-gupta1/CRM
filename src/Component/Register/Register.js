import React from 'react'
import logo from '../Image/logo.png'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import register_img from '../Image/register_img.png'
function Register() {
   
  return (
   <>
   <div className='main_register_div'>
   <div className='firstpg_Maindiv'>
        
        <div className='logo'>
        <img src={logo}></img>
        <p>WORKTOOL</p>
        </div>
        <div className='nav_div'>
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
        </div>
        </div>

       <div className='heading_register'>
       <p>Registeration</p>
       </div>
      <div className='leftside'>
      <div className='form_data'>
         <input placeholder='Full name'/>
       </div>
      </div>


   </div>
   </>
  )
}

export default Register