import React from 'react';

interface Props {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const ProjectCard: React.FC<Props> = ({ title, description, tags, image, liveUrl, githubUrl }) => {
  return (
    <div className="border rounded-lg shadow p-4 bg-white">
      <div className="h-48 bg-gray-100 mb-4 flex items-center justify-center overflow-hidden">
        {image ? <img src={image} alt={title} className="w-full h-full object-cover" /> : <div className="text-4xl text-gray-300">{title.charAt(0)}</div>}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map(t=> <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded">{t}</span>)}
      </div>
      <div className="flex gap-2">
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <button className="w-full py-2 bg-blue-600 text-white rounded">Live Demo</button>
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <button className="w-full py-2 border rounded">Code</button>
          </a>
        )}
      </div>
    </div>
  );
};
