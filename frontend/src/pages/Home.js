import Map from "../components/Map"
import NewLocation from "../components/newLocation";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
    const center = { lat: 42.698038021581375, lng: 23.32138233558241 };
    const zoom = 17;
    const {user} = useAuthContext()

    return (
        <div className="home">
            <Map center={center} zoom={zoom} />
            {user && (<NewLocation />)}
        </div>
    )
}

export default Home