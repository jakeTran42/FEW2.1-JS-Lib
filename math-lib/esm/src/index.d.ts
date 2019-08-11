export declare const GOLDENRATIO: number;
export declare function round(num: number): number;
export declare function floor(num: number): number;
export declare function ceil(num: number): number;
export declare function degToRad(num: number): number;
export declare function radToDeg(num: number): number;
export declare function toDollars(num: number): string;
export declare function tax(num: number, rate: number): number;
export declare function withTax(amount: number, rate: number): number;
export declare function interest(num: number, rate: number, years: number, decimalPlaces?: number): string;
export declare function mortage(num: number, interestRate: number, numberOfYears: number): number;
export declare function decimalToHex(num: number): string;
declare const _default: {
    round: typeof round;
    floor: typeof floor;
    ceil: typeof ceil;
    degToRad: typeof degToRad;
    radToDeg: typeof radToDeg;
    toDollars: typeof toDollars;
    tax: typeof tax;
    withTax: typeof withTax;
    interest: typeof interest;
    mortage: typeof mortage;
    decimalToHex: typeof decimalToHex;
};
export default _default;