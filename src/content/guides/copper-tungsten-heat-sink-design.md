---
title: 'Copper Tungsten Heat Sink Design and RFQ Guide'
description: 'How to specify a copper tungsten heat spreader or baseplate: grade, heat path, CTE, interfaces, flatness, tolerances, test data, and RFQ inputs.'
pubDate: 2026-11-16
tag: 'Buying guide'
---

A copper tungsten heat sink is rarely selected because it has the highest thermal conductivity. Pure copper conducts heat better. W/Cu earns its place when a baseplate or heat spreader must move heat **and** limit expansion against a semiconductor, ceramic, or other low-CTE component.

That makes the purchasing specification a system-design problem. A useful RFQ must describe the heat source, joint stack, service temperature, geometry, and acceptance data—not only “tungsten copper plate.” This guide turns those inputs into a drawing and quotation package for a machined W/Cu thermal part.

For a composition-level comparison first, use the [copper tungsten thermal conductivity and heat-sink grade guide](/guides/tungsten-copper-heat-sink-selection/). ArcTung supplies sub-80% tungsten compositions; the [heat sinks and contacts application page](/applications/heat-sinks-contacts/) explains that supply boundary.

## 1. Define what the W/Cu part is doing

“Heat sink” can describe several different parts:

- a **heat spreader** that moves heat laterally away from a small die;
- a **baseplate** that carries heat through its thickness into a cooler;
- a **carrier** that supports a device or ceramic while controlling thermal expansion;
- a **mounting or contact component** where conductivity is useful but thermal matching is secondary.

State which function controls the design. A thin spreader under a concentrated source is governed by lateral spreading and interface quality. A broad baseplate may be governed more by flatness, joint stress, and contact with the cooler. The same alloy can behave well in one role and add unnecessary cost in another.

Include heat-source dimensions, estimated heat load, allowable temperature rise, cooling method, and the direction in which heat should leave the part. These inputs are more useful than asking for the “most conductive grade.”

## 2. Size the complete heat path, not the metal alone

For simple one-dimensional conduction, material resistance is proportional to thickness and inversely proportional to thermal conductivity and area:

> R = t / (kA)

This is a first-pass check, not a complete heat-sink model. Real assemblies also contain die attach, solder or braze, metallization, thermal-interface material, clamped contacts, and the cooler. A very conductive W/Cu plate cannot compensate for a small contact area, a voided joint, poor seating, or an interface layer that dominates the total resistance.

Lateral spreading needs separate attention. If the heat source is much smaller than the plate, temperature is not uniform through the footprint. Use thermal simulation or a validated analytical model to check source size, plate thickness, edge conditions, and cooler contact area. Do not increase thickness by habit: more section can improve spreading, but it also adds mass, cost, and through-thickness resistance.

## 3. Choose the grade from conductivity and expansion together

More copper generally raises thermal and electrical conductivity. More tungsten generally lowers thermal expansion and improves dimensional stability. Grade selection therefore begins with the limiting failure mode:

- Start toward **W/Cu 70/30** when heat transport is short of margin and the bonded area or CTE mismatch is manageable.
- Start toward **W/Cu 75/25** when expansion control, stiffness, or stability across a broad bonded face matters more than the conductivity gain from additional copper.

These are design directions, not universal rules. Published W/Cu values vary with composition tolerance, infiltration quality, temperature, and test method. Compare conductivity values at the same test temperature and CTE values over the same temperature interval. The [copper tungsten CTE guide](/guides/tungsten-copper-thermal-expansion/) explains why a CTE number without its temperature range is incomplete.

If the drawing has a numerical conductivity or CTE limit, specify the limit and test condition instead of assuming a grade name guarantees it.

## 4. Describe every interface in the stack

List the materials joined to both faces of the W/Cu part and identify the joining method: solder, braze, adhesive, diffusion bond, mechanical clamp, or thermal-interface material. Also state whether the joint is permanent or serviceable.

Thermal-expansion mismatch creates cyclic shear and bending as the assembly heats and cools. Because the W/Cu part, copper layer, ceramic, and joint material do not expand by the same amount, the transition must be treated as a thermo-mechanical design problem, not just a conductivity problem. A compliant joint, smaller bonded area, segmented attachment, or mechanically floating interface may reduce stress more effectively than changing the tungsten percentage alone.

Do not leave surface finish or coating as an implied supplier choice. If the joining process needs plating, metallization, controlled roughness, or a prepared braze surface, name the required system and the specification that governs it. Otherwise, request the W/Cu part in a clearly defined machined or ground condition and qualify the joining process separately.

## 5. Put flatness and thickness on the drawing

For thermal parts, flatness is functional. A plate can meet its alloy specification and still perform poorly if only part of its face contacts the cooler. Define:

- finished length, width, and thickness;
- flatness of each mating face;
- parallelism between faces where thickness uniformity matters;
- surface finish on bonded or clamped areas;
- hole, slot, and edge distances;
- datum structure and inspection temperature;
- any keep-out zone near the heat source or joint.

Avoid copying precision from another assembly without checking its value. Tighter flatness, parallelism, and finish requirements increase machining and inspection work. Apply them to the functional region, and state whether they are required free-state, clamped, or at an elevated service temperature.

For complex features, send a dimensioned drawing and a 3D model. The [custom W/Cu parts page](/products/custom-parts/) shows the appropriate route when the requirement is a finished component rather than raw stock.

## 6. Request test data that can support the design

Ask what is a typical catalogue value and what can be reported for the supplied batch. For a thermal design, the useful material records may include composition, density, thermal diffusivity or conductivity, and CTE where it is drawing-critical.

ASTM E1461 covers thermal diffusivity measurement by the flash method. Conductivity may then be derived using diffusivity, density, and specific heat, so the report should make clear whether conductivity was measured directly or calculated and at what temperature. ASTM E228 covers linear thermal expansion by push-rod dilatometry; a CTE result should identify the temperature interval.

Not every order needs every test. Use batch data when the property is an acceptance requirement, and use typical data only for preliminary sizing. The [tungsten copper properties guide](/guides/tungsten-copper-properties-and-density/) explains how density and conductivity together can reveal composition or infiltration problems.

## Copy-and-paste RFQ checklist

Send these items for a W/Cu heat spreader, carrier, or baseplate:

1. Part function and application
2. Heat-source size, location, and estimated load
3. Allowable temperature rise and service temperature range
4. Cooler type and contact area
5. Full material and joint stack on both faces
6. Preferred grade, or required conductivity and CTE targets
7. Drawing, revision, units, and 3D model where available
8. Thickness, flatness, parallelism, surface finish, and critical datums
9. Joining or clamping method and any specified surface preparation
10. Quantity, prototype requirement, and inspection plan
11. Required batch records and named test methods
12. Any thermal-cycle or assembly-level qualification performed by your team

A supplier can quote a plate from dimensions alone, but cannot validate the thermal stack without the stack inputs. Send the checklist and drawing through the [contact page](/contact/) so the grade, machinability, and sub-80% tungsten supply range can be reviewed before the part is released.
