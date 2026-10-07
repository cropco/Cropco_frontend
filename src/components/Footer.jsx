import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Cropco" className="h-14 w-32 rounded-lg object-contain" />
            </Link>
            <p className="text-soft text-base">
              A modern React template with Vite and Tailwind CSS for building beautiful web applications.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-soft tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-white hover:text-accent-400">Marketing</a></li>
                  <li><a href="#" className="text-base text-white hover:text-accent-400">Analytics</a></li>
                  <li><a href="#" className="text-base text-white hover:text-accent-400">Commerce</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-soft tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-white hover:text-accent-400">Pricing</a></li>
                  <li><a href="#" className="text-base text-white hover:text-accent-400">Documentation</a></li>
                  <li><a href="#" className="text-base text-white hover:text-accent-400">Guides</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-soft/30 pt-8">
          <p className="text-base text-soft xl:text-center">
            &copy; {new Date().getFullYear()} React Template. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer