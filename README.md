# FED CA2: Unfair By Design

📁 **Repository**: [GitHub Repository](https://github.com/pufferfish3e/ai-bias-website)

## 🏆 Project Overview

The theme **Unfair by Design** sheds light on the unspoken shortcomings of artificial intelligence models-how they are trained, how easy it is to invoke biasness into the model, and how gullible models can be-based on data that favours one side and not the other. The website will highlight important steps users can take to prevent biasness within model training and identify biased prompts from a model.

This project addresses the critical issue of AI bias through an interactive web experience that educates users about real AI bias cases in Singapore while providing a platform for community discussion and showcasing Singapore's regulatory approach to AI governance.

## ✅ Validation Checks

index.html validated by [w3](https://validator.w3.org/) ✅<br>
forum.html validated by [w3](https://validator.w3.org/) ✅<br>
info.html validated by [w3](https://validator.w3.org/) ✅<br>
login.html validated by [w3](https://validator.w3.org/) ✅<br>
signup.html validated by [w3](https://validator.w3.org/) ✅<br>
style.css validated by [w3 CSS](https://jigsaw.w3.org/css-validator/validator) ✅<br>
script.js validated by [jsvalidator](https://jsvalidator.com/) ✅

# 1. Design Thinking and Process

The design follows a minimalist design which incorporates **glassmorphism** and smooth, flowy animations to enhance the user experience whilst not making it too flashy and unusable.

### Visuals

I was thinking of incorporating a minimalistic but still visually appealing website which uses components appropriately, hence choosing a black and white color combo. For fonts and typography, I went for something more readable but also pleasing to look at.

-   **Color Palette**:
    -   Primary: Deep blacks with gradient overlays
    -   Accent: Light/transparent glass effects with rgba transparency, as well as Darker versions.
-   **Typography**:
    -   Fonts used: PP Mori (Custom-loaded modern sans-serif for body text) using `@font-face`
-   **Effects**:
    -   Liquid glassmorphism with `backdrop-filter: blur(10px)`
    -   Smooth CSS transitions and keyframe animations
    -   Parallax scrolling and scroll-triggered animations

### User Experience Principles

When designing for user experience, I tried my best to keep the design minimal but functional, incorporating keyboard shortcuts so the user can search for stuff without leaving the keyboard. In layout terms, I have also used bootstraps responsive classes and css media queries together to refine layout that would suit larger screens but not smaller screens.

1. **Responsive Design**:
    - Breakpoints: 768px (tablet), 1024px (desktop)
    - Flexible layouts with CSS Grid and Flexbox, as well as incorporating bootstraps container classes and responsive breakpoints.
    - Touch-optimized interactions for mobile and tablet screens.

2. **Accessibility Implementation**:
    - Semantic HTML5 structure with proper heading hierarchy
    - Keyboard navigation with focus management

3. **User Experience**:
    - UI/UX incorporated properly, with appropriate whitespace to prevent overloading the user with information.
    - Buttons used appropriately and not just for show.
    - Seamless experience flow with modals to show authentication status of the user.

# 2. Bootstrap and CSS

### Bootstrap 5.3.7 Integration 
-   **Bootstrap Components**: Appropriate use of Bootstrap components such as:
    - Modal
    - Accordion
    - Card
    - Marquee (css native)
    - Button
    - Badge
    - Form
-   **Bootstrap Icons**: Integration of Bootstrap icons to show company icons, and some visual icons too.

### CSS Architecture

My css section was mostly used to style css-only animations, such as the scroll-triggered animations, like the fade-in animation and the appear animation which toggles show classes based on their visibility within the viewport. Moreover, much more complex animations such as the portal effect use more javascript. A main bulk of css used is listed here, while the rest would be used for styling and responsiveness.

#### Advanced Animation System

1. **Scroll-Triggered Animations**:
    - fade-in animation (js included)
    - appear animation (js included)

2. **Background Animations**:

    - Animated starfield with rotating patterns
    - Falling line animations with droplet effects
    - Marquee scrolling for image carousels

3. **Interactive Elements**:
    - Hover effects with smooth transitions
    - Toggle animations for forum sidebar
    - Portal transition effects for page navigation

# 3. Functions

## ⚙️ JavaScript Functionality

### Architecture Overview

The javascript used within my project consists of the following sections. Javascript code is functional and modular, with every function organised in this layout:

-   Dynamic content rendering
-   Animation and visual effects
-   Form validation and user interaction
-   Responsive behavior handling
-   DOM and Event Listeners

These make the code easily scalable and more robust. If one of the functions shows an error, it can easily be identified and be isolated for seperate tests and bug fixes. Hence it will not affect the rest of the code.

### Core Functions Overview

#### 🏠 Homepage Features (`index.html`)

**Typewriter Effect Animation**

The typewriter effect produces a "typing" animation with javascript. A variable updates every few miliseconds using the `setInterval()` function and updates the text within the variable while updating the screen. This function has got extended logic to deal with special characters due to the complexity of having to handle not just plain text but also HTML tags. After the animation is completed, a blinking bar acting as the typing bar is revealed to produce a "typewriter" effect.

**Scroll-Based Animations**

There are two types of scroll-based animations, Firstly, the fade-in animation and the appear animation. Both animations have a very similar method of implementation. If the element is within the viewport, a `.visible` or a `.show` class is added dynamically using javascript. The fade-in and and transformation will then be handled by the css classes.

**Animated Statistics**

For animated statistics, for every card, a numerical variable will keep being incremented until it reaches its target value. The target values are not hardcoded but rather defined using the `data-target` attribute. This keeps the function modular, enabling it to be reused for 4 cards.

**Interactive Animations**

The interactive portal animation was one of the hardest functions to implement. The user would scroll all the way down to the page until there were no elements within the viewport. After which, a tiny circle which is user-controlled will slowly expand to occupy the full viewport width and height, with the animation acting as a section transition.
For the interactive portal animation, the implementation might look complex but in reality, it is quite simple. A div with the id `detectme` is positioned at the bottom of the page, with an extra 100vh space above it to act as extra scroll space for all the elements to be scrolled out of. Then, the classes of the elements are toggled from `.hidden` to `.transitioning`, changing the state of the circle from a hidden, immutable size into a dynamic, scroll-controlled shape of which its radius would increase based on the scroll progress of the user. Once the user has scrolled fully, Some text would animate in creating a sleek animation that is user-controlled via scroll.

#### 👤 Authentication System (`login.html`, `signup.html`)

**Form Validation Engine**

There were 2 types of form validation:

1. (Main) Login / Signup form<br>
    This form validated user input as follows:
    - The user's username must not be empty and can only contain letters a-z, A-Z and 0-9.
    - The length of the password should be no shorter than 8 characters.<br>
    If the user did not meet the requirements, a red line would show that the user has not fulfiled the requirements of the form and hence prevent the form to be submitted.

2. Post creation

**LocalStorage Authentication**

```javascript
// Global state management
let isUserLoggedIn = localStorage.getItem("isUserLoggedIn") === "true";
let loggedInUser = localStorage.getItem("loggedInUser");

// Persistent user sessions across page reloads
// Secure credential storage for demo purposes
// Session state synchronization across pages
```

#### 💬 Forum Functionality (`forum.html`)

**Dynamic Post Rendering**

```javascript
function renderPosts() {
    // Renders forum posts from data array
    // Automatic image assignment (post1.jpg - post5.jpg)
    // Responsive layout: flex-row (desktop) vs flex-col (mobile)
    // Category-based styling with Bootstrap badges
    // User authentication integration for posting privileges
}
```

**Forum Data Structure**

```javascript
const data = [
    {
        title: "Facial Recognition Wrongly Arrests Innocent Man",
        content:
            "A Detroit man was arrested after facial recognition misidentified him...",
        category1: "AI Bias News",
        category2: "Example",
        rating: 9,
        bg: "bg-danger",
        author: "Aisha",
        difficulty: "Intermediate",
        image: "assets/images/post1.jpg",
    },
    // Additional posts covering Singapore AI bias cases and solutions
];
```

**Toggle-Based UI Control**

```javascript
function setupCreatePostToggle() {
    // Desktop/tablet toggle button for create post sidebar
    // Smooth slide-in/out animations
    // Full-width post view when sidebar is hidden
    // Responsive behavior management
}

function initForumForm() {
    // Dual form handling: mobile inline + desktop sidebar
    // Image preview functionality with remove option
    // Form validation and submission handling
    // File upload simulation and preview generation
}
```

#### 🎨 Animation and Visual Effects

**Parallax and Scroll Effects**

```javascript
// Smooth scroll behavior implementation
html {
    scroll-behavior: smooth;
}

// Keyboard navigation shortcuts
function detectKeyboardShortcut(event) {
    // '/' key for search focus
    // ESC key for sidebar closing
    // Accessibility-focused keyboard navigation
}
```

**Interactive Background Animations**

-   **Starfield Animation**: Rotating star patterns with CSS keyframes
-   **Falling Lines**: Raindrop-like vertical line animations
-   **Marquee Scrolling**: Horizontal image carousel with pause on hover
-   **Portal Transitions**: Expanding circle effects for page navigation

### 🔧 Utility Functions

#### Navigation and UI Control

```javascript
function setupSidebarToggle() {
    // Collapsible sidebar with smooth transitions
    // Mobile hamburger menu functionality
    // Click-outside-to-close behavior
}

function hideSidebar(event) {
    // Smart sidebar hiding logic
    // Event delegation for efficient handling
    // Preserves accessibility during transitions
}
```

#### Data Visualization (`info.html`)

```javascript
function initDonutChart() {
    // ApexCharts integration for Singapore AI bias statistics
    // Responsive chart sizing
    // Interactive data point hover effects
    // Real data from Singapore AI governance initiatives
}
```

### State Management

-   **LocalStorage Integration**: User preferences, authentication state, forum posts
-   **Global Variables**: Authentication status, user data, form references
-   **Event Handling**: Comprehensive event delegation and cleanup
-   **Responsive Behavior**: Device detection and adaptive functionality

### 🔧 Utility Functions

#### Local Storage Management

-   **User Sessions**: Persistent login state across page reloads
-   **Post Data**: Forum posts stored locally for demonstration
-   **Preferences**: User settings and theme preferences

#### Form Validation

-   **Real-time Validation**: Instant feedback on form inputs
-   **Error Handling**: User-friendly error messages
-   **Success States**: Confirmation feedback for completed actions

#### Responsive Behavior

-   **Device Detection**: Adapts functionality based on screen size
-   **Touch Support**: Enhanced mobile interactions
-   **Keyboard Navigation**: Accessibility-focused navigation support

# 4. Implementation

# 4. Implementation

## 🛠️ Technical Implementation

### Actual File Structure

```
📁 FED-CA2-2526S1/
├── 📄 index.html          # Landing page with typewriter effects and animated backgrounds
├── 📄 forum.html          # Interactive forum with toggle sidebar and dynamic posts
├── 📄 info.html           # Information page with charts and educational content
├── 📄 login.html          # Authentication page with form validation
├── 📄 signup.html         # Registration page with real-time validation
├── 📁 css/
│   └── 📄 style.css       # 2000+ lines of custom styles and animations
├── 📁 js/
│   ├── 📄 script.js       # Main functionality (500+ lines)
│   └── 📄 script.js.backup # Development backup
├── 📁 assets/
│   ├── 📁 fonts/
│   │   ├── 📄 PPMori-Regular.otf      # Primary typography
│   │   └── 📄 Tropical-Asian.ttf     # Display font for branding
│   ├── 📁 icons/
│   │   ├── 📄 chatgpt.svg            # AI-related iconography
│   │   ├── 📄 icon.svg               # Site favicon
│   │   └── 📄 profile.svg            # User interface icons
│   └── 📁 images/
│       ├── 📄 bg.jpg, bg2.jpg        # Background textures
│       ├── 📄 forumheader.jpg        # Forum section headers
│       ├── 📄 marquee-1 to 4.jpg     # Scrolling carousel images
│       ├── 📄 office.jpg             # Info page hero background
│       └── 📄 post1-5.jpg            # Dynamic forum post images
├── 📄 README.md           # Project documentation
└── 📄 todo.md            # Development tracking
```

### Page-Specific Implementation

#### 🏠 `index.html` - Interactive Landing Page

**Features Implemented:**

-   **Animated Hero Section**: Typewriter effect for main headline
-   **Background Animations**:
    -   9 animated falling lines with droplet effects
    -   Rotating starfield background with CSS keyframes
    -   Parallax video background integration
-   **Scroll-Triggered Content**: Fade-in animations using Intersection Observer
-   **Interactive Elements**: Smooth scroll navigation and CTA buttons

**Technical Details:**

```html
<!-- Animated Lines Background -->
<div class="lines">
    <div class="line"></div>
    <!-- x9 with staggered animations -->
</div>

<!-- Hero with Typewriter Effect -->
<h1 id="typewriter-text" class="fs-xl gradient-glass-text">
    You can't spell "AI" without "I".<br />But who's the Real Problem?
</h1>
```

#### 📋 `forum.html` - Advanced Forum System

**Features Implemented:**

-   **Responsive Toggle Layout**:
    -   Mobile: Inline create post form
    -   Desktop/Tablet: Slide-in sidebar triggered by bottom-left button
-   **Dynamic Post Rendering**: 5 AI bias case studies with cycling images
-   **Image Integration**: Automatic assignment of post1.jpg through post5.jpg
-   **Responsive Design**: Flex-row layout for desktop, flex-col for mobile

**Forum Data Structure:**

```javascript
// Real Singapore AI bias examples
const data = [
    {
        title: "Facial Recognition Wrongly Arrests Innocent Man",
        category1: "AI Bias News",
        category2: "Example",
        rating: 9,
        bg: "bg-danger",
        difficulty: "Intermediate",
        image: "assets/images/post1.jpg",
    },
    // 5 total posts covering bias examples and solutions
];
```

#### 🔐 `login.html` & `signup.html` - Authentication System

**Features Implemented:**

-   **Real-Time Validation**: Username and password validation with visual feedback
-   **LocalStorage Integration**: Persistent user sessions across page reloads
-   **Security Features**: Password strength validation and error handling
-   **Bootstrap Modals**: Success/error feedback with glassmorphism styling

**Validation Implementation:**

```javascript
function validateUsername(inputElement, displayElement, errorElement) {
    // Length validation, character restrictions
    // Visual feedback with border colors
    // Real-time error message display
}
```

#### � `info.html` - Educational Content

**Features Implemented:**

-   **Hero Section**: Office background with animated text overlays
-   **Data Visualization**: ApexCharts integration for Singapore AI statistics
-   **Accordion Interface**: Expandable content sections with glassmorphism
-   **Portal Animation**: Page transition effects with expanding circles

### Advanced Features

#### 🎨 Glassmorphism Design System

```css
.liquidglass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    transition: all 0.3s ease;
}
```

#### � Responsive Implementation

-   **Mobile Breakpoint (≤767px)**: Compact layouts, stacked navigation
-   **Tablet Breakpoint (768px-1023px)**: Enhanced spacing, toggle functionality
-   **Desktop Breakpoint (≥1024px)**: Full sidebar, advanced animations

#### ⚡ Performance Optimizations

-   **CSS Animations**: GPU-accelerated transforms and transitions
-   **Font Loading**: Optimized `@font-face` declarations with fallbacks
-   **Image Optimization**: Responsive images with proper aspect ratios
-   **JavaScript Efficiency**: Event delegation and minimal DOM manipulation

### Development Workflow

#### Code Quality Standards

-   **W3C HTML Validation**: All 5 HTML files pass validation ✅
-   **W3C CSS Validation**: style.css passes validation ✅
-   **JavaScript Validation**: script.js validated through JSValidator ✅
-   **Professional Documentation**: Comprehensive commenting throughout codebase

#### Browser Compatibility

-   **Chrome**: Full functionality and animations
-   **Firefox**: Complete compatibility with smooth performance
-   **Safari**: Optimized for WebKit rendering engine
-   **Edge**: Cross-platform consistency maintained

#### Accessibility Implementation

-   **Semantic HTML**: Proper heading hierarchy and landmark elements
-   **ARIA Labels**: Screen reader support for interactive elements
-   **Keyboard Navigation**: Full keyboard accessibility with focus management
-   **Color Contrast**: High contrast ratios meeting WCAG 2.1 guidelines

#### Version Control

-   **Git Integration**: Tracked through GitHub repository
-   **Branching Strategy**: Feature branches with main deployment
-   **Documentation**: Detailed commit messages and comprehensive code comments

#### Testing Approach

-   **Cross-Browser**: Tested on Chrome, Firefox, Safari, Edge
-   **Device Testing**: Mobile, tablet, and desktop viewports
-   **Functionality Testing**: All interactive features verified
-   **Performance Testing**: Load times and responsiveness optimized

# 5. Improvements

## 🚀 Future Enhancements

### Short-term Improvements (Next Sprint)

-   **Backend Integration**: Replace LocalStorage with proper database (MongoDB/PostgreSQL)
-   **Real-time Forum**: WebSocket integration for live post updates and notifications
-   **Enhanced Security**: JWT authentication and password hashing
-   **File Upload System**: Allow users to upload custom images to forum posts
-   **Advanced Search**: Full-text search functionality across forum posts and content
-   **User Avatars**: Profile picture support with image processing

### Medium-term Goals (Next Quarter)

-   **AI Integration**:
    -   Implement bias detection API for analyzing user-submitted content
    -   ChatGPT integration for AI bias education assistant
    -   Sentiment analysis for forum post categorization
-   **Extended User Profiles**:
    -   User reputation system based on post quality
    -   Personal dashboards with activity tracking
    -   Bookmarking and favorites functionality
-   **Advanced Moderation**:
    -   Content reporting and flagging system
    -   Admin panel for community management
    -   Automated content filtering for inappropriate material
-   **Analytics Integration**:
    -   Google Analytics for user behavior tracking
    -   Custom dashboard for engagement metrics
    -   A/B testing framework for UI improvements

### Long-term Vision (Next Year)

-   **Government Partnership**:
    -   Integration with Singapore's AI governance APIs
    -   Real-time bias incident reporting to authorities
    -   Collaboration with MCI and IMDA for policy updates
-   **Educational Platform Expansion**:
    -   Interactive AI bias simulation tools
    -   Certification program for AI ethics awareness
    -   Corporate training modules for businesses
-   **Mobile Application**:
    -   React Native app for iOS and Android
    -   Offline functionality for educational content
    -   Push notifications for forum activity
-   **Multilingual Support**:
    -   English, Mandarin, Malay, Tamil localization
    -   Cultural adaptation for different communities
    -   Right-to-left language support

## 🔧 Technical Debt & Optimizations

### Performance Enhancements Currently Needed

-   **Image Optimization**:
    -   Convert all images to WebP format with fallbacks
    -   Implement lazy loading for forum post images
    -   Add progressive image loading with blur-up effect
-   **Code Splitting**:
    -   Break script.js into modular components
    -   Implement dynamic imports for page-specific functionality
    -   Bundle optimization with webpack or Vite
-   **Caching Strategy**:
    -   Service Worker implementation for offline functionality
    -   Browser cache optimization for static assets
    -   CDN integration for global content delivery

### Accessibility Improvements Identified

-   **Enhanced ARIA Support**:
    -   Complete ARIA landmark implementation
    -   Screen reader optimized forum navigation
    -   Voice control compatibility testing
-   **Keyboard Navigation**:
    -   Full tab order optimization
    -   Skip links for screen reader users
    -   Keyboard shortcuts documentation
-   **Visual Accessibility**:
    -   High contrast mode support
    -   Font size adjustment controls
    -   Motion reduction preferences respect

### Code Quality & Maintainability

-   **JavaScript Modernization**:
    -   ES6+ module system implementation
    -   Async/await pattern adoption throughout
    -   Error handling and logging improvements
-   **CSS Architecture**:
    -   Implement CSS-in-JS or styled-components
    -   Design system with component library
    -   CSS custom properties expansion
-   **Documentation Enhancement**:
    -   Complete JSDoc implementation
    -   Component usage examples
    -   API documentation for future backend integration

## 📈 Lessons Learned & Development Insights

### Technical Discoveries

1. **Glassmorphism Performance**: Backdrop-filter effects require careful optimization for mobile devices
2. **Animation Timing**: Scroll-triggered animations need intersection observer throttling for smooth performance
3. **LocalStorage Limitations**: Client-side storage works for prototyping but requires backend for scalability
4. **CSS Grid vs Flexbox**: Hybrid approach provides best responsive design flexibility
5. **Custom Font Loading**: @font-face optimization critical for perceived performance


## 📞 Contact & Support

**Developer**: Kendrick Slamat
**Course**: Frontend Web Development, CA2  
**Institution**: Singapore Polytechnic  
**Academic Year**: 2025

---
