import type { ImageMetadata } from 'astro';
import imgSeam from '../assets/factory/03-sintering-workshop.webp';
import imgRW from '../assets/factory/07-product-threaded-electrodes.jpg';
import imgEdm from '../assets/factory/09-workshop-materials.jpg';
import imgHeat from '../assets/factory/01-infiltration-furnace.webp';
import type { BodySection } from './products';

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
  body?: BodySection[];
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
    body: [
      {
        heading: 'Matching the wheel to the machine',
        paragraphs: [
          'Seam wheels are consumed parts, and the machines that run them are long-lived: longitudinal and transverse seamers, drum and can-body lines, tube mills. Your shaft, drive method and arm geometry are fixed capital — the wheel must fit them, not the other way round. That is why every wheel we cut starts from your drawing, or from a measurement of the worn wheel if the drawing is gone.',
          'Drive method matters for profile selection: gear-driven wheels put torsional loads through the bore and keyway, while friction or knurl-driven wheels put them through the face. We cut the keyway and the face profile to match whichever drive your machine uses.'
        ]
      },
      {
        heading: 'Weld schedule vs alloy choice',
        paragraphs: [
          'The schedule and the alloy are one decision, not two. Higher current schedules (thick stock, coated strip, fast travel) run cooler on the more conductive 70/30 face; high-force, long-campaign schedules hold profile longer on 75/25. If your nugget or seam consistency problem is heat, move conductivity up; if it is geometry drift, move hardness up.',
          'Zinc and other coatings change the calculation: a softer face picks up coating material, glazes, and starts sticking to the strip. This is the single most common reason lines migrate from Cr-Cu or Be-Cu wheels to tungsten copper.'
        ]
      },
      {
        heading: 'Keeping spare wheels to a minimum',
        paragraphs: [
          'Because replacements are cut to the same drawing every time, you can hold one spare per station instead of a full set. Our standard lead time is 10–14 days with no minimum order, so the reorder trigger is diameter wear — not fear of the supply chain.',
          'For lines that consume wheels weekly, we quote standing schedules: agreed dimensions, agreed profile, shipments on your consumption rhythm with each batch carrying its inspection record.'
        ]
      }
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
    body: [
      {
        heading: 'Electrode shapes and what they solve',
        paragraphs: [
          'The consumable geometry is chosen by the weld, not the catalogue: radius-face caps for general spot work, flat and domed faces for projection dies, tapered shanks for robot guns where tip-dress access is tight. We cut all of them from the same infiltrated stock — which means the alloy you validated is the alloy you keep getting, order after order.',
          'Internal cooling matters as much as face shape. We machine water passages to your holder specification, because a W/Cu face only delivers its thermal advantage when the heat it conducts out actually leaves the electrode.'
        ]
      },
      {
        heading: 'Coated and high-strength steels',
        paragraphs: [
          'Galvanized and Zn-Al coated sheet is where copper-alloy electrodes historically died young: zinc alloys into the face, builds an insulating glaze, and forces earlier dressing. The tungsten skeleton in W/Cu resists that pickup mechanically — the face stays metallic longer, dressing intervals stretch out, and nugget size stops wandering across the shift.',
          'On high-strength steels the load is mechanical instead: higher electrode force drives face growth on soft alloys. This is the case for W/Cu 75/25 facings — the selection logic is covered in detail in our alloy comparison guide.'
        ],
        links: [{ label: 'W75Cu25 vs W70Cu30 selection guide', href: '/guides/w75cu25-vs-w70cu30/' }]
      },
      {
        heading: 'Consumption rhythms we can serve',
        paragraphs: [
          'Automated gun cells consume electrodes on a predictable cycle, and our supply model is built around it: no minimum order, 10–14 days on standard shapes, and repeat orders machined to the same drawing revision every time. For robot cells running mixed consumables, thread form and shank geometry stay identical across batches — verified with thread gauges and dimensional records.',
          'Shops that machine their own caps and shanks buy our rods and blocks instead: stock shapes in both grades, rough-machined or ground, shipped vacuum-packed with foam lining.'
        ],
        links: [{ label: 'Electrode rods & blocks', href: '/products/rods-blocks/' }]
      }
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
    body: [
      {
        heading: 'Why wear rate decides electrode economics',
        paragraphs: [
          'Die-sinking EDM cost is mostly electrode cost: the electrode wears into a mirror of the cavity, and every re-cut for finishing needs a fresh face or a fresh electrode. The tungsten skeleton in W/Cu holds fine detail — sharp corners, thin ribs, small holes — through burns where pure copper would round over and graphite would shed particles into the gap.',
          'Low wear also means fewer electrode copies per cavity. For deep, narrow features — the classic hard case — W/Cu is often the only material that finishes the burn without a redress cycle.'
        ]
      },
      {
        heading: 'Against graphite and pure copper',
        paragraphs: [
          'Graphite is cheap and fast for roughing, but it cannot hold a knife edge, and its wear ratio on carbide work is poor. Pure copper conducts beautifully but wears too fast for fine finishing and machines poorly in small sections. W/Cu sits where those two fail: it holds detail like graphite wishes it could, and survives burns copper cannot.',
          'Standard practice in die shops: graphite or copper for roughing passes, W/Cu for the finishing electrodes that set the final contour and corner radii.'
        ]
      },
      {
        heading: 'Stock formats that match EDM workflows',
        paragraphs: [
          'EDM consumption is continuous and lumpy: one week you need six small rods, the next week a block for a big cavity repair. Our no-MOQ stock model exists for exactly this rhythm — rods and blocks in both grades, rough-machined or ground, shipping in 10–14 days.',
          'For recurring electrode sections, we hold your drawing and cut repeat batches to the same dimensions, so the only thing that changes between orders is the delivery date.'
        ],
        links: [{ label: 'Electrode rods & blocks', href: '/products/rods-blocks/' }]
      }
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
    body: [
      {
        heading: 'The material logic on each side',
        paragraphs: [
          'Both applications buy the same two properties: the tungsten skeleton for arc and erosion resistance, the copper phase for thermal and electrical transport. Heat-sink work leans on the copper — W/Cu spreads heat in power modules while its expansion rate sits between silicon and copper, lowering thermal-cycle stress on soldered joints. Contact work leans on the tungsten — the skeleton resists arc erosion that would crater a pure copper contact in thousands of operations.',
          'That balance is why W/Cu grades span such different industries, and also why the tungsten percentage is the first thing every buyer in these fields asks about.'
        ]
      },
      {
        heading: 'Why our catalogue stops at 80% tungsten',
        paragraphs: [
          'Mainstream semiconductor heat-sink grades (W90Cu10 and above) and many high-voltage contact grades fall at or above 80% tungsten — compositions that sit inside China\'s dual-use export-control descriptions. Supplying them is a licensing process we deliberately do not run, because our whole export model is built on routine customs: no licenses, no delays, no surprises for your broker.',
          'Below that line, W/Cu 75/25 and 70/30 ship as ordinary industrial goods with standard documentation — commercial invoice, packing list, certificate of origin where needed — and clear customs on the usual HS classification with no export-license step.'
        ]
      },
      {
        heading: 'If your spec lands outside the range',
        paragraphs: [
          'Send it anyway. For medium-voltage contact components in sub-80% compositions we can quote to drawing after checking the specification against our export range. For high-tungsten heat sinks we will tell you directly that we are not the supplier — and we will not waste your RFQ cycle pretending otherwise.',
          'What we can always offer, in our two grades, is the machining side: contact assemblies, fixture components and heat-spreader parts cut to drawing where the composition allows. Our custom-parts page covers what our floor can take on.'
        ],
        links: [{ label: 'Custom W/Cu parts', href: '/products/custom-parts/' }]
      }
    ],
    productSlugs: ['custom-parts']
  }
];
