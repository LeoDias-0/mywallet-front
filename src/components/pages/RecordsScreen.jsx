import Background from '.././utils/Background'
import TopBar from '.././utils/TopBar'
import Footer from '../utils/Footer'
import RegisterContainer from '../utils/RegisterContainer'
import UserContext from '../contexts/UserContext'
import { useContext } from 'react'

const RecordsScreen = () => {
    const { user } = useContext(UserContext)

    return (
        <Background>
            <TopBar userName={user.name} />
            <RegisterContainer />
            <Footer />
        </Background>
    )
}

export default RecordsScreen