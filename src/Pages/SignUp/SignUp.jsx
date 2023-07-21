import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/others/authentication1.png';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';



const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.PhotoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }

                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        title: 'user signUp successFull',
                                        showClass: {
                                            popup: 'animate__animated animate__fadeInDown'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOutUp'
                                        }
                                    });
                                    navigate('/');
                                }
                            })


                    })
            })
            .catch(error => {
                const errors = error;
                console.log(errors)
            })
    };






    return (
        <>
            <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img className=' w-[600px]' src={loginImg} alt="" />

                    </div>
                    <div className="card  md:w-1/2  max-w-sm shadow-2xl bg-base-100">
                        <h3 className=' text-3xl text-center mt-4 font-bold'>Sign Up Please</h3>

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                {errors.name && <span className=' text-red-600'>This name field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" {...register('photoURL', { required: true })} placeholder="Photo Url" className="input input-bordered" />
                                {errors.PhotoURL && <span className=' text-red-600'>This photoURL field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register('email', { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className=' text-red-600'>This email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register('password', { required: true, minLength: 6, maxLength: 20 })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password && <span className=' text-red-600'>This password field is required</span>}
                                {errors.password?.type === 'minLength' && <span className=' text-red-600'>Password must be 6 characters</span>}
                            </div>

                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="SignUp" />
                                <p className=' font-semibold text-yellow-400'><small>Already registered? <Link to={'/login'}> Go to log in</Link></small></p>
                            </div>
                        </form>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;