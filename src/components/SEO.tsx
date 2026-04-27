import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  schema?: Record<string, any>;
}

export function SEO({ 
  title = "Filtros D'Agua - Purificação e Climatização", 
  description = "Filtros D'Agua - Especialistas em purificação de água e climatização em Ji-Paraná, RO. Há 35 anos cuidando da água que você consome.",
  canonicalUrl = "https://filtrosdagua.com.br", // replace with actual
  schema
}: SEOProps) {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Filtros D'Agua",
    "image": "https://drive.google.com/thumbnail?id=10x77eXiYm89tPvDwK25eh8PtI2bJgHsP&sz=w1000", // Logo
    "@id": "https://filtrosdagua.com.br",
    "url": "https://filtrosdagua.com.br",
    "telephone": "+5569999999999", // To update with real phone
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ji-Paraná",
      "addressRegion": "RO",
      "addressCountry": "BR"
    },
    "description": description
  };

  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultSchema.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={defaultSchema.image} />

      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
}
