import { User, BookOpen, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { profileData } from "../data/profileData";

export default function Sidebar() {
  const [theme, setTheme] = useState(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem("theme");
    // Only use saved theme if it's one of our valid themes
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
    // Default theme
    return "light";
  });
  const [activeSection, setActiveSection] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isDarkMode = theme === "dark";

  useEffect(() => {
    console.log("Setting theme to:", theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      // const sections = ["about", "news", "publications"];
      const sections = ["about", "publications"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    console.log("Toggling theme from", theme, "to", newTheme);
    setTheme(newTheme);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { id: "about", icon: User, label: "About" },
    // { id: "news", icon: Newspaper, label: "News" },
    { id: "publications", icon: BookOpen, label: "Publications" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-6 left-6 z-50 btn btn-circle btn-ghost bg-base-200/80 backdrop-blur-sm"
      >
        {isMobileMenuOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-80 bg-gradient-to-b from-base-200 to-base-300 border-r border-base-content/10">
        <div className="flex flex-col justify-between w-full p-8">
          <div>
            {/* Profile Section */}
            <div className="text-center mb-10">
              <div className="mb-6 hover:scale-105 transition-transform duration-300">
                <div className="w-40 h-50 rounded-2xl overflow-hidden mx-auto">
                  <img
                    src={profileData.profileImage}
                    alt="Profile"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {profileData.nameEn}
              </h1>
              <p className="text-sm text-base-content/70 mt-2 font-medium">
                {profileData.title}
              </p>
              <p className="text-xs text-base-content/50 mt-1">
                {profileData.university}
              </p>
            </div>

            {/* Navigation */}
            <nav>
              <ul className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                          activeSection === item.id
                            ? "bg-primary/10 text-primary shadow-lg shadow-primary/10 translate-x-2"
                            : "hover:bg-base-content/5 hover:translate-x-1"
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 ${
                            activeSection === item.id ? "text-primary" : ""
                          }`}
                        />
                        <span className="text-lg font-medium">
                          {item.label}
                        </span>
                        {activeSection === item.id && (
                          <div className="ml-auto w-1 h-6 bg-primary rounded-full" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center justify-between p-4 bg-base-200/50 rounded-lg">
            <span className="text-sm font-medium">Dark Mode</span>
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleTheme}
              />
              <svg
                className="swap-off fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              <svg
                className="swap-on fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <aside
          className={`absolute left-0 top-0 h-full w-80 bg-gradient-to-b from-base-200 to-base-300 transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-between h-full p-8 pt-20">
            <div>
              {/* Profile Section */}
              <div className="text-center mb-10">
                <div className="mb-6">
                  <div className="w-32 h-40 rounded-2xl overflow-hidden mx-auto">
                    <img
                      src={profileData.profileImage}
                      alt="Profile"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {profileData.nameEn}
                </h1>
                <p className="text-sm text-base-content/70 mt-2 font-medium">
                  {profileData.title}
                </p>
                <p className="text-xs text-base-content/50 mt-1">
                  {profileData.university}
                </p>
              </div>

              {/* Navigation */}
              <nav>
                <ul className="space-y-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                            activeSection === item.id
                              ? "bg-primary/10 text-primary shadow-lg shadow-primary/10"
                              : "hover:bg-base-content/5"
                          }`}
                        >
                          <Icon
                            className={`h-5 w-5 ${
                              activeSection === item.id ? "text-primary" : ""
                            }`}
                          />
                          <span className="text-lg font-medium">
                            {item.label}
                          </span>
                          {activeSection === item.id && (
                            <div className="ml-auto w-1 h-6 bg-primary rounded-full" />
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center justify-between p-4 bg-base-200/50 rounded-lg">
              <span className="text-sm font-medium">Dark Mode</span>
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={toggleTheme}
                />
                <svg
                  className="swap-off fill-current w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="swap-on fill-current w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
