import LoginPage from '../page-objects/pages/LoginPage'
import ExchangePage from '../page-objects/pages/ExchangePage'
import NavBar from '../page-objects/components/NavBar'
import App from '../page-objects/App'
import InsideNavBar from '../page-objects/components/InsideNavBar'
import { short } from '../lib/timeouts'

describe('e2e-tests - Currency Exchange', () => {
    it('Should log into application', () => {
        browser.maximizeWindow()
        App.openLoginPage()
        LoginPage.login('username', 'password')
        NavBar.insideNavBarIsVisible()
        browser.pause(short)
    })

    it('Should make currency exchange', () => {
        InsideNavBar.clickPayBillsTab()
        ExchangePage.clickExchangeLink()
        ExchangePage.currencySelect('GBP')
        const pcAmount = ExchangePage.amount
        pcAmount.setValue('500')
        ExchangePage.clickInUSDollar()
        ExchangePage.clickCalculateButton()
        const message = ExchangePage.message
        expect(message).toHaveText('Foreign currency cash was successfully purchased.')
    })
})