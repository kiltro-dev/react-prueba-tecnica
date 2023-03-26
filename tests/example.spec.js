// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'
const CAT_PREFIX_IMG_URL = 'https://cataas.com/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = page.getByRole('paragraph')
  const image = page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  console.log({ textContent, imageSrc })
  expect(textContent?.length).toBeGreaterThan(0)
  expect(imageSrc?.startsWith(CAT_PREFIX_IMG_URL)).toBeTruthy()
})
