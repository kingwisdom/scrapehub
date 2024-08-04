import axios from 'axios'
import { BASE_URL } from "../config";


// const user = JSON.parse(window.localStorage.getItem('user'));
// const header = {
//     'Content-Type': 'application/json',
//     "Authorization": "Bearer " + user?.token
// }

// // console.log(user)

// export const GetAdInfo = async (model) => {
//     return await axios.get(`${BASE_URL}info/user-info`, {
//         "headers": {
//             'Content-Type': 'application/json'
//         }
//     })
// }
export const LoginUser = async (model) => {
    return await axios.post(`${BASE_URL}user/login`, model, {
        "headers": {
            'Content-Type': 'application/json'
        }
    })
}
export const RegisterUser = async (model) => {
    return await axios.post(`${BASE_URL}user/register`, model, {
        "headers": {
            'Content-Type': 'application/json'
        }
    })
}
export const ConfirmOtp = async (model) => {
    return await axios.post(`${BASE_URL}user/confirm-user`, model, {
        "headers": {
            'Content-Type': 'application/json'
        }
    })
}

export const GetVideos = async () => {
    return await axios.get(`${BASE_URL}pornhub/search?key=latest%20UK&sort=mr`, {
        "headers": {
            'Content-Type': 'application/json'
        }
    })
}
export const GetRelatedVideos = async (id) => {
    return await axios.get(`${BASE_URL}pornhub/related?id=${id}`, {
        "headers": {
            'Content-Type': 'application/json'
        }
    })
}
export const GetMoreVideos = async () => {
    return await axios.get(`${BASE_URL}xvideos/search?key=latest%20UK&page=2`, {
        "headers": {
            'Content-Type': 'application/json'
        }
    })
}
export const GetSearchedPHVideos = async (val) => {
    return await axios.get(`${BASE_URL}pornhub/search?key=${val}&page=2&sort=mr`, {
        "headers": {
            'Content-Type': 'application/json'
        }
    })
}
export const GetSearchedXXVideos = async (val) => {
    return await axios.get(`${BASE_URL}xnxx/search?key=${val}&page=2`, {
        "headers": {
            'Content-Type': 'application/json'
        }
    })
}
export const GetSearchedRedtubeVideos = async (val) => {
    return await axios.get(`${BASE_URL}redtube/search?key=${val}&page=2`, {
        "headers": {
            'Content-Type': 'application/json'
        }
    })
}
export const GetSearchedXVideos = async (val) => {
    return await axios.get(`${BASE_URL}xvideos/search?key=${val}&page=2`, {
        "headers": {
            'Content-Type': 'application/json'
        }
    })
}