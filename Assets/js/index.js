

document.addEventListener("DOMContentLoaded", function () {
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // GSAP Animation for Navbar
  gsap.from(".navbar", {
    duration: 1.2,
    y: -100,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".navbar",
      start: "top top", // When navbar reaches the top of the viewport
      toggleActions: "play resume  resume  reset", // Reset on scroll back
    },
  });

  // GSAP Animation for Section Elements
  gsap.from(".profile-img", {
    duration: 1,
    opacity: 0,
    scale: 0.8,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".profile-img",
      start: "top 80%", // Trigger when the element is in the viewport
      toggleActions: "play resume  resume  reset",
    },
  });

  gsap.from(".name", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".name",
      start: "top 80%",
      toggleActions: "play resume  resume  reset",
    },
  });

  gsap.from(".role", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".role",
      start: "top 80%",
      toggleActions: "play resume  resume  reset",
    },
  });

  gsap.from(".description", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".description",
      start: "top 80%",
      toggleActions: "play resume  resume  reset",
    },
  });

  // Animate the "Programmer Day" Section
  ScrollTrigger.create({
    trigger: ".programmer-day",
    start: "top 70%",
    onEnter: () => {
      gsap.from(".main-heading", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".programmer-day",
          start: "top top", // When navbar reaches the top of the viewport
          toggleActions: "play resume  resume  reset", // Reset on scroll back
        },
      });

      gsap.from(".sub-subheading", {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        
        
      });

      gsap.from(".programmer-img", {
        opacity: 0,
        scale: 0.5,
        duration: 5,
        ease: "power3.out",
      });

      gsap.from(".icon", {
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 5,
        ease: "bounce.out",
      });
    },
    toggleActions: "play resume  resume  reset", // Reset animations on scroll back
  });
});
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3, // Show 3 slides at a time
  spaceBetween: 20, // Space between slides in pixels
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
  },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  loop: true, // Enable infinite scrolling
  breakpoints: {
    1024: {
      slidesPerView: 3, // Desktop: 3 slides
    },
    768: {
      slidesPerView: 2, // Tablet: 2 slides
    },
    480: {
      slidesPerView: 1, // Mobile: 1 slide
    },
    360: {
      slidesPerView: 1, // Mobile: 1 slide
    },
    320:{
      slidesPerView: 1, // Mobile: 1 slide
    },
  },
});document.addEventListener("DOMContentLoaded", () => {
  // Scroll-triggered animations for headings and slides
  ScrollTrigger.create({
    trigger: ".projects",
    start: "top 40%", // Adjust trigger point
    onEnter: () => {
      gsap.from(".main-heading1", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out",
      });

      gsap.from(".sub-subheading1", {
        duration: 1,
        delay: 0.3,
        y: 50,
        opacity: 0,
        ease: "power2.out",
      });

      gsap.from(".swiper-slide", {
        duration: 1,
        delay: 0.5,
        opacity: 0,
        y: 50,
        ease: "power2.out",
        stagger: 0.2, // Animates each card one after the other
      });

      gsap.from(".live-demo", {
        duration: 1,
        delay: 1,
        scale: 0.8,
        opacity: 0,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.3,
      });
    },
  });

  // Mouse enter animation for project cards
  document.querySelectorAll(".swiper-slide").forEach((slide) => {
    slide.addEventListener("mouseenter", () => {
      gsap.to(slide, {
        scale: 1.05, // Slight zoom-in effect
       
        duration: 0.3,
        ease: "power1.out",
      });
    });

    slide.addEventListener("mouseleave", () => {
      gsap.to(slide, {
        scale: 1, // Revert to original size
       
        duration: 0.3,
        ease: "power1.in",
      });
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const panels = document.querySelectorAll('.panel');

  // Set all panels side by side horizontally
  gsap.set(".panel-container", { display: "flex", flexDirection: "row" });
  gsap.set(".panel", { flex: "0 0 100%" }); // Each panel takes up 100% width

  // Create a timeline for the entire scroll
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".panel-container",
      pin: true, // Pin the container while scrolling through panels
      start: "top top",
      end: () => "+=" + (panels.length * window.innerWidth), // Adjust to total width of panels
      scrub: true, // Smooth scrubbing
    }
  });

  // Slide each panel left (-100% of its width)
  panels.forEach((panel, index) => {
    timeline.to(panel, { xPercent: -100 }, index * 1); // Offset each animation by its index
  });
});
const internshipCard = document.querySelector('.internship-card');

// Add mouseenter event listener
internshipCard.addEventListener('mouseenter', () => {
  // Animate the card elements
  gsap.to(internshipCard, {
    duration: 0.8,
    scale: 1.05, // Slightly enlarge the card
    boxShadow: "0px 10px 30px rgba(0,0,0,0.2)", // Add shadow effect
  });

  // Optional: Animate child elements, like title or description
  gsap.from(".internship-title", { opacity: 0, x: -20, duration: 0.5 });
  gsap.from(".internship-description", { opacity: 0, y: 20, duration: 0.5, delay: 0.2 });
});

// Add mouseleave event listener to reset the animation
internshipCard.addEventListener('mouseleave', () => {
  gsap.to(internshipCard, {
    duration: 0.8,
    scale: 1, // Reset the scale
    boxShadow: "0px 5px 15px rgba(0,0,0,0.1)", // Reset shadow effect
  });
});

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate the internship-card when it enters the viewport
gsap.from('.internship-card', {
  scrollTrigger: {
    trigger: '.internship-card', // The element to watch
    start: 'top 60%', // Trigger animation when the top of the element is 80% into the viewport
    toggleActions: 'play resume resume reset', // Play the animation once
  },
  opacity: 0, // Start with 0 opacity
  y: 50,      // Slide up from 50px below
  duration: 1, // Animation duration
  ease: 'power2.out', // Ease-out effect
});

document.addEventListener("DOMContentLoaded", () => {
  // Select all timeline items
  const timelineItems = document.querySelectorAll(".timeline-item");

  // Function to animate the timeline items using GSAP
  function animateTimelineItems(item) {
    gsap.to(item, {
      opacity: 1,        // Make it fully visible
      y: 0,              // Slide it into position (from top 20px to 0)
      duration: 5,       // Duration of the animation
      ease: "power3.out",// Easing function for smoothness
    });
  }

  // Function to handle the activation when item comes into view
  function handleScrollActivation() {
    const options = {
      root: null,         // Use the viewport as the root
      rootMargin: "10px",  // No margin (trigger exactly when it enters the viewport)
      threshold: 1,     // Trigger when 50% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Mark item as active and animate it
          entry.target.classList.add("active");
          animateTimelineItems(entry.target); // Animate the item
          observer.unobserve(entry.target);   // Stop observing once the item is activated
        }
      });
    }, options);

    // Observe each timeline item
    timelineItems.forEach(item => observer.observe(item));
  }

  // Call the function to activate items on scroll
  handleScrollActivation();
});

  document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("education-image");
  
    // Create a GSAP timeline for mouse enter and exit
    const imageTimeline = gsap.timeline({ paused: true });
  
    // Define the animation for the image on mouse enter
    imageTimeline.to(image, {
      scale: 1.1, // Enlarge the image
      opacity: 0.8, // Make the image slightly transparent
      duration: 0.5,
      ease: "power3.out",
    });
  
    // Define the reverse animation for the image on mouse exit
    imageTimeline.to(image, {
      scale: 1, // Reset scale to original size
      opacity: 1, // Reset opacity to 100%
      duration: 0.5,
      ease: "power3.out",
    });
  
    // Add event listeners for mouse enter and mouse leave
    image.addEventListener("mouseenter", () => {
      imageTimeline.play(); // Play the animation on mouse enter
    });
  
    image.addEventListener("mouseleave", () => {
      imageTimeline.reverse(); // Reverse the animation on mouse leave
    });
  });
  










  am5.ready(function() {
    // Create root element
    var root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // Create the map chart
    var chart = root.container.children.push(am5map.MapChart.new(root, {
      panX: "rotateX",
      panY: "rotateY",
      projection: am5map.geoOrthographic(),
      paddingBottom: 20,
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20
    }));

    // Create main polygon series for countries
    var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow
    }));

    // Define earth-tone colors for countries
    const earthTones = [
      "#a0522d", // Sienna (soil)
      "#8b4513", // SaddleBrown (forest)
      "#deb887", // Burlywood (sand)
      "#cd853f", // Peru (deserts)
      "#2e8b57", // SeaGreen (forests)
      "#4682b4", // SteelBlue (sea)
      "#6b8e23"  // OliveDrab (grasslands)
    ];

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true,
      fill: am5.color(earthTones[Math.floor(Math.random() * earthTones.length)]), // Random earth tone
      strokeWidth: 0.5,
      stroke: am5.color("#ffffff") // White borders
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color("#ffcc00") // Highlight on hover
    });

    polygonSeries.mapPolygons.template.states.create("active", {
      fill: am5.color("#ff6347") // Highlight on active
    });

    // Create series for background fill
    var backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
    backgroundSeries.mapPolygons.template.setAll({
      fill: am5.color("#eae2d3"), // Sand-inspired background
      fillOpacity: 0.8,
      strokeOpacity: 0
    });
    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180)
    });

    // Add graticules (lines of longitude and latitude)
    var graticuleSeries = chart.series.unshift(
      am5map.GraticuleSeries.new(root, {
        step: 10
      })
    );
    graticuleSeries.mapLines.template.setAll({
      stroke: am5.color("#8b4513"), // Brown graticules for natural feel
      strokeOpacity: 0.3,
      strokeWidth: 0.5
    });

    // Set up events
    var previousPolygon;
    polygonSeries.mapPolygons.template.on("active", function(active, target) {
      if (previousPolygon && previousPolygon != target) {
        previousPolygon.set("active", false);
      }
      if (target.get("active")) {
        selectCountry(target.dataItem.get("id"));
      }
      previousPolygon = target;
    });

    function selectCountry(id) {
      var dataItem = polygonSeries.getDataItemById(id);
      var target = dataItem.get("mapPolygon");
      if (target) {
        var centroid = target.geoCentroid();
        if (centroid) {
          chart.animate({ key: "rotationX", to: -centroid.longitude, duration: 1500, easing: am5.ease.inOut(am5.ease.cubic) });
          chart.animate({ key: "rotationY", to: -centroid.latitude, duration: 1500, easing: am5.ease.inOut(am5.ease.cubic) });
        }
      }
    }

    // Uncomment this to pre-center the globe on a country when it loads
    // polygonSeries.events.on("datavalidated", function() {
    //   selectCountry("AU");
    // });

    // Make stuff animate on load
    chart.appear(1000, 100);
  });



// Mouse Enter Animations
document.addEventListener("DOMContentLoaded", () => {
  // Mouse enter effect for .contact-form
  document.querySelector(".contact-form").addEventListener("mouseenter", () => {
    gsap.to(".contact-form", {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
    });
  });

  // Mouse enter effect for .footer columns
  document.querySelectorAll(".footer .col-md-3").forEach((col) => {
    col.addEventListener("mouseenter", () => {
      gsap.to(col, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });
    });
  });
});

// Scroll-triggered Animations
gsap.registerPlugin(ScrollTrigger);

// Animation for .contact-form on scroll
ScrollTrigger.create({
  trigger: ".contact-form",
  start: "top 40%",
  onEnter: () => {
    gsap.from(".contact-form", {
      opacity: 0,
      x: 100,
      duration: 1,
      delay: 0.7,
      ease: "power3.out",
    });
  },
});

// Animation for .footer columns on scroll
ScrollTrigger.create({
  trigger: ".footer .col-md-3",
  start: "top 40%",
  onEnter: () => {
    gsap.from(".footer .col-md-3", {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
      ease: "power3.out",
    });
  },
});

// Fade-in effect for the footer on scroll
ScrollTrigger.create({
  trigger: ".footer",
  start: "top 40%",
  onEnter: () => {
    gsap.from(".footer", {
      opacity: 0,
      duration: 1.5,
      delay: 1.5,
      ease: "power3.out",
    });
  },
});
document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Mouse enter animation for main-heading3
  const mainHeading = document.querySelector('.main-heading3');
  mainHeading.addEventListener('mouseenter', () => {
    gsap.to(mainHeading, {
      scale: 1.1,          // Slightly enlarge the heading
      color: '#ff5733',    // Change color
      duration: 0.5,       // Animation duration
      ease: 'power2.out',  // Ease-out effect
    });
  });

  // Mouse leave animation to reset the styles
  mainHeading.addEventListener('mouseleave', () => {
    gsap.to(mainHeading, {
      scale: 1,            // Reset scale
      color: 'inherit',    // Reset color
      duration: 0.5,       // Reset duration
      ease: 'power2.out',  // Reset easing
    });
  });

  // Mouse enter animation for sub-subheading3
  const subSubHeading = document.querySelector('.sub-subheading3');
  subSubHeading.addEventListener('mouseenter', () => {
    gsap.to(subSubHeading, {
      scale: 1.1,          // Slightly enlarge the text
      color: '#007bff',    // Change color to blue
      duration: 0.5,       // Animation duration
      ease: 'power2.out',  // Ease-out effect
    });
  });

  // Mouse leave animation for sub-subheading3 to reset styles
  subSubHeading.addEventListener('mouseleave', () => {
    gsap.to(subSubHeading, {
      scale: 1,            // Reset scale
      color: 'inherit',    // Reset color
      duration: 0.5,       // Reset duration
      ease: 'power2.out',  // Reset easing
    });
  });

  // ScrollTrigger for main-heading3
  gsap.from('.main-heading3', {
    scrollTrigger: {
      trigger: '.main-heading3', // Trigger when the element comes into view
      start: 'top 80%',          // Trigger animation when 80% of the element is in the viewport
      toggleActions: 'play none none none', // Play once when visible
    },
    opacity: 0,                 // Start with 0 opacity
    y: -50,                     // Slide in from above
    duration: 1,                // Duration of the animation
    ease: 'power2.out',         // Ease-out effect
  });

  // ScrollTrigger for sub-subheading3
  gsap.from('.sub-subheading3', {
    scrollTrigger: {
      trigger: '.sub-subheading3', // Trigger when the element comes into view
      start: 'top 80%',            // Trigger animation when 80% of the element is in the viewport
      toggleActions: 'play none none none', // Play once when visible
    },
    opacity: 0,                  // Start with 0 opacity
    y: 20,                       // Slide in from below
    duration: 1,                 // Duration of the animation
    delay: 0.2,                  // Delay for the subheading animation
    ease: 'power2.out',          // Ease-out effect
  });
});

 // Get modal elements
 const openModalButton = document.getElementById("openModal");
 const closeModalButton = document.getElementById("closeModal");
 const modal = document.getElementById("certificationModal");

 // Open modal event
 openModalButton.addEventListener("click", function (event) {
   event.preventDefault();
   modal.style.display = "flex";
 });

 // Close modal event
 closeModalButton.addEventListener("click", function () {
   modal.style.display = "none";
 });

 // Close modal when clicking outside the modal content
 window.addEventListener("click", function (event) {
   if (event.target === modal) {
     modal.style.display = "none";
   }
 });