---
title: 'Copper Tungsten Thermal Conductivity and Heat Sink Grades'
description: 'Copper tungsten thermal conductivity and CTE by grade, which W/Cu composition fits each heat-sink duty, and where the supply range stops at 80% tungsten.'
pubDate: 2026-10-17
tag: 'Material selection'
---

Most heat-sink materials force a choice: aluminum conducts heat but expands nearly three times as fast as silicon; ceramics match silicon thermally but conduct heat modestly and cost machining time. Tungsten copper exists precisely to break that trade-off — a copper core for heat transport, a tungsten skeleton to pull the expansion rate down toward the semiconductor it serves. This guide gives the property numbers buyers actually compare, then explains when the combination earns its cost.

## Why the property pair matters

In a power module, the heat spreader or baseplate sits between the die and the cooler. Two of its properties decide reliability:

- **Thermal conductivity** moves heat out of the die area fast enough to keep junction temperatures in spec. The copper phase in W/Cu does this work, so conductivity tracks the copper content of the grade.
- **Coefficient of thermal expansion** decides how much stress every heat cycle puts on the solder joints between die, substrate and base. Silicon expands at roughly 3 ppm/K, copper at roughly 17 ppm/K. W/Cu compositions sit between those values, which is why soldered power assemblies built on W/Cu bases survive thermal cycling that works loose on pure copper.

The tungsten ratio is the tuning knob: more tungsten lowers expansion and raises hardness, more copper raises conductivity. Every W/Cu grade is a point on that line, and the numbers below show how far apart those points actually sit.

## Copper tungsten thermal conductivity and CTE by grade

These are the values to put next to your thermal budget. Ranges reflect normal infiltration-grade spread, not a single mill lot.

| Property | W/Cu 70/30 | W/Cu 75/25 | W/Cu 80/20* | W/Cu 85/15* | W/Cu 90/10* |
| --- | --- | --- | --- | --- | --- |
| Thermal conductivity (W/m·K) | 230–250 | 190–210 | 180–200 | 170–190 | 160–180 |
| CTE (10⁻⁶/K, 20–100 °C) | 8.0–8.7 | 6.8–7.5 | 6.0–6.8 | 5.4–6.2 | 4.8–5.6 |
| Electrical conductivity (% IACS) | ≥ 42 | ≥ 38 | 34–38 | 30–34 | 26–30 |
| Hardness (HB) | 150–170 | 160–180 | 185–205 | 210–230 | 240–260 |

\* Reference bands for grades above the range we supply, compiled from published mill data. Treat them as indicative, not a specification.

Three things follow from that table, and they matter more than the individual cells:

1. **Conductivity and expansion move in opposite directions.** Buying expansion margin costs heat-path margin at roughly the rate shown: stepping from 70/30 to 75/25 gives up about 40 W/m·K of conductivity to gain about 1.2 ppm/K of expansion. Decide which of the two your design is short of before you pick a grade.
2. **Compare temperature ranges like for like.** The CTE band above is quoted over 20–100 °C. Datasheets measured over 20–400 °C read higher — commonly 1–2 ppm/K higher — so a "6.5 ppm/K" figure from another supplier is not necessarily a different material. Ask for the range, not just the number.
3. **No grade is a CTE match for silicon.** Even the highest-tungsten grade on that table sits a couple of ppm/K above silicon. The residual strain is carried by the joint and the substrate, which is why this property belongs in a stack-up review rather than a single-material decision. For how CTE behaves with temperature and how to specify it, see the [copper tungsten CTE guide](/guides/tungsten-copper-thermal-expansion/).

## Match the substrate, not just the cooler

The baseplate is soldered or brazed to the ceramic or leadframe, so that interface — not the cooler — is usually the one that cracks. Typical expansion values for the common neighbours in a power stack:

| Joined to the W/Cu part | Typical CTE (10⁻⁶/K) | What it means for grade choice |
| --- | --- | --- |
| Silicon die | 2.6–3.0 | No W/Cu grade matches; the die attach carries most of the mismatch. High-tungsten grades reduce it, they do not remove it. |
| AlN ceramic substrate | ~4.5 | The highest-tungsten grades get closest. Below the 80% line, a compliant joint layer does more for reliability than another 5% of tungsten. |
| Alumina (Al₂O₃, 96%) | ~7.5 | W80/W75 territory. This is the case where a stocked sub-80% grade genuinely fits without compromise. |
| GaAs and similar compound semiconductors | 5.8–6.5 | The W85 region is the natural target; expect a licensing step if you specify it. |
| Copper or aluminium (cooler side) | 17 and 23 | Nothing in the W/Cu family matches. Join mechanically or through a compliant layer rather than bonding rigidly. |

Read the two tables together and the selection story is usually decided by the ceramic, not by the heat flux. The heat flux sets how much conductivity you can afford to give up; the substrate sets how much expansion you need.

## Which grade for which heat-sink duty

- **Large IGBT or MOSFET baseplate, thick section, hard thermal cycling** — start at 75/25. The stiffness and lower expansion protect the solder layer on a broad bonded face, and 190–210 W/m·K is normally more conductivity than a water-cooled stack needs at that size.
- **Compact heat spreader under a high-flux chip** — start at 70/30. When the spreader is small, the bonded area is small and differential movement has less leverage; conductivity becomes the limiting property instead.
- **RF and microwave carrier** — decide from the ceramic: AlN carriers push you toward the highest tungsten you can license, alumina carriers usually sit comfortably at 75/25.
- **Contact-side or mounting hardware inside a thermal stack** — 70/30 is often enough. These parts conduct heat but are rarely the expansion-critical joint.

## The grade and supply question buyers must ask

Here is the part most selection guides omit: tungsten copper above roughly 80% tungsten sits inside China's dual-use export-control descriptions. The mainstream semiconductor heat-sink grades — W90Cu10 and higher — are excellent materials, but every order for them runs through an export-licensing step that adds time and uncertainty to your supply chain.

The practical selection logic therefore has two steps:

1. **Decide the composition your thermal budget actually needs.** Do not specify W90Cu10 by habit if a sub-80% grade meets your expansion and conductivity targets — many mounting, spreading and contact-side duties do.
2. **Match the composition to the supply route you can live with.** Sub-80% grades (W/Cu 75/25, 70/30) ship as ordinary industrial goods on the standard HS classification — commercial invoice, packing list, certificate of origin where needed — with no license step. For high-volume module programs, that difference in customs routine compounds over every shipment.

ArcTung supplies W/Cu 75/25 and 70/30 only, from its Heyuan factory, FOB Shenzhen/Nansha, with no MOQ on standard shapes and a 10–14 day lead time on standard machined parts — 20–25 days for custom geometries. If your specification needs a grade above the 80% line, we will say so in the first reply rather than after your design is committed. The shapes we cut in that range are on the [heat sinks and contacts](/applications/heat-sinks-contacts/) page.

## Specify it with these parameters

A usable W/Cu thermal-part RFQ carries: composition (or the CTE and conductivity targets so the grade can be chosen), dimensions and tolerances, flatness on the mating face, joining method (solder, braze, mechanical), and quantity. Typical infiltrated material checks for density, conductivity and hardness accompany the batch on request — [how to read that data sheet](/guides/tungsten-copper-properties-and-density/) covers what each number should look like.

Flatness deserves its own line. A baseplate that is flat at 25 °C and bows at 150 °C will not seat on its cooler no matter what the room-temperature certificate says, so state the flatness limit at the service temperature when the assembly is clamped hot.

## Common questions

**Is copper tungsten a good heat sink material?** Yes, where the requirement is conductivity and low expansion at the same time. It is not the cheapest option per kilogram and it is not the highest-conductivity option — pure copper still wins there — but it is one of the few materials that keeps both properties inside a power module's limits.

**How thermally conductive is copper tungsten?** Between roughly 160 and 250 W/m·K across the common grades, with conductivity rising as copper content rises. For context, pure copper is around 390–400 W/m·K and aluminium around 200–230 W/m·K, so a 70/30 grade is in aluminium's territory while a 90/10 grade is well below it.

**What is the CTE of copper tungsten?** Typically 5–9 ppm/K over 20–100 °C, with more tungsten at the low end and more copper at the high end. Compare only figures quoted over the same temperature range — published values over 20–400 °C run 1–2 ppm/K higher.

**Why not use pure copper or aluminium?** Cost and weight favour them, and conductivity favours copper. The problem is expansion: at roughly 17 and 23 ppm/K they impose several times the strain on a soldered joint against silicon or AlN, and the assembly that cycles loose fails early. W/Cu trades a fraction of the conductivity for a joint that survives.

**Can you supply W85 or W90?** No. Our range is 75/25 and 70/30, and the higher-tungsten grades fall under export licensing that we do not take on. If your design needs them, we will tell you in the first reply instead of quoting something we cannot ship.

## Check your specification

Send your thermal stack-up or the part drawing to sales@arctung.com — we will confirm within 24 hours whether your composition sits inside our export range, quote it if it does, and tell you plainly if it does not.
