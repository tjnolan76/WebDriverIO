import Base from '../Base'

class Exchange extends Base {
    get exchangeLink() {
        return $('#tabs > ul > li:nth-child(3) > a')
    }

    get currencyDropdown() {
        return $('#pc_currency')
    }

    get amount() {
        return $('#pc_amount')
    }

    get inUSDollar() {
        return $('#pc_inDollars_true')
    }

    get calculateButton() {
        return $('#purchase_cash')
    }

    get message() {
        return $('#alert_content')
    }

    clickCalculateButton() {
        this.calculateButton.waitForExist()
        this.calculateButton.click()
    }

    clickInUSDollar() {
        this.inUSDollar.waitForExist()
        this.inUSDollar.click()
    }

    clickExchangeLink() {
        this.exchangeLink.waitForExist()
        this.exchangeLink.click()
    }

    currencySelect(currency) {
        this.currencyDropdown.waitForExist()
        this.currencyDropdown.selectByAttribute('value', currency)
    }
}

export default new Exchange()