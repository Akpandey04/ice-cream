// @ts-nocheck
export function initLegacyScript() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.body.classList.add("is-loading", "theme-cocoa");

  const loader = document.getElementById("loader");
  const header = document.getElementById("siteHeader");
  const heroVisual = document.getElementById("heroVisual");
  const heroVideo = document.getElementById("heroVideo");
  const ingredientField = document.getElementById("ingredientField");
  const flavourTitle = document.getElementById("flavourTitle");
  const flavourText = document.getElementById("flavourText");
  const flavourPack = document.getElementById("flavourPack");
  const signupForm = document.getElementById("signupForm");
  const formMessage = document.getElementById("formMessage");

  const flavourCopy = {
    cocoa: {
      title: "Midnight Cocoa",
      text: "Deep cocoa tones, floating chocolate shards, and a slow ganache finish.",
      rotate: "-5deg",
      x: "0rem",
      y: "0rem",
      scale: "1"
    },
    berry: {
      title: "Berry Velvet",
      text: "Soft pink cream, fresh strawberries, and a bright ribbon of fruit.",
      rotate: "4deg",
      x: "-1.1rem",
      y: "0.6rem",
      scale: "1.04"
    },
    mango: {
      title: "Golden Mango",
      text: "Warm mango, glossy caramel drops, and a sunny cream finish.",
      rotate: "-2deg",
      x: "0.9rem",
      y: "-0.4rem",
      scale: "1.08"
    }
  };

  const themeClasses = ["theme-cocoa", "theme-berry", "theme-mango"];

  function showPage() {
    loader?.classList.add("is-hidden");
    document.body.classList.remove("is-loading");
    startHeroVideo();
  }

  function startHeroVideo() {
    // heroVideo might be null in React if not queried inside component, 
    // but document.querySelector will find it since it runs after mount.
    const video = document.querySelector(".hero-bg__video");
    if (!video) return;
    video.muted = true;
    video.playbackRate = 0.82;
    video.addEventListener('timeupdate', () => {
      if (video.duration && video.currentTime >= video.duration - 0.2) {
        video.currentTime = 0.1;
        video.play();
      }
    });
    const playAttempt = video.play();
    if (playAttempt) {
      playAttempt.catch(() => {});
    }
  }

  startHeroVideo();

  if (prefersReducedMotion) {
    showPage();
  } else {
    window.setTimeout(showPage, 3600);
  }

  function setHeaderState() {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  const revealItems = [...document.querySelectorAll(".reveal")];
  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min((index % 6) * 70, 350)}ms`;
  });

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );

  revealItems.forEach(item => revealObserver.observe(item));

  function updateHeroMotion(event) {
    const visual = document.querySelector(".hero-bg");
    if (!visual || prefersReducedMotion) return;

    const rect = visual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    visual.style.setProperty("--hero-video-x", `${x * 16}px`);
    visual.style.setProperty("--hero-video-y", `${y * 14}px`);
  }

  function resetHeroMotion() {
    const visual = document.querySelector(".hero-bg");
    if (!visual) return;
    visual.style.setProperty("--hero-video-x", "0px");
    visual.style.setProperty("--hero-video-y", "0px");
  }

  const heroSection = document.getElementById("hero");
  heroSection?.addEventListener("pointermove", updateHeroMotion);
  heroSection?.addEventListener("pointerleave", resetHeroMotion);

  let ticking = false;

  function updateScrollEffects() {
    ticking = false;
    const hero = document.getElementById("hero");
    const visual = document.querySelector(".hero-bg");
    if (visual && hero) {
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / Math.max(rect.height, 1), 0), 1);
      visual.style.setProperty("--scroll-zoom", `${1 + progress * 0.08}`);
    }

    updateFlavourFromScroll();
  }

  function requestScrollEffects() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateScrollEffects);
    }
  }

  window.addEventListener("scroll", requestScrollEffects, { passive: true });
  window.addEventListener("resize", requestScrollEffects);
  requestScrollEffects();

  function setFlavour(flavour) {
    const copy = flavourCopy[flavour];
    if (!copy || document.body.dataset.flavour === flavour) return;

    document.body.dataset.flavour = flavour;
    document.body.classList.remove(...themeClasses);
    document.body.classList.add(`theme-${flavour}`);
    if (flavourTitle) flavourTitle.textContent = copy.title;
    if (flavourText) flavourText.textContent = copy.text;
    if (flavourPack) {
      flavourPack.style.setProperty("--flavour-rotate", copy.rotate);
      flavourPack.style.setProperty("--flavour-x", copy.x);
      flavourPack.style.setProperty("--flavour-y", copy.y);
      flavourPack.style.setProperty("--flavour-scale", copy.scale);
    }
  }

  function updateFlavourFromScroll() {
    const chapters = [...document.querySelectorAll(".flavour-chapter")];
    if (!chapters.length) return;

    const viewportCenter = window.innerHeight * 0.48;
    let active = chapters[0];
    let smallestDistance = Infinity;

    chapters.forEach(chapter => {
      const rect = chapter.getBoundingClientRect();
      const center = rect.top + rect.height * 0.5;
      const distance = Math.abs(center - viewportCenter);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        active = chapter;
      }
    });

    if (active && active.dataset.flavour) {
      setFlavour(active.dataset.flavour);
    }
  }

  setFlavour("cocoa");

  document.querySelectorAll(".magnetic").forEach(element => {
    element.addEventListener("pointermove", event => {
      if (prefersReducedMotion) return;
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      element.style.transform = `translate(${x * 0.14}px, ${y * 0.18}px)`;
    });

    element.addEventListener("pointerleave", () => {
      element.style.transform = "";
    });
  });

  const canvas = document.getElementById("ambientCanvas");
  const context = canvas?.getContext("2d");
  let width = 0;
  let height = 0;
  let particles = [];
  let confetti = [];
  let animationFrame = 0;

  function resizeCanvas() {
    if (!canvas || !context) return;
    const scale = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * scale);
    canvas.height = Math.floor(height * scale);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(scale, 0, 0, scale, 0, 0);
    createParticles();
  }

  function createParticles() {
    const count = prefersReducedMotion ? 0 : Math.min(62, Math.max(28, Math.floor(width / 18)));
    const colors = ["#f36d8a", "#f7a928", "#38b78f", "#5a2e24", "#5663c7"];

    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.4 + 0.8,
      speed: Math.random() * 0.26 + 0.08,
      drift: Math.random() * 0.42 - 0.21,
      alpha: Math.random() * 0.25 + 0.18,
      phase: Math.random() * Math.PI * 2,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
  }

  function drawAmbient() {
    if (!canvas || !context) return;
    context.clearRect(0, 0, width, height);

    particles.forEach(particle => {
      particle.y -= particle.speed;
      particle.x += Math.sin(Date.now() * 0.0006 + particle.phase) * 0.16 + particle.drift;

      if (particle.y < -8) particle.y = height + 8;
      if (particle.x < -8) particle.x = width + 8;
      if (particle.x > width + 8) particle.x = -8;

      context.globalAlpha = particle.alpha;
      context.fillStyle = particle.color;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fill();
    });

    confetti = confetti.filter(piece => piece.life > 0);
    confetti.forEach(piece => {
      piece.life -= 1;
      piece.x += piece.vx;
      piece.y += piece.vy;
      piece.vy += 0.07;
      piece.spin += piece.spinSpeed;

      context.save();
      context.globalAlpha = Math.max(piece.life / 80, 0);
      context.translate(piece.x, piece.y);
      context.rotate(piece.spin);
      context.fillStyle = piece.color;
      context.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.62);
      context.restore();
    });

    context.globalAlpha = 1;
    animationFrame = window.requestAnimationFrame(drawAmbient);
  }

  function burstConfetti(originX, originY) {
    if (prefersReducedMotion) return;
    const colors = ["#f36d8a", "#f7a928", "#38b78f", "#5a2e24", "#5663c7", "#fff1d9"];

    for (let index = 0; index < 70; index += 1) {
      confetti.push({
        x: originX,
        y: originY,
        vx: (Math.random() - 0.5) * 8,
        vy: Math.random() * -6 - 1,
        size: Math.random() * 8 + 4,
        spin: Math.random() * Math.PI,
        spinSpeed: (Math.random() - 0.5) * 0.34,
        life: Math.random() * 35 + 55,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  function launchPlane(button) {
    if (prefersReducedMotion) return;

    const rect = button.getBoundingClientRect();
    const plane = document.createElement("span");
    plane.className = "paper-plane";
    plane.style.left = `${rect.left + rect.width / 2}px`;
    plane.style.top = `${rect.top + rect.height / 2}px`;
    document.body.appendChild(plane);
    plane.addEventListener("animationend", () => plane.remove());
  }

  if (signupForm) {
    // Remove old listeners if re-running
    const newForm = signupForm.cloneNode(true);
    signupForm.parentNode.replaceChild(newForm, signupForm);
    newForm.addEventListener("submit", event => {
      event.preventDefault();
      const button = newForm.querySelector("button");
      const rect = button.getBoundingClientRect();

      launchPlane(button);
      burstConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
      if (formMessage) formMessage.textContent = "You are on the first-taste list.";
      newForm.reset();
    });
  }

  resizeCanvas();

  if (!prefersReducedMotion) {
    drawAmbient();
  }

  window.addEventListener("resize", resizeCanvas);
  
  return () => {
    if (animationFrame) window.cancelAnimationFrame(animationFrame);
    window.removeEventListener("resize", resizeCanvas);
    window.removeEventListener("scroll", requestScrollEffects);
    window.removeEventListener("scroll", setHeaderState);
    heroSection?.removeEventListener("pointermove", updateHeroMotion);
    heroSection?.removeEventListener("pointerleave", resetHeroMotion);
  };
}
