const About = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-dark mb-4">About This Template</h1>
          <p className="text-xl text-muted">
            A modern foundation for your next React project
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-500 mb-4">Features</h2>
            <ul className="space-y-3">
              <li>⚛️ React 18 with latest features</li>
              <li>⚡ Vite for fast development and building</li>
              <li>🎨 Tailwind CSS for styling</li>
              <li>🛣️ React Router for navigation</li>
              <li>📱 Responsive design</li>
              <li>🎯 Component-based architecture</li>
            </ul>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-bold text-primary-500 mb-4">Getting Started</h2>
            <p className="text-muted mb-4">
              This template provides everything you need to start building modern web applications with React.
              The setup includes routing, responsive navigation, and a clean component structure.
            </p>
            <p className="text-muted">
              Customize the colors, fonts, and components to match your brand and start building your amazing project!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About