import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/lib/schema.graphql",
  generates: {
    "./src/lib/contentfulTypes.ts": {
      plugins: ["typescript"],
    },
  },
};

export default config;

/**
 * To update types when editing content models in Contentful
 * 1. Download schema as SDL from Contentful GraphQL playground
 * 2. Save in @lib directory
 * 3. Run npm run codegen
 * 4. Changes will reflect in @lib/contentfulTypes.ts
 * */
