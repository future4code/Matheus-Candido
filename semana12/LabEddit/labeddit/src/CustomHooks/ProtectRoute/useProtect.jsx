import { useHistory } from 'react-router-dom'

export const useProtect = () => {
    const history = useHistory()

    React.useEffect(() => {
        const token = window.localStorage.getItem('token')
        if (!token) {
            history.push("/login")
        }
    }, [history])
}