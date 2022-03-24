
import { getCurrentUserToken } from "../firebase/firebase";
export async function syncUserData() {
    const userToken = await getCurrentUserToken()

    const fetchConfig = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${userToken}`
        }
    }
    return fetch("localhost:4000", fetchConfig)

}