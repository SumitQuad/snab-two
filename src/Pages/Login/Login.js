import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.css";
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleJoinPandaClick = () => {
        navigate('/Home');
    };

    const goToRegister = () => {
        navigate('/');
    };

    const goToSignIn = () => {
        navigate('/login');
    };

    const handleClick = () => {
        navigate('/forgot');
    };

    return (
        <section className='login'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 login-image">
                        <img src="./Images/group-afro-americans-working-together (1).png" alt="Login" />
                    </div>
                    <div className="col-lg-4 login-form d-flex flex-column">
                        <div className='tabs'>
                            <p onClick={goToRegister} className='underline'>Join Panda</p>
                            <p>Or</p>
                            <p onClick={goToSignIn} className='underline'>Sign In</p>
                        </div>
                        <Card className='card-style'>
                            <Card.Body>
                                <h1>*</h1>
                                <h3>Create your free account <br /><span className='create'>Takes less than <span className='minutes'>5 minutes...</span></span></h3>
                                <form>
                                    <input type="text" placeholder='klincik7@gmail.com' />
                                    <div class="password-container">
                                        <input type="password" class="password-input" id="passwordInput" placeholder='******************' />
                                        <span class="toggle-button" onclick="togglePasswordVisibility()">Show</span>
                                    </div>
                                </form>
                                <p onClick={handleClick}>Forgot password?</p>
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

export default Login;
