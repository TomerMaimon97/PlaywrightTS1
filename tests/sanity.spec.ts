import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import BasicUrl from '../helpers/BasicUrl';
import ProductsPage from '../pages/productsPage';


test('test', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  await loginPage.LoginToWebsite();
});


test('test_2', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  await loginPage.LoginToWebsite();
  const productsPage = new ProductsPage(page)
  await productsPage.validatePageUrl(BasicUrl.BASE_URL+"inventory.html")
  await productsPage.validateTitle("Products")
});