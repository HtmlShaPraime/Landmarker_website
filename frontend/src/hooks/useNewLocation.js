import { useState } from 'react'
//import { useAuthContext } from './useAuthContext'

export const useNewLocation = () => {
    const [error, setError] = useState(null)
    //const [isLoading, setIsLoading] = useState(null)
    //const { dispatch } = useAuthContext()

    const newLocation = async (name, latitude, longitude) => {
        //setIsLoading(true)
        setError(null)

        const response = await fetch('/server/locations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({name, latitude, longitude})
        }) 
        const json = await response.json()

        if(!response.ok) {
            //setIsLoading(false)
            setError(json.error)
        }
    }

    return { newLocation,  error }
}