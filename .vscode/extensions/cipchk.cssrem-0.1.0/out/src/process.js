"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CssRemProcess {
    constructor(cog) {
        this.cog = cog;
        this.rePx = /([-]?[\d.]+)p(x)?/;
        this.rePxAll = /([-]?[\d.]+)px/g;
    }
    /**
     * 换px转换成rem
     */
    pxToRem(pxStr) {
        const px = parseFloat(pxStr);
        let remValue = +(px / this.cog.rootFontSize).toFixed(this.cog.fixedDigits);
        if (this.cog.autoRemovePrefixZero) {
            if (remValue.toString().startsWith('0.')) {
                remValue = remValue.toString().substring(1);
            }
        }
        return { px: pxStr, pxValue: px, remValue, rem: remValue + 'rem' };
    }
    /**
     * px转rem
     *
     * @param {string} text 需要转换文本，例如：10px 12p
     */
    convert(text) {
        let match = text.match(this.rePx);
        if (!match)
            return null;
        return this.pxToRem(match[1]);
    }
    /** 批量转换 */
    convertAll(code, ingores) {
        if (!code)
            return code;
        return code.replace(this.rePxAll, (word) => {
            if (ingores.includes(word))
                return word;
            const res = this.pxToRem(word);
            if (res)
                return res.rem;
            return word;
        });
    }
}
exports.CssRemProcess = CssRemProcess;
//# sourceMappingURL=process.js.map