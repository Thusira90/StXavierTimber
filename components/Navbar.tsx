'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'Industries', href: '/#industries' },
  { label: 'About', href: '/about' },
  { label: 'Calculator', href: '/calculator' },
  { label: 'Knowledge Centre', href: '/blog' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="St. Xavier Timber"
            width={200}
            height={80}
            className={styles.logoImg}
            style={{ objectFit: 'contain' }}
            priority
          />
        </a>

        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="/contact-us" className={styles.cta}>Get a Quote</a>

        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className={styles.mobile}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="/contact-us" className={styles.mobileCta} onClick={() => setOpen(false)}>
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
