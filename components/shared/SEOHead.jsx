import { useEffect } from 'react';

export default function SEOHead({ 
    title, 
    description, 
    keywords,
    ogImage = "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    url
}) {
    useEffect(() => {
        // Set title
        document.title = title;

        // Set or update meta tags
        const setMetaTag = (name, content, isProperty = false) => {
            if (!content) return;
            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);
            
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Standard meta tags
        setMetaTag('description', description);
        if (keywords) setMetaTag('keywords', keywords);

        // Open Graph tags
        setMetaTag('og:title', title, true);
        setMetaTag('og:description', description, true);
        setMetaTag('og:image', ogImage, true);
        setMetaTag('og:type', 'website', true);
        if (url) setMetaTag('og:url', url, true);

        // Twitter Card tags
        setMetaTag('twitter:card', 'summary_large_image');
        setMetaTag('twitter:title', title);
        setMetaTag('twitter:description', description);
        setMetaTag('twitter:image', ogImage);

    }, [title, description, keywords, ogImage, url]);

    return null;
}