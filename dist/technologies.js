import colors from "picocolors";
export const TECHNOLOGIES = [
    {
        id: 1,
        name: "Vanilla JavaScript",
        color: colors.blue,
        command: "npm create vite@latest [NAMEOFAPP] --template vanilla",
    },
    {
        id: 2,
        name: "Vanilla TypeScript",
        color: colors.blue,
        command: "npm create vite@latest [NAMEOFAPP] --template vanilla-ts",
    },
    {
        id: 3,
        name: "React",
        color: colors.green,
        command: "npm create vite@latest [NAMEOFAPP] --template react",
    },
    {
        id: 4,
        name: "React with TypeScript",
        color: colors.green,
        command: "npm create vite@latest [NAMEOFAPP] --template react-ts",
    },
    {
        id: 5,
        name: "Next.js with TypeScript",
        color: colors.red,
        command: "npx create-next-app@latest [NAMEOFAPP]",
    },
    {
        id: 6,
        name: "Next.js with TypeScript (Experimental)",
        color: colors.red,
        command: "npx create-next-app@latest --experimental-app [NAMEOFAPP]",
    },
    {
        id: 7,
        name: "Qwik",
        color: colors.yellow,
        command: "npm create qwik@latest [NAMEOFAPP]",
    },
];
