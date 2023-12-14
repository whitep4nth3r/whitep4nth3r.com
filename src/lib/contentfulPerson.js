import { ContentfulApi } from "@lib/contentfulApi";
import { GraphQLStringBlocks } from "@lib/graphQLStringBlocks.js";

export const ContentfulPerson = {
  get: async function () {
    const variables = { slug: "whitep4nth3r" };

    const query = `query GetPerson($slug: String!) {
      personCollection(where: { slug: $slug }) {
          items {
            imageBio {
              ${GraphQLStringBlocks.imageAsset()}
            }
            bioShort
            bioSpeaker
            bioPost
            bioLong {
              json
            }
          }
        }
    }`;

    const response = await ContentfulApi.callContentful(query, variables);

    const personCollection = response.data.personCollection.items
      ? response.data.personCollection.items
      : [];

    return personCollection[0];
  },
};
