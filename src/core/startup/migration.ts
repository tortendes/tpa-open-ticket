import {opendiscord, api, utilities} from "../../index"

export const migrations = [
    //MIGRATE TO v4.0.0
    new utilities.ODVersionMigration(api.ODVersion.fromString("opendiscord:version","v4.0.0"),async () => {
        //MIGRATE BEFORE STARTUP

        //nothing needs to be transferred :)
    },() => {
        //MIGRATE AFTER INITIAL STARTUP (plugins, flags, config, database, language, ... => loaded)

        //nothing needs to be transferred :)
    }),
    //MIGRATE TO v4.0.1 (nothing)
    new utilities.ODVersionMigration(api.ODVersion.fromString("opendiscord:version","v4.0.0"),async () => {},() => {})
]