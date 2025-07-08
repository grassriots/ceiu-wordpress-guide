import { chromium, FullConfig } from '@playwright/test';
import { mkdirSync, existsSync } from 'fs';
import path from 'path';

async function globalSetup(config: FullConfig) {
  // Ensure screenshots directory exists
  const screenshotsDir = path.join(process.cwd(), 'screenshots');
  if (!existsSync(screenshotsDir)) {
    mkdirSync(screenshotsDir, { recursive: true });
    console.log('✅ Created screenshots directory:', screenshotsDir);
  }

  // Set up browser for WordPress authentication if needed
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // Pre-authenticate to WordPress if needed
  try {
    await page.goto('https://ceiu-seic.lndo.site/wp-login.php?itsec-hb-token=backoffice');
    await page.click('#wp-submit');
    await page.waitForLoadState('load');
    
    // Save authentication state
    await context.storageState({ path: 'wordpress-auth.json' });
    console.log('✅ WordPress authentication state saved');
  } catch (error) {
    console.log('⚠️  WordPress authentication failed:', error.message);
  }

  await browser.close();
}

export default globalSetup; 