import React, { useState, useEffect } from 'react';

// Interface for items directly from playlistItems.list
interface YouTubePlaylistItem {
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
    resourceId: {
      videoId: string;
    };
  };
}

interface Video {
  id: string;
  titleEnglish: string;
  titleHindi: string;
  youtube_id: string;
  publishedAt: string;
}

const Index: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const UPLOADS_PLAYLIST_ID = 'UUzFOHSeS7s3Pt0YXaqde4tw';
  const MAX_RESULTS = 6;
  const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/channel/UCzFOHSeS7s3Pt0YXaqde4tw';

  useEffect(() => {
    const fetchVideosFromYouTubePlaylist = async () => {
      if (!YOUTUBE_API_KEY) {
        setError("YouTube API Key is missing. Please check your .env file and restart the server.");
        console.error("YouTube API Key is missing.");
        return;
      }
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=${MAX_RESULTS}&key=${YOUTUBE_API_KEY}`
        );
        if (!response.ok) {
          const errorData = await response.json();
          console.error('YouTube API Error:', errorData);
          throw new Error(`Failed to fetch videos from YouTube: ${response.status} ${errorData.error?.message || ''}`);
        }
        const data = await response.json();
        if (data.items) {
          const fetchedVideos: Video[] = data.items.map((item: YouTubePlaylistItem) => {
            const parts = item.snippet.title.split('|');
            const titleEnglish = parts[0]?.trim() || item.snippet.title; // Fallback to full title if no separator
            const titleHindi = parts[1]?.trim() || ''; // Fallback to empty if no second part
            return {
              id: item.snippet.resourceId.videoId,
              titleEnglish: titleEnglish,
              titleHindi: titleHindi,
              youtube_id: item.snippet.resourceId.videoId,
              publishedAt: item.snippet.publishedAt,
            };
          });
          setVideos(fetchedVideos);
          setError(null);
        } else {
          setVideos([]);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          console.error(err);
        } else {
          setError('An unknown error occurred');
          console.error('An unknown error occurred', err);
        }
      }
    };

    fetchVideosFromYouTubePlaylist();
  }, [YOUTUBE_API_KEY]);

  const handleThumbnailClick = (videoId: string) => {
    setPlayingVideoId(videoId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300 text-slate-800 dark:from-slate-900 dark:via-gray-800 dark:to-gray-900 dark:text-sky-100">
      {/* Hero Section */}
      <section 
        className="relative text-center py-20 md:py-28 lg:py-32 bg-cover bg-no-repeat bg-center rounded-b-[40px] md:rounded-b-[60px] lg:rounded-b-[80px] shadow-xl"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('/lovable-uploads/3a9be7c0-f13c-40cc-b97d-8b2cda3bc3d3.png')",
          borderBottom: '5px solid #0284c7'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30 rounded-b-[40px] md:rounded-b-[60px] lg:rounded-b-[80px]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white filter drop-shadow-lg">
            सत्य की ओर
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 filter drop-shadow-md">
            Exploring the path to truth through wisdom and understanding.
          </p>
        </div>
      </section>

      {/* Latest Teachings Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12 text-sky-700 dark:text-sky-400">
            Latest Teachings
          </h2>
          {error && (
            <div className="text-center text-red-500 dark:text-red-400 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 p-4 rounded-md mb-8">
              <p className="font-semibold">Error loading videos:</p>
              <p>{error}</p>
              <p className="mt-2 text-sm">Please ensure your <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">.env</code> file has the correct <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">VITE_YOUTUBE_API_KEY</code> and restart the development server.</p>
            </div>
          )}
          {videos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {videos.map((video) => (
                <div 
                  key={video.id} 
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300 ease-in-out"
                >
                  {playingVideoId === video.youtube_id ? (
                    <div className="aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.youtube_id}?autoplay=1`}
                        title={video.titleEnglish + (video.titleHindi ? ` | ${video.titleHindi}` : '')}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <div className="aspect-video relative cursor-pointer group" onClick={() => handleThumbnailClick(video.youtube_id)}>
                      <img 
                        src={`https://img.youtube.com/vi/${video.youtube_id}/hqdefault.jpg`} 
                        alt={video.titleEnglish + (video.titleHindi ? ` | ${video.titleHindi}` : '')} 
                        className="w-full h-full object-cover"
                        onError={(e) => (e.currentTarget.style.display = 'none')}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                  <div className="p-4">
                    <h3 
                      className="font-semibold text-md text-sky-800 dark:text-sky-300 leading-tight"
                      title={video.titleEnglish + (video.titleHindi ? ` | ${video.titleHindi}` : '')}
                    >
                      {video.titleEnglish}
                    </h3>
                    {video.titleHindi && (
                      <p 
                        className="font-semibold text-md text-sky-800 dark:text-sky-300 leading-tight"
                        title={video.titleHindi}
                      >
                        {video.titleHindi}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            !error && <p className="text-center text-gray-500 dark:text-gray-400">Loading videos...</p>
          )}

          {/* CTA to YouTube Channel */}
          {videos.length > 0 && (
            <div className="text-center mt-12 md:mt-16">
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
              >
                View All Teachings on YouTube
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
