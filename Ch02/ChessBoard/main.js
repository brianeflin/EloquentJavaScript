str = "";
size = 16;

for (row = 0; row < size; row++) {
    for (col = 0; col < size; col++) {
        if (row % 2 == 0) {
            if (col % 2 == 0) {
                str += "#";
            } else {
                str += " ";
            }
        } else {
            if (col % 2 == 0) {
                str += " ";
            } else {
                str += "#";
            }
        }
    }
    str += "\n";
}
console.log(str);