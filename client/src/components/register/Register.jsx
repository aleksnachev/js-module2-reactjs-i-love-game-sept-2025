import { useNavigate } from "react-router"
import useForm from "../../hooks/useForm.js"

export default function Register({
    onRegister,
}) {
    const navigate = useNavigate()

    const registerHandler = (values) => {
        const {email,password, confirmPassword} = values
        //Validation
        if (!email || !password) {
            return alert('Email and password are required')
        }

        if (password !== confirmPassword) {
            return alert('Password missmatch')
        }

        try {
            // Register User
            onRegister(email, password)

            // Redirect to home page 
            navigate('/')
        } catch (err) {
            alert(err.message)
        }
    }

    const {register, formAction} = useForm(registerHandler, {
        email: '',
        password: '',
        confirmPassword: ''
    })

    return (
        <section id="register-page" className="content auth">
            <form id="register" action={formAction}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        {...register('email')}
                    />
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        id="register-password"
                        placeholder="Password"
                        {...register('password')}
                    />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input 
                        type="password"
                        id="confirm-password"
                        placeholder="Repeat Password"
                        {...register('confirmPassword')}

                    />
                    <input className="btn submit" type="submit" defaultValue="Register" />
                </div>
            </form>
        </section>
    )
}