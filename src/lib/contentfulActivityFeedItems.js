import { ContentfulApi } from "@lib/contentfulApi";
import { ContentfulEvents } from "@lib/contentfulEvents";
import { GraphQLStringBlocks } from "@lib/graphQLStringBlocks";
import { ContentfulBlogPosts } from "@lib/contentfulBlogPosts";
import { ContentfulTalks } from "@lib/contentfulTalks";
import { DateUtils } from "@utils/dateUtils";

export const ContentfulActivityFeedItems = {
  getAll: async function () {
    const query = `{
      activityFeedItemCollection {
        total
        items {
          title
          type
          date
          description
          link
          videoEmbed {
            title
            embedUrl
          }
          tweetEmbed {
            tweetUrl
          }
          image {
            ${GraphQLStringBlocks.imageAsset()}
          }
        }
      }
    }`;

    const response = await ContentfulApi.callContentful(query);

    const activityFeed = response.data.activityFeedItemCollection.items
      ? response.data.activityFeedItemCollection.items
      : [];

    return activityFeed;
  },
};

export const getActivityFeed = async (limit = undefined) => {
  const eventsData = await ContentfulEvents.getAll({ future: false });
  const pastEvents = eventsData.map((event) => ({ ...event, type: "event" }));

  const postData = await ContentfulBlogPosts.getAllSummaries();
  const postSummaries = postData.map((item) => ({ ...item, type: "post" }));

  const talkData = await ContentfulTalks.getAllSummaries();
  const talkSummaries = talkData.map((item) => ({ ...item, type: "talk" }));

  const feedItems = await ContentfulActivityFeedItems.getAll();

  const allItems = [
    ...pastEvents,
    ...feedItems,
    ...postSummaries,
    ...talkSummaries,
  ].sort(DateUtils.sortItemsByDateDesc);

  if (limit) {
    return allItems.slice(0, limit);
  } else {
    return allItems;
  }
};
