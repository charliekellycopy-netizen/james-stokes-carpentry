import type { ImageMetadata } from 'astro';

import toolWall from '../assets/photos/tool-wall.jpg';
import handPlane from '../assets/photos/hand-plane.jpg';
import toolRack from '../assets/photos/tool-rack.jpg';
import herringboneFloor from '../assets/photos/herringbone-floor.jpg';
import livingRoomFloor from '../assets/photos/living-room-floor.jpg';
import fittedWardrobe from '../assets/photos/fitted-wardrobe.jpg';
import oakDoor from '../assets/photos/oak-door.jpg';
import kitchenIsland from '../assets/photos/kitchen-island.jpg';
import kitchenRustic from '../assets/photos/kitchen-rustic.jpg';
import staircaseGlass from '../assets/photos/staircase-glass.jpg';
import staircaseWhite from '../assets/photos/staircase-white.jpg';
import wallUnit from '../assets/photos/wall-unit.jpg';
import shelving from '../assets/photos/shelving.jpg';
import decking from '../assets/photos/decking.jpg';

/* PLACEHOLDER: every contact detail below is a placeholder. Replace before launch. */
export const business = {
  name: 'James Stoke',
  trade: 'Carpentry & Joinery',
  phone: '020 0000 0000',
  phoneHref: 'tel:+442000000000',
  email: 'hello@example.com',
  hours: 'Monday to Friday, 8am to 5pm',
  area: 'All of Greater London, mainly north, east and south',
};

export const nav = [
  { label: 'Services', href: 'services/' },
  { label: 'Projects', href: 'projects/' },
  { label: 'About', href: 'about/' },
  { label: 'Contact', href: 'contact/' },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  jobs: string[];
  image: ImageMetadata;
  alt: string;
};

export const services: Service[] = [
  {
    slug: 'bespoke-joinery',
    name: 'Bespoke joinery',
    short: 'Made-to-measure pieces built in the workshop and fitted on site.',
    description:
      'Anything that needs to be made to fit rather than bought off the shelf. Pieces are built in the workshop, then fitted and finished on site.',
    jobs: ['Window seats and benches', 'Built-in desks', 'Panelling', 'Radiator covers'],
    image: toolWall,
    alt: 'Woodworking hand tools hung in rows on a dark workshop wall',
  },
  {
    slug: 'fitted-kitchens',
    name: 'Fitted kitchens',
    short: 'Full kitchens, or new doors, worktops and islands for existing ones.',
    description:
      'Complete kitchens built to your layout, or a refit of what you already have. Painted or natural timber, with solid wood or stone worktops.',
    jobs: ['Full kitchen builds', 'Islands and breakfast bars', 'Worktop fitting', 'Pantry cupboards'],
    image: kitchenIsland,
    alt: 'Kitchen with full-height timber cabinets and a white island',
  },
  {
    slug: 'wardrobes-alcoves',
    name: 'Fitted wardrobes and alcove storage',
    short: 'Wardrobes, shelving and cupboards built into the space you have.',
    description:
      'Built-in storage that uses every inch, including awkward alcoves, eaves and chimney breasts. Shelving, cupboards and wardrobes to the ceiling.',
    jobs: ['Alcove cupboards and shelves', 'Floor-to-ceiling wardrobes', 'Under-stairs storage', 'Loft and eaves storage'],
    image: shelving,
    alt: 'Wooden shelves fitted between two walls',
  },
  {
    slug: 'staircases',
    name: 'Staircases',
    short: 'New staircases, replacement treads and balustrades.',
    description:
      'New staircases made to measure, and repairs to existing ones. Treads, risers, handrails, spindles and balustrades, in timber or with glass.',
    jobs: ['New staircases', 'Replacement treads', 'Balustrades and handrails', 'Squeak and creak repairs'],
    image: staircaseGlass,
    alt: 'Timber staircase beside a tall glazed window',
  },
  {
    slug: 'doors-skirting',
    name: 'Internal doors and skirting',
    short: 'Doors hung, skirting and architrave fitted, and period mouldings matched.',
    description:
      'New internal doors hung and adjusted, and skirting, architrave and mouldings fitted. Period profiles can be matched for older houses.',
    jobs: ['Hanging internal doors', 'Skirting and architrave', 'Matching period mouldings', 'Door ironmongery'],
    image: oakDoor,
    alt: 'Dark oak internal door lit from above',
  },
  {
    slug: 'sash-windows',
    name: 'Sash window repair',
    short: 'Sticking, rattling and rotten sashes repaired rather than replaced.',
    description:
      'Repairs to timber sash windows: new cords, splicing in new timber where the frame has rotted, draught-proofing and easing sashes that stick.',
    jobs: ['Re-cording', 'Rot repairs and splicing', 'Draught-proofing', 'Easing and adjusting'],
    image: handPlane,
    alt: 'Hand plane and chisel resting on a workbench beside wood shavings',
  },
  {
    slug: 'decking-garden',
    name: 'Decking and garden structures',
    short: 'Decks, steps, pergolas and garden rooms in hardwood or softwood.',
    description:
      'Decks, steps and garden structures built on a proper frame so they last. Hardwood or treated softwood, depending on budget.',
    jobs: ['Hardwood and softwood decks', 'Garden steps', 'Pergolas', 'Bin and bike stores'],
    image: decking,
    alt: 'Timber deck surrounded by trees and planting',
  },
  {
    slug: 'timber-flooring',
    name: 'Timber flooring',
    short: 'Solid and engineered floors laid, including herringbone and parquet.',
    description:
      'Solid and engineered wood floors laid over a level subfloor. Boards, herringbone and parquet, plus repairs to existing floors.',
    jobs: ['Solid and engineered boards', 'Herringbone and parquet', 'Subfloor levelling', 'Board repairs'],
    image: herringboneFloor,
    alt: 'Close view of an oak herringbone floor',
  },
  {
    slug: 'general-repairs',
    name: 'General repairs',
    short: 'The smaller jobs: doors that stick, loose boards, broken shelves.',
    description:
      'The jobs that are too small for a builder but need doing properly. Doors that stick, loose floorboards, broken shelves, worn handrails.',
    jobs: ['Sticking doors', 'Loose floorboards', 'Shelf and bracket repairs', 'Small fitting jobs'],
    image: toolRack,
    alt: 'Rack of chisels, saws and hand tools above a workbench',
  },
];

export type Project = {
  title: string;
  area: string;
  service: string;
  summary: string;
  image: ImageMetadata;
  alt: string;
};

/* PLACEHOLDER: sample projects with stock photos. Replace with James's own work. */
export const projects: Project[] = [
  {
    title: 'Oak kitchen and island',
    area: 'Islington',
    service: 'Fitted kitchens',
    summary: 'Full-height oak units and a central island for a Victorian terrace.',
    image: kitchenIsland,
    alt: 'Kitchen with full-height timber cabinets and a white island',
  },
  {
    title: 'Staircase and glass balustrade',
    area: 'Hampstead',
    service: 'Staircases',
    summary: 'A new oak staircase with a frameless glass balustrade beside a double-height window.',
    image: staircaseGlass,
    alt: 'Timber staircase beside a tall glazed window',
  },
  {
    title: 'Media wall with hidden storage',
    area: 'Highbury',
    service: 'Bespoke joinery',
    summary: 'A light oak wall unit with open shelves and push-to-open cupboards.',
    image: wallUnit,
    alt: 'Light wood wall unit with open shelves and closed cupboards',
  },
  {
    title: 'Hardwood deck and steps',
    area: 'Dulwich',
    service: 'Decking and garden structures',
    summary: 'A raised hardwood deck stepping down to the lawn of a sloping garden.',
    image: decking,
    alt: 'Timber deck surrounded by trees and planting',
  },
  {
    title: 'Loft bedroom wardrobes',
    area: 'Wandsworth',
    service: 'Fitted wardrobes',
    summary: 'Floor-to-ceiling wardrobes built to fit a room with no straight walls.',
    image: fittedWardrobe,
    alt: 'Bedroom with a run of fitted timber wardrobes',
  },
  {
    title: 'Dresser-style kitchen',
    area: 'Hackney',
    service: 'Fitted kitchens',
    summary: 'Glazed dresser cabinets and open shelving in a ground-floor flat.',
    image: kitchenRustic,
    alt: 'Kitchen with a tall glazed timber dresser and open shelves',
  },
  {
    title: 'Staircase restoration',
    area: 'Clapham',
    service: 'Staircases',
    summary: 'New oak treads and handrail on the original staircase, with painted spindles.',
    image: staircaseWhite,
    alt: 'Staircase with timber treads and white painted spindles',
  },
  {
    title: 'Herringbone living room floor',
    area: 'Peckham',
    service: 'Timber flooring',
    summary: 'An engineered oak herringbone floor laid over a new level subfloor.',
    image: livingRoomFloor,
    alt: 'Living room with an oak herringbone floor',
  },
];

export const process = [
  {
    step: 'Consult',
    text: 'James visits, measures up and talks through what you want. You get a written, fixed quote within a week.',
  },
  {
    step: 'Design',
    text: 'For bespoke work you get drawings to agree before anything is cut, with timber and finish samples.',
  },
  {
    step: 'Build',
    text: 'Pieces are made in the workshop where possible, so less time is spent working in your home.',
  },
  {
    step: 'Finish',
    text: 'Everything is fitted, finished and checked with you. The site is left clean on the last day.',
  },
];

/*
 * SAMPLE TESTIMONIALS: these are invented placeholders, not real customer reviews.
 * Replace with genuine reviews (with permission) before the site goes live.
 */
export const testimonials = [
  {
    quote: 'Turned up when he said he would, kept the place tidy and the alcove cupboards look like they were always there.',
    name: 'Sarah',
    area: 'Islington',
  },
  {
    quote: 'The quote was the price we paid. No surprises, and the staircase is solid as a rock.',
    name: 'Tom',
    area: 'Clapham',
  },
  {
    quote: 'He found a way to fit wardrobes into a room with sloping ceilings that two other firms said couldn’t be done.',
    name: 'Anna',
    area: 'Hackney',
  },
];

export const boroughs = {
  North: ['Islington', 'Camden', 'Haringey', 'Barnet', 'Enfield'],
  East: ['Hackney', 'Tower Hamlets', 'Newham', 'Waltham Forest', 'City of London'],
  South: ['Lambeth', 'Southwark', 'Lewisham', 'Wandsworth', 'Greenwich'],
  West: ['Westminster', 'Kensington and Chelsea', 'Hammersmith and Fulham', 'Ealing'],
};

