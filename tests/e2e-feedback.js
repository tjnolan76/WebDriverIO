import App from '../page-objects/App'
import FeedbackPage from '../page-objects/pages/FeedbackPage'
import dataHelpers from '../lib/data-helpers'

describe('e2e - feedback', ()=> {
    it('Should load feeedback form', () =>{
        browser.maximizeWindow()
        App.openFeedbackPage()
        FeedbackPage.formIsVisible()
    })

    it('Should submit feeedback form', () =>{
        FeedbackPage.fillForm(dataHelpers.getRandomName(), dataHelpers.getRandomEmail(), 'Subject Stuff', 'Test Message')
        browser.saveScreenshot('your-name.png')
        FeedbackPage.submitForm()
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })

})