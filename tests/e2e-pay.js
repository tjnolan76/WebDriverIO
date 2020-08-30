import LoginPage from '../page-objects/pages/LoginPage'
import NavBar from '../page-objects/components/NavBar'
import App from '../page-objects/App'
import InsideNavBar from '../page-objects/components/InsideNavBar'
import PayPage from '../page-objects/pages/PayPage'

describe('e2e test - Pay', () => {
    it('Should log into application', () => {
        browser.maximizeWindow()
        App.openLoginPage()
        LoginPage.login('username', 'password')
        NavBar.insideNavBarIsVisible()
    })

    it('Should make payment', () => {
        InsideNavBar.clickPayBillsTab()
        PayPage.selectPayee('apple')
        PayPage.selectAccount('Loan')
        PayPage.enterAmount('500')
        PayPage.enterDate('2020-10-10')
        PayPage.enterDescription('Test')
        PayPage.clickPayButton()

        const message = PayPage.message
        expect(message).toHaveText('The payment was successfully submitted.')
    })
})