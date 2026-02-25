import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Leaf,
  RefreshCw,
  Layers,
  Droplet,
  Flower2,
  Waves,
  CheckCircle2,
} from "lucide-react";

export function LocalMethods() {
  const methods = [
    {
      id: "organic",
      icon: Leaf,
      title: "Organic Farming",
      subtitle: "Natural and Chemical-Free Agriculture",
      image: "https://images.unsplash.com/photo-1722810767143-40a6a7a74b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZyUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzcxOTQ4ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Organic farming relies on natural processes and materials to grow crops without synthetic chemicals, promoting soil health and biodiversity.",
      explanation:
        "This method avoids synthetic pesticides, fertilizers, and GMOs. Instead, it uses compost, green manure, biological pest control, and crop rotation to maintain soil fertility and control pests.",
      benefits: [
        "Healthier soil with better structure and biodiversity",
        "No chemical residues in food products",
        "Better for environment and water quality",
        "Premium prices in organic markets",
        "Sustainable long-term farming",
      ],
      comparison: {
        traditional: [
          "Uses chemical fertilizers and pesticides",
          "Higher immediate yields",
          "Soil degradation over time",
          "Higher input costs",
        ],
        modern: [
          "Natural fertilizers and pest control",
          "Gradual yield improvement",
          "Soil health improvement",
          "Lower long-term costs",
        ],
      },
    },
    {
      id: "rotation",
      icon: RefreshCw,
      title: "Crop Rotation",
      subtitle: "Systematic Seasonal Crop Changes",
      image: "https://images.unsplash.com/photo-1741665604513-392643cd42fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9wJTIwcm90YXRpb24lMjBmaWVsZHxlbnwxfHx8fDE3NzE5OTYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Crop rotation involves growing different types of crops in the same area across sequential seasons to improve soil health and reduce pest problems.",
      explanation:
        "By rotating crops with different nutrient needs and pest vulnerabilities, farmers can break pest cycles, improve soil structure, and reduce the need for chemical inputs.",
      benefits: [
        "Breaks pest and disease cycles naturally",
        "Improves soil nutrient balance",
        "Reduces dependency on fertilizers",
        "Increases overall farm productivity",
        "Minimizes soil erosion",
      ],
      comparison: {
        traditional: [
          "Same crop every season (monoculture)",
          "Increased pest and disease pressure",
          "Nutrient depletion in soil",
          "Higher chemical dependency",
        ],
        modern: [
          "Different crops each season",
          "Natural pest management",
          "Balanced soil nutrients",
          "Reduced chemical use",
        ],
      },
    },
    {
      id: "mixed",
      icon: Layers,
      title: "Mixed Cropping",
      subtitle: "Multiple Crops Together",
      image: "https://images.unsplash.com/photo-1681512076989-03909e06d1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMGNyb3BwaW5nJTIwaW50ZXJjcm9wcGluZ3xlbnwxfHx8fDE3NzE5OTY1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Growing two or more crops simultaneously on the same field maximizes land use and provides multiple income sources.",
      explanation:
        "This traditional practice combines crops with complementary growth patterns, such as tall and short crops, or deep and shallow-rooted plants, to optimize space and resources.",
      benefits: [
        "Better land utilization",
        "Risk diversification across crops",
        "Natural pest control through diversity",
        "Multiple harvest opportunities",
        "Improved soil cover and health",
      ],
      comparison: {
        traditional: [
          "Single crop per field",
          "All risk concentrated in one crop",
          "Incomplete land utilization",
          "Single harvest period",
        ],
        modern: [
          "Multiple crops per field",
          "Risk spread across crops",
          "Optimal land use",
          "Multiple harvests",
        ],
      },
    },
    {
      id: "drip",
      icon: Droplet,
      title: "Drip Irrigation",
      subtitle: "Precision Water Delivery",
      image: "https://images.unsplash.com/photo-1738598665698-7fd7af4b5e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmlwJTIwaXJyaWdhdGlvbiUyMHN5c3RlbXxlbnwxfHx8fDE3NzE5OTYwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Drip irrigation delivers water directly to plant roots through a network of pipes and emitters, minimizing water waste.",
      explanation:
        "This system provides water slowly and precisely where needed, reducing evaporation and runoff while maintaining optimal soil moisture levels.",
      benefits: [
        "70-80% water savings compared to flood irrigation",
        "Reduced weed growth",
        "Lower energy costs for pumping",
        "Better crop quality and yield",
        "Suitable for water-scarce regions",
      ],
      comparison: {
        traditional: [
          "Flood or furrow irrigation",
          "40-50% water efficiency",
          "High evaporation losses",
          "Promotes weed growth",
        ],
        modern: [
          "Targeted drip irrigation",
          "90-95% water efficiency",
          "Minimal evaporation",
          "Reduced weed problems",
        ],
      },
    },
    {
      id: "fertilizers",
      icon: Flower2,
      title: "Natural Fertilizers",
      subtitle: "Organic Soil Enrichment",
      image: "https://images.unsplash.com/photo-1686579341853-2effa68407e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwZmVydGlsaXplciUyMGNvbXBvc3R8ZW58MXx8fHwxNzcxOTk2MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Using compost, manure, and green manure to enrich soil naturally, improving fertility without chemicals.",
      explanation:
        "Natural fertilizers include animal waste, crop residues, kitchen waste compost, and nitrogen-fixing green manures that provide slow-release nutrients.",
      benefits: [
        "Improves soil organic matter",
        "Enhances water retention capacity",
        "Zero chemical pollution",
        "Cost-effective and sustainable",
        "Promotes beneficial soil microorganisms",
      ],
      comparison: {
        traditional: [
          "Chemical NPK fertilizers",
          "Quick nutrient release",
          "Soil acidification over time",
          "Ongoing purchase costs",
        ],
        modern: [
          "Organic compost and manure",
          "Slow, steady nutrient release",
          "Improves soil structure",
          "Can be produced on-farm",
        ],
      },
    },
    {
      id: "traditional",
      icon: Waves,
      title: "Traditional Irrigation",
      subtitle: "Time-Tested Water Systems",
      image: "https://images.unsplash.com/photo-1761201509055-30c04b68901c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGlycmlnYXRpb24lMjB3YXRlcnxlbnwxfHx8fDE3NzE5OTYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Traditional irrigation methods like canals, tanks, and wells that have sustained agriculture for centuries.",
      explanation:
        "These systems include step wells, tanks, check dams, and canal networks that harvest and distribute water using gravity and traditional engineering.",
      benefits: [
        "No electricity or fuel costs",
        "Community-managed resources",
        "Groundwater recharge",
        "Climate-appropriate design",
        "Cultural and historical significance",
      ],
      comparison: {
        traditional: [
          "Gravity-based water flow",
          "Community maintenance",
          "Natural water storage",
          "Seasonal availability",
        ],
        modern: [
          "Motor pumps required",
          "Individual operation",
          "Groundwater depletion",
          "Year-round extraction",
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge className="bg-primary text-white">
              Traditional Wisdom
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Local Agriculture Methods
            </h1>
            <p className="text-lg text-gray-600">
              Explore time-tested farming techniques that combine traditional
              wisdom with sustainable practices for modern agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Methods Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue={methods[0].id} className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto gap-2">
              {methods.map((method) => (
                <TabsTrigger
                  key={method.id}
                  value={method.id}
                  className="flex flex-col items-center gap-1 py-3"
                >
                  <method.icon className="h-5 w-5" />
                  <span className="text-xs">{method.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {methods.map((method) => (
              <TabsContent key={method.id} value={method.id} className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-2">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {method.title}
                  </h2>
                  <p className="text-lg text-gray-600">{method.subtitle}</p>
                </div>

                {/* Image */}
                <div className="rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
                  <ImageWithFallback
                    src={method.image}
                    alt={method.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                {/* Description & Explanation */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  <Card className="rounded-xl">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">
                        Overview
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {method.description}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="rounded-xl">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">
                        How It Works
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {method.explanation}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Benefits */}
                <Card className="max-w-6xl mx-auto rounded-xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                      Key Benefits
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {method.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Comparison */}
                <div className="max-w-6xl mx-auto">
                  <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900">
                    Comparison with Conventional Methods
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="rounded-xl border-2">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-xl">🏭</span>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900">
                            Conventional Method
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {method.comparison.traditional.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-gray-400 mt-0.5">•</span>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="rounded-xl border-2 border-primary">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Leaf className="h-5 w-5 text-primary" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900">
                            {method.title}
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {method.comparison.modern.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-primary mt-0.5">✓</span>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}