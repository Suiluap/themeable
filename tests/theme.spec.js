const { test, expect } = require('@playwright/test');

test('Theme switch', async ({ context }) => {
  const page = await context.newPage()
  await page.goto('/')
  await expect(page.locator('html')).toHaveAttribute('class', 'light')
  await page.locator('[role="switch"]').click()
  await expect(page.locator('html')).toHaveAttribute('class', 'dark')

  const newPage = await context.newPage()
  await newPage.goto('/')
  await expect(newPage.locator('html')).toHaveAttribute('class', 'dark')
})