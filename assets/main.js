// ===== AOS (Animate On Scroll) INITIALIZATION =====
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
  easing: 'ease-in-out-cubic'
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ===== HERO SECTION ANIMATIONS (anime.js) =====
window.addEventListener('load', () => {
  const heroTitle = document.getElementById('heroTitle');
  const heroText = document.querySelector('.hero-text');
  const heroSubtext = document.querySelector('.hero-subtext');
  const heroCTA = document.querySelector('.hero-cta');

  if (typeof anime !== 'undefined' && heroTitle) {
    // Başlık animasyonu
    anime({
      targets: heroTitle,
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 1200,
      easing: 'easeOutCubic',
      delay: 200
    });

    // Paragraf animasyonu
    if (heroText) {
      anime({
        targets: heroText,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        easing: 'easeOutCubic',
        delay: 500
      });
    }

    if (heroSubtext) {
      anime({
        targets: heroSubtext,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        easing: 'easeOutCubic',
        delay: 700
      });
    }

    // CTA butonları animasyonu
    if (heroCTA) {
      anime({
        targets: heroCTA,
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 800,
        easing: 'easeOutBack',
        delay: 900
      });
    }
  } else {
    // Fallback animasyon (anime.js yoksa)
    if (heroTitle) {
      heroTitle.style.transition = 'all 1.2s ease';
      heroTitle.style.opacity = '1';
      heroTitle.style.transform = 'translateY(0)';
    }
    if (heroText) {
      setTimeout(() => {
        heroText.style.transition = 'all 1s ease';
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
      }, 500);
    }
    if (heroSubtext) {
      setTimeout(() => {
        heroSubtext.style.transition = 'all 1s ease';
        heroSubtext.style.opacity = '1';
        heroSubtext.style.transform = 'translateY(0)';
      }, 700);
    }
    if (heroCTA) {
  setTimeout(() => {
        heroCTA.style.transition = 'all 0.8s ease';
        heroCTA.style.opacity = '1';
        heroCTA.style.transform = 'scale(1)';
      }, 900);
    }
  }
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// ===== LANGUAGE TOGGLE (Türkçe/İngilizce) =====
const langToggle = document.getElementById('langToggle');
let currentLang = 'tr';

const translations = {
  tr: {
    // Navbar
    'navHome': 'Ana Sayfa',
    'navAbout': 'Hakkımızda',
    'navServices': 'Hizmetler',
    'navContact': 'İletişim',
    
    // Index Page
    'heroTitle': 'Offensive & Defensive<br>Cybersecurity Consulting',
    'heroText': 'Ofansif ve defansif güvenliğin birleştiği noktada, Milenium Security kurumların dijital varlıklarını korur, test eder ve geliştirir.',
    'heroSubtext': '360° danışmanlık yaklaşımıyla siber dayanıklılığı artırır.',
    'btnServices': 'Hizmetlerimizi Keşfet',
    'btnAbout': 'Hakkımızda',
    'featuresTitle': 'Neden Milenium Security?',
    'feature1Title': 'Offensive Security',
    'feature1Text': 'Kapsamlı penetrasyon testleri ve Red Team operasyonları ile saldırı yüzeyinizi minimize edin.',
    'feature2Title': 'Defensive Security',
    'feature2Text': 'SIEM/EDR kurulumu, tehdit avcılığı ve olay müdahale ile savunma hatlarınızı güçlendirin.',
    'feature3Title': 'GRC & Compliance',
    'feature3Text': 'ISO 27001, NIST, CIS ve KVKK uyumluluğu ile risk yönetimi ve süreklilik planlaması.',
    'feature4Title': 'DevSecOps',
    'feature4Text': 'Güvenli yazılım geliştirme, CI/CD güvenliği ve bulut altyapı koruması.',
    'footerText': 'Siber Güvenlikte Uzmanlık, Başarı ve Güven',
    
    // Statistics
    'statsTitle': 'Rakamlarla Başarımız',
    'statsSubtitle': 'Profesyonel hizmetlerimizle siber güvenlikte fark yaratıyoruz',
    'systemsLabel': 'Müdahale Ettiğimiz Sistem',
    'recoveryLabel': 'Kurtarılan Sistem Yüzdesi',
    'vulnerabilityLabel': 'Saldırganlardan Önce Bulma Oranı',
    'successLabel': 'Genel Başarı Oranımız',
    
    // Success Story
    'successTitle': 'Başarı Hikayeleremizden Sadece Birisi',
    'successBadge': 'Kritik Durum Müdahalesi',
    'successTime': '48 Saat İçinde Çözüm',
    'successText1': 'Çalıştığımız kurumlardan birisine sızan bir virüs, tüm yedekleri yok etmiş ve sistemi tamamen kilitlemişti. Kritik bir durumda olan kurum, operasyonel faaliyetlerini durdurmak zorunda kalmış ve ciddi bir prestij ve maddi kayıp riskiyle karşı karşıyaydı.',
    'successText2': 'Milenium Security ekibi olarak, 48 saat içerisinde virüsün tamamen temizlenmesini ve sistemin geri kullanılabilir hale gelmesini sağladık. Kurumun prestijini koruduk ve milyonlarca liralık maddi kaybı engelledik.',
    'result1': '✓ Prestij Kaybı Engellendi',
    'result2': '✓ Maddi Kayıp Önlendi',
    'result3': '✓ Sistem 48 Saatte Kurtarıldı',
    'result4': '✓ Operasyonel Süreklilik Sağlandı',
    
    // Advantages
    'advantagesTitle': 'Neden Bizi Tercih Etmelisiniz?',
    'adv1Title': 'Multilingual Hizmet',
    'adv1Text': 'Türkçe ve İngilizce olarak profesyonel danışmanlık hizmeti sunuyoruz. Uluslararası müşterilerimizle iletişimde dil bariyeri yaşamıyoruz.',
    'adv2Title': 'Ücretsiz Ön Değerlendirme',
    'adv2Text': 'Güvenlik gereksinimlerinizi ücretsiz olarak değerlendiriyoruz. Projeniz için özelleştirilmiş çözüm önerileri hazırlıyoruz.',
    'adv3Title': 'Kurumsal Strateji',
    'adv3Text': 'Her kurumun ihtiyacına özel siber stratejiler geliştiriyoruz. Teknik çözümlerin yanı sıra, iş sürekliliği ve risk yönetimini de kapsayan bütüncül yaklaşım.',
    'adv4Title': 'Uluslararası Deneyim',
    'adv4Text': 'Letonya ve Azerbaycan Defcon gibi uluslararası konferanslarda sunumlar yaptık. Küresel siber güvenlik ekosisteminin bir parçasıyız.',
    
    // Experts
    'expertsTitle': 'Uzman Ekibimiz',
    'expertsSubtitle': 'Siber güvenlik alanında uluslararası sertifikalara sahip profesyonel ekibimiz',
    'expert1Role': 'Web3/Web Security Researcher | CEH | OSCP | OSCE',
    'expert1Bio': 'Offensive security alanında uzman. Penetrasyon testi, web uygulama güvenliği ve Web3 güvenlik araştırmaları konularında deneyimli.',
    'expert2Role': 'Cyber Security Specialist | Threat Analysis, SIEM, SOC & KVKK & GDPR Compliance',
    'expert2Bio': 'Defensive security ve compliance alanlarında uzman. SIEM/EDR kurulumu, tehdit analizi, KVKK ve GDPR uyumluluğu konularında deneyimli.',
    'companyLinkedinBtn': 'Şirket LinkedIn Sayfamız',
    
    // Achievements
    'achievementsTitle': 'Başarılarımız ve Katılımlarımız',
    'ach1Title': 'Uluslararası Konferans Konuşmaları',
    'ach1Text': 'Letonya ve Azerbaycan Defcon gibi prestijli siber güvenlik konferanslarında ofansif security konularında sunumlar yaptık. Global siber güvenlik topluluğuyla bilgi ve deneyim paylaşımında bulunuyoruz.',
    'ach2Title': 'Kurumlara Özel Siber Stratejiler',
    'ach2Text': 'Her kurumun benzersiz ihtiyaçlarına göre özelleştirilmiş siber güvenlik stratejileri geliştiriyoruz. Teknik altyapıdan risk yönetimine, iş sürekliliğinden uyumluluğa kadar kapsamlı çözümler sunuyoruz.',
    'ach3Title': 'Ofansif Security Başarıları',
    'ach3Text': 'Red Team operasyonları, penetrasyon testleri ve saldırı simülasyonlarında istikrarlı başarılar elde ediyoruz. Müşterilerimizin saldırı yüzeylerini minimize ederek, gerçek dünya tehditlerine karşı hazırlıklı olmalarını sağlıyoruz.',
    
    // About Page
    'aboutPageTitle': 'Hakkımızda',
    'aboutPageSubtitle': 'Ofansif ve Defansif Siber Güvenlikte Uzmanlık',
    'aboutTitle': 'Milenium Security',
    'aboutText1': 'Milenium Security, ofansif (Red Team) ve defansif (Blue Team) güvenlik alanlarında uzmanlaşmış bağımsız bir siber güvenlik danışmanlık firmasıdır.',
    'aboutText2': 'Şirketimiz, ISO 27001, NIST, CIS ve KVKK standartlarına uygun güvenlik yapıları kurarak kurumların risklerini minimize eder.',
    'missionTitle': 'Misyonumuz',
    'missionText': 'Saldırı yüzeyini en aza indirmek, tehditleri erken tespit etmek ve siber güvenliği ölçülebilir hale getirmektir. Kurumların dijital varlıklarını korurken, sürekli gelişen tehdit ortamına karşı proaktif çözümler sunuyoruz.',
    'visionTitle': 'Vizyonumuz',
    'visionText': 'Güvenliği "bir maliyet" değil, "bir değer" olarak konumlandıran kurumsal kültür oluşturmaktır. Siber güvenliğin stratejik bir yatırım olduğu bilinciyle, müşterilerimizin rekabet avantajını artırıyoruz.',
    'valuesTitle': 'Değerlerimiz',
    'value1Text': 'Red Team, Blue Team, GRC ve DevSecOps alanlarında derin teknik bilgi.',
    'value2Text': 'Ofansif ve defansif güvenliği birleştiren 360° danışmanlık modeli.',
    'value3Text': 'Siber güvenlik yatırımlarının ROI\'sini somut metriklerle gösteriyoruz.',
    'value4Text': 'Tehdit ortamındaki değişimleri takip ederek çözümlerimizi güncelliyoruz.',
    'expertiseTitle': 'Uzmanlık Alanlarımız',
    
    // Services Page
    'servicesPageTitle': 'Hizmetlerimiz',
    'servicesPageSubtitle': 'Kapsamlı Siber Güvenlik Danışmanlık Hizmetleri',
    
    // Contact Page
    'contactPageTitle': 'İletişim',
    'contactPageSubtitle': 'Projeleriniz için bizimle iletişime geçin',
    'contactInfoTitle': 'Bizimle İletişime Geçin',
    'contactInfoText': 'Siber güvenlik projeleriniz için profesyonel danışmanlık hizmetlerimizden yararlanmak istiyorsanız, lütfen bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.',
    'linkedinCompanyLabel': 'Şirket LinkedIn',
    'linkedinExpert1Label': 'Azizcan Daştan - LinkedIn',
    'linkedinExpert2Label': 'Özlem Ozan - LinkedIn',
    'websiteLabel': 'Website',
    'contactNote': 'Not: Güvenlik danışmanlığı ve penetrasyon testi hizmetleri için lütfen önceden iletişime geçin. Proje gereksinimlerinize göre özelleştirilmiş teklif hazırlayacağız.',
    'consultationTitle': 'Ücretsiz Danışmanlık',
    'consultationText': 'İlk danışmanlık görüşmesi ücretsizdir. Projenizin güvenlik gereksinimlerini değerlendirip, en uygun çözüm önerilerini sunuyoruz.',
    'cons1': 'Güvenlik gereksinimlerinizin analizi',
    'cons2': 'Özelleştirilmiş çözüm önerileri',
    'cons3': 'Teknik danışmanlık görüşmesi',
    'cons4': 'Detaylı teklif hazırlama'
  },
  en: {
    // Navbar
    'navHome': 'Home',
    'navAbout': 'About',
    'navServices': 'Services',
    'navContact': 'Contact',
    
    // Index Page
    'heroTitle': 'Offensive & Defensive<br>Cybersecurity Consulting',
    'heroText': 'At the intersection of offensive and defensive security, Milenium Security protects, tests, and enhances organizations\' digital assets.',
    'heroSubtext': 'We enhance cyber resilience with a 360° consulting approach.',
    'btnServices': 'Explore Our Services',
    'btnAbout': 'About Us',
    'featuresTitle': 'Why Milenium Security?',
    'feature1Title': 'Offensive Security',
    'feature1Text': 'Minimize your attack surface with comprehensive penetration testing and Red Team operations.',
    'feature2Title': 'Defensive Security',
    'feature2Text': 'Strengthen your defense lines with SIEM/EDR deployment, threat hunting, and incident response.',
    'feature3Title': 'GRC & Compliance',
    'feature3Text': 'Risk management and continuity planning with ISO 27001, NIST, CIS, and GDPR compliance.',
    'feature4Title': 'DevSecOps',
    'feature4Text': 'Secure software development, CI/CD security, and cloud infrastructure protection.',
    'footerText': 'Expertise, Success, and Trust in Cybersecurity',
    
    // Statistics
    'statsTitle': 'Our Success in Numbers',
    'statsSubtitle': 'Making a difference in cybersecurity with our professional services',
    'systemsLabel': 'Systems We Intervened',
    'recoveryLabel': 'System Recovery Percentage',
    'vulnerabilityLabel': 'Vulnerability Detection Rate Before Attackers',
    'successLabel': 'Overall Success Rate',
    
    // Success Story
    'successTitle': 'Our Success Story',
    'successBadge': 'Critical Situation Response',
    'successTime': 'Solution Within 48 Hours',
    'successText1': 'A virus that infiltrated a company (name withheld) had destroyed all backups and completely locked the system. The company in critical condition had to halt its operational activities and faced a serious risk of prestige and financial loss.',
    'successText2': 'As the Milenium Security team, we ensured the complete removal of the virus and restoration of the system to operational status within 48 hours. We preserved the company\'s prestige and prevented millions of liras in financial loss.',
    'result1': '✓ Prestige Loss Prevented',
    'result2': '✓ Financial Loss Prevented',
    'result3': '✓ System Recovered in 48 Hours',
    'result4': '✓ Operational Continuity Ensured',
    
    // Advantages
    'advantagesTitle': 'Why Choose Us?',
    'adv1Title': 'Multilingual Service',
    'adv1Text': 'We provide professional consulting services in Turkish and English. We don\'t experience language barriers in communication with our international clients.',
    'adv2Title': 'Free Preliminary Assessment',
    'adv2Text': 'We evaluate your security requirements for free. We prepare customized solution recommendations for your project.',
    'adv3Title': 'Corporate Strategy',
    'adv3Text': 'We develop customized cybersecurity strategies for each organization\'s needs. A holistic approach covering not only technical solutions but also business continuity and risk management.',
    'adv4Title': 'International Experience',
    'adv4Text': 'We have presented at international conferences such as Defcon in Latvia and Azerbaijan. We are part of the global cybersecurity ecosystem.',
    
    // Experts
    'expertsTitle': 'Our Expert Team',
    'expertsSubtitle': 'Our professional team with international certifications in cybersecurity',
    'expert1Role': 'Web3/Web Security Researcher | CEH | OSCP | OSCE',
    'expert1Bio': 'Expert in offensive security. Experienced in penetration testing, web application security, and Web3 security research.',
    'expert2Role': 'Cyber Security Specialist | Threat Analysis, SIEM, SOC & KVKK & GDPR Compliance',
    'expert2Bio': 'Expert in defensive security and compliance. Experienced in SIEM/EDR deployment, threat analysis, KVKK and GDPR compliance.',
    'companyLinkedinBtn': 'Our Company LinkedIn Page',
    
    // Achievements
    'achievementsTitle': 'Our Achievements and Participation',
    'ach1Title': 'International Conference Presentations',
    'ach1Text': 'We have presented on offensive security topics at prestigious cybersecurity conferences such as Defcon in Latvia and Azerbaijan. We share knowledge and experience with the global cybersecurity community.',
    'ach2Title': 'Custom Cybersecurity Strategies for Organizations',
    'ach2Text': 'We develop customized cybersecurity strategies tailored to each organization\'s unique needs. Comprehensive solutions from technical infrastructure to risk management, from business continuity to compliance.',
    'ach3Title': 'Offensive Security Achievements',
    'ach3Text': 'We achieve consistent success in Red Team operations, penetration tests, and attack simulations. We help our clients minimize their attack surfaces and prepare for real-world threats.',
    
    // About Page
    'aboutPageTitle': 'About Us',
    'aboutPageSubtitle': 'Expertise in Offensive & Defensive Cybersecurity',
    'aboutTitle': 'Milenium Security',
    'aboutText1': 'Milenium Security is an independent cybersecurity consulting firm specializing in offensive (Red Team) and defensive (Blue Team) security domains.',
    'aboutText2': 'Our company minimizes organizational risks by establishing security structures compliant with ISO 27001, NIST, CIS, and GDPR standards.',
    'missionTitle': 'Our Mission',
    'missionText': 'To minimize attack surfaces, detect threats early, and make cybersecurity measurable. We provide proactive solutions while protecting organizations\' digital assets against the constantly evolving threat landscape.',
    'visionTitle': 'Our Vision',
    'visionText': 'To create an organizational culture that positions security not as "a cost" but as "a value." With the understanding that cybersecurity is a strategic investment, we enhance our clients\' competitive advantage.',
    'valuesTitle': 'Our Values',
    'value1Text': 'Deep technical knowledge in Red Team, Blue Team, GRC, and DevSecOps domains.',
    'value2Text': 'A 360° consulting model that combines offensive and defensive security.',
    'value3Text': 'We demonstrate the ROI of cybersecurity investments with concrete metrics.',
    'value4Text': 'We continuously update our solutions by tracking changes in the threat landscape.',
    'expertiseTitle': 'Our Expertise Areas',
    
    // Services Page
    'servicesPageTitle': 'Our Services',
    'servicesPageSubtitle': 'Comprehensive Cybersecurity Consulting Services',
    
    // Contact Page
    'contactPageTitle': 'Contact',
    'contactPageSubtitle': 'Get in touch with us for your projects',
    'contactInfoTitle': 'Get in Touch',
    'contactInfoText': 'If you would like to benefit from our professional consulting services for your cybersecurity projects, please contact us. We will get back to you as soon as possible.',
    'emailLabel': 'Email',
    'linkedinLabel': 'LinkedIn',
    'websiteLabel': 'Website',
    'contactNote': 'Note: Please contact us in advance for security consulting and penetration testing services. We will prepare a customized proposal according to your project requirements.',
    'consultationTitle': 'Free Consultation',
    'consultationText': 'The first consultation meeting is free. We evaluate your project\'s security requirements and present the most suitable solution recommendations.',
    'cons1': 'Analysis of your security requirements',
    'cons2': 'Customized solution recommendations',
    'cons3': 'Technical consultation meeting',
    'cons4': 'Detailed proposal preparation'
  }
};

function translatePage(lang) {
  const elements = document.querySelectorAll('[id]');
  elements.forEach(el => {
    const key = el.id;
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  // Navbar linklerini çevir
  const navLinks = document.querySelectorAll('.main-nav a');
  if (navLinks.length >= 4) {
    navLinks[0].textContent = translations[lang]['navHome'];
    navLinks[1].textContent = translations[lang]['navAbout'];
    navLinks[2].textContent = translations[lang]['navServices'];
    navLinks[3].textContent = translations[lang]['navContact'];
  }
}

if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    langToggle.textContent = currentLang === 'tr' ? 'EN' : 'TR';
    translatePage(currentLang);
    
    // Sayfa dilini localStorage'a kaydet
    localStorage.setItem('preferredLang', currentLang);
  });

  // Sayfa yüklendiğinde kaydedilmiş dili yükle
  const savedLang = localStorage.getItem('preferredLang');
  if (savedLang && savedLang !== 'tr') {
    currentLang = savedLang;
    langToggle.textContent = currentLang === 'tr' ? 'EN' : 'TR';
    translatePage(currentLang);
  }
}

// ===== FADE IN ANIMATION FOR PAGE ELEMENTS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// ===== STATISTICS CHARTS AND COUNTERS =====
let charts = [];
let counters = {};

function createChart(canvasId, value, maxValue, label) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const percentage = (value / maxValue) * 100;

  // Chart.js doughnut chart
  if (typeof Chart !== 'undefined') {
    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          data: [percentage, 100 - percentage],
          backgroundColor: [
            '#f44336',
            'rgba(244, 67, 54, 0.1)'
          ],
          borderWidth: 0,
          cutout: '75%'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
      }
    });
    charts.push(chart);
  }
}

function animateCounter(elementId, target, suffix = '') {
  const element = document.getElementById(elementId);
  if (!element) return;

  let current = 0;
  const increment = target / 100;
  const duration = 2000; // 2 seconds
  const stepTime = duration / 100;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    
    if (suffix === '%') {
      element.textContent = Math.round(current) + suffix;
    } else {
      element.textContent = Math.round(current).toLocaleString() + suffix;
    }
  }, stepTime);

  counters[elementId] = timer;
}

// Initialize statistics when section is visible
function initStatistics() {
  const statsSection = document.getElementById('statistics');
  if (!statsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.initialized) {
        entry.target.dataset.initialized = 'true';

        // Initialize charts and counters
        setTimeout(() => {
          // Systems Chart - 250+ systems
          createChart('systemsChart', 250, 300, 'Systems');
          animateCounter('systemsNumber', 250, '+');
          
          // Recovery Chart - 98%
          createChart('recoveryChart', 98, 100, 'Recovery');
          animateCounter('recoveryNumber', 98, '%');
          
          // Vulnerability Chart - 95%
          createChart('vulnerabilityChart', 95, 100, 'Vulnerability');
          animateCounter('vulnerabilityNumber', 95, '%');
          
          // Success Chart - 99%
          createChart('successChart', 99, 100, 'Success');
          animateCounter('successNumber', 99, '%');
        }, 300);
      }
    });
  }, {
    threshold: 0.3
  });

  observer.observe(statsSection);
}

// Sayfa yüklendiğinde AOS'u yeniden başlat ve istatistikleri başlat
window.addEventListener('load', () => {
  AOS.refresh();
  initStatistics();
});