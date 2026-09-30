import type { ImageMetadata } from 'astro';
import imgThreaded from '../assets/factory/07-product-threaded-electrodes.jpg';
import imgSintering from '../assets/factory/03-sintering-workshop.webp';
import imgMaterials from '../assets/factory/09-workshop-materials.jpg';
import imgFurnace from '../assets/factory/01-infiltration-furnace.webp';

export interface SpecRow {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  alloy: string;
  alloyNote: string;
  tagline: string;
  description: string[];
  keywords: string;
  image: ImageMetadata;
  imageAlt: string;
  badge: string;
  specs: SpecRow[];
  applications: string[];
}

export const products: Product[] = [
  {
    slug: 'electrode-wheels-75-25',
    name: 'W/Cu 75/25 Electrode Wheels',
    shortName: 'W/Cu 75/25',
    alloy: 'CuW75 · 75% Tungsten',
    alloyNote: 'Tungsten 75% ±2%, balance copper',
    tagline: 'The workhorse alloy for seam-welding wheels',
    description: [
      'Our W/Cu 75/25 electrode wheels are manufactured by copper infiltration of pressed tungsten skeletons, then finish-machined to your drawing — bore keyed, profiled, and balanced for smooth tracking at welding line speed.',
      'The 75/25 composition delivers the arc-erosion resistance of tungsten with enough conductivity for continuous seam welding on galvanized and bare steels. Machined to OD tolerances of 0/+0.5 mm with 0.02 mm runout, every wheel runs true on your welding arm.'
    ],
    keywords: 'tungsten copper electrode wheel, CuW75, W/Cu 75/25, seam welding wheel, roller electrode, resistance welding',
    image: imgThreaded,
    imageAlt: 'Tungsten-copper electrode products on the production line',
    badge: 'Best seller',
    specs: [
      { label: 'Composition', value: 'W 75% ±2%, Cu balance (CuW75)' },
      { label: 'Density', value: '≈ 15.2 g/cm³ (typical)' },
      { label: 'Hardness', value: '≈ 195 HB (typical)' },
      { label: 'Electrical conductivity', value: '≈ 34% IACS (typical)' },
      { label: 'Max dimensions', value: 'OD 400 mm × thickness 100 mm' },
      { label: 'Tolerances', value: 'OD 0/+0.5 mm · thickness ±0.1 mm · bore H7 · runout 0.02 mm' },
      { label: 'Edge profiles', value: 'Flat · single/double bevel · R profile · knurled' },
      { label: 'Lead time', value: '10–14 days standard · 20–25 days custom' },
      { label: 'MOQ', value: 'None for standard sizes' }
    ],
    applications: ['Seam welding of galvanized steel', 'Roller-spot welding', 'Can and drum lid welding', 'Tube mills and strip welding']
  },
  {
    slug: 'electrode-wheels-70-30',
    name: 'W/Cu 70/30 Electrode Wheels',
    shortName: 'W/Cu 70/30',
    alloy: 'CuW70 · 70% Tungsten',
    alloyNote: 'Tungsten 70% ±2%, balance copper',
    tagline: 'Higher conductivity for heavy-current welding',
    description: [
      'When your seam-welding schedule demands more current, the 70/30 grade moves heat faster: roughly 25% higher electrical conductivity than 75/25, at the cost of some erosion life. Many customers stock both grades and switch by weld schedule.',
      'Same production route — infiltration, sintering, finish machining — and the same tolerance package: OD 0/+0.5 mm, bore H7, runout 0.02 mm. Supplied with a batch traceability record on request.'
    ],
    keywords: 'CuW70 electrode wheel, W/Cu 70/30, tungsten copper roller, seam welding electrode, high conductivity welding wheel',
    image: imgSintering,
    imageAlt: 'Vacuum sintering workshop where tungsten-copper wheels are produced',
    badge: 'High conductivity',
    specs: [
      { label: 'Composition', value: 'W 70% ±2%, Cu balance (CuW70)' },
      { label: 'Density', value: '≈ 14.5 g/cm³ (typical)' },
      { label: 'Hardness', value: '≈ 175 HB (typical)' },
      { label: 'Electrical conductivity', value: '≈ 42% IACS (typical)' },
      { label: 'Max dimensions', value: 'OD 400 mm × thickness 100 mm' },
      { label: 'Tolerances', value: 'OD 0/+0.5 mm · thickness ±0.1 mm · bore H7 · runout 0.02 mm' },
      { label: 'Edge profiles', value: 'Flat · single/double bevel · R profile · knurled' },
      { label: 'Lead time', value: '10–14 days standard · 20–25 days custom' },
      { label: 'MOQ', value: 'None for standard sizes' }
    ],
    applications: ['Heavy-current seam welding', 'Welding of coated and high-resistivity steels', 'Projection welding fixtures', 'General resistance-welding consumables']
  },
  {
    slug: 'rods-blocks',
    name: 'Electrode Rods & Blocks',
    shortName: 'Rods & Blocks',
    alloy: 'CuW75 / CuW70',
    alloyNote: 'Both grades available',
    tagline: 'Stock shapes machined from infiltration bar',
    description: [
      'Round rods, rectangular blocks, and near-net blanks in both W/Cu grades — the raw stock for spot-weld electrode caps, holders, and EDM electrode sections.',
      'Blanks are supplied rough-machined or ground; send a drawing for finished parts. Rods ship in vacuum bags with foam lining; blocks in wooden crates.'
    ],
    keywords: 'tungsten copper rod, CuW block, EDM electrode stock, spot welding electrode material, tungsten copper bar',
    image: imgMaterials,
    imageAlt: 'Tungsten-copper rod and block materials in the workshop',
    badge: 'Stock shapes',
    specs: [
      { label: 'Grades', value: 'W/Cu 75/25 · W/Cu 70/30' },
      { label: 'Forms', value: 'Round rod · rectangular block · near-net blank' },
      { label: 'Surface', value: 'Rough-machined · ground on request' },
      { label: 'Lead time', value: '10–14 days standard' },
      { label: 'MOQ', value: 'None for stock sizes' }
    ],
    applications: ['Spot-welding electrode caps', 'EDM electrode sections', 'Holder and shank material']
  },
  {
    slug: 'threaded-electrodes',
    name: 'Threaded Electrodes',
    shortName: 'Threaded',
    alloy: 'CuW75 / CuW70',
    alloyNote: 'Both grades available',
    tagline: 'Precision-threaded welding consumables',
    description: [
      'Threaded tungsten-copper electrodes for resistance-welding guns and automated stations — machined in-house on 15 lathes with thread gauges verified per batch.',
      'Standard and custom thread forms to your drawing; batches shipped with dimensional inspection records.'
    ],
    keywords: 'threaded tungsten copper electrode, resistance welding consumable, threaded electrode, welding gun electrode',
    image: imgThreaded,
    imageAlt: 'Threaded tungsten-copper electrodes finished on the line',
    badge: 'To drawing',
    specs: [
      { label: 'Grades', value: 'W/Cu 75/25 · W/Cu 70/30' },
      { label: 'Thread forms', value: 'Metric · UNC/UNF · to drawing' },
      { label: 'Lead time', value: '10–14 days standard · 20–25 days custom' },
      { label: 'MOQ', value: 'None for standard sizes' }
    ],
    applications: ['Resistance-welding guns', 'Automated welding stations', 'Robot torch consumables']
  },
  {
    slug: 'custom-parts',
    name: 'Custom W/Cu Parts',
    shortName: 'Custom',
    alloy: 'To specification',
    alloyNote: 'Low-tungsten (<80% W) alloys only',
    tagline: 'Near-net shapes and special profiles',
    description: [
      'Send a drawing and we quote it: shaped infiltrated blanks, profiled segments, composite assemblies, and special geometries in W/Cu 75/25 or 70/30. Tooling and machining are quoted per part — no hidden minimums.',
      'Note: we supply alloys below 80% tungsten only. This keeps every shipment outside dual-use export controls and clears routine customs handling.'
    ],
    keywords: 'custom tungsten copper parts, tungsten copper machining, W/Cu components, custom electrode manufacturer',
    image: imgFurnace,
    imageAlt: 'Copper infiltration furnace for tungsten-copper parts',
    badge: 'To drawing',
    specs: [
      { label: 'Grades', value: 'W/Cu 75/25 · W/Cu 70/30' },
      { label: 'Max dimensions', value: 'OD 400 mm × thickness 100 mm' },
      { label: 'Tolerances', value: 'OD 0/+0.5 mm · thickness ±0.1 mm · bore H7 · runout 0.02 mm' },
      { label: 'Lead time', value: '20–25 days (tooling + machining)' },
      { label: 'MOQ', value: 'Quoted per part' }
    ],
    applications: ['Near-net infiltrated blanks', 'Profiled segments and plates', 'Special welding fixtures']
  }
];

