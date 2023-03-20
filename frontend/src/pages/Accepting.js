import { useEffect, useState } from 'react';

const Accepting = () => {

    const [landmarks, setLandmarks] = useState(null)

    useEffect(() => {
        const fetchLocations = async () => {
          const response = await fetch('/server/newlocations')
          const json = await response.json()
    
          if (response.ok) {
            setLandmarks(json)
          }
        }
    
        fetchLocations()
      }, [])

      async function verify(id) {
        await fetch('/server/newlocations/' + id)
      }

    return (
        <div>
            <ul>
                {landmarks && landmarks.map((landmark) => (
                    <li key={landmark._id}>{landmark.locationName}<button onClick={() => verify(landmark._id)}>Verify landmark</button></li>
            ))}
            </ul>
        </div>
    )
}

export default Accepting