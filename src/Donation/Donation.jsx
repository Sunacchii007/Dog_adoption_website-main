import React, { useState } from 'react';
import './Donation.css';
import axios from 'axios';


const Donation = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [donationAmount, setDonationAmount] = useState('');
    const [user, setUser] = useState([]);
    const [message, setMessage] = useState([]);
    

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!firstName) newErrors.firstName = 'First name is required';
        if (!lastName) newErrors.lastName = 'Last name is required';
        if (!cardNumber) {
            newErrors.cardNumber = 'Card number is required';
        } else if (!/^\d{16}$/.test(cardNumber)) {
            newErrors.cardNumber = 'Card number is invalid';
        }
        if (!donationAmount) {
            newErrors.donationAmount = 'Donation amount is required';
        } else if (!/^\d+$/.test(donationAmount)) {
            newErrors.donationAmount = 'Donation amount is invalid';
        }
        

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const user = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                donationAmount: donationAmount,
                cardNumber: cardNumber,
                message: message
            };

            axios.post('http://localhost/Dog_adoption_website-main/api7/index.php', user)
                .then(response => {
                    console.log(response.data);
                    alert('Donation added successfully');
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        }
        setEmail('')
        setFirstName('')
        setLastName('')
        setCardNumber('')
        setDonationAmount('')
        setMessage('')
    };

    return (
        <>
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />

            <section className="py-1 bg-white-50">
                <h1 class="text-center text-xl font-bold p-5 text-orange-100">You help us when you donate</h1>
                <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                            <div class="text-center flex justify-between">
                                <h6 class="text text-danger-700 text-xl font-bold">
                                    Donation
                                </h6>
                            </div>
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form onSubmit={handleSubmit}>
                                <h6 className="text-red-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    User Information
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="first-name">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="first-name"
                                                name='firstName'
                                                className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${errors.firstName ? 'border-red-500' : ''}`}
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            />
                                            {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="last-name">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="last-name"
                                                name='lastName'
                                                className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${errors.lastName ? 'border-red-500' : ''}`}
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />
                                            {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="email">
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name='email'
                                                className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${errors.email ? 'border-red-500' : ''}`}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}

                                        </div>
                                    </div>
                                </div>

                                <hr className="mt-6 border-b-1 border-blueGray-300" />

                                <h6 className="text-red-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    Bank Information
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="card-number">
                                                Donation Amount (DH)
                                            </label>
                                            <input
                                                type="number"
                                                id="card-number"
                                                name='donationAmount'
                                                className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${errors.cardNumber ? 'border-red-500' : ''}`}
                                                value={donationAmount}
                                                onChange={(e) => setDonationAmount(e.target.value)}
                                            />
                                            {errors.donationAmount && <p className="text-red-500 text-xs italic">{errors.donationAmount}</p>}
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="card-number">
                                                Card Number
                                            </label>
                                            <input
                                                type="number"
                                                id="card-number"
                                                name='cardNumber'
                                                className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${errors.cardNumber ? 'border-red-500' : ''}`}
                                                value={cardNumber}
                                                onChange={(e) => setCardNumber(e.target.value)}
                                            />
                                            {errors.cardNumber && <p className="text-red-500 text-xs italic">{errors.cardNumber}</p>}
                                        </div>
                                    </div>
                                    </div>
                                   

                                <hr className="mt-6 border-b-1 border-blueGray-300" />

                                <h6 className="text-red-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    Message
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="message">
                                                Message
                                            </label>
                                            <textarea
                                                id="about-me"
                                                name='message'
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                rows="4"
                                                value={message} 
                                                onChange={(e) => setMessage(e.target.value)} 

                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mt-6">
                                    <button
                                        className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </section>
           
        </>
    );
};

export default Donation;
