import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
}

export const SEO = ({ 
  title, 
  description, 
  image = '/og-image.jpg',
  url = window.location.href, 
  type = 'website',
  keywords = [] // Custom keywords passed via prop
}: SEOProps) => {
  const { t, i18n } = useTranslation();
  const siteTitle = 'Mayeul Deries';
  const currentLang = i18n.language || 'fr';
  
  // Format locale for Open Graph (e.g., 'fr' -> 'fr_FR', 'en' -> 'en_US')
  const ogLocale = currentLang.startsWith('fr') ? 'fr_FR' : 'en_US';
  const alternateLocale = currentLang.startsWith('fr') ? 'en_US' : 'fr_FR';

  // Get default metadata from translation files
  // Note: we treat the return value as string because we expect simple strings for title/desc
  const defaultTitle = t('seo.default.title');
  const defaultDescription = t('seo.default.description');
  const defaultKeywords = t('seo.default.keywords'); // CSV string

  // Use props if provided, otherwise fallback to defaults
  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;

  // Process keywords: split default CSV string
  const globalKwList = defaultKeywords.split(',').map(k => k.trim()).filter(Boolean);
  
  // Combine global keywords with custom prop keywords and deduplicate
  const allKeywords = Array.from(new Set([
    ...globalKwList,
    ...keywords
  ]));

  const fullTitle = finalTitle === siteTitle ? finalTitle : `${finalTitle} | ${siteTitle}`;

  // Structured Data (JSON-LD) for Person/Portfolio
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mayeul Deries",
    "url": "https://mayeulderies.fr", 
    "sameAs": [
      "https://www.linkedin.com/in/mayeul-deries/",
      "https://github.com/Mayeul-Deries"
    ],
    "jobTitle": "Full Stack Developer",
    "description": finalDescription
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={alternateLocale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
