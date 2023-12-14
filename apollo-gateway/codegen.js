


const config = {
    overwrite: true,
    schema: "http://localhost:8082/graphql",
    generates: {
        "generated/graphql.ts": {
            plugins: ["typescript", "typescript-resolvers"]
        }
    }
};

module.exports = config;
