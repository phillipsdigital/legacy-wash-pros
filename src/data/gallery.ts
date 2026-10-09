export type GalleryCategory = 'concrete' | 'house' | 'roof' | 'deck' | 'fence' | 'windows' | 'commercial' | 'crew';

export interface GalleryItem {
  cat: GalleryCategory;
  src: string;
  alt: string;
  caption: string;
}

export const galleryCategories: { id: GalleryCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'concrete', label: 'Concrete' },
  { id: 'house', label: 'House' },
  { id: 'roof', label: 'Roof' },
  { id: 'deck', label: 'Deck' },
  { id: 'fence', label: 'Fence' },
  { id: 'windows', label: 'Windows' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'crew', label: 'The Crew' },
];

export const categoryLabel = (id: GalleryCategory) =>
  galleryCategories.find((c) => c.id === id)?.label ?? id;

export const gallery: GalleryItem[] = [
  { cat: 'roof', src: '/images/roof-before.webp', alt: 'Shingle roof with streaks before washing', caption: 'Streaked roof · before' },
  { cat: 'roof', src: '/images/roof-after.webp', alt: 'The same roof clean and even-toned after washing', caption: 'Same roof · after' },
  { cat: 'house', src: '/images/siding-soffit-before-after.webp', alt: 'Mildew-spotted siding and soffit before and after cleaning', caption: 'Siding & soffit · before / after' },
  { cat: 'concrete', src: '/images/walkway-after-before.webp', alt: 'Front walkway after and before cleaning, side by side', caption: 'Front walkway · after / before' },
  { cat: 'house', src: '/images/crew-brick-wash.webp', alt: 'Two of Ryan’s boys in Legacy jerseys washing brick', caption: 'Brick home wash in progress' },
  { cat: 'commercial', src: '/images/commercial-building.webp', alt: 'Commercial metal building and red awning after washing', caption: 'Commercial building & awning' },
  { cat: 'house', src: '/images/siding-before-after.webp', alt: 'Vinyl siding before and after a soft wash, side by side', caption: 'Siding soft wash · before / after' },
  { cat: 'concrete', src: '/images/concrete-driveway.webp', alt: 'Surface cleaner stripping grime off a driveway', caption: 'Driveway cleaning in progress' },
  { cat: 'house', src: '/images/siding-mildew-before.webp', alt: 'Vinyl siding streaked with green mildew before washing', caption: 'Mildewed siding · before' },
  { cat: 'house', src: '/images/siding-mildew-after.webp', alt: 'The same siding clean after a soft wash', caption: 'Same wall · after' },
  { cat: 'deck', src: '/images/deck-pool.webp', alt: 'Freshly washed wooden pool deck', caption: 'Pool deck wash' },
  { cat: 'fence', src: '/images/fence-privacy.webp', alt: 'Clean wooden privacy fence after washing', caption: 'Privacy fence wash' },
  { cat: 'house', src: '/images/brick-ranch-crew.webp', alt: 'Crew washing a brick ranch home with the equipment trailer in the drive', caption: 'Brick ranch home exterior' },
  { cat: 'windows', src: '/images/window-storefront.webp', alt: 'Crew member squeegeeing a storefront window', caption: 'Storefront windows' },
  { cat: 'concrete', src: '/images/concrete-wall-midclean.webp', alt: 'Concrete wall half cleaned showing a sharp before and after line', caption: 'Retaining wall · mid-clean' },
  { cat: 'house', src: '/images/siding-clean.webp', alt: 'Bright, clean white vinyl siding after washing', caption: 'Clean vinyl siding' },
  { cat: 'deck', src: '/images/deck-wash-in-progress.webp', alt: 'Crew member pressure washing a wooden deck', caption: 'Deck wash in progress' },
  { cat: 'commercial', src: '/images/commercial-glass-door.webp', alt: 'Crew member cleaning a commercial glass garage door', caption: 'Commercial glass door' },
  { cat: 'windows', src: '/images/crew-residential-windows.webp', alt: 'Young crew member holding a squeegee in front of a house', caption: 'Residential windows' },
  { cat: 'commercial', src: '/images/crew-commercial-door.webp', alt: 'Ryan’s boys squeegeeing a commercial glass door', caption: 'The crew on a commercial job' },
  { cat: 'crew', src: '/images/crew-trailer.webp', alt: 'The crew loading the Legacy Wash Pros truck and water trailer', caption: 'Loading up for the day' },
];

/** The six photos shown in "Recent Jobs Around Joplin" on the home page */
export const homeGallery: GalleryItem[] = [
  { cat: 'house', src: '/images/crew-brick-wash.webp', alt: 'Crew member in a Legacy jersey washing a brick house', caption: 'Brick home wash' },
  { cat: 'commercial', src: '/images/commercial-building.webp', alt: 'Commercial metal building and red awning after washing', caption: 'Commercial building wash' },
  { cat: 'house', src: '/images/siding-soffit-before-after.webp', alt: 'Mildew-spotted siding and soffit before and after cleaning', caption: 'Siding · before & after' },
  { cat: 'deck', src: '/images/deck-wash-in-progress.webp', alt: 'Crew member pressure washing a wooden deck', caption: 'Deck washing' },
  { cat: 'house', src: '/images/brick-ranch-crew.webp', alt: 'Crew washing a brick ranch home with the equipment trailer in the drive', caption: 'Ranch home exterior' },
  { cat: 'commercial', src: '/images/commercial-glass-door.webp', alt: 'Crew member cleaning a commercial glass garage door', caption: 'Commercial windows' },
];
