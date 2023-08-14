export declare function createWritter(): {
    toString(): string;
    write(data: string, indent?: boolean): any;
    writeLine(data: string): any;
    writeLines(data: string[]): any;
    indent(callback: () => void): any;
    break(): any;
};
