import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient'; // Adjusted path

interface Video {
  id: number;
  created_at: string;
  title: string;
  youtube_id: string;
  'title_hindi': string; // Matches Supabase column name
}

const Index: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      const { data, error } = await supabase
        .from('Satya_ki_aur') // Your table name
        .select('*')
        .order('created_at', { ascending: false })
        .limit(6);

      if (error) {
        console.error('Error fetching videos:', error);
        setError(`Error fetching videos: ${error.message}. Check Supabase connection and table name.`);
        setVideos([]);
      } else {
        // Explicitly type data to Video[] or an empty array if null/undefined
        setVideos((data as Video[] | null) || []);
        setError(null);
      }
    };

    fetchVideos();
  }, []);

  const handleThumbnailClick = (youtubeId: string) => {
    setPlayingVideoId(youtubeId);
  };

  return (
    <div className="min-h-screen bg-sky-50 text-slate-700">
      {/* Hero Section */}
      <section className="bg-sky-200 py-16 text-center rounded-b-[60px]">
        <div className="container mx-auto px-4">
          <img
            src="/lovable-uploads/3a9be7c0-f13c-40cc-b97d-8b2cda3bc3d3.png"
            alt="Satya ki aur Logo"
            className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 rounded-full shadow-lg"
            onError={(e) => (e.currentTarget.style.display = 'none')} // Hide if logo not found
          />
          <h1 className="text-7xl font-bold text-slate-800">सत्य की ओर</h1>
          <p className="mt-4 text-xl text-slate-700">Exploring the path to truth through wisdom and understanding</p>
        </div>
      </section>

      {/* Latest Teachings Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-slate-800 mb-10">
            Latest Teachings
          </h2>
          {error && (
            <div className="text-center text-red-500 bg-red-100 p-4 rounded-md mb-8">
              <p><strong>Error:</strong> {error}</p>
              <p>Please ensure your <code>.env</code> file is correctly set up with <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code>, and that the table 'Satya_ki_aur' exists and is accessible.</p>
            </div>
          )}
          {videos.length === 0 && !error && (
             <p className="text-center text-slate-500">Loading videos or no videos found.</p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div 
                key={video.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
              >
                {playingVideoId === video.youtube_id ? (
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtube_id}?autoplay=1`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                ) : (
                  <div 
                    className="aspect-w-16 aspect-h-9 cursor-pointer group relative"
                    onClick={() => handleThumbnailClick(video.youtube_id)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.youtube_id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.118-11.07a.75.75 0 011.06 0l4.002 3.502a.75.75 0 010 1.136l-4.002 3.502a.75.75 0 01-1.136-.976L12.25 10l-3.304-2.894a.75.75 0 01-.078-1.036z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-800 mb-1 truncate" title={video.title}>
                    {video.title}
                  </h3>
                  {video['title_hindi'] && (
                    <h4 className="text-md text-slate-600 mb-2 truncate" title={video['title_hindi']}>
                      {video['title_hindi']}
                    </h4>
                  )}
                  {/* You can add video.id or created_at here if needed for debugging or display */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
