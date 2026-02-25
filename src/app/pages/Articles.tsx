import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

export function Articles() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    "All",
    "Crop Management",
    "Irrigation",
    "Pest Control",
    "Market Trends",
    "Technology",
    "Organic Farming",
  ];

  const articles = [
    {
      id: 1,
      title: "10 Essential Tips for Organic Vegetable Farming",
      description:
        "Learn the fundamentals of growing healthy vegetables without chemicals, including soil preparation and natural pest control methods.",
      category: "Organic Farming",
      author: "Dr. Rajesh Kumar",
      date: "Feb 20, 2026",
      image: "https://images.unsplash.com/photo-1722810767143-40a6a7a74b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZyUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzcxOTQ4ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Maximizing Water Efficiency with Drip Irrigation",
      description:
        "A comprehensive guide to installing and maintaining drip irrigation systems for better water conservation and crop yields.",
      category: "Irrigation",
      author: "Priya Sharma",
      date: "Feb 18, 2026",
      image: "https://images.unsplash.com/photo-1738598665698-7fd7af4b5e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmlwJTIwaXJyaWdhdGlvbiUyMHN5c3RlbXxlbnwxfHx8fDE3NzE5OTYwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Understanding Crop Rotation for Soil Health",
      description:
        "Discover how strategic crop rotation can improve soil fertility, reduce pests, and increase long-term farm productivity.",
      category: "Crop Management",
      author: "Anil Verma",
      date: "Feb 15, 2026",
      image: "https://images.unsplash.com/photo-1741665604513-392643cd42fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9wJTIwcm90YXRpb24lMjBmaWVsZHxlbnwxfHx8fDE3NzE5OTYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Natural Pest Control: Alternatives to Chemicals",
      description:
        "Effective biological and organic methods to control pests without harming beneficial insects or the environment.",
      category: "Pest Control",
      author: "Dr. Meena Patel",
      date: "Feb 12, 2026",
      image: "https://images.unsplash.com/photo-1635831973943-41c27b6d7f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBmaWVsZCUyMGFncmljdWx0dXJlJTIwc3VucmlzZXxlbnwxfHx8fDE3NzE5OTYwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Market Price Trends: What Farmers Need to Know",
      description:
        "Stay informed about current market trends and pricing strategies to maximize profits from your agricultural produce.",
      category: "Market Trends",
      author: "Suresh Reddy",
      date: "Feb 10, 2026",
      image: "https://images.unsplash.com/photo-1755719523098-227f4c486eb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGhhcnZlc3QlMjBjb21iaW5lfGVufDF8fHx8MTc3MTk5NjA5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "Smart Farming: Using Technology in Agriculture",
      description:
        "Explore how mobile apps, sensors, and data analytics are revolutionizing modern farming practices.",
      category: "Technology",
      author: "Kavita Singh",
      date: "Feb 8, 2026",
      image: "https://images.unsplash.com/photo-1548741395-2ac0057be631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwcGFkZHklMjB0ZXJyYWNlc3xlbnwxfHx8fDE3NzE5OTYwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "6 min read",
    },
    {
      id: 7,
      title: "Traditional Irrigation Systems: Still Relevant Today",
      description:
        "How ancient water management techniques can complement modern irrigation for sustainable farming.",
      category: "Irrigation",
      author: "Ramesh Gupta",
      date: "Feb 5, 2026",
      image: "https://images.unsplash.com/photo-1761201509055-30c04b68901c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGlycmlnYXRpb24lMjB3YXRlcnxlbnwxfHx8fDE3NzE5OTYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "5 min read",
    },
    {
      id: 8,
      title: "Composting 101: Creating Your Own Natural Fertilizer",
      description:
        "Step-by-step guide to making high-quality compost from farm waste and household materials.",
      category: "Organic Farming",
      author: "Dr. Anjali Desai",
      date: "Feb 2, 2026",
      image: "https://images.unsplash.com/photo-1686579341853-2effa68407e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwZmVydGlsaXplciUyMGNvbXBvc3R8ZW58MXx8fHwxNzcxOTk2MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "7 min read",
    },
    {
      id: 9,
      title: "Seasonal Crop Planning for Maximum Yield",
      description:
        "Learn which crops to plant in different seasons based on climate, market demand, and soil conditions.",
      category: "Crop Management",
      author: "Vijay Deshmukh",
      date: "Jan 30, 2026",
      image: "https://images.unsplash.com/photo-1635831973943-41c27b6d7f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBmaWVsZCUyMGFncmljdWx0dXJlJTIwc3VucmlzZXxlbnwxfHx8fDE3NzE5OTYwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "6 min read",
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      article.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const articlesPerPage = 6;
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Featured Articles
            </h1>
            <p className="text-lg text-gray-600">
              Expert insights, practical guides, and latest trends in agriculture
              to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem
                      key={category}
                      value={category.toLowerCase()}
                    >
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No articles found matching your criteria.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden hover:shadow-lg transition-all rounded-xl group"
                  >
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 left-3 bg-white/90 text-gray-900 hover:bg-white">
                        {article.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {article.readTime}
                        </span>
                        <Button variant="ghost" size="sm" className="group">
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    )
                  )}
                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
