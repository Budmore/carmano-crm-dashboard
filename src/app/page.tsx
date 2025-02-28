import {
  BarChart3,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Code,
  MessageSquare,
  ShoppingBag,
  Truck,
  Users,
} from "lucide-react";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

async function App() {
  const cookieStore = await cookies();
  const hasAccessToken = !!cookieStore.get("accessToken");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Truck className="h-8 w-8 text-violet-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Carmano
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-violet-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-violet-600 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-violet-600 transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-violet-600 transition-colors"
              >
                Contact
              </a>
            </div>
            {hasAccessToken ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/dashboard"
                  className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-700 transition-colors"
                >
                  Dashboard
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-violet-600 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/sign-up"
                  className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-700 transition-colors"
                >
                  Sign Up Free
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-violet-600 to-violet-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Manage Your RV Rental Business with Ease
              </h1>
              <p className="text-xl mb-8">
                Streamline bookings, track maintenance, and grow your RV rental
                business with our all-in-one CRM solution. Completely free!
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/sign-up"
                  className="bg-white text-violet-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-center"
                >
                  Sign Up Free
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="RV in nature"
                className="rounded-lg shadow-xl"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      {/* New Features Highlight */}
      <div className="py-12 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">New Features</h2>
            <p className="mt-4 text-xl text-gray-600">
              Expand your reach and simplify bookings with our latest tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-violet-100 p-3 rounded-full">
                    <Code className="h-8 w-8 text-violet-600" />
                  </div>
                  <h3 className="ml-4 text-2xl font-semibold text-gray-900">
                    Embeddable Calendar Widget
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Add a booking calendar directly to your existing website. Let
                  customers book your RVs without leaving your site.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Simple copy-paste installation
                    </span>
                  </div>
                  <div className="flex items-start mt-2">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Customizable colors and styles
                    </span>
                  </div>
                  <div className="flex items-start mt-2">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Real-time availability updates
                    </span>
                  </div>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Calendar widget example"
                  width={544}
                  height={192}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-violet-100 p-3 rounded-full">
                    <ShoppingBag className="h-8 w-8 text-violet-600" />
                  </div>
                  <h3 className="ml-4 text-2xl font-semibold text-gray-900">
                    Marketplace Integration
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  List your RVs on our marketplace to reach more customers and
                  increase your bookings.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Automatic listing creation
                    </span>
                  </div>
                  <div className="flex items-start mt-2">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Manage all bookings in one place
                    </span>
                  </div>
                  <div className="flex items-start mt-2">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Increased visibility for your fleet
                    </span>
                  </div>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Marketplace example"
                  width={544}
                  height={192}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Everything You Need to Manage Your RV Fleet
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our comprehensive tools help you streamline operations and delight
              your customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Calendar className="h-8 w-8 text-violet-600" />}
              title="Smart Booking System"
              description="Manage reservations, prevent double-bookings, and send automated confirmations to customers."
            />
            <FeatureCard
              icon={<Code className="h-8 w-8 text-violet-600" />}
              title="Embeddable Calendar"
              description="Add a booking widget to your existing website so customers can book directly from your site."
            />
            <FeatureCard
              icon={<ShoppingBag className="h-8 w-8 text-violet-600" />}
              title="Marketplace Listings"
              description="List your RVs on our marketplace to reach more customers and increase your bookings."
            />

            <FeatureCard
              icon={<Users className="h-8 w-8 text-violet-600" />}
              title="Customer Management"
              description="Store customer information, preferences, and rental history for personalized service."
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-violet-600" />}
              title="Business Analytics"
              description="Gain insights into your business performance with detailed reports and dashboards."
            />
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8 text-violet-600" />}
              title="Communication Tools"
              description="Send automated notifications, reminders, and gather feedback from customers."
            />
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div id="how-it-works" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              How Carmano Works
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our platform simplifies every aspect of your RV rental business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number={1}
              title="Set Up Your Fleet"
              description="Add your RVs, set pricing, availability, and customize booking rules."
            />
            <StepCard
              number={2}
              title="Manage Bookings"
              description="Accept reservations, process payments, and send automated confirmations."
            />
            <StepCard
              number={3}
              title="Grow Your Business"
              description="Embed your calendar on your website, list on our marketplace, and optimize operations."
            />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Join hundreds of RV rental businesses already using Carmano
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Carmano has transformed how we manage our fleet of 15 RVs. Bookings are up 30% and customer satisfaction has never been higher."
              author="Sarah Johnson"
              company="Mountain View RV Rentals"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              quote="The maintenance tracking alone has saved us thousands in repair costs. This platform pays for itself many times over."
              author="Michael Rodriguez"
              company="Coastal Campers"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              quote="The embeddable calendar widget increased our bookings by 45%. Our customers love being able to book directly from our website!"
              author="Jennifer Lee"
              company="Adventure RV Rentals"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
            />
          </div>
        </div>
      </div>

      {/* Free Plan Section */}
      <div id="pricing" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Completely Free, No Hidden Costs
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Enjoy all features without any subscription fees
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-violet-600 text-white text-center py-4">
                <h3 className="text-2xl font-bold">Free Forever</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 text-center">
                  All features included, no credit card required
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">
                      Unlimited RVs in your fleet
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">
                      Complete booking system
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">
                      Embeddable calendar widget
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">
                      Marketplace integration
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">
                      Customer management tools
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Maintenance tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Business analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Email support</span>
                  </li>
                </ul>
                <a
                  href="/sign-up"
                  className="w-full block text-center py-3 px-4 rounded-md font-medium transition-colors bg-violet-600 text-white hover:bg-violet-700"
                >
                  Sign Up Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-violet-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to transform your RV rental business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of successful RV rental businesses using Carmano to
            streamline operations and delight customers.
          </p>
          <a
            href="/sign-up"
            className="bg-white text-violet-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            Sign Up Free
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Truck className="h-6 w-6 text-violet-400" />
                <span className="ml-2 text-lg font-bold">Carmano</span>
              </div>
              <p className="text-gray-400">
                The complete solution for RV rental businesses.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Account</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/login"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sign-up"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Carmano. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component for feature cards
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Component for how it works steps
interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative">
      <div className="absolute -top-4 -left-4 bg-violet-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 flex justify-end">
        <ChevronRight className="h-5 w-5 text-violet-600" />
      </div>
    </div>
  );
}

// Component for testimonial cards
interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  image: string;
}

function TestimonialCard({
  quote,
  author,
  company,
  image,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600 italic mb-6">{`"${quote}"`}</p>
      <div className="flex items-center">
        <Image
          src={image}
          alt={author}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-gray-600 text-sm">{company}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
