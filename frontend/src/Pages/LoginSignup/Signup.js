
import React, { useState } from 'react'
import axios from 'axios'
const SignUp = () => {

    console.log();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [zip, setZip] = useState('');

    const createAccount = async (e) => {


        //     e.preventDefault();
        //     axios.post(`${API_BASE_URL}/customers`, {
        //         email,
        //         password,
        //         name,
        //         addresses: [{}]
        //     })

        //         .then((res) => {
        //             console.log(res);
        //             // props.history.push('/userSignIn')
        //         })
    }

    return (
        <div className="cover-user">


            <div className="detail">
                <h2>Let's setup your account!</h2>
                <h6>Already have an account ?  <button><a href="/userSignIn" >Login</a></button></h6>
            </div>

            <form className="form-user-signup" onSubmit={createAccount}>

                <h2 className="logo"><span id="one">Register</span></h2>

                <label htmlFor="name">Name </label>
                <input type="text" name="name" onChange={(e) => { setName(e.target.value) }} placeholder="eg. John" required />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={(e) => { setEmail(e.target.value) }} pattern="[a-zA-Z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="eg. xyz@gmail.com" required />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$%!@#+^&*]).{8,}" placeholder="xxxxxxxxxxxx" required />

                <div className="form-group">
                    <label htmlFor="inputAddress2">Street</label>
                    <input required type="text" className="form-control" onChange={(e) => { setStreet(e.target.value) }} id="inputAddress2" placeholder="1230 Main St" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input required type="text" className="form-control" onChange={(e) => { setCity(e.target.value) }} id="inputCity" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputState">State</label>
                        <input required type="text" className="form-control" onChange={(e) => { setState(e.target.value) }} id="inputState" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputZip">Zip</label>
                        <input required type="text" onChange={(e) => { setZip(e.target.value) }} className="form-control" id="inputZip" />
                    </div>
                </div>
                <button type="submit">Create Account</button>
            </form>


        </div>
    )

}

export default SignUp