"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sml_page_builder_1 = require("@gelight/sml-page-builder");
const path = __importStar(require("path"));
const PATH = path.resolve(__dirname, "..", "src", "reliabletxt.com");
const ASSETS_PATH = path.resolve(__dirname, "..", "src", "assets");
const OUTPUT_PATH = path.resolve(__dirname, "pages", "reliabletxt.com");
new sml_page_builder_1.SmlPageBuilder()
    .setAssetsPath(ASSETS_PATH)
    .setPagesPath(PATH)
    .setOutputPath(OUTPUT_PATH)
    .registerCustomTag("Text", sml_page_builder_1.CustomTagText)
    .registerCustomTag("Slot", sml_page_builder_1.CustomTagSlot)
    .registerCustomTag("IncludeGithubMarkdownFile", sml_page_builder_1.CustomTagIncludeGithubMarkdownFile)
    .build();
//# sourceMappingURL=index.js.map