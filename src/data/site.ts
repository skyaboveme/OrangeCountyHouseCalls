// Central business data — single source of truth for NAP, hours, nav, and schema.
export const SITE = {
  url: 'https://orangecountyhousecalls.com',
  name: 'Orange County House Calls',
  legalName: 'Orange County HouseCalls',
  tagline: 'Concierge Medicine & House Call Doctor in Orange County',
  phone: '(949) 741-0512',
  phoneHref: 'tel:+19497410512',
  phoneE164: '+1-949-741-0512',
  // Set this to the inbox that should receive appointment requests (FormSubmit.co)
  formEmail: '',
  address: {
    street: '15 Mareblu Ste 230A',
    city: 'Aliso Viejo',
    region: 'CA',
    postal: '92656',
    country: 'US',
  },
  geo: { lat: 33.5732824, lng: -117.7037369 },
  hours: { days: 'Monday – Sunday', open: '06:00', close: '20:00', label: '6:00 AM – 8:00 PM' },
  gtm: 'GTM-N7FG9CGL',
  mapsUrl: 'https://maps.app.goo.gl/2jhihvPmQJtZbQAq9',
  directionsUrl: 'https://maps.app.goo.gl/t4RoS2g1qwCvFcqr8',
  reviewUrl: 'https://www.google.com/search?q=15+Mareblu+%23230a,+Aliso+Viejo,+CA+92656&ludocid=#lrd=0x0:0x79aa08af36fd8e1f,1',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61569669203195',
    instagram: 'https://www.instagram.com/orangecountyhousecalls/',
    google: 'https://maps.app.goo.gl/2jhihvPmQJtZbQAq9',
  },
  areas: [
    'Aliso Viejo', 'Laguna Niguel', 'Laguna Hills', 'Mission Viejo', 'Rancho Mission Viejo',
    'Ladera Ranch', 'Laguna Beach', 'Dana Point', 'Coto De Caza', 'Rancho Santa Margarita',
    'Lake Forest', 'Irvine', 'Newport Beach', 'San Clemente', 'San Juan Capistrano',
  ],
  about:
    'Dr. Khaneki provides concierge health care 24-hours a day, 7 days a week for patients 18 and older and seniors in Aliso Viejo, Laguna Niguel, Laguna Hills, Mission Viejo, Rancho Mission Viejo, Ladera Ranch, Laguna Beach, Dana Point, Coto De Caza, Rancho Santa Margarita, Lake Forest, Irvine, Newport Beach, San Clemente, and San Juan Capistrano areas. We offer our patients Knowledgeable Internal Medicine expertise in a gentle and caring manner with a focus on you and your needs.',
};

export const DOCTOR = {
  name: 'Sina Khaneki, MD, MPH',
  givenName: 'Sina',
  familyName: 'Khaneki',
  specialty: 'Internal Medicine',
  education: [
    { school: 'Southern California University of Health Sciences', years: '2007–2010', degree: 'Doctor of Chiropractic' },
    { school: 'Poznan University of Medical Sciences', years: '2010–2014', degree: 'Doctor of Medicine (MD)' },
    { school: 'Indiana University, Indianapolis', years: '2015–2017', degree: 'Master of Public Health (MPH)' },
  ],
  training: [
    { title: 'Internal Medicine Residency', years: '2018–2021', org: 'Hurley Medical Center / Michigan State University' },
    { title: 'General Surgery Internship', years: '2017–2018', org: 'University of Colorado School of Medicine' },
    { title: 'Post-doctorate Fellowship in Stem Cell Research', years: '2016–2017', org: 'Indiana University School of Medicine' },
    { title: 'Integrative and Functional Medicine Fellowship (In Progress)', years: '2026–Present', org: 'University of California, Irvine (UCI)' },
  ],
  memberships: [
    'American College of Physicians (ACP)',
    'Obesity Medicine Association (OMA)',
    'American Academy of Aesthetic Medicine (AAAM)',
  ],
  publications: [
    { title: 'Initial noninvasive oxygenation strategies in subjects with de novo acute hypoxemic respiratory failure', authors: 'A. Chahine, L. Rashdan, H. Dhillon, S. Khaneki, et al.', journal: 'Respiratory Care, 2019' },
    { title: 'Hydrogen sulfide: A potential novel therapy for the treatment of ischemia', authors: 'A.R. Jensen, N.A. Drucker, S. Khaneki, M.J. Ferkowicz, et al.', journal: 'Shock, 2017' },
    { title: 'Comparison of accuracy of prediction of postoperative mortality and morbidity between a new, parsimonious risk calculator (SURPAS) and the ACS Surgical Risk Calculator', authors: 'S. Khaneki, M.R. Bronsert, W.G. Henderson, et al.', journal: 'The American Journal of Surgery, 2020' },
    { title: 'Mesenchymal stromal cell therapy for the treatment of intestinal ischemia: Defining the optimal cell isolate for maximum therapeutic benefit', authors: 'D.L. Doster, A.R. Jensen, S. Khaneki, T.A. Markel, et al.', journal: 'Cytotherapy, 2016' },
    { title: 'Hydrogen sulfide improves intestinal recovery following ischemia by endothelial nitric oxide-dependent mechanisms', authors: 'A.R. Jensen, N.A. Drucker, S. Khaneki, et al.', journal: 'American Journal of Physiology – Gastrointestinal and Liver Physiology, 2017' },
    { title: 'Harvest tissue source does not alter the protective power of stromal cell therapy after intestinal ischemia and reperfusion injury', authors: 'A.R. Jensen, M.M. Manning, S. Khaneki, et al.', journal: 'Journal of Surgical Research, 2016' },
    { title: 'Direct peritoneal resuscitation improves mesenteric perfusion by nitric oxide-dependent pathways', authors: 'S. Khaneki, A.R. Jensen, N.A. Drucker, et al.', journal: 'Journal of Surgical Research, 2017' },
    { title: 'Hydrogen sulfide improves intestinal recovery following ischemia by endothelial nitric oxide-dependent mechanisms', authors: 'M.D. Sina Khaneki, et al.', journal: 'Perfusion – American Journal of Physiology, 2017' },
    { title: 'The utility of presacral drainage in penetrating rectal injuries in adult and pediatric patients', authors: 'K.B. Savoie, T.M. Beazley, B. Cleveland, S. Khaneki, et al.', journal: 'Journal of Surgical Research, 2019' },
    { title: 'Serotonin surge: Intravenous escitalopram as a rare cause of drug-induced aplastic anaemia', authors: 'A. Ponnapalli, D. Awuah, S. Khaneki, et al.', journal: 'European Journal of Haematology, 2022' },
    { title: 'Pentalogy of Cantrell: Complete expression with mediastinal teratoma', authors: 'P. Becela, P. Westerski, A. Mościcka, S. Khaneki, et al.', journal: 'Journal of Pediatric Surgery, 2015' },
    { title: 'Inflammation, Immunity, Fibrosis, and Infection: Hydrogen sulfide improves intestinal recovery following ischemia by endothelial nitric oxide-dependent mechanisms', authors: 'A.R. Jensen, N.A. Drucker, S. Khaneki, M.J. Ferkowicz, T.A. Markel, et al.', journal: 'American Journal of Physiology, 2019' },
    { title: 'Hydrogen Sulfide Protects the Intestine in a Murine Model of Necrotizing Enterocolitis', authors: 'N.A. Drucker, A.R. Jensen, S. Khaneki, et al.', journal: 'Journal of Surgical Research, 2017' },
    { title: 'Drug-coated balloon versus drug-eluting stent for treatment of small-vessel coronary artery disease: A meta-analysis of randomized controlled trials', authors: 'Y. Zayed, M. Barbarawi, B. Kheiri, S. Khaneki, et al.', journal: 'Scientific Sessions, 2017' },
  ],
  awards: [
    { title: 'Ambulatory Clinic Chief Resident', detail: 'Hurley Medical Center Internal Medicine Residency Program (July 2020)' },
    { title: 'Second Best-Case Presentation', detail: 'International Congress of Young Medical Scientists (2013)' },
    { title: 'Selma Andrews Scholarship', detail: 'School of Public Health, Loma Linda University (June 2015)' },
    { title: 'Featured Cover Article: Comparison of accuracy of prediction of postoperative mortality and morbidity between a new, parsimonious risk calculator (SURPAS) and the ACS Surgical Risk Calculator', detail: 'Journal of Surgical Research, Volume 213 (June 2017)' },
  ],
};

const s = (slug: string) => `/aliso-viejo-ca/${slug}/`;

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Patient Information', href: '/patient-information/' },
  { label: 'Membership', href: '/membership/' },
  {
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'View all Services', href: '/services/' },
      { label: 'Concierge Medicine', href: s('concierge-medicine') },
      { label: 'Weight Loss Treatment', href: s('weight-loss-treatment') },
      { label: 'Personal Injury & Auto Accident Care', href: s('personal-injury-auto-accident-care') },
      { label: 'Allergy Treatment', href: s('allergy-treatment') },
      { label: 'Asthma Treatment', href: s('asthma-treatment') },
      { label: 'Cold and Flu Treatment', href: s('common-cold-and-flu-treatment') },
      { label: 'Cut and Bruise Treatment', href: s('cut-and-bruise-treatment') },
      { label: 'Fever Treatment', href: s('fever-treatment') },
      { label: 'Flu Shot', href: s('flu-shot') },
      { label: 'Food Poisoning Treatment', href: s('food-poisoning-treatment') },
      { label: 'Physical Exams', href: s('physical-exams') },
      { label: 'Sinus Infection Treatment', href: s('sinus-infection-treatment') },
      { label: 'Strep Throat Treatment', href: s('strep-throat-treatment') },
      { label: 'Urinary Tract Infection', href: s('urinary-tract-infection') },
      { label: 'Wellness', href: s('wellness') },
    ],
  },
  {
    label: 'Patient Education',
    href: '/blog/',
    children: [
      { label: 'Blog', href: '/blog/' },
      { label: 'Breathing and Respiratory Issues', href: s('breathing-and-respiratory-issues') },
      { label: 'Chronic Disease Management', href: s('chronic-disease-management') },
      { label: 'Sick Visits', href: s('sick-visits') },
      { label: 'Care for Ear Pain', href: s('when-to-seek-care-for-ear-pain') },
      { label: 'Treatment for Neck Pain', href: s('when-to-seek-treatment-for-neck-pain') },
      { label: 'When An Older Person Falls', href: s('when-an-older-person-falls') },
      { label: 'Medical Terminology', href: '/primary-care-physician-terminology/' },
    ],
  },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Contact Us', href: '/contact-us/' },
];

// Service categories mirror the original /services/ page structure
export const SERVICE_GROUPS = [
  {
    title: 'Featured Services',
    href: '/services/',
    items: ['concierge-medicine', 'telemedicine', 'weight-loss-treatment', 'personal-injury-auto-accident-care', 'primary-care', 'geriatric-medicine', 'obesity'],
  },
  {
    title: 'Common Visits',
    href: s('common-visits'),
    items: ['allergy-treatment', 'asthma-treatment', 'cholesterol-treatment', 'common-cold-and-flu-treatment', 'ear-nose-and-throat-services', 'fever-treatment', 'flu-shot', 'food-poisoning-treatment', 'physical-exams', 'respiratory-illness-treatment', 'sexually-transmitted-diseases-treatment', 'sinus-infection-treatment', 'strep-throat-treatment'],
  },
  {
    title: 'General Illnesses',
    href: s('general-illnesses'),
    items: ['arthritis-and-joint-pain', 'back-pain-treatment', 'breathing-and-respiratory-issues', 'chest-and-abdomen-pain-treatment', 'diabetes-treatment', 'hypertension-treatment', 'lice-infestation-treatment', 'migraine-headache-treatment', 'pink-eye-treatment', 'skin-condition-treatment', 'urinary-tract-infection', 'vomiting-and-diarrhea-treatment'],
  },
  {
    title: 'Injuries',
    href: s('cut-and-bruise-treatment'),
    items: ['auto-accident-injury-treatment', 'cut-and-bruise-treatment', 'eye-injury-treatment', 'head-injuries-and-concussion-treatment', 'insect-bites-and-sting-treatment', 'neck-and-back-pain-treatment', 'rashes-and-burns', 'sprains-and-strains', 'ingrown-nails', 'ingrown-toenail'],
  },
  {
    title: 'Wellness',
    href: s('wellness'),
    items: ['birth-control', 'chronic-disease-management', 'eating-disorder-treatment', 'erectile-dysfunction-treatment', 'hepatitis-management', 'immunizations-vaccinations-and-flu-shots', 'pain-management', 'preventive-medicine', 'skin-biopsy', 'medical-clinic-near-me'],
  },
  {
    title: 'Patient Education',
    href: '/blog/',
    items: ['sick-visits', 'do-i-have-strep-or-the-common-cold', 'when-to-seek-care-for-ear-pain', 'when-to-seek-treatment-for-neck-pain', 'when-an-older-person-falls', 'preventing-falls-in-the-home', 'why-do-i-need-joint-x-rays'],
  },
];

export const MEMBERSHIP = {
  name: 'Premier Membership',
  perVisit: '$500/visit',
  monthly: '$500/month',
  monthlyNote: 'with 1-year membership',
  includes: ['In-Office Visits', 'Telemedicine', 'House calls'],
  disclaimer:
    'Disclaimer: Membership plans are personalized based on individual health needs and may vary depending on specific medical conditions and comorbidities. Not all plans are available to every patient.',
  benefits: [
    'Longer, more personalized appointment times',
    'Minimal wait times',
    'Same-day or next-day appointments with your physician whenever possible',
    'Direct access to your doctor for urgent after-hours concerns',
    'House calls when appropriate',
    'Comprehensive annual exams that go beyond the basics',
    'Preventive care focused on long-term health and longevity',
    'Personalized health optimization and wellness planning',
    'A deeper understanding of your health, lifestyle, and personal goals',
    'More in-depth and comprehensive consultations',
    'Evaluation of underlying contributors to your health concerns, not just symptoms',
    'Streamlined prescription and medication management',
    'Annual screenings tailored to your age, health history, and individual risk factors',
    'Ongoing healthcare support and care coordination, including while you are traveling',
    'Assistance coordinating referrals and specialist appointments',
    'Support with appointment requests at nationally recognized medical institutions',
    'Assistance sharing medical records, imaging, and test results with specialists and medical centers',
    'Guidance with travel-related healthcare planning, accommodations, and logistics when needed',
  ],
  faqs: [
    { q: 'Is concierge medicine covered by insurance?', a: 'Concierge membership fees are not covered by insurance. The membership fee is separate from any insurance benefits you may have. However, patients may still use their insurance for outside services such as laboratory testing, imaging, specialist visits, hospital care, and medications, depending on their individual insurance plan.' },
    { q: 'What is included in the monthly membership fee?', a: 'The monthly membership fee includes access to personalized medical care through in-office visits, telemedicine visits, and house calls when medically appropriate. Our membership is designed to provide more direct access to the physician, longer visits, and a more convenient care experience.' },
    { q: 'Do you provide house calls throughout Orange County?', a: 'Yes. Orange County House Calls provides house calls in Aliso Viejo and surrounding Orange County communities, including Irvine, Laguna Niguel, Mission Viejo, Newport Beach, Laguna Hills, Laguna Beach, Dana Point, San Juan Capistrano, and nearby areas. Availability may depend on location, scheduling, and the type of medical concern.' },
    { q: 'Is this urgent care or primary care?', a: 'Orange County House Calls provides personalized internal medicine and concierge primary care. We are not a replacement for emergency care. For serious or life-threatening symptoms, patients should call 911 or go to the nearest emergency room.' },
    { q: 'Who is a good fit for a concierge membership?', a: 'Concierge membership may be a good fit for patients who want more direct access to their doctor, longer visits, convenient scheduling, and a more personalized primary care experience. It may be especially helpful for busy professionals, older adults, patients with chronic conditions, and patients who prefer care at home.' },
    { q: 'Do I need to be sick to schedule a visit?', a: 'No. Members may schedule visits for preventive care, chronic condition management, medication review, general health concerns, and follow-up care.' },
    { q: 'Do you offer medical weight loss services?', a: 'Yes. Orange County House Calls offers personalized medical weight loss services for patients who want physician-guided support with weight management. Our approach may include a medical evaluation, review of health history, lab work when appropriate, nutrition and lifestyle guidance, and medication options when medically appropriate.' },
    { q: 'Is medical weight loss included in the concierge membership?', a: 'Yes, Medical weight loss may be discussed as part of your personalized care plan. Depending on the patient’s goals, medical history, and treatment needs, additional costs may apply for medications, labs, or outside services.' },
    { q: 'Do you prescribe weight loss medications?', a: 'Weight loss medications may be considered when medically appropriate after a physician evaluation. Not every patient is a candidate, and treatment recommendations are based on your health history, current medications, lab results, and overall weight loss goals.' },
    { q: 'Who may benefit from medical weight loss?', a: 'Medical weight loss may be helpful for patients who have struggled to lose weight on their own, have weight-related health concerns, or want a structured plan supervised by a physician. This may include patients with high blood pressure, high cholesterol, prediabetes, diabetes, or other metabolic concerns.' },
  ],
};
