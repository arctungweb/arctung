---
title: 'Tungsten Copper for Heat Sinks and Thermal Management: A Selection Guide'
description: 'Why W/Cu pairs low thermal expansion with high conductivity for power-device bases and heat spreaders, which grades suit which duty, and where supply stops.'
pubDate: 2026-10-17
tag: 'Material selection'
---

Most heat-sink materials force a choice: aluminum conducts heat but expands nearly three times as fast as silicon; ceramics match silicon thermally but conduct heat modestly and cost machining time. Tungsten copper exists precisely to break that trade-off — a copper core for heat transport, a tungsten skeleton to pull the expansion rate down toward the semiconductor it serves. This guide explains when that combination earns its cost, and what a buyer should check before specifying a grade.

## Why the property pair matters

In a power module, the heat spreader or baseplate sits between the die and the cooler. Two of its properties decide reliability:

- **Thermal conductivity** moves heat out of the die area fast enough to keep junction temperatures in spec. The copper phase in W/Cu does this work; conductivity is typically in the range of high-power copper alloys rather than engineering plastics or steels.
- **Coefficient of thermal expansion** decides how much stress every heat cycle puts on the solder joints between die, substrate and base. Silicon expands at roughly 3 ppm/K, copper at roughly 17 ppm/K. W/Cu compositions sit typically between those values — often quoted in the 6–9 ppm/K range depending on the tungsten ratio — which is why soldered power assemblies built on W/Cu bases survive thermal cycling that works loose on pure copper.

The tungsten ratio is the tuning knob: more tungsten lowers expansion (and raises stiffness), more copper raises conductivity. Every W/Cu grade is a point on that line.

## Where W/Cu heat spreaders fit

The classic applications share one pattern: a heat-generating die, a soldered or brazed joint, and cyclical power:

- **Power device bases and substrates** — IGBT and MOSFET module baseplates, where thermal cycling fatigue of solder layers is the dominant failure mode.
- **Heat spreaders under high-flux chips**, where the spreader must move heat laterally to a cooler footprint without letting the assembly pump out during cycles.
- **RF and microwave carriers**, where the expansion match protects fragile ceramic substrates and fine wire bonds.

Against the common alternatives: pure copper conducts best but cycles loose; aluminum is light and cheap but expands badly and cannot be brazed as readily; AlSiC matches expansion well but is abrasive to machine and slower to source in small quantities. W/Cu occupies the middle — expansion close enough to protect the joints, conductivity high enough for the thermal path, and machinable like a hard bronze.

## The grade and supply question buyers must ask

Here is the part most selection guides omit: tungsten copper above roughly 80% tungsten sits inside China's dual-use export-control descriptions. The mainstream semiconductor heat-sink grades — W90Cu10 and higher — are excellent materials, but every order for them runs through an export-licensing step that adds time and uncertainty to your supply chain.

The practical selection logic therefore has two steps:

1. **Decide the composition your thermal budget actually needs.** Do not specify W90Cu10 by habit if a sub-80% grade meets your expansion and conductivity targets — many mounting, spreading and contact-side duties do.
2. **Match the composition to the supply route you can live with.** Sub-80% grades (W/Cu 75/25, 70/30) ship as ordinary industrial goods on the standard HS classification — commercial invoice, packing list, certificate of origin where needed — with no license step. For high-volume module programs, that difference in customs routine compounds over every shipment.

ArcTung supplies W/Cu 75/25 and 70/30 only, from its Heyuan factory, FOB Shenzhen/Nansha, with no MOQ on standard shapes and a 10–14 day lead time on standard machined parts — 20–25 days for custom geometries. If your specification needs a grade above the 80% line, we will say so in the first reply rather than after your design is committed.

## Specify it with these parameters

A usable W/Cu thermal-part RFQ carries: composition (or the CTE and conductivity targets so the grade can be chosen), dimensions and tolerances, flatness on the mating face, joining method (solder, braze, mechanical), and quantity. Typical infiltrated material checks for density, conductivity and hardness accompany the batch on request.

## Check your specification

Send your thermal stack-up or the part drawing to sales@arctung.com — we will confirm within 24 hours whether your composition sits inside our export range, quote it if it does, and tell you plainly if it does not.
