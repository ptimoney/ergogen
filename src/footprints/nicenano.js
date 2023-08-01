// Arduino ProMicro atmega32u4au
// Params
//  orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb

module.exports = {
  params: {
    designator: 'MCU',
    orientation: 'down',
    type: 'promicro', // must be promicro, nicenano, or elitec
    RAW: {type: 'net', value: 'RAW'},
    GND: {type: 'net', value: 'GND'},
    RST: {type: 'net', value: 'RST'},
    VCC: {type: 'net', value: 'VCC'},
    P031: {type: 'net', value: 'P031'},
    P029: {type: 'net', value: 'P029'},
    P002: {type: 'net', value: 'P002'},
    P115: {type: 'net', value: 'P115'},
    P113: {type: 'net', value: 'P113'},
    P111: {type: 'net', value: 'P111'},
    P010: {type: 'net', value: 'P010'},
    P009: {type: 'net', value: 'P009'},
    P006: {type: 'net', value: 'P006'},
    P008: {type: 'net', value: 'P008'},
    P017: {type: 'net', value: 'P017'},
    P020: {type: 'net', value: 'P020'},
    P022: {type: 'net', value: 'P022'},
    P024: {type: 'net', value: 'P024'},
    P100: {type: 'net', value: 'P100'},
    P011: {type: 'net', value: 'P011'},
    P104: {type: 'net', value: 'P104'},
    P106: {type: 'net', value: 'P106'},
    P101: {type: 'net', value: 'P101'},
    P102: {type: 'net', value: 'P102'},
    P107: {type: 'net', value: 'P107'}
  },
  body: p => {
    const standard = `
      (module ProMicro (layer F.Cu) (tedit 5B307E4C)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
    
      ${''/* illustration of the (possible) USB port overhang */}
      (fp_line (start -19.304 -3.81) (end -14.224 -3.81) (layer Dwgs.User) (width 0.15))
      (fp_line (start -19.304 3.81) (end -19.304 -3.81) (layer Dwgs.User) (width 0.15))
      (fp_line (start -14.224 3.81) (end -19.304 3.81) (layer Dwgs.User) (width 0.15))
      (fp_line (start -14.224 -3.81) (end -14.224 3.81) (layer Dwgs.User) (width 0.15))
    
      ${''/* component outline */}
      (fp_rect (start -17.78 -8.89) (end 15.24 8.89) (layer "B.SilkS") (width 0.15) (fill none))
      (fp_line (start -17.78 8.89) (end 15.24 8.89) (layer F.SilkS) (width 0.15))
      (fp_line (start 15.24 8.89) (end 15.24 -8.89) (layer F.SilkS) (width 0.15))
      (fp_line (start 15.24 -8.89) (end -17.78 -8.89) (layer F.SilkS) (width 0.15))
      (fp_line (start -17.78 -8.89) (end -17.78 8.89) (layer F.SilkS) (width 0.15))
      `
    function pins(def_neg, def_pos) {
      return `
        ${''/* extra border around "RAW", in case the rectangular shape is not distinctive enough */}
        (fp_line (start -15.24 ${def_pos}6.35) (end -12.7 ${def_pos}6.35) (layer F.SilkS) (width 0.15))
        (fp_line (start -15.24 ${def_pos}6.35) (end -15.24 ${def_pos}8.89) (layer F.SilkS) (width 0.15))
        (fp_line (start -12.7 ${def_pos}6.35) (end -12.7 ${def_pos}8.89) (layer F.SilkS) (width 0.15))
      
        ${''/* pin names */}
        (fp_text user RAW (at -13.97 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at -11.43 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user RST (at -8.89 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user VCC (at -6.35 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P031 (at -3.81 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P029 (at -1.27 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P002 (at 1.27 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P115 (at 3.81 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P113 (at 6.35 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        ${''/* (fp_text user P111 (at 8.89 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))*/}
        (fp_text user P010 (at 11.43 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P009 (at 13.97 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
      
        (fp_text user P006 (at -13.97 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P008 (at -11.43 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at -8.89 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at -6.35 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P017 (at -3.81 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P020 (at -1.27 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P022 (at 1.27 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P024 (at 3.81 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P100 (at 6.35 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        ${''/* (fp_text user P011 (at 8.89 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))*/}
        (fp_text user P104 (at 11.43 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P106 (at 13.97 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
      
        ${''/* Reverse pin names */}
        (fp_text user RAW (at -13.97 ${def_pos}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at -11.43 ${def_pos}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user RST (at -8.89 ${def_pos}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user VCC (at -6.35 ${def_pos}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P031 (at -3.81 ${def_pos}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P029 (at -1.27 ${def_pos}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P002 (at 1.27 ${def_pos}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P115 (at 3.81 ${def_pos}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P113 (at 6.35 ${def_pos}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
        ${''/* (fp_text user P111 (at 8.89 ${def_pos}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))*/}
        (fp_text user P010 (at 11.43 ${def_pos}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P009 (at 13.97 ${def_pos}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
      
        (fp_text user P006 (at -13.97 ${def_neg}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P008 (at -11.43 ${def_neg}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at -8.89 ${def_neg}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at -6.35 ${def_neg}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P017 (at -3.81 ${def_neg}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P020 (at -1.27 ${def_neg}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P022 (at 1.27 ${def_neg}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P024 (at 3.81 ${def_neg}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P100 (at 6.35 ${def_neg}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
        ${''/* (fp_text user P011 (at 8.89 ${def_neg}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))*/}
        (fp_text user P104 (at 11.43 ${def_neg}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P106 (at 13.97 ${def_neg}4.8 ${p.rot + 90}) (layer B.SilkS) (effects (justify mirror) (font (size 0.8 0.8) (thickness 0.15))))

        ${''/* and now the actual pins */}
        (pad 1 thru_hole rect (at -13.97 ${def_pos}7.62 ${p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.RAW.str})
        (pad 2 thru_hole circle (at -11.43 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad 3 thru_hole circle (at -8.89 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.RST.str})
        (pad 4 thru_hole circle (at -6.35 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.VCC.str})
        (pad 5 thru_hole circle (at -3.81 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P031.str})
        (pad 6 thru_hole circle (at -1.27 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P029.str})
        (pad 7 thru_hole circle (at 1.27 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P002.str})
        (pad 8 thru_hole circle (at 3.81 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P115.str})
        (pad 9 thru_hole circle (at 6.35 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P113.str})
        (pad 10 thru_hole circle (at 8.89 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P111.str})
        (pad 11 thru_hole circle (at 11.43 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P010.str})
        (pad 12 thru_hole circle (at 13.97 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P009.str})
        
        (pad 13 thru_hole circle (at -13.97 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P006.str})
        (pad 14 thru_hole circle (at -11.43 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P008.str})
        (pad 15 thru_hole circle (at -8.89 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad 16 thru_hole circle (at -6.35 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad 17 thru_hole circle (at -3.81 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P017.str})
        (pad 18 thru_hole circle (at -1.27 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P020.str})
        (pad 19 thru_hole circle (at 1.27 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P022.str})
        (pad 20 thru_hole circle (at 3.81 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P024.str})
        (pad 21 thru_hole circle (at 6.35 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P100.str})
        (pad 22 thru_hole circle (at 8.89 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P011.str})
        (pad 23 thru_hole circle (at 11.43 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P104.str})
        (pad 24 thru_hole circle (at 13.97 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P106.str})

        (pad 25 thru_hole circle (at 8.89 ${def_neg}5.08 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P101.str})
        (pad 26 thru_hole circle (at 8.89 ${def_neg}2.54 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P102.str})
        (pad 27 thru_hole circle (at 8.89 0 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P107.str})
      `
    }
    if(p.orientation == 'down') {
      return `
        ${standard}
        ${pins('-', '')})
        `
    } else {
      return `
        ${standard}
        ${pins('', '-')})
        `
    }
  }
}