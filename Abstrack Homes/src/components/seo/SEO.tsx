import { Helmet } from 'react-helmet-async';
import { SITE_URL, SITE_NAME, type PageSEO } from '../../data/seo';

interface SEOProps extends PageSEO {
  image?: string;
  noindex?: boolean;
  productName?: string;
  productDescription?: string;
}

const SEO = ({
  title,
  description,
  keywords,
  path,
  ogType = 'website',
  image = '/images/header.jpg',
  noindex = false,
  productName,
  productDescription,
}: SEOProps) => {
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description:
      'Premium architectural solutions — Deceuninck uPVC windows, aluminium frames, and ASSA ABLOY hardware in Lahore, Pakistan.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '127-A, Main Commercial Broadway DHA Phase 8',
      addressLocality: 'Lahore',
      postalCode: '54000',
      addressCountry: 'PK',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+92-305-7799977',
        contactType: 'sales',
        areaServed: 'PK',
        availableLanguage: ['English', 'Urdu'],
      },
    ],
    sameAs: [
      'https://www.facebook.com/profile.php?id=100009858330366',
      'https://www.instagram.com/abstrakthomes',
      'https://www.linkedin.com/company/abstrakt-homes',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    image: imageUrl,
    '@id': SITE_URL,
    url: SITE_URL,
    telephone: '+92-305-7799977',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '127-A, Main Commercial Broadway DHA Phase 8',
      addressLocality: 'Lahore',
      postalCode: '54000',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.5029087,
      longitude: 74.4288754,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What brands does Abstrakt Homes supply?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are an authorized distributor of Deceuninck uPVC profiles and ASSA ABLOY hardware in Pakistan, offering premium windows, doors, and accessories.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Abstrakt Homes located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are located at 127-A, Main Commercial Broadway DHA Phase 8, Lahore, 54000, Pakistan.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of windows do you install?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We install uPVC and aluminium sliding windows, casement windows, tilt and turn windows, folding doors, curtain wall systems, and premium glass solutions.',
        },
      },
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_PK" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      {productName && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: productName,
            description: productDescription,
            image: imageUrl,
            brand: { '@type': 'Brand', name: 'Abstrakt Homes' },
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              priceCurrency: 'PKR',
              seller: { '@type': 'Organization', name: SITE_NAME },
            },
          })}
        </script>
      )}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: title, item: url },
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
