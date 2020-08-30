import Base from '../Base'

class InsideNavBar extends Base {
    get accountActivityTab() {
        return $('#account_activity_tab')
    }
    get filtersLink() {
        return $('#tabs > ul > li:nth-child(2) > a')
    }

    get payBillsTab() {
        return $('#pay_bills_tab')
    }

    get exchangeLink() {
        return $('#pay_bills_tab')
    }

    clickPayBillsTab() {
        this.payBillsTab.waitForExist()
        this.payBillsTab.click()
    }

    clickAccountActivityTab() {
        this.accountActivityTab.waitForExist()
        this.accountActivityTab.click()
    }

    clickFiltersLink() {
        this.filtersLink.waitForExist()
        this.filtersLink.click()
    }
}

export default new InsideNavBar()