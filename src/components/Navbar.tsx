import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X, Printer, Search, ArrowUp, BookmarkCheck, FileText, Check } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  fontSize: 'normal' | 'large';
  setFontSize: (size: 'normal' | 'large') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, fontSize, setFontSize }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('quan-diem');

  // Reading progress bar animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Detect active section
      const sections = ['quan-diem', 'nguyen-tac', 'nhiem-vu', 'thuc-hien'];
      const scrollPosition = window.scrollY + 200;

      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'quan-diem', label: '1. Quan điểm', short: 'Quan điểm' },
    { id: 'nguyen-tac', label: '2. Nguyên tắc', short: 'Nguyên tắc' },
    { id: 'nhiem-vu', label: '3. 5 nhiệm vụ trọng tâm', short: 'Nhiệm vụ' },
    { id: 'thuc-hien', label: '4. Thực hiện', short: 'Thực hiện' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 w-full no-print">
      {/* Reading Progress Bar (Thin red/gold gradient) */}
      <motion.div
        className="h-[3px] bg-gradient-to-r from-red-600 via-amber-500 to-red-700 origin-left w-full fixed top-0 left-0 z-50 shadow-xs"
        style={{ scaleX }}
      />

      {/* Main Navbar Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-md border-b border-slate-200/90'
            : 'bg-[#1E1B4B]/95 text-white border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand / Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shadow-sm transition-transform group-hover:scale-105 ${
                isScrolled ? 'bg-red-700 text-white' : 'bg-red-600 text-white'
              }`}
            >
              26
            </div>
            <div>
              <div
                className={`text-[11px] font-bold tracking-widest uppercase ${
                  isScrolled ? 'text-red-700' : 'text-amber-400'
                }`}
              >
                CHUYÊN ĐỀ CHÍNH SÁCH
              </div>
              <div
                className={`text-xs sm:text-sm font-bold tracking-tight truncate max-w-[200px] sm:max-w-xs md:max-w-none ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}
              >
                Vị trí việc làm & Biên chế 2026–2031
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    isActive
                      ? isScrolled
                        ? 'bg-red-100/80 text-red-800 font-bold'
                        : 'bg-white/20 text-white font-bold'
                      : isScrolled
                      ? 'text-slate-600 hover:text-red-700 hover:bg-slate-100'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Utility Tools */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                isScrolled
                  ? 'text-slate-700 bg-slate-100 hover:bg-slate-200'
                  : 'text-white bg-white/10 hover:bg-white/20'
              }`}
              title="Tìm kiếm từ khóa trong chính sách (Ctrl+K)"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Tìm kiếm</span>
            </button>

            {/* Font Size Toggle */}
            <button
              onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
              className={`p-2 rounded-lg text-xs font-bold transition-colors ${
                isScrolled
                  ? 'text-slate-700 bg-slate-100 hover:bg-slate-200'
                  : 'text-white bg-white/10 hover:bg-white/20'
              }`}
              title="Đổi kích thước phông chữ"
            >
              {fontSize === 'normal' ? 'A+' : 'A-'}
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className={`p-2 rounded-lg text-xs font-semibold hidden md:flex items-center gap-1 transition-colors ${
                isScrolled
                  ? 'text-slate-700 bg-slate-100 hover:bg-slate-200'
                  : 'text-white bg-white/10 hover:bg-white/20'
              }`}
              title="In bản infographic này"
            >
              <Printer className="w-4 h-4" />
              <span>In ấn</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg lg:hidden transition-colors ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 p-4 shadow-xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-red-50 text-red-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && <span className="w-2 h-2 rounded-full bg-red-600" />}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={onOpenSearch}
              className="text-xs font-semibold text-slate-600 flex items-center gap-1.5"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span>Tìm kiếm văn bản</span>
            </button>
            <button
              onClick={handlePrint}
              className="text-xs font-semibold text-slate-600 flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span>In trang</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
