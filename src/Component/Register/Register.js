import React from 'react';
import logo from '../Image/logo.png';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import register_img from '../Image/register_img.png';
import googlelogo from '../Image/google.png';
import { Formik, Field, Form } from 'formik';


function Register() {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const navigate = useNavigate();

    function home() {
        navigate('/home');
    }

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setSelectedState(""); // Reset state when country changes
    };

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
    };

    const companyTypes = ["Company Type", "Private", "Public", "Non-Profit", "Government"];
    const sizes = ["Size", "Small", "Medium", "Large"];
    const countries = [
        { name: "Country", states: [] },
        { name: "United States", states: ["California", "Florida", "New York"] },
        { name: "India", states: ["Delhi", "Karnataka", "Maharashtra"] },
    ];

    const states = selectedCountry
        ? countries.find(country => country.name === selectedCountry)?.states || []
        : [];

    return (
        <>
            <div className='main_box'>
                <div className='firstpg_Maindiv'>
                    <div className='logo'>
                        <img src={logo} alt="logo" />
                        <p>WORKTOOL</p>
                        <button className='logo_home_btn' onClick={home}>Home</button>
                    </div>
                </div>

                <div className='heading_register'>
                    <p>Registration</p>
                </div>

                <Formik
                    initialValues={{
                        fullName: '',
                        dob: '',
                        gender: '',
                        phoneNumber: '',
                        email: '',
                        companyName: '',
                        companyType: '',
                        companySize: '',
                        companyField: '',
                        address: '',
                        country: '',
                        state: '',
                        postalCode: ''
                    }}
                    onSubmit={values => {
                        console.log(values);
                        // Handle form submission
                    }}
                >
                    {({ setFieldValue }) => (
                        <Form className='full_form_div'>
                            <div className='left_one'>
                                <div className='leftside'>
                                    <div className='form_data'>
                                        <Field name='fullName' className='fullname' placeholder='Full name' />
                                        <div className='date_gender'>
                                            <Field name='dob' placeholder='D-O-B' type='text' />
                                            <Field as='select' name='gender' className='gender_select'>
                                                <option value="" disabled>Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </Field>
                                        </div>
                                        <Field name='phoneNumber' placeholder='Phone number' className='Phone_number' type='text' />
                                    </div>
                                    <div className='otp'>
                                        <Field name='otpPhone' placeholder='OTP' type='number' />
                                        <button type='button'>VERIFY</button>
                                    </div>
                                    <p className='resend'>Resend</p>
                                    <Field name='email' placeholder='Email' type='text' className='email' />
                                    <div className='otp'>
                                        <Field name='otpEmail' placeholder='OTP' type='number' />
                                        <button type='button'>VERIFY</button>
                                    </div>
                                    <p className='resend'>Resend</p>
                                    <p className='oruse'>-------------------or use-------------------</p>
                                    <button type='button' className='google_btn_register_pg'>
                                        <img src={googlelogo} alt="google logo" />
                                        <p className='googlelogo_text'>VERIFY</p>
                                    </button>
                                </div>
                            </div>

                            <div className='right_one'>
                                <div className='leftside'>
                                    <div className='form_data'>
                                        <Field name='companyName' className='fullname' placeholder='Company Name' />
                                        <div className='date_gender'>
                                            <Field as='select' name='companyType'>
                                                {companyTypes.map((type, index) => (
                                                    <option key={index} value={type}>{type}</option>
                                                ))}
                                            </Field>
                                            <Field as='select' name='companySize'>
                                                {sizes.map((size, index) => (
                                                    <option key={index} value={size}>{size}</option>
                                                ))}
                                            </Field>
                                        </div>
                                        <Field name='companyField' placeholder='Company Field' className='Phone_number' type='text' />
                                    </div>
                                    <Field name='address' placeholder='Address' type='text' className='email' />
                                    <div className='date_gender'>
                                        <Field as='select' name='country' value={selectedCountry} onChange={e => {
                                            handleCountryChange(e);
                                            setFieldValue('country', e.target.value);
                                        }} className='country_select'>
                                            {countries.map((country, index) => (
                                                <option key={index} value={country.name}>{country.name}</option>
                                            ))}
                                        </Field>
                                        <Field as='select' name='state' value={selectedState} onChange={e => {
                                            handleStateChange(e);
                                            setFieldValue('state', e.target.value);
                                        }} className='state_select' disabled={!selectedCountry}>
                                            <option value="" disabled>Select State</option>
                                            {states.map((state, index) => (
                                                <option key={index} value={state}>{state}</option>
                                            ))}
                                        </Field>
                                    </div>
                                    <Field name='postalCode' placeholder='pin/zip/postal/code' className='Phone_number' type='text' />
                                </div>
                                <div className='img_register_btn'>
                                    <img className='register_img' src={register_img} alt="register" />
                                    <button type='submit' className='Registration_buton'>REGISTER</button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}

export default Register;
