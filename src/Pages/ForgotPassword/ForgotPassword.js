import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ForgotPassword.css";
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const navigate = useNavigate();

    const handleJoinPandaClick = () => {
        navigate('/reset');
    };

    const goToRegister = () => {
        navigate('/');
    };

    const goToSignIn = () => {
        navigate('/login');
    };

    return (
        <section className='forgot-password'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 login-image">
                        <img src="./Images/group-afro-americans-working-together (1).png" alt="Login" />
                    </div>
                    <div className="col-lg-4 login-form d-flex flex-column">
                        <div className='tabs'>
                            <p onClick={goToRegister}>Join Panda</p>
                            <p>Or</p>
                            <p onClick={goToSignIn} className='underline'>Sign In</p>
                        </div>
                        <Card className='card-style'>
                            <Card.Body>
                                <h1>*</h1>
                                <h3>Forgot Password</h3>
                                <form>
                                    <input type="text" placeholder='Email Address' />
                                </form>
                                <p>Please enter your login email address to receive your password reset link.</p>
                            </Card.Body>
                        </Card>

                        <button className='join-panda' onClick={handleJoinPandaClick}>Get the link </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword;
