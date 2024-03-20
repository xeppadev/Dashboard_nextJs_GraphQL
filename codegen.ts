import { CodegenConfig } from "@graphql-codegen/cli";

const uri =process.env.NEXT_PUBLIC_GRAPHQL_URL;

const config: CodegenConfig = {
  schema: "https://espejo.workflowdt.cloud/graphql",
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/generated/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations"],
     
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;