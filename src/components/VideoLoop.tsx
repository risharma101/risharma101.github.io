import React, { useState, ChangeEvent } from 'react';

const videoUrls = [
    '../assets/notefy-demo-vid.mov',
    '../assets/notefy-demo-vid.mov',
    'path/to/your/video3.mp4',
    // Add more video URLs as needed
];

const VideoUploadAndPlay: React.FC = () => {
  const [videoFile, setVideoFile] = useState<string>("");

  const handleVideoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const videoUrl = URL.createObjectURL(files[0]);
      setVideoFile(videoUrl);
    }
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleVideoUpload} />
      {videoFile && (
        <video src={videoFile} autoPlay loop style={{ width: '100%', maxHeight: '500px' }} />
      )}
      <p>{videoFile}</p>
    </div>
  );
};

export default VideoUploadAndPlay;
