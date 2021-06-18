import fs from "fs";
import path from "path";
import dotenv from "dotenv";

const __dirname = path.resolve();

/**
 * Initialize environment variables.
 */

if (fs.existsSync(__dirname + "/.env")) {
    dotenv.config();
} else {
    dotenv.config({ path: __dirname + "/../.env" });
}

export default dotenv;
