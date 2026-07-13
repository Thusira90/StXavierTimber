import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import { Footer } from '../../../components/Sections';
import styles from './post.module.css';
import type { Metadata } from 'next';
import { posts, getPost, getRelatedPosts } from '../posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `https://www.stxaviertimber.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.stxaviertimber.com/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['St. Xavier Timber'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-LK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = getRelatedPosts(slug);

  const BASE = 'https://www.stxaviertimber.com';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'St. Xavier Timber',
      url: BASE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'St. Xavier Timber',
      url: BASE,
      logo: { '@type': 'ImageObject', url: `${BASE}/logo.png` },
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE}/blog/${post.slug}`,
    },
    about: {
      '@type': 'LocalBusiness',
      '@id': BASE,
      name: 'St. Xavier Timber',
    },
    image: {
      '@type': 'ImageObject',
      url: `${BASE}/og-image.jpg`,
      width: 1200,
      height: 630,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Knowledge Centre', item: `${BASE}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE}/blog/${post.slug}` },
    ],
  };

  const faqEntries = post.sections
    .filter((s) => s.heading && s.paragraphs && s.paragraphs.length > 0)
    .slice(0, 4);

  const faqSchema = faqEntries.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqEntries.map((s) => ({
          '@type': 'Question',
          name: s.heading,
          acceptedAnswer: {
            '@type': 'Answer',
            text: s.paragraphs!.join(' '),
          },
        })),
      }
    : null;

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.metaText}>{formatDate(post.date)}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.metaText}>{post.readTime}</span>
          </div>
          <h1 className={styles.h1}>{post.title}</h1>
          <p className={styles.lead}>{post.description}</p>
          <div className={styles.tags}>
            {post.tags.map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className={styles.article}>
        <div className={styles.articleInner}>
          {post.sections.map((section, i) => (
            <div key={i} className={styles.section}>
              {section.heading && <h2 className={styles.h2}>{section.heading}</h2>}
              {section.paragraphs?.map((p, j) => (
                <p key={j} className={styles.body}>{p}</p>
              ))}
              {section.list && (
                <ul className={styles.list}>
                  {section.list.map((item, k) => (
                    <li key={k} className={styles.listItem}>{item}</li>
                  ))}
                </ul>
              )}
              {section.note && (
                <div className={styles.note}>
                  <p>{section.note}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className={styles.related}>
          <div className={styles.relatedInner}>
            <h2 className={styles.relatedHeading}>Related Articles</h2>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <a key={r.slug} href={`/blog/${r.slug}`} className={styles.relatedCard}>
                  <span className={styles.relatedCategory}>{r.category}</span>
                  <p className={styles.relatedTitle}>{r.title}</p>
                  <span className={styles.relatedReadMore}>Read article →</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaH2}>Have a timber treatment question?</h2>
          <p className={styles.ctaSub}>
            Send us your timber specifications and we will advise on the right treatment
            and provide a quote — usually within a few hours.
          </p>
          <div className={styles.ctaActions}>
            <a href="/contact-us" className={styles.ctaBtn}>Get a Quote</a>
            <a href="/blog" className={styles.ctaBack}>← All Articles</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
