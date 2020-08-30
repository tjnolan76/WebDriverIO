import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import FiltersPage from '../page-objects/pages/FiltersPage'
import NavBar from '../page-objects/components/NavBar'
import InsideNavBar from '../page-objects/components/InsideNavBar'


describe('e2e-tests - Transactions Filter', () => {
    it('Should log into application', () => {
        browser.maximizeWindow()
        App.openLoginPage()
        LoginPage.login('username', 'password')
        NavBar.insideNavBarIsVisible()
    })

    it('Transaction filter should work', () => {
        InsideNavBar.clickAccountActivityTab()
        InsideNavBar.clickFiltersLink()
        FiltersPage.fillDescription('Test description')
        FiltersPage.submitFilter()
        FiltersPage.resultsTableIsVisible()
        const message = FiltersPage.message
        expect(message).toHaveText('No results.')
    })
})