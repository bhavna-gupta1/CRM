import React from 'react'
import logo from '../Image/logo.png'
import { useState } from 'react';
import './Home.css'

import Homepgdata from '../Homepgdata'; 

function Home() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (index) => {
        setSelectedItem(index === selectedItem ? null : index); // Toggle selection
    };
  return (
    <>
    <div className='main_box'>
<div className='firstpg_Maindiv'>
        <div className='logo'>
        <img src={logo}></img>
        <p>WORKTOOL</p>
        </div>
        </div>
        <div className='home_content_div'>
            <div className='home_content'>
                <p className='blue_head'>Welcome to CRM</p>
                <p className='grey_head'>choose your products</p>
                <div className='product_item_list'>
                    {Homepgdata.map((item, index) => (
                        <div 
                            key={index} 
                            className={`product_item ${selectedItem === index ? 'selected' : ''}`}
                            onClick={() => handleItemClick(index)}
                        >
                            <img src={item.img} alt={item.name} className='product_image' />
                            <p className='product_name'>{item.name}</p>
                        </div>
                    ))}
                </div>


                </div>
            </div>


        
       </div>

    </>
  )
}

export default Home