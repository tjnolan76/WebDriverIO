import App from '../page-objects/App'
import FeedbackPage from '../page-objects/pages/FeedbackPage'

describe('e2e - feedback', ()=> {
    it('Should load feeedback form', () =>{
        browser.maximizeWindow()
        App.openFeedbackPage()
        FeedbackPage.formIsVisible()
    })

    it('Should submit feeedback form', () =>{
        FeedbackPage.fillForm('Name', 'test@test.com', 'Subject', 'Message')
        FeedbackPage.submitForm()
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })
})