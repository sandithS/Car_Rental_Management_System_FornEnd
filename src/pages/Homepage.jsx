import BookNowSection from "../components/BookNowSection"
import FactsSection from "../components/FactsSection"
import FeaturesSection from "../components/FeaturesSection"
import Footer from "../components/Footer"
import CustomNavbar from "../components/Navbar"
import VehicleSection from "../components/VehicleSection"

function Homepage() {


    return (
        <>
            <CustomNavbar />
            <BookNowSection />
            <FeaturesSection />
            <VehicleSection />
            <FactsSection />
            <Footer />
        </>
    )
}

export default Homepage