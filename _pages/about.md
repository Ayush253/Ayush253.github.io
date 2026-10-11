---
layout: splash
permalink: /
title: "Research Portfolio"
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<div class="portfolio-home">
  <section class="portfolio-hero" aria-labelledby="intro-title">
    <canvas class="portfolio-constellation" aria-hidden="true"></canvas>
    <div class="portfolio-hero__shade"></div>
    <div class="portfolio-hero__content">
      <p class="portfolio-eyebrow"><span></span> Doctoral Researcher · IIT Bombay</p>
      <h1 id="intro-title">Ayush <span>V.</span> Patel</h1>
      <p class="portfolio-hero__role">Learning from data, <span>seeing the world differently.</span></p>
      <p class="portfolio-hero__summary">
        I work at the intersection of deep learning, remote sensing, computer vision,
        and quantum machine learning.
      </p>
      <div class="portfolio-actions">
        <a class="portfolio-button portfolio-button--primary" href="{{ '/publications/' | relative_url }}">Explore my research <span aria-hidden="true">↗</span></a>
        <a class="portfolio-button portfolio-button--quiet" href="{{ '/cv/' | relative_url }}">View CV <span aria-hidden="true">↗</span></a>
      </div>
      <nav class="portfolio-socials" aria-label="Social profiles">
        <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
        <a href="{{ site.author.googlescholar }}" aria-label="Google Scholar" target="_blank" rel="noopener noreferrer"><i class="ai ai-google-scholar" aria-hidden="true"></i></a>
        <a href="https://github.com/{{ site.author.github }}" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" aria-hidden="true"></i></a>
        <a href="mailto:{{ site.author.email }}" aria-label="Email"><i class="fas fa-envelope" aria-hidden="true"></i></a>
      </nav>
    </div>
    <div class="portfolio-hero__portrait">
      <img src="{{ '/images/Passport.jpg' | relative_url }}" alt="Portrait of {{ site.author.name }}">
      <span class="portfolio-portrait-tag"><span></span> Mumbai, India</span>
    </div>
    <a class="portfolio-scroll" href="#about" aria-label="Scroll to about section"><span></span> Scroll to explore</a>
  </section>

  <section class="portfolio-section portfolio-about" id="about" aria-labelledby="about-title">
    <div class="portfolio-section__heading">
      <p class="portfolio-eyebrow"><span></span> A little about me</p>
      <h2 id="about-title">Research driven by <span>curiosity.</span></h2>
    </div>
    <div class="portfolio-about__body">
      <p>
        I am a Doctoral Researcher at the Centre of Studies in Resources Engineering (CSRE),
        IIT Bombay. My work explores how modern learning methods can help us understand
        complex visual and remote-sensing data.
      </p>
      <p>
        I am especially interested in deep learning for remote sensing, quantum machine
        learning, computer vision, and foundation models. I enjoy connecting ideas across
        these fields to build practical, data-aware research.
      </p>
      <a class="portfolio-text-link" href="{{ '/cv/' | relative_url }}">More about my background <span aria-hidden="true">→</span></a>
    </div>
  </section>

  <section class="portfolio-section portfolio-focus" aria-labelledby="focus-title">
    <div class="portfolio-section__heading">
      <p class="portfolio-eyebrow"><span></span> What I explore</p>
      <h2 id="focus-title">Research <span>interests.</span></h2>
    </div>
    <div class="portfolio-focus__grid">
      <article class="portfolio-focus-card"><span>01</span><h3>Remote sensing</h3><p>Learning robust representations from Earth-observation imagery.</p></article>
      <article class="portfolio-focus-card"><span>02</span><h3>Quantum machine learning</h3><p>Exploring quantum-classical methods for data representation.</p></article>
      <article class="portfolio-focus-card"><span>03</span><h3>Computer vision</h3><p>Building models that make sense of visual information.</p></article>
      <article class="portfolio-focus-card"><span>04</span><h3>Foundation models</h3><p>Studying transferable representations across tasks and modalities.</p></article>
    </div>
  </section>

  <section class="portfolio-featured" aria-labelledby="featured-title">
    <div>
      <p class="portfolio-eyebrow"><span></span> Selected work</p>
      <h2 id="featured-title">Ideas into <span>research.</span></h2>
    </div>
    <div class="portfolio-featured__papers">
      <a href="{{ '/publication/qmc-net' | relative_url }}" class="portfolio-paper">
        <span class="portfolio-paper__type">Quantum learning · 2026</span>
        <h3>QMC-Net: Data-aware quantum representations for remote sensing image classification</h3>
        <span class="portfolio-paper__arrow" aria-hidden="true">↗</span>
      </a>
      <a href="{{ '/publication/hq-jepa' | relative_url }}" class="portfolio-paper">
        <span class="portfolio-paper__type">Cross-modal learning · 2026</span>
        <h3>HQ-JEPA: Hybrid Quantum Joint-Embedding Predictive Architecture</h3>
        <span class="portfolio-paper__arrow" aria-hidden="true">↗</span>
      </a>
      <a href="{{ '/publications/' | relative_url }}" class="portfolio-text-link">Browse all publications <span aria-hidden="true">→</span></a>
    </div>
  </section>

  <section class="portfolio-contact" aria-labelledby="contact-title">
    <p class="portfolio-eyebrow"><span></span> Have a question or an idea?</p>
    <h2 id="contact-title">Let's <span>connect.</span></h2>
    <a class="portfolio-button portfolio-button--primary" href="mailto:{{ site.author.email }}">Get in touch <span aria-hidden="true">↗</span></a>
  </section>
</div>
