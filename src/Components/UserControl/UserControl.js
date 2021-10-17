import React, { useState } from "react"

const UserControl = (props) => {

    let [loginStatus] = useState(false)

    return (
        loginStatus ? <div>Yorgo<button>Logout</button></div > : <div><button>Login</button><button>logout</button></div>

    )
}
export default UserControl