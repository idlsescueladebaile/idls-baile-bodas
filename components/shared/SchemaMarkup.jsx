import React, { useEffect } from 'react';

export default function SchemaMarkup() {
    useEffect(() => {
        const localBusinessSchema = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://idlsbailebodas.com",
            "name": "IDLS Baile Bodas",
            "image": "https://idlsbailebodas.com/logo.png",
            "description": "Clases de baile para bodas en Vigo. Coreografía nupcial personalizada con más de 20 años de experiencia y 500 parejas felices.",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "IDLS Escuela de Baile",
                "addressLocality": "Vigo",
                "addressRegion": "Galicia",
                "postalCode": "36000",
                "addressCountry": "ES"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 42.2406,
                "longitude": -8.7207
            },
            "telephone": "+34600000000",
            "email": "bodas@idls.es",
            "url": "https://idlsbailebodas.com",
            "priceRange": "€€",
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "10:00",
                    "closes": "21:00"
                }
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "100"
            }
        };

        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Clases de baile para bodas",
            "provider": {
                "@type": "LocalBusiness",
                "name": "IDLS Baile Bodas"
            },
            "areaServed": {
                "@type": "City",
                "name": "Vigo"
            },
            "description": "Coreografía de baile personalizada para bodas. Enseñamos a parejas sin experiencia a bailar su primer baile nupcial con confianza.",
            "offers": {
                "@type": "Offer",
                "priceCurrency": "EUR",
                "price": "300",
                "availability": "https://schema.org/InStock"
            }
        };

        // Add schema script for LocalBusiness
        const script1 = document.createElement('script');
        script1.type = 'application/ld+json';
        script1.text = JSON.stringify(localBusinessSchema);
        document.head.appendChild(script1);

        // Add schema script for Service
        const script2 = document.createElement('script');
        script2.type = 'application/ld+json';
        script2.text = JSON.stringify(serviceSchema);
        document.head.appendChild(script2);

        return () => {
            document.head.removeChild(script1);
            document.head.removeChild(script2);
        };
    }, []);

    return null;
}