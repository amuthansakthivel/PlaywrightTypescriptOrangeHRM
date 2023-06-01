import { test, expect } from "@playwright/test";
import HomePage from "../pages/home.page";
import config from "../config/framework.config";

test.describe("home page test suite", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${config.baseURL}/web/index.php/auth/login`);
    });
    test('check homepage title @smoke', async ({page}) => {
        let homePage = new HomePage(page);
        await homePage.loginToApplication(config.username, config.password);
        expect(await page.title()).toEqual("OrangeHRM");
    });

    /*test.afterEach(async ({ page }) => {
        //teardown steps
    });*/
});