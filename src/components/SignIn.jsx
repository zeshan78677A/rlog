import React, { useEffect, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { GoogleOAuthProvider, useGoogleOneTapLogin } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { gapi } from 'gapi-script';

function SignIn() {
  const [cred,setCred]=useState("")
  
    return (
        <>
            <div style={{ width: "70%" }} className="d-flex flex-column align-items-center">
                <h2>Login</h2>
                <form className='d-flex flex-column w-100 align-items-center mb-3'>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3 w-100"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel className='w-100' controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <button className='btn btn-link ms-auto p-1'> Forgot Password?</button>
                    <button className='btn btn-primary w-75 rounded'>Login</button>
                </form>
                <GoogleOAuthProvider clientId="954394503866-2b78550ve1dsvj6ns45ml3fl88330d1h.apps.googleusercontent.com">
                    <GoogleLogin
                        buttonText="sign in with google"
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </GoogleOAuthProvider>
       
            </div>
        </>
    )
}

export default SignIn