module.exports = {
    params: {
        designator: 'push',
        from: undefined,
        to: undefined
    },
    body: p => `
    
    (module SW_PUSH_6mm_H4.3m-4055 (layer F.Cu) (tstamp 5BF2CC94)
    (attr through_hole)

        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

          (fp_line (start -0.25 1.5) (end -0.25 3) (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
          (fp_line (start 1 5.5) (end 5.5 5.5) (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
          (fp_line (start 5.5 -1) (end 1 -1) (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
          (fp_line (start 6.75 3) (end 6.75 1.5) (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
          (fp_line (start -0.25 1.5) (end -0.25 3) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
          (fp_line (start 1 5.5) (end 5.5 5.5) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
          (fp_line (start 5.5 -1) (end 1 -1) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
          (fp_line (start 6.75 3) (end 6.75 1.5) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
          (fp_line (start -1.5 -1.5) (end -1.25 -1.5) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
          (fp_line (start -1.5 -1.25) (end -1.5 -1.5) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
          (fp_line (start -1.5 5.75) (end -1.5 -1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
          (fp_line (start -1.5 5.75) (end -1.5 6) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
          (fp_line (start -1.5 6) (end -1.25 6) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
          (fp_line (start -1.25 -1.5) (end 7.75 -1.5) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
          (fp_line (start 7.75 -1.5) (end 8 -1.5) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
          (fp_line (start 7.75 6) (end -1.25 6) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
          (fp_line (start 7.75 6) (end 8 6) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
          (fp_line (start 8 -1.5) (end 8 -1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
          (fp_line (start 8 -1.25) (end 8 5.75) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
          (fp_line (start 8 6) (end 8 5.75) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
          (fp_line (start 0.25 -0.75) (end 3.25 -0.75) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
          (fp_line (start 0.25 5.25) (end 0.25 -0.75) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
          (fp_line (start 3.25 -0.75) (end 6.25 -0.75) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
          (fp_line (start 6.25 -0.75) (end 6.25 5.25) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
          (fp_line (start 6.25 5.25) (end 0.25 5.25) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
          (fp_circle (center 3.25 2.25) (end 1.25 2.5) (stroke (width 0.1) (type solid)) (fill none) (layer "F.Fab"))
          (pad "1" thru_hole circle (at 0 0 90) (size 2 2) (drill 1.1) (layers "*.Cu" "*.Mask") ${p.from.str})
          (pad "1" thru_hole circle (at 6.5 0 90) (size 2 2) (drill 1.1) (layers "*.Cu" "*.Mask") ${p.from.str})
          (pad "2" thru_hole circle (at 0 4.5 90) (size 2 2) (drill 1.1) (layers "*.Cu" "*.Mask") ${p.to.str})
          (pad "2" thru_hole circle (at 6.5 4.5 90) (size 2 2) (drill 1.1) (layers "*.Cu" "*.Mask") ${p.to.str})
      
    )
    
    `
}

