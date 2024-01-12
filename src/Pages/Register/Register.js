import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Register.css";
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

    const handleJoinPandaClick = () => {
        navigate('/Home');
    };

    const goToSignIn = () => {
        navigate('/login');
    };

    return (
        <section className='register'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 login-image">
                        <img src="./Images/group-afro-americans-working-together (1).png" alt="Login" />
                    </div>
                    <div className="col-lg-4 login-form d-flex flex-column">
                        <div className='tabs'>
                            <p>Join Panda</p>
                            <p>Or</p>
                            <p onClick={goToSignIn} className='underline'>Sign In</p>
                        </div>
                        <Card className='card-style'>
                            <Card.Body>
                                <h1>*</h1>
                                <h3>Create your free account <br /><span className='create'>Takes less than <span className='minutes'>5 minutes...</span></span></h3>
                                <form>
                                    <input type="text" placeholder='klincik7@gmail.com' />
                                    <input type="text" placeholder='******************' />
                                    <input type="text" placeholder='******************' />
                                </form>
                            </Card.Body>
                        </Card>

                        <button className='join-panda' onClick={handleJoinPandaClick}>Join Panda</button>

                        <div className='disclaimer'>
                            <p>By clicking on "Create an account", you agree to our <br />terms of use and privacy policy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;
