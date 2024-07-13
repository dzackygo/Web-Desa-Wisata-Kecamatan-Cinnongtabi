// Scrolling Effect
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fade-in-section');

    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                entry.target.classList.remove('is-hidden');
            } else {
                if (entry.target.classList.contains('is-visible')) {
                    entry.target.classList.remove('is-visible');
                    entry.target.classList.add('is-hidden');
                }
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

const accordionHeaders = document.querySelectorAll(".accordion-header");

function closeAllAccordions() {
  accordionHeaders.forEach((header) => {
    const accordionContent = header.parentElement.querySelector(".accordion-content");
    accordionContent.style.maxHeight = "0px";
    header.querySelector(".fas").classList.add("fa-plus");
    header.querySelector(".fas").classList.remove("fa-minus");
    header.parentElement.classList.remove("bg-indigo-50");
  });
}

accordionHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    const accordionContent = header.parentElement.querySelector(".accordion-content");
    const isOpened = accordionContent.style.maxHeight !== "0px" && accordionContent.style.maxHeight !== "";

    closeAllAccordions();

    if (!isOpened) {
      accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
      header.querySelector(".fas").classList.remove("fa-plus");
      header.querySelector(".fas").classList.add("fa-minus");
      header.parentElement.classList.add("bg-indigo-50");
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("card-container");
  const cards = Array.from(container.children);
  const cardWidth = cards[0].offsetWidth;
  const containerWidth = container.offsetWidth;

  // Calculate the total width of all cards
  const totalCardWidth = cards.length * (cardWidth + 16); // 16 is the margin between cards

  // Clone cards to fill the container width
  while (container.scrollWidth < containerWidth + totalCardWidth) {
      cards.forEach(card => {
          const clone = card.cloneNode(true);
          container.appendChild(clone);
      });
  }

  // Update animation duration based on the total width
  const scrollDuration = totalCardWidth / 100; // Adjust the divisor to control speed
  container.style.animationDuration = `${scrollDuration}s`;
});


