'use client';

// components/Layout.jsx
import { useEffect, useRef, useState, useContext, useCallback } from 'react';
import { ThemeContext } from './ThemeContext';
import Nav from './Nav';
import Footer from './Footer';
import Meta from './Meta';

/**
 * Layout component: hides navbar on scroll‑down, shows on scroll‑up.
 * Keeps the navbar mounted once to avoid jank.
 */

export default function Layout({ children }) {
  /* ─────────────── Theme ─────────────── */
  const { theme, toggleTheme } = useContext(ThemeContext);

  /* ───── Scroll position & visibility ───── */
  const [visible, setVisible] = useState(true);
  const prevScrollPos = useRef(0);
  const ticking = useRef(false);

  /** Compare previous vs current scroll inside rAF */
  const handleScroll = useCallback(() => {
    const current = window.scrollY;

    // ignore tiny scroll noise (<10px)
    if (Math.abs(current - prevScrollPos.current) < 10) {
      ticking.current = false;
      return;
    }

    // Show nav when scrolling up, hide when scrolling down
    setVisible(current < prevScrollPos.current);
    prevScrollPos.current = current;
    ticking.current = false;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(handleScroll);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  /* ─────────────── Mark‑up ─────────────── */
  return (
    <>
      <Meta />
      <div className={`container ${theme}`}>
        <header className={visible ? 'navHolder' : 'navHolder hide'}>
          <Nav theme_val={theme} toggleTheme_val={toggleTheme} />
        </header>

        <main className="main">{children}</main>
        <Footer />
      </div>
    </>
  );
}