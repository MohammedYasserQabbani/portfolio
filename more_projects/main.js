const projects = [
    {
        type: 'Platform',
        name: 'Ataya Platform',
        description: 'An auction platform for horses and camels, supporting live auctions, payments, notifications, and multilingual services.',
        contribution: 'Requirements analysis, database design, and backend development.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'Firebase'],
        integrations: ['Telr Payment Gateway', 'Dream SMS Gateway'],
        logo: './img/logos/ataya.png',
        links: [
            { type: 'website', label: 'Website', url: 'https://ataya.sa' },
            { type: 'app-store', label: 'App Store', url: 'https://apps.apple.com/us/app/ataya-%D8%B9%D8%B7%D8%A7%D9%8A%D8%A7/id6758581280' },
            { type: 'google-play', label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=sta.sa.ataya.ataya' }
        ]
    },
    {
        type: 'Platform',
        name: 'Tamleek Platform',
        description: 'A fractional real estate investment platform for managing investment opportunities, purchases, wallets, and financial transactions.',
        contribution: 'Requirements analysis, database design, and backend development.',
        technologies: ['PHP', 'Laravel', 'MySQL'],
        integrations: ['REGA'],
        logo: './img/logos/tamleek.svg',
        links: [
            { type: 'website', label: 'Website', url: 'https://tamleek.maktab.sa/ar' }
        ]
    },
    {
        type: 'Platform',
        name: 'Mender Platform',
        description: 'A maintenance services platform connecting customers with service providers through service requests, real-time chat, payments, and notifications.',
        contribution: 'Requirements analysis, database design, and backend development.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'Pusher', 'Firebase'],
        integrations: ['PayTabs Payment Gateway', 'Dream SMS Gateway'],
        logo: './img/logos/mender.png',
        links: [
            { type: 'google-play', label: 'Google Play · User', url: 'https://play.google.com/store/apps/details?id=sta.mendar.mendar' },
            { type: 'google-play', label: 'Google Play · Provider', url: 'https://play.google.com/store/apps/details?id=sta.mendar.mendar_pro' }
        ]
    },
    {
        type: 'Platform',
        name: 'Aqartik Platform',
        description: 'A real estate platform for browsing and publishing licensed properties with listings, maps, and property requests.',
        contribution: 'Contributed to backend development, with primary responsibility for integrations with the Saudi Real Estate General Authority (REGA) and Nafath.',
        technologies: ['PHP', 'Laravel', 'MySQL'],
        integrations: ['REGA', 'Nafath'],
        logo: './img/logos/aqartik.png',
        links: [
            { type: 'website', label: 'Website', url: 'https://aqartik.com/' },
            { type: 'google-play', label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=sta.aqartik.aqartik' }
        ]
    },
    {
        type: 'Platform',
        name: 'Maktab Platform',
        description: 'A real estate platform for listing, managing, and renting licensed office spaces.',
        contribution: 'Contributed to backend development, with primary responsibility for integrations with the Saudi Real Estate General Authority (REGA) and Nafath.',
        technologies: ['PHP', 'Laravel', 'MySQL'],
        integrations: ['Nafath', 'REGA'],
        logo: './img/logos/maktab.png',
        links: [
            { type: 'website', label: 'Website', url: 'https://maktab.sa/' },
            { type: 'google-play', label: 'Google Play · Tenant', url: 'https://play.google.com/store/apps/details?id=sa.sta.maktab_tenant' },
            { type: 'google-play', label: 'Google Play · Lessor', url: 'https://play.google.com/store/apps/details?id=sa.sta.maktab_lessor' }
        ]
    },
    {
        type: 'Platform',
        name: 'Diaarna Platform',
        description: 'A property management and rental platform for reservations, payments, and financial operations.',
        contribution: 'Requirements analysis, database design, and backend development.',
        technologies: ['PHP', 'Laravel', 'MySQL'],
        logo: './img/logos/diaarna.png',
        links: [
            { type: 'website', label: 'Website', url: 'https://diaarna.com/' }
        ]
    },
    {
        type: 'Platform',
        name: 'WithU Platform',
        description: 'A property booking platform that enables users to discover and book properties while providing owners with property and booking management tools.',
        contribution: 'Requirements analysis, database design, and backend development.',
        technologies: ['PHP', 'Laravel', 'MySQL'],
        logo: './img/logos/withu.png',
        links: [
            { type: 'website', label: 'Website', url: 'https://withu.sa/' }
        ]
    }
];

const linkIcons = {
    website: 'fa-solid fa-arrow-up-right-from-square',
    'app-store': 'fa-brands fa-apple',
    'google-play': 'fa-brands fa-google-play'
};

function createLogo(project) {
    const panel = document.createElement('div');
    panel.className = 'logo-panel';

    const fallback = document.createElement('div');
    fallback.className = 'logo-fallback';
    fallback.hidden = Boolean(project.logo);

    const fallbackIcon = document.createElement('i');
    fallbackIcon.className = 'fa-regular fa-image';
    fallbackIcon.setAttribute('aria-hidden', 'true');

    const fallbackText = document.createElement('span');
    fallbackText.textContent = 'Logo not provided';

    fallback.append(fallbackIcon, fallbackText);

    if (project.logo) {
        const image = document.createElement('img');
        image.className = 'project-logo';
        image.src = project.logo;
        image.alt = `${project.name} logo`;
        image.loading = 'lazy';
        image.addEventListener('error', () => {
            image.hidden = true;
            fallback.hidden = false;
        });
        panel.append(image);
    }

    panel.append(fallback);
    return panel;
}

function createProjectLinks(project) {
    if (!project.links.length) {
        const status = document.createElement('p');
        status.className = 'no-public-links';
        status.textContent = 'No public link provided';
        return status;
    }

    const links = document.createElement('div');
    links.className = 'project-links';
    links.setAttribute('aria-label', `${project.name} links`);

    project.links.forEach((link) => {
        const anchor = document.createElement('a');
        anchor.className = 'project-link';
        anchor.href = link.url;
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
        anchor.setAttribute('aria-label', `${link.label} for ${project.name} (opens in a new tab)`);

        const icon = document.createElement('i');
        icon.className = linkIcons[link.type];
        icon.setAttribute('aria-hidden', 'true');

        const label = document.createElement('span');
        label.textContent = link.label;

        anchor.append(icon, label);
        links.append(anchor);
    });

    return links;
}

function createProjectCard(project) {
    const card = document.createElement('article');
    card.className = 'project-card';

    const content = document.createElement('div');
    content.className = 'project-content';


    const heading = document.createElement('h2');
    heading.className = 'project-name';
    heading.textContent = project.name;

    const description = document.createElement('p');
    description.className = 'project-description';
    description.textContent = project.description;

    content.append(heading, description);

    if (project.contribution) {
        const contribution = document.createElement('div');
        contribution.className = 'project-contribution';

        const contributionLabel = document.createElement('p');
        contributionLabel.className = 'contribution-label';
        contributionLabel.textContent = 'My contribution';

        const contributionText = document.createElement('p');
        contributionText.className = 'contribution-text';
        contributionText.textContent = project.contribution === 'Requirements analysis, database design, and backend development.'
            ? 'Requirements Analysis · Database Design · Backend Development'
            : project.contribution;

        contribution.append(contributionLabel, contributionText);
        content.append(contribution);
    }

    if (project.technologies?.length) {
        const technologies = document.createElement('div');
        technologies.className = 'project-technologies';

        const technologiesLabel = document.createElement('p');
        technologiesLabel.className = 'technologies-label';
        technologiesLabel.textContent = 'Technologies';

        const technologyTags = document.createElement('ul');
        technologyTags.className = 'technology-tags';
        technologyTags.setAttribute('aria-label', `${project.name} technologies`);

        project.technologies.forEach((technology) => {
            const technologyTag = document.createElement('li');
            technologyTag.className = 'technology-tag';
            technologyTag.textContent = technology;
            technologyTags.append(technologyTag);
        });

        technologies.append(technologiesLabel, technologyTags);
        content.append(technologies);
    }

    if (project.integrations?.length) {
        const integrations = document.createElement('div');
        integrations.className = 'project-integrations';

        const integrationsLabel = document.createElement('p');
        integrationsLabel.className = 'integrations-label';
        integrationsLabel.textContent = 'Integrations';

        const integrationTags = document.createElement('ul');
        integrationTags.className = 'integration-tags';
        integrationTags.setAttribute('aria-label', `${project.name} integrations`);

        project.integrations.forEach((integration) => {
            const integrationTag = document.createElement('li');
            integrationTag.className = 'integration-tag';
            integrationTag.textContent = integration;
            integrationTags.append(integrationTag);
        });

        integrations.append(integrationsLabel, integrationTags);
        content.append(integrations);
    }

    content.append(createProjectLinks(project));
    card.append(createLogo(project), content);

    return card;
}

const projectsGrid = document.querySelector('#projects-grid');
const projectCards = document.createDocumentFragment();

projects.forEach((project) => {
    projectCards.append(createProjectCard(project));
});

projectsGrid.append(projectCards);