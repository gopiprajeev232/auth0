import {useAuth0} from "@auth0/auth0-react"

let LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (isAuthenticated ? (
        <button onClick={() => logout()}>
            Logout
        </button>
    ) : null)
}

export default LogoutButton