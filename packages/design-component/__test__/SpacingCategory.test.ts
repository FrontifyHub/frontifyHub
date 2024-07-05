import { SpacingCategory } from "../src/baseStyleCategories/Spacing/SpacingCategory";
import { SLASH_HASH } from "../src/constant/slashHash";

describe('spacing categir', () => {
    let spacingCategoy = new SpacingCategory;

    test('padding', () => {
        let p = '10px'
        let pTB = '10px'
        let pLR = '20px'
        let pT = '15px'
        let pB = '20px'
        let pR = '25px'
        let pL = '30px'

        spacingCategoy.setPadding(p);
        expect(spacingCategoy.padding.toString()).toBe(`padding${SLASH_HASH}${p} ${p} ${p} ${p}`)

        spacingCategoy.setPadding(`${pTB} ${pLR}`);
        expect(spacingCategoy.padding.toString()).toBe(`padding${SLASH_HASH}${pTB} ${pLR} ${pTB} ${pLR}`)

        spacingCategoy.setPadding(`${pT} ${pLR} ${pB}`);
        expect(spacingCategoy.padding.toString()).toBe(`padding${SLASH_HASH}${pT} ${pLR} ${pB} ${pLR}`)

        spacingCategoy.setPadding(`${pT} ${pR} ${pB} ${pL}`);
        expect(spacingCategoy.padding.toString()).toBe(`padding${SLASH_HASH}${pT} ${pR} ${pB} ${pL}`)
    })

    test('margin', () => {
        let m = '10px'
        let mTB = '10px'
        let mLR = '20px'
        let mT = '15px'
        let mB = '20px'
        let mR = '25px'
        let mL = '30px'

        spacingCategoy.setMargin(m);
        expect(spacingCategoy.margin.toString()).toBe(`margin${SLASH_HASH}${m} ${m} ${m} ${m}`)

        spacingCategoy.setMargin(`${mTB} ${mLR}`);
        expect(spacingCategoy.margin.toString()).toBe(`margin${SLASH_HASH}${mTB} ${mLR} ${mTB} ${mLR}`)

        spacingCategoy.setMargin(`${mT} ${mLR} ${mB}`);
        expect(spacingCategoy.margin.toString()).toBe(`margin${SLASH_HASH}${mT} ${mLR} ${mB} ${mLR}`)

        spacingCategoy.setMargin(`${mT} ${mR} ${mB} ${mL}`);
        expect(spacingCategoy.margin.toString()).toBe(`margin${SLASH_HASH}${mT} ${mR} ${mB} ${mL}`)
    })
})