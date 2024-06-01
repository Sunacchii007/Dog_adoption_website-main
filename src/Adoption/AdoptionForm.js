// AdoptionForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './adoptionForm.css';
import Footer from '../About/footer';

const AdoptionForm = () => {
    const { idPet } = useParams();
    const [nomComplet, setNomComplet] = useState('');
    const [email, setEmail] = useState('');
    const [adresse, setAdresse] = useState('');
    const [telephone, setTelephone] = useState('');

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!nomComplet) {
            newErrors.nomComplet = 'Full name address is required';
        }
        if (!email) {
            newErrors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!nomComplet) newErrors.nomComplet = 'Full name is required';
        if (!adresse) newErrors.adresse = 'Adress is required';
        if (!telephone) {
            newErrors.telephone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(telephone)) {
            newErrors.telephone = 'Phone number is invalid';
        }
        
        

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
   

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
        const adoptionData = {
            nomComplet,
            email,
            adresse,
            telephone,
            idPet
        };
        axios.post('http://localhost/Dog_adoption_website-main/api10/index.php', adoptionData)
            .then(response => {
                console.log(response.data);
                alert('Adoption request submitted successfully!');
                
            })

            .catch(error => {
                console.error('Error submitting adoption request:', error);
            });}

            setNomComplet('')
            setEmail('')
            setAdresse('')
            setTelephone('')
    };

    return (
        <>
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
                    <section className="py-1 bg-white-50">
        <div className="form-container">
            <h2  class="text-center text-xl font-bold p-5 text-orange-100">Adoption Form for Pet ID: {idPet}</h2>
            <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                            <div class="text-center flex justify-between"></div>
            <form onSubmit={handleSubmit}>
                <h3  className="text-red-400 text-sm mt-3 mb-6 font-bold uppercase">Client Information </h3>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <div className="form-group">
                    <label className="block uppercase text-blueGray-600 p-2 text-xs font-bold mb-2" htmlFor="nomComplet">Full Name:</label>
                    <input type="text" id="nomComplet" name='nomComplet' value={nomComplet} onChange={(e) => setNomComplet(e.target.value)} className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${errors.nomComplet ? 'border-red-500' : ''}`}  />
                </div>

                <div className="form-group">
                    <label className="block uppercase text-blueGray-600 p-2 text-xs font-bold mb-2" htmlFor="email">Email:</label>
                    <input type="email" id="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${errors.email ? 'border-red-500' : ''}`}  />
                </div>

                <div className="form-group">
                    <label className="block uppercase text-blueGray-600 p-2 text-xs font-bold mb-2" htmlFor="address">Address:</label>
                    <input type="text" id="address" name='adresse' value={adresse} onChange={(e) => setAdresse(e.target.value)} className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${errors.adresse ? 'border-red-500' : ''}`} />
                </div>

                <div className="form-group">
                    <label className="block uppercase text-blueGray-600 p-2 text-xs font-bold mb-2" htmlFor="telephone">Phone:</label>
                    <input type="tel" id="telephone" name='telephone' value={telephone} onChange={(e) => setTelephone(e.target.value)} className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${errors.telephone ? 'border-red-500' : ''}`}  />
                </div>

                <div className="text-center mt-6">
                                    <button
                                        className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                
            </form></div></div></div>
        </div>
        </section>
        <Footer/>
        </>
    );
};

export default AdoptionForm;

