import React, { useState } from 'react';
import './LeadGenerationForm.css';
import { useNavigate } from 'react-router-dom';
import Edit from '../images/icons/edit.png';

function LeadGenerationForm(props) {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "", phone: "", email: "", pincode: ""
    });
    let name, value;
    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }


    async function handleSubmit(e) {
        e.preventDefault()
        let { name, phone, email, pincode } = e.target

        let data = await fetch("/price_query", {
            method: "POST",
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                phone: phone.value,
                pinode: pincode.value,
                car: `${props.value === "one" ? `${props.brand} ${props.model}` : `${props.brand} ${props.model} ${props.version} ${props.fuel} ${props.transmission}`} `
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let response = await data.text()

        window.alert(response)
        console.log(response)
        props.close(false)
    }




    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="leadform-box my-4">
                        <div className="leadform-title d-flex">
                            <h3 className="g-h3 g-bold">{props.brand} {props.model} {props.version} {props.fuel} {props.transmission}</h3>
                            <button className='g-link-button g-underline d-none'><img src={Edit} alt="edit" /> Change Version</button>
                        </div>
                        <div className="leadform-form">
                            <form onSubmit={handleSubmit}>
                                <div className="name d-flex my-3">
                                    <label className='w-50' htmlFor="fname ">Name:</label>
                                    <input required className='w-50' type="text" id="name" name="name" value={user.name} onChange={handleInputs}></input>
                                </div>
                                <div className="mobile-number d-flex my-3">
                                    <label className='w-50' htmlFor="lname">Mobile Number:</label>
                                    <input required className='w-50' type="number" id="phone" name="phone" value={user.phone} onChange={handleInputs}></input>
                                </div>
                                <div className="email-id d-flex my-3">
                                    <label className='w-50' htmlFor="lname">Email-ID:</label>
                                    <input required className='w-50' type="text" id="email" name="email" value={user.email} onChange={handleInputs}></input>
                                </div>
                                <div className="pincode my-3">
                                    <label className='w-50' htmlFor="lname">Pincode:</label>
                                    <input required className='w-50' type="number" id="pincode" name="pincode" value={user.pincode} onChange={handleInputs}></input>
                                </div>
                                <div className="postofficeadd mb-5">
                                    <h4 className="g-h4">Select Post Office Name:</h4>
                                    <div className="addinfo mt-2 mb-4">
                                        <div className="add1">
                                            <input type="radio" value="add1" name="gender" /> Liberty Garden S.O, Walad West, Mumbai, Maharashtra, 400064
                                        </div>
                                        <div>
                                            <input type="radio" value="add2" name="gender" /> Malad S.O, Malad West, Mumbai, Maharashtra, 400064
                                        </div>
                                        <div>
                                            <input type="radio" value="add3" name="gender" /> Malad West Dely S.O, Malad West, Mumbai, Maharashtra, 400064
                                        </div>
                                    </div>
                                    <div className="form-submit-button"><input className='w-100 blue-background-btn border-0 py-2' type="submit" value="Submit"></input></div>
                                </div>
                            </form>
                            <div className="optional-box">
                                <div className="inneroptionalbox">
                                    <div className="optionalform">
                                        <label className='my-2' htmlFor="optional">Optional</label>
                                        <input className='w-100 blue-background-btn border-0 py-2 ' type="button" value="Generate OTP" />
                                        <input className='w-100 my-3' type="number" name="otp" id="otp" />
                                        <input className='w-100 blue-background-btn border-0 py-2 ' type="button" value="Verify OTP" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeadGenerationForm