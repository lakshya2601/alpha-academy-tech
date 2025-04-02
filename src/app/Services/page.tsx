"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useInView } from "react-intersection-observer";


const performanceData = [
  { month: 'Jan', value: 4000, growth: 2400 },
  { month: 'Feb', value: 3000, growth: 1398 },
  { month: 'Mar', value: 5000, growth: 9800 },
  { month: 'Apr', value: 2780, growth: 3908 },
  { month: 'May', value: 1890, growth: 4800 },
  { month: 'Jun', value: 2390, growth: 3800 },
];

const salesData = {
  total: 15984.12,
  gross: 246,
  volume: 8,
  growth: 12
};

const portfolioData = [
  { name: 'Stocks', value: 400 },
  { name: 'Bonds', value: 300 },
  { name: 'Real Estate', value: 300 },
  { name: 'Crypto', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const AnimatedNumber = ({ value, duration = 2000 }: { value: number, duration?: number }) => {
  const [ref, inView] = useInView({

    triggerOnce: true,  
    threshold: 0.1,
  });
  const [displayValue, setDisplayValue] = React.useState(0);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (inView && !error) {
      try {
        let start = 0;
        const end = Number(value);
        if (isNaN(end)) throw new Error('Invalid number');
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setDisplayValue(end);
            clearInterval(timer);
          } else {
            setDisplayValue(start);
          }
        }, 16);
        return () => clearInterval(timer);
      } catch (err) {
        setError(true);
        console.error('Animation error:', err);
      }
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{displayValue.toFixed(2)}</span>;
};

const Services = () => {
  return (
    <div className="flex-grow bg-white flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#033347] text-white py-20 px-4 mt-[100px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left relative z-10">
            <h1 className="text-5xl font-bold tracking-wide mb-6">Investment Solutions</h1>
            <p className="text-xl leading-relaxed opacity-90">
              Empowering your financial future with expert guidance and innovative investment strategies.
            </p>
          </div>
          <div className="relative z-10 flex justify-center">
            <Image
              src="/circle-svgrepo-com.svg"
              alt="Investment Solutions"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#effcfd" fillOpacity="0.1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-16 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 mb-12 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl w-full max-w-md mx-auto transform transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Total Sales</div>
                <motion.div 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-xs font-medium text-green-500 bg-green-50 px-3 py-1.5 rounded-full hover:bg-green-100 transition-colors duration-300 flex items-center gap-1"
                >
                  <span className="transform transition-transform duration-300 hover:translate-y-[-2px]">↑</span>
                  <span>{salesData.growth}%</span>
                </motion.div>
              </div>
              <motion.div 
                className="text-4xl font-bold mb-4 text-gray-900 hover:text-[#033347] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                $<AnimatedNumber value={salesData.total} />
              </motion.div>
              <div className="grid grid-cols-2 gap-6 mt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="text-sm text-gray-500 mb-1">Gross Sales</div>
                  <div className="text-xl font-semibold text-[#033347]">${salesData.gross}</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="text-sm text-gray-500 mb-1">Volume Sales</div>
                  <div className="text-xl font-semibold text-[#033347]">{salesData.volume}</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Performance Metrics</h2>
            <p className="text-xl text-gray-600">Track your investment growth and portfolio distribution</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Investment Growth</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                      }}
                      cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                    />
                    <Bar dataKey="value" name="Value" fill="#033347" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="growth" name="Growth" fill="#0088FE" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Portfolio Distribution</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={portfolioData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {portfolioData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-6 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Portfolio Management */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-300 -z-10"></div>
              <Image
                src="/dummy-image.jpg"
                alt="Portfolio Management"
                width={600}
                height={400}
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Portfolio Management</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Expert management of your investment portfolio with personalized strategies 
                aligned with your financial goals. Our team of professionals ensures your 
                investments are optimized for growth and security.
              </p>
            </div>
          </div>

          {/* Market Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="space-y-6 md:order-first">
              <h2 className="text-3xl font-bold text-gray-900">Market Analysis</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                In-depth market research and analysis to identify opportunities and optimize 
                your investment decisions. Stay ahead with our cutting-edge analytical tools 
                and expert insights.
              </p>
            </div>
            <div className="relative md:order-last">
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-300 -z-10"></div>
              <Image
                src="/dummy-image.jpg"
                alt="Market Analysis"
                width={600}
                height={400}
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Wealth Planning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-300 -z-10"></div>
              <Image
                src="/dummy-image.jpg"
                alt="Wealth Planning"
                width={600}
                height={400}
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Wealth Planning</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Comprehensive wealth planning services to help you build and preserve your 
                financial legacy. Our holistic approach ensures your wealth grows and 
                transitions smoothly across generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#effcfd] text-black py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Invest in Your Future?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-700">
            Let our expert team help you navigate the financial markets and build a
            strong investment portfolio tailored to your goals.
          </p>
          <a href="/ContactUs">
            <button className="px-10 py-4 bg-[#02556b] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-[#033347] transition-all transform hover:-translate-y-1">
              Schedule a Consultation
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
