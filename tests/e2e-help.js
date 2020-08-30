import LoginPage from '../page-objects/pages/LoginPage'
import NavBar from '../page-objects/components/NavBar'
import App from '../page-objects/App'
import HelpPage from '../page-objects/pages/HelpPage'

describe('e2e testing - Help Section', () => {
    it('Should login with valid credentials', () =>{
        browser.maximizeWindow()
        App.openLoginPage()
        LoginPage.login('username', 'password')
        NavBar.insideNavBarIsVisible()
    })

    it('Should load help content', () =>{
        NavBar.clickSettings()
        NavBar.clickHelp()
        const title = HelpPage.title
        expect(title).toHaveText('How do I log into my account?')
        HelpPage.clickOnTransferFundsLink()
        expect(title).toHaveText('How do I transfer funds?')
        HelpPage.clickOnPayBillsLink()
        expect(title).toHaveText('How do I pay bills?')
    })
})