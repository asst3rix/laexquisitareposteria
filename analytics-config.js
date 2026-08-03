// analytics-config.js
const cookiesManagement = (function () {
    'use strict';

    // Détection de l'environnement local
    const isLocalhost = Boolean(
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1' ||
        window.location.hostname.endsWith('.local') ||
        window.location.protocol === 'file:'
    );

    window.klaroConfig = {
        lang: 'es',
        privacyPolicy: '/laexquisitareposteria/legal/rgpd/index.html#cookies',
        elementID: 'klaro',
        cookieName: 'klaro_consent',
        cookieExpiresAfterDays: 365,
        default: false,
        mustConsent: false,
        acceptAll: true,
        hideDeclineAll: false,

        translations: {
            es: {
                consentModal: {
                    title: 'Gestión de cookies',
                    description: 'Utilizamos cookies de Google Analytics para analizar el tráfico de nuestro sitio web y mejorar su experiencia.',
                },
                consentNotice: {
                    changeDescription: 'Ha habido cambios desde su última visita, por favor actualice su consentimiento.',
                    description: 'Hola, utilizamos cookies de análisis para entender cómo interactúa con nuestra web.',
                    learnMore: 'Personalizar',
                },
                purposes: {
                    analytics: 'Análisis de tráfico',
                },
                ok: 'Aceptar todas',
                decline: 'Rechazar todas',
                save: 'Guardar selección',
            },
        },

        services: [
            {
                name: 'google-analytics',
                title: 'Google Analytics',
                purposes: ['analytics'],
                cookies: [/^ga/i, /^_gid/i],
                default: false,
            },
        ],
    };

    // Initialisation de Google Analytics (SEULEMENT si on N'EST PAS en local)
    if (!isLocalhost) {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
            window.dataLayer.push(arguments);
        };

        window.gtag('js', new Date());
        window.gtag('config', 'G-ZBM0Q9GGKM'); // Ton vrai ID
        console.log("GAON.");
    } else {
        // Optionnel : un petit message discret dans la console F12
        console.log("Google Analytics is disabled in local environment.");
    }
})();