import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAxios } from '../AxiosConfigs/useAxios'

export const useProtect = () => {
    const { token } = useAxios()
    const history = useHistory()

    React.useEffect(() => {
        
        if (!token) {
            history.push("/login")
        }
    }, [history])
}