/**
 * Parse action input into a some proper thing.
 */

import { input } from "@actions-rs/core";

import stringArgv from "string-argv";

// Parsed action input
export interface Input {
    args: string[];
}

export function get(): Input {
    const args = stringArgv(input.getInput("args"));

    return { args: args };
}
