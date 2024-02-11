import { Locator, Page, expect } from "@playwright/test";
import UserCredentials from "../helpers/UserCredentials";
import BasicUrl from "../helpers/BasicUrl";
import { url } from "inspector";
import { BasePage } from "./BasePage";

export default class ProductsPage extends BasePage{

    private pageTitleElement: Locator;

    constructor(protected page: Page) {
        super(page)
        this.pageTitleElement = this.page.locator('[class="title"]');
    }

    public async validateTitle(title: string) {
        await this.ValidateElementMessage(this.pageTitleElement, title.valueOf());
    }
}    
