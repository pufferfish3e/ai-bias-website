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

**Keyboard Shortcuts**

Keyboard shortcuts were an amazing feature to incorporate within my website. They helped significantly with the user experience significantly as it is often implemented in other websites. Moreover, its simplistic logic led to its wide adoption. To create a keyboard shortcut, I used the `event.key` property and detected when it was pressed. If it is pressed, it will focus on the desired element.


**Typewriter Effect Animation**

The typewriter effect produces a "typing" animation with javascript. A variable updates every few miliseconds using the `setInterval()` function and updates the text within the variable while updating the screen. This function has got extended logic to deal with special characters due to the complexity of having to handle not just plain text but also HTML tags. After the animation is completed, a blinking bar acting as the typing bar is revealed to produce a "typewriter" effect.

**Scroll-Based Animations**

There are two types of scroll-based animations, Firstly, the fade-in animation and the appear animation. Both animations have a very similar method of implementation. If the element is within the viewport, a `.visible` or a `.show` class is added dynamically using javascript. The fade-in and and transformation will then be handled by the css classes.

**Animated Statistics**

For animated statistics, for every card, a numerical variable will keep being incremented until it reaches its target value. The target values are not hardcoded but rather defined using the `data-target` attribute. This keeps the function modular, enabling it to be reused for 4 cards.

**Interactive Animations**

The interactive portal animation was one of the hardest functions to implement. The user would scroll all the way down to the page until there were no elements within the viewport. After which, a tiny circle which is user-controlled will slowly expand to occupy the full viewport width and height, with the animation acting as a section transition.
For the interactive portal animation, the implementation might look complex but in reality, it is quite simple. A div with the id `detectme` is positioned at the bottom of the page, with an extra 100vh space above it to act as extra scroll space for all the elements to be scrolled out of. Then, the classes of the elements are toggled from `.hidden` to `.transitioning`, changing the state of the circle from a hidden, immutable size into a dynamic, scroll-controlled shape of which its radius would increase based on the scroll progress of the user. Once the user has scrolled fully, Some text would animate in creating a sleek animation that is user-controlled via scroll.

**Form Validation**

There were 2 types of form validation:

1. (Main) Login / Signup form


    This form validated user input as follows:
    - The user's username must not be empty and can only contain letters a-z, A-Z and 0-9.
    - The length of the password should be no shorter than 8 characters.


    If the user did not meet the requirements, a red line would show that the user has not fulfiled the requirements of the form and hence prevent the form to be submitted.

2. Post creation form validation

    This form validates user input as follows:
    - Post content cannot be more than 500 characters.
    - All required fields have to be filled in.
    - Image file size must not be over 5MB.

**Authentication**

There are a few authentication functions.

Authentication in this project uses localstorage to store usernames and their passwords. Hence there is no server-side verification.
Authentication is simple, when the user signs up, localstorage creates a JSON object with a key of username and password with their respective values. When the user logs in, localstorage checks through all instances of established usernames and checks if the username exists, or the username and password to match before setting the state of the user to be logged in. Authentication also involves the use of success modals upon successful login/signup, and also uses javascript alerts for invalid form submission.

**Dynamic Post Rendering**

Within this project, I wouldn't say that the post is dynamically rendered. However, I decided to implement the dynamic rendering of content onto the placeholder posts. Creating individual posts dynamically would have been extremely more tedious, and for this project that is not needed. However, content is fetched from an internal variable called data, an array with 5 objects corresponding to the 5 posts. Content is rendered onto the page by matching the respective id of the element where content is supposed to be rendered to the content itself using the `document.getElementById` method.

### 🔧 Utility Functions

**Navbar**

The navbar used a little bit of javascript to include it's toggle functionality, although most of the toggle functionality already worked with bootstrap's classes. In order to move the navbar to the side, I had to add additional logic just to toggle a class from showing.

**Charts**

The chart within this project used ApexCharts for data visualisation. 

# 4. Implementation

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

#### 📋 `forum.html` - Advanced Forum System

**Features Implemented:**

-   **Responsive Toggle Layout**:
    -   Mobile: Inline create post form (scroll to bottom)
    -   Desktop/Tablet: Slide-in sidebar triggered by bottom-left button to open create post form
-   **Dynamic Post Rendering**: 5 posts with images, tags etc.

#### 🔐 `login.html` & `signup.html` - Authentication System

**Features Implemented:**

-   **Real-Time Validation**: Username and password validation with visual feedback
-   **LocalStorage Integration**: Persistent user sessions across page reloads
-   **Security Features**: Password strength validation and error handling
-   **Bootstrap Modals**: Success/error feedback with glassmorphism styling

#### � `info.html` - Educational Content

**Features Implemented:**

-   **Hero Section**: Office background with animated text overlays
-   **Data Visualization**: ApexCharts integration for Singapore AI statistics
-   **Accordion Interface**: Expandable content sections with glassmorphism
-   **Portal Animation**: Page transition effects with expanding circles

---

## Additional Sources Used

- https://codehim.com/animation-effects/fade-in-on-scroll-css-javascript/
- https://bootstrapbrain.com/component/bootstrap-doughnut-chart-card-minimal-example/
- https://www.gradientmagic.com/collection/darkbg
- https://bootstrapexamples.com/@anonymous/marquee-animation
- https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage
- https://stackoverflow.com/questions/18042133/check-if-input-is-number-or-letter-javascript

## 📞 Contact & Support

**Developer**: Kendrick Slamat
**Course**: Frontend Web Development, CA2  
**Institution**: Singapore Polytechnic  
**Academic Year**: 2025

---
