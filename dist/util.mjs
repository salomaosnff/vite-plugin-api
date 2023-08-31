export function createWritter() {
  let result = "";
  let indentation = 0;
  return {
    toString() {
      return result;
    },
    write(data, indent = false) {
      if (indent) {
        result += " ".repeat(indentation * 2);
      }
      result += data;
      return this;
    },
    writeLine(data) {
      return this.write(data, true).write("\n");
    },
    writeLines(data) {
      data.forEach((line) => this.writeLine(line));
      return this;
    },
    indent(callback) {
      indentation++;
      callback();
      indentation--;
      return this;
    },
    break() {
      return this.write("\n");
    }
  };
}
