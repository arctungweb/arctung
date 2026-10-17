---
title: 'Tungsten Copper Properties and Density: How to Read a CuW Data Sheet'
description: 'How to read a CuW datasheet: density, conductivity, hardness and thermal expansion, how each shifts with tungsten content, and what to check before qualifying.'
pubDate: 2026-10-17
tag: 'Material selection'
---

Tungsten copper datasheets look straightforward until you compare two of them side by side and find the same grade quoted with different numbers. Both can be right. CuW properties move with composition more than buyers expect, and the manufacturing route matters as much as the ratio. This guide explains what each headline property means, how it scales with tungsten content, and what deserves a second look before you qualify a material.

## A composite, so the properties interpolate

Tungsten copper is made by pressing a tungsten powder skeleton and infiltrating it with molten copper. Because the result is two interpenetrating phases rather than a solid solution, its properties sit **between pure copper and pure tungsten** — and move monotonically with the ratio:

- **More tungsten** → higher density, higher hardness, better erosion resistance, lower conductivity.
- **More copper** → lower density, better conduction, faster dressing under the same force.

That is why the industry standardizes on a handful of ratios. Our line is [W/Cu 75/25 and 70/30](/guides/w75cu25-vs-w70cu30/); knowing the direction of each trade lets you read any CuW datasheet sensibly.

## Density: the number that tells you the grade is real

Pure copper is about 8.9 g/cm³; pure tungsten 19.3 g/cm³. Infiltrated CuW grades fall between, and density rises almost linearly with tungsten fraction. Typical ranges run roughly 13.5–15.5 g/cm³ across the common 70–80% W grades — our two grades are around 14–15 g/cm³, with the 75/25 grade denser than the 70/30.

Density is the fastest integrity check available to a receiving dock, for one reason: **porosity lowers density**. A poorly infiltrated billet reads light. If incoming density checks fall below the published range, the likely cause is incomplete infiltration — and porosity shows up in service as poor conductivity and premature face erosion. It is cheap to weigh and calculate a billet's density; it catches more problems than any visual inspection.

## Electrical and thermal conductivity

Conductivity moves opposite to density: roughly 38–45% IACS across the common resistance-welding grades — our 75/25 at the lower end, 70/30 nearer the upper. For context, that is several times better than pure tungsten and several times worse than hard coppers. What CuW buys at this conductivity level is **stability**: the copper phase sits in a skeleton that does not soften, so the resistive heating that would anneal a wrought copper alloy instead leaves the properties unchanged.

Thermal conductivity tracks electrical conductivity in copper-based materials (the same Wiedemann–Franz behaviour as ordinary copper alloys, roughly). More copper means heat leaves the electrode face faster — the mechanism that keeps CuW faces hundreds of degrees cooler than the refractory alternatives in continuous duty.

## Hardness and its temperature stability

Typical hardness for the standard grades sits around 80–95 HRB (roughly 170–200 HB). Two things matter more than the room-temperature number:

1. **Where it softens.** Wrought copper alloys rely on heat treatment that anneals away in service — typically losing hardness well below 500 °C. Infiltrated CuW retains useful hardness to roughly 900 °C because the tungsten skeleton, not a heat treatment, carries the load.
2. **How it wears.** CuW faces do not mushroom; they dress slowly and evenly. Wear becomes a scheduled maintenance event instead of an unplanned one.

## Thermal expansion: roughly half of pure copper

Copper expands a lot for a metal; tungsten barely at all. Infiltrated CuW lands in between — roughly half the thermal expansion of pure copper, at a rate that sits usefully between copper and semiconductor materials like silicon. This is the quiet property behind two of CuW's best applications: lower thermal-cycle stress on joints in [power-electronics heat spreading](/applications/heat-sinks-contacts/), and dimensional stability in welding electrodes that cycle thermally thousands of times per shift.

## What to check on any CuW datasheet

1. **Composition tolerance** — reputable grades state the tungsten percentage with a tolerance (ours is ±2%); unspecified composition is a red flag.
2. **Manufacturing route** — "infiltrated" should be stated; pressed-and-sintered-only material is typically porous and light.
3. **Density and how it was measured** — the porosity check described above.
4. **Certificates** — typical values in a table are marketing; a material test report per batch, and stamped third-party reports to ASTM B702 when your quality system requires them, are the numbers you can qualify against.

## Common questions

**Why do different suppliers quote different densities for the same grade?** Composition tolerance plus infiltration quality. Within roughly ±0.5 g/cm³ is normal; larger deviations mean ask questions.

**Does higher density always mean better material?** Higher density means more tungsten or less porosity — the first is a trade-off, not a virtue. Match the grade to the application instead.

**Can I verify a shipment on receipt?** Yes — density by weight and dimensions takes minutes, and we supply batch traceability records and test reports on request with every order.

## Get a quote

If you are qualifying a CuW grade or comparing suppliers' datasheets, send us your specification — [request a quote](/contact/) and we will supply full typical and certified properties with pricing within 24 hours, valid 7 days.
