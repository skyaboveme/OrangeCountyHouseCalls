// Rich, locally tailored house-call data for every Orange County city served by Dr. Sina Khaneki, MD, MPH.

export interface CityHouseCallData {
  name: string;
  slug: string; // e.g. 'newport-beach-ca'
  shortSlug: string; // e.g. 'newport-beach'
  path: string; // e.g. '/newport-beach-ca/'
  regionLabel: string; // e.g. 'Coastal Orange County' | 'South Orange County'
  driveNote: string; // Proximity / arrival context from Aliso Viejo HQ
  heroPill: string;
  heroLede: string;
  localIntro: string;
  urgentCarePainPoint: string;
  urgentCareRoad: string;
  pharmacyNote: string;
  gatedOrAccessNote: string;
  zipCodes: string[];
  neighborhoods: string[];
  hasResortsOrHotels?: boolean;
  wikiUrl: string;
  lat: number;
  lng: number;
}

export const CITIES: CityHouseCallData[] = [
  {
    name: 'Aliso Viejo',
    slug: 'aliso-viejo-ca',
    shortSlug: 'aliso-viejo',
    path: '/aliso-viejo-ca/',
    regionLabel: 'Our Home Base in South Orange County',
    driveNote: 'Minutes away from our Mareblu clinic in the heart of Aliso Viejo',
    heroPill: 'Headquartered Right Here in Aliso Viejo · Same-Day Visits',
    heroLede:
      'Skip the urgent care wait. Headquartered right on Mareblu in Aliso Viejo, board-certified Internal Medicine physician Dr. Sina Khaneki, MD, MPH comes straight to your Aliso Viejo home, townhome, office, or senior living community — 7 days a week.',
    localIntro:
      'Whether you are recovering from a sudden illness in Glenwood, juggling a busy work-from-home day near Aliso Viejo Town Center, or caring for an aging parent in Belmont Village, having a doctor based minutes away means rapid, unhurried care right in your living room — with the option of our local Mareblu clinic whenever you prefer.',
    urgentCarePainPoint:
      'Even when an urgent care clinic is just down Aliso Creek Road, sitting in a crowded waiting room while feverish or exhausted is miserable — and risks exposing you to other illnesses.',
    urgentCareRoad: 'Aliso Creek Rd or the 73 Toll Road',
    pharmacyNote:
      'Aliso Viejo Town Center CVS, Walgreens on Pacific Park Drive, or your preferred home-delivery pharmacy',
    gatedOrAccessNote:
      'Dr. Khaneki regularly visits gated enclaves like Glenwood and Canyon Vistas, hillside residences, business parks along Enterprise, and Aliso Viejo senior communities.',
    zipCodes: ['92656', '92698'],
    neighborhoods: [
      'Glenwood',
      'Pacific Park',
      'Canyon Vistas',
      'Aliso Viejo Town Center',
      'Vista Scena',
      'Sequoia',
      'Timberline',
      'Westridge',
      'Vantis',
      'Belmont Village Area',
      'Canyon View',
      'california Renaissance',
    ].map((n) => (n === 'california Renaissance' ? 'Renaissance' : n)),
    hasResortsOrHotels: true,
    wikiUrl: 'https://en.wikipedia.org/wiki/Aliso_Viejo,_California',
    lat: 33.5676,
    lng: -117.7256,
  },
  {
    name: 'Laguna Niguel',
    slug: 'laguna-niguel-ca',
    shortSlug: 'laguna-niguel',
    path: '/laguna-niguel-ca/',
    regionLabel: 'Coastal Hills · South Orange County',
    driveNote: 'Neighboring Aliso Viejo — typically 10–15 minutes to any Laguna Niguel neighborhood',
    heroPill: 'Neighboring Aliso Viejo · Fast Same-Day Laguna Niguel House Calls',
    heroLede:
      'Need a doctor at your Laguna Niguel home today? Board-certified Internal Medicine physician Dr. Sina Khaneki, MD, MPH travels minutes from our neighboring office directly to your Laguna Niguel residence for private, unhurried medical care.',
    localIntro:
      'From coastal-view estates in Bear Brand Ranch and Monarch Point to family homes in Rancho Niguel and Kite Hill, Laguna Niguel residents enjoy some of our fastest house-call arrival windows because our practice borders Laguna Niguel directly.',
    urgentCarePainPoint:
      'When you are battling the flu, a migraine, or a painful infection, fighting traffic along Crown Valley Parkway or Niguel Road just to wait an hour in a walk-in clinic is the last thing your body needs.',
    urgentCareRoad: 'Crown Valley Pkwy or Alicia Pkwy',
    pharmacyNote:
      'local Laguna Niguel pharmacies along Crown Valley Parkway, Rancho Niguel, Ocean Ranch, CVS, Costco, or Walgreens',
    gatedOrAccessNote:
      'We seamlessly coordinate guard-gate entry for Bear Brand Ranch, Monarch Point, Palmilla, Crest de Ville, and El Niguel residences, as well as Laguna Niguel senior living communities.',
    zipCodes: ['92677', '92607'],
    neighborhoods: [
      'Bear Brand Ranch',
      'Ocean Ranch',
      'Monarch Point',
      'El Niguel Heights',
      'Rancho Niguel',
      'Niguel Summit',
      'Marina Hills',
      'Kite Hill',
      'San Joaquin Hills',
      'Crest de Ville',
      'Beacon Hill',
      'Laguna Heights',
    ],
    wikiUrl: 'https://en.wikipedia.org/wiki/Laguna_Niguel,_California',
    lat: 33.5225,
    lng: -117.7076,
  },
  {
    name: 'Laguna Hills',
    slug: 'laguna-hills-ca',
    shortSlug: 'laguna-hills',
    path: '/laguna-hills-ca/',
    regionLabel: 'Central South Orange County',
    driveNote: 'Immediately adjacent to our office — rapid dispatch across Laguna Hills',
    heroPill: 'Serving Nellie Gail Ranch & All Laguna Hills · 7 Days a Week',
    heroLede:
      'Skip the clinic waiting room. Board-certified Internal Medicine physician Dr. Sina Khaneki, MD, MPH brings thorough, compassionate medical care straight to your Laguna Hills home, estate, or senior living community.',
    localIntro:
      'Located right next door to Laguna Hills, Dr. Khaneki provides attentive in-home medical visits for families in Moulton Ranch and Alicia Park, private equestrian estates in Nellie Gail Ranch, and older adults seeking comfortable geriatric care at home or in assisted living.',
    urgentCarePainPoint:
      'Busy urgent care centers around Paseo de Valencia and El Toro Road frequently back up with long waits — especially hard on seniors, caregivers, and busy households.',
    urgentCareRoad: 'El Toro Rd, Paseo de Valencia, or I-5',
    pharmacyNote:
      'pharmacies near Saddleback Medical Center, Paseo de Valencia, Alicia Parkway, CVS, or Walgreens',
    gatedOrAccessNote:
      'Experienced with private estate access in Nellie Gail Ranch, multi-generational family homes, and assisted living / memory care residences throughout Laguna Hills.',
    zipCodes: ['92653', '92654'],
    neighborhoods: [
      'Nellie Gail Ranch',
      'Moulton Ranch',
      'Alicia Park',
      'Cabot Hills',
      'Laguna Terrace',
      'mandeville',
      'florentine',
      'Saddleback Vicinity',
      'Quail Creek',
      'Oakbrook Village Area',
    ].map((n) =>
      n === 'mandeville' ? ' Lomita / Mandeville' : n === 'florentine' ? ' Via Lomas Corridor' : n
    ).map((n) => n.trim()),
    wikiUrl: 'https://en.wikipedia.org/wiki/Laguna_Hills,_California',
    lat: 33.5997,
    lng: -117.6994,
  },
  {
    name: 'Mission Viejo',
    slug: 'mission-viejo-ca',
    shortSlug: 'mission-viejo',
    path: '/mission-viejo-ca/',
    regionLabel: 'Saddleback Valley · South Orange County',
    driveNote: 'Quick 12–18 minute arrival across North and South Mission Viejo',
    heroPill: 'Serving All Mission Viejo Neighborhoods · Open 7 Days',
    heroLede:
      'Receive attentive, unrushed care at home in Mission Viejo. Board-certified Internal Medicine physician Dr. Sina Khaneki, MD, MPH comes directly to your Mission Viejo residence for same-day and next-day house calls.',
    localIntro:
      'Whether you live near Lake Mission Viejo, in the 55+ community of Casta del Sol, or up in Painted Trails, our house call practice spares you and your family the stress of traveling across town when illness or mobility challenges strike.',
    urgentCarePainPoint:
      'Walk-in clinics near Crown Valley Parkway and Medical Center Road are routinely packed with coughs, fevers, and 60–90 minute waits before seeing a mid-level provider for five minutes.',
    urgentCareRoad: 'Alicia Pkwy, Oso Pkwy, or I-5',
    pharmacyNote:
      'Mission Viejo pharmacies along Crown Valley Parkway, Marguerite Parkway, Oso Parkway, CVS, Target, or Walgreens',
    gatedOrAccessNote:
      'We routinely clear guard gates at Casta del Sol, Canyon Crest, and Finisterra on the Green, and visit senior living communities across Mission Viejo.',
    zipCodes: ['92691', '92692', '92690'],
    neighborhoods: [
      'Lake Mission Viejo',
      'Casta del Sol',
      'Canyon Crest',
      'Painted Trails',
      'Pacific Hills',
      'Castille',
      'Finisterra',
      'Madrid del Lago',
      'Melinda Heights',
      'Mission Viejo North',
      'Stoneridge',
      'Regency',
    ],
    wikiUrl: 'https://en.wikipedia.org/wiki/Mission_Viejo,_California',
    lat: 33.6000,
    lng: -117.6720,
  },
  {
    name: 'Rancho Mission Viejo',
    slug: 'rancho-mission-viejo-ca',
    shortSlug: 'rancho-mission-viejo',
    path: '/rancho-mission-viejo-ca/',
    regionLabel: 'The Ranch · South Orange County',
    driveNote: 'Convenient Ortega & Antonio Pkwy access to every RMV village',
    heroPill: 'Serving Sendero, Esencia, Rienda & Gavilan · 7 Days a Week',
    heroLede:
      'Skip the drive off The Ranch when you’re sick. Board-certified Internal Medicine physician Dr. Sina Khaneki, MD, MPH brings same-day and next-day house calls directly to your Rancho Mission Viejo home.',
    localIntro:
      'Living on The Ranch offers unmatched tranquility — until someone comes down with a high fever, sinus infection, or acute injury and faces a 25-minute drive back into town for urgent care. Dr. Khaneki travels directly to Sendero, Esencia, Rienda, and Gavilan 55+ residences so care comes to your front door.',
    urgentCarePainPoint:
      'Driving down Ortega Highway or Antonio Parkway while sick — only to sit in a crowded clinic waiting room — turns a minor illness into an all-day ordeal.',
    urgentCareRoad: 'Ortega Hwy (SR-74) or Antonio Pkwy',
    pharmacyNote:
      'Sendero Marketplace CVS, nearby Ladera Ranch & San Juan Capistrano pharmacies, or home-delivery pharmacies',
    gatedOrAccessNote:
      'Familiar with all Rancho Mission Viejo villages, including 55+ Gavilan enclaves in Sendero, Esencia, and Rienda.',
    zipCodes: ['92694'],
    neighborhoods: [
      'Sendero',
      'Esencia',
      'Rienda',
      'Gavilan (55+ Enclaves)',
      'Hilltop at Esencia',
      'NorthWalk',
      'SouthWalk',
      'Ranch Camp Vicinity',
    ],
    wikiUrl: 'https://en.wikipedia.org/wiki/Rancho_Mission_Viejo,_California',
    lat: 33.5244,
    lng: -117.6253,
  },
  {
    name: 'Ladera Ranch',
    slug: 'ladera-ranch-ca',
    shortSlug: 'ladera-ranch',
    path: '/ladera-ranch-ca/',
    regionLabel: 'South Orange County',
    driveNote: 'Easy 15-minute reach via Crown Valley Pkwy & Antonio Pkwy',
    heroPill: 'Serving Covenant Hills & All Ladera Ranch Villages · 7 Days',
    heroLede:
      'Private, unrushed physician house calls in Ladera Ranch. Board-certified Internal Medicine doctor Dr. Sina Khaneki, MD, MPH evaluates and treats adults and seniors right in the comfort of your Ladera Ranch home.',
    localIntro:
      'From gated Covenant Hills estates to Terramor, Oak Knoll, and Avendale, busy Ladera Ranch households count on Orange County House Calls for convenient, relationship-based adult primary care, urgent sick visits, and medical weight loss without disrupting the day.',
    urgentCarePainPoint:
      'Between remote work, family schedules, and congested Crown Valley traffic, losing half a day in an urgent care lobby is frustrating and unnecessary.',
    urgentCareRoad: 'Crown Valley Pkwy or Antonio Pkwy',
    pharmacyNote:
      'Mercantile East & Mercantile West pharmacies (CVS, Walgreens) or your preferred local South OC pharmacy',
    gatedOrAccessNote:
      'Smooth guard-gate arrival in Covenant Hills, Terramor, and private enclaves throughout Ladera Ranch.',
    zipCodes: ['92694'],
    neighborhoods: [
      'Covenant Hills',
      'Terramor',
      'Oak Knoll Village',
      'Bridgepark',
      'Flintridge Village',
      'Echo Ridge',
      'Wycliffe Village',
      'Avendale Village',
      'Township',
    ],
    wikiUrl: 'https://en.wikipedia.org/wiki/Ladera_Ranch,_California',
    lat: 33.5476,
    lng: -117.6403,
  },
  {
    name: 'Laguna Beach',
    slug: 'laguna-beach-ca',
    shortSlug: 'laguna-beach',
    path: '/laguna-beach-ca/',
    regionLabel: 'Coastal Orange County',
    driveNote: 'Minutes over the canyon ridge via SR-133 or Moulton/Nyes from Aliso Viejo',
    heroPill: 'Serving All Laguna Beach Coves, Hills & Resorts · 7 Days',
    heroLede:
      'Don’t battle Laguna Canyon or PCH traffic when you feel unwell. Board-certified Internal Medicine physician Dr. Sina Khaneki, MD, MPH comes directly to your Laguna Beach home, hillside villa, or oceanfront resort.',
    localIntro:
      'Because our practice sits just over the ridge in Aliso Viejo, we reach North Laguna, the Village, Arch Beach Heights, and South Laguna rapidly — providing discreet, unhurried medical care for year-round residents, seasonal homeowners, and resort guests alike.',
    urgentCarePainPoint:
      'Getting in and out of Laguna Beach along Coast Highway or Laguna Canyon Road — especially during summer, festival season, or weekend traffic — makes clinic trips exhausting when you are ill.',
    urgentCareRoad: 'Pacific Coast Hwy (PCH) or Laguna Canyon Rd',
    pharmacyNote:
      'Bushard’s Pharmacy, South Laguna & Coast Highway CVS/Pavilion pharmacies, or delivery pharmacies',
    gatedOrAccessNote:
      'Discreet arrival at guard-gated communities including Emerald Bay, Irvine Cove, Three Arch Bay, Lagunita, and Montage / coastal resorts.',
    zipCodes: ['92651', '92652'],
    neighborhoods: [
      'Emerald Bay',
      'Irvine Cove',
      'Three Arch Bay',
      'North Laguna',
      'Top of the World',
      'Mystic Hills',
      'The Village',
      'Bluebird Canyon',
      'Woods Cove',
      'Victoria Beach',
      'Arch Beach Heights',
      'South Laguna',
    ],
    hasResortsOrHotels: true,
    wikiUrl: 'https://en.wikipedia.org/wiki/Laguna_Beach,_California',
    lat: 33.5427,
    lng: -117.7854,
  },
  {
    name: 'Dana Point',
    slug: 'dana-point-ca',
    shortSlug: 'dana-point',
    path: '/dana-point-ca/',
    regionLabel: 'Coastal South Orange County',
    driveNote: 'Quick coastal arrival via Niguel Rd, Crown Valley, or I-5',
    heroPill: 'Serving Monarch Beach, Niguel Shores & All Dana Point · 7 Days',
    heroLede:
      'Private physician house calls in Dana Point, CA. Board-certified Internal Medicine physician Dr. Sina Khaneki, MD, MPH brings same-day and next-day medical care directly to your home, marina slip, or coastal resort.',
    localIntro:
      'Whether you live behind the gates at The Strand at Headlands, Niguel Shores, or Monarch Bay, in the Lantern District, or are visiting the Waldorf Astoria or Ritz-Carlton Laguna Niguel, Dr. Khaneki delivers thorough, unhurried care right to your door.',
    urgentCarePainPoint:
      'Navigating Pacific Coast Highway congestion or searching for an open urgent care appointment shouldn’t stand between you and prompt medical treatment.',
    urgentCareRoad: 'Pacific Coast Hwy, Del Obispo St, or Stonehill Dr',
    pharmacyNote:
      'Dana Point CVS & Walgreens on PCH/Del Obispo, Monarch Beach pharmacies, or local delivery pharmacies',
    gatedOrAccessNote:
      'Regular service to guard-gated communities (The Strand at Headlands, Monarch Bay, Ritz Pointe, Niguel Shores), Dana Point Harbor marinas, and luxury resorts.',
    zipCodes: ['92629', '92624'],
    neighborhoods: [
      'Monarch Beach',
      'The Strand at Headlands',
      'Niguel Shores',
      'Lantern District',
      'Dana Point Harbor',
      'Capistrano Beach',
      'Monarch Bay',
      'Ritz Pointe',
      'Del Obispo',
      'Sea Canyon',
    ],
    hasResortsOrHotels: true,
    wikiUrl: 'https://en.wikipedia.org/wiki/Dana_Point,_California',
    lat: 33.4672,
    lng: -117.6981,
  },
  {
    name: 'Coto de Caza',
    slug: 'coto-de-caza-ca',
    shortSlug: 'coto-de-caza',
    path: '/coto-de-caza-ca/',
    regionLabel: 'Private Gated Valley · South Orange County',
    driveNote: 'Direct dispatch to both North Gate and South Gate residences',
    heroPill: 'Private House Calls Inside the Gates of Coto de Caza · 7 Days',
    heroLede:
      'Why leave the privacy of Coto de Caza when you’re unwell? Board-certified Internal Medicine physician Dr. Sina Khaneki, MD, MPH comes through the gates directly to your Coto de Caza estate or home.',
    localIntro:
      'Coto de Caza is prized for seclusion and space — which also means any trip to an outside clinic starts with a long drive out the North or South Gate. Our concierge house-call practice brings a board-certified MD straight to your residence with complete discretion.',
    urgentCarePainPoint:
      'Leaving Coto de Caza via Oso Parkway or Antonio Parkway when you have a high fever, GI illness, or back spasm turns a doctor visit into a exhausting commute.',
    urgentCareRoad: 'Oso Pkwy, Antonio Pkwy, or SR-241',
    pharmacyNote:
      'nearby Rancho Santa Margarita, Las Flores, & Ladera Ranch pharmacies (CVS, Walgreens, Pavilions) or concierge delivery',
    gatedOrAccessNote:
      'Seamless coordination with Coto de Caza North Gate and South Gate security so Dr. Khaneki arrives promptly at your residence.',
    zipCodes: ['92679'],
    neighborhoods: [
      'Los Ranchos Estates',
      'The Village',
      'Coto de Caza Golf & Racquet Club Area',
      'Crooked Oaks',
      'Oakridge',
      'Weatherly',
      'Tanglewood',
      'Stonefield',
      'Via Pajaro Corridor',
      'North Gate Enclaves',
      'South Gate Enclaves',
    ],
    wikiUrl: 'https://en.wikipedia.org/wiki/Coto_de_Caza,_California',
    lat: 33.5959,
    lng: -117.5879,
  },
  {
    name: 'Rancho Santa Margarita',
    slug: 'rancho-santa-margarita-ca',
    shortSlug: 'rancho-santa-margarita',
    path: '/rancho-santa-margarita-ca/',
    regionLabel: 'Foothill Communities · South Orange County',
    driveNote: 'Convenient foothill access via Alicia Pkwy, Oso Pkwy, or SR-241',
    heroPill: 'Serving Dove Canyon, Robinson Ranch & All RSM · 7 Days a Week',
    heroLede:
      'Get unhurried medical care in the comfort of your Rancho Santa Margarita home. Board-certified Internal Medicine physician Dr. Sina Khaneki, MD, MPH provides same-day and next-day house calls across RSM.',
    localIntro:
      'From lakeside homes around Lago Santa Margarita and Tijeras Creek to guard-gated residences in Dove Canyon and Robinson Ranch, Dr. Khaneki brings thorough adult primary care, acute illness treatment, and geriatric house calls directly to your door.',
    urgentCarePainPoint:
      'Local foothill walk-in clinics fill up fast — leaving sick patients waiting in crowded lobbies instead of resting comfortably at home.',
    urgentCareRoad: 'Santa Margarita Pkwy, Antonio Pkwy, or SR-241',
    pharmacyNote:
      'Rancho Santa Margarita pharmacies along Santa Margarita Parkway & Plano Trabuco (CVS, Walgreens, Walmart) or delivery',
    gatedOrAccessNote:
      'Experienced with guard-gated entry in Dove Canyon as well as townhomes, single-family homes, and senior residences throughout RSM.',
    zipCodes: ['92688', '92679'],
    neighborhoods: [
      'Dove Canyon',
      'Robinson Ranch',
      'Lago Santa Margarita',
      'Tijeras Creek',
      'SAMLARC Villages',
      'Las Flores (Adjacent)',
      'Trabuco Highlands',
      'Melindagate',
      'Arroyo Vista',
      'Brisa del Lago',
    ],
    wikiUrl: 'https://en.wikipedia.org/wiki/Rancho_Santa_Margarita,_California',
    lat: 33.6408,
    lng: -117.6031,
  },
  {
    name: 'Lake Forest',
    slug: 'lake-forest-ca',
    shortSlug: 'lake-forest',
    path: '/lake-forest-ca/',
    regionLabel: 'Saddleback Valley · Orange County',
    driveNote: 'Fast 12–18 minute arrival via Bake Pkwy, Lake Forest Dr, or I-5',
    heroPill: 'Serving Baker Ranch, Foothill Ranch, Portola Hills & Lake Forest',
    heroLede:
      'Skip the El Toro & Bake Parkway traffic when you feel sick. Board-certified Internal Medicine physician Dr. Sina Khaneki, MD, MPH comes directly to your Lake Forest home or office 7 days a week.',
    localIntro:
      'Covering historic Lake Forest Keys, The Woods, Baker Ranch, Foothill Ranch, and Portola Hills, Orange County House Calls provides convenient, comprehensive internal medicine without crowded waiting rooms or rushed 7-minute appointments.',
    urgentCarePainPoint:
      'Urgent care centers along El Toro Road and Rockfield Boulevard often have hour-plus wait times — especially during flu season and weekends.',
    urgentCareRoad: 'El Toro Rd, Lake Forest Dr, or Bake Pkwy',
    pharmacyNote:
      'Orchard at Saddleback, Foothill Ranch Towne Centre, & Baker Ranch area pharmacies (CVS, Walgreens, Ralphs)',
    gatedOrAccessNote:
      'Serving Lake Forest Keys, The Woods, gated communities in Portola Hills and Baker Ranch, corporate offices, and local assisted living communities.',
    zipCodes: ['92630', '92610'],
    neighborhoods: [
      'Baker Ranch',
      'Foothill Ranch',
      'Portola Hills',
      'Lake Forest Keys',
      'The Woods',
      'Serrano Highlands',
      'IronRidge',
      'Rancho de los Alisos',
      'Montbury',
      'whispering Hills',
    ].map((n) => (n === 'whispering Hills' ? 'Whispering Hills' : n)),
    wikiUrl: 'https://en.wikipedia.org/wiki/Lake_Forest,_California',
    lat: 33.6469,
    lng: -117.6892,
  },
  {
    name: 'Irvine',
    slug: 'irvine-ca',
    shortSlug: 'irvine',
    path: '/irvine-ca/',
    regionLabel: 'Central Orange County',
    driveNote: 'Direct 15–20 minute access via SR-133, I-405, & I-5 to all Irvine villages',
    heroPill: 'Serving Shady Canyon, Turtle Rock, Orchard Hills & All Irvine Villages',
    heroLede:
      'Executive-level physician house calls in Irvine, CA. Board-certified Internal Medicine physician Dr. Sina Khaneki, MD, MPH brings private, same-day and next-day medical care directly to your Irvine home, high-rise, or office.',
    localIntro:
      'Built for busy Irvine executives, families, and seniors who value their time and privacy: whether you live in Shady Canyon, Turtle Rock, Quail Hill, Woodbridge, Great Park, or Orchard Hills, Dr. Khaneki delivers extended, unrushed internal medicine right where you are.',
    urgentCarePainPoint:
      'Sand Canyon, Jamboree, and Barranca urgent care clinics regularly stay backed up for hours — pulling busy professionals and caregivers away from what matters.',
    urgentCareRoad: 'Sand Canyon Ave, Jeffrey Rd, Jamboree Rd, or I-405',
    pharmacyNote:
      'Irvine pharmacies at Quail Hill, Woodbridge, Orchard Hills, Irvine Spectrum, University Center, CVS, or Walgreens',
    gatedOrAccessNote:
      'Discreet guard-gate arrival in Shady Canyon, Hidden Canyon, Laguna Altura, Orchard Hills Groves, Turtle Ridge, and Irvine Spectrum / Jamboree executive towers.',
    zipCodes: ['92602', '92603', '92604', '92606', '92612', '92614', '92617', '92618', '92620'],
    neighborhoods: [
      'Shady Canyon',
      'Turtle Rock',
      'Quail Hill',
      'Hidden Canyon',
      'Woodbridge',
      'Orchard Hills',
      'Great Park Neighborhoods',
      'Portola Springs',
      'Turtle Ridge',
      'Laguna Altura',
      'University Park',
      'Irvine Spectrum Area',
    ],
    hasResortsOrHotels: true,
    wikiUrl: 'https://en.wikipedia.org/wiki/Irvine,_California',
    lat: 33.6846,
    lng: -117.8265,
  },
  {
    name: 'Newport Beach',
    slug: 'newport-beach-ca',
    shortSlug: 'newport-beach',
    path: '/newport-beach-ca/',
    regionLabel: 'Coastal Orange County',
    driveNote: 'Quick 15–20 minute arrival via SR-73 into Newport Coast, CdM & Harbor communities',
    heroPill: 'Serving All Newport Beach Neighborhoods · 7 Days a Week',
    heroLede:
      'Skip the crowded urgent care waiting room. Board-certified Internal Medicine physician Dr. Sina Khaneki, MD, MPH comes directly to your Newport Beach home, hotel, or office for same-day and next-day medical care.',
    localIntro:
      'From bayfront residences on Balboa Island and Lido Isle to hillside estates in Newport Coast, Pelican Hill, and Corona del Mar, Newport Beach patients trust Dr. Khaneki for discreet, 45–60+ minute in-home physician care without waiting rooms.',
    urgentCarePainPoint:
      'When you’re running a fever, dealing with severe congestion, or caring for an elderly loved one, the last thing you want is traffic on Pacific Coast Highway and an hour-long wait in a crowded clinic.',
    urgentCareRoad: 'Pacific Coast Hwy (PCH), MacArthur Blvd, or Newport Blvd',
    pharmacyNote:
      'Via Lido Drugs, Corona del Mar pharmacies, Hoag-vicinity pharmacies, CVS, Walgreens, or concierge delivery',
    gatedOrAccessNote:
      'Seamless arrival at guard-gated communities (Pelican Hill, Pelican Crest, Crystal Cove, Big Canyon, Harbor Ridge, Linda Isle), Newport Harbor marinas, and resorts.',
    zipCodes: ['92657', '92658', '92659', '92660', '92661', '92662', '92663'],
    neighborhoods: [
      'Corona del Mar',
      'Newport Coast',
      'Balboa Island',
      'Balboa Peninsula',
      'Lido Isle',
      'Pelican Hill',
      'Harbor Ridge',
      'Dover Shores',
      'Eastbluff',
      'Big Canyon',
      'Newport Heights',
      'Crystal Cove',
    ],
    hasResortsOrHotels: true,
    wikiUrl: 'https://en.wikipedia.org/wiki/Newport_Beach,_California',
    lat: 33.6189,
    lng: -117.9289,
  },
  {
    name: 'San Clemente',
    slug: 'san-clemente-ca',
    shortSlug: 'san-clemente',
    path: '/san-clemente-ca/',
    regionLabel: 'Coastal South Orange County',
    driveNote: 'Prompt arrival down I-5 or coastal routes to all San Clemente villages',
    heroPill: 'Serving Talega, Marblehead, Southwest SC & Pier Bowl · 7 Days',
    heroLede:
      'Private house call doctor in San Clemente, CA. Board-certified Internal Medicine physician Dr. Sina Khaneki, MD, MPH brings thorough, unrushed medical care straight to your San Clemente home.',
    localIntro:
      'Whether you live in the hills of Talega, along the bluffs in Marblehead and Sea Summit, or in Southwest San Clemente near T-Street and the Pier Bowl, Dr. Khaneki saves you a trip up the I-5 by bringing comprehensive internal medicine directly to your living room.',
    urgentCarePainPoint:
      'With limited local hospital and urgent care capacity in southernmost Orange County, sick visits often mean long waits or driving north up I-5 while feeling terrible.',
    urgentCareRoad: 'I-5, Avenida Pico, or El Camino Real',
    pharmacyNote:
      'Sea View Pharmacy, Talega & Avenida Pico CVS/Walgreens/Ralphs pharmacies, or local prescription delivery',
    gatedOrAccessNote:
      'Serving gated enclaves in Talega, Marblehead Coastal, Cyprus Shore, Cotton Point Estates, and senior residences across San Clemente.',
    zipCodes: ['92672', '92673', '92674'],
    neighborhoods: [
      'Talega',
      'Marblehead Coastal',
      'Southwest San Clemente',
      'Pier Bowl',
      'Sea Summit',
      'Forster Ranch',
      'Rancho San Clemente',
      'Cyprus Shore',
      'Coast District',
      'North Beach',
    ],
    hasResortsOrHotels: true,
    wikiUrl: 'https://en.wikipedia.org/wiki/San_Clemente,_California',
    lat: 33.4270,
    lng: -117.6120,
  },
  {
    name: 'San Juan Capistrano',
    slug: 'san-juan-capistrano-ca',
    shortSlug: 'san-juan-capistrano',
    path: '/san-juan-capistrano-ca/',
    regionLabel: 'Historic South Orange County',
    driveNote: '12–15 minutes south via I-5, Camino Capistrano, or La Novia',
    heroPill: 'Serving Marbella, San Juan Hills, Hunt Club & All SJC · 7 Days',
    heroLede:
      'Experienced house call physician in San Juan Capistrano, CA. Board-certified Internal Medicine doctor Dr. Sina Khaneki, MD, MPH comes directly to your home, equestrian estate, or senior residence.',
    localIntro:
      'From gated golf estates at Marbella Country Club and equestrian properties in The Hunt Club and Peppertree Bend to charming homes near Los Rios and San Juan Hills, our practice delivers attentive, old-fashioned house calls backed by modern internal medicine.',
    urgentCarePainPoint:
      'Fighting Ortega Highway & Del Obispo bottlenecks around downtown San Juan Capistrano just to sit in an urgent care lobby is avoidable when your physician comes to you.',
    urgentCareRoad: 'Ortega Hwy, Del Obispo St, Camino Capistrano, or I-5',
    pharmacyNote:
      'San Juan Pharmacy, Camino Capistrano & Marbella Plaza CVS/Vons pharmacies, or home delivery',
    gatedOrAccessNote:
      'Routine guard-gate and private ranch access in Marbella Country Club, Hunt Club, Connemara by the Sea, Stoneridge, and San Juan Capistrano senior communities.',
    zipCodes: ['92675', '92693'],
    neighborhoods: [
      'Marbella Country Club',
      'The Hunt Club',
      'San Juan Hills',
      'Los Rios Historic District',
      'Connemara by the Sea',
      'Peppertree Bend',
      'Meredith Canyon',
      'Hidden Mountain',
      'Rancho Madrina',
      'Pacificas',
    ],
    hasResortsOrHotels: true,
    wikiUrl: 'https://en.wikipedia.org/wiki/San_Juan_Capistrano,_California',
    lat: 33.5017,
    lng: -117.6625,
  },
];

export const CITY_BY_SLUG = Object.fromEntries(CITIES.map((c) => [c.slug, c]));
export const CITY_BY_NAME = Object.fromEntries(CITIES.map((c) => [c.name.toLowerCase(), c]));
