//Nice View Nano


module.exports = {
  params: {
    designator: 'niceview',
    MOSIT: {type: 'net', value: 'MOSIT'},
    SCKT: {type: 'net', value: 'SCKT'},
    VCC: {type: 'net', value: 'VCC'},
    GNDT: {type: 'net', value: 'GNDT'},
    NVCST: {type: 'net', value: 'NVCST'}
  },
  body: p => {
    const standard = `
      (module niceview (layer F.Cu) (tedit 5B307E4C)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      (attr through_hole)
      (fp_text user "GND" (at 2.54 17.78 ${p.rot + 90} unlocked) (layer "Dwgs.User") (effects (font (size 1 1) (thickness 0.15)) (justify right)))
      (fp_text user "MOSI" (at -5.08 17.78 ${p.rot + 90} unlocked) (layer "Dwgs.User") (effects (font (size 1 1) (thickness 0.15)) (justify right)))
      (fp_text user "NVCS" (at 5.08 17.78 ${p.rot + 90} unlocked) (layer "Dwgs.User") (effects (font (size 1 1) (thickness 0.15)) (justify right)))
      (fp_text user "SCK" (at -2.54 17.78 ${p.rot + 90} unlocked) (layer "Dwgs.User") (effects (font (size 1 1) (thickness 0.15)) (justify right)))
      (fp_text user "VCC" (at 0 17.78 ${p.rot + 90} unlocked) (layer "Dwgs.User") (effects (font (size 1 1) (thickness 0.15)) (justify right)))
      (fp_rect (start -6.35 15.18) (end 6.35 17.78) (layer "F.SilkS") (width 0.12) (fill none))
      (fp_rect (start 7 17.78) (end -6.68 -18.22) (layer "Dwgs.User") (width 0.12) (fill none))
      (pad "1" thru_hole circle (at -5.08 16.48) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask *.SilkS) ${p.MOSIT.str})
      (pad "2" thru_hole circle (at -2.54 16.48) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask *.SilkS) ${p.SCKT.str})
      (pad "3" thru_hole circle (at 0 16.48) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask *.SilkS) ${p.VCC.str})
      (pad "4" thru_hole circle (at 2.54 16.48) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask *.SilkS) ${p.GNDT.str})
      (pad "5" thru_hole circle (at 5.08 16.48) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask *.SilkS) ${p.NVCST.str})
      
      
      (fp_rect (start -6.35 15.18) (end 6.35 17.78) (layer "B.SilkS") (width 0.12) (fill none))
      `
    return `
      ${standard})
    `
  }
}