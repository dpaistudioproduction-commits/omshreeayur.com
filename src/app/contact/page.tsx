import { Metadata } from "next";
import { FadeIn } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Omshree Sidha Hospital",
  description: "Get in touch with Omshree Sidha Hospital. Book a consultation, upload your medical reports, or find our location in Kerala.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-24 relative overflow-hidden">
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              We are here to support your journey to health. Reach out to our specialists today.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Info */}
            <FadeIn>
              <div className="space-y-8">
                <h2 className="font-heading text-3xl font-bold text-foreground">Contact Information</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Have questions about our treatments or want to book an appointment? Our dedicated support team is available to assist you.
                </p>
                
                <div className="grid gap-6">
                  <Card className="border-border shadow-sm">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Hospital Location</h3>
                        <p className="text-muted-foreground">
                          Omshree Sidha Hospital<br />
                          Kerala, India
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border shadow-sm">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Phone & WhatsApp</h3>
                        <p className="text-muted-foreground">+91 98765 43210</p>
                        <p className="text-muted-foreground text-sm mt-1">Available Mon-Sat, 9am to 6pm IST</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border shadow-sm">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Email</h3>
                        <p className="text-muted-foreground">care@omshreeayur.com</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.1}>
              <Card className="border-border shadow-md">
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-bold mb-6 text-foreground">Send an Inquiry</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" className="bg-background" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" className="bg-background" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="bg-background" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (with country code)</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" className="bg-background" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="department">Treatment Department</Label>
                      <select id="department" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Select a department...</option>
                        <option value="heart">Heart Disease / Low EF</option>
                        <option value="respiratory">Respiratory Care</option>
                        <option value="gastro">Gastrointestinal</option>
                        <option value="panchakarma">Panchakarma</option>
                        <option value="other">Other / General Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Briefly describe your condition or inquiry..." 
                        className="min-h-[120px] bg-background"
                      />
                    </div>

                    <Button type="button" className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
                      Submit Inquiry
                    </Button>
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      Your information is secure. We will get back to you within 24 hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
}
