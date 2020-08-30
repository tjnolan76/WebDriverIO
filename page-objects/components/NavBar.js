import Base from '../Base'

class NavBar extends Base {
    get searchBox() {
        return $('#searchTerm')
    }
    get signInButton() {
        return $('#signin_button')
    }

    get insideNavBar() {
        return $('.nav-tabs')
    }

    get settingsButton() {
        return $('.icon-cog')
    }

    get helpButton() {
        return $('#help_link')
    }

    search(text) {
        this.searchBox.waitForExist()
        this.searchBox.setValue(text)
        browser.keys('Enter')
    }

    clickHelp() {
        this.helpButton.waitForExist()
        this.helpButton.click()
    }

    clickSettings() {
        this.settingsButton.waitForExist()
        this.settingsButton.click()
    }

    clickSignIn() {
        this.signInButton.waitForExist()
        this.signInButton.click()   
    } 

    insideNavBarIsVisible() {
        this.insideNavBar.waitForExist()
    }

    signInButtonIsVisible() {
        this.signInButton.waitForExist()
    }

}

export default new NavBar()