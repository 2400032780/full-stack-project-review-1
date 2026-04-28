import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  CloudRain,
  Droplets,
  TrendingDown,
  CreditCard,
  Cpu,
  Truck,
  ThermometerSun,
  Building2,
} from "lucide-react";

export function FarmingProblems() {
  const problems = [
    {
      icon: ThermometerSun,
      title: "Climate Change",
      category: "Environmental",
      description:
        "Unpredictable weather patterns, extreme temperatures, and irregular rainfall are making traditional farming practices increasingly challenging.",
      impact: [
        "Crop failure due to unexpected frost or heatwaves",
        "Disrupted growing seasons affecting yield",
        "Increased pest and disease outbreaks",
        "Soil degradation and erosion",
      ],
      solutions: [
        "Adopt climate-resilient crop varieties",
        "Implement water conservation techniques",
        "Use weather forecasting tools and technology",
        "Diversify crop selection to reduce risk",
        "Practice conservation agriculture",
      ],
    },
    {
      icon: Droplets,
      title: "Water Scarcity",
      category: "Resources",
      description:
        "Declining groundwater levels and irregular monsoons are creating severe water shortages for irrigation and livestock.",
      impact: [
        "Reduced crop yields and productivity",
        "Higher costs for water extraction",
        "Conflicts over water resources",
        "Livestock health issues",
      ],
      solutions: [
        "Install drip irrigation systems",
        "Harvest rainwater for storage",
        "Use drought-resistant crop varieties",
        "Implement micro-irrigation techniques",
        "Practice soil moisture conservation",
      ],
    },
    {
      icon: TrendingDown,
      title: "Market Price Fluctuation",
      category: "Economic",
      description:
        "Volatile market prices and lack of price information leave farmers vulnerable to exploitation and uncertain income.",
      impact: [
        "Unpredictable farm income",
        "Difficulty in financial planning",
        "Exploitation by middlemen",
        "Loss of investment in crops",
      ],
      solutions: [
        "Join farmer cooperatives for better bargaining",
        "Access market price information platforms",
        "Establish direct market linkages",
        "Use government minimum support price schemes",
        "Diversify income sources",
      ],
    },
    {
      icon: CreditCard,
      title: "Debt and Financial Problems",
      category: "Economic",
      description:
        "High input costs, crop failures, and lack of access to formal credit push farmers into cycles of debt.",
      impact: [
        "Dependence on informal lenders with high interest",
        "Mental stress and health issues",
        "Unable to invest in farm improvements",
        "Inter-generational debt transfer",
      ],
      solutions: [
        "Access government agricultural loans",
        "Enroll in crop insurance schemes",
        "Reduce input costs through organic methods",
        "Seek financial literacy training",
        "Join self-help groups for savings",
      ],
    },
    {
      icon: Cpu,
      title: "Lack of Technology Adoption",
      category: "Technology",
      description:
        "Limited awareness and access to modern agricultural technology prevents productivity improvements.",
      impact: [
        "Lower yields compared to potential",
        "Higher labor costs and time",
        "Inefficient resource utilization",
        "Competitive disadvantage",
      ],
      solutions: [
        "Government subsidies for agricultural equipment",
        "Training on modern farming techniques",
        "Mobile apps for agricultural guidance",
        "Community demonstration farms",
        "Affordable precision farming tools",
      ],
    },
    {
      icon: Truck,
      title: "Supply Chain Issues",
      category: "Infrastructure",
      description:
        "Poor infrastructure and fragmented supply chains lead to post-harvest losses and reduced farmer margins.",
      impact: [
        "30-40% post-harvest losses",
        "Spoilage of perishable crops",
        "Dependence on middlemen",
        "Limited market access",
      ],
      solutions: [
        "Develop cold storage facilities",
        "Improve rural road infrastructure",
        "Create farmer-producer organizations",
        "Establish direct farm-to-consumer channels",
        "Use digital platforms for market access",
      ],
    },
    {
      icon: CloudRain,
      title: "Irregular Monsoons",
      category: "Environmental",
      description:
        "Delayed or insufficient monsoon rains severely affect rain-fed agriculture and water availability.",
      impact: [
        "Delayed sowing and planting",
        "Crop stress and reduced yields",
        "Livestock fodder shortage",
        "Groundwater depletion",
      ],
      solutions: [
        "Invest in irrigation infrastructure",
        "Practice water-efficient farming",
        "Use monsoon forecasting services",
        "Grow short-duration crop varieties",
        "Implement watershed management",
      ],
    },
    {
      icon: Building2,
      title: "Land Fragmentation",
      category: "Structural",
      description:
        "Division of agricultural land into smaller plots reduces economic viability and mechanization potential.",
      impact: [
        "Inefficient land use",
        "Difficulty in using machinery",
        "Higher per-unit production costs",
        "Reduced economies of scale",
      ],
      solutions: [
        "Promote cooperative farming",
        "Land consolidation programs",
        "Contract farming arrangements",
        "Shared machinery services",
        "High-value crop cultivation",
      ],
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Environmental: "bg-blue-100 text-blue-800",
      Resources: "bg-cyan-100 text-cyan-800",
      Economic: "bg-amber-100 text-amber-800",
      Technology: "bg-purple-100 text-purple-800",
      Infrastructure: "bg-pink-100 text-pink-800",
      Structural: "bg-gray-100 text-gray-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Challenges Facing Modern Agriculture
            </h1>
            <p className="text-lg text-gray-600">
              Understanding the problems farmers face is essential to developing
              effective solutions and supporting sustainable agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Problems Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all shadow-sm rounded-xl"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <problem.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className={getCategoryColor(problem.category)}>
                      {problem.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{problem.title}</CardTitle>
                  <CardDescription className="text-base">
                    {problem.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Impact */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Impact on Farmers:
                    </h4>
                    <ul className="space-y-1.5">
                      {problem.impact.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 flex items-start gap-2"
                        >
                          <span className="text-red-500 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Suggested Solutions:
                    </h4>
                    <ul className="space-y-1.5">
                      {problem.solutions.map((solution, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 flex items-start gap-2"
                        >
                          <span className="text-primary mt-0.5">✓</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Together We Can Make a Difference
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join our community to learn more solutions and connect with experts
            who can help address these challenges.
          </p>
        </div>
      </section>
    </div>
  );
}
