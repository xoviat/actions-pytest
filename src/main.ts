import path from "path";

import * as core from "@actions/core";
import * as exec from "@actions/exec";
import * as io from "@actions/io";
import * as input from "./input";

export async function run(actionInput: input.Input): Promise<void> {
    const program = await io.which("pytest", true);
    let args: string[] = [];
    args = args.concat(actionInput.args);

    await exec.exec(program, args, {});
}

async function main(): Promise<void> {
    const matchersPath = path.join(__dirname, ".matchers");
    console.log(`::add-matcher::${path.join(matchersPath, "rust.json")}`);

    const actionInput = input.get();

    try {
        await run(actionInput);
    } catch (error) {
        core.setFailed((<Error>error).message);
    }
}

void main();
