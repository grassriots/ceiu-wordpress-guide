# CEIU WordPress Documentation System

This project provides automated screenshot generation for WordPress admin interface documentation using Playwright.

## Setup Instructions

### 1. Install Dependencies

```bash
# Install Node.js dependencies
npm install

# Install Playwright browsers
npm run install:browsers
```

### 2. Run Documentation Screenshots

```bash
# Generate all screenshots automatically
npm run screenshots

# Run tests with browser visible (helpful for debugging)
npm run test:headed

# Run in debug mode (step through tests)
npm run test:debug

# Run with UI (interactive test runner)
npm run test:ui
```

## Configuration Features

### Automatic Screenshot Management
- **Automatic Directory Creation**: Screenshots are saved directly to `/screenshots` folder
- **Consistent Naming**: Files follow `section-name_screenshot-number_description.png` pattern
- **Proper Viewport**: All screenshots taken at 1200x1000 resolution
- **Full Page Capture**: Complete page screenshots by default

### WordPress Integration
- **Pre-authentication**: Automatic login with stored credentials
- **Network Idle Waiting**: Ensures all content loads before screenshots
- **Element Visibility**: Waits for elements to be visible and stable

## File Structure

```
├── playwright.config.ts          # Main Playwright configuration
├── global-setup.ts              # Global setup (creates directories, auth)
├── screenshot-helper.ts          # Custom screenshot utility class
├── package.json                 # Dependencies and scripts
├── tests/                       # Test files
│   └── wordpress-documentation.spec.ts
├── screenshots/                 # Generated screenshots (auto-created)
└── .cursor/rules/               # Cursor IDE rules
    └── playwright-rules.mdc
```

## Screenshot Helper Usage

```typescript
import ScreenshotHelper from '../screenshot-helper';

const screenshotHelper = new ScreenshotHelper(page);

// Basic screenshot
await screenshotHelper.takeScreenshot('section-01', 1, 'login-page');

// Wait for specific element
await screenshotHelper.takeScreenshot('section-02', 1, 'media-library', {
  waitForSelector: '.media-frame'
});

// Element-specific screenshot
await screenshotHelper.takeElementScreenshot(
  '.wp-admin-bar', 
  'section-01', 
  3, 
  'admin-toolbar'
);
```

## WordPress Credentials

The system uses the following WordPress admin credentials (configured in global-setup.ts):
- **Site**: https://ceiu-seic.lndo.site/
- **Login URL**: https://ceiu-seic.lndo.site/wp-login.php?itsec-hb-token=backoffice

## Cursor IDE Integration

The project includes Cursor IDE rules that:
- Automatically configure screenshot settings
- Enforce consistent viewport dimensions
- Provide WordPress-specific testing guidance
- Ensure proper error handling

## Available npm Scripts

- `npm test` - Run all tests
- `npm run test:headed` - Run tests with visible browser
- `npm run test:debug` - Debug mode with step-through
- `npm run test:ui` - Interactive test UI
- `npm run screenshots` - Generate documentation screenshots only
- `npm run report` - View test results report
- `npm run install:browsers` - Install Playwright browsers

## Adding New Documentation Sections

1. Add new test cases to `tests/wordpress-documentation.spec.ts`
2. Use the `ScreenshotHelper` class for consistent screenshot management
3. Follow the naming convention: `section-XX_screenshot-number_description`
4. Screenshots will automatically be saved to `/screenshots` folder

## Troubleshooting

- **No screenshots generated**: Check that `/screenshots` directory exists and is writable
- **Login failures**: Verify WordPress credentials and site accessibility
- **Element not found**: Add appropriate wait conditions using `waitForSelector`
- **Inconsistent screenshots**: Ensure viewport is set to 1200x1000 before capture 