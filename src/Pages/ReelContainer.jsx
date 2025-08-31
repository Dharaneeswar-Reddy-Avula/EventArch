// ReelContainer.jsx
import React, { useEffect, useRef } from 'react';
import VideoReel from './VideoReel';

const ReelContainer = () => {
  const reelData = [
    {
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
      username: 'Gabar Singh',
      hashtag: '#StartupIndia',
      music: 'Chilling in America - In the Sky • Original Audio',
      likes: '200K',
      comments: '1.2K',
      shares: '45',
      profilePic: 'https://via.placeholder.com/32',
    },
    {
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
      username: 'Jane Doe',
      hashtag: '#TravelVibes',
      music: 'Wanderlust - Road Trip • Original Audio',
      likes: '150K',
      comments: '900',
      shares: '30',
      profilePic: 'https://via.placeholder.com/32',
    },
    {
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
      username: 'John Smith',
      hashtag: '#FitnessJourney',
      music: 'Pump It Up - Gym Beats • Original Audio',
      likes: '300K',
      comments: '2K',
      shares: '60',
      profilePic: 'https://via.placeholder.com/32',
    },
  ];

  const reelRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target.querySelector('video');
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the reel is visible
    );

    reelRefs.current.forEach((reel) => {
      if (reel) observer.observe(reel);
    });

    return () => {
      reelRefs.current.forEach((reel) => {
        if (reel) observer.unobserve(reel);
      });
    };
  }, []);

  return (
    <div className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory bg-black">
      {reelData.map((reel, index) => (
        <div
          key={index}
          ref={(el) => (reelRefs.current[index] = el)}
          className="snap-start"
        >
          <VideoReel
            videoSrc={reel.videoSrc}
            username={reel.username}
            hashtag={reel.hashtag}
            music={reel.music}
            likes={reel.likes}
            comments={reel.comments}
            shares={reel.shares}
            profilePic={reel.profilePic}
          />
        </div>
      ))}
    </div>
  );
};

export default ReelContainer;