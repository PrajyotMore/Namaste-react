import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus,setOnlineStatus] = useState(true)
    // logic for checking online status 
    // it will execute only once and will track weather status is online or offline
    useEffect(()=> {

        window.addEventListener("offline", () => {
            setOnlineStatus(false)
        })

        window.addEventListener("online", ()=> {
            setOnlineStatus(true)
        })
    },[])
    return onlineStatus;
}

export default useOnlineStatus;