import axios from "axios"
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL


const url = axios.create({
    baseURL: GITHUB_URL,
})

// search for named users
export const searchUsers = async (text) => {

    const params = new URLSearchParams({
        q: text
    })

    const response = await url.get(`/search/users?${params}`)
    return response.data.items

    //const response = await fetch(`${GITHUB_URL}/search/users?${params}`)
    //const { items } = await response.json()
    //return items
}

// single user search
export const searchUser = async (login) => {

    const response = await url.get(`/users/${login}`)
    return response.data
    //const response = await fetch(`${GITHUB_URL}/users/${login}`)
    //const data = await response.json()
    //return data

}

export const searchUserRepos = async (login) => {

    const response = await url.get(`/users/${login}/repos`)
    return response.data
    //const response = await fetch(`${GITHUB_URL}/users/${login}/repos`)
    //const data = await response.json()
    //return data
}
