# CEIU WordPress Admin Guide

*A comprehensive guide to managing your WordPress website*

---

## 📋 **Documentation Plan**

This guide combines training content with visual screenshots to provide step-by-step instructions for managing the CEIU WordPress website. The documentation is organized into logical sections following typical workflow patterns.

### **Planned Structure:**

1. **Getting Started** - Login process and dashboard overview
2. **Media Management** - File uploads and library management  
3. **Content Management** - Pages and posts creation/editing
4. **Block Editor Mastery** - Using WordPress blocks effectively
5. **User Management** - Adding and managing team members
6. **Custom Content Types** - Events and location management
7. **Site Configuration** - Settings and customization
8. **Advanced Features** - Forms, multilingual, and plugins
9. **Maintenance & Tools** - Import/export and site maintenance
10. **Tips & Best Practices** - Workflow optimization and troubleshooting

### **Visual Documentation:**
- **32 Screenshots** across 15 major functional areas
- **1200x1000 resolution** for clarity
- **Step-by-step visual guidance** for each process

---

# **Section 1: Getting Started**

## WordPress Login and Dashboard Access

The WordPress admin area is your control center for managing the CEIU website. This section covers how to access the admin area and navigate the main dashboard.

### **Accessing the Admin Area**

**URL Path**: Your WordPress admin can be accessed via the `/backoffice` path:
- **Login URL**: `https://ceiu-seic.lndo.site/backoffice`
- **Alternative**: `https://ceiu-seic.lndo.site/wp-login.php?itsec-hb-token=backoffice`

![WordPress Login Page](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-01_01_login-page.png)
*The WordPress login interface with username and password fields*

### **Login Process**

1. **Navigate** to the login URL
2. **Enter your credentials**:
3. **Click** the "Log In" button

### **Password Recovery**

If you forget your password:
- Click the **"Lost your password?"** link on the login page
- Enter your username or email address
- Check your email for reset instructions
- Follow the link in the email to create a new password

### **WordPress Dashboard Overview**

After successful login, you'll see the WordPress admin dashboard:

![WordPress Admin Dashboard](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-01_02_dashboard-home.png)
*The main WordPress admin dashboard after login*

#### **Key Dashboard Elements:**

1. **Admin Bar** (top) - Quick access to front-end, new content, and user settings
2. **Main Navigation** (left sidebar) - Access to all admin functions
3. **Dashboard Widgets** (center) - Overview of site activity and quick actions
4. **Screen Options** (top right) - Customize what appears on each admin page

#### **Main Navigation Menu:**

- **Dashboard** - Overview and quick stats
- **Posts** - Blog posts and articles
- **Media** - Images, documents, and files
- **Pages** - Static website pages
- **Comments** - User feedback and moderation
- **Appearance** - Themes, menus, and customization
- **Plugins** - Add-ons and extensions
- **Users** - Team member management
- **Tools** - Import/export and utilities
- **Settings** - Site configuration

---

# **Section 2: Media Management**

## Managing Files and Images

The Media Library is your central hub for managing all files on your website including images, documents, videos, and other uploads. WordPress automatically creates multiple sizes of uploaded images for different uses.

### **Accessing the Media Library**

Navigate to **Media** in the left sidebar menu to access your media library.

![Media Library Grid View](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-02_01_media-library-grid.png)
*The Media Library showing all uploaded files in grid format*

#### **Media Library Features:**

- **Grid View** - Visual thumbnail layout (shown above)
- **List View** - Detailed file information in table format
- **Search** - Find specific files quickly
- **Filter by Date** - Browse files by upload month
- **Filter by Type** - Show only images, audio, video, etc.

### **Uploading New Media**

#### **Method 1: Add Media Button**

1. Click the **"Add New"** button at the top of the Media Library
2. The media uploader will open:

![Add Media Uploader](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-02_02_add-media-uploader.png)
*The media upload interface for adding new files*

3. **Drag and drop** files onto the upload area, or
4. **Click "Select Files"** to browse and choose files from your computer

#### **Method 2: Drag and Drop**

- Simply **drag files** from your computer directly onto the Media Library page
- Files will upload automatically

### **File Specifications**

- **Maximum file size**: 100 MB (can be increased if needed)
- **Supported formats**:
  - **Images**: JPG, PNG, GIF, WebP, SVG
  - **Documents**: PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX
  - **Audio**: MP3, WAV, OGG
  - **Video**: MP4, MOV, WMV, AVI

### **Image Settings and Optimization**

When you click on any image in the Media Library, you can edit its details:

#### **Essential Image Fields:**

1. **Alt Text Field**
   - **Critical for accessibility** - helps screen readers describe images
   - **SEO benefit** - helps search engines understand image content
   - **Fallback text** - shows when image fails to load
   - **Always fill this in** for content images

2. **Caption Field**
   - Optional text that appears below images when displayed
   - Useful for photo credits or descriptions
   - Can be overridden when inserting into content

3. **Title**
   - Descriptive name for the file
   - Helps with organization and searchability

4. **Description**
   - Internal notes about the image
   - Not displayed publicly but useful for team organization

### **Using Media in Content**

#### **Getting Image Links**

- Click **"Copy to clipboard"** to get the direct URL to any media file
- Use this for linking to documents or sharing image URLs

#### **Image Sizes**

WordPress automatically creates multiple sizes of uploaded images:
- **Thumbnail** - Small square crop (150x150px)
- **Medium** - Scaled version (300px max width/height)
- **Large** - Larger scaled version (1024px max width/height)
- **Full Size** - Original uploaded dimensions

Choose the appropriate size based on where you're using the image to ensure fast loading times.

### **Media Organization Tips**

1. **Use descriptive filenames** before uploading
2. **Always add alt text** for accessibility
3. **Optimize images** before upload when possible
4. **Use appropriate file formats**:
   - JPG for photos
   - PNG for graphics with transparency
   - SVG for simple logos/icons
5. **Regular cleanup** - Remove unused files periodically

# **Section 3: Content Management**

## Managing Pages and Posts

WordPress uses two primary content types: **Pages** for static content (like About Us, Contact) and **Posts** for dynamic content (like news articles, blog posts). Understanding the difference and how to manage both is essential for effective website administration.

### **Pages vs Posts**

- **Pages**: Static content, hierarchical, not time-sensitive (About, Services, Contact)
- **Posts**: Dynamic content, chronological, appear in feeds and archives (News, Blog articles)

### **Managing Pages**

Navigate to **Pages > All Pages** to view and manage existing pages.

![All Pages List](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-03_01_all-pages-list.png)
*Complete list of website pages with edit and management options*

#### **Page Management Features:**

- **Search** - Find specific pages quickly using the search box
- **Bulk Actions** - Select multiple pages for bulk editing or deletion
- **Quick Edit** - Make simple changes without opening the full editor
- **View** - Preview how the page appears on the live website
- **Edit** - Open the full page editor

#### **Creating New Pages**

1. Click **Pages > Add New** or use the **"Add New"** button on the All Pages screen
2. The page editor will open where you can:
   - Add a page title
   - Create content using the block editor
   - Set page attributes (parent page, template, order)
   - Configure publishing options

### **Managing Posts**

Navigate to **Posts > All Posts** to view and manage blog posts and articles.

![All Posts List](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-04_01_all-posts-list.png)
*Complete list of blog posts with management and editing options*

#### **Post Management Features:**

- **Categories** - Organize posts into logical groups
- **Tags** - Add keywords for better organization and SEO
- **Featured Image** - Set a main image that represents the post
- **Excerpt** - Write a custom summary for archive pages
- **Comments** - Enable/disable reader comments per post

#### **Creating New Posts**

1. Click **Posts > Add New** to create a new blog post
2. The post editor opens with the block editor interface:

![New Post Editor](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-04_02_new-post-editor.png)
*The WordPress block editor for creating new posts*

### **Content Status Options**

Both pages and posts can have different publication statuses:

- **Draft** - Not visible to public, work in progress
- **Pending Review** - Flagged for review before publication
- **Private** - Only visible to logged-in users with proper permissions
- **Published** - Live and visible on the website
- **Scheduled** - Set to publish automatically at a future date/time

### **Publishing Controls**

#### **Save vs Publish**
- **Save Draft** - For existing unpublished content
- **Update** - For existing published content
- **Publish** - For new content ready to go live
- **Schedule** - For content to be published at a specific date/time

#### **Publishing Options**
- **Visibility**: Public, Private, or Password Protected
- **Publish Date**: Immediately or scheduled for later
- **Author**: Who the content is attributed to
- **Discussion**: Allow/disallow comments

### **Content Organization**

#### **For Pages:**
- **Page Hierarchy** - Create parent/child relationships
- **Page Order** - Set custom ordering for navigation
- **Page Templates** - Apply specific layouts

#### **For Posts:**
- **Categories** - Broad topic groupings
- **Tags** - Specific keywords and topics
- **Chronological Organization** - Automatic date-based ordering

### **Finding and Editing Content**

#### **Search Methods:**
1. **Browse List View** - Scroll through all content
2. **Search Tool** - Use the search box in the top-right corner
3. **Filter by Category/Tag** - For posts only
4. **Filter by Date** - Show content from specific time periods
5. **Filter by Author** - Show content by specific users

#### **Quick Actions:**
- **Quick Edit** - Make simple changes (title, slug, categories)
- **Trash** - Move to trash (recoverable)
- **View** - See how content appears on live site

---

# **Section 4: Block Editor Mastery**

## Working with WordPress Blocks

The WordPress block editor (also called Gutenberg) is a visual editor that uses individual blocks to build content. Each paragraph, image, heading, or other element is its own block that can be moved, styled, and configured independently.

### **Block Editor Interface**

![Block Editor Interface](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-06_01_block-editor-interface.png)
*The WordPress block editor showing a clean interface ready for content creation*

#### **Key Interface Elements:**

1. **Post Title Area** - Click to add/edit the page or post title
2. **Content Area** - Where you add and arrange blocks
3. **Settings Sidebar** - Block and document settings (toggle with gear icon)
4. **Toolbar** - Block-specific options appear when block is selected
5. **Add Block Button** (+) - Insert new blocks
6. **Top Toolbar** - Save, preview, and publish options

### **Adding Content with Blocks**

![Block Editor with Content](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-06_02_block-editor-with-content.png)
*Block editor showing sample content with text blocks*

#### **Creating a New Block:**

1. **Click the (+) button** or type **"/"** to open the block inserter
2. **Search or browse** for the block type you need
3. **Click the block** to add it to your content
4. **Start typing** to add content to the block

#### **Common Block Types:**

### **Text Blocks**

#### **Paragraph Block**
- **Default block** for body text
- **Formatting options**: Bold, italic, links, text color
- **Typography settings**: Font size, line height
- **Advanced options**: Drop cap, custom CSS

#### **Heading Block**
- **Six heading levels** (H1 through H6)
- **H1 reserved** for page titles (automatically generated)
- **Use H2** for main content headings
- **H3-H6** for subheadings in logical hierarchy
- **Same formatting options** as paragraph blocks

#### **List Block**
- **Unordered lists** (bullet points)
- **Ordered lists** (numbered)
- **Nested lists** - Use Tab key to create sub-items
- **Convert between types** easily

### **Media Blocks**

#### **Image Block**
- **Essential settings**:
  - **Alt text** (required for accessibility)
  - **Caption** (optional description)
  - **Image size** (thumbnail, medium, large, full)
- **Alignment options**: Left, center, right, wide, full
- **Style options**: Rounded corners, borders
- **Link options**: Link image to media file, page, or custom URL

#### **Video Block**
- **Upload video files** directly
- **Embed from URLs** (YouTube, Vimeo, etc.)
- **Auto-play and loop** options
- **Caption support**

### **Layout Blocks**

#### **Container Block**
- **Restricts content width** to maintain readability
- **Default maximum**: 1200-1300 pixels
- **Keeps content centered** on large screens
- **Background options**: Colors, gradients, images
- **Padding controls**: Top and bottom spacing

#### **Column Block**
- **Responsive layouts**: Desktop columns stack on mobile
- **Common layouts**: 50/50, 30/70, 33/33/33
- **Custom percentages** available
- **Individual column styling**

#### **Spacer Block**
- **Add vertical space** between elements
- **Adjustable height** with visual controls
- **Better than multiple line breaks**
- **Consistent spacing** across devices

### **Interactive Blocks**

#### **Button Block**
- **Call-to-action buttons** with custom text
- **Link options**: Internal pages, external URLs, email
- **Style options**: Fill (solid) or Outline
- **Color customization**: Background and text colors
- **Size options**: Small, medium, large

#### **Embed Block**
- **Auto-embed** from URLs (YouTube, Twitter, Instagram, etc.)
- **No manual iframe coding** required
- **Responsive by default**
- **Preview in editor**

### **Block Management**

#### **Selecting Blocks**
- **Click once** to select a block
- **Click toolbar** for block-specific options
- **Use arrow keys** to navigate between blocks

#### **Moving Blocks**
- **Drag and drop** using the block handle (⋮⋮)
- **Arrow buttons** in toolbar to move up/down
- **Cut and paste** for moving to different sections

#### **Block Settings**
- **Block tab** - Settings specific to the selected block
- **Document tab** - Page/post settings (categories, featured image, etc.)
- **Advanced panel** - Custom CSS classes and attributes

#### **Block Toolbar Options**
- **Transform** - Change block type (paragraph to heading, etc.)
- **Alignment** - Left, center, right options
- **More options** (⋮) - Duplicate, remove, insert before/after

### **Keyboard Shortcuts**

- **/ (slash)** - Open block inserter
- **Enter** - Create new paragraph block
- **Shift + Enter** - Line break within block
- **Ctrl/Cmd + Z** - Undo
- **Ctrl/Cmd + Y** - Redo
- **Ctrl/Cmd + A** - Select all blocks
- **Ctrl/Cmd + X** - Cut selected block
- **Ctrl/Cmd + C** - Copy selected block
- **Ctrl/Cmd + V** - Paste block

### **Content Formatting Best Practices**

#### **Typography Hierarchy**
1. **Page Title** (H1) - Automatic, one per page
2. **Main Headings** (H2) - Major sections
3. **Subheadings** (H3-H6) - Subsections in logical order

#### **Accessibility Guidelines**
- **Always add alt text** to images
- **Use proper heading hierarchy** (don't skip levels)
- **Ensure sufficient color contrast**
- **Write descriptive link text** (not "click here")

#### **SEO Considerations**
- **Use headings to structure content** logically
- **Include keywords naturally** in headings and content
- **Optimize image file names** before uploading
- **Write compelling meta descriptions** in document settings

---

# **Section 5: User Management**

## Managing Team Members and Access

WordPress includes a comprehensive user management system that allows you to control who can access your website and what they can do. Understanding user roles and permissions is crucial for maintaining security while enabling team collaboration.

### **Accessing User Management**

Navigate to **Users > All Users** to view and manage website users.

![All Users List](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-07_01_all-users-list.png)
*Complete list of website users showing roles and management options*

### **WordPress User Roles**

WordPress includes several built-in user roles with different permission levels:

#### **Administrator**
- **Full access** to all WordPress functions
- **Manage users** - Create, edit, and delete other users
- **Install plugins** and themes
- **Modify site settings** and configuration
- **Access all content** regardless of author
- **Should be limited** to site owners and lead developers

#### **Editor**
- **Content management** - Create, edit, publish, and delete all posts and pages
- **Media management** - Upload and manage all media files
- **Comment moderation** - Moderate and manage comments
- **Category/tag management** - Create and manage taxonomies
- **Cannot access** settings, users, plugins, or themes
- **Ideal for** content managers and senior editors

#### **Author**
- **Own content only** - Create, edit, publish, and delete their own posts
- **Media uploads** - Upload and manage their own media files
- **Cannot edit** other users' content
- **Cannot access** administrative functions
- **Good for** regular contributors and bloggers

#### **Contributor**
- **Create and edit** their own posts
- **Cannot publish** - posts must be reviewed and published by Editor/Admin
- **Cannot upload media** files
- **Limited access** to administrative areas
- **Suitable for** guest writers and occasional contributors

#### **Subscriber**
- **Read-only access** to published content
- **Manage own profile** only
- **Cannot create content** or access admin areas
- **Useful for** members-only sites or newsletter subscribers

### **Adding New Users**

Click **Users > Add New** to create a new user account.

![Add New User Form](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-07_02_add-new-user-form.png)
*The add new user form with all required fields*

#### **Required Information:**

1. **Username** (required)
   - **Cannot be changed** after creation
   - **Use lowercase letters, numbers, and underscores**
   - **Choose carefully** - this is permanent

2. **Email Address** (required)
   - **Must be unique** - each user needs different email
   - **Used for notifications** and password resets
   - **Can be changed** later if needed

3. **First Name and Last Name** (optional)
   - **Display purposes** - how the name appears on content
   - **Can be modified** at any time
   - **Helps with user identification**

4. **Website** (optional)
   - **User's personal/business website**
   - **Links to their profile**
   - **Not required** for most users

5. **Password** (auto-generated)
   - **WordPress generates** a secure password automatically
   - **Can be customized** if needed
   - **Sent to user via email**

6. **User Role** (required)
   - **Select appropriate permission level**
   - **Can be changed** later if needed
   - **Start with lower permissions** and upgrade as needed

### **User Management Tasks**

#### **Editing Existing Users**
- **Click username** or "Edit" link in user list
- **Modify role, contact information, or profile details**
- **Cannot change username** but can update everything else
- **Password changes** trigger email notifications

#### **Deleting Users**
- **Use bulk actions** or individual delete links
- **WordPress asks** what to do with their content:
  - **Delete all content** - Permanently removes their posts/pages
  - **Attribute to another user** - Transfers ownership to existing user

#### **User Communication**
- **Welcome emails** sent automatically to new users
- **Password reset emails** available for forgotten passwords
- **Role change notifications** can be sent when permissions change

### **Security Best Practices**

#### **Password Management**
- **Require strong passwords** for all users
- **Regular password updates** for administrative accounts
- **Use unique passwords** for each user
- **Consider two-factor authentication** plugins for additional security

#### **Permission Principles**
- **Least privilege** - Give minimum permissions needed
- **Regular audits** - Review user list and remove inactive accounts
- **Role-based access** - Don't create custom permissions unless necessary
- **Document access levels** - Keep track of who has what permissions

#### **Account Maintenance**
- **Remove unused accounts** regularly
- **Update user information** when team members change roles
- **Monitor user activity** for unusual behavior
- **Keep contact information current** for security notifications

---

# **Section 6: Custom Content Types**

## Managing Events and Locations

The CEIU website includes custom post types beyond the standard pages and posts. These specialized content types allow for better organization and display of specific information like events and local chapter locations.

### **Events Management**

Navigate to **Events** in the admin menu to manage event listings.

![Events Post Type](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-08_01_events-post-type.png)
*The Events custom post type listing showing all event entries*

#### **Events Features:**
- **Title and Description** - Basic event information
- **Date and Time** - Event scheduling
- **Location Information** - Where the event takes place
- **Featured Image** - Visual representation of the event
- **Categories** - Event type organization (conferences, workshops, meetings)
- **Chronological Display** - Automatic ordering by event date

#### **Creating New Events**

1. **Click "Add New"** in the Events section
2. **Add Event Title** - Clear, descriptive name
3. **Write Event Description** - Use block editor for rich content
4. **Set Event Date/Time** - When the event occurs
5. **Add Location Details** - Address and venue information
6. **Upload Featured Image** - Visual for event listings
7. **Assign Categories** - Type of event for filtering
8. **Publish or Schedule** - Make live or set for future publication

#### **Event Categories**
Common event categories include:
- **Conferences** - Large professional gatherings
- **Workshops** - Educational sessions
- **Meetings** - Regular organizational meetings
- **Networking** - Professional networking events
- **Training** - Skill development sessions

### **Locals Management (Map Locations)**

Navigate to **Locals** to manage chapter locations and contact information.

![Locals Post Type](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-08_03_locals-post-type.png)
*The Locals custom post type for managing chapter locations*

#### **Locals Features:**
- **Chapter Name** - Local chapter identification
- **Full Address** - Complete location details for mapping
- **Contact Information** - Phone, email, website
- **Chapter Description** - Information about local activities
- **Auto-Geocoding** - Addresses automatically converted to map coordinates
- **Interactive Map Display** - Locations shown on website map

#### **Creating New Local Chapters**

1. **Click "Add New"** in the Locals section
2. **Add Chapter Name** - Official local chapter name
3. **Enter Full Address** - Complete address for accurate mapping
4. **Add Contact Details**:
   - Phone number
   - Email address
   - Local website (if available)
5. **Write Chapter Description** - Activities, meeting times, special focus
6. **Publish** - Make the location visible on the site map

#### **Address Requirements for Mapping**
- **Complete addresses work best** - Include street, city, state, zip
- **Avoid PO Boxes** - Use physical addresses for mapping
- **Verify accuracy** - Incorrect addresses won't map properly
- **Update regularly** - Keep contact information current

### **Content Organization**

#### **Custom Post Type Benefits**
- **Separate from regular posts** - Doesn't clutter blog
- **Specialized fields** - Custom data entry for specific needs
- **Custom displays** - Different layout options for different content types
- **Better organization** - Easier to manage specific content types
- **Enhanced functionality** - Special features like mapping and event calendars

#### **Publishing Workflow**
1. **Draft creation** - Initial content entry
2. **Review process** - Content verification and editing
3. **Publication** - Making content live on website
4. **Updates** - Regular maintenance and information updates
5. **Archive** - Managing outdated events and information

### **Best Practices**

#### **For Events**
- **Clear, descriptive titles** that include location when relevant
- **Complete date/time information** including time zones if applicable
- **Detailed descriptions** with agenda or program information
- **Quality images** that represent the event well
- **Regular updates** for changes or additional information
- **Archive old events** to keep listings current

#### **For Locals**
- **Accurate address information** for proper mapping
- **Current contact details** - verify phone and email regularly
- **Active chapter descriptions** - update activities and meeting schedules
- **Local leadership information** when appropriate
- **Regional categorization** if managing multiple areas

---

# **Section 7: Site Configuration**

## WordPress Settings and Customization

WordPress includes comprehensive settings for configuring your website's behavior, appearance, and functionality. Understanding these settings ensures your site operates efficiently and meets your organization's needs.

### **General Settings**

Navigate to **Settings > General** to configure basic site information.

![General Settings](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-11_01_general-settings.png)
*WordPress general settings page for basic site configuration*

#### **Key General Settings:**

1. **Site Title**
   - **Main site name** that appears in browser titles and search results
   - **Used in navigation** and branding throughout the site
   - **Important for SEO** - should include relevant keywords

2. **Tagline**
   - **Brief description** of your website's purpose
   - **Appears in search results** and RSS feeds
   - **Keep concise** - usually one sentence

3. **WordPress Address (URL)**
   - **Technical URL** where WordPress files are located
   - **Usually same as Site Address** for most installations
   - **Don't change** unless instructed by developer

4. **Site Address (URL)**
   - **Public URL** visitors use to access your site
   - **What appears in browsers** and search engines
   - **Should match your domain name**

5. **Email Address**
   - **Administrative email** for WordPress notifications
   - **Used for user registration** and system messages
   - **Keep current** - important system communications sent here

6. **Timezone**
   - **Local timezone** for content scheduling and display
   - **Affects post timestamps** and scheduled content
   - **Set to your organization's primary location**

### **Reading Settings**

Navigate to **Settings > Reading** to control content display.

![Reading Settings](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-11_02_reading-settings.png)
*Reading settings for controlling content display and feeds*

#### **Content Display Options:**

1. **Homepage Display**
   - **Static page** - Use specific page as homepage
   - **Latest posts** - Show recent blog posts on homepage
   - **Choose based** on whether site is primarily informational or blog-focused

2. **Blog Pages Show at Most**
   - **Number of posts** displayed per page
   - **Balance load time** with content accessibility
   - **10-15 posts** usually optimal

3. **Syndication Feeds**
   - **RSS feed settings** for content syndication
   - **Number of items** to include in feeds
   - **Summary vs full text** in feeds

### **Permalink Settings**

Navigate to **Settings > Permalinks** to configure URL structure.

![Permalink Settings](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-11_03_permalink-settings.png)
*Permalink settings for SEO-friendly URL structure*

#### **URL Structure Options:**

1. **Plain** - Uses post IDs (not recommended)
2. **Day and Name** - Includes date in URL
3. **Month and Name** - Month and year in URL
4. **Numeric** - Year, month, day, and ID
5. **Post Name** - Clean URLs with just post title (recommended)
6. **Custom Structure** - Define your own pattern

#### **SEO-Friendly Permalinks:**
- **Use "Post name"** structure for best SEO
- **Creates clean URLs** like `/about-us/` instead of `/?p=123`
- **Improves user experience** and search engine rankings
- **Set once and avoid changing** to prevent broken links

### **Appearance and Themes**

Navigate to **Appearance > Themes** to manage site appearance.

![Themes Page](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-05_01_themes-page.png)
*WordPress themes management page*

#### **Theme Management:**
- **Active theme** - Currently used design
- **Available themes** - Installed but inactive themes
- **Theme customization** - Modify colors, layouts, and options
- **Child themes** - Recommended for custom modifications

### **Navigation Menus**

Navigate to **Appearance > Menus** to manage site navigation.

![Menus Page](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-05_02_menus-page.png)
*Menu management for site navigation structure*

#### **Menu Configuration:**
1. **Menu Structure** - Drag and drop to organize
2. **Menu Locations** - Assign to header, footer, or sidebar
3. **Custom Links** - Add external URLs
4. **Page/Post Links** - Link to internal content
5. **Submenu Creation** - Indent items for dropdown menus

### **Customizer and Widgets**

![Customizer Interface](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-12_01_customizer-interface.png)
*WordPress theme customizer for real-time design changes*

![Widgets Page](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-12_02_widgets-page.png)
*Widget management for sidebar and footer content*

#### **Customization Options:**
- **Site identity** - Logo, title, favicon
- **Colors** - Theme color schemes
- **Header/footer** - Customize these areas
- **Widgets** - Add functionality to sidebars and footers
- **Menus** - Navigation structure
- **Homepage settings** - Static page or blog display

---

# **Section 8: Advanced Features**

## Forms, Multilingual Support, and Plugins

The CEIU website includes several advanced features that extend WordPress functionality beyond basic content management. These tools enable enhanced user interaction, international accessibility, and extended capabilities.

### **Forms Management (Forminator)**

Navigate to **Forminator > Forms** to manage contact forms and data collection.

![Forminator Dashboard](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-09_01_forminator-dashboard.png)
*Forminator plugin dashboard for comprehensive form management*

#### **Forminator Features:**
- **Drag-and-drop builder** - Create forms visually
- **Multiple field types** - Text, email, dropdown, checkbox, file upload
- **Conditional logic** - Show/hide fields based on user input
- **Email notifications** - Automatic responses and admin alerts
- **Data collection** - Store submissions in WordPress database
- **Anti-spam protection** - Built-in security measures

#### **Creating Forms:**
1. **Click "Create"** to start new form
2. **Choose template** or start from scratch
3. **Add fields** using drag-and-drop interface
4. **Configure settings** - notifications, confirmations, redirects
5. **Test functionality** before publishing
6. **Embed using shortcode** in pages or posts

#### **Form Integration:**
- **Shortcode embedding** - Copy shortcode to any page/post
- **Widget placement** - Add to sidebars or footer areas
- **Popup forms** - Display as overlay or modal
- **Landing page integration** - Full-page forms for campaigns

### **Multilingual Support (WPML)**

Navigate to **WPML > Languages** to manage multilingual content.

![WPML Languages Settings](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-10_01_wpml-languages-settings.png)
*WPML plugin interface for managing multilingual website content*

#### **WPML Capabilities:**
- **Multiple language support** - Add any number of languages
- **Content translation** - Translate pages, posts, and custom content
- **Menu translation** - Separate navigation for each language
- **Media management** - Language-specific images and files
- **SEO optimization** - Proper hreflang implementation
- **Language switcher** - Allow users to change languages

#### **Translation Workflow:**
1. **Set primary language** - Default language for content
2. **Add secondary languages** - Additional language options
3. **Translate content** - Page-by-page translation process
4. **Review translations** - Quality control and editing
5. **Publish multilingual content** - Make available to users

### **Plugin Management**

Navigate to **Plugins > Installed Plugins** to manage website functionality.

![Installed Plugins](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-13_01_installed-plugins.png)
*Complete list of installed plugins with activation status*

#### **Plugin Categories:**

**Security Plugins:**
- **Backup solutions** - Regular site backups
- **Security scanning** - Malware detection and prevention
- **Login protection** - Brute force attack prevention
- **SSL management** - Certificate management and enforcement

**SEO Plugins:**
- **Meta optimization** - Title and description management
- **XML sitemaps** - Search engine indexing
- **Social media integration** - Open Graph and Twitter Cards
- **Analytics integration** - Google Analytics and Search Console

**Performance Plugins:**
- **Caching** - Speed optimization
- **Image optimization** - Compress and optimize media
- **Database cleanup** - Remove unnecessary data
- **CDN integration** - Content delivery networks

#### **Adding New Plugins**

![Add New Plugin](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-13_02_add-new-plugin.png)
*WordPress plugin repository for adding new functionality*

1. **Navigate to Plugins > Add New**
2. **Search for plugins** by name or functionality
3. **Read reviews and ratings** before installing
4. **Check compatibility** with current WordPress version
5. **Install and activate** carefully
6. **Configure settings** as needed

### **Plugin Best Practices**

#### **Installation Guidelines:**
- **Only install necessary plugins** - Each plugin adds overhead
- **Choose reputable developers** - Check ratings and support
- **Keep plugins updated** - Regular updates for security and compatibility
- **Test on staging site** - Never install directly on live site
- **Remove unused plugins** - Delete rather than just deactivate

#### **Security Considerations:**
- **Regular updates** - Keep all plugins current
- **Remove abandoned plugins** - No longer supported plugins pose risks
- **Backup before changes** - Always have restoration option
- **Monitor plugin activity** - Watch for unusual behavior
- **Use minimal permissions** - Don't give plugins more access than needed

---

# **Section 9: Maintenance and Tools**

## Site Maintenance, Import/Export, and Utilities

Regular maintenance and proper use of WordPress tools ensures your website remains secure, fast, and functional. Understanding these utilities helps prevent problems and enables efficient site management.

### **WordPress Tools**

Navigate to **Tools > Available Tools** to access built-in utilities.

![Available Tools](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-14_01_available-tools.png)
*WordPress built-in tools for site maintenance and management*

#### **Essential Tools:**

**Categories and Tags Converter:**
- **Convert between** categories and tags
- **Bulk organization** of content taxonomy
- **Useful for** site restructuring

**Privacy Policy Guide:**
- **GDPR compliance** assistance
- **Privacy policy templates** and guidance
- **Legal requirement** management

**Site Health:**
- **Performance analysis** - Identify optimization opportunities
- **Security checks** - Basic security assessment
- **Compatibility testing** - PHP and WordPress version checks
- **Troubleshooting** - Debug information and error logs

### **Import Functionality**

Navigate to **Tools > Import** to bring content from other systems.

![Import Page](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-14_02_import-page.png)
*Import tools for migrating content from various platforms*

#### **Supported Import Sources:**
- **WordPress** - Other WordPress sites
- **Blogger** - Google's blogging platform
- **LiveJournal** - Legacy blogging platform
- **RSS Feeds** - Import from any RSS source
- **Tumblr** - Social blogging platform

#### **Import Process:**
1. **Choose import source** from available options
2. **Install importer** if not already available
3. **Upload export file** from source platform
4. **Map users** - Assign imported content to existing users
5. **Import attachments** - Download images and media
6. **Review imported content** - Check for formatting issues

### **Export Functionality**

Navigate to **Tools > Export** to backup or move content.

![Export Page](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-14_03_export-page.png)
*Export tools for backing up and migrating website content*

#### **Export Options:**

**All Content:**
- **Complete site backup** - All posts, pages, comments, custom fields
- **Users and media** - Complete data export
- **Site settings** - Theme options and customizations

**Selective Export:**
- **Posts only** - Blog content export
- **Pages only** - Static content export
- **Media only** - Images and files
- **Date range** - Specific time periods

#### **Export Uses:**
- **Site migration** - Moving to new hosting or domain
- **Backup creation** - Regular content backups
- **Development** - Copy content to staging sites
- **Content analysis** - Data extraction for reporting
- **Legal compliance** - Data portability requirements

### **Comments Management**

Navigate to **Comments** to moderate user feedback.

![Comments Management](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-15_01_comments-management.png)
*Comment moderation and management interface*

#### **Comment Moderation:**
- **Approve/Unapprove** - Control comment visibility
- **Reply to comments** - Engage with users
- **Edit comments** - Fix typos or remove inappropriate content
- **Spam detection** - Automatic and manual spam management
- **Bulk actions** - Manage multiple comments simultaneously

#### **Comment Settings:**
- **Moderation requirements** - Auto-approve or require approval
- **Notification emails** - Admin alerts for new comments
- **Comment threading** - Nested reply organization
- **Pagination** - Number of comments per page

### **Regular Maintenance Tasks**

#### **Weekly Tasks:**
- **Update plugins and themes** - Security and bug fixes
- **Review user accounts** - Remove inactive or suspicious accounts
- **Check comment moderation** - Approve legitimate comments, remove spam
- **Review analytics** - Monitor traffic and performance
- **Test contact forms** - Ensure functionality

#### **Monthly Tasks:**
- **Full site backup** - Complete content and database backup
- **Security scan** - Check for malware and vulnerabilities
- **Performance review** - Analyze load times and optimization opportunities
- **Content audit** - Review and update outdated information
- **User permission review** - Verify access levels are appropriate

#### **Quarterly Tasks:**
- **WordPress core update** - Major version updates
- **Theme updates** - Major theme version changes
- **Plugin audit** - Remove unused plugins, evaluate new needs
- **SEO review** - Check search rankings and optimization
- **Site structure review** - Evaluate navigation and organization

---

# **Section 10: Tips and Best Practices**

## Workflow Optimization and Troubleshooting

Effective WordPress management requires understanding both daily workflows and troubleshooting procedures. These best practices help maintain a professional, secure, and efficient website.

### **Content Creation Workflow**

#### **Planning Phase:**
1. **Content strategy** - Plan topics and publication schedule
2. **Keyword research** - Identify terms for SEO optimization
3. **Media preparation** - Gather and optimize images before writing
4. **Outline creation** - Structure content before writing
5. **Review process** - Establish approval workflow for team content

#### **Creation Phase:**
1. **Start with title** - Clear, descriptive, keyword-rich
2. **Write in blocks** - Use appropriate block types for content
3. **Add media** - Include relevant images with alt text
4. **Internal linking** - Link to related content on your site
5. **SEO optimization** - Meta descriptions, headings, keyword placement

#### **Publication Phase:**
1. **Preview content** - Review appearance before publishing
2. **Schedule strategically** - Publish during optimal times
3. **Social sharing** - Promote on relevant platforms
4. **Monitor performance** - Track engagement and analytics
5. **Update regularly** - Keep content current and accurate

### **Performance Optimization**

#### **Image Optimization:**
- **Resize before upload** - Don't rely on WordPress to resize
- **Choose appropriate formats** - JPG for photos, PNG for graphics
- **Compress images** - Balance quality with file size
- **Use descriptive filenames** - Include keywords when relevant
- **Add alt text** - Essential for accessibility and SEO

#### **Content Organization:**
- **Use proper heading hierarchy** - H1 for titles, H2 for main sections
- **Keep paragraphs short** - Improve readability
- **Use bullet points** - Break up dense information
- **Internal linking** - Help users navigate related content
- **Category organization** - Logical grouping for better navigation

#### **Site Speed:**
- **Minimize plugins** - Only use what's necessary
- **Regular updates** - Keep WordPress, themes, and plugins current
- **Optimize database** - Remove spam comments and revisions
- **Use caching** - Speed up page load times
- **Monitor performance** - Regular speed tests and optimization

### **Security Best Practices**

#### **User Management:**
- **Strong passwords** - Require complex passwords for all users
- **Limited permissions** - Give users minimum necessary access
- **Regular audits** - Review and remove inactive accounts
- **Two-factor authentication** - Add extra security layer when possible
- **Monitor activity** - Watch for unusual login patterns

#### **Content Security:**
- **Regular backups** - Automated daily backups recommended
- **Update schedule** - Keep all software current
- **Secure hosting** - Choose reputable hosting providers
- **SSL certificates** - Encrypt data transmission
- **Malware scanning** - Regular security scans

### **SEO Best Practices**

#### **Content Optimization:**
- **Keyword research** - Target relevant search terms
- **Title optimization** - Include primary keywords in titles
- **Meta descriptions** - Write compelling descriptions for search results
- **Header structure** - Use H1, H2, H3 hierarchy logically
- **Internal linking** - Connect related content

#### **Technical SEO:**
- **XML sitemaps** - Help search engines index your site
- **Page speed** - Fast loading times improve rankings
- **Mobile responsiveness** - Ensure site works on all devices
- **URL structure** - Use SEO-friendly permalinks
- **Image optimization** - Alt text and descriptive filenames

### **Troubleshooting Common Issues**

#### **Login Problems:**
- **Clear browser cache** - Remove stored login data
- **Check URL** - Ensure using correct login address
- **Password reset** - Use "Lost Password" link
- **Browser compatibility** - Try different browser
- **Contact administrator** - If all else fails

#### **Content Not Appearing:**
- **Check publication status** - Ensure content is published, not draft
- **Review user permissions** - Verify access to edit content
- **Clear caching** - Refresh cached content
- **Check theme compatibility** - Some themes may not display all content types
- **Review custom post types** - Ensure proper configuration

#### **Performance Issues:**
- **Disable plugins** - Temporarily deactivate to identify problems
- **Check theme** - Switch to default theme to test
- **Database optimization** - Clean up unnecessary data
- **Hosting resources** - Verify adequate server resources
- **Image optimization** - Compress large images

#### **Security Concerns:**
- **Change passwords** - Update all user passwords immediately
- **Scan for malware** - Use security plugins to check for infections
- **Review user accounts** - Look for unauthorized access
- **Check plugin vulnerabilities** - Update or remove problematic plugins
- **Contact hosting provider** - Report security incidents

### **Accessibility Guidelines**

#### **Content Accessibility:**
- **Alt text for images** - Describe images for screen readers
- **Proper heading structure** - Logical navigation for assistive technology
- **Color contrast** - Ensure text is readable for all users
- **Descriptive link text** - Avoid "click here" or "read more"
- **Keyboard navigation** - Ensure site works without mouse

#### **Media Accessibility:**
- **Video captions** - Provide text alternatives for audio content
- **Audio transcripts** - Text versions of audio content
- **Image descriptions** - Detailed alt text for complex images
- **File format alternatives** - Provide multiple formats when possible
- **Clear navigation** - Consistent and predictable site structure

---

## **Conclusion**

This comprehensive guide provides the foundation for effective WordPress administration of the CEIU website. Regular practice with these procedures and adherence to best practices will ensure smooth website operation and optimal user experience.

### **Quick Reference:**
- **Daily**: Monitor comments, check for urgent updates
- **Weekly**: Update plugins, review analytics, moderate content
- **Monthly**: Full backup, security scan, performance review
- **Quarterly**: Major updates, content audit, strategy review

### **Support Resources:**
- **WordPress Documentation**: wordpress.org/support
- **Plugin Support**: Check individual plugin documentation
- **Theme Support**: Contact theme developer for theme-specific issues
- **Hosting Support**: Contact hosting provider for server-related issues

### **Emergency Procedures:**
- **Site down**: Check hosting status, contact provider
- **Security breach**: Change all passwords, scan for malware, contact security expert
- **Data loss**: Restore from backup, contact hosting provider
- **Plugin conflicts**: Deactivate plugins, identify problematic plugin

---

*CEIU WordPress Admin Guide - Complete Documentation*  
*Generated for Website Team | Last Updated: January 2025* 