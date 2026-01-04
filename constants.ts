
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 's1',
    name: 'Executive Sourcing',
    tagline: 'Connect with elite professionals.',
    description: 'Bespoke talent acquisition for multinational leadership roles requiring surgical precision and global reach.',
    longDescription: 'Our talent acquisition methodology leverages over 14 years of industry data to identify, vet, and place high-performing executives in key roles. We specialize in cross-border hiring, ensuring that corporate culture and professional expertise align with your global vision.',
    price: 0, 
    category: 'Sourcing',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000',
    features: ['Board-Level Placement', 'Global Mobility Analysis', 'Succession Planning']
  },
  {
    id: 's2',
    name: 'Revenue Intelligence',
    tagline: 'Quality leads, intent-driven conversion.',
    description: 'Transforming data into intent. We build custom funnels that fill your enterprise pipeline with high-value prospects.',
    longDescription: 'We dont just find contacts; we architect revenue streams. Our lead generation strategy utilizes proprietary intent scoring to deliver highly qualified opportunities that are ready for immediate engagement.',
    price: 0,
    category: 'Marketing',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    features: ['Intent Scoring', 'CRM Architecture', 'Predictive Modeling']
  },
  {
    id: 's3',
    name: 'eComm Infrastructure',
    tagline: 'Scale your digital empire.',
    description: 'Strategic advisory for global eCommerce platforms, focusing on scalability and user experience.',
    longDescription: 'From high-scale headless architectures to omnichannel synchronicity, we provide the blueprint for digital dominance. Our focus is on long-term performance and robust backend integrations.',
    price: 0,
    category: 'Development',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000',
    features: ['Technical Advisory', 'Global Logistics Sync', 'Infrastructure Audit']
  },
  {
    id: 's4',
    name: 'Growth Strategy',
    tagline: 'Expand globally with precision.',
    description: 'Strategic market entry and brand localization for companies expanding across international borders.',
    longDescription: 'Navigate the complexities of international markets with a partner who understands the nuance of global scale. We provide market research and performance marketing blueprints that guarantee impact.',
    price: 0,
    category: 'Marketing',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000',
    features: ['Market Entry Roadmap', 'Localized Performance SEO', 'Global Compliance Strategy']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "The Architecture of Remote Leadership",
        date: "May 10, 2025",
        excerpt: "How multinational enterprises are redefining professional boundaries in the era of global intelligence.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-gray-800" },
                "The modern office is no longer defined by geography. For the elite professional, performance is enabled by technology and driven by strategic vision."
            ),
            React.createElement("p", { className: "mb-8 text-gray-600" },
                "As we advance through 2025, the ability to source and integrate talent across borders has become the ultimate competitive advantage for the multinational firm."
            )
        )
    }
];

export const BRAND_NAME = 'Talent Bridge';
export const PRIMARY_COLOR = 'gray-950'; 
export const ACCENT_COLOR = 'orange-500';
