// Landing page logic and main site initialization
document.addEventListener('DOMContentLoaded', () => {
  const landingPage = document.getElementById('landing-page');
  const mainSite = document.getElementById('main-site');
  const showLogin = document.getElementById('showLogin');
  const showSignup = document.getElementById('showSignup');
  const loginFormDiv = document.getElementById('loginForm');
  const signupFormDiv = document.getElementById('signupForm');
  const enterSiteBtn = document.getElementById('enterSite');

  // Initial state: show landing page, hide main site
  if (landingPage) landingPage.style.display = 'flex';
  if (mainSite) mainSite.style.display = 'none';

  if (showLogin) showLogin.onclick = () => {
    loginFormDiv.style.display = 'block';
    signupFormDiv.style.display = 'none';
  };
  if (showSignup) showSignup.onclick = () => {
    signupFormDiv.style.display = 'block';
    loginFormDiv.style.display = 'none';
  };

  // Login form submission on landing page
  const landingLoginForm = document.getElementById('landing-login-form');
  const landingLoginMsg = document.getElementById('landing-login-message');
  if (landingLoginForm) {
    landingLoginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('landing-login-email').value.trim();
      const password = document.getElementById('landing-login-password').value.trim();
      if (!email || !password) {
        landingLoginMsg.textContent = 'Please enter both email and password.';
        landingLoginMsg.className = 'error';
        return;
      }
      landingLoginMsg.textContent = 'Login successful!';
      landingLoginMsg.className = 'success';
      landingLoginForm.reset();
      setTimeout(() => { landingLoginMsg.textContent = ''; }, 1200);
    });
  }

  // Signup form submission on landing page
  const landingSignupForm = document.getElementById('landing-signup-form');
  const landingSignupMsg = document.getElementById('landing-signup-message');
  if (landingSignupForm) {
    landingSignupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('landing-signup-name').value.trim();
      const email = document.getElementById('landing-signup-email').value.trim();
      const password = document.getElementById('landing-signup-password').value.trim();
      if (!name || !email || !password) {
        landingSignupMsg.textContent = 'Please fill in all fields.';
        landingSignupMsg.className = 'error';
        return;
      }
      landingSignupMsg.textContent = 'Signup successful!';
      landingSignupMsg.className = 'success';
      landingSignupForm.reset();
      setTimeout(() => { landingSignupMsg.textContent = ''; }, 1200);
    });
  }

  // Enter site button
  if (enterSiteBtn) enterSiteBtn.onclick = () => {
    landingPage.style.display = 'none';
    mainSite.style.display = 'block';
    window.scrollTo(0, 0);
  };

  // Sample event data with images (use placeholder images or your own)
  const events = [
    {
      id: 1,
      title: "Tech Conference 2025",
      date: "2025-08-10",
      description: "A gathering of tech enthusiasts, startups, and industry leaders to discuss the latest trends in technology.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Art & Culture Fest",
      date: "2025-09-05",
      description: "Experience a vibrant celebration of art, music, and culture from around the world.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Marathon 2025",
      date: "2025-10-15",
      description: "Join the annual city marathon and run for a cause!",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      title: "Food Carnival",
      date: "2025-11-20",
      description: "Taste delicacies from top chefs and local vendors at our annual food carnival.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
    }
  ];

  // Render events to the event list with images
  function renderEvents() {
    const eventList = document.getElementById('event-list');
    if (!eventList) return;
    eventList.innerHTML = '';
    events.forEach(event => {
      const card = document.createElement('div');
      card.className = 'event-card';
      card.innerHTML = `
        <img src="${event.image}" alt="${event.title}" class="event-image" />
        <div class="event-title">${event.title}</div>
        <div class="event-date">${new Date(event.date).toLocaleDateString()}</div>
        <div class="event-desc">${event.description}</div>
      `;
      eventList.appendChild(card);
    });
  }

  // Populate event dropdown in registration form (if present)
  function populateEventDropdown() {
    const select = document.getElementById('event-select');
    if (!select) return;
    select.innerHTML = '<option value="">-- Select an Event --</option>';
    events.forEach(event => {
      const option = document.createElement('option');
      option.value = event.id;
      option.textContent = event.title;
      select.appendChild(option);
    });
  }

  // Handle registration form submission (if present)
  function handleRegistrationForm() {
    const form = document.getElementById('registration-form');
    const messageDiv = document.getElementById('registration-message');
    if (!form) return;
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const eventId = document.getElementById('event-select').value;
      if (!name || !email || !eventId) {
        messageDiv.textContent = 'Please fill in all fields.';
        messageDiv.style.color = '#d32f2f';
        return;
      }
      // Simulate registration success
      const eventName = events.find(ev => ev.id == eventId)?.title || '';
      messageDiv.textContent = `Thank you, ${name}! You have registered for "${eventName}".`;
      messageDiv.style.color = '#2d3e50';
      form.reset();
    });
  }

  // Handle contact form submission
  function handleContactForm() {
    const contactForm = document.getElementById('contact-form');
    const statusDiv = document.getElementById('contact-message-status');
    if (!contactForm) return;
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const message = document.getElementById('contact-message').value.trim();
      if (!name || !email || !message) {
        statusDiv.textContent = 'Please fill in all fields.';
        statusDiv.style.color = '#d32f2f';
        return;
      }
      statusDiv.textContent = `Thank you, ${name}! Your message has been sent.`;
      statusDiv.style.color = '#2d3e50';
      contactForm.reset();
    });
  }

  // Initialize all functions that depend on DOMContentLoaded
  renderEvents();
  populateEventDropdown();
  handleRegistrationForm();
  handleContactForm();
});
