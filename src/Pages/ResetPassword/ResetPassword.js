import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ResetPassword.css";
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
    const navigate = useNavigate();

    const handleJoinPandaClick = () => {
        navigate('/Home');
    };

    return (
        <section className='reset-password'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 login-image">
                        <img src="./Images/group-afro-americans-working-together (1).png" alt="Login" />
                    </div>
                    <div className="col-lg-4 login-form d-flex flex-column">
                        <div className='tabs'>
                            <p>Join Panda</p>
                            <p>Or</p>
                            <p className='underline'>Sign In</p>
                        </div>
                        <Card className='card-style'>
                            <Card.Body>
                                <h1>*</h1>
                                <h3>Reset Password</h3>
                                <form>
                                    <input type="text" placeholder='Email Password' />
                                    <input type="text" placeholder='Email New Password' />
                                </form>
                                <p>Please enter your login email address to receive your password reset link.</p>
                            </Card.Body>
                        </Card>

                        <button className='join-panda' onClick={handleJoinPandaClick}>Reset My Password </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResetPassword;
