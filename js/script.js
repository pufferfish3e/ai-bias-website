const data = [{
    title: "Facial Recognition Wrongly Arrests Innocent Man",
    content: "A Detroit man was arrested after a facial recognition system misidentified him — the third known case of its kind. Experts point out that these systems have higher error rates for Black individuals, leading to devastating real-world consequences. Urgent policy reforms and transparency in law enforcement AI tools are being demanded.",
    category1: "AI Bias News",
    category2: "Example",
    rating: 9,
    bg: "bg-danger",
    author: "Aisha",
    difficulty: "Intermediate",
}, {
    title: "GPT-4 Reinforces Gender Stereotypes in Job Ads",
    content: "A test using GPT-4 to write job ads revealed subtle gender bias: prompts with male names led to descriptions like “ambitious leader,” while female names were linked to “supportive team player.” These patterns are learned from biased training data, and while subtle, they impact hiring at scale.",
    category1: "AI Bias News",
    category2: "Example",
    rating: 8,
    bg: "bg-danger",
    author: "Ravi",
    difficulty: "Expert",
}, {
    title: "AI Chatbots Exhibit Racial Bias in Responses",
    content: "A study found that AI chatbots, including ChatGPT, exhibited racial bias in their responses. When asked about sensitive topics, the bots provided different answers based on the perceived race of the user. This highlights the need for more equitable AI training practices.",
    category1: "AI Bias News",
    category2: "Example",
    rating: 7,
    bg: "bg-warning",
    author: "Jordan",
    difficulty: "Intermediate",
}, {
    title: "How to Check if your AI prompt encourages bias",
    content: "To ensure your AI prompts do not encourage bias, consider the following steps: 1) Use neutral language that does not imply stereotypes; 2) Avoid using demographic identifiers unless necessary; 3) Test prompts with diverse datasets to identify potential biases; 4) Regularly review and update prompts based on feedback and new findings.",
    category1: "General",
    category2: "Tip",
    rating: 3,
    bg: "bg-success",
    author: "Alex",
    difficulty: "Beginner",
}, {
    title: "Solving AI Bias Starts with Data Collection",
    content: "Before jumping into bias mitigation methods, make sure your dataset actually reflects the people it affects. If your AI serves a global audience but was trained on U.S.-centric data, you’re already biased. Collecting ethical, representative data is the first real solution to systemic AI unfairness.",
    category1: "Technology",
    category2: "Solution",
    rating: 4,
    bg: "bg-success",
    author: "Arjun",
    difficulty: "Expert",
}]

function renderPosts() {
    for (let i = 0; i < data.length; i++) {
        const currentPostTitle = document.getElementById(`post-title-${i + 1}`);
        const currentPostUrgency = document.getElementById(`post-urgency-${i + 1}`);
        const currentPostContent = document.getElementById(`post-content-${i + 1}`);
        const currentPostCategory1 = document.getElementById(`post-category-${i + 1}-1`);
        const currentPostCategory2 = document.getElementById(`post-category-${i + 1}-2`);
        const currentPostAuthor = document.getElementById(`post-author-${i + 1}`);
        if (currentPostTitle) {
            currentPostTitle.textContent = data[i].title;
        }
        if (currentPostUrgency) {
            currentPostUrgency.textContent = `${data[i].rating}/10`;
            currentPostUrgency.classList.add(data[i].bg);
        }
        if (currentPostContent) {
            currentPostContent.textContent = data[i].content;
        }
        if (currentPostCategory1) {
            currentPostCategory1.textContent = data[i].category1;
        }
        if (currentPostCategory2) {
            currentPostCategory2.textContent = data[i].category2;
        }
        if (currentPostAuthor) {
            currentPostAuthor.textContent = data[i].author;
        }
    }
}

function detectKeyboardShortcut(event) {
    if (event.key === "/") {
        event.preventDefault();
        const searchInput = document.getElementById("search-input");
        if (searchInput) {
            searchInput.focus();
        }
    }
}

function setupSidebarToggle() {
    const toggleBtn = document.getElementById("sidebarToggle");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.querySelector(".main-content");
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener("click", () => {
            sidebar.classList.toggle("show");
            if (mainContent) {
                mainContent.classList.toggle("sidebar-open");
            }
        });
    }
}

function hideSidebar(event) {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("sidebarToggle");
    const mainContent = document.querySelector(".main-content");
    const clickedInsideSidebar = sidebar.contains(event.target);
    const clickedToggleBtn = toggleBtn.contains(event.target);
    if (!clickedInsideSidebar && !clickedToggleBtn) {
        sidebar.classList.remove("show");
        if (mainContent) {
            mainContent.classList.remove("sidebar-open");
        }
    }
}

function validateInputs() {
    const usernameInputLogin = document.getElementById("loginUsername");
    const passwordInputLogin = document.getElementById("loginPassword");
    const usernameInputSignup = document.getElementById("signUpUsername");
    const passwordInputSignup = document.getElementById("signUpPassword");
    const usernameInput = usernameInputLogin || usernameInputSignup;
    const passwordInput = passwordInputLogin || passwordInputSignup;
    const usernameElement = document.querySelector(".username");
    const passwordElement = document.querySelector(".password");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    if (!usernameInput || !passwordInput) return;
    if (document.activeElement === usernameElement) {
        validateUsername(usernameInput, usernameElement, usernameError);
    } else if (document.activeElement === passwordElement) {
        validatePassword(passwordInput, passwordElement, passwordError);
    }
}

function validateUsername(inputElement, displayElement, errorElement) {
    // Validate with regex according to stack overflow
    const regex = /^[a-zA-Z0-9]+$/;
    let isValid = true;
    let error = "";

    if (!inputElement.value.match(regex)) {
        isValid = false;
        error = "a-z, A-Z and 0-9 only.";
    }

    if (!isValid) {
        displayElement.style.borderBottom = "1px solid red";
        if (errorElement) {
            errorElement.style.display = "block";
            errorElement.textContent = error;
        }
    } else {
        displayElement.style.borderBottom = "1px solid green";
        if (errorElement) {
            errorElement.style.display = "none";
        }
    }

    return isValid;
}

function validatePassword(inputElement, displayElement, errorElement) {
    let isValid = true;
    let error = "";

    if (inputElement.value.length < 8) {
        isValid = false;
        error = "Your password must be longer than 8 characters.";
    }

    if (!isValid) {
        displayElement.style.borderBottom = "1px solid red";
        if (errorElement) {
            errorElement.style.display = "block";
            errorElement.textContent = error;
        }
    } else {
        displayElement.style.borderBottom = "1px solid green";
        if (errorElement) {
            errorElement.style.display = "none";
        }
    }

    return isValid;
}

// Function to validate entire form before submission
function validateForm() {
    const usernameInputLogin = document.getElementById("loginUsername");
    const passwordInputLogin = document.getElementById("loginPassword");
    const usernameInputSignup = document.getElementById("signUpUsername");
    const passwordInputSignup = document.getElementById("signUpPassword");

    // Determine which inputs are available
    const usernameInput = usernameInputLogin || usernameInputSignup;
    const passwordInput = passwordInputLogin || passwordInputSignup;
    const usernameElement = document.querySelector(".username");
    const passwordElement = document.querySelector(".password");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    if (!usernameInput || !passwordInput) return true; // No form to validate

    // Validate both fields
    const usernameValid = validateUsername(
        usernameInput,
        usernameElement,
        usernameError
    );
    const passwordValid = validatePassword(
        passwordInput,
        passwordElement,
        passwordError
    );

    return usernameValid && passwordValid;
}

// Section for animations / Transitions.

// extended logic because the typewriter effect needs to handle HTML tags
function typeWriterEffect() {
    const textElement = document.getElementById("typewriter-text");
    if (!textElement) return;
    const originalHTML = textElement.innerHTML;
    textElement.innerHTML = "";
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = originalHTML;
    const textContent = tempDiv.innerHTML;
    const htmlParts = textContent.split(/(<[^>]*>)/);
    let currentIndex = 0;
    let displayText = "";
    function type() {
        if (currentIndex < htmlParts.length) {
            const part = htmlParts[currentIndex];
            if (part.startsWith("<")) {
                displayText += part;
                textElement.innerHTML = displayText;
                currentIndex++;
                setTimeout(type, 0);
            } else {
                const text = part;
                let charIndex = 0;
                function typeText() {
                    if (charIndex < text.length) {
                        displayText += text.charAt(charIndex);
                        textElement.innerHTML = displayText;
                        charIndex++;
                        setTimeout(typeText, 60); // Customize Typing Speed.
                    } else {
                        currentIndex++;
                        setTimeout(type, 0);
                    }
                }

                if (text.length > 0) {
                    typeText();
                } else {
                    currentIndex++;
                    setTimeout(type, 0);
                }
            }
        } else {
            addBlinkingCursor();
        }
    }

    function addBlinkingCursor() {
        const cursor = document.createElement("span");
        cursor.className = "cursor";
        cursor.textContent = "|";
        textElement.appendChild(cursor);

        let visible = true;
        setInterval(() => {
            cursor.style.visibility = visible ? "hidden" : "visible";
            visible = !visible;
        }, 500);
    }

    type();
}

function fadeInOnScroll() {
    const fadeElements = document.querySelectorAll(".fade-in");
    const windowHeight = window.innerHeight;

    fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const numberOfPixelsVisible = 100;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < windowHeight - numberOfPixelsVisible) {
            element.classList.add("visible");
        } else if (elementBottom > numberOfPixelsVisible) {
            element.classList.remove("visible");
        }
    });
}

function applyClassForAccordion() {
    document.querySelectorAll(".accordion-collapse").forEach((accordion) => {
        accordion.addEventListener("show.bs.collapse", () => {
            const button =
                accordion.previousElementSibling.querySelector(
                    ".accordion-button"
                );
            button.classList.add("liquidglass");
            button.classList.remove("btn-outline-primary");
        });
        accordion.addEventListener("hide.bs.collapse", () => {
            const button =
                accordion.previousElementSibling.querySelector(
                    ".accordion-button"
                );
            button.classList.remove("liquidglass");
        });
    });
    document.querySelectorAll(".accordion-button").forEach((button) => {
        button.classList.add("liquidglass");
        button.addEventListener("click", () => {
            setTimeout(() => {
                button.classList.add("liquidglass");
            }, 10);
        });
        button.addEventListener("focus", () => {
            button.classList.add("liquidglass");
        });
    });
}

function appear() {
    const windowHeight = window.innerHeight;
    document.querySelectorAll(".appear").forEach((element) => {
        element.classList.add("view");
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const numberOfPixelsVisible = 100;
        if (elementTop < windowHeight - numberOfPixelsVisible) {
            element.classList.add("view");
        } else if (elementBottom > numberOfPixelsVisible) {
            element.classList.remove("view");
        }
    });
}

// https://bootstrapbrain.com/component/bootstrap-doughnut-chart-card-minimal-example/

function initDonutChart() {
    const chartOptions = {
        series: [26.1, 22.8, 22.6, 19, 9.5],
        labels: [
            "Gender",
            "Racial/Ethnic/Religious",
            "Geographic/National",
            "Socio-Economic",
            "Other",
        ],
        chart: {
            type: "donut",
            sparkline: {
                enabled: true,
            },
        },
        colors: [
            "var(--bs-primary)",
            "var(--bs-success)",
            "var(--bs-danger)",
            "var(--bs-warning)",
            "var(--bs-info)",
        ],
        tooltip: {
            y: {
                formatter(value) {
                    return value + "%";
                },
            },
        },
    };

    const chartElement = document.querySelector("#bsb-chart-7");
    if (chartElement) {
        new ApexCharts(chartElement, chartOptions).render();
    }
}

function animateIntoNumber() {
    const numberElements = document.querySelectorAll(".animated-number");
    const windowHeight = window.innerHeight;

    numberElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const numberOfPixelsVisible = 100; // Same as fade-in
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < windowHeight - numberOfPixelsVisible) {
            element.classList.add("visible");

            if (!element.hasAttribute("data-animated")) {
                element.setAttribute("data-animated", "true");
                const targetNumber = parseInt(
                    element.getAttribute("data-target"),
                    10
                );
                const suffix = element.getAttribute("data-suffix") || "";
                // if (isNaN(targetNumber) || targetNumber <= 0) {
                //     console.warn(
                //         "Invalid data-target for animated number:",
                //         element
                //     );
                //     return;
                // }

                let currentNumber = 0;
                const increment = Math.max(1, Math.ceil(targetNumber / 60));
                const stepTime = 30;

                const updateNumber = () => {
                    if (currentNumber < targetNumber) {
                        currentNumber += increment;
                        if (currentNumber > targetNumber) {
                            currentNumber = targetNumber;
                        }
                        element.textContent = currentNumber + suffix;
                        setTimeout(updateNumber, stepTime);
                    } else {
                        element.textContent = targetNumber + suffix;
                    }
                };

                updateNumber();
            }
        } else if (elementBottom > numberOfPixelsVisible) {
            element.classList.remove("visible");
            element.removeAttribute("data-animated");
            element.textContent = "0";
        }
    });
}

function portalTransition() {
    const portalTriggerSection = document.getElementById("detectme");
    const portalOverlay = document.getElementById("portal-overlay");
    const portalCircle = document.getElementById("portal-circle");
    const portalContent = document.getElementById("portal-content");

    if (
        !portalTriggerSection ||
        !portalOverlay ||
        !portalCircle ||
        !portalContent
    ) {
        return;
    }

    const sectionRect = portalTriggerSection.getBoundingClientRect();
    const scrollY = window.scrollY;

    // Simple check: if detectme is in view
    if (sectionRect.top < window.innerHeight && sectionRect.bottom > 0) {
        portalOverlay.classList.remove("hidden");
        portalOverlay.classList.add("transitioning");

        // Simple progress based on how much of detectme is visible
        const progress = Math.max(
            0,
            Math.min(
                1,
                (window.innerHeight - sectionRect.top) / window.innerHeight
            )
        );
        const maxRadius =
            Math.sqrt(
                Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)
            ) / 2;
        const currentRadius = 5 + progress * maxRadius;

        portalCircle.style.width = `${currentRadius * 2}px`;
        portalCircle.style.height = `${currentRadius * 2}px`;

        if (currentRadius >= maxRadius * 0.9) {
            portalOverlay.classList.add("complete");
            portalOverlay.classList.remove("transitioning");
            portalContent.classList.add("show");
        } else {
            portalContent.classList.remove("show");
        }
    } else {
        portalOverlay.classList.add("hidden");
        portalOverlay.classList.remove("transitioning", "complete");
        portalContent.classList.remove("show");
        portalCircle.style.width = "10px";
        portalCircle.style.height = "10px";
    }
}

// Forum form functionality
function initForumForm() {
    // Range slider for urgency level
    const urgencySlider = document.getElementById("urgency-level");
    const urgencyValue = document.getElementById("urgency-value");
    if (urgencySlider) {
        urgencySlider.addEventListener("input", function () {
            urgencyValue.textContent = this.value;
        });
    }
}

// event listeners for events
renderPosts();
document.addEventListener("keydown", detectKeyboardShortcut);
window.addEventListener("DOMContentLoaded", setupSidebarToggle);
document.addEventListener("keyup", validateInputs);
window.addEventListener("DOMContentLoaded", typeWriterEffect);
window.addEventListener("DOMContentLoaded", fadeInOnScroll);
window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("DOMContentLoaded", appear);
window.addEventListener("scroll", appear);
window.addEventListener("DOMContentLoaded", animateIntoNumber);
window.addEventListener("scroll", animateIntoNumber);
window.addEventListener("DOMContentLoaded", portalTransition);
window.addEventListener("scroll", portalTransition);
window.addEventListener("resize", portalTransition);
window.addEventListener("click", hideSidebar);
document.addEventListener("DOMContentLoaded", applyClassForAccordion);
document.addEventListener("DOMContentLoaded", initDonutChart);
document.addEventListener("DOMContentLoaded", initForumForm);
