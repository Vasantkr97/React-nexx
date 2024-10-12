export const pricingPlans = [
    {
        title: "Free Plan",
        price: 0,
        description: "For indivials and hobbyists",
        features: [
            "Up to 3 forms per month",
            "Basic AI form builder",
            "Basic form customization",
            "Data export in CSV format",
        ],
        isPopular: false,  
    },
    {
        title: "Hobby Plan",
        price: 4000,
        description: "Perfect for growing business nedding advanced features",
        features: [
            "Up to 100 forms per month",
            "Data export in CSV and Excel formats",
            "COnditional logic and branching",
            "Basic analytics and reporting",
        ],
        isPopular: true,  
    },
    {
        title: "Pro Plan",
        price: 10000,
        description: "For large business and enterprises with custom needs.",
        features: [
            "Unlimited forms per month",
            "Premium AI form suggestions",
            "Advanced conditional logic and branching",
            "API access for custom integrations",
        ],
        isPopular: false,  
    },
]