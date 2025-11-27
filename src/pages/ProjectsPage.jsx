import React from 'react';
import Projects from '../components/Projects';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Projects</h1>
          <Link to="/" className="text-sm text-neutral-300 hover:text-white">Back</Link>
        </header>

        <main>
          <Projects />
        </main>
      </div>
    </div>
  );
};

export default ProjectsPage;
