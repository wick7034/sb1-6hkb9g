export interface DomainListing {
  name: string;
  description: string;
  price?: number;
  category: string;
  featured?: boolean;
  highlights?: string[];
}

export const domains: Record<string, DomainListing> = {
  "zklabs.xyz": {
    name: "zkLabs.xyz",
    description: "Perfect domain for your Zero-Knowledge or blockchain research project",
    price: 2500,
    category: "Crypto & Blockchain",
    featured: true,
    highlights: [
      "Short and memorable name",
      "Perfect for ZK-related projects",
      "Trending technology sector",
      "Ideal for research labs"
    ]
  },
  // Add more domains as needed
};

export const getDomainInfo = (hostname: string): DomainListing | null => {
  // Remove 'www.' if present and convert to lowercase
  const cleanHostname = hostname.replace(/^www\./, '').toLowerCase();
  return domains[cleanHostname] || null;
};