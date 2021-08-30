import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: 'ypoob9sl',
    dataset: 'production',
    token: 'skPSIgCEjQ7I7fLObStha2SAA13aZooHFoUQIWLB3LYYr60OyZ1SF7vUPPDZrAj2psmgDKxheWvGKNhZ7uPdeIMTGwljHGX8D6E2WAlBfJtFY7krLyrU8I3i6LxoXUUFNvciCHQqWJg70A1wsMazbQrmcZxaKOPI0FNzlqYyMd71tXn4JRBO',
    useCdn: true,
    ignoreBrowserTokenWarning: true,
})

export default client;