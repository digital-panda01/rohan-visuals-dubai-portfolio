export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'social-media-post',
    title: 'Social Media Post',
    description: 'A showcase of creative social media post designs for various brands.',
    images: [
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=400&fit=crop'
    ],
    category: 'branding',
  },
  {
    id: 'restaurant-brand-identity',
    title: 'Restaurant Brand Identity',
    description: 'Traditional restaurant branding with modern twist, including menu design and signage.',
    images: [
      'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=400&fit=crop'
    ],
    category: 'branding',
  },
  {
    id: 'festival-post',
    title: 'Festival Post',
    description: 'Wishing joy and creativity in every festival.',
    images: [
      'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=500&h=400&fit=crop'
    ],
    category: 'social',
  },
  {
    id: 'community-event-coverage',
    title: 'Community Event Coverage',
    description: 'Documentation of local youth club activities and community engagement events.',
    images: [
      'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=400&fit=crop'
    ],
    category: 'community',
  },
  {
    id: 'wedding-photography',
    title: 'Wedding Photography',
    description: 'Romantic wedding photography capturing intimate moments and celebration highlights.',
    images: [
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&h=400&fit=crop'
    ],
    category: 'photography',
  },
  {
    id: 'nature-photography-series',
    title: 'Nature Photography Series',
    description: "Wildlife and landscape photography series showcasing Nepal's natural beauty.",
    images: [
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&h=400&fit=crop'
    ],
    category: 'photography',
  },
  {
    id: 'tech-startup-social-media',
    title: 'Tech Startup Social Media',
    description: 
      "Dynamic social media graphics for technology startup's product launch campaign.",
    images: [
      'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=500&h=400&fit=crop'
    ],
    category: 'social',
  },
  {
    id: 'cultural-festival-documentation',
    title: 'Cultural Festival Documentation',
    description: 'Comprehensive coverage of local cultural festival including performances and traditions.',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop'
    ],
    category: 'community',
  },
]; 