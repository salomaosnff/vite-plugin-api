
export function createWritter() {
    let result = '';
    let indentation = 0;

    return {
        toString() {
            return result;
        },
        write(data: string, indent = false) {
            if (indent) {
                result += ' '.repeat(indentation * 2);
            }
            result += data;
            return this
        },
        writeLine(data: string) {
            return this.write(data, true).write('\n');
        },
        writeLines(data: string[]) {
            data.forEach(line => this.writeLine(line));
            return this;
        },
        indent(callback: () => void) {
            indentation++;
            callback();
            indentation--;
            return this
        },
        break() {
            return this.write('\n');
        }
    }
}