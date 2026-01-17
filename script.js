const linkedinUrls = {
    es: 'https://www.linkedin.com/in/daniel-lopez-de-pablo/?locale=es_ES',
    en: 'https://www.linkedin.com/in/daniel-lopez-de-pablo/'
};

const profileData = {
    focus: {
        es: [
            'Salesforce Commerce Cloud (B2C)',
            'Arquitectura de soluciones e-commerce',
            'Integraciones (pagos, DAM, ERP, APIs)',
            'Investigación y estimaciones'
        ],
        en: [
            'Salesforce Commerce Cloud (B2C)',
            'E-commerce solution architecture',
            'Integrations (payments, DAM, ERP, APIs)',
            'Research and estimations'
        ]
    },
    certifications: [
        {
            title: 'Salesforce Certified B2C Commerce Architect',
            issuer: 'Salesforce',
            issued: 'Aug 2022',
            logo: 'img/salesforce.jpg'
        },
        {
            title: 'Salesforce Certified B2C Commerce Developer',
            issuer: 'Salesforce',
            issued: 'Jun 2019',
            logo: 'img/salesforce.jpg'
        }
    ],
    education: [
        {
            school: 'Colegio Salesiano Hermano Garate',
            degree: {
                es: 'Técnico Superior, Sistemas de Telecomunicaciones e Informáticos',
                en: 'Higher Technician, Telecommunications & IT Systems'
            }
        },
        {
            school: 'I.E.S. Maestre de Calatrava',
            degree: {
                es: 'Técnico Superior, Administración de Sistemas Informáticos',
                en: 'Higher Technician, Systems Administration'
            }
        }
    ],
    experience: [
        {
            company: 'Kodly',
            logo: 'img/kodly.jpg',
            role: { es: 'Solution Architect (Freelancer)', en: 'Solution Architect (Freelancer)' },
            period: 'Apr 2025 - Present',
            location: { es: 'Remoto', en: 'Remote' },
            tags: ['Salesforce Commerce Cloud'],
            bullets: {
                es: [
                    'Arquitectura y delivery de soluciones e-commerce en SFCC.',
                    'Soporte a equipos y definición de estándares técnicos.',
                    'Enfoque en calidad, mantenibilidad y performance.'
                ],
                en: [
                    'Solution architecture and delivery for SFCC ecommerce platforms.',
                    'Team support and definition of technical standards.',
                    'Focus on quality, maintenance and performance.'
                ]
            }
        },
        {
            company: 'Capgemini',
            logo: 'img/capgemini.jpg',
            role: { es: 'Solution Architect', en: 'Solution Architect' },
            period: 'Jun 2023 - Apr 2025',
            location: { es: 'Barcelona · Remoto', en: 'Barcelona · Remote' },
            tags: ['Salesforce Commerce Cloud'],
            bullets: {
                es: [
                    'Arquitectura de soluciones SFCC para clientes enterprise.',
                    'Coordinación técnica con stakeholders y equipos multidisciplinares.',
                    'Mejora de procesos y calidad del delivery.'
                ],
                en: [
                    'SFCC solution architecture for enterprise clients.',
                    'Technical coordination with stakeholders and cross-functional teams.',
                    'Process improvements and delivery quality.'
                ]
            }
        },
        {
            company: 'OSF Digital',
            logo: 'img/osf.jpg',
            role: { es: 'Solution Architect', en: 'Solution Architect' },
            period: 'Nov 2021 - Jun 2023',
            location: { es: 'Barcelona · Remoto', en: 'Barcelona · Remote' },
            tags: ['Salesforce Commerce Cloud'],
            bullets: {
                es: [
                    'Arquitectura técnica en proyectos SFCC.',
                    'Definición de patrones, integraciones y buenas prácticas.',
                    'Mentoring y soporte técnico.'
                ],
                en: [
                    'Technical architecture on SFCC projects.',
                    'Patterns, integrations and best practices definition.',
                    'Mentoring and technical support.'
                ]
            }
        },
        {
            company: 'OSF Digital',
            logo: 'img/osf.jpg',
            role: { es: 'Technical Lead', en: 'Technical Lead' },
            period: 'Dec 2019 - Nov 2021',
            location: { es: 'Barcelona · Remoto', en: 'Barcelona · Remote' },
            tags: ['Salesforce Commerce Cloud'],
            bullets: {
                es: [
                    'Liderazgo técnico de equipo de desarrollo.',
                    'Aseguramiento de calidad, revisiones y entrega.',
                    'Colaboración con PM/BA/QA para alinear objetivos.'
                ],
                en: [
                    'Technical leadership for development teams.',
                    'Quality assurance, reviews and delivery.',
                    'Collaboration with PM/BA/QA to align goals.'
                ]
            }
        },
        {
            company: 'OSF Digital',
            logo: 'img/osf.jpg',
            role: { es: 'Full Stack Web Developer', en: 'Full Stack Web Developer' },
            period: 'Mar 2018 - Dec 2019',
            location: { es: 'Barcelona · Remoto', en: 'Barcelona · Remote' },
            tags: ['Salesforce Commerce Cloud'],
            bullets: {
                es: [
                    'Desarrollo full-stack en entornos e-commerce.',
                    'Trabajo en features, fixes y soporte a releases.',
                    'Base sólida en frontend y backend.'
                ],
                en: [
                    'Full-stack development in ecommerce environments.',
                    'Features, fixes and release support.',
                    'Strong frontend and backend foundations.'
                ]
            }
        },
        {
            company: 'NEXO',
            logo: 'img/nexo.jpg',
            role: { es: 'Web Developer', en: 'Web Developer' },
            period: 'Apr 2017 - Mar 2018',
            location: { es: 'Plymouth, UK · Presencial', en: 'Plymouth, UK · On-site' },
            tags: ['PHP'],
            bullets: {
                es: [
                    'Desarrollo web y mantenimiento evolutivo.',
                    'Colaboración con equipos locales y stakeholders.'
                ],
                en: [
                    'Web development and iterative maintenance.',
                    'Collaboration with local teams and stakeholders.'
                ]
            }
        },
        {
            company: 'magicseaweed',
            logo: 'img/msw.jpg',
            role: { es: 'Web Developer', en: 'Web Developer' },
            period: 'Nov 2016 - Feb 2017',
            location: { es: 'Kingsbridge, UK · Presencial', en: 'Kingsbridge, UK · On-site' },
            tags: ['MVC'],
            bullets: {
                es: [
                    'Desarrollo web en producto/servicio digital.',
                    'Soporte a entregas cortas y mejoras continuas.'
                ],
                en: [
                    'Web development on a digital product/service.',
                    'Short delivery cycles and continuous improvements.'
                ]
            }
        },
        {
            company: 'Tellonline',
            logo: 'img/tellonline.jpg',
            role: { es: 'Web Developer', en: 'Web Developer' },
            period: 'Mar 2015 - Nov 2016',
            location: { es: 'Plymouth, UK · Presencial', en: 'Plymouth, UK · On-site' },
            tags: ['Kentico'],
            bullets: {
                es: [
                    'Desarrollo web y mantenimiento.',
                    'Trabajo con frontend clásico (HTML/CSS/JS) y soporte a proyectos.'
                ],
                en: [
                    'Web development and maintenance.',
                    'Classic frontend (HTML/CSS/JS) and project support.'
                ]
            }
        }
    ]
};

const clientsData = [
    {
        logo: 'img/guess.jpg',
        name: { es: 'GUESS', en: 'GUESS' },
        client: { es: 'Retail / Fashion e-commerce', en: 'Retail / Fashion e-commerce' },
        stack: ['SFCC', 'JavaScript', 'ISML', 'OCAPI', 'CI/CD'],
        summary: {
            es: 'Liderazgo técnico en una plataforma SFCC de moda. Entrega continua y mejoras de performance.',
            en: 'Technical leadership on a fashion SFCC platform. Continuous delivery and performance improvements.'
        },
        highlights: {
            es: [
                'Liderazgo técnico: revisiones, estándares y soporte a releases.',
                'Mejoras de performance y estabilidad en flujos críticos.',
                'Integraciones con servicios externos (pagos, analítica, feeds).'
            ],
            en: [
                'Technical leadership: reviews, standards and release support.',
                'Performance and stability improvements on critical flows.',
                'Integrations with external services (payments, analytics, feeds).'
            ]
        },
        links: []
    },
    {
        logo: 'img/roche.jpg',
        name: { es: 'Roche', en: 'Roche' },
        client: { es: 'Enterprise / Healthcare', en: 'Enterprise / Healthcare' },
        stack: ['SFCC', 'APIs', 'CI/CD', 'SSO'],
        summary: {
            es: 'Arquitectura de solución y coordinación técnica con foco en integraciones y robustez operativa.',
            en: 'Solution architecture and technical coordination focused on integrations and operational robustness.'
        },
        highlights: {
            es: [
                'Definición de arquitectura y decisiones técnicas.',
                'Diseño/seguimiento de integraciones con sistemas internos y externos.',
                'Buenas prácticas de seguridad, control de cambios y calidad de entrega.'
            ],
            en: [
                'Architecture definition and technical decision-making.',
                'Integration design and follow-up with internal and external systems.',
                'Security best practices, change control and delivery quality.'
            ]
        },
        links: []
    },
    {
        logo: 'img/affinity.jpg',
        name: { es: 'Affinity', en: 'Affinity' },
        client: { es: 'Global brand / Consumer goods', en: 'Global brand / Consumer goods' },
        stack: ['SFCC', 'JavaScript', 'OCAPI', 'Jobs', 'CI/CD'],
        summary: {
            es: 'Evolución de plataforma e-commerce con foco en escalabilidad, catálogo y operación multi-mercado.',
            en: 'Ecommerce platform evolution focused on scalability, catalog and multi-market operations.'
        },
        highlights: {
            es: [
                'Arquitectura para crecimiento de catálogo y necesidades multi-mercado.',
                'Procesos técnicos y automatizaciones (jobs, mantenimiento, despliegues).',
                'Integraciones con servicios externos y mejora continua del delivery.'
            ],
            en: [
                'Architecture for catalog growth and multi-market needs.',
                'Technical processes and automation (jobs, maintenance, deployments).',
                'External integrations and continuous delivery improvements.'
            ]
        },
        links: []
    }
    ,
    {
        logo: 'img/suarez.jpg',
        name: { es: 'Suarez', en: 'Suarez' },
        client: { es: 'Luxury / Jewelry e-commerce', en: 'Luxury / Jewelry e-commerce' },
        stack: ['SFCC', 'JavaScript', 'ISML', 'OCAPI', 'Analytics'],
        summary: {
            es: 'Soporte tecnico y evolucion de una plataforma SFCC en el sector lujo. Optimizacion de catalogo y conversion.',
            en: 'Technical support and evolution of an SFCC platform in luxury retail. Catalog and conversion optimization.'
        },
        highlights: {
            es: [
                'Mejoras de rendimiento en paginas de producto y checkout.',
                'Ajustes de catalogo, feeds y merchandising.',
                'Integraciones con analitica y servicios de terceros.'
            ],
            en: [
                'Performance improvements on product pages and checkout.',
                'Catalog, feeds and merchandising refinements.',
                'Integrations with analytics and third-party services.'
            ]
        },
        links: []
    }
];

const reviewsData = [
    {
        role: { es: 'Project Manager', en: 'Project Manager' },
        company: { es: 'OSF Digital', en: 'OSF Digital' },
        context: { es: 'Jun 2023', en: 'Jun 2023' },
        quote: {
            es: '... Cuestionó procesos establecidos desde hacía tiempo cuando veía una forma mejor de trabajar y, por tanto, mejoró las tareas de cara al futuro. Es un gran comunicador independientemente de lo técnico (o no técnico, en muchos casos) que seas. Se tomó el tiempo de entender y documentar a fondo las tareas y siempre fue más allá para apoyar a los equipos y a nuestros clientes. ...',
            en: '... He questioned long established processes when he could see a better way of working and therefore improved tasks for the foreseeable future. He is a great communicator no matter how technical (or non-techncial in many cases!) you are. He took the time to thoroughly understand and document tasks and was always going above and beyond to support the teams and our customers. ...'
        }
    },
    {
        role: { es: 'Technical Director', en: 'Technical Director' },
        company: { es: 'OSF Digital', en: 'OSF Digital' },
        context: { es: 'Jun 2023', en: 'Jun 2023' },
        quote: {
            es: '... Los comentarios positivos de todos los clientes y de los miembros del equipo en otros roles (PMs, BAs, Devs) destacaron lo buen compañero de equipo que es Daniel. Esto es un testimonio del conocimiento de Daniel sobre Salesforce Commerce Cloud y el eCommerce en general. Un arquitecto de soluciones técnico sólido con grandes habilidades de comunicación (¡ES y EN!) ...',
            en: '... Positive feedback from all clients and team members in other roles (PMs, BAs, Devs) all highlighted how much of a great team member Daniel is. This is testament to Daniel\'s knowledge of Salesforce Commerce Cloud and eCommerce in general. A strong technical SA which great communication skills (ES and EN!) ...'
        }
    },
    {
        role: { es: 'Global IT Ecommerce Manager', en: 'Global IT Ecommerce Manager' },
        company: { es: 'GUESS', en: 'GUESS' },
        context: { es: 'Dec 2020', en: 'Dec 2020' },
        quote: {
            es: 'Daniel es súper competente y muy comprometido con su trabajo, fue un placer trabajar con él en este proyecto. Sin duda fue un miembro clave del mismo.',
            en: 'Daniel is super skilled and very commited on his job, it was nice to work with him on this project! With no doubts a key member of it.'
        }
    },
    {
        role: { es: 'SFCC Architect', en: 'SFCC Architect' },
        company: { es: 'OSF Digital', en: 'OSF Digital' },
        context: { es: 'Nov 2020', en: 'Nov 2020' },
        quote: {
            es: 'Trabajé en varios proyectos con Daniel y puedo decir que su trabajo es muy bueno. Además, tiene muy buenas habilidades manejando proyectos complejos y sabe trabajar bajo presión. Siempre pensando en equipo y enfocado en entregar proyectos a tiempo con gran calidad.',
            en: 'I worked in several projects with Daniel and I can say his work is pretty good. Furthermore he has very good skills handling complex projects and knows how to work under pressure. Always thinking in team and focused on deliver projects on time with great quality.'
        }
    }
];


const i18n = {
    es: {
        'nav.about': 'Sobre mí',
        'nav.experience': 'Experiencia',
        'nav.clients': 'Clientes',
        'nav.reviews': 'Opiniones',

        'hero.title': 'Soluciones e-commerce escalables, rápidas y listas para producción.',
        'hero.lead': 'Más de 8 años de experiencia desarrollando ecommerce websites. En los últimos 6, liderando equipos como Solution Architect / Technical Lead en Salesforce Commerce Cloud.',
        'hero.badge1.k': '8+ años',
        'hero.badge1.v': 'experiencia e-commerce',
        'hero.badge2.k': '6 años',
        'hero.badge2.v': 'liderando equipos',
        'hero.badge3.k': 'SFCC',
        'hero.badge3.v': 'especialización principal',

        'profile.role': 'Solution Architect (Freelancer) · Kodly',
        'profile.location': 'Barcelona, Catalonia, Spain',
        'profile.languages': 'Idiomas: Español / Inglés (bilingüe)',

        'about.title': 'Sobre mí',
        'about.focusTitle': 'Especialidad',
        'about.certsTitle': 'Certificaciones',
        'about.eduTitle': 'Educación',

        'exp.title': 'Experiencia',
        'clients.title': 'Clientes',
        'reviews.title': 'Opiniones',
        'reviews.prev': 'Anterior',
        'reviews.next': 'Siguiente',

        'banner.title': '¿Te encaja mi perfil?',
        'banner.sub': 'Escríbeme por LinkedIn y te respondo rápido.',
        'banner.cta': 'Contactar en LinkedIn'
    },
    en: {
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.clients': 'Clients',
        'nav.reviews': 'Reviews',

        'hero.title': 'Scalable, fast ecommerce solutions ready for production.',
        'hero.lead': '8+ years of experience building ecommerce websites. In the last 6 years, leading teams as a Solution Architect / Technical Lead on Salesforce Commerce Cloud.',
        'hero.badge1.k': '8+ years',
        'hero.badge1.v': 'ecommerce experience',
        'hero.badge2.k': '6 years',
        'hero.badge2.v': 'leading teams',
        'hero.badge3.k': 'SFCC',
        'hero.badge3.v': 'primary specialization',

        'profile.role': 'Solution Architect (Freelancer) · Kodly',
        'profile.location': 'Barcelona, Catalonia, Spain',
        'profile.languages': 'Languages: Spanish / English (bilingual)',

        'about.title': 'About',
        'about.focusTitle': 'Focus',
        'about.certsTitle': 'Certifications',
        'about.eduTitle': 'Education',

        'exp.title': 'Experience',
        'clients.title': 'Clients',
        'reviews.title': 'Reviews',
        'reviews.prev': 'Previous',
        'reviews.next': 'Next',

        'banner.title': 'Interested in my profile?',
        'banner.sub': 'Message me on LinkedIn and I will get back to you quickly.',
        'banner.cta': 'Contact on LinkedIn'
    }
};

const els = {
    focusList: document.getElementById('focusList'),
    certList: document.getElementById('certList'),
    eduList: document.getElementById('eduList'),
    experienceList: document.getElementById('experienceList'),
    clientsList: document.getElementById('clientsList'),
    reviewsList: document.getElementById('reviewsList'),
    reviewsPrev: document.getElementById('reviewsPrev'),
    reviewsNext: document.getElementById('reviewsNext'),
    langES: document.getElementById('langES'),
    langEN: document.getElementById('langEN'),
    linkedinCta: document.getElementById('linkedinCta')
};

function setupImageModal() {
    const EMPTY_IMG = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
    const modal = document.createElement('div');
    modal.className = 'img-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-hidden', 'true');

    const img = document.createElement('img');
    img.alt = '';
    img.src = EMPTY_IMG;
    modal.appendChild(img);
    document.body.appendChild(modal);

    function openImage(target) {
        img.src = target.currentSrc || target.src;
        img.alt = target.alt || '';
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.setProperty('--scrollbar-width', `${scrollBarWidth}px`);
        document.body.classList.add('no-scroll');
    }

    function closeImage() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        img.src = EMPTY_IMG;
        img.alt = '';
        document.body.classList.remove('no-scroll');
        document.body.style.removeProperty('--scrollbar-width');
    }

    document.addEventListener('click', (e) => {
        const target = e.target;
        if (target instanceof HTMLImageElement) {
            if (target.matches('.avatar img')) {
                e.preventDefault();
                openImage(target);
            }
            return;
        }

        if (target === modal) {
            closeImage();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeImage();
        }
    });
}

function escapeHtml(str) {
    return String(str)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

function getSavedLang() {
    const v = localStorage.getItem('lang');
    return v === 'en' ? 'en' : 'es';
}

function setSavedLang(lang) {
    localStorage.setItem('lang', lang);
}

function applyI18n(lang) {
    const dict = i18n[lang] || i18n.es;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const val = dict[key];
        if (typeof val === 'string') {
            el.textContent = val;
        }
    });

    if (els.langES && els.langEN) {
        const isES = lang === 'es';
        els.langES.setAttribute('aria-pressed', isES ? 'true' : 'false');
        els.langEN.setAttribute('aria-pressed', isES ? 'false' : 'true');
    }
}

function renderProfile(lang) {
    if (els.focusList) {
        els.focusList.innerHTML = profileData.focus[lang]
            .map((x) => `<li>${escapeHtml(x)}</li>`)
            .join('');
    }

    if (els.certList) {
        els.certList.innerHTML = profileData.certifications
            .map((c) => {
                const img = c.logo
                    ? `<img class="inline-logo" src="${escapeHtml(c.logo)}" alt="${escapeHtml(c.issuer)} logo" loading="lazy" decoding="async" />`
                    : '';
                return `<li class="li-with-logo">${img}<span>${escapeHtml(c.title)} · ${escapeHtml(c.issuer)} (${escapeHtml(c.issued)})</span></li>`;
            })
            .join('');
    }

    if (els.eduList) {
        els.eduList.innerHTML = profileData.education
            .map((e) => {
                const degree = e.degree[lang] || e.degree.es;
                return `<li><strong>${escapeHtml(e.school)}</strong><br />${escapeHtml(degree)}</li>`;
            })
            .join('');
    }

    if (els.experienceList) {
        const grouped = [];
        let current = null;

        profileData.experience.forEach((x) => {
            if (!current || current.company !== x.company) {
                current = { company: x.company, logo: x.logo, items: [x] };
                grouped.push(current);
                return;
            }

            current.items.push(x);
        });

        const getCompanyTotalPeriod = (items) => {
            if (!items.length) return '';
            const first = items[0].period || '';
            const last = items[items.length - 1].period || '';
            const firstParts = first.split(' - ');
            const lastParts = last.split(' - ');
            const end = firstParts[1] ? firstParts[1].trim() : first.trim();
            const start = lastParts[0] ? lastParts[0].trim() : last.trim();
            return start && end ? `${start} - ${end}` : '';
        };

        els.experienceList.innerHTML = grouped
            .map((g) => {
                const companyLogo = g.logo
                    ? `<img class="company-logo" src="${escapeHtml(g.logo)}" alt="${escapeHtml(g.company)} logo" loading="lazy" decoding="async" />`
                    : '';
                const showTotal = g.company === 'OSF Digital';
                const totalPeriod = showTotal ? getCompanyTotalPeriod(g.items) : '';

                const rolesHtml = g.items
                    .map((r) => {
                        const role = r.role[lang] || r.role.es;
                        const location = r.location[lang] || r.location.es;

                        const firstTag = (r.tags || [])[0];
                        const titlePill = firstTag ? `<span class="pill pill-inline">${escapeHtml(firstTag)}</span>` : '';
                        const pills = (r.tags || []).slice(1)
                            .map((t) => `<span class="pill">${escapeHtml(t)}</span>`)
                            .join('');

                        const bullets = (r.bullets[lang] || r.bullets.es || [])
                            .map((b) => `<li>${escapeHtml(b)}</li>`)
                            .join('');

                        return `
                            <div class="role-block">
                                <h3 class="role-title">${escapeHtml(role)}${titlePill}</h3>
                                <div class="meta role-meta">
                                    <span>${escapeHtml(r.period)}</span>
                                    <span aria-hidden="true">·</span>
                                    <span>${escapeHtml(location)}</span>
                                </div>


                                ${pills ? `<div class="pills">${pills}</div>` : ''}

                                <ul class="role-list">
                                    ${bullets}
                                </ul>
                            </div>
                        `;
                    })
                    .join('');

                const cardClass = g.company === 'OSF Digital' ? 'card card-osf' : 'card';

                return `
                    <article class="${cardClass}">
                        <div class="card-top">
                            ${companyLogo}
                            <div class="card-top-text">
                                <div class="company-title">
                                    <span class="company-name">${escapeHtml(g.company)}</span>
                                </div>
                            </div>
                        </div>

                        ${showTotal && totalPeriod ? `
                            <div class="meta role-meta company-total">
                                <span>${escapeHtml(totalPeriod)}</span>
                            </div>
                        ` : ''}

                        <div class="roles">
                            ${rolesHtml}
                        </div>
                    </article>
                `;
            })
            .join('');
    }
}

function renderClients(lang) {
    if (!els.clientsList) return;

    els.clientsList.innerHTML = '';

    clientsData.forEach((p) => {
        const name = p.name[lang] || p.name.es;
        const client = p.client[lang] || p.client.es;
        const summary = p.summary[lang] || p.summary.es;
        const highlights = (p.highlights[lang] || p.highlights.es || []);
        const stack = (p.stack || []);
        const links = (p.links || []).filter((x) => x && x.href);

        const card = document.createElement('article');
        card.className = 'card';

        card.innerHTML = `
            <div class="meta">
                <span>${escapeHtml(client)}</span>
            </div>

            ${p.logo ? `
                <div class="client-top">
                    <img class="client-logo" src="${escapeHtml(p.logo)}" alt="${escapeHtml(name)} logo" loading="lazy" decoding="async" />
                    <h3 class="client-title">${escapeHtml(name)}</h3>
                </div>
            ` : `
                <h3>${escapeHtml(name)}</h3>
            `}
            <p>${escapeHtml(summary)}</p>

            <div class="client-block">
                <div class="pills">
                    ${stack.map((s) => `<span class="pill">${escapeHtml(s)}</span>`).join('')}
                </div>
            </div>

            <div class="client-block">
                <div class="client-label">${lang === 'es' ? 'Responsabilidades' : 'Responsibilities'}</div>
                <ul class="client-list">
                    ${highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join('')}
                </ul>
            </div>

            ${links.length ? `
                <div class="client-block">
                    <div class="client-label">${lang === 'es' ? 'Enlaces' : 'Links'}</div>
                    <div class="row">
                        ${links.map((l) => `
                            <a class="btn btn-ghost btn-small" href="${escapeHtml(l.href)}" target="_blank" rel="noreferrer">
                                ${escapeHtml(l.label)}
                            </a>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        `;

        els.clientsList.appendChild(card);
    });
}

function renderReviews(lang) {
    if (!els.reviewsList) return;

    els.reviewsList.innerHTML = reviewsData
        .map((r) => {
            const role = r.role[lang] || r.role.es;
            const company = r.company[lang] || r.company.es;
            const context = r.context[lang] || r.context.es;
            const quote = r.quote[lang] || r.quote.es;

            return `
                <article class="review-card">
                    <p class="review-quote">“${escapeHtml(quote)}”</p>
                    <div class="review-meta">${escapeHtml(role)} · ${escapeHtml(company)} · ${escapeHtml(context)}</div>
                </article>
            `;
        })
        .join('');
}

function wireReviewsSlider() {
    if (!els.reviewsList || !els.reviewsPrev || !els.reviewsNext) return;

    const scrollByCard = (dir) => {
        const card = els.reviewsList.querySelector('.review-card');
        if (!card) return;
        const cardWidth = card.getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(els.reviewsList).columnGap || 0);
        els.reviewsList.scrollBy({ left: dir * (cardWidth + gap), behavior: 'smooth' });
    };

    els.reviewsPrev.addEventListener('click', () => scrollByCard(-1));
    els.reviewsNext.addEventListener('click', () => scrollByCard(1));
}

function highlightSection(target) {
    const head = target.querySelector('.section-head h2') || target.querySelector('h2');
    if (!head) return;

    head.classList.remove('section-flash');
    void head.offsetWidth;
    head.classList.add('section-flash');
}

function wireNavHighlight() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            if (!href || href === '#') return;

            const id = href.slice(1);
            const target = document.getElementById(id);
            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            window.setTimeout(() => highlightSection(target), 250);
        });
    });
}

function setLanguage(lang) {
    applyI18n(lang);
    renderProfile(lang);
    renderClients(lang);
    renderReviews(lang);
    setSavedLang(lang);

    if (els.linkedinCta) {
        els.linkedinCta.href = linkedinUrls[lang];
    }

    if (els.reviewsPrev && els.reviewsNext) {
        const dict = i18n[lang] || i18n.es;
        els.reviewsPrev.setAttribute('aria-label', dict['reviews.prev']);
        els.reviewsNext.setAttribute('aria-label', dict['reviews.next']);
    }
}

function init() {
    const lang = getSavedLang();

    if (els.langES && els.langEN) {
        els.langES.addEventListener('click', () => setLanguage('es'));
        els.langEN.addEventListener('click', () => setLanguage('en'));
    }

    setupImageModal();
    wireReviewsSlider();
    wireNavHighlight();
    setLanguage(lang);
}

init();
