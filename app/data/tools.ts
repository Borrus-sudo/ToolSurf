export type Tool = {
    id: string;
    name: string;
    description: string;
    category: string;
    imgURL: string;
};

export const categories = [
    'All',
    'Libraries',
    'Design',
    'AI',
    'No-Code',
    'Startups',
    'Video',
    'E-commerce',
    'Social Media',
    'Coding',
];

export const tools: Tool[] = Array(100)
    .fill(undefined)
    .map((_, idx) => {
        return {
            id: idx.toString(),
            name: 'Random Product',
            description: 'Random',
            category: 'Finance',
            imgURL: 'https://framerusercontent.com/images/2jv5bAsJoSAhzX6TFO50udZTjE.webp',
        };
    });
