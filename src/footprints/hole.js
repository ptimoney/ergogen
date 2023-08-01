// SplitKB Tenting Puck

module.exports = {
  params: {
    designator: 'P',
  },
  body: p => {
    const standard = `
      (module MountingHole_2.2mm_M2_ISO7380 (layer F.Cu) (tedit 5B307E4C)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      (fp_text user "${p.ref}" (at 0 0) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))))
      (fp_circle (center 0 0) (end 1.75 0)(stroke (width 0.15) (type solid)) (fill none) (layer "Cmts.User"))
      (fp_circle (center 0 0) (end 2 0) (stroke (width 0.05) (type solid)) (fill none) (layer "F.CrtYd"))
      (pad "" np_thru_hole circle (at 0 0) (size 2.2 2.2) (drill 2.2) (layers "*.Cu" "*.Mask")))
    `
    return `
        ${standard}
        `
  }
}