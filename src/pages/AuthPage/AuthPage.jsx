import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({ setUser }) {
    return (
        <main>
            <h1>Create Account</h1>
            <SignUpForm setUser={setUser} />
            <h2>Log in</h2>
            <LoginForm setUser={setUser} />
        </main>
    )
}