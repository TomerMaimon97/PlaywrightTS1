import {test} from '@playwright/test';
import LoginPage from '../../pages/loginPage';
import UserCredentials from '../../helpers/UserCredentials';
import { ErrorMessages } from '../../helpers/ErrorMessages';
import BasicUrl from '../../helpers/BasicUrl';

test.describe("negative loggin scenarios", () => {
    
    let loginPage: LoginPage;

    test.beforeEach(async({page}) => {
         loginPage = new LoginPage(page)
    })

    test('loggin with locked user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.LoginToWebsite(UserCredentials.LOCKED_OUT_USER);
        await loginPage.ValidateErrorMessage(ErrorMessages.LOGIN_WITH_LOCKED_USER);
        await loginPage.ValidateUrl(BasicUrl.BASE_URL);
    })

    test('loggin with incorrect username', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.LoginToWebsite("useruser");
        await loginPage.ValidateErrorMessage(ErrorMessages.LOGIN_WITH_INCORRECT_USER);
        await loginPage.ValidateUrl(BasicUrl.BASE_URL);
    })
    
    test('loggin with incorrect password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.LoginToWebsite(UserCredentials.STANDARTUSER,'sadad');
        await loginPage.ValidateErrorMessage(ErrorMessages.LOGIN_WITH_INCORRECT_PASSWORD);
        await loginPage.ValidateUrl(BasicUrl.BASE_URL);
    })  
})
