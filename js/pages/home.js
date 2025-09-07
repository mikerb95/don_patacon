export function initHome(){
  // subtle parallax on hero content
  const content = document.querySelector('.hero-content');
  if (!content || !window.gsap) return;
  const mm = gsap.matchMedia();
  mm.add('(min-width: 800px)', () => {
    gsap.to(content, { yPercent: -6, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  });
}
