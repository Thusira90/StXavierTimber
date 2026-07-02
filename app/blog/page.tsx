import Navbar from '../../components/Navbar';
import { Footer } from '../../components/Sections';
import styles from './blog.module.css';
import type { Metadata } from 'next';
import { posts } from './posts';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Timber Treatment Guides & Export Compliance',
  description:
    'Expert guides on kiln drying, vacuum pressure impregnation, ISPM 15 heat treatment, and timber treatment for construction, furniture, and export in Sri Lanka.',
  keywords: [
    'kiln drying guide Sri Lanka',
    'ISPM 15 export guide',
    'VPI timber treatment guide',
    'timber treatment Sri Lanka',
    'wood preservation guide',
    'export pallet compliance',
  ],
  alternates: { canonical: 'https://www.stxaviertimber.com/blog' },
  openGraph: { url: 'https://www.stxaviertimber.com/blog' },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-LK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Resources & Guides</span>
          <h1 className={styles.h1}>
            Timber Treatment<br />
            <em>Explained.</em>
          </h1>
          <p className={styles.heroSub}>
            Practical guides on kiln drying, VPI treatment, ISPM 15 compliance, and choosing
            the right treatment for your project — written by the team at St. Xavier Timber.
          </p>
        </div>
      </section>

      <section className={styles.postsSection}>
        <div className={styles.postsInner}>
          <div className={styles.grid}>
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.category}>{post.category}</span>
                  <span className={styles.readTime}>{post.readTime}</span>
                </div>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.cardDesc}>{post.description}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.date}>{formatDate(post.date)}</span>
                  <span className={styles.readMore}>Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
