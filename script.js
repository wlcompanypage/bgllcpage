// script.js - Bergoa9a LLC | Personal Loans

const WA_NUMBER = '14075155785';
const WA_BASE = `https://wa.me/${WA_NUMBER}?text=`;
const COOKIE_KEY = 'bergoa9a_cookie_consent_v1';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  // ==========================================
  // TOAST NOTIFICATIONS
  // ==========================================

  const toast = document.getElementById('toast');
  let toastTimer;

  function showToast(message, isError = false) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');

    toast.style.background = isError
      ? '#b42318'
      : 'var(--deep-green)';

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }


  // ==========================================
  // NAVBAR
  // ==========================================

  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  function handleNavbar() {
    if (!navbar) return;

    const currentScroll = window.scrollY;

    navbar.classList.toggle(
      'scrolled',
      currentScroll > 80
    );

    if (
      currentScroll > lastScroll &&
      currentScroll > 300
    ) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
  }

  window.addEventListener(
    'scroll',
    handleNavbar,
    { passive: true }
  );

  handleNavbar();


  // ==========================================
  // MOBILE MENU
  // ==========================================

  const hamburgerBtn =
    document.getElementById('hamburgerBtn');

  const mobileMenu =
    document.getElementById('mobileMenu');

  const closeMobileMenu =
    document.getElementById('closeMobileMenu');


  function closeMobileNav() {
    if (!mobileMenu) return;

    mobileMenu.classList.remove('open');

    mobileMenu.setAttribute(
      'aria-hidden',
      'true'
    );

    hamburgerBtn?.setAttribute(
      'aria-expanded',
      'false'
    );

    body.style.overflow = '';
  }


  hamburgerBtn?.addEventListener(
    'click',
    () => {

      if (!mobileMenu) return;

      mobileMenu.classList.add('open');

      mobileMenu.setAttribute(
        'aria-hidden',
        'false'
      );

      hamburgerBtn.setAttribute(
        'aria-expanded',
        'true'
      );

      body.style.overflow = 'hidden';
    }
  );


  closeMobileMenu?.addEventListener(
    'click',
    closeMobileNav
  );


  mobileMenu
    ?.querySelectorAll('a')
    .forEach(link => {

      link.addEventListener(
        'click',
        closeMobileNav
      );

    });


  // ==========================================
  // SCROLL REVEAL
  // ==========================================

  const reveals =
    document.querySelectorAll('.reveal');


  if ('IntersectionObserver' in window) {

    const revealObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                'in-view'
              );

              revealObserver.unobserve(
                entry.target
              );
            }

          });

        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -40px 0px'
        }
      );


    reveals.forEach(el =>
      revealObserver.observe(el)
    );

  } else {

    reveals.forEach(el =>
      el.classList.add('in-view')
    );

  }


  // ==========================================
  // HERO PARALLAX
  // ==========================================

  const heroVisual =
    document.querySelector('.hero-visual');


  if (
    heroVisual &&
    window.matchMedia(
      '(prefers-reduced-motion: no-preference)'
    ).matches
  ) {

    window.addEventListener(
      'scroll',
      () => {

        heroVisual.style.transform =
          `translateY(${window.scrollY * -0.08}px)`;

      },
      { passive: true }
    );

  }


  // ==========================================
  // FAQ ACCORDION
  // ==========================================

  document
    .querySelectorAll('.faq-item')
    .forEach(item => {

      const question =
        item.querySelector('.faq-question');

      if (!question) return;


      question.addEventListener(
        'click',
        () => {

          const isOpen =
            item.classList.contains('open');


          document
            .querySelectorAll('.faq-item')
            .forEach(other => {

              other.classList.remove('open');

              other
                .querySelector('.faq-question')
                ?.setAttribute(
                  'aria-expanded',
                  'false'
                );

            });


          if (!isOpen) {

            item.classList.add('open');

            question.setAttribute(
              'aria-expanded',
              'true'
            );

          }

        }
      );

    });


  // ==========================================
  // CONTACT FORM → WHATSAPP
  // ==========================================

  const form =
    document.getElementById('bgForm');


  if (form) {

    form.addEventListener(
      'submit',
      event => {

        event.preventDefault();


        const fullName =
          form.elements.fullName
            ?.value
            .trim();


        const email =
          form.elements.email
            ?.value
            .trim();


        const phone =
          form.elements.phone
            ?.value
            .trim();


        const message =
          form.elements.message
            ?.value
            .trim();


        if (
          !fullName ||
          !phone ||
          !email
        ) {

          showToast(
            'Please complete your name, phone number and email.',
            true
          );

          return;
        }


        const text =
`BERGOA9A LLC — PERSONAL LOAN INQUIRY

Name: ${fullName}
Email: ${email}
Phone: ${phone}

Message:
${message || 'No message provided'}

Submitted via Bergoa9a LLC Personal Loans website.`;


        showToast(
          'Your inquiry is ready. Opening WhatsApp…'
        );


        setTimeout(() => {

          window.open(
            WA_BASE +
            encodeURIComponent(text),
            '_blank',
            'noopener'
          );

          form.reset();

        }, 650);

      }
    );

  }


  // ==========================================
  // LEGAL MODALS
  // ==========================================

  const legalModal =
    document.getElementById('legalModal');

  const legalTitle =
    document.getElementById('legalTitle');

  const legalContent =
    document.getElementById('legalContent');

  const closeLegalModal =
    document.getElementById('closeLegalModal');


  const legalTexts = {

    terms: {

      title: 'Terms of Use',

      content: `
        <p>
          <strong>Last updated: August 17, 2026</strong>
        </p>

        <p>
          Welcome to Bergoa9a LLC. By accessing or using
          this website, you agree to use it lawfully and
          to provide accurate information when submitting
          an inquiry or application.
        </p>

        <h4>Personal Loan Services</h4>

        <p>
          This website is focused on Personal Loan
          financing requests and related application
          support. Available financing, if any, is
          subject to applicable review, eligibility
          requirements, terms and conditions.
        </p>

        <h4>No Guarantee of Approval</h4>

        <p>
          Submitting an application does not guarantee
          approval, funding, a particular loan amount,
          rate, repayment term or any other specific
          outcome.
        </p>

        <h4>Application Information</h4>

        <p>
          You are responsible for providing information
          that is accurate and complete to the best of
          your knowledge. Additional verification may be
          requested when applicable.
        </p>

        <h4>Lending Partners</h4>

        <p>
          Where applicable, and with the required
          authorization, an application may be shared
          with one or more lending partners for additional
          consideration. Any lending decision is made
          according to the applicable provider's process
          and requirements.
        </p>
      `
    },


    privacy: {

      title: 'Privacy Policy',

      content: `
        <p>
          <strong>Last updated: August 17, 2026</strong>
        </p>

        <p>
          Bergoa9a LLC respects your privacy and uses
          information submitted through this website for
          Personal Loan inquiries, application evaluation,
          communication and related service purposes.
        </p>

        <h4>Information We May Receive</h4>

        <ul>
          <li>Name and contact information</li>
          <li>
            Information submitted through a Personal
            Loan application
          </li>
          <li>
            Website usage and cookie preference
            information
          </li>
        </ul>

        <h4>Use of Information</h4>

        <p>
          Information may be used to respond to inquiries,
          evaluate applications, communicate with
          applicants and operate the website.
        </p>

        <h4>Sharing</h4>

        <p>
          When applicable, an application may be shared
          with lending partners only with the authorization
          required for that process. Cookie consent is
          separate from loan application authorization.
        </p>

        <h4>Cookies</h4>

        <p>
          This website uses a versioned localStorage
          consent preference for cookie choices. No
          non-essential analytics or marketing service
          is loaded by this website unless the project
          is later configured to do so.
        </p>
      `
    },


    disclosures: {

      title: 'Loan Disclosures',

      content: `
        <p>
          <strong>Personal Loan Disclosure</strong>
        </p>

        <p>
          Personal Loan availability is not guaranteed.
          Application review, eligibility, rates, terms,
          conditions and any financing decision may vary
          based on the information provided and the
          applicable financing provider.
        </p>

        <p>
          Submitting an application does not guarantee
          approval or funding.
        </p>

        <p>
          Where applicable, and with your authorization,
          an application may be shared with lending
          partners for additional consideration. Each
          provider may independently determine whether
          to extend financing and on what terms.
        </p>
      `
    },


    accessibility: {

      title: 'Accessibility Statement',

      content: `
        <p>
          Bergoa9a LLC is committed to making this
          website usable and accessible to visitors.
          If you encounter an accessibility barrier,
          please contact us through the contact
          information provided on the website.
        </p>
      `
    },


    'data-use': {

      title: 'Data Collection & Use',

      content: `
        <p>
          Information submitted through the website may
          be used to respond to Personal Loan inquiries,
          process or evaluate applications, communicate
          with applicants and support related service
          operations.
        </p>

        <p>
          Authorization to share an application with
          lending partners, when applicable, is separate
          from cookie consent and is handled through the
          relevant application process.
        </p>
      `
    }

  };


  // ==========================================
  // LEGAL MODAL FUNCTIONS
  // ==========================================

  function setBodyLock(locked) {

    body.style.overflow =
      locked ? 'hidden' : '';

  }


  function openLegal(key) {

    const data =
      legalTexts[key];

    if (
      !legalModal ||
      !data
    ) return;


    legalTitle.textContent =
      data.title;


    legalContent.innerHTML =
      data.content;


    legalModal.classList.add('show');


    legalModal.setAttribute(
      'aria-hidden',
      'false'
    );


    setBodyLock(true);


    closeLegalModal?.focus();

  }


  function closeLegal() {

    legalModal?.classList.remove(
      'show'
    );


    legalModal?.setAttribute(
      'aria-hidden',
      'true'
    );


    setBodyLock(false);

  }


  document
    .querySelectorAll('[data-legal]')
    .forEach(link => {

      link.addEventListener(
        'click',
        event => {

          event.preventDefault();

          openLegal(
            link.getAttribute(
              'data-legal'
            )
          );

        }
      );

    });


  closeLegalModal?.addEventListener(
    'click',
    closeLegal
  );


  legalModal?.addEventListener(
    'click',
    event => {

      if (
        event.target === legalModal
      ) {

        closeLegal();

      }

    }
  );


  // ==========================================
  // COOKIE CONSENT SYSTEM
  // ==========================================

  const cookieBanner =
    document.getElementById(
      'cookieBanner'
    );


  const cookieModal =
    document.getElementById(
      'cookieModal'
    );


  const openCookiePreferences =
    document.getElementById(
      'openCookiePreferences'
    );


  const cookieSettings =
    document.getElementById(
      'cookieSettings'
    );


  const closeCookieModal =
    document.getElementById(
      'closeCookieModal'
    );


  const acceptCookies =
    document.getElementById(
      'acceptCookies'
    );


  const rejectCookies =
    document.getElementById(
      'rejectCookies'
    );


  const acceptFromModal =
    document.getElementById(
      'acceptFromModal'
    );


  const rejectFromModal =
    document.getElementById(
      'rejectFromModal'
    );


  const saveCookiePreferences =
    document.getElementById(
      'saveCookiePreferences'
    );


  const analyticsToggle =
    document.getElementById(
      'cookieAnalytics'
    );


  const preferencesToggle =
    document.getElementById(
      'cookiePreferences'
    );


  const marketingToggle =
    document.getElementById(
      'cookieMarketing'
    );


  // ==========================================
  // READ COOKIE CONSENT
  // ==========================================

  function readConsent() {

    try {

      return JSON.parse(
        localStorage.getItem(
          COOKIE_KEY
        ) || 'null'
      );

    } catch {

      return null;

    }

  }


  // ==========================================
  // SAVE COOKIE CONSENT
  // ==========================================

  function saveConsent(consent) {

    localStorage.setItem(
      COOKIE_KEY,
      JSON.stringify({

        version: 1,

        necessary: true,

        analytics:
          Boolean(consent.analytics),

        preferences:
          Boolean(consent.preferences),

        marketing:
          Boolean(consent.marketing),

        updatedAt:
          new Date().toISOString()

      })
    );

  }


  // ==========================================
  // COOKIE BANNER
  // ==========================================

  function hideCookieBanner() {

    if (!cookieBanner) return;

    cookieBanner.hidden = true;

  }


  function showCookieBanner() {

    if (!cookieBanner) return;

    cookieBanner.hidden = false;

  }


  // ==========================================
  // COOKIE SETTINGS MODAL
  // ==========================================

  function openCookieModal() {

    if (!cookieModal) return;


    const consent =
      readConsent() || {

        analytics: false,

        preferences: false,

        marketing: false

      };


    if (analyticsToggle) {

      analyticsToggle.checked =
        Boolean(
          consent.analytics
        );

    }


    if (preferencesToggle) {

      preferencesToggle.checked =
        Boolean(
          consent.preferences
        );

    }


    if (marketingToggle) {

      marketingToggle.checked =
        Boolean(
          consent.marketing
        );

    }


    cookieModal.hidden = false;


    setBodyLock(true);


    closeCookieModal?.focus();

  }


  function closeCookieSettings() {

    if (!cookieModal) return;

    cookieModal.hidden = true;

    setBodyLock(false);

  }


  // ==========================================
  // ACCEPT ALL
  // ==========================================

  function acceptAllCookies() {

    saveConsent({

      analytics: true,

      preferences: true,

      marketing: true

    });


    hideCookieBanner();

    closeCookieSettings();

  }


  // ==========================================
  // REJECT NON-ESSENTIAL
  // ==========================================

  function rejectNonEssential() {

    saveConsent({

      analytics: false,

      preferences: false,

      marketing: false

    });


    hideCookieBanner();

    closeCookieSettings();

  }


  // ==========================================
  // COOKIE BUTTON EVENTS
  // ==========================================

  acceptCookies?.addEventListener(
    'click',
    acceptAllCookies
  );


  rejectCookies?.addEventListener(
    'click',
    rejectNonEssential
  );


  acceptFromModal?.addEventListener(
    'click',
    acceptAllCookies
  );


  rejectFromModal?.addEventListener(
    'click',
    rejectNonEssential
  );


  cookieSettings?.addEventListener(
    'click',
    openCookieModal
  );


  openCookiePreferences?.addEventListener(
    'click',
    openCookieModal
  );


  // ==========================================
  // SAVE COOKIE PREFERENCES
  // ==========================================

  saveCookiePreferences?.addEventListener(
    'click',
    () => {

      saveConsent({

        analytics:
          analyticsToggle
            ? analyticsToggle.checked
            : false,

        preferences:
          preferencesToggle
            ? preferencesToggle.checked
            : false,

        marketing:
          marketingToggle
            ? marketingToggle.checked
            : false

      });


      hideCookieBanner();

      closeCookieSettings();

    }
  );


  // ==========================================
  // CLOSE COOKIE MODAL
  // ==========================================

  closeCookieModal?.addEventListener(
    'click',
    closeCookieSettings
  );


  cookieModal?.addEventListener(
    'click',
    event => {

      if (
        event.target === cookieModal
      ) {

        closeCookieSettings();

      }

    }
  );


  // ==========================================
  // INITIAL COOKIE CHECK
  // ==========================================

  const existingConsent =
    readConsent();


  if (
    !existingConsent ||
    existingConsent.version !== 1
  ) {

    showCookieBanner();

  } else {

    hideCookieBanner();

  }


  // ==========================================
  // KEYBOARD ACCESSIBILITY
  // ==========================================

  document.addEventListener(
    'keydown',
    event => {

      if (
        event.key !== 'Escape'
      ) return;


      if (
        cookieModal &&
        !cookieModal.hidden
      ) {

        closeCookieSettings();

      }


      if (
        legalModal?.classList.contains(
          'show'
        )
      ) {

        closeLegal();

      }


      if (
        mobileMenu?.classList.contains(
          'open'
        )
      ) {

        closeMobileNav();

      }

    }
  );


  // ==========================================
  // LAZY LOADING IMAGES
  // ==========================================

  if (
    'IntersectionObserver' in window
  ) {

    const imageObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach(entry => {

            if (
              !entry.isIntersecting
            ) return;


            const img =
              entry.target;


            if (
              img.dataset.src
            ) {

              img.src =
                img.dataset.src;

            }


            observer.unobserve(img);

          });

        }
      );


    document
      .querySelectorAll(
        'img[loading="lazy"]'
      )
      .forEach(
        img =>
          imageObserver.observe(img)
      );

  }

});