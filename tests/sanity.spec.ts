import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import UserCredentials from '../helpers/UserCredentials';
import BasicUrl from '../helpers/BasicUrl';


test('test', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  await loginPage.LoginToWebsite();
});