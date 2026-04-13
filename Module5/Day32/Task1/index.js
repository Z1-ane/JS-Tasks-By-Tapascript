// Create a small utility library (e.g., math functions like add, subtract, multiply, divide) in separate module files and import them into a main index.js file to perform operations.

import { add } from "./add.js";
import { subtract as minus } from "./subtract.js";
import { multiply } from "./multiply.js";
import { divide } from "./divide.js";

add(3, 4);
minus(8, 6);
multiply(7, 8);
divide(9, 3);
