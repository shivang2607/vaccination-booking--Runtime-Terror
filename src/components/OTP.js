import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'
import ReactDOM from "react-dom";
import axios from 'axios'
import { sha256, sha224 } from 'js-sha256';

export const OTP = () => {

    const [phone, setPhone] = useState('');
    const [Otp, setOtp] = useState('');
    const [token, setToken] = useState('');
    const [TxnId, setTxnId] = useState('');
    const submit = (e) => {
        e.preventDefault();

        if (token)
            alert('finally done')

    }
    useEffect(() => {
        // POST request using axios inside useEffect React hook
        

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [phone]);
    useEffect( () => {
        // POST request using axios inside useEffect React hook
        async function ver() {
            
        }
            ver();
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    const Sub = (e)=>{
        e.preventDefault()
        const article = { mobile:phone};
        axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', article)
            .then(response => setTxnId(response.txnId));
        console.log(TxnId)
    }
    const generated = (e) => {
        
        e.preventDefault();
        const verify = {
            otp: sha256(Otp),
            txnId: TxnId
        };
        axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP', verify)
            .then((response) => setToken(response.token));
        console.log('done!')
       
    }

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter your number</Form.Label>
                    <Form.Control type="tel" placeholder="" onChange={(e) => setPhone(e.target.value)} />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>OTP</Form.Label>
                    <Form.Control type="text" placeholder="OTP" onChange={(e) => setOtp(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit" onSubmit={Sub}>
                    generate
  </Button>
                <Button variant="primary" type="submit" onSubmit={generated}>
                    Submit
  </Button>
            </Form>
        </div>
    )
}
