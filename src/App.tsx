import React from 'react';
import { Mail, Phone, MapPin, Briefcase, Users, Target, Award, CheckCircle, Globe, Calendar, Shield, Cog, GraduationCap, BookOpen, TrendingUp } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(/realistic-background-futuristic-style_23-2149129125.jpg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-indigo-900/80"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-blue-400 rounded-lg rotate-12 animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border border-indigo-400 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute bottom-20 left-20 w-28 h-28 border border-cyan-400 rounded-lg -rotate-12 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 right-32 w-20 h-20 border border-blue-300 rounded-full animate-bounce" style={{animationDuration: '4s', animationDelay: '2s'}}></div>
          
          {/* Circuit-like lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10h80v80h-80z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.4"/>
                <circle cx="80" cy="80" r="2" fill="currentColor" opacity="0.4"/>
                <path d="M20 20L80 80M80 20L20 80" stroke="currentColor" strokeWidth="0.3" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" className="text-blue-400"/>
          </svg>
          
          {/* Floating tech icons */}
          <div className="absolute top-1/4 left-1/4 animate-float">
            <div className="w-8 h-8 bg-blue-500 rounded opacity-20 transform rotate-45"></div>
          </div>
          <div className="absolute top-1/3 right-1/3 animate-float" style={{animationDelay: '2s'}}>
            <div className="w-6 h-6 bg-indigo-500 rounded-full opacity-20"></div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-float" style={{animationDelay: '4s'}}>
            <div className="w-10 h-10 bg-cyan-500 rounded opacity-15 transform -rotate-12"></div>
          </div>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-indigo-900/60"></div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 bg-white">
              <img 
                src="/Gemini_Generated_Image_75budq75budq75bu.png" 
                alt="Tsanka Ilieva - Professional Photo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Tsanka Ilieva</h1>
              <h2 className="text-xl md:text-2xl text-blue-200 mb-4">Operations and Delivery Manager</h2>
              <p className="text-lg text-blue-100 mb-6">Julla HIT</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>tsanka.ilieva@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+359 888 070 776</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Bulgaria</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional Summary</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-slate-700 leading-relaxed">
              Dynamic and accomplished Manager with a proven track record in the BPO and IT sectors. Expert in strategic 
              leadership and process optimization, with a strong acumen for negotiation, retail, and sales. Passionate about 
              driving customer satisfaction through agile methodologies, including Agile and Scrum frameworks. Experienced 
              in orchestrating successful project management, recruitment, and sourcing endeavors. Adept at establishing and 
              managing company and office operations. Currently serving as a trusted advisor and hands-on leader at Julla HIT, 
              ensuring seamless functioning of all non-engineering aspects while bridging the gap between strategy and execution. 
              Holds a Bachelor's degree in English/Language Arts Teacher Education from Veliko Tarnovo University, complemented 
              by a degree in Economics with a focus on Accountancy, highlighting analytical and financial expertise. Eager to 
              leverage extensive knowledge to inspire teams and foster growth-oriented environments.
            </p>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Competencies</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Agile & Team Leadership</h3>
              <p className="text-slate-600">Scrum Master for RPA and TEM teams, sprint planning, and cross-functional team coordination</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Financial Management</h3>
              <p className="text-slate-600">Budget oversight, expense monitoring, payroll coordination, and banking operations</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Legal & Compliance</h3>
              <p className="text-slate-600">Contract management, regulatory compliance, and legal advisory support</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">HR & Operations</h3>
              <p className="text-slate-600">Employee lifecycle management, visa processes, and office facility coordination</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">QA & Documentation</h3>
              <p className="text-slate-600">Test case debugging, process documentation, and product validation support</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Cog className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Strategic Advisory</h3>
              <p className="text-slate-600">Trusted partner in decision-making and operational strategy alignment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Responsibilities</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-600" />
                Team & Project Management
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Scrum Master for RPA and TEM development teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Sprint planning and retrospective facilitation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Progress tracking and blocker resolution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Cross-team coordination with QA and development leads</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-green-600" />
                Financial Operations
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Full company budget management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Purchase approvals and expense monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Salary preparation coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Banking operations and petty cash management</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-orange-600" />
                HR & Employee Management
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Employee records and contract management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Leave coordination and duty roster management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Visa application process oversight</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>External HR and legal advisor coordination</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-purple-600" />
                Legal & Facility Management
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Legal and compliance advisory support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Vendor and partner contract management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Office security and maintenance oversight</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Access control and security administration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {/* Current Position */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Operations and Delivery Manager</h3>
                  <p className="text-lg text-blue-700 font-semibold">Julla HIT</p>
                </div>
                <div className="text-slate-600 font-medium">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Current Position</span>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                Leading all non-engineering operations while serving as Scrum Master for RPA and TEM teams. Managing comprehensive 
                business operations including finance, HR, legal compliance, and strategic advisory support.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Scrum Master</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Financial Management</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">HR Operations</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Legal Compliance</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Strategic Advisory</span>
              </div>
            </div>

            {/* TTEC */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-slate-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Service Delivery Manager</h3>
                  <p className="text-lg text-slate-700 font-semibold">TTEC</p>
                </div>
                <div className="text-slate-600 font-medium">Sep 2019 - Jun 2020 · 10 mos</div>
              </div>
              <p className="text-slate-600 mb-2">Sofia</p>
              <p className="text-slate-700 mb-4">
                Managed service delivery operations in Sofia, focusing on process improvement and operational excellence 
                to ensure high-quality service delivery to clients.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm">Process Improvement</span>
                <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm">Operations Management</span>
                <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm">Service Delivery</span>
              </div>
            </div>

            {/* Sutherland */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-slate-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Sutherland Global Services</h3>
                  <p className="text-lg text-slate-700 font-semibold">Multiple Roles</p>
                </div>
                <div className="text-slate-600 font-medium">Jul 2014 - Dec 2018 · 4 yrs 6 mos</div>
              </div>
              
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-slate-200">
                  <h4 className="font-semibold text-slate-900">Team Manager</h4>
                  <p className="text-sm text-slate-600 mb-2">Oct 2015 - Dec 2018 · 3 yrs 3 mos</p>
                  <p className="text-slate-700 mb-2">
                    Led cross-functional teams while implementing resource planning and process improvement initiatives.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-xs">Resource Planning</span>
                    <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-xs">Process Improvement</span>
                    <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-xs">Team Management</span>
                    <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-xs">Operations</span>
                    <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-xs">Leadership</span>
                  </div>
                </div>
                
                <div className="pl-4 border-l-2 border-slate-200">
                  <h4 className="font-semibold text-slate-900">Quality Analyst</h4>
                  <p className="text-sm text-slate-600 mb-2">Oct 2014 - Sep 2015 · 1 yr · Burgas</p>
                  <p className="text-slate-700 mb-2">
                    Focused on quality assurance processes, implementing process improvements and problem-solving methodologies.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-xs">Process Improvement</span>
                    <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-xs">Problem Solving</span>
                  </div>
                </div>
                
                <div className="pl-4 border-l-2 border-slate-200">
                  <h4 className="font-semibold text-slate-900">Consultant</h4>
                  <p className="text-sm text-slate-600 mb-2">Jul 2014 - Oct 2014 · 4 mos</p>
                  <p className="text-slate-700">
                    Provided consulting services and strategic guidance during the initial engagement period.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Bachelor's Degree</h3>
              <p className="text-lg text-blue-700 font-medium mb-2">English/Language Arts Teacher Education</p>
              <p className="text-slate-700 mb-2">St. Cyril and St. Methodius University of Veliko Tarnovo</p>
              <p className="text-slate-600">2000 - 2003</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Bachelor's Degree</h3>
              <p className="text-lg text-green-700 font-medium mb-2">Accounting and Business/Management</p>
              <p className="text-slate-700 mb-2">Burgas Free University</p>
              <p className="text-slate-600">1996 - 2000</p>
              <p className="text-slate-600 text-sm mt-2">Specialization: Accounting and Business/Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional Certifications</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Recent Certification - Featured */}
            <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg p-6 border-2 border-blue-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <a 
                  href="https://www.scrum.org/certificates/1185759" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  Professional Scrum Master I
                </a>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">New</span>
              </div>
              <p className="text-blue-700 font-medium mb-2">Scrum.org</p>
              <p className="text-slate-600 text-sm mb-3">Issued Feb 2025 · Credential ID: 1185759</p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Scrum Master</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <a 
                href="https://softuni.bg/certificates/details/171008/bc59e2f9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-semibold text-slate-900 hover:text-purple-600 transition-colors mb-2 block"
              >
                QA Automation Front-End
              </a>
              <p className="text-purple-700 font-medium mb-2">Software University (SoftUni)</p>
              <p className="text-slate-600 text-sm mb-3">Issued Apr 2023</p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Selenium</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">WebDriver</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Appium</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Cog className="w-6 h-6 text-indigo-600" />
              </div>
              <a 
                href="https://softuni.bg/certificates/details/162643/c3d6e6c4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-semibold text-slate-900 hover:text-indigo-600 transition-colors mb-2 block"
              >
                QA Automation Back-End
              </a>
              <p className="text-indigo-700 font-medium mb-2">Software University (SoftUni)</p>
              <p className="text-slate-600 text-sm mb-3">Issued Mar 2023</p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">Software Testing</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">Postman API</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <a 
                href="https://drive.google.com/file/d/1G0nZN0LCMAZXazVcLwq4-NoEYPvxkLUZ/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-semibold text-slate-900 hover:text-orange-600 transition-colors mb-2 block"
              >
                Junior Developer
              </a>
              <p className="text-orange-700 font-medium mb-1">C, Python, Linux & Basic Bash</p>
              <p className="text-orange-700 font-medium mb-2">On Training</p>
              <p className="text-slate-600 text-sm mb-3">Issued Nov 2022</p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">C Programming</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Python</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Linux</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Bash</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <a 
                href="https://drive.google.com/file/d/1G0nZN0LCMAZXazVcLwq4-NoEYPvxkLUZ/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-semibold text-slate-900 hover:text-green-600 transition-colors mb-2 block"
              >
                Six Sigma & Lean Yellow Belt
              </a>
              <p className="text-green-700 font-medium mb-2">Sutherland</p>
              <p className="text-slate-600 text-sm mb-3">Issued Feb 2015</p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Process Improvement</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Lean Methodology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Proficiencies</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Project Management</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Jira</li>
                  <li>• Confluence</li>
                  <li>• Agile/Scrum</li>
                  <li>• Sprint Planning</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Development Tools</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• GitLab</li>
                  <li>• QA Testing</li>
                  <li>• Documentation</li>
                  <li>• Process Optimization</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Business Applications</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Microsoft 365</li>
                  <li>• Financial Management</li>
                  <li>• Contract Management</li>
                  <li>• HR Systems</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Languages</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• English (Fluent)</li>
                  <li>• Bulgarian (Native)</li>
                  <li>• Russian</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Performance Indicators */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Performance Excellence</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">100%</h3>
              <p className="text-slate-600">On-time salary and payment processing accuracy</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Consistent</h3>
              <p className="text-slate-600">RPA and TEM teams sprint target achievement</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Zero</h3>
              <p className="text-slate-600">Disruptions in leave planning and substitutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-8">
            Ready to discuss operational excellence and strategic leadership opportunities
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:tsanka.ilieva@gmail.com" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a 
              href="tel:+359888070776" 
              className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Me
            </a>
            <a 
              href="https://www.linkedin.com/in/tsanka-ilieva-bb77536a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <Globe className="w-5 h-5" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2025 Tsanka Ilieva. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;