import type { ImageMetadata } from 'astro';
import imgThreaded from '../assets/factory/07-product-threaded-electrodes.jpg';
import imgSintering from '../assets/factory/03-sintering-workshop.webp';
import imgMaterials from '../assets/factory/09-workshop-materials.jpg';
import imgFurnace from '../assets/factory/01-infiltration-furnace.webp';

export interface SpecRow {
  label: string;
  value: string;
}

export interface BodySection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  links?: { label: string; href: string }[];
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
  body?: BodySection[];
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
    body: [
      {
        heading: 'Why the harder grade runs seam wheels',
        paragraphs: [
          'A seam wheel is a bearing as much as an electrode: it carries electrode force, tracks the strip at line speed, and passes thousands of amps through a moving contact. The 75/25 grade is specified where the limiting failure is mechanical — the face flattening out, the edge profile rounding over, or the wheel growing in diameter until the seam width drifts out of specification.',
          'The extra tungsten does not eliminate wear — nothing does — but it changes the wear mode from smearing to slow, even dressing, which is what makes predictable reorder cycles possible.'
        ]
      },
      {
        heading: 'Edge profiles and dressing',
        paragraphs: [
          'Profile selection drives seam consistency more than alloy choice does. The shapes we cut most often:',
        ],
        bullets: [
          'Flat face — general seam work and roller-spot welding where seam width tolerance is generous.',
          'Single or double bevel — concentrates current on the sheet side; the standard choice for can-body and drum-lid seams.',
          'R profile — for curved seams and thin strip where entry angle matters.',
          'Knurled face — drives the strip and cleans the contact track on tube mills.'
        ]
      },
      {
        heading: 'What to confirm before ordering',
        paragraphs: [
          'Three dimensions decide whether a replacement wheel drops straight onto your shaft: bore (we cut H7 as standard, keyed bores to drawing), OD against your arm geometry (0/+0.5 mm), and runout (0.02 mm — the value that stops the wheel from hunting on the seam). Send us the drawing or the worn wheel and we will match all three.',
          'Thickness is held to ±0.1 mm and the wheel is balanced before packing, because at line speed an unbalanced wheel shows up as seam chatter long before it shows up as wear.'
        ]
      }
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
    body: [
      {
        heading: 'Where the extra conductivity pays',
        paragraphs: [
          'Roughly 25% higher conductivity than 75/25 means less resistive heat generated in the wheel itself for the same current schedule. On thick stock, high-speed lines, or any schedule already near the ceiling of your transformer and secondary circuit, that difference shows up as a cooler wheel face, less sticking, and a wider usable current window.',
          'The trade is erosion life: the softer composite dresses faster under the same electrode force. On lines that dress on a fixed interval anyway, the faster dress rate costs little — which is why 70/30 is the default on can-body and tube-mill lines that maintain their wheels on schedule.'
        ]
      },
      {
        heading: 'Switching between grades',
        paragraphs: [
          'Both grades are produced on the same infiltration line and machined on the same cell, so switching a station from 75/25 to 70/30 — or running one station on each — is a purchasing decision, not a process change. Bore, OD, profile and tolerances are identical across grades; only the material values differ.',
          'A practical approach many customers take: stock 75/25 for the stations where wheel life limits the campaign, 70/30 for the stations where heat limits it. Both stay in supply from stock shapes with no minimum order.'
        ]
      },
      {
        heading: 'Traceability and inspection',
        paragraphs: [
          'Every batch is checked for composition, density and hardness, and a batch traceability record ships on request. For buyers running automotive or food-can lines that require incoming inspection paperwork, we can include dimensional inspection records per wheel — bore, OD, runout and thickness — against the drawing revision you hold.',
          'Third-party stamped test reports to ASTM B702 are available when your quality system needs an external certificate rather than a factory report.'
        ]
      }
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
    body: [
      {
        heading: 'Sizes and delivery condition',
        paragraphs: [
          'Round rods run from small diameters up to the infiltration limits of our press — 400 mm OD is the practical ceiling, and blocks are cut to 100 mm thickness. Stock sizes ship as-rolled and rough-machined; ground stock is available when you need a clean starting surface for your own lathe or grinder work.',
          'Every rod and block ships vacuum-bagged with foam lining, rods in cartons and blocks in wooden crates. Nothing leaves the floor damp or dinged — tungsten copper is dense, and packaging failures break receiving docks, not just products.'
        ]
      },
      {
        heading: 'Machining notes for your shop',
        paragraphs: [
          'Infiltrated W/Cu machines like a hard bronze: carbide tooling, positive rake, flood coolant, and no grinding required for ordinary turning, milling or drilling. Threading is practical on conventional lathes — which is why our threaded-electrode line runs on standard equipment with gauge checks per batch.',
          'The two habits worth forming: take light finishing passes to avoid tearing the copper phase out of the surface, and support thin sections — the composite is stiff but not forgiving of clamping chatter on slender parts.'
        ]
      },
      {
        heading: 'What shops make from this stock',
        paragraphs: [
          'The common denominator is consumable parts that see heat and current: spot-welding caps and holders, projection-welding die facings, EDM electrode sections for die-sinking work, and journal or contact surfaces in electrical fixtures.',
          'If your end use is closer to a finished component than a shop blank — bores, profiles, threads, faces — skip the second machining step entirely and send us the drawing; finished parts often cost less than stock plus your machine time.'
        ]
      }
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
    body: [
      {
        heading: 'Threading a refractory composite',
        paragraphs: [
          'Cutting a clean thread in tungsten copper is a quality-control problem more than a machining one: the copper phase tears easily, and a torn thread root becomes a stress riser exactly where gun vibration concentrates. Our thread cell runs fifteen lathes dedicated to this work, with go/no-go thread gauges checked per batch — because a thread that gauges true on arrival is the only thread that screws into your gun the first time.',
          'Metric and UNC/UNF forms are routine; special forms, left-hand threads and tapered shanks are cut to drawing. Dimensional inspection records accompany each batch on request.'
        ]
      },
      {
        heading: 'Design notes for gun integration',
        paragraphs: [
          'The threaded joint in a welding gun does three jobs at once: it carries welding current, it holds electrode force, and it must release for tip changes without galling. Thread fit class matters here — we cut to the class your holder was designed around, and we can hold it batch after batch because the same lathe programs run every order.',
          'For automated stations, consistency beats everything: an electrode that seats identically every time is one that does not force a re-teach of your robot cell. Repeat orders are machined to the same program and the same drawing revision, so seating behavior never drifts.'
        ]
      },
      {
        heading: 'Failure modes worth knowing',
        paragraphs: [
          'Threaded W/Cu electrodes rarely fail at the thread; they fail at the face, from mushrooming and coating pickup — the same wear physics as every resistance-welding consumable. What threads do fail from is cross-threading at tip changes and vibration loosening in guns without the right seating torque.',
          'If your consumption pattern shows thread damage rather than face wear, the fix is usually seating practice or holder design, not alloy. Send us the failed electrodes — a photo of the wear face tells us more than a purchase order does.'
        ],
        links: [{ label: 'Resistance welding electrode applications', href: '/applications/resistance-welding-electrodes/' }]
      }
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
    body: [
      {
        heading: 'How a custom quote runs',
        paragraphs: [
          'Send the drawing — PDF, DWG, STEP, or a marked-up photo of the old part — plus alloy grade, quantity and your delivery port. Within 24 hours you have a firm unit price, tooling cost if any, and a lead time; the quote holds for 7 days because tungsten raw material moves.',
          'First articles are quoted at one-piece quantities with no penalty: we do not use minimum-order pricing to force volume. If the part works in your process, repeat batches run off the same program at the same price basis, with raw-material movement as the only variable.'
        ]
      },
      {
        heading: 'What the floor can take on',
        paragraphs: [
          'The machine park covers turning, milling, drilling, threading and surface grinding across fifteen lathes plus machining centers, with parts up to 400 mm OD × 100 mm thickness. Common custom work includes:',
        ],
        bullets: [
          'Wheels with keyed bores, R profiles and knurl faces to drawing',
          'Threaded studs and shanks in metric, UNC/UNF and special forms',
          'Profiled segments, blocks and near-net blanks for EDM and fixture work',
          'Water-jacketed holders and assemblies where W/Cu faces a cooled shank'
        ]
      },
      {
        heading: 'The composition line, stated plainly',
        paragraphs: [
          'We quote W/Cu 75/25 and 70/30 only. Every alloy below 80% tungsten ships as ordinary industrial goods — standard HS classification, no export-license step, routine customs in the EU, US, Japan and Korea.',
          'If your drawing specifies a grade above that line, we decline and say so in the first reply rather than after your tooling is committed. It keeps our supply chain predictable, and your deliveries with it.'
        ],
        links: [{ label: 'Heat sinks & contacts — the 80% boundary explained', href: '/applications/heat-sinks-contacts/' }]
      }
    ],
    applications: ['Near-net infiltrated blanks', 'Profiled segments and plates', 'Special welding fixtures']
  }
];

