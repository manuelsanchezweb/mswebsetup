import { isCancel, note, select } from "@clack/prompts";
import { TECHNOLOGIES } from "./technologies.js";
import { exitProgram } from "./utils.js";
const technologySelection = (await select({
    message: "Select the technology for your project:",
    options: TECHNOLOGIES.map((value) => ({
        value: value,
        label: `${value.color(value.name)}`,
    })),
}));
if (isCancel(technologySelection)) {
    exitProgram({ message: "No technology was chosen" });
}
note(`You chose ${technologySelection?.name}! Give us some seconds while we prepare everything...`);
