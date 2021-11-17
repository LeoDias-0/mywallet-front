import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ResetCSS from './utils/ResetCSS'
import LoginInScreen from './pages/LoginInScreen'
import SignInScreen from './pages/SignInScreen'
import RecordsScreen from './pages/RecordsScreen'
import NewIncomeScreen from './pages/NewIncomeScreen'
import NewOutcomeScreen from './pages/NewOutcomeScreen'
import UserContext from './contexts/UserContext'
import { useState } from 'react'

const App = () => {
    const [user, setUser] = useState({
        name: localStorage.getItem('name') || '',
        token: localStorage.getItem('token') || '',
        email: localStorage.getItem('email') || ''
    })
    const [prevRegister, setPrevRegister] = useState([])

    return (
        <BrowserRouter>
            <ResetCSS />
            <UserContext.Provider value={{user, setUser, prevRegister, setPrevRegister}} >
                <Switch>
                    <Route from='/' exact>
                        <RecordsScreen />
                    </Route>
                    <Route from='/login-in' exact>
                        <LoginInScreen />
                    </Route>
                    <Route from='/sign-in' exact>
                        <SignInScreen />
                    </Route>
                    <Route from='/new-income' exact>
                        <NewIncomeScreen />
                    </Route>
                    <Route from='/new-outcome' exact>
                        <NewOutcomeScreen />
                    </Route>
                </Switch>
            </UserContext.Provider>
        </BrowserRouter>
    )
}

export default App