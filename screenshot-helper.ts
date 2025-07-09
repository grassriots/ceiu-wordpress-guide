import { Page } from '@playwright/test';
import { mkdirSync, existsSync } from 'fs';
import path from 'path';

export class ScreenshotHelper {
  private page: Page;
  private screenshotsDir: string;

  constructor(page: Page) {
    this.page = page;
    this.screenshotsDir = path.join(process.cwd(), 'screenshots');
    this.ensureScreenshotsDir();
  }

  private ensureScreenshotsDir(): void {
    if (!existsSync(this.screenshotsDir)) {
      mkdirSync(this.screenshotsDir, { recursive: true });
    }
  }

  async takeScreenshot(
    sectionName: string, 
    screenshotNumber: number, 
    description: string,
    options: {
      fullPage?: boolean;
      waitForSelector?: string;
      scrollToElement?: string;
    } = {}
  ): Promise<string> {
    const { fullPage = true, waitForSelector, scrollToElement } = options;
    
    // Set consistent viewport
    await this.page.setViewportSize({ width: 1200, height: 1000 });
    
    // Wait for selector if provided
    if (waitForSelector) {
      await this.page.waitForSelector(waitForSelector, { state: 'visible' });
    }
    
    // Scroll to element if provided
    if (scrollToElement) {
      await this.page.locator(scrollToElement).scrollIntoViewIfNeeded();
    }
    
    // Wait for load state and then a bit more for dynamic content
    await this.page.waitForLoadState('load');
    await this.page.waitForTimeout(500);
    
    // Generate filename following the pattern: section-name_screenshot-number_short-description.png
    const safeDescription = description.replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase();
    const filename = `${sectionName}_${screenshotNumber.toString().padStart(2, '0')}_${safeDescription}.png`;
    const filepath = path.join(this.screenshotsDir, filename);
    
    // Take screenshot
    await this.page.screenshot({
      path: filepath,
      fullPage,
      type: 'png'
    });
    
    console.log(`✅ Screenshot saved: ${filename}`);
    return filepath;
  }

  async takeElementScreenshot(
    selector: string,
    sectionName: string,
    screenshotNumber: number,
    description: string
  ): Promise<string> {
    // Wait for element and scroll into view
    const element = this.page.locator(selector);
    await element.waitFor({ state: 'visible' });
    await element.scrollIntoViewIfNeeded();
    
    // Generate filename
    const safeDescription = description.replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase();
    const filename = `${sectionName}_${screenshotNumber.toString().padStart(2, '0')}_${safeDescription}.png`;
    const filepath = path.join(this.screenshotsDir, filename);
    
    // Take element screenshot
    await element.screenshot({
      path: filepath,
      type: 'png'
    });
    
    console.log(`✅ Element screenshot saved: ${filename}`);
    return filepath;
  }

  async waitAndScreenshot(
    waitTime: number,
    sectionName: string,
    screenshotNumber: number,
    description: string
  ): Promise<string> {
    await this.page.waitForTimeout(waitTime);
    return this.takeScreenshot(sectionName, screenshotNumber, description);
  }
}

export default ScreenshotHelper; 