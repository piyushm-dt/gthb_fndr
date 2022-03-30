import React from 'react'
import { createContext } from 'react'
import { useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = ({ children }) => {
    //const [users, setUsers] = useState([])
    //const [isLoading, setIsLoading] = useState(true)

    const initialState = {
        users: [],
        user: {},
        repos: [],
        isLoading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // get iniital users for test purpose
    /*const getUsers = async () => {
        setLoading()
        const response = await fetch(`${GITHUB_URL}/users`)
        const data = await response.json()
        //setUsers(data)
        //setIsLoading(false)
        dispatch({
            type: 'GET_USERS',
            payload: data,
        })
    }*/

    return (
        <GithubContext.Provider value={{
            ...state,
            dispatch,
        }}
        >
            {children}
        </GithubContext.Provider>
    )

}

export default GithubContext;