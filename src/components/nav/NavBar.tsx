import { useState, useEffect, useRef } from 'react';

// Add this declaration for TypeScript compatibility
declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}

// Custom hook for click sound
const useClickSound = () => {
  const audioContext = useRef<AudioContext | null>(null);
  
  const playClick = () => {
    // Create audio context on first user interaction
    if (!audioContext.current) {
      audioContext.current = new (window.AudioContext || window.webkitAudioContext!)();
    }
    
    const ctx = audioContext.current!;
    const currentTime = ctx.currentTime;
    
    // Create oscillator for the main click
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    // Create a filter for more mechanical sound
    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 800;
    
    // Connect nodes
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    
    // Configure the click sound (mechanical/ratchet-like)
    osc.frequency.setValueAtTime(2500, currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, currentTime + 0.01);
    
    // Quick attack and decay for click feel
    gain.gain.setValueAtTime(0, currentTime);
    gain.gain.linearRampToValueAtTime(0.3, currentTime + 0.001);
    gain.gain.exponentialRampToValueAtTime(0.01, currentTime + 0.02);
    gain.gain.linearRampToValueAtTime(0, currentTime + 0.03);
    
    // Add a second click for mechanical feel
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    
    osc2.frequency.setValueAtTime(1200, currentTime + 0.015);
    gain2.gain.setValueAtTime(0.1, currentTime + 0.015);
    gain2.gain.exponentialRampToValueAtTime(0.01, currentTime + 0.025);
    
    // Start and stop oscillators
    osc.start(currentTime);
    osc.stop(currentTime + 0.03);
    osc2.start(currentTime + 0.015);
    osc2.stop(currentTime + 0.03);
  };
  
  return playClick;
};

// Burger Icon Component with smooth animation
const BurgerIcon = ({ isOpen }) => {
  return (
    <div className="w-6 h-6 flex flex-col justify-center items-center">
      <span 
        className={`block w-full h-0.5 bg-black transition-all duration-300 ease-out 
          ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
      />
      <span 
        className={`block w-full h-0.5 bg-black my-1 transition-all duration-300 ease-out 
          ${isOpen ? 'opacity-0' : ''}`}
      />
      <span 
        className={`block w-full h-0.5 bg-black transition-all duration-300 ease-out 
          ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
      />
    </div>
  );
};

// Menu Item Component with animation
type MenuItemProps = {
  item: { href: string; label: string };
  index: number;
  isVisible: boolean;
  onClose: () => void;
  playSound: () => void;
};

const MenuItem = ({ item, index, isVisible, onClose, playSound }: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <li
      className={`
        transform transition-all duration-300 ease-out
        ${isVisible 
          ? 'translate-x-0 opacity-100' 
          : '-translate-x-4 opacity-0'
        }
      `}
      style={{
        transitionDelay: isVisible ? `${index * 80}ms` : '0ms'
      }}
    >
      <a 
        href={item.href}
        className={`
          block py-3 px-4 rounded-lg relative overflow-hidden
          transition-all duration-200 ease-out
          ${isHovered ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}
          focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black
        `}
        onClick={(e) => {
          playSound();
          setTimeout(() => onClose(), 150);
        }}
        onMouseEnter={() => {
          setIsHovered(true);
          playSound();
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated focus indicator */}
        <span 
          className={`
            absolute left-0 top-0 h-full w-1 bg-black transform origin-left
            transition-transform duration-200 ease-out
            ${isHovered ? 'scale-x-100' : 'scale-x-0'}
          `}
        />
        
        {/* Text with padding to account for indicator */}
        <span className="relative z-10 block pl-2">
          {item.label}
        </span>
        
        {/* Subtle glow effect on hover */}
        {isHovered && (
          <span 
            className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-transparent 
              animate-pulse pointer-events-none"
          />
        )}
      </a>
    </li>
  );
};

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const playClick = useClickSound();

  // Navigation items
  const navItems = [
    { href: '#concept', label: 'Concept' },
    { href: '#store', label: 'Popup store' },
    { href: '#collection', label: 'Collection' }
  ];

  // Toggle mobile menu with sound
  const toggleMenu = () => {
    playClick();
    
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsMenuOpen(false), 300);
    }
  };

  // Close menu
  const closeMenu = () => {
    setIsAnimating(false);
    setTimeout(() => setIsMenuOpen(false), 300);
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: { key: string; }) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: { target: Node | null; }) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full">
      <nav 
        ref={navRef}
        className="animate-tipsy px-4 py-4 md:px-8" 
        aria-label="Navigation principale"
      >
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <h1 className="text-xl md:text-2xl font-medium">
            <a 
              href="/" 
              aria-label="Louis Vuitton - Accueil"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded"
            >
              LOUIS VUITTON
            </a>
          </h1>

          {/* Desktop Navigation */}
          <ul className=" hidden tablet:flex gap-6 lg:gap-10 text-base lg:text-lg font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href}
                  className="relative group px-1"
                  onMouseEnter={playClick}
                >
                  <span className="relative z-10">
                    {item.label}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black 
                    transform scale-x-0 group-hover:scale-x-100 
                    transition-transform duration-200 ease-out origin-left" 
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="tablet:hidden p-2 -mr-2 relative group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {/* Subtle rotation on hover */}
            <div className="group-hover:rotate-180 transition-transform duration-500">
              <BurgerIcon isOpen={isMenuOpen} />
            </div>
          </button>
        </div>

        {/* Mobile Menu with staggered animation */}
        <div
  id="mobile-menu"
  className={`
    tablet:hidden overflow-hidden transition-all duration-300 ease-out
    ${isMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'}
  `}
  aria-hidden={!isMenuOpen ? "true" : "false"}
>
          <ul className="space-y-2 pb-4">
            {navItems.map((item, index) => (
              <MenuItem
                key={item.href}
                item={item}
                index={index}
                isVisible={isAnimating}
                onClose={closeMenu}
                playSound={playClick}
              />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;