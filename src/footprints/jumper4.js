module.exports = {
    params: {
        designator: 'J4',
        J1F: {type: 'net', value: 'J1F'},
        J2F: {type: 'net', value: 'J2F'},
        J3F: {type: 'net', value: 'J3F'},
        J4F: {type: 'net', value: 'J4F'},

        J1T: {type: 'net', value: 'J1T'},
        J2T: {type: 'net', value: 'J2T'},
        J3T: {type: 'net', value: 'J3T'},
        J4T: {type: 'net', value: 'J4T'},
        J5T: {type: 'net', value: 'J5T'},
        J6T: {type: 'net', value: 'J6T'},
        J7T: {type: 'net', value: 'J7T'},
        J8T: {type: 'net', value: 'J8T'}
    },
    body: p => `
        (module lib:Jumper (layer F.Cu) (tedit 5E1ADAC2)
        ${p.at /* parametric position */} 

        ${'' /* footprint reference */}        
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value Jumper (at 0 -7.3) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))

        ${'' /* pins */}
        (pad 1 smd rect (at -0.50038 -5.08 ${p.rot}) (size 0.635 1.143) (layers F.Cu F.Paste F.Mask)
        (clearance 0.1905) ${p.J1F.str})
        (pad 2 smd rect (at 0.50038 -5.08 ${p.rot}) (size 0.635 1.143) (layers F.Cu F.Paste F.Mask)
        (clearance 0.1905) ${p.J1T.str})
        (pad 3 smd rect (at -0.50038 -2.54 ${p.rot}) (size 0.635 1.143) (layers F.Cu F.Paste F.Mask)
        (clearance 0.1905) ${p.J2F.str})
        (pad 4 smd rect (at 0.50038 -2.54 ${p.rot}) (size 0.635 1.143) (layers F.Cu F.Paste F.Mask)
        (clearance 0.1905) ${p.J2T.str})
        (pad 5 smd rect (at -0.50038 2.54 ${p.rot}) (size 0.635 1.143) (layers F.Cu F.Paste F.Mask)
        (clearance 0.1905) ${p.J3F.str})
        (pad 6 smd rect (at 0.50038 2.54 ${p.rot}) (size 0.635 1.143) (layers F.Cu F.Paste F.Mask)
        (clearance 0.1905) ${p.J3T.str})
        (pad 7 smd rect (at -0.50038 5.08 ${p.rot}) (size 0.635 1.143) (layers F.Cu F.Paste F.Mask)
        (clearance 0.1905) ${p.J4F.str})
        (pad 8 smd rect (at 0.50038 5.08 ${p.rot}) (size 0.635 1.143) (layers F.Cu F.Paste F.Mask)
        (clearance 0.1905) ${p.J4T.str})

        ${'' /* pins */}
        (pad 9 smd rect (at -0.50038 -5.08 ${p.rot}) (size 0.635 1.143) (layers B.Cu B.Paste B.Mask)
        (clearance 0.1905) ${p.J1F.str})
        (pad 10 smd rect (at 0.50038 -5.08 ${p.rot}) (size 0.635 1.143) (layers B.Cu B.Paste B.Mask)
        (clearance 0.1905) ${p.J5T.str})
        (pad 11 smd rect (at -0.50038 -2.54 ${p.rot}) (size 0.635 1.143) (layers B.Cu B.Paste B.Mask)
        (clearance 0.1905) ${p.J2F.str})
        (pad 12 smd rect (at 0.50038 -2.54 ${p.rot}) (size 0.635 1.143) (layers B.Cu B.Paste B.Mask)
        (clearance 0.1905) ${p.J6T.str})
        (pad 13 smd rect (at -0.50038 2.54 ${p.rot}) (size 0.635 1.143) (layers B.Cu B.Paste B.Mask)
        (clearance 0.1905) ${p.J3F.str})
        (pad 14 smd rect (at 0.50038 2.54 ${p.rot}) (size 0.635 1.143) (layers B.Cu B.Paste B.Mask)
        (clearance 0.1905) ${p.J7T.str})
        (pad 15 smd rect (at -0.50038 5.08 ${p.rot}) (size 0.635 1.143) (layers B.Cu B.Paste B.Mask)
        (clearance 0.1905) ${p.J4F.str})
        (pad 16 smd rect (at 0.50038 5.08 ${p.rot}) (size 0.635 1.143) (layers B.Cu B.Paste B.Mask)
        (clearance 0.1905) ${p.J8T.str})
        )


    `
}