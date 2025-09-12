import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white px-6 md:px-20 py-16 overflow-y-auto">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
        About <span className="text-[#6556cd]">MovieApp</span>
      </h1>
      <p className="text-center text-zinc-400 max-w-3xl mx-auto mb-14 leading-relaxed">
        Welcome to <span className="text-white font-semibold">MovieApp</span>, your ultimate destination 
        for discovering and exploring movies and TV shows.  
        We’re passionate about cinema and aim to bring you closer to the stories you love with a clean, modern, and intuitive experience.
      </p>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto bg-zinc-900/80 backdrop-blur-md rounded-xl shadow-2xl p-10 border border-zinc-800 mb-14">
        <h2 className="text-2xl font-bold mb-4 text-[#6556cd]">🎯 Our Mission</h2>
        <p className="text-zinc-300 leading-relaxed">
          Our mission is simple: make discovering movies and shows as enjoyable as watching them.  
          We provide information about ratings, trailers, recommendations, streaming platforms, and more — all in one place.  
          Whether you’re a casual viewer or a hardcore cinephile, MovieApp has something for you.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-14">
        <div className="bg-zinc-900/80 rounded-lg p-6 shadow-lg border border-zinc-800 hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-3 text-[#6556cd]">📽️ Discover</h3>
          <p className="text-zinc-400">
            Explore trending movies, TV shows, and hidden gems with detailed information at your fingertips.
          </p>
        </div>
        <div className="bg-zinc-900/80 rounded-lg p-6 shadow-lg border border-zinc-800 hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-3 text-[#6556cd]">⭐ Ratings & Reviews</h3>
          <p className="text-zinc-400">
            See what others think, check audience scores, and share your own reviews with the community.
          </p>
        </div>
        <div className="bg-zinc-900/80 rounded-lg p-6 shadow-lg border border-zinc-800 hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-3 text-[#6556cd]">🎬 Personalized</h3>
          <p className="text-zinc-400">
            Get recommendations based on your favorite genres, actors, and directors.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-4xl mx-auto bg-zinc-900/80 rounded-xl shadow-2xl p-10 border border-zinc-800 mb-14">
        <h2 className="text-2xl font-bold mb-4 text-[#6556cd]">👥 Our Team</h2>
        <p className="text-zinc-300 leading-relaxed">
          We’re a small group of movie lovers, developers, and designers who believe in making cinema more accessible.  
          From backend APIs to sleek UI design, everything is built with passion and love for storytelling.  
        </p>
      </div>

      {/* Back to Home */}
      <div className="text-center mt-12 pb-10">
        <Link
          to="/"
          className="text-[#6556cd] hover:text-[#4b44b6] transition font-semibold"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
