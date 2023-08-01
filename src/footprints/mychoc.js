// Kailh Choc PG1350
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
module.exports = {
  params: {
    designator: 'S',
    from: undefined,
    to: undefined
  },
  body: p => {
    const standard = `
      (module Kailh_socket_PG1350_reversible (layer F.Cu) (tedit 5DD510DD)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 4.445 -1.905) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      (fp_line (start -7 -6.88) (end -6 -6.88) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start -7 -5.88) (end -7 -6.88) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start -7 7.12) (end -7 6.12) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start -6 7.12) (end -7 7.12) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start -2 -7.58) (end -1.5 -8.08) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start -2 -4.08) (end -1.5 -3.58) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start -1.5 -8.08) (end 1.5 -8.08) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start -1.5 -3.58) (end 1 -3.58) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start 1.5 -8.08) (end 2 -7.58) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start 2 -6.58) (end 2 -7.58) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start 2.5 -2.08) (end 2.5 -1.38) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start 2.5 -1.38) (end 7 -1.38) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start 6 -6.88) (end 7 -6.88) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start 7 -6.88) (end 7 -5.88) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start 7 -6.08) (end 2.5 -6.08) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start 7 -5.48) (end 7 -6.08) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start 7 -1.38) (end 7 -1.88) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start 7 6.12) (end 7 7.12) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start 7 7.12) (end 6 7.12) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start -7 -6.88) (end -6 -6.88) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_line (start -7 -6.08) (end -2.5 -6.08) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_line (start -7 -5.88) (end -7 -6.88) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_line (start -7 -5.48) (end -7 -6.08) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_line (start -7 -1.38) (end -7 -1.88) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_line (start -7 7.12) (end -7 6.12) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_line (start -6 7.12) (end -7 7.12) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_line (start -2.5 -2.08) (end -2.5 -1.38) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_line (start -2.5 -1.38) (end -7 -1.38) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_line (start -2 -6.58) (end -2 -7.58) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_line (start -1.5 -8.08) (end -2 -7.58) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_line (start 1.5 -8.08) (end -1.5 -8.08) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_line (start 1.5 -3.58) (end -1 -3.58) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_line (start 2 -7.58) (end 1.5 -8.08) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_line (start 2 -4.08) (end 1.5 -3.58) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_line (start 6 -6.88) (end 7 -6.88) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_line (start 7 -6.88) (end 7 -5.88) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_line (start 7 6.12) (end 7 7.12) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_line (start 7 7.12) (end 6 7.12) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_line (start -6.9 7.02) (end -6.9 -6.78) (stroke (width 0.15) (type solid)) (layer "Eco2.User"))
      (fp_line (start -6.9 7.02) (end 6.9 7.02) (stroke (width 0.15) (type solid)) (layer "Eco2.User"))
      (fp_line (start -2.6 3.22) (end -2.6 6.42) (stroke (width 0.15) (type solid)) (layer "Eco2.User"))
      (fp_line (start -2.6 6.42) (end 2.6 6.42) (stroke (width 0.15) (type solid)) (layer "Eco2.User"))
      (fp_line (start 2.6 3.22) (end -2.6 3.22) (stroke (width 0.15) (type solid)) (layer "Eco2.User"))
      (fp_line (start 2.6 3.22) (end 2.6 6.42) (stroke (width 0.15) (type solid)) (layer "Eco2.User"))
      (fp_line (start 6.9 -6.78) (end -6.9 -6.78) (stroke (width 0.15) (type solid)) (layer "Eco2.User"))
      (fp_line (start 6.9 -6.78) (end 6.9 7.02) (stroke (width 0.15) (type solid)) (layer "Eco2.User"))
      (fp_line (start -7.5 -7.38) (end 7.5 -7.38) (stroke (width 0.15) (type solid)) (layer "B.Fab"))
      (fp_line (start -7.5 7.62) (end -7.5 -7.38) (stroke (width 0.15) (type solid)) (layer "B.Fab"))
      (fp_line (start -4.5 -7.13) (end -2 -7.13) (stroke (width 0.12) (type solid)) (layer "B.Fab"))
      (fp_line (start -4.5 -4.63) (end -4.5 -7.13) (stroke (width 0.12) (type solid)) (layer "B.Fab"))
      (fp_line (start -2 -7.58) (end -1.5 -8.08) (stroke (width 0.15) (type solid)) (layer "B.Fab"))
      (fp_line (start -2 -4.63) (end -4.5 -4.63) (stroke (width 0.12) (type solid)) (layer "B.Fab"))
      (fp_line (start -2 -4.13) (end -2 -7.58) (stroke (width 0.12) (type solid)) (layer "B.Fab"))
      (fp_line (start -2 -4.08) (end -1.5 -3.58) (stroke (width 0.15) (type solid)) (layer "B.Fab"))
      (fp_line (start -1.5 -8.08) (end 1.5 -8.08) (stroke (width 0.15) (type solid)) (layer "B.Fab"))
      (fp_line (start -1.5 -3.58) (end 1 -3.58) (stroke (width 0.15) (type solid)) (layer "B.Fab"))
      (fp_line (start 1.5 -8.08) (end 2 -7.58) (stroke (width 0.15) (type solid)) (layer "B.Fab"))
      (fp_line (start 2 -6.58) (end 2 -7.58) (stroke (width 0.15) (type solid)) (layer "B.Fab"))
      (fp_line (start 2.5 -2.08) (end 2.5 -1.38) (stroke (width 0.15) (type solid)) (layer "B.Fab"))
      (fp_line (start 2.5 -1.38) (end 7 -1.38) (stroke (width 0.15) (type solid)) (layer "B.Fab"))
      (fp_line (start 7 -6.08) (end 2.5 -6.08) (stroke (width 0.15) (type solid)) (layer "B.Fab"))
      (fp_line (start 7 -4.88) (end 9.5 -4.88) (stroke (width 0.12) (type solid)) (layer "B.Fab"))
      (fp_line (start 7 -1.38) (end 7 -6.08) (stroke (width 0.12) (type solid)) (layer "B.Fab"))
      (fp_line (start 7.5 -7.38) (end 7.5 7.62) (stroke (width 0.15) (type solid)) (layer "B.Fab"))
      (fp_line (start 7.5 7.62) (end -7.5 7.62) (stroke (width 0.15) (type solid)) (layer "B.Fab"))
      (fp_line (start 9.5 -4.88) (end 9.5 -2.38) (stroke (width 0.12) (type solid)) (layer "B.Fab"))
      (fp_line (start 9.5 -2.38) (end 7 -2.38) (stroke (width 0.12) (type solid)) (layer "B.Fab"))
      (fp_line (start -9.5 -4.88) (end -9.5 -2.38) (stroke (width 0.12) (type solid)) (layer "F.Fab"))
      (fp_line (start -9.5 -2.38) (end -7 -2.38) (stroke (width 0.12) (type solid)) (layer "F.Fab"))
      (fp_line (start -7.5 -7.38) (end 7.5 -7.38) (stroke (width 0.15) (type solid)) (layer "F.Fab"))
      (fp_line (start -7.5 7.62) (end -7.5 -7.38) (stroke (width 0.15) (type solid)) (layer "F.Fab"))
      (fp_line (start -7 -6.08) (end -2.5 -6.08) (stroke (width 0.15) (type solid)) (layer "F.Fab"))
      (fp_line (start -7 -4.88) (end -9.5 -4.88) (stroke (width 0.12) (type solid)) (layer "F.Fab"))
      (fp_line (start -7 -1.38) (end -7 -6.08) (stroke (width 0.12) (type solid)) (layer "F.Fab"))
      (fp_line (start -2.5 -2.08) (end -2.5 -1.38) (stroke (width 0.15) (type solid)) (layer "F.Fab"))
      (fp_line (start -2.5 -1.38) (end -7 -1.38) (stroke (width 0.15) (type solid)) (layer "F.Fab"))
      (fp_line (start -2 -6.58) (end -2 -7.58) (stroke (width 0.15) (type solid)) (layer "F.Fab"))
      (fp_line (start -1.5 -8.08) (end -2 -7.58) (stroke (width 0.15) (type solid)) (layer "F.Fab"))
      (fp_line (start 1.5 -8.08) (end -1.5 -8.08) (stroke (width 0.15) (type solid)) (layer "F.Fab"))
      (fp_line (start 1.5 -3.58) (end -1 -3.58) (stroke (width 0.15) (type solid)) (layer "F.Fab"))
      (fp_line (start 2 -7.58) (end 1.5 -8.08) (stroke (width 0.15) (type solid)) (layer "F.Fab"))
      (fp_line (start 2 -4.63) (end 4.5 -4.63) (stroke (width 0.12) (type solid)) (layer "F.Fab"))
      (fp_line (start 2 -4.13) (end 2 -7.58) (stroke (width 0.12) (type solid)) (layer "F.Fab"))
      (fp_line (start 2 -4.08) (end 1.5 -3.58) (stroke (width 0.15) (type solid)) (layer "F.Fab"))
      (fp_line (start 4.5 -7.13) (end 2 -7.13) (stroke (width 0.12) (type solid)) (layer "F.Fab"))
      (fp_line (start 4.5 -4.63) (end 4.5 -7.13) (stroke (width 0.12) (type solid)) (layer "F.Fab"))
      (fp_line (start 7.5 -7.38) (end 7.5 7.62) (stroke (width 0.15) (type solid)) (layer "F.Fab"))
      (fp_line (start 7.5 7.62) (end -7.5 7.62) (stroke (width 0.15) (type solid)) (layer "F.Fab"))
      (pad "" np_thru_hole circle (at -5.5 0.12 180) (size 1.7018 1.7018) (drill 1.7018) (layers "*.Cu" "*.Mask"))
      
      (pad "" np_thru_hole circle (at -5 -3.63 180) (size 3 3) (drill 3) (layers "*.Cu" "*.Mask"))
      (pad "" np_thru_hole circle (at 0 -5.83 180) (size 3 3) (drill 3) (layers "*.Cu" "*.Mask"))
      (pad "" np_thru_hole circle (at 0 0.12 180) (size 3.429 3.429) (drill 3.429) (layers "*.Cu" "*.Mask"))
      (pad "" np_thru_hole circle (at 5 -3.63 180) (size 3 3) (drill 3) (layers "*.Cu" "*.Mask"))
      
      (pad "" np_thru_hole circle (at 5.5 0.12 180) (size 1.7018 1.7018) (drill 1.7018) (layers "*.Cu" "*.Mask"))
      (pad "1" smd rect (at -3.275 -5.83 ${p.rot}) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask") ${p.from.str})
      (pad "1" smd rect (at 3.275 -5.83 ${p.rot}) (size 2.6 2.6) (layers "F.Cu" "F.Paste" "F.Mask") ${p.from.str})
      (pad "2" smd rect (at -8.275 -3.63 ${p.rot}) (size 2.6 2.6) (layers "F.Cu" "F.Paste" "F.Mask")${p.to.str})
      (pad "2" smd rect (at 8.275 -3.63 ${p.rot}) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask") ${p.to.str})

      (fp_arc (start 1 -2.08) (end 2.5 -2.08) (angle -90) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_arc (start 1 -2.08) (end 2.5 -2.08) (angle -90) (stroke (width 0.15) (type solid)) (layer "B.Fab"))

      (fp_arc (start 2.5 -6.58) (end 2 -6.58) (angle -90) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_arc (start 2.5 -6.58) (end 2 -6.58) (angle -90) (stroke (width 0.15) (type solid)) (layer "B.Fab"))

      (fp_arc (start -1 -2.08) (end -1 -3.58) (angle -90) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_arc (start -1 -2.08) (end -1 -3.58) (angle -90) (stroke (width 0.15) (type solid)) (layer "F.Fab"))

      (fp_arc (start -2.5 -6.58) (end -2.5 -6.08) (angle -90) (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
      (fp_arc (start -2.5 -6.58) (end -2.5 -6.08) (angle -90) (stroke (width 0.15) (type solid)) (layer "F.Fab"))

      (fp_rect (start -9 -8.5) (end 9 8.5) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") )

      )
    `

    return `
        ${standard}
        `
    
  }
}