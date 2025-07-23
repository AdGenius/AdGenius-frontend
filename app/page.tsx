"use client";

import { 
  BarChart3, 
  Bell, 
  Brain, 
  ChartLine, 
  Globe, 
  Layout, 
  MessageSquare,
  Monitor,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Play
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-white/70 dark:bg-slate-900/70 z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold gradient-text">AdGenius</h1>
            </div>
            <div className="flex items-center gap-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">Features</a>
              <a href="#platforms" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">Platforms</a>
              <a href="#get-started" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Get Started</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Ad Management Platform</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Manage All Your Ads<br />
              <span className="gradient-text">In One Powerful Platform</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              AdGenius simplifies digital advertising by centralizing all your campaigns across multiple channels. 
              Get AI-driven insights, real-time notifications, and optimize your ROI effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://t.me/ad_genius_bot"
            target="_blank"
            rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <MessageSquare className="w-5 h-5" />
                Try on Telegram
          </a>
          <a
                href="#mobile-app"
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                <Smartphone className="w-5 h-5" />
                Download Mobile App
              </a>
            </div>
          </div>
          
          {/* Hero Image/Graphic */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Unified Dashboard</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Track all campaigns in one place</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AI Insights</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Get intelligent recommendations</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Bell className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Real-time Alerts</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Never miss important updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              AdGenius brings together powerful features to streamline your advertising workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="bg-indigo-100 dark:bg-indigo-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layout className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Multi-Platform Management</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect and manage ads from Google, Facebook, Instagram, LinkedIn, and more - all from one dashboard.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="bg-green-100 dark:bg-green-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChartLine className="w-7 h-7 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Performance Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Track ROI, CTR, conversions, and other key metrics with beautiful, easy-to-understand visualizations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI-Powered Insights</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our AI assistant analyzes your data and provides actionable recommendations to improve campaign performance.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="bg-orange-100 dark:bg-orange-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bell className="w-7 h-7 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Smart Notifications</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get real-time alerts about budget changes, performance drops, and opportunities to optimize.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="bg-pink-100 dark:bg-pink-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Predictive Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Forecast campaign performance and budget needs with machine learning predictions.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Team Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Share access, assign roles, and collaborate with your team seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose <span className="gradient-text">AdGenius</span>?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Save Time & Resources</h3>
                    <p className="text-gray-600 dark:text-gray-300">Stop switching between platforms. Manage everything from one intuitive dashboard.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Make Data-Driven Decisions</h3>
                    <p className="text-gray-600 dark:text-gray-300">AI-powered insights help you understand what works and optimize accordingly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Scale with Confidence</h3>
                    <p className="text-gray-600 dark:text-gray-300">From small campaigns to enterprise-level operations, AdGenius grows with you.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Stay Ahead of Competition</h3>
                    <p className="text-gray-600 dark:text-gray-300">Real-time alerts and predictive analytics keep you one step ahead.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-white">
                <div className="text-center">
                  <Zap className="w-16 h-16 mx-auto mb-4 animate-float" />
                  <h3 className="text-3xl font-bold mb-4">30% Average ROI Increase</h3>
                  <p className="text-xl opacity-90 mb-6">Our users see significant improvements in their advertising performance</p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold">85%</div>
                      <div className="text-sm opacity-80">Time Saved</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">3x</div>
                      <div className="text-sm opacity-80">Faster Insights</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">24/7</div>
                      <div className="text-sm opacity-80">AI Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-20 px-4 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Available <span className="gradient-text">Everywhere</span> You Need
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Access AdGenius from any device, anywhere. Your campaigns are always at your fingertips.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Platform */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Web Dashboard</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Full-featured dashboard with advanced analytics and team collaboration tools.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
                Launch Web App <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile App */}
            <div id="mobile-app" className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 dark:bg-green-900/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Mobile App</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Monitor campaigns on the go with our iOS and Android apps.
              </p>
              <div className="flex flex-col gap-3">
                <a href="#" className="inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                  <Play className="w-4 h-4" /> Download on App Store
                </a>
                <a href="#" className="inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                  <Play className="w-4 h-4" /> Get it on Google Play
                </a>        
              </div>
            </div>

            {/* Telegram Bot */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Telegram Mini App</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Quick access to insights and notifications right in your Telegram messenger.
              </p>
              <a 
                href="https://t.me/ad_genius_bot"
          target="_blank"
          rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline"
              >
                Open in Telegram <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Advertising?</h2>
              <p className="text-xl opacity-90 mb-8">
                Join thousands of businesses already using AdGenius to optimize their digital advertising
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://t.me/ad_genius_bot"
          target="_blank"
          rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all transform hover:scale-105 font-semibold"
                >
                  <MessageSquare className="w-5 h-5" />
                  Start Free on Telegram
        </a>
        <a
                  href="#" 
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all font-semibold"
                >
                  <Globe className="w-5 h-5" />
                  Request Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">AdGenius</h3>
              <p className="text-gray-400">
                Centralized digital advertising management for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Status</a></li>
                <li><a href="#" className="hover:text-white transition">Terms & Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AdGenius. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
