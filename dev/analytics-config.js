// analytics-config.js
var klaroConfig = {
    lang: 'es',
    privacyPolicy: '/laexquisitareposteria/dev/legal/rgpd.html#cookies',
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

    apps: [
        {
            name: 'google-analytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
            cookies: [/^ga/i, /^_gid/i],
            default: false,
        },
    ],
};

// Initialisation de Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX'); // <-- Pense à mettre ton vrai ID