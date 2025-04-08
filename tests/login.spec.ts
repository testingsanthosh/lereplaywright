import { test, expect } from '@playwright/test';

test('main navigation', async ({ page }) => {
  // Step 1: Go to the main site
  await page.goto('https://tf-dev-ui.leremitt.com');

  // Step 2: Click the login button (assuming the button says 'Login')
  await page.getByText('Login');

  // Step 3: Wait for the page to land on #/home
  await expect(page).toHaveURL('https://tf-dev-ui.leremitt.com/#/sign-in');

  


  // Optional: Wait for content to load fully
  await page.waitForLoadState('load');

  

  

  await page.getByPlaceholder('Enter E-mail').fill('deepan.k@leremitt.com');
  
  await page.getByPlaceholder('Enter password').fill('Test@123',{timeout:10000}); 
  await page.click("//*[text()='Login']");
  await page.click("//button[normalize-space()='Create Consignment']");

  //const text=await page.locator("//div[@class='max-h-60 overflow-y-auto']//div[@role='group']").all();
  //console.log(text);
await page.click(" //button[normalize-space()='Select Importer']");
  const options = page.locator("//div[@class='max-h-60 overflow-y-auto']//div[@role='group']");
const allTexts = await options.allTextContents();

//console.log(allTexts);

const rawText = allTexts[0]; // The big long string

// Split by any amount of whitespace (space, tab, newline)
const splitByWhitespace = rawText.split(/\s+/);

// Optional: Remove empty strings if any (usually not needed with \s+)
const cleanedList = splitByWhitespace.filter(word => word.trim() !== '');

// Print each word on a new line
cleanedList.forEach((word, index) => {
  console.log(`${index + 1}. ${word}`);
});


  console.log('hello')

  //await page.pause();



});
