# CEIU WordPress Training Summary

This document summarizes the WordPress training session conducted by Dave for the CEIU team. The content is organized by topic with detailed bullet points for creating documentation and Playwright screenshots.

## 1. Login and Access

### Backend Login
- **URL Path**: `/backoffice`
- **Login Process**:
  - Navigate to domain + `/backoffice`
  - Enter username and password
  - Click login button
- **Password Recovery**:
  - "Lost password" button available
  - Sends email for password reset

## 2. Media Management

### Media Library Navigation
- **Access**: WordPress Admin > Media
- **Upload Methods**:
  - Click "Add Media" button
  - Drag and drop files onto screen
- **File Specifications**:
  - Maximum file size: 100 MB (can be increased if needed)
  - Supports images, PDFs, and other file types

### Image Settings
- **Alt Text Field**: 
  - Important for screen readers and accessibility
  - Shows when image doesn't load
- **Caption Field**:
  - Optional text that appears below images
  - Can be added when needed
- **Copy Link**:
  - "Copy to clipboard" button available
  - Provides direct URL to media file

## 3. Pages and Posts Management

### Finding and Editing Content
- **Search Methods**:
  - Scroll through list view
  - Use search tool in corner
- **Edit Process**:
  - Click "Edit" button on desired page/post
  - Opens editor interface

### Creating New Content
- **Multiple Access Points**:
  - Pages > Add New Page
  - Posts > Add New Post
  - Top toolbar "+" button shows all content types (Post, Page, Events, Local, User)

### Publishing Controls
- **Save/Publish Buttons**:
  - "Save" for existing published content
  - "Publish" for new unpublished content
- **Settings Panel**:
  - Toggle "Settings" button to open/close sidebar
  - Contains Page and Block tabs

### Content Status Options
- **Draft**: Not visible to public
- **Pending**: Flag for review (similar to draft)
- **Private**: Requires login to view
- **Published**: Live on website
- **Scheduled**: Set future publish date/time

### Scheduling Features
- **Date Selection**: Calendar picker
- **Time Selection**: AM/PM selector
- **More useful for Posts than Pages**

## 4. Container Block

### Purpose
- Restricts maximum content width
- Default: 1200-1300 pixels on large screens
- Keeps content centered
- Prevents infinite width expansion

### Container Settings
- **Padding Options**:
  - Padding Top: Adds space above content
  - Padding Bottom: Adds space below content
- **Background Colors**:
  - Access to all theme colors (blue, green, light blue, alternate green, black, white, gray, beige)
  - Color extends full width while content remains contained

## 5. Text and Typography

### Paragraph Block
- **Default block for new lines**
- **Formatting Options**:
  - Bold text
  - Italic text
  - Add links (internal pages auto-load)
  - Text color changes

### Link Settings
- **Best Practices**:
  - External links: Enable "Open in new tab"
  - Internal links: Keep in same tab
- **Edit Links**:
  - Click link > Click pencil icon > Modify settings

### Text Styling
- **Font Size**: Predefined sizes available
- **Font Color**: Theme colors in color picker
- **Text Highlight**:
  - Select text > More options arrow > Highlight
  - Choose highlight color
- **Reset Options**: Vertical dots menu > Reset all

### Text Alignment
- Left (default)
- Center
- Right (rarely used)

## 6. Heading Block

### Heading Hierarchy
- **H1**: Reserved for page titles
- **H2**: Default for content headings
- **H3-H6**: Subsequent subheadings

### Features
- Bold by default
- Same formatting options as paragraph text
- Size determines visual importance

## 7. List Block

### List Types
- **Unordered Lists**: Bullet points
- **Ordered Lists**: Numbered items

### Nested Lists
- Tab key creates sub-items
- Supports multiple nesting levels

## 8. Spacer Block

### Purpose
- Adds vertical space between elements
- Adjustable height

### Usage
- Alternative to multiple line breaks
- More controlled spacing

## 9. Column Block

### Responsive Behavior
- **Desktop**: Shows specified columns (e.g., 3 columns)
- **Tablet**: May reduce columns
- **Mobile**: Stacks vertically

### Column Distribution
- 50/50 split
- 30/70 split
- 33/33/33 split
- Custom percentages

## 10. Image Block

### Image Options
- **Alt Text**: Accessibility requirement
- **Image Size**: Multiple options available
- **Alignment**: Left, center, right, wide, full
- **Caption**: Optional text below image

### Image Display
- Wide/Full width extends beyond container
- Rounded style option available

## 11. Button Block

### Button Creation
- Add text
- Add link (search or custom URL)
- Style options available

### Button Styles
- **Fill**: Solid background
- **Outline**: Border only

### Color Options
- Background color
- Text color
- Uses theme colors

## 12. Embed Block

### Supported Platforms
- YouTube videos
- Other media platforms

### Embed Process
1. Paste URL directly
2. System auto-detects and embeds
3. No manual iframe coding needed

## 13. Custom Theme Blocks

### Card Block
- **Image**: Top of card
- **Title**: Card heading
- **Content**: Paragraph text (not full editor)
- **Subtitle**: Additional info
- **Button**: Optional CTA

### CTA (Call to Action) Block
- Full-width background
- Heading text
- Body paragraph
- Button
- Background image with overlay

### Info Block
- Left/right icon placement
- Background color options
- Icon selection (100+ options)
- Heading and paragraph text

### Stats Block
- Number display
- Prefix/suffix options
- Title text
- Animation on scroll

### Tabs Block
- Horizontal or vertical tabs
- Toggle for mobile accordion
- Default open tab selection

### Accordion Block
- Expandable/collapsible sections
- Good for FAQs
- Default open/closed states
- "Expand all" option

### Logo Grid
- Client/partner logos
- Responsive grid
- Linking options

## 14. Video Features

### Local Video Upload
- **Performance Consideration**: Shows first frame only
- **Benefits**: Faster page load
- **Playback**: Click to play

### Video Embed
- YouTube/Vimeo support
- Full embed functionality

## 15. Advanced Styling

### Green Highlighting
- **HTML**: `<span class="bg-secondary">Highlighted text</span>`
- Requires HTML block or custom HTML in rich text

### Green Divider
- **HTML**: `<span class="divider"></span>`
- Visual separator element

## 16. Homepage Banner

### Components
- Background image
- Heading text
- Subheading
- Two buttons
- Dark overlay option

### Mobile Optimization
- Separate mobile image option
- Prevents poor cropping on small screens

## 17. Page Templates

### Interior Page Banner
- Title (auto-populated from page title)
- Subtitle (optional)
- Background image
- Height adjustment (short banner option)

## 18. User Management

### User Roles
- **Administrator**: Full access
- **Editor**: Content management, no settings/users
- **Author**: Own content only
- **Contributor**: Draft only, no publish
- **Subscriber**: Read only

### User Creation
- Users > Add New
- Email, username required
- Password auto-generated
- Welcome email sent

## 19. Custom Post Types

### Events
- Title, date, content
- Featured image
- Category assignment
- Chronological display

### Locals (Map Locations)
- Address field (full address)
- Auto-geocoding for map display
- Contact information
- Display on interactive map

## 20. Forms (Forminator)

### Form Management
- Forminator > Forms
- Drag-and-drop builder
- Field types: text, email, select, checkbox, file upload

### Form Placement
- Copy shortcode
- Paste in page using shortcode block
- Email notifications configurable

## 21. Multilingual (WPML)

### Language Switching
- Flag selector in editor
- Create/edit translations
- Maintains separate content per language

### Translation Management
- Page-by-page translation
- Menu translation
- Media library language assignment

## 22. Navigation Menus

### Menu Locations
- Primary navigation
- Footer menus (2-3 columns)
- Utility menu

### Menu Structure
- Drag to reorder
- Indent for submenus
- Link to pages, posts, custom URLs

## 23. Site-wide Settings

### Alert Banner
- Toggle on/off
- Text and link
- Appears above header

### Footer Content
- Address information
- Copyright text
- Newsletter signup

### Social Media
- Icon links
- Opens in new window

## 24. Tips and Best Practices

### Performance
- Use "Add Media" for all uploads
- Let WordPress create image sizes
- Use spacer blocks instead of multiple returns

### Accessibility
- Always add alt text to images
- Use proper heading hierarchy
- Ensure color contrast

### Workflow
- Save drafts frequently
- Preview before publishing
- Use private posts for review

### Keyboard Shortcuts
- "/" to add new block
- Quick block search

### Mobile Testing
- Preview on different devices
- Check responsive breakpoints
- Test interactive elements

## 25. Common Tasks Reference

### Quick Actions
- **Add new block**: Type "/" in editor
- **Search blocks**: Start typing after "/"
- **Duplicate block**: Three dots menu > Duplicate
- **Move block**: Drag handle or arrow buttons
- **Delete block**: Three dots menu > Remove block

### Troubleshooting
- **Can't see options**: Check if Settings panel is open
- **Lost content**: Check revisions in sidebar
- **Spacing issues**: Use spacer blocks
- **Color not showing**: Clear browser cache