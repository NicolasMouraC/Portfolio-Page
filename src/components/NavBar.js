import{ useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="bg-transparent h-[10vh] min-h-[60px] w-full absolute top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex flex-shrink-0">
              <Link to="/" className="text-sky-600 font-bold text-[18px] md:text-[20px]">Nicolas de Moura</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 bg-slate-900">
                <NavLink
                 to="/about" 
                 className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                 {t('About')}</NavLink>
                <a
                 href="/#Skills" 
                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                 {t('Skills')}</a>
                <a
                 href="/#Projects" 
                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                 {t('Projects')}</a>
                <a
                 href="/#Contact" 
                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                 {t('Contact')}</a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white z-30"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">{t('Open main menu')}</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden bg-slate-900" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                to="/about"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium z-40">
                {t('About')}</NavLink>

              <a
                href="/#Skills"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium z-40">
                {t('Skills')}</a>

              <a
                href="/#Projects"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium z-40">
                {t('Projects')}</a>

              <a
                href="#Contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium z-40">
                {t('Contact')}</a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Nav;
