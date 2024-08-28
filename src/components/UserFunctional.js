import { useState } from "react";



const UserFunctional  = ({name,location}) => {
    const [count,setCount] = useState(0)
    return (
        <div className="user-card">
        <h1>Count : {count}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        </div>
    )
}

export default UserFunctional;