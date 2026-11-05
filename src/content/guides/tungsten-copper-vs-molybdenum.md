---
title: 'Tungsten Copper vs Molybdenum EDM Electrodes: Choosing the Right Refractory'
description: 'Molybdenum survives extreme heat; tungsten copper holds detail, machines easily and burns with low wear. An EDM electrode selection guide for die shops.'
pubDate: 2026-10-17
tag: 'Material selection'
---

In EDM, both tungsten copper and molybdenum exist because ordinary copper and graphite give up too soon — on hard carbide work, in deep narrow cavities, on features too fine to survive a long burn. But the two refractory options solve different problems, and specifying the wrong one costs you either machine time or electrodes. This guide concentrates on the die-sinking and small-hole EDM context, where the choice matters most.

## The two materials

**Molybdenum** is a refractory metal in the same family as pure tungsten: extremely high melting point, good thermal conductivity, low thermal expansion, and — relevant to EDM — a very high vaporization temperature that lets it endure severe discharge conditions. Pure moly is also reasonably conductive for a refractory metal, typically quoted around the low-30s % IACS. Its weaknesses are brittleness at room temperature and poor conventional machinability: it is largely a grinding and wire-cutting job, and fine features are expensive to produce.

**Tungsten copper** is the composite our trade knows: a sintered tungsten skeleton infiltrated with copper, at 38–45% IACS depending on grade. The copper carries the discharge current and flushes heat; the tungsten holds the geometry. It machines like a hard bronze on conventional tooling — turning, milling, drilling, even threading — which is what makes complex electrode shapes economically possible.

| Property (typical) | Molybdenum | W/Cu 75/25 | W/Cu 70/30 |
| --- | --- | --- | --- |
| Melting/softening behaviour | Extreme refractory | Copper phase softens ~900 °C; skeleton stays rigid | Same |
| Conductivity | Roughly low-30s % IACS | ≥ 38% IACS | ≥ 42% IACS |
| Machinability | Grinding/wire EDM mostly | Conventional, hard-bronze behaviour | Conventional |
| Wear in die-sinking burns | Low, but rigid and brittle | Low, ductile enough for ribs | Low |
| Complex shapes | Costly | Routine to drawing | Routine |

## The numbers that matter

Qualitative tables hide the numbers that actually drive electrode selection. These are the values to put next to your burn schedule:

| Property (typical, room temperature) | Molybdenum | W/Cu 75/25 | W/Cu 70/30 |
| --- | --- | --- | --- |
| Density (g/cm³) | 10.28 | ~15.7 | ~14.7 |
| Melting point | 2623 °C | No melting in service; copper phase volatilises ~1080 °C, W skeleton stays rigid | Same |
| Thermal conductivity (W/m·K) | ~138 | 190–210 | 230–250 |
| Thermal expansion (10⁻⁶/K, 20–100 °C) | ~4.8 | ~7.0 | ~8.4 |
| Electrical conductivity (% IACS) | ~34 | ≥ 38 | ≥ 42 |
| Typical hardness | ~230–250 HV | 160–180 HB | 150–170 HB |

Three consequences come straight off this table:

1. **Weight.** A 75/25 electrode is roughly 50% heavier per cubic centimetre than the same moly section. On large flushing electrodes that reaches holder and clamp limits — run your section through the [electrode weight calculator](/tools/electrode-weight-calculator/) before ordering stock.
2. **Heat removal.** Both W/Cu grades move heat about 40–70% faster than moly. In a deep burn with restricted flushing, that conductivity is what lets you hold aggressive discharge energy without heat-softening the electrode nose.
3. **Dimensional stability.** Moly's lower expansion (~4.8 vs ~7–8.4) buys a little accuracy over very long unattended burns, but in practice the CTE gap is smaller than the geometric advantage of machining a more accurate electrode in W/Cu — you cannot machine in moly what you can machine in CuW.

The expansion figures above are room-temperature comparisons. If the electrode or the part it mounts to is CTE-sensitive, the [copper tungsten CTE guide](/guides/tungsten-copper-thermal-expansion/) covers how the number moves across the service range.


## Where molybdenum is the right answer

- **Small-hole EDM drilling.** Single-channel and multi-channel moly (and moly-alloy) tube electrodes, typically Ø 0.15–3.0 mm, are the industry standard for start holes and fast-hole drilling; their heat endurance and stiffness in tiny diameters are exactly what that process needs. W/Cu is not the material for this job — in thin tube walls the copper phase erodes first and the tube loses straightness.
- **Wire EDM** contexts, where moly wire serves in specific machine classes and wire types.
- **Extremely high-temperature duty** where there is no benefit from a copper phase at all.

ArcTung does not supply pure molybdenum — our line is tungsten copper — but honesty about the boundary is more useful than pretending one material does everything. If you are comparing the CuMo composite rather than pure moly, that is a different question again; see [copper molybdenum electrodes](/guides/copper-molybdenum-electrodes/).

## Where tungsten copper wins in die-sinking EDM

Die-sinking cost is mostly electrode cost, and electrode cost is mostly wear and re-machining. CuW wins on both counts in fine work:

- **Corner and rib retention.** The tungsten skeleton holds knife edges and thin ribs through finishing burns where pure copper would round over. Every micron the electrode keeps is contour accuracy you do not have to re-cut.
- **Machinability into complex shapes.** A profiled electrode with threads, water passages, or stepped sections is a lathe-and-mill job in CuW, and a specialist job in moly. See our [rods and blocks stock](/products/rods-blocks/).
- **No brittleness at the holder.** Moly sections are stiff but brittle; a knock in the fixture can crack what the burn never touched. CuW deforms instead of shattering.
- **Fewer electrode copies per cavity.** Low, even wear means fewer finishing electrodes per job — often the decisive number in the quote.

Standard die-shop practice reflects the split: graphite or copper for roughing, W/Cu for the finishing electrodes that set final contour and corner radii. The material logic is the same as in our [pure tungsten comparison](/guides/tungsten-copper-vs-pure-tungsten/): refractoriness where the arc runs, copper where the current and heat must move. For actually cutting the blanks once you have them, the [machining guidelines](/guides/tungsten-copper-machining-guidelines/) list starting speeds and feeds for turning, milling and drilling both grades.

## The decision rule

Ask what the electrode has to survive:

1. **Deep small holes, drilled fast** → molybdenum tube electrodes.
2. **Die-sinking finishing in hardened steel or carbide, sharp detail** → tungsten copper.
3. **Complex electrode geometry you must machine in-house** → tungsten copper, decisively.

If your finishing burns are burning through electrodes faster than your schedule can absorb, the material is the first thing to change — but check flush conditions before you blame the alloy.

## Common questions

**Which CuW grade for EDM?** Most EDM work runs 75/25 for maximum wear resistance; schedules constrained on heat can step to 70/30 for the higher conductivity. Both are in our [EDM electrode applications](/applications/edm-electrodes/) note.

**Molybdenum or tungsten copper for small start holes?** Molybdenum, without much contest — tube electrodes in the Ø 0.15–3.0 mm range need its stiffness and vaporization resistance, and W/Cu tubes erode unevenly at thin walls. We supply W/Cu for everything downstream of the start hole.

**What about the CuMo (copper molybdenum) composite?** CuMo is a third material — molybdenum skeleton infiltrated with copper — not a middle point between pure moly and W/Cu. It sits closer to W/Cu in machinability but with lower density and conductivity. We compare it in detail in [copper molybdenum electrodes](/guides/copper-molybdenum-electrodes/) and do not supply it.

**How much heavier is W/Cu than molybdenum?** About 43–53% per volume depending on grade (15.7 vs 10.28 g/cm³ for 75/25). For large electrodes, check total weight against your holder with the [weight calculator](/tools/electrode-weight-calculator/) before sizing the shank.

**Can you supply near-net blanks?** Yes — rods, blocks and near-net sections in both grades, rough-machined or ground, with custom electrode sections cut to drawing.

**What is the minimum order for a trial?** There is none for stock sizes; trials ship in the same 10–14 days as repeat orders.

## Get a quote

Send us the cavity drawing or a photo of the worn electrode — [request a quote](/contact/) and we will price rods, blanks or finished sections within 24 hours, firm for 7 days.
