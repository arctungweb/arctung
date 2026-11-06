---
title: 'Tungsten Copper Properties and Density by Grade (W90–W50)'
description: 'Density, conductivity and hardness for copper tungsten grades from W90Cu10 to W50Cu50, the density band each grade should read, and how to tell porosity from a copper-rich billet.'
pubDate: 2026-10-17
tag: 'Material selection'
---

Tungsten copper datasheets look straightforward until you put two of them side by side and find the same grade quoted with different numbers. Both can be right. CuW properties move with composition more than buyers expect, and the tolerance band on the composition is usually wider than the tolerance band on the property. This page gives the numbers by grade, the density each grade should actually read, and the checks that separate a sound billet from one that was labelled optimistically.

## A composite, so the properties interpolate

Tungsten copper is made by pressing a tungsten powder skeleton and infiltrating it with molten copper. Because the result is two interpenetrating phases rather than a solid solution, its properties sit **between pure copper and pure tungsten** — and move monotonically with the ratio:

- **More tungsten** → higher density, higher hardness, better erosion resistance, lower conductivity.
- **More copper** → lower density, better conduction, faster dressing under the same force.

That monotonic behaviour is what makes the numbers below predictable. It is also why the industry standardises on a handful of ratios instead of specifying from scratch: [W/Cu 75/25 and 70/30](/guides/w75cu25-vs-w70cu30/) cover most electrode and thermal work, and the grades either side of them are refinements of the same trade-off.

## Density by grade

Density is the one property you can predict exactly, because it is set by the mass ratio of two metals of known density — 19.25 g/cm³ for tungsten, 8.96 g/cm³ for copper. For a mass fraction *f* of tungsten:

> ρ = 1 / ( f / 19.25 + (1 − f) / 8.96 )

That gives the **full-density** value for a nominal composition. The band beside it is what commercial material reads once you allow the composition tolerance most suppliers quote (±2% W) and up to about 1% residual porosity. The two stocked grades are in bold.

| Grade | W, wt % | Calculated<br>(g/cm³) | Density band<br>(g/cm³) | Band<br>(lb/in³) |
| --- | ---: | ---: | ---: | ---: |
| W90Cu10 | 90 ± 2 | 17.27 | 16.75–17.65 | 0.605–0.638 |
| W85Cu15 | 85 ± 2 | 16.42 | 15.95–16.75 | 0.576–0.605 |
| W80Cu20 | 80 ± 2 | 15.65 | 15.20–15.95 | 0.549–0.576 |
| **W75Cu25** | 75 ± 2 | 14.96 | 14.55–15.25 | 0.526–0.551 |
| **W70Cu30** | 70 ± 2 | 14.32 | 13.95–14.60 | 0.504–0.527 |
| W60Cu40 | 60 ± 2 | 13.19 | 12.85–13.40 | 0.464–0.484 |
| W50Cu50 | 50 ± 2 | 12.23 | 11.95–12.40 | 0.432–0.448 |

The bands are derived, not quoted from a mill sheet — which is why they are narrow and why they line up with the composite arithmetic. If a supplier's figure for W75Cu25 sits well outside 14.55–15.25 g/cm³, something other than normal tolerance is in play: a different composition than the label says, or porosity, or a density measured on a machined surface with a nominal dimension rather than on the actual part.

For pure tungsten the figure is 19.25 g/cm³ and for copper 8.96 g/cm³ — which is why a grade can be identified roughly from a single weighing, but not precisely. That limit matters, and it is the subject of the next section.

## Density alone cannot tell you composition

The instinct on receipt is to weigh the billet, compare against the table, and release or reject. Density does not support that on its own, because two different faults push it in the same direction.

A billet that reads 2% light can be a correctly-labelled W75Cu25 with incomplete infiltration, or a sound W73Cu27 with no porosity at all. The density is the same; the service behaviour is not. One erodes from the face inwards and overheats; the other conducts slightly better and wears slightly faster than the grade you designed around.

So density is only half a check. Pair it with electrical conductivity, which tracks the copper fraction and barely moves with porosity at these levels:

| Readings | Most likely cause | What to do |
| --- | --- | --- |
| Density in band, conductivity in band | Grade as labelled | Release |
| Density low, conductivity low | Porosity — incomplete infiltration | Reject the lot |
| Density high, conductivity low | Tungsten-rich, but inside the ±2% composition tolerance | Accept if the certificate states the W content; adjust the grade on the drawing |
| Density low, conductivity high | Copper-rich | Accept only if the drawing has room for the higher conductivity and lower wear resistance that come with it |

Two numbers, two minutes with a balance and a conductivity meter, and the ambiguity is gone. This is also why a certificate that lists density alone is weaker evidence than one that lists density, conductivity and hardness together.

## Worked check: weighing a billet against the table

A 200 × 200 × 40 mm W75Cu25 billet is 1,600 cm³. At the top of the band that is 24.4 kg; at the bottom, 23.3 kg. That kilogram of spread — about 4% — is explained by composition tolerance alone, so a shipment arriving at 23.9 kg is not evidence of a problem.

What would be evidence of a problem is 22.9 kg, or a conductivity reading of 30% IACS on a grade that should be at least 38%. Below the bottom of the band, the explanation is porosity rather than composition, and porosity is a defect rather than a variation. Weigh and measure, calculate the density, and read both numbers against the table before signing anything.

For parts already machined into complex shapes, water displacement gives the same figure: weigh the part dry, weigh it suspended in water, and divide the dry weight by the weight it appears to lose. Coat the surface first if the part is porous enough for water to enter, or the reading will come out deceptively high.

## Conductivity, hardness and thermal conductivity

These three do not follow from arithmetic, because they depend on the infiltration quality and on the connectivity of the copper phase as much as on the ratio. Published bands are the honest way to quote them:

| Grade | Conductivity<br>(% IACS) | Hardness<br>(HB) | Thermal<br>(W/m·K) |
| --- | ---: | ---: | ---: |
| W70Cu30 | ≥ 42 | ~175 | 230–250 |
| W75Cu25 | ≥ 38 | ~195 | 190–210 |
| W80Cu20 | 34–38 | 210–230 | 180–200 |
| W85Cu15 | 30–34 | 230–250 | 170–190 |
| W90Cu10 | 26–30 | 250–270 | 160–180 |

Grades below 70% W are omitted on purpose: conductivity there climbs past 50% IACS and hardness falls below 160 HB, but the spread between suppliers widens enough that a table would imply a precision the material does not have. If you need a grade in that range, ask for its certificate rather than a published band.

The trade is consistent across the whole series: every step toward tungsten buys wear resistance and expansion margin at the cost of heat path. Our [heat sink selection guide](/guides/tungsten-copper-heat-sink-selection/) works that trade for thermal parts and carries the CTE figures by grade, which need a stated temperature range to mean anything.

## Hardness and its temperature stability

Room-temperature hardness for the standard grades sits between roughly 175 HB for 70/30 and 270 HB for 90/10. Two things matter more than the number itself:

1. **Where it softens.** Wrought copper alloys rely on a heat treatment that anneals away in service — typically losing hardness well below 500 °C. Infiltrated CuW retains useful hardness to roughly 900 °C because the tungsten skeleton, not a heat treatment, carries the load.
2. **How it wears.** CuW faces do not mushroom; they dress slowly and evenly. Wear becomes a scheduled maintenance event instead of an unplanned one.

Neither of those is visible on a datasheet, and both are the reason the material is specified in the first place.

## Thermal expansion: roughly half of pure copper

Copper expands at about 17 ppm/K, tungsten at about 4.5, and the composites land between at roughly 5–9 ppm/K depending on grade — the [copper tungsten CTE guide](/guides/tungsten-copper-thermal-expansion/) has the numbers over a stated temperature range and the way to write them into a drawing. The quiet consequence is that a W/Cu part moves about half as much as the copper it replaced, which is what makes it usable against silicon and against steel tooling without the joint working itself loose.

## What to check on any CuW datasheet

1. **Composition tolerance** — reputable grades state the tungsten percentage with a tolerance (ours is ±2%); an unspecified composition is a red flag, because it makes every other number unverifiable.
2. **Manufacturing route** — "infiltrated" should be stated. Pressed-and-sintered-only material is typically porous and light, and will fail the density check above.
3. **Density, conductivity and hardness together** — one without the others cannot separate composition from porosity.
4. **Certificates** — typical values in a brochure are marketing; a material test report per batch, and stamped third-party reports to ASTM B702 when your quality system requires them, are the numbers you can qualify against.

## Common questions

**Why do different suppliers quote different densities for the same grade?** Composition tolerance plus infiltration quality. Within roughly ±0.5 g/cm³ is normal for a nominal grade; larger deviations mean ask for the W percentage and the batch test report.

**Does higher density always mean better material?** Higher density means more tungsten or less porosity — the first is a trade-off, not a virtue. Match the grade to the application instead.

**Is tungsten copper density affected by temperature?** Only marginally in the working range. Expanding at roughly 10 ppm/K, a part grows about half a percent between room temperature and 500 °C, which changes density by the same small fraction — not enough to matter against composition tolerance.

**Can I verify a shipment on receipt?** Yes — density by weight and dimensions takes minutes, and we supply batch traceability records and test reports on request with every order.

## Get a quote

If you are qualifying a CuW grade or comparing suppliers' datasheets, send us your specification — [request a quote](/contact/) and we will supply full typical and certified properties with pricing within 24 hours, valid 7 days.
