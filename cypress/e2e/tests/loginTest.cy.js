import { loginPage } from "../../pages/loginPage"
const loginObj = new loginPage()
import loginData from '../../fixtures/loginData.json'

describe('Test Automation', () => {
    it('Login check',()=>{

        loginObj.openURL()
        loginObj.clickOnLocationOneID()
        loginObj.EnterEmail(loginData.email)
        loginObj.EnterPassword(loginData.password)
        loginObj.clickSignIn()

    })

})