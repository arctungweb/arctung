import type { ImageMetadata } from 'astro';
import imgSeam from '../assets/factory/03-sintering-workshop.png';
import imgRW from '../assets/factory/07-product-threaded-electrodes.jpg';
import imgEdm from '../assets/factory/09-workshop-materials.jpg';
import imgHeat from '../assets/factory/01-infiltration-furnace.png';

export interface Application {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string[];
  keywords: string;
  image: ImageMetadata;
  imageAlt: string;
  keyPoints: [string, string][];
  productSlugs: string[];
}

export const applications: Application[] = [
  {
    slug: 'seam-welding-wheels',
    name: 'Seam Welding Electrode Wheels',
    shortName: 'Seam Welding',
    tagline: 'Wheels that hold profile through the whole coil run',
    description: [
      'Seam welding is a continuous process: the wheel never stops conducting, so heat and mechanical load build up over the entire coil or drum run. Tungsten-copper earns its place here because it resists arc erosion and mushrooming far longer than chromium-copper or beryllium-copper wheels — especially on galvanized and coated steels, where zinc pickup shortens the life of softer alloys.',
      'Typical users: automotive fuel-tank, exhaust and radiator lines; steel drum and can making; tube and strip mills. Wheels are consumed on a wear cycle and reordered by diameter and profile — which is why we machine every wheel to drawing, with bore H7 and runout 0.02 mm, so replacements drop straight onto your existing shafts.'
    ],
    keywords: 'seam welding electrode wheel, seam welding wheel, roller electrode, galvanized steel seam welding, W/Cu wheel',
    image: imgSeam,
    imageAlt: 'Sintering workshop where seam-welding wheels are produced',
    keyPoints: [
      ['Galvanized & coated steels', 'W/Cu resists zinc pickup and sticking far better than Cr-Cu wheels on coated strip.'],
      ['Profile stability', 'Flat, single/double bevel, R profile and knurled edges machined to drawing — the profile holds through the wear cycle.'],
      ['Two grades by weld schedule', 'W/Cu 75/25 for maximum wear life; W/Cu 70/30 when the schedule needs more current (≈ 42% IACS).'],
      ['Fast reorder', 'Standard sizes ship in 10–14 days with no MOQ — keep one spare wheel on the shelf instead of ten.']
    ],
    productSlugs: ['electrode-wheels-75-25', 'electrode-wheels-70-30']
  },
  {
    slug: 'resistance-welding-electrodes',
    name: 'Resistance Welding Electrodes',
    shortName: 'Resistance Welding',
    tagline: 'Threaded electrodes and caps for guns, robots and fixtures',
    description: [
      'Spot and projection welding electrodes live a harder life than their size suggests: thousands of weld cycles per shift, each one a thermal shock. Tungsten-copper facings and shanks keep their shape where pure copper deforms, cutting dressing frequency and nugget-size variation on high-strength and coated steels.',
      'We machine threaded electrodes to drawing — metric, UNC/UNF and special forms — on a 15-lathe cell, with thread gauges verified per batch. Rods and blocks in both W/Cu grades are stocked for shops that machine their own caps, holders and shanks.'
    ],
    keywords: 'resistance welding electrode, spot welding electrode, threaded electrode, projection welding, welding gun consumable',
    image: imgRW,
    imageAlt: 'Threaded tungsten-copper resistance-welding electrodes',
    keyPoints: [
      ['Less dressing, steadier welds', 'W/Cu faces resist mushrooming, so nugget size stays stable across the shift.'],
      ['Threaded to drawing', 'Metric, UNC/UNF or special thread forms, batch-verified with thread gauges.'],
      ['Stock for in-house machining', 'Rods and blocks in W/Cu 75/25 and 70/30 for caps, holders and shanks.'],
      ['Robot-cell ready', 'Repeatable dimensions keep automated stations running without re-teaching.']
    ],
    productSlugs: ['threaded-electrodes', 'rods-blocks']
  },
  {
    slug: 'edm-electrodes',
    name: 'EDM Electrodes',
    shortName: 'EDM',
    tagline: 'Low-wear electrode stock for die-sinking and small-hole work',
    description: [
      'In die-sinking EDM, electrode wear shows up directly on the workpiece: every micron the electrode loses is a micron of contour error in the mold. Tungsten-copper combines low electrode wear with good machinability, making it the standard choice for fine finishing passes, sharp corners and small holes in hardened tool steels and carbides.',
      'We supply rods, blocks and near-net blanks in W/Cu 75/25 and 70/30 — rough-machined or ground — and cut custom electrode sections to your drawing. Reorder cycles in EDM shops run weekly to monthly, which is exactly what our no-MOQ, 10–14 day supply model is built for.'
    ],
    keywords: 'EDM electrode, tungsten copper EDM electrode, die sinking electrode, EDM electrode material, low wear electrode',
    image: imgEdm,
    imageAlt: 'Tungsten-copper rod and block stock for EDM electrodes',
    keyPoints: [
      ['Low wear rate', 'The tungsten skeleton holds fine features through long burns in hardened steels.'],
      ['Sharp corners & small holes', 'The go-to material where copper or graphite electrodes erode too fast.'],
      ['Machinable stock', 'Rods, blocks and blanks supplied rough-machined or ground to your spec.'],
      ['Weekly reorder friendly', 'No MOQ and a 10–14 day lead time match real EDM consumption cycles.']
    ],
    productSlugs: ['rods-blocks', 'custom-parts']
  },
  {
    slug: 'heat-sinks-contacts',
    name: 'Heat Sinks & Electrical Contacts',
    shortName: 'Heat Sinks & Contacts',
    tagline: 'Where W/Cu grades split — and what we do and do not supply',
    description: [
      'Tungsten-copper shows up in two more places buyers often ask about: heat sinks for semiconductor and power-device packaging, and arc-resistant contacts for high-voltage switchgear. Both are real applications — but they are dominated by high-tungsten grades (80% W and above), which sit inside China\'s dual-use export-control descriptions.',
      'Our export range stops below that line. For contact-side needs in lower-tungsten compositions — for example W/Cu 70/30 arc-quenching components in medium-voltage equipment — we can quote to drawing after a composition check. For semiconductor heat sinks in ≥80% W grades, we decline politely and refer you on. Keeping this boundary clear is what lets every order ship through routine customs, with no export-license delays on your side.'
    ],
    keywords: 'tungsten copper heat sink, tungsten copper contact, electrical contact material, arc resistant contact, W/Cu thermal management',
    image: imgHeat,
    imageAlt: 'Copper infiltration furnace used for tungsten-copper parts',
    keyPoints: [
      ['HV & MV contacts', 'Arc-erosion resistance makes W/Cu a proven contact material; lower-W compositions are checkable case by case.'],
      ['Semiconductor heat sinks', 'Mainstream grades are ≥80% W — outside our export range and inside export-control descriptions.'],
      ['The 80% line', 'We supply sub-80% tungsten alloys only: routine customs, no license delays, predictable delivery.'],
      ['Ask anyway', 'Not sure where your composition falls? Send the spec — we answer within 24 hours.']
    ],
    productSlugs: ['custom-parts']
  }
];
