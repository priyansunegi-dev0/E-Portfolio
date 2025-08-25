import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VideoIntroBox() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideControlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current);
      }
    };
  }, []);

  const togglePlay = async () => {
    if (!videoRef.current || !isVideoReady) return;

    const video = videoRef.current;
    
    try {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        await video.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error toggling video playback:', error);
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    
    const newMutedState = !isMuted;
    videoRef.current.muted = newMutedState;
    setIsMuted(newMutedState);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    setShowControls(true);
    
    if (hideControlsTimeoutRef.current) {
      clearTimeout(hideControlsTimeoutRef.current);
    }
    
    hideControlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 4000); // Increased delay to 4 seconds
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
    setShowControls(true);
    
    if (hideControlsTimeoutRef.current) {
      clearTimeout(hideControlsTimeoutRef.current);
    }
  };

  const handleVideoReady = () => {
    setIsVideoReady(true);
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  };

  const handleMouseEnter = () => {
    setShowControls(true);
    
    if (hideControlsTimeoutRef.current) {
      clearTimeout(hideControlsTimeoutRef.current);
    }
    
    if (isPlaying) {
      hideControlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000); // 3 seconds delay on hover
    }
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current);
      }
      
      hideControlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2000); // Increased delay to 2 seconds
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative group w-full max-w-md mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Outer Gradient Border */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-pink-500/20 backdrop-blur-md border border-white/10 p-1 shadow-2xl" style={{ width: '420px', height: '560px' }}>
        <div className="relative overflow-hidden rounded-[20px] w-full h-full bg-gradient-to-br from-gray-900/40 to-black/30">
          
          {/* Video Element */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
            onCanPlay={handleVideoReady}
            onLoadedData={handleVideoReady}
            poster="https://res.cloudinary.com/doafxs9ku/image/upload/v1754813241/WhatsApp_Image_2025-08-10_at_13.21.59_6dcece47_oycgze.jpg"
          >
            {/*   <source src="https://res.cloudinary.com/doafxs9ku/video/upload/v1754813558/WhatsApp_Video_2025-08-10_at_13.23.03_a7b04c22_-_Trim_emobdf.mp4" type="video/mp4" /> */}
            Your browser does not support the video tag.
          </video>

          {/* Black Gradient Overlay for Video Cover/Poster */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 rounded-[20px] pointer-events-none"></div>

          {/* Enhanced Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t rounded-[20px] pointer-events-none transition-opacity duration-500 ${
            isPlaying 
              ? 'from-black/30 via-black/10 to-black/20 opacity-60' 
              : 'from-black/80 via-black/20 to-black/40 opacity-100'
          }`}></div>
          
          {/* Additional Black Gradient Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br rounded-[20px] pointer-events-none transition-opacity duration-500 ${
            isPlaying 
              ? 'from-black/15 via-transparent to-black/25 opacity-50' 
              : 'from-black/30 via-transparent to-black/50 opacity-100'
          }`}></div>

          {/* Top Gradient for Title */}
          <div className={`absolute top-0 left-0 right-0 h-20 bg-gradient-to-b rounded-t-[20px] pointer-events-none transition-opacity duration-500 ${
            isPlaying 
              ? 'from-black/40 to-transparent opacity-60' 
              : 'from-black/70 to-transparent opacity-100'
          }`}></div>

          {/* Clickable Video Area */}
          <div 
            className="absolute inset-0 flex items-center justify-center z-30 cursor-pointer"
            onClick={togglePlay}
          >
            {/* Center Play/Pause Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              disabled={!isVideoReady}
              className={`w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-2xl ${
                !isVideoReady ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              } ${
                showControls ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{
                transition: 'opacity 0.3s ease, transform 0.3s ease'
              }}
            >
              {isPlaying ? (
                <Pause
                  size={32}
                  fill="currentColor"
                  className="drop-shadow-lg"
                />
              ) : (
                <Play
                  size={32}
                  className="ml-1 drop-shadow-lg"
                  fill="currentColor"
                />
              )}
            </motion.button>
          </div>

          {/* Bottom Controls Bar */}
          <div 
            className={`absolute bottom-0 left-0 right-0 p-4 z-30 transition-all duration-300 pointer-events-none ${
              showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              {/* Status Indicator */}
              <div className="flex items-center space-x-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    isPlaying ? 'bg-green-400 animate-pulse' : 'bg-red-400'
                  }`}
                ></div>
                <span className="text-xs text-white font-medium drop-shadow-md">
                  {isPlaying ? 'Playing' : 'Paused'}
                </span>
              </div>

              {/* Mute/Unmute Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                disabled={!isVideoReady}
                className={`w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-lg pointer-events-auto ${
                  !isVideoReady ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </motion.button>
            </div>
          </div>

          {/* Animated Border Effect */}
          <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-blue-500/0 via-purple-500/20 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>
    </motion.div>
  );
}
