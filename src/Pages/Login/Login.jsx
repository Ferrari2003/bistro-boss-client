import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import loginImg from '../../assets/others/authentication1.png';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6);

    }, [])

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'user login successFull',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorCode = error
                console.log(errorCode)
            });
    }

    const handleValidateCaptcha = (event) => {
        const user_captcha_value = event.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img className=' w-[600px]' src={loginImg} alt="" />

                    </div>
                    <div className="card  md:w-1/2  max-w-sm shadow-2xl bg-base-100">
                        <h3 className=' text-3xl text-center mt-4 font-bold'>Login Please</h3>

                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="type the captcha above" className="input input-bordered" />
                                {/* <button className=' btn btn-outline btn-xs'>Validate</button> */}
                            </div>
                            {/* todo */}
                            <div className="form-control mt-6">

                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                                <p className=' font-semibold text-yellow-400'><small>New Here? <Link to={'/signUp'}>Create an account</Link></small></p>
                            </div>
                            <SocialLogin />
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;