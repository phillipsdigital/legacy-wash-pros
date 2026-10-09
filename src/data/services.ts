export interface Photo {
  src: string;
  alt: string;
  caption: string;
  label?: 'Before' | 'After';
}

export interface Service {
  slug: string;
  title: string;
  /** Short line for home-page cards */
  short: string;
  /** Paragraph for the services overview page */
  long: string;
  bullets: string[];
  card: { src: string; alt: string };
  metaDescription: string;
  hero: { intro: string; checks: string[]; src: string; alt: string };
  covers: { title: string; intro: string; items: { title: string; text: string }[] };
  review: { quote: string; name: string; label: string };
  recent: { title: string; layout: 'portrait' | 'landscape'; photos: Photo[] };
}

// NOTE: service-page copy is draft — have Ryan confirm before launch.
export const services: Service[] = [
  {
    slug: 'concrete-washing',
    title: 'Concrete Washing',
    short: 'Driveways, sidewalks, patios and walkways cleaned of dirt, algae and slippery buildup.',
    long: 'Concrete soaks up dirt, algae and mildew over time, leaving driveways and walkways stained and slippery. We use a surface cleaner to lift the buildup evenly for a uniform, like-new finish.',
    bullets: ['Driveways', 'Sidewalks & walkways', 'Patios & pool areas'],
    card: { src: '/images/concrete-driveway.webp', alt: 'Surface cleaner stripping grime off a concrete driveway' },
    metaDescription:
      'Concrete and driveway washing in Joplin, MO. Legacy Wash Pros removes dirt, algae and slippery buildup from driveways, sidewalks and patios. Free estimates.',
    hero: {
      intro:
        'Driveways, sidewalks and patios take a beating from weather, tires and foot traffic. We lift the dirt, algae and slippery buildup so your concrete looks bright, even and new again.',
      checks: ['Driveways', 'Sidewalks & walkways', 'Patios & pool areas'],
      src: '/images/concrete-driveway.webp',
      alt: 'Surface cleaner stripping grime off a concrete driveway',
    },
    covers: {
      title: 'Concrete Cleaning for Homes & Businesses',
      intro: 'From stubborn grime to slippery buildup — if it’s concrete and it’s dirty, we can bring it back.',
      items: [
        { title: 'Driveways', text: 'Tire marks, dirt and dark staining lifted for an even, uniform finish.' },
        { title: 'Sidewalks & walkways', text: 'Clean, safer paths from the street to your front door.' },
        { title: 'Patios', text: 'Get your outdoor living space ready for company.' },
        { title: 'Pool areas', text: 'Slippery algae and grime cleared from around the water.' },
        { title: 'Retaining walls', text: 'Green growth and dirt washed off vertical concrete.' },
        { title: 'Commercial entryways', text: 'Storefront walks that make a strong first impression.' },
      ],
    },
    review: {
      quote: 'Ryan and his boys came and did some concrete cleaning I needed done pretty bad. They all did an amazing job.',
      name: 'Harvey B.',
      label: 'Concrete cleaning customer',
    },
    recent: {
      title: 'Concrete Before & After',
      layout: 'portrait',
      photos: [
        { src: '/images/walkway-after-before.webp', alt: 'Front walkway after and before cleaning, side by side', caption: 'Front walkway · after (left) and before (right)' },
        { src: '/images/concrete-wall-midclean.webp', alt: 'Concrete wall half cleaned showing a sharp before and after line', caption: 'Retaining wall · mid-clean' },
      ],
    },
  },
  {
    slug: 'house-washing',
    title: 'House Washing',
    short: 'Soft washing that lifts mildew and grime from siding without damaging it.',
    long: 'Soft washing cleans siding, brick and trim with low pressure, so mildew and grime come off and your exterior stays intact.',
    bullets: ['Vinyl siding', 'Brick & stucco', 'Trim & soffits'],
    card: { src: '/images/two-story-after.webp', alt: 'Two-story home with clean siding after a soft wash' },
    metaDescription:
      'House washing and soft washing in Joplin, MO. Legacy Wash Pros safely removes mildew, algae and dirt from vinyl siding, brick and trim. Free estimates.',
    hero: {
      intro:
        'Mildew, algae and dirt make siding look tired fast. Our soft wash approach cleans your home’s exterior with low pressure, so the grime comes off and your siding and trim stay intact.',
      checks: ['Vinyl siding', 'Brick & stucco', 'Low-pressure soft wash'],
      src: '/images/two-story-after.webp',
      alt: 'Two-story home with clean siding after a soft wash',
    },
    covers: {
      title: 'Soft Washing for Your Whole Exterior',
      intro: 'High pressure can crack siding and force water behind it. Soft washing cleans thoroughly while treating your home gently.',
      items: [
        { title: 'Vinyl siding', text: 'Green and black mildew streaks washed away.' },
        { title: 'Brick & stone', text: 'Dirt and organic growth lifted from porous masonry.' },
        { title: 'Stucco', text: 'Gentle cleaning for a surface that can’t take high pressure.' },
        { title: 'Trim & soffits', text: 'Bright, clean edges that frame your home.' },
        { title: 'Gutter faces', text: 'Dark streaks cleaned from the outside of your gutters.' },
        { title: 'Porches & entryways', text: 'A welcoming first impression at the front door.' },
      ],
    },
    review: {
      quote: 'Ryan and his boys are the best in the business, wouldn’t have anyone else to soft wash our house.',
      name: 'Lexi L.',
      label: 'House washing customer',
    },
    recent: {
      title: 'House Washing Before & After',
      layout: 'landscape',
      photos: [
        { src: '/images/two-story-before.webp', alt: 'Two-story vinyl siding streaked with mildew before washing', caption: 'Two-story home · before', label: 'Before' },
        { src: '/images/two-story-after.webp', alt: 'The same two-story home with clean siding after a soft wash', caption: 'Same home · after', label: 'After' },
        { src: '/images/brick-ranch-crew.webp', alt: 'Crew washing a brick ranch home', caption: 'Brick ranch home wash' },
        { src: '/images/siding-clean.webp', alt: 'Bright, clean white vinyl siding after washing', caption: 'Clean vinyl siding' },
      ],
    },
  },
  {
    slug: 'roof-washing',
    title: 'Roof Washing',
    short: 'Remove the dark streaks and growth that make a roof look older than it is.',
    long: 'Dark streaks on shingles make a roof look older than it is. A gentle roof wash removes the staining and growth and brings back the color you paid for.',
    bullets: ['Black streak removal', 'Moss & algae', 'Pre-sale curb appeal'],
    card: { src: '/images/roof-after.webp', alt: 'Clean shingle roof after washing' },
    metaDescription:
      'Roof washing in Joplin, MO. Legacy Wash Pros gently removes black streaks, moss and algae from shingle roofs to restore curb appeal. Free estimates.',
    hero: {
      intro:
        'Those dark streaks running down your shingles are organic growth — and they make a roof look years older than it is. We gently wash them away to bring back your roof’s true color.',
      checks: ['Black streak removal', 'Moss & algae', 'Gentle on shingles'],
      src: '/images/roof-after.webp',
      alt: 'Clean, even-toned shingle roof after washing',
    },
    covers: {
      title: 'A Cleaner Roof, Without the Risk',
      intro: 'Blasting a roof with high pressure can strip shingle granules. We take a gentler approach that cleans the surface and protects your roof.',
      items: [
        { title: 'Asphalt shingles', text: 'Streaks and staining removed without blasting the surface.' },
        { title: 'Moss & algae', text: 'Organic growth cleaned off before it spreads.' },
        { title: 'Rooflines & edges', text: 'Runoff stains cleaned up along the eaves.' },
        { title: 'Home sale prep', text: 'A cleaner roof helps listing photos and curb appeal.' },
        { title: 'Garages & sheds', text: 'Outbuildings cleaned to match the house.' },
        { title: 'Pair with a house wash', text: 'Roof and siding together for a complete refresh.' },
      ],
    },
    review: {
      quote: 'Ryan’s attention to detail, knowledge, and customer service are top notch!',
      name: 'Shawn P.',
      label: 'Legacy Wash Pros customer',
    },
    recent: {
      title: 'Roof Washing Before & After',
      layout: 'landscape',
      photos: [
        { src: '/images/roof-before.webp', alt: 'Shingle roof with streaks before washing', caption: 'Streaks across the shingles', label: 'Before' },
        { src: '/images/roof-after.webp', alt: 'The same roof clean and even-toned after washing', caption: 'Even color restored', label: 'After' },
      ],
    },
  },
  {
    slug: 'deck-washing',
    title: 'Deck Washing',
    short: 'Weathered, grimy decking brought back to clean wood that’s ready to enjoy.',
    long: 'Sun, rain and foot traffic turn decks gray and slick. We wash away the weathered layer and grime so your deck is clean, safer underfoot and ready to stain or seal.',
    bullets: ['Wood decks & stairs', 'Railings', 'Pool decks'],
    card: { src: '/images/deck-pool.webp', alt: 'Freshly washed wooden pool deck' },
    metaDescription:
      'Deck washing in Joplin, MO. Legacy Wash Pros cleans gray, weathered wood decks, stairs and railings so they’re safe, clean and ready to stain. Free estimates.',
    hero: {
      intro:
        'Sun, rain and foot traffic turn wood decks gray, grimy and slick. We wash away the weathered layer and buildup so your deck is clean, safer underfoot and ready to enjoy — or ready for a fresh stain.',
      checks: ['Wood decks & stairs', 'Railings', 'Pool decks'],
      src: '/images/deck-pool.webp',
      alt: 'Freshly washed wooden pool deck with stairs',
    },
    covers: {
      title: 'Every Board, Rail & Step',
      intro: 'A clean deck looks better, feels better underfoot and holds a new stain or sealer far better than a dirty one.',
      items: [
        { title: 'Deck boards', text: 'Gray weathering and grime washed off the walking surface.' },
        { title: 'Stairs & landings', text: 'Slick, dirty steps cleaned up for safer footing.' },
        { title: 'Railings & spindles', text: 'Every rail and post, not just the floor.' },
        { title: 'Pool decks', text: 'A clean, inviting space around the water.' },
        { title: 'Pergolas', text: 'Overhead beams cleaned to match the deck.' },
        { title: 'Stain & seal prep', text: 'A clean surface so new stain or sealer can soak in.' },
      ],
    },
    review: {
      quote: 'Very professional and the work speaks for itself. Will have them doing all my power washing needs.',
      name: 'Ryan B.',
      label: 'Legacy Wash Pros customer',
    },
    recent: {
      title: 'Decks We’ve Brought Back',
      layout: 'portrait',
      photos: [
        { src: '/images/deck-wash-in-progress.webp', alt: 'Crew member pressure washing a wooden deck', caption: 'Back deck wash in progress' },
        { src: '/images/deck-pool.webp', alt: 'Freshly washed wooden pool deck', caption: 'Pool deck and stairs · finished' },
      ],
    },
  },
  {
    slug: 'fence-washing',
    title: 'Fence Washing',
    short: 'Fences cleaned of gray weathering, mildew and dirt so the whole yard looks sharper.',
    long: 'Fences collect dirt, mildew and gray weathering that drag down the whole yard. A professional wash brightens them up and preps wood for a fresh stain.',
    bullets: ['Wood privacy fences', 'Vinyl fences', 'Gates & posts'],
    card: { src: '/images/fence-privacy.webp', alt: 'Clean wooden privacy fence after washing' },
    metaDescription:
      'Fence washing in Joplin, MO. Legacy Wash Pros cleans mildew, dirt and gray weathering from wood and vinyl fences. Free estimates.',
    hero: {
      intro:
        'A dirty, gray fence drags down the whole yard. We clean away the mildew, dirt and weathering on wood and vinyl fences so your property looks crisp from every angle.',
      checks: ['Wood privacy fences', 'Vinyl fences', 'Gates & posts'],
      src: '/images/fence-privacy.webp',
      alt: 'Clean wooden privacy fence after washing',
    },
    covers: {
      title: 'A Sharper Yard, Post to Post',
      intro: 'Your fence frames everything else in the yard. A clean one makes the grass greener and the house brighter.',
      items: [
        { title: 'Wood privacy fences', text: 'Gray weathering and grime lifted to bring back the wood.' },
        { title: 'Vinyl fences', text: 'Green film and dirt washed off white vinyl.' },
        { title: 'Picket fences', text: 'Every picket cleaned for a crisp front-yard look.' },
        { title: 'Gates & posts', text: 'Hardware, posts and gates cleaned along with the panels.' },
        { title: 'Both sides', text: 'Ask about cleaning the neighbor-facing side too.' },
        { title: 'Stain prep', text: 'A clean surface so fresh stain goes on evenly.' },
      ],
    },
    review: {
      quote: 'Ryan is great and super reliable and does an awesome job. He is also a good guy. HIGHLY RECOMMEND.',
      name: 'Tess B.',
      label: 'Legacy Wash Pros customer',
    },
    recent: {
      title: 'Fences We’ve Freshened Up',
      layout: 'portrait',
      photos: [
        { src: '/images/fence-privacy.webp', alt: 'Clean wooden privacy fence after washing', caption: 'Backyard privacy fence · finished' },
        { src: '/images/deck-pool.webp', alt: 'Washed pool deck with a clean wood fence behind it', caption: 'Fence and pool deck refresh' },
      ],
    },
  },
  {
    slug: 'window-washing',
    title: 'Window Washing',
    short: 'Streak-free window cleaning for homes, storefronts and commercial buildings.',
    long: 'Clean glass makes a home or storefront look cared for. We wash residential and commercial windows for a streak-free finish customers notice.',
    bullets: ['Homes', 'Storefronts & offices', 'Glass garage & shop doors'],
    card: { src: '/images/window-storefront.webp', alt: 'Crew member squeegeeing a storefront window' },
    metaDescription:
      'Residential and commercial window washing in Joplin, MO. Legacy Wash Pros delivers streak-free glass for homes, storefronts and offices. Free estimates.',
    hero: {
      intro:
        'Clean glass makes a home feel brighter and a business look cared for. Legacy Wash Pros provides streak-free residential and commercial window washing across the Joplin area.',
      checks: ['Residential', 'Commercial', 'Streak-free finish'],
      src: '/images/window-storefront.webp',
      alt: 'Crew member squeegeeing a storefront window',
    },
    covers: {
      title: 'Glass for Homes & Businesses',
      intro: 'From a front picture window to a full storefront, we leave glass clear and spot-free.',
      items: [
        { title: 'Home windows', text: 'Picture windows, bay windows and everyday glass.' },
        { title: 'Storefront glass', text: 'A clear view in that invites customers through the door.' },
        { title: 'Offices', text: 'Brighter workspaces and a sharper first impression.' },
        { title: 'Glass garage & shop doors', text: 'Large commercial glass panels cleaned top to bottom.' },
        { title: 'Frames & sills', text: 'Dust and grime wiped away along with the glass.' },
        { title: 'Recurring service', text: 'Ask about regular cleanings for your business.' },
      ],
    },
    review: {
      quote: 'Ryan does what he says he’s going to do when he says he’s going to do it! He goes above and beyond.',
      name: 'Amanda B.',
      label: 'Legacy Wash Pros customer',
    },
    recent: {
      title: 'Windows We’ve Washed',
      layout: 'portrait',
      photos: [
        { src: '/images/commercial-glass-door.webp', alt: 'Crew member cleaning a commercial glass garage door', caption: 'Commercial glass door' },
        { src: '/images/crew-commercial-door.webp', alt: 'Ryan’s boys squeegeeing a commercial glass door', caption: 'The crew on a commercial job' },
        { src: '/images/crew-residential-windows.webp', alt: 'Young crew member holding a squeegee in front of a house', caption: 'Residential window cleaning' },
      ],
    },
  },
];

export const serviceHref = (slug: string) => `/services/${slug}/`;
