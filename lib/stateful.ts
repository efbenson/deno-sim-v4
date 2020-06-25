import * as log from "https://deno.land/std/log/mod.ts";

// custom configuration with 2 loggers (the default and `tasks` loggers)
await log.setup({
    handlers: {
        console: new log.handlers.ConsoleHandler("DEBUG"),

        file: new log.handlers.FileHandler("WARNING", {
            filename: "./log.txt",
            // you can change format of output message using any keys in `LogRecord`
            formatter: "{dateTime}: {levelName} >> {msg}",
        }),
    },

    loggers: {
        // configure default logger available via short-hand methods above
        default: {
            level: "DEBUG",
            handlers: ["console", "file"],
        },

        tasks: {
            level: "ERROR",
            handlers: ["console"],
        },
    },
});



// get default logger
const logger = log.getLogger();

export { logger };