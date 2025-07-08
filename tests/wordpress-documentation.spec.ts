import { test, expect } from '@playwright/test';
import ScreenshotHelper from '../screenshot-helper';

test.describe('WordPress Admin Documentation', () => {
  let screenshotHelper: ScreenshotHelper;

  test.beforeEach(async ({ page }) => {
    screenshotHelper = new ScreenshotHelper(page);
    
    // Navigate to WordPress login
    await page.goto('/wp-login.php?itsec-hb-token=backoffice');
  });

  test('Section 01 - Login Process', async ({ page }) => {
    // Screenshot 1: Login page
    await screenshotHelper.takeScreenshot('section-01', 1, 'login-page');
    
    // Fill login form
    await page.fill('#user_login', 'accounts@grassriots.com');
    await page.fill('#user_pass', 'd6nBpyY3n6dLLLVV4z9N');
    await page.click('#wp-submit');
    
    // Wait for dashboard to load
    await page.waitForLoadState('networkidle');
    
    // Screenshot 2: Dashboard home
    await screenshotHelper.takeScreenshot('section-01', 2, 'dashboard-home');
  });

  test('Section 02 - Media Management', async ({ page }) => {
    // Login first
    await page.fill('#user_login', 'accounts@grassriots.com');
    await page.fill('#user_pass', 'd6nBpyY3n6dLLLVV4z9N');
    await page.click('#wp-submit');
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000); // Wait for admin bar to load
    
    // Navigate to Media Library
    await page.click('text=Media');
    await page.waitForLoadState('load');
    await page.waitForTimeout(1000);
    
    // Screenshot 1: Media library grid view
    await screenshotHelper.takeScreenshot('section-02', 1, 'media-library-grid');
    
    // Try to open add media dialog - check if button exists first
    const addButton = page.locator('.page-title-action').first();
    if (await addButton.isVisible()) {
      await addButton.click();
      
      // Wait for either media modal or file uploader
      try {
        await page.waitForSelector('.media-modal, .upload-ui', { state: 'visible', timeout: 5000 });
        await page.waitForTimeout(1000); // Let modal fully load
        
        // Screenshot 2: Add media uploader
        await screenshotHelper.takeScreenshot('section-02', 2, 'add-media-uploader');
        
        // Close dialog if modal exists
        const closeButton = page.locator('.media-modal-close');
        if (await closeButton.isVisible()) {
          await closeButton.click();
        }
      } catch (error) {
        console.log('Media modal not found, continuing...');
      }
    }
  });

  test('Section 03 - Pages Management', async ({ page }) => {
    // Login first
    await page.fill('#user_login', 'accounts@grassriots.com');
    await page.fill('#user_pass', 'd6nBpyY3n6dLLLVV4z9N');
    await page.click('#wp-submit');
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000); // Wait for admin bar to load
    
    // Navigate to Pages using multiple fallback methods
    try {
      // Method 1: Try sidebar menu by ID
      const pagesMenu = page.locator('#menu-pages').first();
      if (await pagesMenu.isVisible()) {
        await pagesMenu.click();
        await page.waitForTimeout(500);
        await page.click('a[href="edit.php?post_type=page"]');
      } else {
        // Method 2: Try text-based navigation
        await page.click('text=Pages');
      }
    } catch (error) {
      // Method 3: Direct URL navigation
      console.log('Pages navigation failed, using direct URL');
      await page.goto('/wp-admin/edit.php?post_type=page');
    }
    
    await page.waitForLoadState('load');
    await page.waitForTimeout(1000);
    
    // Screenshot 1: All pages list
    await screenshotHelper.takeScreenshot('section-03', 1, 'all-pages-list');
  });

  test('Section 04 - Posts Management', async ({ page }) => {
    // Login first
    await page.fill('#user_login', 'accounts@grassriots.com');
    await page.fill('#user_pass', 'd6nBpyY3n6dLLLVV4z9N');
    await page.click('#wp-submit');
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000); // Wait for admin bar to load
    
    // Navigate to Posts using multiple fallback methods
    try {
      // Method 1: Try sidebar menu by ID
      const postsMenu = page.locator('#menu-posts').first();
      if (await postsMenu.isVisible()) {
        await postsMenu.click();
        await page.waitForTimeout(500);
        await page.click('a[href="edit.php"]');
      } else {
        // Method 2: Try text-based navigation
        await page.click('text=Posts');
      }
    } catch (error) {
      // Method 3: Direct URL navigation
      console.log('Posts navigation failed, using direct URL');
      await page.goto('/wp-admin/edit.php');
    }
    
    await page.waitForLoadState('load');
    await page.waitForTimeout(1000);
    
    // Screenshot 1: All posts list
    await screenshotHelper.takeScreenshot('section-04', 1, 'all-posts-list');
    
    // Click Add New Post
    try {
      await page.click('.page-title-action');
      await page.waitForLoadState('load');
      await page.waitForTimeout(3000); // Give more time for editor
      
      // Wait for block editor to load (WordPress can be slow)
      try {
        await page.waitForSelector('.block-editor-writing-flow, .wp-block-post-title, .editor-writing-flow', { timeout: 15000 });
        await page.waitForTimeout(3000); // Let editor fully initialize
        
        // Screenshot 2: New post editor
        await screenshotHelper.takeScreenshot('section-04', 2, 'new-post-editor');
      } catch (error) {
        console.log('Block editor took too long to load, taking screenshot anyway');
        await screenshotHelper.takeScreenshot('section-04', 2, 'new-post-editor');
      }
    } catch (error) {
      // Fallback: Direct URL to create new post
      await page.goto('/wp-admin/post-new.php');
      await page.waitForLoadState('load');
      await page.waitForTimeout(3000);
      await screenshotHelper.takeScreenshot('section-04', 2, 'new-post-editor');
    }
  });

  test('Section 05 - Appearance Management', async ({ page }) => {
    // Login first
    await page.fill('#user_login', 'accounts@grassriots.com');
    await page.fill('#user_pass', 'd6nBpyY3n6dLLLVV4z9N');
    await page.click('#wp-submit');
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000); // Wait for admin bar to load
    
    // Try different approaches to navigate to Appearance
    try {
      // Method 1: Try sidebar menu item
      const appearanceMenu = page.locator('#menu-appearance').first();
      if (await appearanceMenu.isVisible()) {
        await appearanceMenu.click();
        await page.waitForTimeout(500);
        
        // Click Themes submenu
        await page.click('a[href="themes.php"]');
        await page.waitForLoadState('load');
        await page.waitForTimeout(1000);
        
        // Screenshot 1: Themes page
        await screenshotHelper.takeScreenshot('section-05', 1, 'themes-page');
        
        // Navigate to Menus
        await page.click('a[href="nav-menus.php"]');
        await page.waitForLoadState('load');
        await page.waitForTimeout(1000);
        
        // Screenshot 2: Menus page
        await screenshotHelper.takeScreenshot('section-05', 2, 'menus-page');
      } else {
        // Method 2: Direct navigation if menu not visible
        await page.goto('/wp-admin/themes.php');
        await page.waitForLoadState('load');
        await page.waitForTimeout(1000);
        
        // Screenshot 1: Themes page
        await screenshotHelper.takeScreenshot('section-05', 1, 'themes-page');
        
        // Navigate to Menus directly
        await page.goto('/wp-admin/nav-menus.php');
        await page.waitForLoadState('load');
        await page.waitForTimeout(1000);
        
        // Screenshot 2: Menus page
        await screenshotHelper.takeScreenshot('section-05', 2, 'menus-page');
      }
    } catch (error) {
      console.log('Appearance navigation failed, trying direct URLs');
      
      // Fallback: Direct URL navigation
      await page.goto('/wp-admin/themes.php');
      await page.waitForLoadState('load');
      await page.waitForTimeout(1000);
      await screenshotHelper.takeScreenshot('section-05', 1, 'themes-page');
      
      await page.goto('/wp-admin/nav-menus.php');
      await page.waitForLoadState('load');
      await page.waitForTimeout(1000);
      await screenshotHelper.takeScreenshot('section-05', 2, 'menus-page');
    }
  });

  test('Section 06 - Block Editor Features', async ({ page }) => {
    // Login first
    await page.fill('#user_login', 'accounts@grassriots.com');
    await page.fill('#user_pass', 'd6nBpyY3n6dLLLVV4z9N');
    await page.click('#wp-submit');
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
    
    // Try multiple approaches to access block editor
    let blockEditorFound = false;
    
    // Approach 1: Try new page with block editor
    try {
      await page.goto('/wp-admin/post-new.php?post_type=page');
      await page.waitForLoadState('load');
      await page.waitForTimeout(3000);
      
      // Check if block editor is present
      const blockEditorSelectors = [
        '.block-editor-writing-flow',
        '.wp-block-post-title',
        '.editor-writing-flow',
        '.edit-post-visual-editor',
        '.wp-block'
      ];
      
      for (const selector of blockEditorSelectors) {
        if (await page.locator(selector).isVisible({ timeout: 3000 })) {
          blockEditorFound = true;
          break;
        }
      }
      
      if (blockEditorFound) {
        // Screenshot 1: Block editor interface
        await screenshotHelper.takeScreenshot('section-06', 1, 'block-editor-interface');
        
        // Try to add content
        try {
          // Add title if possible
          const titleElement = page.locator('.wp-block-post-title, .editor-post-title__input');
          if (await titleElement.isVisible({ timeout: 2000 })) {
            await titleElement.click();
            await titleElement.type('Block Editor Demo Page');
            await page.waitForTimeout(1000);
          }
          
          // Add content if possible
          const contentSelectors = [
            '.block-editor-writing-flow',
            '.editor-writing-flow',
            '.wp-block-paragraph'
          ];
          
          for (const selector of contentSelectors) {
            try {
              const contentArea = page.locator(selector);
              if (await contentArea.isVisible({ timeout: 2000 })) {
                await contentArea.click();
                await page.waitForTimeout(500);
                await page.keyboard.type('This is a paragraph block with sample text.');
                break;
              }
            } catch (e) {
              continue;
            }
          }
          
          // Screenshot 2: Block editor with content
          await screenshotHelper.takeScreenshot('section-06', 2, 'block-editor-with-content');
          
        } catch (error) {
          console.log('Could not add content to block editor');
        }
      }
      
    } catch (error) {
      console.log('Block editor approach 1 failed:', error);
    }
    
    // Approach 2: Try new post if page didn't work
    if (!blockEditorFound) {
      try {
        await page.goto('/wp-admin/post-new.php');
        await page.waitForLoadState('load');
        await page.waitForTimeout(3000);
        
        // Check for any editor interface
        const editorSelectors = [
          '.block-editor',
          '.edit-post',
          '.editor-writing-flow',
          '#post-body',
          '.wp-editor-wrap'
        ];
        
        for (const selector of editorSelectors) {
          if (await page.locator(selector).isVisible({ timeout: 3000 })) {
            blockEditorFound = true;
            break;
          }
        }
        
        if (blockEditorFound) {
          await screenshotHelper.takeScreenshot('section-06', 1, 'post-editor-interface');
        }
        
      } catch (error) {
        console.log('Block editor approach 2 failed:', error);
      }
    }
    
    // Approach 3: If no block editor, show classic editor or whatever is available
    if (!blockEditorFound) {
      console.log('Block editor not found, capturing available editor interface');
      await screenshotHelper.takeScreenshot('section-06', 1, 'available-editor-interface');
    }
    
    // Try to find and show the block inserter if we have block editor
    if (blockEditorFound) {
      try {
        const inserterSelectors = [
          '.block-editor-inserter__toggle',
          '.edit-post-header-toolbar__inserter-toggle',
          '.components-button[aria-label*="Add"]',
          '.components-button[aria-label*="inserter"]',
          '.block-editor-inserter'
        ];
        
        for (const selector of inserterSelectors) {
          try {
            const inserterButton = page.locator(selector).first();
            if (await inserterButton.isVisible({ timeout: 2000 })) {
              await inserterButton.click();
              await page.waitForTimeout(2000);
              
              // Screenshot 3: Block inserter panel
              await screenshotHelper.takeScreenshot('section-06', 3, 'block-inserter-panel');
              break;
            }
          } catch (e) {
            continue;
          }
        }
      } catch (error) {
        console.log('Could not open block inserter');
      }
    }
  });

  test('Section 07 - User Management', async ({ page }) => {
    // Login first
    await page.fill('#user_login', 'accounts@grassriots.com');
    await page.fill('#user_pass', 'd6nBpyY3n6dLLLVV4z9N');
    await page.click('#wp-submit');
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
    
    // Navigate to Users
    try {
      await page.goto('/wp-admin/users.php');
      await page.waitForLoadState('load');
      await page.waitForTimeout(1000);
      
      // Screenshot 1: All users list
      await screenshotHelper.takeScreenshot('section-07', 1, 'all-users-list');
      
      // Navigate to Add New User
      await page.click('.page-title-action');
      await page.waitForLoadState('load');
      await page.waitForTimeout(1000);
      
      // Screenshot 2: Add new user form
      await screenshotHelper.takeScreenshot('section-07', 2, 'add-new-user-form');
      
    } catch (error) {
      console.log('User management pages not accessible');
    }
  });

  test('Section 08 - Custom Post Types', async ({ page }) => {
    // Login first
    await page.fill('#user_login', 'accounts@grassriots.com');
    await page.fill('#user_pass', 'd6nBpyY3n6dLLLVV4z9N');
    await page.click('#wp-submit');
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
    
    // Check for Events post type
    try {
      await page.goto('/wp-admin/edit.php?post_type=events');
      await page.waitForLoadState('load');
      await page.waitForTimeout(1000);
      
      // Screenshot 1: Events list
      await screenshotHelper.takeScreenshot('section-08', 1, 'events-post-type');
      
      // Try to add new event
      const addNewButton = page.locator('.page-title-action');
      if (await addNewButton.isVisible()) {
        await addNewButton.click();
        await page.waitForLoadState('load');
        await page.waitForTimeout(2000);
        
        // Screenshot 2: New event editor
        await screenshotHelper.takeScreenshot('section-08', 2, 'new-event-editor');
      }
    } catch (error) {
      console.log('Events post type not found');
    }
    
    // Check for Locals post type
    try {
      await page.goto('/wp-admin/edit.php?post_type=locals');
      await page.waitForLoadState('load');
      await page.waitForTimeout(1000);
      
      // Screenshot 3: Locals list
      await screenshotHelper.takeScreenshot('section-08', 3, 'locals-post-type');
      
    } catch (error) {
      console.log('Locals post type not found');
    }
  });

  test('Section 09 - Forms Management', async ({ page }) => {
    // Login first
    await page.fill('#user_login', 'accounts@grassriots.com');
    await page.fill('#user_pass', 'd6nBpyY3n6dLLLVV4z9N');
    await page.click('#wp-submit');
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
    
    // Check for Forminator plugin
    try {
      await page.goto('/wp-admin/admin.php?page=forminator');
      await page.waitForLoadState('load');
      await page.waitForTimeout(2000);
      
      // Screenshot 1: Forminator dashboard
      await screenshotHelper.takeScreenshot('section-09', 1, 'forminator-dashboard');
      
    } catch (error) {
      console.log('Forminator plugin not found or not accessible');
    }
  });

  test('Section 10 - Multilingual WPML', async ({ page }) => {
    // Login first
    await page.fill('#user_login', 'accounts@grassriots.com');
    await page.fill('#user_pass', 'd6nBpyY3n6dLLLVV4z9N');
    await page.click('#wp-submit');
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
    
    // Check for WPML plugin
    try {
      await page.goto('/wp-admin/admin.php?page=sitepress-multilingual-cms%2Fmenu%2Flanguages.php');
      await page.waitForLoadState('load');
      await page.waitForTimeout(2000);
      
      // Screenshot 1: WPML languages settings
      await screenshotHelper.takeScreenshot('section-10', 1, 'wpml-languages-settings');
      
    } catch (error) {
      console.log('WPML plugin not found or not accessible');
    }
  });

  test('Section 11 - Site Settings', async ({ page }) => {
    // Login first
    await page.fill('#user_login', 'accounts@grassriots.com');
    await page.fill('#user_pass', 'd6nBpyY3n6dLLLVV4z9N');
    await page.click('#wp-submit');
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
    
    // Navigate to General Settings
    await page.goto('/wp-admin/options-general.php');
    await page.waitForLoadState('load');
    await page.waitForTimeout(1000);
    
    // Screenshot 1: General settings
    await screenshotHelper.takeScreenshot('section-11', 1, 'general-settings');
    
    // Navigate to Reading Settings
    await page.goto('/wp-admin/options-reading.php');
    await page.waitForLoadState('load');
    await page.waitForTimeout(1000);
    
    // Screenshot 2: Reading settings
    await screenshotHelper.takeScreenshot('section-11', 2, 'reading-settings');
    
    // Navigate to Permalink Settings
    await page.goto('/wp-admin/options-permalink.php');
    await page.waitForLoadState('load');
    await page.waitForTimeout(1000);
    
    // Screenshot 3: Permalink settings
    await screenshotHelper.takeScreenshot('section-11', 3, 'permalink-settings');
  });

  test('Section 12 - Customizer and Widgets', async ({ page }) => {
    // Login first
    await page.fill('#user_login', 'accounts@grassriots.com');
    await page.fill('#user_pass', 'd6nBpyY3n6dLLLVV4z9N');
    await page.click('#wp-submit');
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
    
    // Navigate to Customizer
    try {
      await page.goto('/wp-admin/customize.php');
      await page.waitForLoadState('load');
      await page.waitForTimeout(3000); // Customizer takes longer to load
      
      // Screenshot 1: Customizer interface
      await screenshotHelper.takeScreenshot('section-12', 1, 'customizer-interface');
      
    } catch (error) {
      console.log('Customizer not accessible');
    }
    
    // Navigate to Widgets (if available)
    try {
      await page.goto('/wp-admin/widgets.php');
      await page.waitForLoadState('load');
      await page.waitForTimeout(1000);
      
      // Screenshot 2: Widgets page
      await screenshotHelper.takeScreenshot('section-12', 2, 'widgets-page');
      
    } catch (error) {
      console.log('Widgets page not accessible');
    }
  });

  test('Section 13 - Plugins Management', async ({ page }) => {
    // Login first
    await page.fill('#user_login', 'accounts@grassriots.com');
    await page.fill('#user_pass', 'd6nBpyY3n6dLLLVV4z9N');
    await page.click('#wp-submit');
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
    
    // Navigate to Plugins
    try {
      await page.goto('/wp-admin/plugins.php');
      await page.waitForLoadState('load');
      await page.waitForTimeout(1000);
      
      // Screenshot 1: Installed plugins
      await screenshotHelper.takeScreenshot('section-13', 1, 'installed-plugins');
      
      // Navigate to Add New Plugin
      await page.click('.page-title-action');
      await page.waitForLoadState('load');
      await page.waitForTimeout(2000);
      
      // Screenshot 2: Add new plugin page
      await screenshotHelper.takeScreenshot('section-13', 2, 'add-new-plugin');
      
    } catch (error) {
      console.log('Plugin management not accessible');
    }
  });

  test('Section 14 - Tools and Import Export', async ({ page }) => {
    // Login first
    await page.fill('#user_login', 'accounts@grassriots.com');
    await page.fill('#user_pass', 'd6nBpyY3n6dLLLVV4z9N');
    await page.click('#wp-submit');
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
    
    // Navigate to Tools
    try {
      await page.goto('/wp-admin/tools.php');
      await page.waitForLoadState('load');
      await page.waitForTimeout(1000);
      
      // Screenshot 1: Available tools
      await screenshotHelper.takeScreenshot('section-14', 1, 'available-tools');
      
      // Navigate to Import
      await page.goto('/wp-admin/import.php');
      await page.waitForLoadState('load');
      await page.waitForTimeout(1000);
      
      // Screenshot 2: Import page
      await screenshotHelper.takeScreenshot('section-14', 2, 'import-page');
      
      // Navigate to Export
      await page.goto('/wp-admin/export.php');
      await page.waitForLoadState('load');
      await page.waitForTimeout(1000);
      
      // Screenshot 3: Export page
      await screenshotHelper.takeScreenshot('section-14', 3, 'export-page');
      
    } catch (error) {
      console.log('Tools pages not accessible');
    }
  });

  test('Section 15 - Comments Management', async ({ page }) => {
    // Login first
    await page.fill('#user_login', 'accounts@grassriots.com');
    await page.fill('#user_pass', 'd6nBpyY3n6dLLLVV4z9N');
    await page.click('#wp-submit');
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
    
    // Navigate to Comments
    try {
      await page.goto('/wp-admin/edit-comments.php');
      await page.waitForLoadState('load');
      await page.waitForTimeout(1000);
      
      // Screenshot 1: Comments management
      await screenshotHelper.takeScreenshot('section-15', 1, 'comments-management');
      
    } catch (error) {
      console.log('Comments management not accessible');
    }
  });
}); 