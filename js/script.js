(() => {
  const nav = document.querySelector(".navbar");

  if (!nav) {
    return;
  }

  let navOffset = 0;

  const updateDocking = () => {
    const shouldDock = window.innerWidth >= 750 && window.scrollY > navOffset;
    document.body.classList.toggle("has-docked-nav", shouldDock);
  };

  const measure = () => {
    document.body.classList.remove("has-docked-nav");
    navOffset = nav.getBoundingClientRect().top + window.scrollY;
    updateDocking();
  };

  window.addEventListener("scroll", updateDocking, { passive: true });
  window.addEventListener("resize", measure);
  window.addEventListener("load", measure);
  measure();
})();

(() => {
  // Cap each publication's figure/video at the height of its text block
  // (title through buttons). The stylesheet applies the cap on wide screens.
  const texts = document.querySelectorAll(".publication-text");

  if (!texts.length || !("ResizeObserver" in window)) {
    return;
  }

  const observer = new ResizeObserver((entries) => {
    entries.forEach(({ target }) => {
      target.closest("tr").style.setProperty("--media-height", `${target.offsetHeight}px`);
    });
  });

  texts.forEach((text) => observer.observe(text));
})();
