import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    return (isAuthenticated ? (
        <div>
            Name: {user?.given_name}
            <br></br>
            Email: {user?.email}
        </div>
    ): null)
}

export default Profile