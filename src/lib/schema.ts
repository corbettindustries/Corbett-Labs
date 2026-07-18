import { FaqItem, Guide, siteName } from './content';

const buildUrl = (origin: string, path: string) => new URL(path, origin).toString();

export const organizationSchema = (origin: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  url: origin,
  email: 'pouchex@corbettlabs.in',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Uttarakhand',
    addressCountry: 'IN'
  },
  logo: {
    '@type': 'ImageObject',
    url: buildUrl(origin, '/lovable-uploads/nicotine logo.webp'),
    caption: 'Corbett Labs logo'
  }
});

export const websiteSchema = (origin: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: origin
});

export const webpageSchema = ({
  origin,
  path,
  title,
  description,
  imagePath
}: {
  origin: string;
  path: string;
  title: string;
  description: string;
  imagePath?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url: buildUrl(origin, path),
  isPartOf: {
    '@type': 'WebSite',
    name: siteName,
    url: origin
  },
  ...(imagePath
    ? {
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: buildUrl(origin, imagePath),
          caption: title
        }
      }
    : {})
});

export const breadcrumbSchema = (
  origin: string,
  items: Array<{ name: string; path: string }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: buildUrl(origin, item.path)
  }))
});

export const faqSchema = (origin: string, path: string, faqs: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  url: buildUrl(origin, path),
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: [faq.answerIntro, ...faq.paragraphs, ...(faq.steps ?? [])].join(' ')
    }
  }))
});

export const articleSchema = (origin: string, guide: Guide) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: guide.title,
  description: guide.metaDescription,
  mainEntityOfPage: buildUrl(origin, `/guides/${guide.slug}`),
  author: {
    '@type': 'Organization',
    name: siteName
  },
  publisher: {
    '@type': 'Organization',
    name: siteName,
    logo: {
      '@type': 'ImageObject',
      url: buildUrl(origin, '/lovable-uploads/nicotine logo.webp')
    }
  },
  image: {
    '@type': 'ImageObject',
    url: buildUrl(origin, '/lovable-uploads/nicotine open pouch.webp'),
    caption: guide.title
  },
  articleSection: guide.sections.map((section) => section.title)
});