import Background from '.././utils/Background'
import TopBar from '.././utils/TopBar'
import Footer from '../utils/Footer'
import RegisterContainer from '../utils/RegisterContainer'

export default () => {
    return (
        <Background>
            <TopBar userName='Léo' />
            <RegisterContainer />
            <Footer />
        </Background>
    )
}