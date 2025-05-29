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
    if (!audioContext.current) {
      audioContext.current = new (window.AudioContext || window.webkitAudioContext!)();
    }
    const ctx = audioContext.current!;
    const currentTime = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 800;
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(2500, currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, currentTime + 0.01);
    gain.gain.setValueAtTime(0, currentTime);
    gain.gain.linearRampToValueAtTime(0.3, currentTime + 0.001);
    gain.gain.exponentialRampToValueAtTime(0.01, currentTime + 0.02);
    gain.gain.linearRampToValueAtTime(0, currentTime + 0.03);
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.frequency.setValueAtTime(1200, currentTime + 0.015);
    gain2.gain.setValueAtTime(0.1, currentTime + 0.015);
    gain2.gain.exponentialRampToValueAtTime(0.01, currentTime + 0.025);
    osc.start(currentTime);
    osc.stop(currentTime + 0.03);
    osc2.start(currentTime + 0.015);
    osc2.stop(currentTime + 0.03);
  };

  return playClick;
};

// Burger Icon Component
type BurgerIconProps = {
  isOpen: boolean;
};

const BurgerIcon = ({ isOpen }: BurgerIconProps) => (
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

type MenuItemProps = {
  item: { href: string; label: string };
  index: number;
  isVisible: boolean;
  selectedIndex: number | null;
  setSelectedIndex: (idx: number | null) => void;
  onClose: () => void;
  playSound: () => void;
};

const MenuItem = ({
  item,
  index,
  isVisible,
  selectedIndex,
  setSelectedIndex,
  onClose,
  playSound
}: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Double tap/click: 1 pour sélectionner, 2 pour naviguer
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    playSound();
    if (selectedIndex === index) {
      setSelectedIndex(null);
      onClose();
      window.location.href = item.href; // Pour navigation SPA, remplacer ici
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <li className={`transform transition-all duration-300 ease-out
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
          ${selectedIndex === index ? 'bg-gray-900 text-white ring-2 ring-black' : ''}
          ${isHovered && selectedIndex !== index ? 'bg-gray-100' : ''}
          focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black
        `}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span
          className={`
            absolute left-0 top-0 h-full w-1 bg-black transform origin-left
            transition-transform duration-200 ease-out
            ${isHovered || selectedIndex === index ? 'scale-x-100' : 'scale-x-0'}
          `}
        />
        <span className="relative z-10 block pl-2">{item.label}</span>
        {(isHovered || selectedIndex === index) && (
          <span className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-transparent animate-pulse pointer-events-none" />
        )}
      </a>
    </li>
  );
};

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const playClick = useClickSound();

  // Tes items
  const navItems = [
    { href: '#concept', label: 'Concept' },
    { href: '#store', label: 'Popup store' },
    { href: '#collection', label: 'Collection' }
  ];

  // Toggle burger menu mobile
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

  // Close mobile menu
  const closeMenu = () => {
    setIsAnimating(false);
    setTimeout(() => setIsMenuOpen(false), 300);
  };

  // Reset sélection quand menu ferme
  useEffect(() => {
    if (!isMenuOpen) {
      setSelectedIndex(null);
    }
  }, [isMenuOpen]);

  // Ferme menu sur Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Ferme menu si click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && event.target instanceof Node && !navRef.current.contains(event.target)) {
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

  // Ferme menu mobile quand on resize en desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) { // 640px = tablet, adapte selon ta config
        setIsMenuOpen(false);
        setIsAnimating(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="w-full">
      <nav
        ref={navRef}
        className="animate-tipsy px-4 py-4 tablet:px-8"
        aria-label="Navigation principale"
      >
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <h1 className="text-xl tablet:text-2xl font-medium">
            <a
              href="/"
              aria-label="Louis Vuitton - Accueil"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded"
            >
              LOUIS VUITTON
            </a>
          </h1>
          {/* Desktop Navigation */}
          <ul className="hidden tablet:flex gap-6 laptop:gap-10 text-base laptop:text-lg font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative group px-1"
                  onMouseEnter={playClick}
                >
                  <span className="relative z-10">{item.label}</span>
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
            className="tablet:hidden p-2 -mr-2 relative group
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <div className="group-hover:rotate-180 transition-transform duration-500">
              <BurgerIcon isOpen={isMenuOpen} />
            </div>
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`
            tablet:hidden overflow-hidden transition-all duration-300 ease-out
            ${isMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'}
          `}
          aria-hidden={!isMenuOpen}
        >
          <ul className="space-y-2 pb-4">
            {navItems.map((item, index) => (
              <MenuItem
                key={item.href}
                item={item}
                index={index}
                isVisible={isAnimating}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
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
