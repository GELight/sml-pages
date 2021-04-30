import {
    CustomTagIncludeGithubMarkdownFile,
    CustomTagSlot,
    CustomTagText,
    SmlPageBuilder
} from "@gelight/sml-page-builder";
import * as path from "path";

const PATH = path.resolve(__dirname, "..", "src", "reliabletxt.com");
const ASSETS_PATH = path.resolve(__dirname, "..", "src", "assets");
const OUTPUT_PATH = path.resolve(__dirname, "pages", "reliabletxt.com");

new SmlPageBuilder()
    .setAssetsPath(ASSETS_PATH)
    .setPagesPath(PATH)
    .setOutputPath(OUTPUT_PATH)
    .registerCustomTag("Text", CustomTagText)
    .registerCustomTag("Slot", CustomTagSlot)
    .registerCustomTag("IncludeGithubMarkdownFile", CustomTagIncludeGithubMarkdownFile)
    .build();
