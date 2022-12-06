import { useEffect } from "react"
import { useAppSelector } from '../redux/store'

export const useLocalStorage = () => {

    const { currentUser } = useAppSelector(state => state.redux)

    useEffect(() => {
        window.localStorage.setItem("currentUser", JSON.stringify(currentUser))
    },[currentUser])
}