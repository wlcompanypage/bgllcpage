// script.js - Bergoa9a LLC v2.0 — Full Lead Generation System

const WA_NUMBER = '14075155785';
const WA_BASE   = `https://wa.me/${WA_NUMBER}?text=`;

// ───────────────────────────────────────────
// MODAL HELPERS
// ───────────────────────────────────────────
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Focus the first input for accessibility
  setTimeout(() => {
    const first = modal.querySelector('input, select, textarea');
    if (first) first.focus();
  }, 200);
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on backdrop click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('svc-modal')) {
    e.target.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// Close modals with Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.svc-modal.open').forEach(m => {
      m.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
});

// ───────────────────────────────────────────
// TOAST
// ───────────────────────────────────────────
function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.style.background = isError ? '#c23' : 'var(--deep-green)';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// ───────────────────────────────────────────
// GENERIC FORM → WHATSAPP SENDER
// ───────────────────────────────────────────
function sendToWhatsApp(message, formEl) {
  showToast('Thank you! Your information has been prepared and you are being redirected to WhatsApp.');
  setTimeout(() => {
    window.open(WA_BASE + encodeURIComponent(message), '_blank');
    if (formEl) formEl.reset();
  }, 850);
}

function getVal(formEl, name) {
  const el = formEl.elements[name];
  if (!el) return '';
  return el.value ? el.value.trim() : '';
}

function validateRequired(formEl, fields) {
  for (const name of fields) {
    const v = getVal(formEl, name);
    if (!v) return false;
  }
  return true;
}

// ───────────────────────────────────────────
// SERVICE MODAL FORMS
// ───────────────────────────────────────────

// ── TAX PREPARATION ──
document.addEventListener('DOMContentLoaded', () => {

  // TAX FORM
  const taxForm = document.getElementById('taxForm');
  if (taxForm) {
    taxForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateRequired(taxForm, ['fullName','phone','email','filingType','taxYear','returnType'])) {
        showToast('Please complete all required fields.', true); return;
      }
      const msg =
`Bergoa9a LLC TAX PREPARATION APPLICATION

━━━ PERSONAL INFORMATION ━━━
Name: ${getVal(taxForm,'fullName')}
Phone: ${getVal(taxForm,'phone')}
Email: ${getVal(taxForm,'email')}

━━━ TAX DETAILS ━━━
Filing Type: ${getVal(taxForm,'filingType')}
Tax Year: ${getVal(taxForm,'taxYear')}
Return Type: ${getVal(taxForm,'returnType')}

━━━ ADDITIONAL NOTES ━━━
${getVal(taxForm,'notes') || 'None'}

Submitted via Bergoa9a LLC Website`;
      closeModal('taxModal');
      sendToWhatsApp(msg, taxForm);
    });
  }

  // PERSONAL CREDIT REPAIR FORM
  const personalCreditForm = document.getElementById('personalCreditForm');
  if (personalCreditForm) {
    personalCreditForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateRequired(personalCreditForm, ['fullName','phone','email','creditScore','concerns'])) {
        showToast('Please complete all required fields.', true); return;
      }
      const msg =
`Bergoa9a LLC PERSONAL CREDIT REPAIR APPLICATION

━━━ PERSONAL INFORMATION ━━━
Name: ${getVal(personalCreditForm,'fullName')}
Phone: ${getVal(personalCreditForm,'phone')}
Email: ${getVal(personalCreditForm,'email')}

━━━ CREDIT INFORMATION ━━━
Credit Score Range: ${getVal(personalCreditForm,'creditScore')}
Main Concerns: ${getVal(personalCreditForm,'concerns')}

━━━ FINANCIAL GOALS ━━━
${getVal(personalCreditForm,'goals') || 'Not specified'}

Submitted via Bergoa9a LLC Website`;
      closeModal('personalCreditModal');
      sendToWhatsApp(msg, personalCreditForm);
    });
  }

  // BUSINESS CREDIT REPAIR FORM
  const bizCreditForm = document.getElementById('bizCreditForm');
  if (bizCreditForm) {
    bizCreditForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateRequired(bizCreditForm, ['bizName','ownerName','phone','email','existingCredit'])) {
        showToast('Please complete all required fields.', true); return;
      }
      const msg =
`Bergoa9a LLC BUSINESS CREDIT REPAIR APPLICATION

━━━ BUSINESS INFORMATION ━━━
Business Name: ${getVal(bizCreditForm,'bizName')}
Owner Name: ${getVal(bizCreditForm,'ownerName')}
Phone: ${getVal(bizCreditForm,'phone')}
Email: ${getVal(bizCreditForm,'email')}
EIN: ${getVal(bizCreditForm,'ein') || 'Not provided'}

━━━ CREDIT DETAILS ━━━
Existing Business Credit: ${getVal(bizCreditForm,'existingCredit')}

━━━ FUNDING GOALS ━━━
${getVal(bizCreditForm,'fundingGoals') || 'Not specified'}

Submitted via Bergoa9a LLC Website`;
      closeModal('bizCreditModal');
      sendToWhatsApp(msg, bizCreditForm);
    });
  }

  // BUSINESS FORMATION FORM
  const bizFormationForm = document.getElementById('bizFormationForm');
  if (bizFormationForm) {
    bizFormationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateRequired(bizFormationForm, ['fullName','phone','email','bizName','state','bizType','services'])) {
        showToast('Please complete all required fields.', true); return;
      }
      const msg =
`Bergoa9a LLC BUSINESS FORMATION APPLICATION

━━━ PERSONAL INFORMATION ━━━
Name: ${getVal(bizFormationForm,'fullName')}
Phone: ${getVal(bizFormationForm,'phone')}
Email: ${getVal(bizFormationForm,'email')}

━━━ BUSINESS DETAILS ━━━
Desired Business Name: ${getVal(bizFormationForm,'bizName')}
State of Registration: ${getVal(bizFormationForm,'state')}
Business Type: ${getVal(bizFormationForm,'bizType')}

━━━ SERVICES / PRODUCTS ━━━
${getVal(bizFormationForm,'services')}

Submitted via Bergoa9a LLC Website`;
      closeModal('bizFormModal');
      sendToWhatsApp(msg, bizFormationForm);
    });
  }

  // IMMIGRATION SERVICES FORM
  const immigrationForm = document.getElementById('immigrationForm');
  if (immigrationForm) {
    immigrationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateRequired(immigrationForm, ['fullName','phone','email','serviceType'])) {
        showToast('Please complete all required fields.', true); return;
      }
      const msg =
`Bergoa9a LLC IMMIGRATION SERVICES APPLICATION

━━━ PERSONAL INFORMATION ━━━
Name: ${getVal(immigrationForm,'fullName')}
Phone: ${getVal(immigrationForm,'phone')}
Email: ${getVal(immigrationForm,'email')}

━━━ IMMIGRATION DETAILS ━━━
Service Needed: ${getVal(immigrationForm,'serviceType')}
Current Status: ${getVal(immigrationForm,'currentStatus') || 'Not specified'}

━━━ ADDITIONAL INFORMATION ━━━
${getVal(immigrationForm,'additionalInfo') || 'None'}

Submitted via Bergoa9a LLC Website`;
      closeModal('immigrationModal');
      sendToWhatsApp(msg, immigrationForm);
    });
  }

  // NOTARY SERVICES FORM
  const notaryForm = document.getElementById('notaryForm');
  if (notaryForm) {
    notaryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateRequired(notaryForm, ['fullName','phone','email','documentType','numDocuments','appointmentDate'])) {
        showToast('Please complete all required fields.', true); return;
      }
      const msg =
`Bergoa9a LLC NOTARY SERVICES REQUEST

━━━ PERSONAL INFORMATION ━━━
Name: ${getVal(notaryForm,'fullName')}
Phone: ${getVal(notaryForm,'phone')}
Email: ${getVal(notaryForm,'email')}

━━━ NOTARY DETAILS ━━━
Document Type: ${getVal(notaryForm,'documentType')}
Number of Documents: ${getVal(notaryForm,'numDocuments')}
Preferred Appointment: ${getVal(notaryForm,'appointmentDate')}

Submitted via Bergoa9a LLC Website`;
      closeModal('notaryModal');
      sendToWhatsApp(msg, notaryForm);
    });
  }

  // CERTIFIED TRANSLATION FORM
  const translationForm = document.getElementById('translationForm');
  if (translationForm) {
    translationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateRequired(translationForm, ['fullName','phone','email','documentType','sourceLang','targetLang','numPages'])) {
        showToast('Please complete all required fields.', true); return;
      }
      const msg =
`Bergoa9a LLC CERTIFIED TRANSLATION REQUEST

━━━ PERSONAL INFORMATION ━━━
Name: ${getVal(translationForm,'fullName')}
Phone: ${getVal(translationForm,'phone')}
Email: ${getVal(translationForm,'email')}

━━━ TRANSLATION DETAILS ━━━
Document Type: ${getVal(translationForm,'documentType')}
Source Language: ${getVal(translationForm,'sourceLang')}
Target Language: ${getVal(translationForm,'targetLang')}
Number of Pages: ${getVal(translationForm,'numPages')}

Submitted via Bergoa9a LLC Website`;
      closeModal('translationModal');
      sendToWhatsApp(msg, translationForm);
    });
  }

  // BUSINESS CONSULTING FORM
  const bizConsultingForm = document.getElementById('bizConsultingForm');
  if (bizConsultingForm) {
    bizConsultingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateRequired(bizConsultingForm, ['fullName','phone','email','stage','challenges'])) {
        showToast('Please complete all required fields.', true); return;
      }
      const msg =
`Bergoa9a LLC BUSINESS CONSULTING REQUEST

━━━ CONTACT INFORMATION ━━━
Name: ${getVal(bizConsultingForm,'fullName')}
Business: ${getVal(bizConsultingForm,'bizName') || 'Not specified'}
Phone: ${getVal(bizConsultingForm,'phone')}
Email: ${getVal(bizConsultingForm,'email')}

━━━ BUSINESS PROFILE ━━━
Business Stage: ${getVal(bizConsultingForm,'stage')}

━━━ MAIN CHALLENGES ━━━
${getVal(bizConsultingForm,'challenges')}

━━━ CONSULTING GOALS ━━━
${getVal(bizConsultingForm,'goals') || 'Not specified'}

Submitted via Bergoa9a LLC Website`;
      closeModal('bizConsultingModal');
      sendToWhatsApp(msg, bizConsultingForm);
    });
  }

  // ═══════════════════════════════════
  // GENERAL CONTACT FORM
  // ═══════════════════════════════════
  const form = document.getElementById('bgForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const fullName = document.getElementById('fullName').value.trim();
      const email    = document.getElementById('email').value.trim();
      const phone    = document.getElementById('phone').value.trim();
      const service  = document.getElementById('service').value;
      const message  = document.getElementById('message').value.trim();

      if (!fullName || !phone || !service) {
        showToast('Please complete all required fields.', true);
        return;
      }

      const text =
`Bergoa9a LLC GENERAL INQUIRY

Name: ${fullName}
Email: ${email || 'Not provided'}
Phone: ${phone}
Service: ${service}
Message: ${message || 'No message'}

Submitted via Bergoa9a LLC Website`;

      sendToWhatsApp(text, form);
    });
  }

  // ═══════════════════════════════════
  // NAVBAR
  // ═══════════════════════════════════
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  function handleNavbar() {
    const currentScroll = window.scrollY;
    if (currentScroll > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    if (currentScroll > lastScroll && currentScroll > 300) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleNavbar);

  // ═══════════════════════════════════
  // SCROLL REVEAL
  // ═══════════════════════════════════
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => revealObserver.observe(el));

  // ═══════════════════════════════════
  // HERO PARALLAX
  // ═══════════════════════════════════
  const heroVisual = document.querySelector('.hero-visual');
  if (heroVisual) {
    window.addEventListener('scroll', () => {
      heroVisual.style.transform = `translateY(${window.scrollY * -0.08}px)`;
    });
  }

  // ═══════════════════════════════════
  // FAQ ACCORDION
  // ═══════════════════════════════════
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // ═══════════════════════════════════
  // MOBILE MENU
  // ═══════════════════════════════════
  const hamburgerBtn    = document.getElementById('hamburgerBtn');
  const mobileMenu      = document.getElementById('mobileMenu');
  const closeMobileMenu = document.getElementById('closeMobileMenu');

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    closeMobileMenu.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ═══════════════════════════════════
  // SERVICE CARD ICON HOVER
  // ═══════════════════════════════════
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const icon = card.querySelector('.service-icon');
      if (icon) icon.style.transform = 'scale(1.12) rotate(-8deg)';
    });
    card.addEventListener('mouseleave', () => {
      const icon = card.querySelector('.service-icon');
      if (icon) icon.style.transform = '';
    });
  });

  // ═══════════════════════════════════
  // LAZY IMAGES
  // ═══════════════════════════════════
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    });
    document.querySelectorAll('img[loading="lazy"]').forEach(img => imageObserver.observe(img));
  }

  console.log('%c✅ Bergoa9a LLC v2.0 — Lead Generation System Loaded', 'color:#3F7A57;font-family:Fraunces;font-size:14px;');

}); // end DOMContentLoaded

// ═══════════════════════════════════
// LEGAL MODALS
// ═══════════════════════════════════
const legalModal     = document.getElementById('legalModal');
const legalTitle     = document.getElementById('legalTitle');
const legalContent   = document.getElementById('legalContent');
const closeLegalModal = document.getElementById('closeLegalModal');

const legalTexts = {
  terms: {
    title: 'Terms of Use',
    content: `
      <p><strong>Last updated: June 23, 2026</strong></p>
      <p>Welcome to Bergoa9a LLC. By accessing or using our website and services, you agree to be bound by these Terms of Use.</p>
      <h4>1. Services</h4>
      <p>Bergoa9a LLC provides loan referral services, financial education classes, credit repair assistance, immigration document preparation, notary services, certified translation, business formation and consulting.</p>
      <h4>Credit Reporting Authorization</h4>
      <p>
      By using our loan-related services, users understand that credit verification
      may be required as part of the evaluation process.
      </p>
      <h4>2. No Financial Advice</h4>
      <p>All information provided is for educational purposes only and does not constitute financial, legal, or tax advice.</p>
      <h4>3. User Responsibilities</h4>
      <p>You agree to provide accurate information and use our services lawfully.</p>
      <p style="margin-top:30px;opacity:0.7;font-size:13px;">© 2026 Bergoa9a LLC. All rights reserved.</p>
    `
  },
  privacy: {
    title: 'Privacy Policy',
    content: `
      <p><strong>Last updated: June 23, 2026</strong></p>
      <p>We respect your privacy. This Privacy Policy explains how we collect, use, and protect your information.</p>
      <h4>Information We Collect</h4>
      <ul>
        <li>Contact information (name, email, phone)</li>
        <li>Financial information for service processing</li>
        <li>Usage data and cookies</li>
      </ul>
      <h4>How We Use Your Information</h4>
      <p>To provide and improve our services, communicate with you, and comply with legal obligations.</p>
      <p style="margin-top:30px;opacity:0.7;font-size:13px;">We do not sell your personal data to third parties.</p>
    `
  },
  'ca-notice': {
    title: 'California Notice of Collection',
    content: `<p><strong>California Residents – Notice of Collection</strong></p><p>Under the California Consumer Privacy Act (CCPA/CPRA), we collect the following categories of personal information: identifiers, commercial information, and internet or other electronic network activity information.</p>`
  },
  'data-use': {
    title: 'Data Collection and Use',
    content: `<p>We collect data to improve your experience and deliver better financial services. Data collected through our forms is transmitted via WhatsApp and is not stored on our servers.</p>`
  },
  accessibility: {
    title: 'Accessibility Statement',
    content: `<p>Bergoa9a LLC is committed to ensuring digital accessibility for all users. We strive to meet WCAG 2.1 Level AA standards.</p>`
  },
  sec: {
    title: 'SEC Filing',
    content: `<p>Bergoa9a LLC is a registered entity. SEC filings and regulatory information are available upon request.</p>`
  },
  disclosures: {
  title: 'Disclosures and Agreements',
  content: `
    <p><strong>Loan and Credit Disclosure</strong></p>

    <p>
    All loan products and financial services offered through Bergoa9a LLC
    are subject to eligibility requirements, verification, and applicable laws.
    Approval is not guaranteed and depends on the information provided by the applicant.
    </p>

    <h4>Credit Verification</h4>

    <p>
    As part of the loan application process, Bergoa9a LLC may obtain and review
    consumer credit information from authorized credit reporting agencies to verify
    credit history, financial responsibility, and eligibility.
    </p>

    <h4>Fair Credit Reporting Act (FCRA)</h4>

    <p>
    Credit information is collected, used, and disclosed in accordance with the
    Fair Credit Reporting Act (FCRA), a federal law designed to promote accuracy,
    fairness, and privacy of consumer credit information.
    </p>

    <h4>Applicant Authorization</h4>

    <p>
    By submitting an application, you authorize Bergoa9a LLC to verify your identity,
    review provided information, and obtain credit-related information when necessary
    to evaluate your request.
    </p>

    <h4>Loan Terms</h4>

    <p>
    Rates, terms, conditions, and available services may vary depending on individual
    qualifications. Bergoa9a LLC does not guarantee approval and may act as a
    referral or consulting service depending on the financial product requested.
    </p>
  `
},
  'legal-requests': {
    title: 'Legal Requests',
    content: `<p>For legal requests, subpoenas, or DMCA notices, please contact us via WhatsApp at +1 (407) 515-5785.</p>`
  },
  licenses: {
    title: 'Licenses',
    content: `<p>Bergoa9a LLC operates under applicable state and federal licenses for financial services and document preparation.</p>`
  }
};

if (legalModal) {
  document.querySelectorAll('[data-legal]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const key  = link.getAttribute('data-legal');
      const data = legalTexts[key];
      if (data) {
        legalTitle.textContent  = data.title;
        legalContent.innerHTML  = data.content;
        legalModal.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeLegalModal.addEventListener('click', () => {
    legalModal.classList.remove('show');
    document.body.style.overflow = '';
  });

  legalModal.addEventListener('click', (e) => {
    if (e.target === legalModal) {
      legalModal.classList.remove('show');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && legalModal.classList.contains('show')) {
      legalModal.classList.remove('show');
      document.body.style.overflow = '';
    }
  });
}