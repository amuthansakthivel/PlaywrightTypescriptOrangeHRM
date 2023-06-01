import {Locator, Page} from "@playwright/test";

export default class HomePage {

    private page;
    private username;
    private password;
    private loginButton;

    constructor(page: Page) {
        this.page = page;
        this.username = this.page.locator("//input[@name='username']");
        this.password = this.page.locator("//input[@name='password']");
        this.loginButton = this.page.getByText(" Login ").last();
    }

    async loginToApplication(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}