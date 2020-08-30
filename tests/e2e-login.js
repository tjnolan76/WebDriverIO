import LoginPage from '../page-objects/pages/LoginPage'
import NavBar from '../page-objects/components/NavBar'
import App from '../page-objects/App'

const { short, long } = require("../lib/timeouts")

describe('e2e Tests - Login / Logout Flow', ()=> {
    it('Should not login with invalid credentials', () =>{
        browser.maximizeWindow()
        App.openHomePage()
        NavBar.clickSignIn()
        LoginPage.pauseShort()
        LoginPage.formIsVisible()
        LoginPage.fillForm('invalid username', 'invalid password' )
        LoginPage.submitForm()

        const message = LoginPage.error
        expect(message).toHaveText('Login and/or password are wrong.')
    })

    it('Should login with valid credentials', () =>{
        browser.maximizeWindow()
        App.openHomePage()
        NavBar.clickSignIn()
        LoginPage.formIsVisible()
        LoginPage.fillForm('username', 'password' )
        LoginPage.submitForm()
        NavBar.insideNavBarIsVisible()
    })

    it('Should logout from app', () =>{
        App.logout()
        NavBar.signInButtonIsVisible()
    })
})