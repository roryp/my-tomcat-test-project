import { test, expect } from '@playwright/test';

test('test AnimalGenerator servlet', async ({ page }) => {
  // Navigate to the servlet URL with an animal parameter
  await page.goto('http://localhost:8080/imagegen/animalgenerator?animal=dog');

  // Check if the story is present in the page
  const story = await page.textContent('body');
  expect(story).not.toBeNull();

  // Check if the picture is present in the page
  const imgElement = await page.$('img');
  expect(imgElement).not.toBeNull();
});