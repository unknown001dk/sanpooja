import React, { useState, useEffect } from "react";
import { Heart, Calendar, Stars, Music, MessageCircleHeart as MessageHeart, Sparkles, BookHeart, Quote } from "lucide-react";

function FallingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <Heart
          key={i}
          className="falling-heart text-red-300"
          fill="currentColor"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 20 + 10}px`,
          }}
        />
      ))}
    </div>
  );
}

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 0,
    seconds: 0,
  });

  const [currentQuote, setCurrentQuote] = useState(0);
  const [currentTamilQuote, setCurrentTamilQuote] = useState(0);
  
  const loveQuotes = [
    { quote: "In all the world, there is no heart for me like yours.", author: "Maya Angelou" },
    { quote: "I love you not only for what you are, but for what I am when I am with you.", author: "Elizabeth Barrett Browning" },
    { quote: "You are my today and all of my tomorrows.", author: "Leo Christopher" },
    { quote: "I love you more than yesterday, less than tomorrow.", author: "Rosemonde Gérard" },
  ];

  const tamilKavithaigal = [
    {
      tamil: "உன் கண்கள் என் உலகம்\nஉன் புன்னகை என் வானம்\nஉன் அன்பு என் வாழ்க்கை\nநீ என் எல்லாமும்...",
      translation: "Your eyes are my world\nYour smile is my sky\nYour love is my life\nYou are my everything..."
    },
    {
      tamil: "காதல் என்பது வார்த்தைகள் அல்ல\nஇதயத்தின் துடிப்பு\nமூச்சின் ஓசை\nஉன்னை நினைக்கும் ஒவ்வொரு கணமும்...",
      translation: "Love is not just words\nIt's the heartbeat\nThe sound of breath\nEvery moment thinking of you..."
    },
    {
      tamil: "நீ இல்லாத நேரமெல்லாம்\nநிறமற்ற வானம்\nநீ வரும் நேரமெல்லாம்\nவண்ண வண்ண வானவில்...",
      translation: "Every moment without you\nIs a colorless sky\nEvery moment with you\nIs a rainbow..."
    }
  ];

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

    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % loveQuotes.length);
      setCurrentTamilQuote((prev) => (prev + 1) % tamilKavithaigal.length);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(quoteInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-pink-200 relative overflow-hidden">
      <FallingHearts />
      
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
              <Heart className="w-20 h-20 text-red-300 animate-glow" />
            </div>
            <Heart
              className="w-16 h-16 text-red-500 animate-rotate3D relative z-10"
              fill="currentColor"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text animate-title mb-4">
            Valentine's Day 2024
          </h1>
          <div className="flex items-center justify-center gap-2 animate-fade-in">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-twinkle" />
            <p className="text-lg text-gray-700 animate-wave">காதலர் தின வாழ்த்துக்கள் ❤️</p>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-twinkle-delayed" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto glass-effect rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <TimeUnit value={timeLeft.hours} label="HRS" />
            <Separator />
            <TimeUnit value={timeLeft.minutes} label="MIN" />
            <Separator />
            <TimeUnit value={timeLeft.seconds} label="SEC" />
          </div>
        </div>

        {/* Tamil Kavithai Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center justify-center gap-4 mb-6">
              <BookHeart className="w-8 h-8 text-red-500 animate-wave" />
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 animate-title">
                காதல் கவிதைகள்
              </h2>
              <BookHeart className="w-8 h-8 text-red-500 animate-wave" />
            </div>
            <div className="space-y-6">
              <div className="text-center">
                <Quote className="w-6 h-6 text-red-400 inline-block mb-2 animate-bounce-slow" />
                <p className="text-xl text-gray-800 font-tamil whitespace-pre-line mb-4 animate-fade-in">
                  {tamilKavithaigal[currentTamilQuote].tamil}
                </p>
                <p className="text-md text-gray-600 italic animate-fade-in">
                  {tamilKavithaigal[currentTamilQuote].translation}
                </p>
                <Quote className="w-6 h-6 text-red-400 inline-block mt-2 transform rotate-180 animate-bounce-delayed" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <Card
            title="Plan Something Special"
            description="Create unforgettable moments together"
            icon={<Calendar className="w-8 h-8 text-red-500" />}
            gradient="from-red-500 to-pink-500"
          />
          <Card
            title="Express Your Love"
            description="Let your heart speak its truth"
            icon={<MessageHeart className="w-8 h-8 text-red-500" />}
            gradient="from-pink-500 to-purple-500"
          />
          <Card
            title="Make It Magical"
            description="Turn ordinary moments into extraordinary memories"
            icon={<Sparkles className="w-8 h-8 text-red-500" />}
            gradient="from-purple-500 to-red-500"
          />
        </div>

        <div className="mt-16 text-center">
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <img
              src="./sankar.jpeg"
              alt="Valentine's Day"
              className="rounded-2xl shadow-lg max-w-2xl w-full transition-all duration-500 group-hover:blur-sm relative"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform scale-95 group-hover:scale-100 transition-all duration-500">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <Heart
                    className="w-8 h-8 text-red-500 animate-bounce-slow"
                    fill="currentColor"
                  />
                  <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 font-serif animate-title">
                    Forever Yours
                  </h2>
                  <Heart
                    className="w-8 h-8 text-red-500 animate-bounce-delayed"
                    fill="currentColor"
                  />
                </div>
                <p className="text-xl text-gray-700 italic animate-fade-in min-h-[100px]">
                  "{loveQuotes[currentQuote].quote}"
                </p>
                <p className="text-sm text-gray-500 mt-2">- {loveQuotes[currentQuote].author}</p>
                <div className="mt-4 flex justify-center space-x-2">
                  <Stars className="w-5 h-5 text-yellow-400 animate-twinkle" />
                  <Music className="w-5 h-5 text-red-400 animate-wave" />
                  <Stars className="w-5 h-5 text-yellow-400 animate-twinkle-delayed" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 animate-fade-in">
            Every moment with you is a gift ❤️
          </p>
        </div>
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  const displayValue = value.toString().padStart(2, "0");
  return (
    <div className="text-center group">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 min-w-[120px] transform group-hover:scale-110 transition-all duration-300">
        <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-pink-500 font-mono animate-heartbeat">
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

function Card({
  title,
  description,
  icon,
  gradient,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}) {
  return (
    <div className="relative group">
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000`}
      ></div>
      <div className="glass-effect rounded-xl shadow-lg p-6 relative transform group-hover:scale-105 transition-all duration-300">
        <div className="flex justify-center mb-4">
          <div className="animate-heartbeat">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
          {title}
        </h3>
        <p className="text-gray-600 text-center">
          {description}
        </p>
      </div>
    </div>
  );
}

export default App;