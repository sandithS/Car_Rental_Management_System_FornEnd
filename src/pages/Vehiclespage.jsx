import CustomNavbar from "../components/Navbar"
import VehicleDetails from "../components/VehicleDetails"
import VehicleFooter from "../components/VehicleFooter"
import VehicleGroup from "../components/VehicleGroup"

function Homepage() {


    return (
        <>
            <CustomNavbar />
            <VehicleGroup />
            <VehicleFooter />
            <VehicleDetails />
        </>
    )
}

export default Homepage