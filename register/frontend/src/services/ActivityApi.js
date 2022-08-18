import axios from "axios"

export const getActivity = async (user) => {
    const config = {
        method: 'GET',
        url: 'users/activity',
        params:{ email: user.email },
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            // Authorization: `Bearer ${cookies.token}`,
        }

    }
    const { data } = await axios(config)
    return data
}
  




