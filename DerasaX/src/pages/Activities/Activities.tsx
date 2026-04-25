import './Activities.css'
import '../../styles/global.css'
import '../../styles/theme.css'
import NavBar from '../../components/layout/Navbar/NavBar'
import Footer from '../../components/layout/Footer/Footer'
import TabbedNavigation from '../../components/UI/TabbedNavigation'

export default function Activities(){
    return(
        <>
            <NavBar/>
            <TabbedNavigation />
            <Footer/>
        </>

    );
    
}