import React from "react";
import {useAuth0} from "@auth0/auth0-react";


const Profile = () => {
    const {user, isAuthenticated} = useAuth0()
   return(

       <div>
           <h2>{user?.name}</h2>

           {JSON.stringify(user,null, 2)}
           </div>
   )
}

export default Profile