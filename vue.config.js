var path = require('path')
const webpack = require('webpack')

module.exports = {
    outputDir: path.resolve(__dirname, './Scripts/bundle/'),
    filenameHashing: false,
    configureWebpack: {
        plugins: [
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1
            })
        ],

        // Set JS file output
        output: {
            filename: "[name].js",
            chunkFilename: "[name].js"
        }
    },
    chainWebpack: config => {
        config.optimization.delete('splitChunks');

        // Set CSS file output
        if (config.plugins.has("extract-css")) {
            const extractCSSPlugin = config.plugin("extract-css");
            extractCSSPlugin &&
                extractCSSPlugin.tap(() => [
                    {
                        filename: "css/[name].css",
                        chunkFilename: "css/[name].css"
                    }
                ]);
        }

        // set initial entry (we dont import this file anywhere. it's a placeholder.)
        config.entry("app").clear().add("./src/app.ts");

        // keep adding new entries from here
        config.entry("ScreenImpactByActivity").add("./src/views/ScreenImpactByActivity/main.ts");
        config.entry("PolicyContact").add("./src/views/PolicyContact/main.ts");
        config.entry("DisabilityProductDetail").add("./src/views/DisabilityProductDetail/main.ts");
        config.entry("LifeProductDetail").add("./src/views/LifeProductDetail/main.ts");
        config.entry("Rates").add("./src/views/Rates/main.ts");
        config.entry("ImplementationRecord").add("./src/views/ImplementationRecord/main.ts");
        config.entry("SystemAdmin").add("./src/views/SystemAdmin/main.ts");
        config.entry("ShortTermDisabilityCoverage").add("./src/views/ShortTermDisabilityCoverage/main.ts");
        config.entry("LongTermDisabilityCoverage").add("./src/views/LongTermDisabilityCoverage/main.ts");
        config.entry("Dashboard").add("./src/views/Dashboard/main.ts");
        config.entry("Enrollments").add("./src/views/Enrollments/main.ts");
        config.entry("ClaimLossUnits").add("./src/views/ClaimLossUnits/main.ts");
        config.entry("LDIImport").add("./src/views/LDIImport/main.ts");
        config.entry("ValidateActivity").add("./src/views/ValidateActivity/main.ts");
        config.entry("InitiateActivity").add("./src/views/InitiateActivity/main.ts");
        config.entry("ParticipatingEntity").add("./src/views/ParticipatingEntity/main.ts");
    }
}