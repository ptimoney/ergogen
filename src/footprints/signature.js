// website sig block

module.exports = {
  params: {
    designator: 'P',
  },
  body: p => {
    const standard = `
      (module "Signature" (layer F.Cu) (tedit 5F09F7E8)
      ${p.at /* parametric position */}

        (fp_text user "patrickt.co" (at 0 0 ${p.rot}) (layer "F.SilkS")
            (effects (font (size 1 1) (thickness 0.1)))
          
        )
        (fp_text user "patrickt.co" (at 0 0 ${p.rot}) (layer "B.SilkS")
            (effects (font (size 1 1) (thickness 0.1)) (justify mirror))
          
        )
      )
      `

    return `
        ${standard}
        `
  }
}