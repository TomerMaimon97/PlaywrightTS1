import { Locator, Page, expect } from "@playwright/test";
import UserCredentials from "../helpers/UserCredentials";
import BasicUrl from "../helpers/BasicUrl";
import { url } from "inspector";
import { BasePage } from "./BasePage";
import { ErrorMessages } from "../helpers/ErrorMessages";

export default class LoginPage extends BasePage{

    private usernameField: Locator;
    private passwordField: Locator;
    private loginButton: Locator;
    private errorMessage: Locator;

    constructor(protected page: Page) {
        super(page);
        this.usernameField = this.page.locator('[data-test="username"]');
        this.passwordField = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[data-test="login-button"]');
        this.errorMessage = this.page.locator('[data-test= "error"]');
    }

    public async LoginToWebsite(username = UserCredentials.STANDARTUSER, 
        password = UserCredentials.PASSWORD, 
        url = BasicUrl.BASE_URL) {
        await this.page.goto(url);
        await this.ValidateUrl(url)
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    public async ValidateErrorMessage(errorMessage: ErrorMessages) {
        await this.ValidateElementMessage(this.errorMessage, errorMessage.valueOf());
    }
}


