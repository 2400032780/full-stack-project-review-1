import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", formData);
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "info@farmconnect.com",
      subinfo: "support@farmconnect.com",
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+1 (555) 123-4567",
      subinfo: "+1 (555) 987-6543",
    },
    {
      icon: MapPin,
      title: "Address",
      info: "Agriculture Hub, Farm City",
      subinfo: "Building 123, Suite 456",
    },
    {
      icon: Clock,
      title: "Hours",
      info: "Monday - Friday: 9am - 6pm",
      subinfo: "Saturday: 10am - 4pm",
    },
  ];

  const faqs = [
    {
      question: "How can I register as a farmer on the platform?",
      answer:
        "Click on the 'Sign Up' button in the navigation menu, select 'Farmer' as your role, and fill in the required details. Once registered, you'll have access to expert guidance, market information, and community support.",
    },
    {
      question: "Is there a fee to use FarmConnect services?",
      answer:
        "Basic access to articles, farming methods, and community forums is completely free. Premium services like one-on-one expert consultations and advanced analytics may have associated fees.",
    },
    {
      question: "How do I connect with agricultural experts?",
      answer:
        "After logging into your farmer dashboard, navigate to the 'Expert Consultation' section. You can browse expert profiles, read reviews, and schedule consultations based on your specific needs.",
    },
    {
      question: "Can I access market price information on the platform?",
      answer:
        "Yes! Registered farmers have access to real-time market prices for various crops across different regions. This information is updated daily to help you make informed selling decisions.",
    },
    {
      question: "What types of farming methods are covered?",
      answer:
        "We cover a wide range of traditional and modern farming methods including organic farming, crop rotation, drip irrigation, natural fertilizers, and many more. Each method includes detailed explanations, benefits, and implementation guides.",
    },
    {
      question: "How can experts contribute to the platform?",
      answer:
        "Agricultural experts can register with their credentials and contribute by publishing articles, answering farmer queries, and providing consultations. All expert profiles are verified to ensure quality guidance.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Absolutely. We take data security seriously and use industry-standard encryption to protect all user information. Your data is never shared with third parties without your explicit consent.",
    },
    {
      question: "How do I report a technical issue?",
      answer:
        "You can report technical issues through this contact form by selecting 'Technical Support' as the subject, or email us directly at support@farmconnect.com with a detailed description of the problem.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600">
              Have questions? We're here to help. Reach out to us and we'll
              respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg rounded-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600">{item.info}</p>
                          {item.subinfo && (
                            <p className="text-sm text-gray-600">
                              {item.subinfo}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="shadow-lg rounded-2xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-gray-600">Map Location</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about FarmConnect
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
