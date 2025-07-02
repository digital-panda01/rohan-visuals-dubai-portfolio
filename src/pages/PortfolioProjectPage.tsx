import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioProjects } from '../data/portfolioProjects';
import { motion } from 'framer-motion';
import { uploadProjectImage, listProjectImages, getPublicUrl, deleteProjectImage } from '../integrations/supabase/upload';
import { Trash2 } from 'lucide-react';

const PortfolioProjectPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = portfolioProjects.find(p => p.id === projectId);
  const [images, setImages] = useState<{ url: string; path: string }[]>([]);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!projectId) return;
    async function fetchImages() {
      try {
        const files = await listProjectImages(projectId);
        setImages(files.map((f: any) => ({ url: getPublicUrl(`${projectId}/${f.name}`), path: `${projectId}/${f.name}` })));
      } catch (e) {
        setImages([]);
      }
    }
    fetchImages();
  }, [projectId]);

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!projectId) return;
    const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
    setUploading(true);
    for (const file of files) {
      await uploadProjectImage(projectId, file);
    }
    const filesList = await listProjectImages(projectId);
    setImages(filesList.map((f: any) => ({ url: getPublicUrl(`${projectId}/${f.name}`), path: `${projectId}/${f.name}` })));
    setUploading(false);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!projectId) return;
    const files = Array.from(e.target.files || []).filter(file => file.type.startsWith('image/'));
    setUploading(true);
    for (const file of files) {
      await uploadProjectImage(projectId, file);
    }
    const filesList = await listProjectImages(projectId);
    setImages(filesList.map((f: any) => ({ url: getPublicUrl(`${projectId}/${f.name}`), path: `${projectId}/${f.name}` })));
    setUploading(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDelete = async (path: string) => {
    setDeleting(path);
    await deleteProjectImage(path);
    setImages(images.filter(img => img.path !== path));
    setDeleting(null);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link to="/portfolio" className="text-portfolio-accent underline">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <section className="section-spacing bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto container-padding">
        <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
        <p className="text-lg text-gray-300 mb-8">{project.description}</p>
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
          <span className="text-gray-400">{uploading ? 'Uploading...' : 'Drag & drop images here, or click to select files'}</span>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.length === 0 ? (
            <div className="col-span-2 text-center text-gray-500">No images yet. Add images above to upload and display them here.</div>
          ) : (
            images.map((img, idx) => (
              <motion.div
                key={img.path}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="mb-4 break-inside-avoid rounded-lg shadow-lg bg-gray-800 p-2 relative group"
              >
                <img
                  src={img.url}
                  alt={`${project.title} ${idx + 1}`}
                  className="w-full h-auto object-contain rounded-md"
                  style={{ background: '#222' }}
                />
                <button
                  className="absolute top-2 right-2 bg-red-600/80 hover:bg-red-700 text-white p-1 rounded-full shadow transition-opacity opacity-0 group-hover:opacity-100"
                  onClick={() => handleDelete(img.path)}
                  disabled={deleting === img.path}
                  title="Delete image"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </motion.div>
            ))
          )}
        </div>
        <div className="mt-8 text-center">
          <Link to="/portfolio" className="text-portfolio-accent underline">← Back to Portfolio</Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjectPage; 