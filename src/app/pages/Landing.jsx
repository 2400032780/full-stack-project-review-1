import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  Sprout,
  Droplets,
  TrendingUp,
  Users,
  BookOpen,
  Shield,
  ArrowRight,
  Leaf,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Landing() {
  const problems = [
    {
      icon: Droplets,
      title: "Water Scarcity",
      description: "Addressing irrigation and water management challenges",
    },
    {
      icon: TrendingUp,
      title: "Price Fluctuation",
      description: "Market instability affecting farmer income",
    },
    {
      icon: Leaf,
      title: "Climate Change",
      description: "Adapting to unpredictable weather patterns",
    },
  ];

  const solutions = [
    {
      icon: BookOpen,
      title: "Expert Guidance",
      description: "Access agricultural experts for personalized advice",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with farmers and share best practices",
    },
    {
      icon: Sprout,
      title: "Sustainable Methods",
      description: "Learn organic and traditional farming techniques",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  FSAD-PS17 Platform
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Inspire Society About{" "}
                <span className="text-primary">Farming</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Empowering farmers with knowledge, resources, and connections to
                thrive in modern agriculture while preserving traditional wisdom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/signup">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/articles">Explore Articles</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1635831973943-41c27b6d7f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBmaWVsZCUyMGFncmljdWx0dXJlJTIwc3VucmlzZXxlbnwxfHx8fDE3NzE5OTYwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Farmer in field at sunrise"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Farming Importance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Farming Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Agriculture is the backbone of our society, providing food
              security and economic stability for millions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all shadow-sm rounded-xl">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sprout className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Food Security</h3>
                <p className="text-gray-600">
                  Ensuring sustainable food production for growing populations
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all shadow-sm rounded-xl">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Economic Growth
                </h3>
                <p className="text-gray-600">
                  Supporting rural livelihoods and national economies
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all shadow-sm rounded-xl">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Environmental Care
                </h3>
                <p className="text-gray-600">
                  Preserving biodiversity and natural resources
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Farming Problems Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Challenges Facing Farmers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the problems is the first step toward creating
              effective solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {problems.map((problem, index) => (
              <Card
                key={index}
                className="border hover:shadow-lg transition-all rounded-xl"
              >
                <CardContent className="p-6">
                  <problem.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/problems">
                View All Problems <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support to help farmers succeed and communities
              thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all shadow-sm rounded-xl"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Methods Overview */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1548741395-2ac0057be631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwcGFkZHklMjB0ZXJyYWNlc3xlbnwxfHx8fDE3NzE5OTYwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Rice paddy terraces"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Traditional Agriculture Methods
              </h2>
              <p className="text-lg text-gray-600">
                Discover time-tested farming techniques that have sustained
                communities for generations. Learn about organic farming, crop
                rotation, and natural irrigation systems.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Sustainable and eco-friendly practices
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Cost-effective for small farmers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Preserves soil health and biodiversity
                  </span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <Link to="/methods">
                  Explore Methods <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Farming Community Today
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Whether you're a farmer seeking support, an expert ready to share
            knowledge, or someone passionate about agriculture, there's a place
            for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/signup">Create Account</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
