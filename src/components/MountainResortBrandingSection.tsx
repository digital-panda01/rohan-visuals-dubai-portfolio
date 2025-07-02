import React, { useRef, useState } from 'react';

const MountainResortBrandingSection = () => {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
    setImages(prev => [...prev, ...files]);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviews(prev => [...prev, event.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).filter(file => file.type.startsWith('image/'));
    setImages(prev => [...prev, ...files]);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviews(prev => [...prev, event.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-white mb-4">Mountain Resort Branding</h2>
      <p className="text-lg text-gray-300 mb-8">
        Drag and drop images below, or <span className="underline cursor-pointer text-portfolio-accent" onClick={() => fileInputRef.current?.click()}>browse</span> to upload.<br/>
        (Images are previewed locally and not saved to the server.)
      </p>
      <div
        className="border-2 border-dashed border-portfolio-accent rounded-lg p-8 mb-8 bg-gray-800 text-center cursor-pointer hover:bg-gray-700 transition"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          accept="image/*"
          multiple
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
        <span className="text-gray-400">Drag & drop images here, or click to select files</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {previews.length === 0 ? (
          <div className="col-span-2 text-center text-gray-500">No images yet. Add images above to preview them here.</div>
        ) : (
          previews.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Mountain Resort Branding ${idx + 1}`}
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MountainResortBrandingSection; 