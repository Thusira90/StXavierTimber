'use client';
import { useState } from 'react';
import Link from 'next/link'
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
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.webp"
            alt="St. Xavier Timber"
            width={200}
            height={80}
            className={styles.logoImg}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>

        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={styles.link}>{l.label}</Link>
            </li>
          ))}
        </ul>

        <Link href="/contact-us" className={styles.cta}>Get a Quote</Link>

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
            <Link key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact-us" className={styles.mobileCta} onClick={() => setOpen(false)}>
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
