'use client'
import React, { useState } from 'react'
import AuthModel from './AuthModel'
import { useRouter } from 'next/navigation'
const MODE = {
    LOGIN: "LOGIN",
    REGISTER: "REGISTER",
    RESET_PASSWORD: "RESET_PASSWORD",
    EMAIL_VERIFICATION: "EMAIL_VERIFICATION",
}
const AuthComponent = () => {
    const router = useRouter();
    const [mode, setMode] = useState(MODE.LOGIN);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        emailCode: "",
        firstName: "",
        lastName: "",
        emailCode: "",
        answer: "",
    });

    const formTitle =
        mode === MODE.LOGIN
            ? "Log in"
            : mode === MODE.REGISTER
                ? "Register"
                : mode === MODE.RESET_PASSWORD
                    ? "Reset Your Password"
                    : "Verify Your Email";

    const buttonTitle =
        mode === MODE.LOGIN
            ? "Login"
            : mode === MODE.REGISTER
                ? "Register"
                : mode === MODE.RESET_PASSWORD
                    ? "Reset"
                    : "Verify";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        setError("")
        console.log(formData)
        try {
            let response;
            switch (mode) {
                case MODE.REGISTER:
                    // response = await axios.post(`${API_URL}/auth/register`, formData);
                    // console.log(response)
                    // if (response.status === 201) {
                    //     toast.success("Registered Successfully")
                    //     setMode(MODE.LOGIN)
                    //     console.log("FormData Data:", formData);
                    // } else {
                    //     toast.error("Something went wrong")
                    // }
                    break;
                case MODE.LOGIN:
                    // response = await axios.post(`${API_URL}/auth/login`, { email: formData.email, password: formData.password });
                    // console.log(response)
                    // if (response.status === 200) {
                    //     localStorage.setItem('token', response.data.token)
                    //     toast.success("Login Successfully")
                    //     router.push('/')
                    // } else {
                    //     toast.error("Something went wrong")
                    // }
                    // console.log(response)
                    localStorage.setItem("token", "token")
                    break;
                case MODE.RESET_PASSWORD:
                    //   response = await axios.post(`${BASE_URL}/user/reset-password`, { email, emailCode, password });
                    break;
                case MODE.EMAIL_VERIFICATION:
                    //   response = await axios.post(`${BASE_URL}/user/verify-email`, { email, emailCode });
                    break;
                default:
                    throw new Error('Invalid mode');
            }

            //   setMessage(response.data.message);
            // router.push('/'); // Redirect on success (example)
        } catch (error) {
            setError(error.response?.data?.message || 'Something went wrong');
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    };
    return (
      

            <form className="flex flex-col gap-8 overflow-y-auto h-full  rounded-2xl  w-full max-w-2xl p-6"
                onSubmit={handleSubmit}
            >
                <h1 className="text-3xl font-semibold text-purple">{formTitle}</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-4'>

                    {mode === MODE.REGISTER ? (
                        <>
                            <div className="flex flex-col gap-2">
                                <label className="text-18 text-purpledark ">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="john"
                                    value={formData?.firstName}
                                    className="ring-2 ring-purple rounded-md p-4"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-18 text-purpledark ">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="john"
                                    value={formData?.lastName}
                                    className="ring-2 ring-purple rounded-md p-4"
                                    onChange={handleChange}
                                />
                            </div>
                        </>
                    ) : null}

                    {mode !== MODE.EMAIL_VERIFICATION ? (
                        <div className={`${mode === MODE.LOGIN ? 'col-span-2' : ''} flex flex-col gap-2`}>
                            <label className="text-18 text-purpledark ">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="john@gmail.com"
                                value={formData?.email}
                                className="ring-2 ring-purple rounded-md p-4"
                                onChange={handleChange}
                            />
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            <label className="text-18 text-purpledark ">Verification Code</label>
                            <input
                                type="text"
                                name="emailCode"
                                placeholder="Code"
                                value={formData?.emailCode}
                                className="ring-2 ring-purple rounded-md p-4"
                                onChange={handleChange}
                            />
                        </div>
                    )}
                    {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
                        <>
                            <div className={`${mode === MODE.LOGIN ? 'col-span-2' : ''} flex flex-col gap-2`}>
                                <label className="text-18 text-purpledark ">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="ring-2 ring-purple rounded-md p-4"
                                    onChange={handleChange}
                                />
                            </div>

                        </>
                    ) : null}
                    </div>
                    {mode === MODE.LOGIN && (
                        <div
                            className="text-18 underline cursor-pointer"
                            onClick={() => setMode(MODE.RESET_PASSWORD)}
                        >
                            Forgot Password?
                        </div>
                    )}
                    <button
                        className=" text-white bg-red p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed"
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading..." : buttonTitle}
                    </button>
                    {error && <div className="text-red-600">{error}</div>}
                    {mode === MODE.LOGIN && (
                        <div
                            className="text-18 underline cursor-pointer"
                            onClick={() => setMode(MODE.REGISTER)}
                        >
                            {"Don't"} have an account?
                        </div>
                    )}
                    {mode === MODE.REGISTER && (
                        <div
                            className="text-18 underline cursor-pointer"
                            onClick={() => setMode(MODE.LOGIN)}
                        >
                            Have and account?
                        </div>
                    )}
                    {mode === MODE.RESET_PASSWORD && (
                        <div
                            className="text-18 underline cursor-pointer"
                            onClick={() => setMode(MODE.LOGIN)}
                        >
                            Go back to Login
                        </div>
                    )}
                    {message && <div className="text-purple-600 text-18">{message}</div>}


            </form>

       
    )
}

export default AuthComponent
