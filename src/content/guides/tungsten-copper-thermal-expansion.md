---
title: 'Copper Tungsten CTE and Thermal Expansion Guide'
description: 'How tungsten copper CTE affects thermal cycling, electrode stability, joint matching, and the directional choice between W/Cu 75/25 and 70/30.'
pubDate: 2026-10-29
tag: 'Material selection'
---

Copper tungsten CTE matters wherever a part repeatedly heats, cools, and must return close to its original geometry. Pure copper moves heat well but expands relatively quickly; tungsten expands much less. Combining them produces a material with thermal expansion between the two, while retaining useful electrical and thermal conductivity through the copper phase.

This guide focuses on what that means in service: thermal-cycle stress at joints, dimensional drift in welding electrodes, matching to substrates and adjacent parts, and how to make a directional choice between **W/Cu 75/25** and **W/Cu 70/30**. For the broader property set, including density, hardness, and conductivity, see the [tungsten copper properties guide](/guides/tungsten-copper-properties-and-density/).

## What copper tungsten CTE tells you

The coefficient of thermal expansion, or CTE, describes how strongly a material changes size as temperature changes. For a fixed geometry, a larger temperature swing produces more movement; a longer part produces more total dimensional change. Problems begin when two joined materials want to move by different amounts but the joint prevents them from doing so freely.

Tungsten copper is an infiltrated composite rather than a solid-solution alloy. Its tungsten skeleton restrains the higher expansion of the copper phase. Common W/Cu compositions are therefore typically quoted between the expansion of pure tungsten and pure copper. Existing design guidance often places tungsten copper roughly in the **6–9 ppm/K** range depending on composition, compared with roughly **17 ppm/K** for copper and roughly **3 ppm/K** for silicon.

Those figures are useful for direction, not as a substitute for a batch value. Composition tolerance, infiltration quality, test method, and temperature range can all affect the number a supplier reports. When CTE is a drawing-controlled requirement, state the temperature range and ask for the relevant material data rather than qualifying a part from a generic web table.

## Why CTE mismatch becomes a thermal-cycle problem

A single heat-up may not reveal much. Repeated cycling is more demanding because every cycle loads and unloads the interface between materials. In a soldered, brazed, or bonded assembly, the joint absorbs part of the differential movement. If the base expands much faster than the substrate, the joint is repeatedly sheared; if the parts are stiff or the bonded area is large, that movement has fewer places to go.

This is why tungsten copper is considered for power-device bases, heat spreaders, and RF or microwave carriers. Its copper phase transports heat, while the tungsten skeleton pulls expansion down toward semiconductor and ceramic materials. The aim is not a perfect numerical match in every case. It is to reduce the mismatch enough that the joint, substrate, and attachment method can survive the intended cycling duty.

For thermal-management selection beyond CTE alone, including the conductivity trade-off and supply boundary, use the [tungsten copper heat-sink selection guide](/guides/tungsten-copper-heat-sink-selection/) and the [heat sinks and contacts application page](/applications/heat-sinks-contacts/).

## Joint and substrate matching: compare the whole stack

CTE should be checked across the assembly, not as an isolated material property. A practical review starts with four questions:

1. **What is joined to the W/Cu part?** Identify the die, ceramic, metal layer, solder, braze, or mechanical interface on each side.
2. **What temperature range does the assembly actually cycle through?** Use the service range for the application, not only room-temperature datasheet values.
3. **How large and stiff is the constrained area?** A broad bonded face generally gives differential movement less freedom than a small contact or a mechanically floating interface.
4. **Which failure mode controls the design?** Joint fatigue, substrate cracking, loss of flatness, and thermal resistance drift point to different corrective actions.

A lower-CTE base can reduce strain against a low-expansion substrate, but CTE is not the only selection variable. Moving toward more tungsten also moves away from copper's higher conductivity. The best grade is therefore the one that keeps both the joint and the heat path inside their design limits, not simply the grade with the lowest expansion.

## Why thermal expansion matters to welding electrodes

Resistance-welding electrodes and seam wheels see a different CTE problem. They are not primarily selected to match a semiconductor substrate; they are selected to hold dimensions and contact geometry while repeatedly carrying current, force, and heat.

When an electrode face or wheel rim heats unevenly, expansion can temporarily change its contact area, runout, or profile. Repeated heating and cooling can then amplify the effects of wear: seam width drifts, a face no longer seats consistently, or a wheel requires dressing sooner. Tungsten copper helps because its expansion is roughly half that of pure copper, while the tungsten skeleton also supports the working face against deformation.

CTE does not eliminate wear or correct poor alignment. If one flank wears while the other remains intact, first check hub fit, arm alignment, force, cooling, and dressing practice. But when the process is mechanically sound, lower thermal movement supports more repeatable geometry from cycle to cycle. That is the dimensional-stability reason tungsten copper appears in [seam-welding wheels](/applications/seam-welding-wheels/) and [resistance-welding electrodes](/applications/resistance-welding-electrodes/), alongside its hardness and conductivity.

## W/Cu 75/25 or 70/30: a directional CTE choice

ArcTung supplies two compositions: W/Cu 75/25 and W/Cu 70/30. The available product data establishes the main trade-off:

- **W/Cu 75/25** contains more tungsten. Directionally, choose it when lower expansion, higher hardness, and better resistance to face deformation matter more than maximum conductivity. It is the stronger starting point for geometry-sensitive seam wheels, parts under high electrode force, and assemblies where reducing movement toward a low-expansion neighbor is the priority.
- **W/Cu 70/30** contains more copper. Directionally, choose it when electrical and thermal conductivity are more limiting than the small CTE advantage of the higher-tungsten grade. It is the stronger starting point for heavy-current or heat-limited welding schedules and thermal parts where heat extraction has more margin pressure than expansion matching.

The difference between the grades should not be turned into a false precision claim. The repository product data gives typical density, hardness, and electrical conductivity values, but it does not publish a certified grade-specific CTE value. Treat 75/25 as the lower-expansion direction and 70/30 as the higher-conductivity direction; if the design has a numerical CTE limit, state the required temperature range and ask what supporting material data is available.

For the full welding trade-off, see [W75Cu25 vs W70Cu30](/guides/w75cu25-vs-w70cu30/). Product pages are available for [W/Cu 75/25 electrode wheels](/products/electrode-wheels-75-25/) and [W/Cu 70/30 electrode wheels](/products/electrode-wheels-70-30/).

## A specification checklist for CTE-sensitive parts

Include these items when requesting a tungsten copper part for a thermally cycled assembly:

- composition, or both the CTE direction and conductivity requirement if the grade is still open;
- mating materials and the joining method;
- service and assembly temperature ranges;
- critical dimensions, flatness, runout, and tolerances after machining;
- drawing features that are constrained during heating;
- quantity and whether a first article will be thermally cycled before production approval.

For welding electrodes, also include current schedule, electrode force, cooling arrangement, and the geometry that must remain stable. For baseplates or heat spreaders, include the substrate and joint stack rather than sending the metal drawing alone.

## Common questions

**Is tungsten copper a CTE match for silicon?** It is typically closer to silicon than pure copper is, but it is not identical. The full joint stack and temperature range still determine the stress.

**Does more tungsten always make the better thermal-cycle part?** No. More tungsten directionally lowers expansion and raises hardness, but more copper improves conductivity. A lower-CTE part that cannot remove enough heat is not a successful design.

**Can CTE be selected from composition alone?** Composition gives the direction of change. A numerical acceptance limit should be tied to the stated temperature range and verified with appropriate material data.

**Which grade should I start with for dimensional stability?** Start with W/Cu 75/25 when movement, face deformation, or profile retention is the controlling concern. Start with W/Cu 70/30 when current carrying or heat removal is already the limiting factor.

## Review your thermal stack or electrode drawing

Send the mating materials, temperature range, joining method, and drawing through the [contact page](/contact/). We can review whether W/Cu 75/25 or 70/30 is the more defensible direction, and identify when the design needs a numerical CTE requirement rather than a composition-only callout.
