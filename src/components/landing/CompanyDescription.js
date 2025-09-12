import React, { useEffect, useRef } from 'react';
import './CompanyDescription.css';
import Rhombus from '../../assets/rhombus.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitText, ScrollTrigger);


const CompanyDescription = () => {
  const pRef = useRef(null);
  const splitInstance = useRef(null);

  useEffect(() => {
    const el = pRef.current;
    if (!el) return;

    // ensure fonts are loaded to avoid split/jump issues
    (document.fonts && document.fonts.ready)
      ? document.fonts.ready.then(init)
      : init();

    function init() {
      // revert previous instance if present
      if (splitInstance.current) {
        try { splitInstance.current.revert(); } catch (e) {}
        splitInstance.current = null;
      }

      // create split: include characters so we can color each char individually
      splitInstance.current = SplitText.create(el, {
        type: 'chars,words,lines',
        linesClass: 'line',
        mask: 'lines',
        autoSplit: true,
      });

      // Fake gradient by coloring each character individually based on its
      // horizontal position inside the paragraph. This is robust across
      // browsers since background-clip on text can be fiddly when text is split.
      try {
        const chars = splitInstance.current.chars || [];
        const containerRect = el.getBoundingClientRect();
        const startColor = '#000000'; // black
        const endColor = '#FF9A24'; // orange

        const hexToRgb = (hex) => {
          const h = hex.replace('#', '');
          const bigint = parseInt(h.length === 3 ? h.split('').map(c=>c+c).join('') : h, 16);
          return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
        };

        const lerp = (a, b, t) => a + (b - a) * t;

        const lerpColor = (c1, c2, t) => {
          const r = Math.round(lerp(c1[0], c2[0], t));
          const g = Math.round(lerp(c1[1], c2[1], t));
          const b = Math.round(lerp(c1[2], c2[2], t));
          return `rgb(${r}, ${g}, ${b})`;
        };

        const rgb1 = hexToRgb(startColor);
        const rgb2 = hexToRgb(endColor);

        // Ensure chars are laid out inline so measurements work
        chars.forEach((ch) => {
          if (!ch) return;
          ch.style.display = 'inline-block';
        });

        // compute color per char
        chars.forEach((ch) => {
          const r = ch.getBoundingClientRect();
          const cx = (r.left + r.right) / 2;
          const rel = Math.min(Math.max((cx - containerRect.left) / containerRect.width, 0), 1);
          const color = lerpColor(rgb1, rgb2, rel);
          ch.style.color = color;
        });
      } catch (e) {
        // silent if per-char coloring fails
      }

      // animate the lines from below when the container scrolls
      gsap.from(splitInstance.current.lines, {
        yPercent: 120,
        stagger: 0.15, // user prefers 0.15
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: 1, // smoother, slightly slower follow-through
        },
      });
    }

    return () => {
      // kill ScrollTriggers
      ScrollTrigger.getAll().forEach((t) => t.kill());
      // revert split
      if (splitInstance.current) {
        try { splitInstance.current.revert(); } catch (e) {}
        splitInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="company-description">
      <img src={Rhombus} alt="rhombus" className="rhombus" />
      <p ref={pRef} className="split">
        We are AGS Green, dedicated to advancing solar energy solutions in India. We specialize in solar rooftops, ground mounted solar projects, innovative solutions for farmers and comprehensive operations and maintenance of solar installations.
      </p>
      <img src={Rhombus} alt="rhombus" className="rhombus" />
    </div>
  );
};

export default CompanyDescription;
