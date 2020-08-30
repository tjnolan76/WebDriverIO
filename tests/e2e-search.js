import App from '../page-objects/App'
import NavBar from '../page-objects/components/NavBar'

describe('e2e tests - Search', () => {
    it('Should load homepage', () => {
        App.openHomePage()
    })

    it('Should submit searchbox', ()=> {
        NavBar.search('bank')
        const resultsTitle = $('h2')
        resultsTitle.waitForExist()
        expect(resultsTitle).toHaveText('Search Results:')
    })

    it('Take Screenshot', () => {
        browser.saveScreenshot('your-name.png')
    })
})  