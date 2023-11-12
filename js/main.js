// navbar
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("stickyNavbar");
  var topNav = document.getElementById("topNav");

  if (window.scrollY >= 1) {
    navbar.classList.remove("top-[130px]");
    navbar.classList.add("top-0");
    topNav.classList.add("hidden");
    topNav.classList.remove("block");
  } else {
    navbar.classList.remove("top-0");
    navbar.classList.add("top-[130px]");
    topNav.classList.add("block");
    topNav.classList.remove("hidden");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
  const mobileMenu = document.getElementById('navbar-sticky');
  // const menuLinks = document.querySelectorAll('#navbar-sticky a');

  mobileMenuButton.addEventListener('click', function () {
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
    mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden', isExpanded);
  });
});

// Tabs
document.addEventListener("DOMContentLoaded", function () {
  // Get all tab buttons and tab content elements
  const tabButtons = document.querySelectorAll('[data-tabs-target]');
  const tabContents = document.querySelectorAll('[role="tabpanel"]');

  // Hide all tab contents except for the default tab content
  tabContents.forEach((content) => {
    content.classList.add('hidden');
  });

  tabButtons.forEach((button) => {
    button.classList.add('border-transparent');
  });

  // Show the default tab content and set it as active
  if (tabButtons.length > 0) {
    const defaultTab = tabButtons[0];
    defaultTab.classList.remove('border-transparent');
    defaultTab.classList.add('border-blue-800');
    defaultTab.classList.add('text-blue-800');

    const defaultContent = document.querySelector(`#${defaultTab.getAttribute('data-tabs-target')}`);
    if (defaultContent) {
      defaultContent.classList.remove('hidden');
    }
  }


  // Add click event listeners to tab buttons
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Hide all tab contents
      tabContents.forEach((content) => {
        content.classList.add('hidden');
      });

      // Reset styles for all buttons
      tabButtons.forEach((btn) => {
        btn.classList.add('border-transparent');
        btn.classList.remove('border-blue-800');
        btn.classList.remove('text-blue-800');
      });

      // Show the clicked tab content
      const targetId = `#${button.getAttribute('data-tabs-target')}`;
      const targetContent = document.querySelector(targetId);
      if (targetContent) {
        button.classList.remove('border-transparent');
        button.classList.add('border-blue-800');
        button.classList.add('text-blue-800');
        targetContent.classList.remove('hidden');
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownLink = document.getElementById("dropdownLink");
  const dropdownNavbar = document.getElementById("dropdownNavbar");

  dropdownLink.addEventListener("mouseenter", function () {
    toggleDropdown(true);
  });

  dropdownLink.addEventListener("mouseleave", function () {
    toggleDropdown(false);
  });

  dropdownNavbar.addEventListener("mouseenter", function () {
    toggleDropdown(true);
  });

  dropdownNavbar.addEventListener("mouseleave", function () {
    toggleDropdown(false);
  });

  function toggleDropdown(isHovered) {
    if (isHovered) {
      dropdownNavbar.classList.remove("hidden");
    } else {
      dropdownNavbar.classList.add("hidden");
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const sendMail = document.getElementById("sendMail");

  sendMail.addEventListener("click", function () {
    sendEmail();
  });

  function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const mailtoLink = `mailto:devshuaib@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name} Email: ${email} Subject: ${subject} Message: ${message}`
    )}`;

    window.location.href = mailtoLink;
    // Reset input fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  }
});

