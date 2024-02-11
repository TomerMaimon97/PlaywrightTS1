import { Locator, Page, expect } from "@playwright/test";
import UserCredentials from "../helpers/UserCredentials";
import BasicUrl from "../helpers/BasicUrl";
import { url } from "inspector";

export default class LoginPage{

    usernameField: Locator;
    passwordField: Locator;
    loginButton: Locator;

    constructor(protected page: Page) {
        this.usernameField = this.page.locator('[data-test="username"]');
        this.passwordField = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[data-test="login-button"]');
    }

    public async LoginToWebsite(username = UserCredentials.STANDARTUSER, password = UserCredentials.PASSWORD, url = BasicUrl.BASE_URL) {
        await this.page.goto(url);
        await this.ValidateUrl(url)
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    public async ValidateUrl(url: string) {
        await expect(this.page).toHaveURL(url,{timeout: 20000});
    }
}

