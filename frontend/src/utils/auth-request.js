
import { getCurrentUserToken } from "../firebase/firebase";
export async function syncUserData() {
    const userToken = await getCurrentUserToken()
    const fetchConfig = {
        method: "POST",
        headers: {
            authorization: `bearer ${userToken}`
        }
    }
    return fetch("http://localhost:4000/users/sign-up", fetchConfig)
}