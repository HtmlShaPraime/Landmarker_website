import Map from "../components/Map"

const Home = () => {
    const center = { lat: 42.698038021581375, lng: 23.32138233558241 };
    const zoom = 17;
    
    return (
        <div className="home">
            <Map center={center} zoom={zoom} />
        </div>
    )
}

export default Home