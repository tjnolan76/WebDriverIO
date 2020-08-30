import Base from '../Base'

class Pay extends Base {
    get payeeDropdown() {
        return $('#sp_payee')
    }

    get accountDropdown() {
        return $('#sp_account')
    }

    get amountField() {
        return $('#sp_amount')
    }

    get dateField() {
        return $('#sp_date')
    }

    get descriptionField() {
        return $('#sp_description')
    }

    get payButton() {
        return $('#pay_saved_payees')
    }

    get message() {
        return $('#alert_content')
    }

    clickPayButton() {
        this.payButton.waitForExist()
        this.payButton.click()
    }

    enterDescription(text) {
        this.descriptionField.waitForExist()
        this.descriptionField.setValue(text)
    }

    enterDate(date) {
        this.dateField.waitForExist()
        this.dateField.setValue(date)
    }

    enterAmount(amount) {
        this.amountField.waitForExist()
        this.amountField.setValue(amount)
    }

    selectAccount(account) {
        this.accountDropdown.waitForExist()
        this.accountDropdown.selectByVisibleText(account)
    }

    selectPayee(payee) {
            this.payeeDropdown.waitForExist()
            this.payeeDropdown.selectByAttribute('value', payee)
    }
}

export default new Pay()