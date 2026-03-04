import { motion } from "framer-motion";
import "@/App.css";
import { FaWhatsapp, FaMapMarkerAlt, FaBookOpen, FaGlobe, FaStar, FaInstagram } from "react-icons/fa";

// Company Links
const LINKS = {
  whatsapp: "https://api.whatsapp.com/send/?phone=62985230431&text&type=phone_number&app_absent=0",
  maps: "https://www.google.com/maps?q=Plastilu+Embalagens+-+Sacos+Pl%C3%A1sticos+e+Embalagens+Pl%C3%A1sticas+-+R.+dos+Mios%C3%B3tis,+183+-+Qd+11+-+Lt+05+-+Parque+Oeste+Industrial,+Goi%C3%A2nia+-+GO,+74375-650&ftid=0x935ef5d4d081a1ef:0xbea1541cc0c11d82&entry=gps",
  catalog: "https://drive.google.com/file/d/1XyWsjmus6cGWMpr7TkSG3eWVLFWJHZtH/view",
  website: "https://plastiluembalagens.com.br/",
  googleReview: "https://share.google/TB18y0Fcyw20PATzI",
  instagram: "https://www.instagram.com/plastiluembalagens/"
};

// Logo URL
const LOGO_URL = "https://customer-assets.emergentagent.com/job_f2174556-e75a-4d9f-b9a1-79033e0c94cb/artifacts/j5w85uic_logo_plastiti-removebg-preview.png";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Premium Button Component
const PremiumButton = ({ href, icon: Icon, title, subtitle, testId, delay = 0 }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="premium-btn"
    data-testid={testId}
    variants={itemVariants}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="btn-icon">
      <Icon className="text-white text-lg" />
    </div>
    <div className="flex flex-col items-start">
      <span className="text-slate-100 font-semibold">{title}</span>
      {subtitle && <span className="text-slate-400 text-xs">{subtitle}</span>}
    </div>
  </motion.a>
);

// Animated Background Lines
const AnimatedLines = () => (
  <div className="animated-bg-lines">
    <div className="bg-line bg-line-1" />
    <div className="bg-line bg-line-2" />
    <div className="bg-line bg-line-3" />
    <div className="bg-line bg-line-4" />
  </div>
);

// Hero Section
const HeroSection = () => (
  <section className="hero-section bg-gradient-premium" data-testid="hero-section">
    <AnimatedLines />
    
    {/* Logo */}
    <motion.div
      className="logo-container mb-6"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img
        src={LOGO_URL}
        alt="PlastiLu Embalagens"
        className="logo-glow w-36 h-36 md:w-44 md:h-44 object-contain rounded-full"
        data-testid="company-logo"
      />
    </motion.div>

    {/* Premium Text with Animated Lines */}
    <motion.div
      className="premium-text-wrapper text-center z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="premium-line premium-line-top" />
      <h1 className="font-outfit text-xl md:text-2xl font-medium text-slate-100 px-4 py-3">
        Embalagens plásticas em geral, lisas e impressas.
      </h1>
      <div className="premium-line premium-line-bottom" />
    </motion.div>
  </section>
);

// Institutional Text Section
const InstitutionalSection = () => (
  <motion.section
    className="text-center py-6 px-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.6 }}
    data-testid="institutional-section"
  >
    <p className="text-slate-400 text-sm md:text-base tracking-wide">
      Sacos e Filmes em PP e PE • Stretch • Shrink • Bobinas
    </p>
  </motion.section>
);

// Buttons Section
const ButtonsSection = () => (
  <motion.section
    className="px-4 pb-8 max-w-md mx-auto"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    data-testid="buttons-section"
  >
    <div className="space-y-3">
      <PremiumButton
        href={LINKS.whatsapp}
        icon={FaWhatsapp}
        title="Fale com a gente"
        subtitle="WhatsApp"
        testId="btn-whatsapp"
      />
      
      <PremiumButton
        href={LINKS.maps}
        icon={FaMapMarkerAlt}
        title="Como chegar"
        subtitle="Localização"
        testId="btn-maps"
      />
      
      <PremiumButton
        href={LINKS.catalog}
        icon={FaBookOpen}
        title="Catálogo"
        subtitle="Nossos produtos"
        testId="btn-catalog"
      />
      
      <PremiumButton
        href={LINKS.website}
        icon={FaGlobe}
        title="Site"
        subtitle="plastiluembalagens.com.br"
        testId="btn-website"
      />
      
      <PremiumButton
        href={LINKS.googleReview}
        icon={FaStar}
        title="Avalie-nos no Google"
        subtitle="Sua opinião importa"
        testId="btn-google-review"
      />
    </div>
  </motion.section>
);

// Differential Section
const DifferentialSection = () => (
  <motion.section
    className="py-8 px-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 1 }}
    data-testid="differential-section"
  >
    {/* Glow Divider */}
    <div className="glow-divider" />
    
    <div className="text-center space-y-4 max-w-md mx-auto">
      <motion.p
        className="text-slate-100 font-outfit text-lg md:text-xl font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        De Goiânia para todas as regiões do Brasil.
      </motion.p>
      
      <motion.div
        className="flex flex-wrap justify-center gap-x-4 gap-y-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      >
        <div className="features-item">
          <div className="features-dot" />
          <span>Qualidade</span>
        </div>
        <div className="features-item">
          <div className="features-dot" />
          <span>Agilidade</span>
        </div>
        <div className="features-item">
          <div className="features-dot" />
          <span>Impressão personalizada</span>
        </div>
        <div className="features-item">
          <div className="features-dot" />
          <span>Entrega eficiente</span>
        </div>
      </motion.div>
    </div>
    
    {/* Glow Divider */}
    <div className="glow-divider" />
  </motion.section>
);

// Footer Section
const FooterSection = () => (
  <motion.footer
    className="py-8 px-4 text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 1.6 }}
    data-testid="footer-section"
  >
    {/* Social Link */}
    <div className="flex justify-center mb-4">
      <a
        href={LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        data-testid="social-instagram"
        aria-label="Instagram PlastiLu"
      >
        <FaInstagram className="text-lg" />
      </a>
    </div>
    
    {/* Copyright */}
    <p className="text-slate-500 text-xs">
      © {new Date().getFullYear()} PlastiLu Ind. Embalagens
    </p>
    <p className="text-slate-600 text-xs mt-1">
      Goiânia - GO
    </p>
  </motion.footer>
);

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-black noise-texture" data-testid="app-container">
      <main className="max-w-lg mx-auto">
        <HeroSection />
        <InstitutionalSection />
        <ButtonsSection />
        <DifferentialSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
