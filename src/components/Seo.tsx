import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
  schema?: Array<Record<string, unknown>>;
};

const upsertMetaTag = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const Seo = ({ title, description, canonicalPath = '/', type = 'website', schema = [] }: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = new URL(canonicalPath, window.location.origin).toString();
    document.title = title;

    upsertMetaTag('meta[name="description"]', { name: 'description', content: description });
    upsertMetaTag('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMetaTag('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMetaTag('meta[property="og:type"]', { property: 'og:type', content: type });
    upsertMetaTag('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMetaTag('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMetaTag('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMetaTag('meta[name="twitter:description"]', { name: 'twitter:description', content: description });

    let canonicalLink = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    const priorSchema = document.head.querySelectorAll('script[data-seo-schema="true"]');
    priorSchema.forEach((item) => item.remove());

    schema.forEach((entry) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoSchema = 'true';
      script.textContent = JSON.stringify(entry);
      document.head.appendChild(script);
    });

    return () => {
      document.head.querySelectorAll('script[data-seo-schema="true"]').forEach((item) => item.remove());
    };
  }, [canonicalPath, description, schema, title, type]);

  return null;
};

export default Seo;