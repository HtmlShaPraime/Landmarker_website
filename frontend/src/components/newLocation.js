import { useState } from "react"
import { useNewLocation } from "../hooks/useNewLocation"

const NewLocation = () => {
    const [name, setName] = useState('')
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0);
    const {newLocation, error} = useNewLocation()
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(name, latitude, longitude)

        await newLocation(name, latitude, longitude)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a new location</h2>

            <label>Name: </label>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />

            <label>Latitude: </label>
            <input 
                type="number"
                onChange={(e) => setLatitude(e.target.value)}
                value={latitude} 
            />

            <label>Longitude: </label>
            <input 
                type="number"
                onChange={(e) => setLongitude(e.target.value)}
                value={longitude}
            />

            <button type="submit">Add location</button>
        </form>
    )
}

export default NewLocation