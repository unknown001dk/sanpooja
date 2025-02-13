import React, { useState, useEffect } from 'react';
import { Heart, Clock, Calendar, Gift, Stars } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 30, seconds: 0 });

  useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          let { hours, minutes, seconds } = prevTime;
          
          if (seconds > 0) {
            seconds -= 1;
          } else if (minutes > 0) {
            minutes -= 1;
            seconds = 59;
          } else if (hours > 0) {
            hours -= 1;
            minutes = 59;
            seconds = 59;
          }
          
          return { hours, minutes, seconds };
        });
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-pink-200 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-red-200 animate-float-${i % 3}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4 relative">
            <div className="absolute inset-0 flex items-center justify-center filter blur-lg opacity-50">
              <Heart className="w-20 h-20 text-red-300" />
            </div>
            <Heart className="w-16 h-16 text-red-500 animate-pulse relative z-10" fill="currentColor" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-4 animate-title">
            Valentine's Day 2024
          </h1>
          <p className="text-lg text-gray-700 animate-fade-in">Countdown to the day of love ❤️</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <TimeUnit value={timeLeft.days} label="DAYS" />
            <Separator />
            <TimeUnit value={timeLeft.hours} label="HRS" />
            <Separator />
            <TimeUnit value={timeLeft.minutes} label="MIN" />
            <Separator />
            <TimeUnit value={timeLeft.seconds} label="SEC" />
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <Card
            title="Plan Something Special"
            description="Make reservations or plan a unique date"
            icon={<Calendar className="w-8 h-8 text-red-500" />}
            gradient="from-red-500 to-pink-500"
          />
          <Card
            title="Express Your Love"
            description="Write a heartfelt message or create something meaningful"
            icon={<Heart className="w-8 h-8 text-red-500" />}
            gradient="from-pink-500 to-purple-500"
          />
          <Card
            title="Choose the Perfect Gift"
            description="Find something that shows how much you care"
            icon={<Gift className="w-8 h-8 text-red-500" />}
            gradient="from-purple-500 to-red-500"
          />
        </div>

        <div className="mt-16 text-center">
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <img
              src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80"
              alt="Valentine's Day"
              className="rounded-2xl shadow-lg max-w-2xl w-full transition-all duration-500 group-hover:blur-sm relative"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform scale-95 group-hover:scale-100 transition-all duration-500">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <Heart className="w-8 h-8 text-red-500 animate-bounce-slow" fill="currentColor" />
                  <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 font-serif">
                    I Love You
                  </h2>
                  <Heart className="w-8 h-8 text-red-500 animate-bounce-delayed" fill="currentColor" />
                </div>
                <p className="text-xl text-gray-700 italic animate-fade-in">
                  "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
                </p>
                <p className="text-sm text-gray-500 mt-2">- Maya Angelou</p>
                <div className="mt-4 flex justify-center space-x-2">
                  <Stars className="w-5 h-5 text-yellow-400 animate-twinkle" />
                  <Stars className="w-5 h-5 text-yellow-400 animate-twinkle-delayed" />
                  <Stars className="w-5 h-5 text-yellow-400 animate-twinkle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  const displayValue = value.toString().padStart(2, '0');
  return (
    <div className="text-center group">
      <div className="bg-white rounded-xl shadow-lg p-6 min-w-[120px] transform group-hover:scale-110 transition-all duration-300">
        <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-pink-500 font-mono">
          {displayValue}
        </div>
        <div className="text-gray-600 text-sm font-semibold tracking-wider mt-2">
          {label}
        </div>
      </div>
    </div>
  );
}

function Separator() {
  return (
    <div className="text-4xl md:text-6xl font-bold text-red-500 animate-pulse">
      :
    </div>
  );
}

function Card({ title, description, icon, gradient }: { title: string; description: string; icon: React.ReactNode; gradient: string }) {
  return (
    <div className="relative group">
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000`}></div>
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 relative transform group-hover:scale-105 transition-all duration-300">
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
}

export default App;