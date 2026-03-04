import { motion } from "framer-motion";
import "@/App.css";
import { FaWhatsapp, FaMapMarkerAlt, FaBookOpen, FaGlobe, FaStar, FaInstagram, FaHandshake } from "react-icons/fa";

// Company Links
const LINKS = {
  whatsapp: "https://api.whatsapp.com/send/?phone=62985230431&text&type=phone_number&app_absent=0",
  maps: "https://www.google.com/maps?q=Plastilu+Embalagens+-+Sacos+Pl%C3%A1sticos+e+Embalagens+Pl%C3%A1sticas+-+R.+dos+Mios%C3%B3tis,+183+-+Qd+11+-+Lt+05+-+Parque+Oeste+Industrial,+Goi%C3%A2nia+-+GO,+74375-650&ftid=0x935ef5d4d081a1ef:0xbea1541cc0c11d82&entry=gps",
  catalog: "https://drive.google.com/file/d/1XyWsjmus6cGWMpr7TkSG3eWVLFWJHZtH/view",
  website: "https://plastiluembalagens.com.br/",
  googleReview: "https://share.google/TB18y0Fcyw20PATzI",
  instagram: "https://www.instagram.com/plastilu.embalagens?igsh=MXdreGI0eGR0bHN1",
  representative: "https://api.whatsapp.com/send/?phone=5562985230431&text=Olá! Gostaria de saber mais sobre ser um representante.&type=phone_number&app_absent=0"
};

// Banner Image URL
const BANNER_IMAGE = "https://customer-assets.emergentagent.com/job_plastilu-oficial/artifacts/31snfrpo_01-1-1536x1024-removebg-preview.png";

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

// Float animation for the banner image
const floatAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Premium Button Component
const PremiumButton = ({ href, icon: Icon, title, subtitle, testId }) => (
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

// Animated Lines - Only moving lines, closer to title
const AnimatedTitleLines = () => (
  <div className="animated-title-lines">
    <div className="title-line title-line-top" />
    <div className="title-line title-line-bottom" />
  </div>
);

// Hero Section with Banner Image
const HeroSection = () => (
  <section className="hero-section-enhanced" data-testid="hero-section">
    {/* Enhanced Blue Gradient Background */}
    <div className="hero-gradient-bg" />
    
    {/* Floating Banner Image */}
    <motion.div
      className="banner-image-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.img
        src={BANNER_IMAGE}
        alt="Embalagens Plásticas PlastiLu"
        className="banner-image"
        animate={floatAnimation}
        data-testid="banner-image"
      />
    </motion.div>

    {/* Premium Title with Luxury Style */}
    <motion.div
      className="premium-title-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <AnimatedTitleLines />
      <h1 className="luxury-title" data-testid="main-title">
        <span className="luxury-text-gradient">Embalagens plásticas</span>
        <span className="luxury-text-white"> em geral, lisas e impressas.</span>
      </h1>
    </motion.div>
  </section>
);

// Institutional Text Section
const InstitutionalSection = () => (
  <motion.section
    className="text-center py-6 px-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.8 }}
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
        href={LINKS.representative}
        icon={FaHandshake}
        title="Seja um Representante"
        subtitle="Faça parte do nosso time"
        testId="btn-representative"
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

// Differential Section with Luxury Title
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
      <motion.h2
        className="luxury-title-secondary"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        data-testid="differential-title"
      >
        <span className="luxury-text-gradient">De Goiânia</span>
        <span className="luxury-text-white"> para todas as regiões do Brasil.</span>
      </motion.h2>
      
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
    <div className="min-h-screen bg-black" data-testid="app-container">
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
