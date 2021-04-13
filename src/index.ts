import { CustomTagIncludeGithubMarkdownFile, CustomTagText, SmlPageBuilder } from "@gelight/sml-page-builder";
import * as path from "path";

const PATH = path.resolve(__dirname, "..", "src", "reliabletxt.com");
const OUTPUT_PATH = path.resolve(__dirname, "pages", "reliabletxt.com");

new SmlPageBuilder()
    .setChildrenElementName("Children")
    .setPagesPath(PATH)
    .setOutputPath(OUTPUT_PATH)
    .registerCustomTag("Text", CustomTagText)
    .registerCustomTag("Include", CustomTagIncludeGithubMarkdownFile)
    .build();
