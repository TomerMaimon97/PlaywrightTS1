import { Locator, Page, expect, test } from "@playwright/test";

export abstract class BasePage {

    constructor(protected page: Page) {

    }
    
    public async ValidateUrl(url: string) {
        await test.step(`validating correct URL is ${url}`, async () => {
            await expect(this.page).toHaveURL(url);
        });
    }

    public async ValidateElementMessage(element: Locator, text: string) {
        await test.step(`validating correct message is ${text}`, async () => {
            await expect(element).toContainText(text)
        });
    }
}
