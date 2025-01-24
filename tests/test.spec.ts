import {expect, test} from "@playwright/test";

test('test Open the app', async ({ page }) => {
    await page.goto('https://nodeexpressapi-project.onrender.com')
});

test('has title', async ({ page }) => {
    await page.goto('https://nodeexpressapi-project.onrender.com/add');

    // Expect a title "to contain" a substring.   Users List
    await expect(page).toHaveTitle(/Users app/);
});

test('get visible heading', async ({ page }) => {
    await page.goto('https://nodeexpressapi-project.onrender.com/add');

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Users List' })).toBeVisible();
});

test('get search link', async ({ page }) => {
    await page.goto('https://nodeexpressapi-project.onrender.com/add');

    // Click the get started link.
    await page.getByRole('link', { name: 'Search' }).click();
});
