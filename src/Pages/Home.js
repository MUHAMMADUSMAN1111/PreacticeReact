import React from 'react'
import UncontrolledExample from '../Components/Slider'
import NavScrollExample from '../Components/Navbar'
import Footer from '../Components/Footer/Footer'

const Home = () => {
    return (
        <div>
            <NavScrollExample />
            <UncontrolledExample />
            <Footer/>
        </div>
    )
}

export default Home