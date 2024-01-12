export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  Dimension: { input: any; output: any };
  HexColor: { input: any; output: any };
  JSON: { input: any; output: any };
  Quality: { input: any; output: any };
  _Any: { input: any; output: any };
  _FieldSet: { input: any; output: any };
};

export type ActivityFeedItem = Entry & {
  __typename?: "ActivityFeedItem";
  contentfulMetadata: ContentfulMetadata;
  date?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Asset>;
  link?: Maybe<Scalars["String"]["output"]>;
  linkedFrom?: Maybe<ActivityFeedItemLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
  tweetEmbed?: Maybe<TweetEmbed>;
  type?: Maybe<Scalars["String"]["output"]>;
  videoEmbed?: Maybe<VideoEmbed>;
};

export type ActivityFeedItemDateArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type ActivityFeedItemDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type ActivityFeedItemImageArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ActivityFeedItemLinkArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type ActivityFeedItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ActivityFeedItemTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type ActivityFeedItemTweetEmbedArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<TweetEmbedFilter>;
};

export type ActivityFeedItemTypeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type ActivityFeedItemVideoEmbedArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<VideoEmbedFilter>;
};

export type ActivityFeedItemCollection = {
  __typename?: "ActivityFeedItemCollection";
  items: Array<Maybe<ActivityFeedItem>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type ActivityFeedItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<ActivityFeedItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ActivityFeedItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  date_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  date_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  image_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  link_contains?: InputMaybe<Scalars["String"]["input"]>;
  link_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  link_not?: InputMaybe<Scalars["String"]["input"]>;
  link_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tweetEmbed?: InputMaybe<CfTweetEmbedNestedFilter>;
  tweetEmbed_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  type_contains?: InputMaybe<Scalars["String"]["input"]>;
  type_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  type_not?: InputMaybe<Scalars["String"]["input"]>;
  type_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  videoEmbed?: InputMaybe<CfVideoEmbedNestedFilter>;
  videoEmbed_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ActivityFeedItemLinkingCollections = {
  __typename?: "ActivityFeedItemLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type ActivityFeedItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum ActivityFeedItemOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  LinkAsc = "link_ASC",
  LinkDesc = "link_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  TypeAsc = "type_ASC",
  TypeDesc = "type_DESC",
}

export type ArcadeEmbed = Entry & {
  __typename?: "ArcadeEmbed";
  contentfulMetadata: ContentfulMetadata;
  embedCode?: Maybe<Scalars["String"]["output"]>;
  linkedFrom?: Maybe<ArcadeEmbedLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ArcadeEmbedEmbedCodeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type ArcadeEmbedLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ArcadeEmbedTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type ArcadeEmbedCollection = {
  __typename?: "ArcadeEmbedCollection";
  items: Array<Maybe<ArcadeEmbed>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type ArcadeEmbedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ArcadeEmbedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ArcadeEmbedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  embedCode?: InputMaybe<Scalars["String"]["input"]>;
  embedCode_contains?: InputMaybe<Scalars["String"]["input"]>;
  embedCode_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  embedCode_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  embedCode_not?: InputMaybe<Scalars["String"]["input"]>;
  embedCode_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  embedCode_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ArcadeEmbedLinkingCollections = {
  __typename?: "ArcadeEmbedLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type ArcadeEmbedLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum ArcadeEmbedOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type Asset = {
  __typename?: "Asset";
  contentType?: Maybe<Scalars["String"]["output"]>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars["String"]["output"]>;
  fileName?: Maybe<Scalars["String"]["output"]>;
  height?: Maybe<Scalars["Int"]["output"]>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars["Int"]["output"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  width?: Maybe<Scalars["Int"]["output"]>;
};

export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  transform?: InputMaybe<ImageTransformOptions>;
};

export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type AssetCollection = {
  __typename?: "AssetCollection";
  items: Array<Maybe<Asset>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars["String"]["input"]>;
  contentType_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentType_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentType_not?: InputMaybe<Scalars["String"]["input"]>;
  contentType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentType_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  fileName_contains?: InputMaybe<Scalars["String"]["input"]>;
  fileName_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fileName_not?: InputMaybe<Scalars["String"]["input"]>;
  fileName_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  height_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  height_gt?: InputMaybe<Scalars["Int"]["input"]>;
  height_gte?: InputMaybe<Scalars["Int"]["input"]>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  height_lt?: InputMaybe<Scalars["Int"]["input"]>;
  height_lte?: InputMaybe<Scalars["Int"]["input"]>;
  height_not?: InputMaybe<Scalars["Int"]["input"]>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  size?: InputMaybe<Scalars["Int"]["input"]>;
  size_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  size_gt?: InputMaybe<Scalars["Int"]["input"]>;
  size_gte?: InputMaybe<Scalars["Int"]["input"]>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  size_lt?: InputMaybe<Scalars["Int"]["input"]>;
  size_lte?: InputMaybe<Scalars["Int"]["input"]>;
  size_not?: InputMaybe<Scalars["Int"]["input"]>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  url_contains?: InputMaybe<Scalars["String"]["input"]>;
  url_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url_not?: InputMaybe<Scalars["String"]["input"]>;
  url_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
  width_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  width_gt?: InputMaybe<Scalars["Int"]["input"]>;
  width_gte?: InputMaybe<Scalars["Int"]["input"]>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  width_lt?: InputMaybe<Scalars["Int"]["input"]>;
  width_lte?: InputMaybe<Scalars["Int"]["input"]>;
  width_not?: InputMaybe<Scalars["Int"]["input"]>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type AssetLinkingCollections = {
  __typename?: "AssetLinkingCollections";
  activityFeedItemCollection?: Maybe<ActivityFeedItemCollection>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  entryCollection?: Maybe<EntryCollection>;
  eventCollection?: Maybe<EventCollection>;
  personCollection?: Maybe<PersonCollection>;
  speakerDeckLinkCollection?: Maybe<SpeakerDeckLinkCollection>;
  talkCollection?: Maybe<TalkCollection>;
  testimonialCollection?: Maybe<TestimonialCollection>;
  thingIUseCollection?: Maybe<ThingIUseCollection>;
  topicCollection?: Maybe<TopicCollection>;
};

export type AssetLinkingCollectionsActivityFeedItemCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsEventCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsPersonCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsSpeakerDeckLinkCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsTalkCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsTestimonialCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsThingIUseCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsTopicCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum AssetOrder {
  ContentTypeAsc = "contentType_ASC",
  ContentTypeDesc = "contentType_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

export type BlogPost = Entry & {
  __typename?: "BlogPost";
  author?: Maybe<Person>;
  body?: Maybe<BlogPostBody>;
  contentfulMetadata: ContentfulMetadata;
  date?: Maybe<Scalars["DateTime"]["output"]>;
  excerpt?: Maybe<Scalars["String"]["output"]>;
  externalUrl?: Maybe<Scalars["String"]["output"]>;
  featuredImage?: Maybe<Asset>;
  hideOutOfDateWarning?: Maybe<Scalars["Boolean"]["output"]>;
  isSponsored?: Maybe<Scalars["Boolean"]["output"]>;
  linkedFrom?: Maybe<BlogPostLinkingCollections>;
  metaDescription?: Maybe<Scalars["String"]["output"]>;
  metaTitle?: Maybe<Scalars["String"]["output"]>;
  readingTime?: Maybe<Scalars["String"]["output"]>;
  relatedPostsCollection?: Maybe<BlogPostRelatedPostsCollection>;
  slug?: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
  topicsCollection?: Maybe<BlogPostTopicsCollection>;
  updatedDate?: Maybe<Scalars["DateTime"]["output"]>;
};

export type BlogPostAuthorArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<PersonFilter>;
};

export type BlogPostBodyArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogPostDateArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogPostExcerptArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogPostExternalUrlArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogPostFeaturedImageArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BlogPostHideOutOfDateWarningArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogPostIsSponsoredArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogPostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BlogPostMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogPostMetaTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogPostReadingTimeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogPostRelatedPostsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<BlogPostRelatedPostsCollectionOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<BlogPostFilter>;
};

export type BlogPostSlugArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogPostTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogPostTopicsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<BlogPostTopicsCollectionOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TopicFilter>;
};

export type BlogPostUpdatedDateArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogPostBody = {
  __typename?: "BlogPostBody";
  json: Scalars["JSON"]["output"];
  links: BlogPostBodyLinks;
};

export type BlogPostBodyAssets = {
  __typename?: "BlogPostBodyAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BlogPostBodyEntries = {
  __typename?: "BlogPostBodyEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BlogPostBodyLinks = {
  __typename?: "BlogPostBodyLinks";
  assets: BlogPostBodyAssets;
  entries: BlogPostBodyEntries;
  resources: BlogPostBodyResources;
};

export type BlogPostBodyResources = {
  __typename?: "BlogPostBodyResources";
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type BlogPostCollection = {
  __typename?: "BlogPostCollection";
  items: Array<Maybe<BlogPost>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type BlogPostFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  author?: InputMaybe<CfPersonNestedFilter>;
  author_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  body_contains?: InputMaybe<Scalars["String"]["input"]>;
  body_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  body_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  date_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  date_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  excerpt?: InputMaybe<Scalars["String"]["input"]>;
  excerpt_contains?: InputMaybe<Scalars["String"]["input"]>;
  excerpt_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  excerpt_not?: InputMaybe<Scalars["String"]["input"]>;
  excerpt_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  externalUrl?: InputMaybe<Scalars["String"]["input"]>;
  externalUrl_contains?: InputMaybe<Scalars["String"]["input"]>;
  externalUrl_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  externalUrl_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  externalUrl_not?: InputMaybe<Scalars["String"]["input"]>;
  externalUrl_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  externalUrl_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  featuredImage_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  hideOutOfDateWarning?: InputMaybe<Scalars["Boolean"]["input"]>;
  hideOutOfDateWarning_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  hideOutOfDateWarning_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSponsored?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSponsored_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSponsored_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  metaDescription?: InputMaybe<Scalars["String"]["input"]>;
  metaDescription_contains?: InputMaybe<Scalars["String"]["input"]>;
  metaDescription_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  metaDescription_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  metaDescription_not?: InputMaybe<Scalars["String"]["input"]>;
  metaDescription_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  metaDescription_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  metaTitle?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle_contains?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  metaTitle_not?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  readingTime?: InputMaybe<Scalars["String"]["input"]>;
  readingTime_contains?: InputMaybe<Scalars["String"]["input"]>;
  readingTime_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  readingTime_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  readingTime_not?: InputMaybe<Scalars["String"]["input"]>;
  readingTime_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  readingTime_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  relatedPosts?: InputMaybe<CfBlogPostNestedFilter>;
  relatedPostsCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  topics?: InputMaybe<CfTopicNestedFilter>;
  topicsCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedDate_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedDate_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedDate_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedDate_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  updatedDate_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedDate_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedDate_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedDate_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
};

export type BlogPostLinkingCollections = {
  __typename?: "BlogPostLinkingCollections";
  blogPostCollection?: Maybe<BlogPostCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type BlogPostLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<BlogPostLinkingCollectionsBlogPostCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type BlogPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum BlogPostLinkingCollectionsBlogPostCollectionOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  ExternalUrlAsc = "externalUrl_ASC",
  ExternalUrlDesc = "externalUrl_DESC",
  HideOutOfDateWarningAsc = "hideOutOfDateWarning_ASC",
  HideOutOfDateWarningDesc = "hideOutOfDateWarning_DESC",
  IsSponsoredAsc = "isSponsored_ASC",
  IsSponsoredDesc = "isSponsored_DESC",
  MetaTitleAsc = "metaTitle_ASC",
  MetaTitleDesc = "metaTitle_DESC",
  ReadingTimeAsc = "readingTime_ASC",
  ReadingTimeDesc = "readingTime_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedDateAsc = "updatedDate_ASC",
  UpdatedDateDesc = "updatedDate_DESC",
}

export enum BlogPostOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  ExternalUrlAsc = "externalUrl_ASC",
  ExternalUrlDesc = "externalUrl_DESC",
  HideOutOfDateWarningAsc = "hideOutOfDateWarning_ASC",
  HideOutOfDateWarningDesc = "hideOutOfDateWarning_DESC",
  IsSponsoredAsc = "isSponsored_ASC",
  IsSponsoredDesc = "isSponsored_DESC",
  MetaTitleAsc = "metaTitle_ASC",
  MetaTitleDesc = "metaTitle_DESC",
  ReadingTimeAsc = "readingTime_ASC",
  ReadingTimeDesc = "readingTime_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedDateAsc = "updatedDate_ASC",
  UpdatedDateDesc = "updatedDate_DESC",
}

export type BlogPostRelatedPostsCollection = {
  __typename?: "BlogPostRelatedPostsCollection";
  items: Array<Maybe<BlogPost>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export enum BlogPostRelatedPostsCollectionOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  ExternalUrlAsc = "externalUrl_ASC",
  ExternalUrlDesc = "externalUrl_DESC",
  HideOutOfDateWarningAsc = "hideOutOfDateWarning_ASC",
  HideOutOfDateWarningDesc = "hideOutOfDateWarning_DESC",
  IsSponsoredAsc = "isSponsored_ASC",
  IsSponsoredDesc = "isSponsored_DESC",
  MetaTitleAsc = "metaTitle_ASC",
  MetaTitleDesc = "metaTitle_DESC",
  ReadingTimeAsc = "readingTime_ASC",
  ReadingTimeDesc = "readingTime_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedDateAsc = "updatedDate_ASC",
  UpdatedDateDesc = "updatedDate_DESC",
}

export type BlogPostTopicsCollection = {
  __typename?: "BlogPostTopicsCollection";
  items: Array<Maybe<Topic>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export enum BlogPostTopicsCollectionOrder {
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type Callout = Entry & {
  __typename?: "Callout";
  content?: Maybe<Scalars["String"]["output"]>;
  contentfulMetadata: ContentfulMetadata;
  emoji?: Maybe<Scalars["String"]["output"]>;
  linkedFrom?: Maybe<CalloutLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type CalloutContentArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type CalloutEmojiArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type CalloutLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CalloutTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type CalloutCollection = {
  __typename?: "CalloutCollection";
  items: Array<Maybe<Callout>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type CalloutFilter = {
  AND?: InputMaybe<Array<InputMaybe<CalloutFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CalloutFilter>>>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  content_contains?: InputMaybe<Scalars["String"]["input"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  content_not?: InputMaybe<Scalars["String"]["input"]>;
  content_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  emoji?: InputMaybe<Scalars["String"]["input"]>;
  emoji_contains?: InputMaybe<Scalars["String"]["input"]>;
  emoji_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  emoji_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  emoji_not?: InputMaybe<Scalars["String"]["input"]>;
  emoji_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  emoji_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CalloutLinkingCollections = {
  __typename?: "CalloutLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type CalloutLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum CalloutOrder {
  EmojiAsc = "emoji_ASC",
  EmojiDesc = "emoji_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type CodeBlock = Entry & {
  __typename?: "CodeBlock";
  code?: Maybe<Scalars["String"]["output"]>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars["String"]["output"]>;
  isDiff?: Maybe<Scalars["Boolean"]["output"]>;
  language?: Maybe<Scalars["String"]["output"]>;
  linkedFrom?: Maybe<CodeBlockLinkingCollections>;
  sys: Sys;
};

export type CodeBlockCodeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type CodeBlockDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type CodeBlockIsDiffArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type CodeBlockLanguageArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type CodeBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CodeBlockCollection = {
  __typename?: "CodeBlockCollection";
  items: Array<Maybe<CodeBlock>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type CodeBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<CodeBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CodeBlockFilter>>>;
  code?: InputMaybe<Scalars["String"]["input"]>;
  code_contains?: InputMaybe<Scalars["String"]["input"]>;
  code_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  code_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  code_not?: InputMaybe<Scalars["String"]["input"]>;
  code_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  isDiff?: InputMaybe<Scalars["Boolean"]["input"]>;
  isDiff_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  isDiff_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  language?: InputMaybe<Scalars["String"]["input"]>;
  language_contains?: InputMaybe<Scalars["String"]["input"]>;
  language_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  language_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  language_not?: InputMaybe<Scalars["String"]["input"]>;
  language_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  language_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CodeBlockLinkingCollections = {
  __typename?: "CodeBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type CodeBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum CodeBlockOrder {
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  IsDiffAsc = "isDiff_ASC",
  IsDiffDesc = "isDiff_DESC",
  LanguageAsc = "language_ASC",
  LanguageDesc = "language_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type CodePenEmbed = Entry & {
  __typename?: "CodePenEmbed";
  contentfulMetadata: ContentfulMetadata;
  embedCode?: Maybe<Scalars["String"]["output"]>;
  linkedFrom?: Maybe<CodePenEmbedLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type CodePenEmbedEmbedCodeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type CodePenEmbedLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CodePenEmbedTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type CodePenEmbedCollection = {
  __typename?: "CodePenEmbedCollection";
  items: Array<Maybe<CodePenEmbed>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type CodePenEmbedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CodePenEmbedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CodePenEmbedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  embedCode?: InputMaybe<Scalars["String"]["input"]>;
  embedCode_contains?: InputMaybe<Scalars["String"]["input"]>;
  embedCode_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  embedCode_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  embedCode_not?: InputMaybe<Scalars["String"]["input"]>;
  embedCode_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  embedCode_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CodePenEmbedLinkingCollections = {
  __typename?: "CodePenEmbedLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type CodePenEmbedLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum CodePenEmbedOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type ContentfulMetadata = {
  __typename?: "ContentfulMetadata";
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ContentfulTag = {
  __typename?: "ContentfulTag";
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type DeployToNetlifyButton = Entry & {
  __typename?: "DeployToNetlifyButton";
  contentfulMetadata: ContentfulMetadata;
  deployUrl?: Maybe<Scalars["String"]["output"]>;
  linkedFrom?: Maybe<DeployToNetlifyButtonLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type DeployToNetlifyButtonDeployUrlArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type DeployToNetlifyButtonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type DeployToNetlifyButtonTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type DeployToNetlifyButtonCollection = {
  __typename?: "DeployToNetlifyButtonCollection";
  items: Array<Maybe<DeployToNetlifyButton>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type DeployToNetlifyButtonFilter = {
  AND?: InputMaybe<Array<InputMaybe<DeployToNetlifyButtonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DeployToNetlifyButtonFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  deployUrl?: InputMaybe<Scalars["String"]["input"]>;
  deployUrl_contains?: InputMaybe<Scalars["String"]["input"]>;
  deployUrl_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  deployUrl_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  deployUrl_not?: InputMaybe<Scalars["String"]["input"]>;
  deployUrl_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  deployUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type DeployToNetlifyButtonLinkingCollections = {
  __typename?: "DeployToNetlifyButtonLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type DeployToNetlifyButtonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum DeployToNetlifyButtonOrder {
  DeployUrlAsc = "deployUrl_ASC",
  DeployUrlDesc = "deployUrl_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: "EntryCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type Event = Entry & {
  __typename?: "Event";
  contentfulMetadata: ContentfulMetadata;
  date?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Asset>;
  link?: Maybe<Scalars["String"]["output"]>;
  linkedFrom?: Maybe<EventLinkingCollections>;
  name?: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
};

export type EventDateArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type EventDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type EventImageArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type EventLinkArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type EventLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type EventNameArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type EventCollection = {
  __typename?: "EventCollection";
  items: Array<Maybe<Event>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type EventFilter = {
  AND?: InputMaybe<Array<InputMaybe<EventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EventFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  date_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  date_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  image_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  link_contains?: InputMaybe<Scalars["String"]["input"]>;
  link_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  link_not?: InputMaybe<Scalars["String"]["input"]>;
  link_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
};

export type EventLinkingCollections = {
  __typename?: "EventLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type EventLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum EventOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  LinkAsc = "link_ASC",
  LinkDesc = "link_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export enum ImageFormat {
  Avif = "AVIF",
  Jpg = "JPG",
  JpgProgressive = "JPG_PROGRESSIVE",
  Png = "PNG",
  Png8 = "PNG8",
  Webp = "WEBP",
}

export enum ImageResizeFocus {
  Bottom = "BOTTOM",
  BottomLeft = "BOTTOM_LEFT",
  BottomRight = "BOTTOM_RIGHT",
  Center = "CENTER",
  Face = "FACE",
  Faces = "FACES",
  Left = "LEFT",
  Right = "RIGHT",
  Top = "TOP",
  TopLeft = "TOP_LEFT",
  TopRight = "TOP_RIGHT",
}

export enum ImageResizeStrategy {
  Crop = "CROP",
  Fill = "FILL",
  Fit = "FIT",
  Pad = "PAD",
  Scale = "SCALE",
  Thumb = "THUMB",
}

export type ImageTransformOptions = {
  backgroundColor?: InputMaybe<Scalars["HexColor"]["input"]>;
  cornerRadius?: InputMaybe<Scalars["Int"]["input"]>;
  format?: InputMaybe<ImageFormat>;
  height?: InputMaybe<Scalars["Dimension"]["input"]>;
  quality?: InputMaybe<Scalars["Quality"]["input"]>;
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  width?: InputMaybe<Scalars["Dimension"]["input"]>;
};

export type LighthouseComparison = Entry & {
  __typename?: "LighthouseComparison";
  afterScore?: Maybe<Scalars["Int"]["output"]>;
  beforeScore?: Maybe<Scalars["Int"]["output"]>;
  contentfulMetadata: ContentfulMetadata;
  device?: Maybe<Scalars["String"]["output"]>;
  linkedFrom?: Maybe<LighthouseComparisonLinkingCollections>;
  metric?: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
  titleInternal?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type LighthouseComparisonAfterScoreArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type LighthouseComparisonBeforeScoreArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type LighthouseComparisonDeviceArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type LighthouseComparisonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type LighthouseComparisonMetricArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type LighthouseComparisonTitleInternalArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type LighthouseComparisonUrlArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type LighthouseComparisonCollection = {
  __typename?: "LighthouseComparisonCollection";
  items: Array<Maybe<LighthouseComparison>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type LighthouseComparisonFilter = {
  AND?: InputMaybe<Array<InputMaybe<LighthouseComparisonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LighthouseComparisonFilter>>>;
  afterScore?: InputMaybe<Scalars["Int"]["input"]>;
  afterScore_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  afterScore_gt?: InputMaybe<Scalars["Int"]["input"]>;
  afterScore_gte?: InputMaybe<Scalars["Int"]["input"]>;
  afterScore_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  afterScore_lt?: InputMaybe<Scalars["Int"]["input"]>;
  afterScore_lte?: InputMaybe<Scalars["Int"]["input"]>;
  afterScore_not?: InputMaybe<Scalars["Int"]["input"]>;
  afterScore_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  beforeScore?: InputMaybe<Scalars["Int"]["input"]>;
  beforeScore_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  beforeScore_gt?: InputMaybe<Scalars["Int"]["input"]>;
  beforeScore_gte?: InputMaybe<Scalars["Int"]["input"]>;
  beforeScore_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  beforeScore_lt?: InputMaybe<Scalars["Int"]["input"]>;
  beforeScore_lte?: InputMaybe<Scalars["Int"]["input"]>;
  beforeScore_not?: InputMaybe<Scalars["Int"]["input"]>;
  beforeScore_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  device?: InputMaybe<Scalars["String"]["input"]>;
  device_contains?: InputMaybe<Scalars["String"]["input"]>;
  device_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  device_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  device_not?: InputMaybe<Scalars["String"]["input"]>;
  device_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  device_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  metric?: InputMaybe<Scalars["String"]["input"]>;
  metric_contains?: InputMaybe<Scalars["String"]["input"]>;
  metric_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  metric_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  metric_not?: InputMaybe<Scalars["String"]["input"]>;
  metric_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  metric_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  titleInternal?: InputMaybe<Scalars["String"]["input"]>;
  titleInternal_contains?: InputMaybe<Scalars["String"]["input"]>;
  titleInternal_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  titleInternal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  titleInternal_not?: InputMaybe<Scalars["String"]["input"]>;
  titleInternal_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  titleInternal_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  url?: InputMaybe<Scalars["String"]["input"]>;
  url_contains?: InputMaybe<Scalars["String"]["input"]>;
  url_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url_not?: InputMaybe<Scalars["String"]["input"]>;
  url_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type LighthouseComparisonLinkingCollections = {
  __typename?: "LighthouseComparisonLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type LighthouseComparisonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum LighthouseComparisonOrder {
  AfterScoreAsc = "afterScore_ASC",
  AfterScoreDesc = "afterScore_DESC",
  BeforeScoreAsc = "beforeScore_ASC",
  BeforeScoreDesc = "beforeScore_DESC",
  DeviceAsc = "device_ASC",
  DeviceDesc = "device_DESC",
  MetricAsc = "metric_ASC",
  MetricDesc = "metric_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleInternalAsc = "titleInternal_ASC",
  TitleInternalDesc = "titleInternal_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
}

export type Person = Entry & {
  __typename?: "Person";
  bioLong?: Maybe<PersonBioLong>;
  bioPost?: Maybe<Scalars["String"]["output"]>;
  bioShort?: Maybe<Scalars["String"]["output"]>;
  bioSpeaker?: Maybe<Scalars["String"]["output"]>;
  contentfulMetadata: ContentfulMetadata;
  imageBio?: Maybe<Asset>;
  linkedFrom?: Maybe<PersonLinkingCollections>;
  name?: Maybe<Scalars["String"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
};

export type PersonBioLongArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type PersonBioPostArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type PersonBioShortArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type PersonBioSpeakerArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type PersonImageBioArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PersonNameArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type PersonSlugArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type PersonBioLong = {
  __typename?: "PersonBioLong";
  json: Scalars["JSON"]["output"];
  links: PersonBioLongLinks;
};

export type PersonBioLongAssets = {
  __typename?: "PersonBioLongAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PersonBioLongEntries = {
  __typename?: "PersonBioLongEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PersonBioLongLinks = {
  __typename?: "PersonBioLongLinks";
  assets: PersonBioLongAssets;
  entries: PersonBioLongEntries;
  resources: PersonBioLongResources;
};

export type PersonBioLongResources = {
  __typename?: "PersonBioLongResources";
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type PersonCollection = {
  __typename?: "PersonCollection";
  items: Array<Maybe<Person>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type PersonFilter = {
  AND?: InputMaybe<Array<InputMaybe<PersonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PersonFilter>>>;
  bioLong_contains?: InputMaybe<Scalars["String"]["input"]>;
  bioLong_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  bioLong_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  bioPost?: InputMaybe<Scalars["String"]["input"]>;
  bioPost_contains?: InputMaybe<Scalars["String"]["input"]>;
  bioPost_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  bioPost_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  bioPost_not?: InputMaybe<Scalars["String"]["input"]>;
  bioPost_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  bioPost_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  bioShort?: InputMaybe<Scalars["String"]["input"]>;
  bioShort_contains?: InputMaybe<Scalars["String"]["input"]>;
  bioShort_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  bioShort_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  bioShort_not?: InputMaybe<Scalars["String"]["input"]>;
  bioShort_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  bioShort_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  bioSpeaker?: InputMaybe<Scalars["String"]["input"]>;
  bioSpeaker_contains?: InputMaybe<Scalars["String"]["input"]>;
  bioSpeaker_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  bioSpeaker_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  bioSpeaker_not?: InputMaybe<Scalars["String"]["input"]>;
  bioSpeaker_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  bioSpeaker_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageBio_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PersonLinkingCollections = {
  __typename?: "PersonLinkingCollections";
  blogPostCollection?: Maybe<BlogPostCollection>;
  entryCollection?: Maybe<EntryCollection>;
  talkCollection?: Maybe<TalkCollection>;
};

export type PersonLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<PersonLinkingCollectionsBlogPostCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PersonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PersonLinkingCollectionsTalkCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<PersonLinkingCollectionsTalkCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum PersonLinkingCollectionsBlogPostCollectionOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  ExternalUrlAsc = "externalUrl_ASC",
  ExternalUrlDesc = "externalUrl_DESC",
  HideOutOfDateWarningAsc = "hideOutOfDateWarning_ASC",
  HideOutOfDateWarningDesc = "hideOutOfDateWarning_DESC",
  IsSponsoredAsc = "isSponsored_ASC",
  IsSponsoredDesc = "isSponsored_DESC",
  MetaTitleAsc = "metaTitle_ASC",
  MetaTitleDesc = "metaTitle_DESC",
  ReadingTimeAsc = "readingTime_ASC",
  ReadingTimeDesc = "readingTime_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedDateAsc = "updatedDate_ASC",
  UpdatedDateDesc = "updatedDate_DESC",
}

export enum PersonLinkingCollectionsTalkCollectionOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  WatchTimeAsc = "watchTime_ASC",
  WatchTimeDesc = "watchTime_DESC",
}

export enum PersonOrder {
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type Query = {
  __typename?: "Query";
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  activityFeedItem?: Maybe<ActivityFeedItem>;
  activityFeedItemCollection?: Maybe<ActivityFeedItemCollection>;
  arcadeEmbed?: Maybe<ArcadeEmbed>;
  arcadeEmbedCollection?: Maybe<ArcadeEmbedCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  blogPost?: Maybe<BlogPost>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  callout?: Maybe<Callout>;
  calloutCollection?: Maybe<CalloutCollection>;
  codeBlock?: Maybe<CodeBlock>;
  codeBlockCollection?: Maybe<CodeBlockCollection>;
  codePenEmbed?: Maybe<CodePenEmbed>;
  codePenEmbedCollection?: Maybe<CodePenEmbedCollection>;
  deployToNetlifyButton?: Maybe<DeployToNetlifyButton>;
  deployToNetlifyButtonCollection?: Maybe<DeployToNetlifyButtonCollection>;
  entryCollection?: Maybe<EntryCollection>;
  event?: Maybe<Event>;
  eventCollection?: Maybe<EventCollection>;
  lighthouseComparison?: Maybe<LighthouseComparison>;
  lighthouseComparisonCollection?: Maybe<LighthouseComparisonCollection>;
  person?: Maybe<Person>;
  personCollection?: Maybe<PersonCollection>;
  speakerDeckLink?: Maybe<SpeakerDeckLink>;
  speakerDeckLinkCollection?: Maybe<SpeakerDeckLinkCollection>;
  sponsorshipPage?: Maybe<SponsorshipPage>;
  sponsorshipPageCollection?: Maybe<SponsorshipPageCollection>;
  streamPackage?: Maybe<StreamPackage>;
  streamPackageCollection?: Maybe<StreamPackageCollection>;
  talk?: Maybe<Talk>;
  talkCollection?: Maybe<TalkCollection>;
  testimonial?: Maybe<Testimonial>;
  testimonialCollection?: Maybe<TestimonialCollection>;
  thingIUse?: Maybe<ThingIUse>;
  thingIUseCollection?: Maybe<ThingIUseCollection>;
  topic?: Maybe<Topic>;
  topicCollection?: Maybe<TopicCollection>;
  tweetEmbed?: Maybe<TweetEmbed>;
  tweetEmbedCollection?: Maybe<TweetEmbedCollection>;
  videoEmbed?: Maybe<VideoEmbed>;
  videoEmbedCollection?: Maybe<VideoEmbedCollection>;
};

export type Query_EntitiesArgs = {
  representations: Array<Scalars["_Any"]["input"]>;
};

export type QueryActivityFeedItemArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryActivityFeedItemCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<ActivityFeedItemOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ActivityFeedItemFilter>;
};

export type QueryArcadeEmbedArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryArcadeEmbedCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<ArcadeEmbedOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ArcadeEmbedFilter>;
};

export type QueryAssetArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AssetFilter>;
};

export type QueryBlogPostArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<BlogPostOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<BlogPostFilter>;
};

export type QueryCalloutArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryCalloutCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<CalloutOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CalloutFilter>;
};

export type QueryCodeBlockArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryCodeBlockCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<CodeBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CodeBlockFilter>;
};

export type QueryCodePenEmbedArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryCodePenEmbedCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<CodePenEmbedOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CodePenEmbedFilter>;
};

export type QueryDeployToNetlifyButtonArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryDeployToNetlifyButtonCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<DeployToNetlifyButtonOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<DeployToNetlifyButtonFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EntryFilter>;
};

export type QueryEventArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryEventCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<EventOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EventFilter>;
};

export type QueryLighthouseComparisonArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryLighthouseComparisonCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<LighthouseComparisonOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LighthouseComparisonFilter>;
};

export type QueryPersonArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryPersonCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<PersonOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PersonFilter>;
};

export type QuerySpeakerDeckLinkArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QuerySpeakerDeckLinkCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<SpeakerDeckLinkOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<SpeakerDeckLinkFilter>;
};

export type QuerySponsorshipPageArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QuerySponsorshipPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<SponsorshipPageOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<SponsorshipPageFilter>;
};

export type QueryStreamPackageArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryStreamPackageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<StreamPackageOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<StreamPackageFilter>;
};

export type QueryTalkArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryTalkCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<TalkOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TalkFilter>;
};

export type QueryTestimonialArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryTestimonialCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<TestimonialOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TestimonialFilter>;
};

export type QueryThingIUseArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryThingIUseCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<ThingIUseOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ThingIUseFilter>;
};

export type QueryTopicArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryTopicCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<TopicOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TopicFilter>;
};

export type QueryTweetEmbedArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryTweetEmbedCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<TweetEmbedOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TweetEmbedFilter>;
};

export type QueryVideoEmbedArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryVideoEmbedCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<VideoEmbedOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<VideoEmbedFilter>;
};

export type ResourceLink = {
  __typename?: "ResourceLink";
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: "ResourceSys";
  linkType: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
  urn: Scalars["String"]["output"];
};

export type SpeakerDeckLink = Entry & {
  __typename?: "SpeakerDeckLink";
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  link?: Maybe<Scalars["String"]["output"]>;
  linkedFrom?: Maybe<SpeakerDeckLinkLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type SpeakerDeckLinkImageArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SpeakerDeckLinkLinkArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type SpeakerDeckLinkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type SpeakerDeckLinkTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type SpeakerDeckLinkCollection = {
  __typename?: "SpeakerDeckLinkCollection";
  items: Array<Maybe<SpeakerDeckLink>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type SpeakerDeckLinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<SpeakerDeckLinkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SpeakerDeckLinkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  link_contains?: InputMaybe<Scalars["String"]["input"]>;
  link_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  link_not?: InputMaybe<Scalars["String"]["input"]>;
  link_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type SpeakerDeckLinkLinkingCollections = {
  __typename?: "SpeakerDeckLinkLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  talkCollection?: Maybe<TalkCollection>;
};

export type SpeakerDeckLinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SpeakerDeckLinkLinkingCollectionsTalkCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<SpeakerDeckLinkLinkingCollectionsTalkCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum SpeakerDeckLinkLinkingCollectionsTalkCollectionOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  WatchTimeAsc = "watchTime_ASC",
  WatchTimeDesc = "watchTime_DESC",
}

export enum SpeakerDeckLinkOrder {
  LinkAsc = "link_ASC",
  LinkDesc = "link_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type SponsorshipPage = Entry & {
  __typename?: "SponsorshipPage";
  contentfulMetadata: ContentfulMetadata;
  demoAppsAndWebsites?: Maybe<Scalars["String"]["output"]>;
  intro?: Maybe<Scalars["String"]["output"]>;
  linkedFrom?: Maybe<SponsorshipPageLinkingCollections>;
  metaDescription?: Maybe<Scalars["String"]["output"]>;
  metaTitle?: Maybe<Scalars["String"]["output"]>;
  packagesIntro?: Maybe<Scalars["String"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  streamPackagesCollection?: Maybe<SponsorshipPageStreamPackagesCollection>;
  streamsIntro?: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
  technicalTutorials?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  videoContent?: Maybe<Scalars["String"]["output"]>;
};

export type SponsorshipPageDemoAppsAndWebsitesArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type SponsorshipPageIntroArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type SponsorshipPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type SponsorshipPageMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type SponsorshipPageMetaTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type SponsorshipPagePackagesIntroArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type SponsorshipPageSlugArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type SponsorshipPageStreamPackagesCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<SponsorshipPageStreamPackagesCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<StreamPackageFilter>;
};

export type SponsorshipPageStreamsIntroArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type SponsorshipPageTechnicalTutorialsArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type SponsorshipPageTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type SponsorshipPageVideoContentArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type SponsorshipPageCollection = {
  __typename?: "SponsorshipPageCollection";
  items: Array<Maybe<SponsorshipPage>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type SponsorshipPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<SponsorshipPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SponsorshipPageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  demoAppsAndWebsites?: InputMaybe<Scalars["String"]["input"]>;
  demoAppsAndWebsites_contains?: InputMaybe<Scalars["String"]["input"]>;
  demoAppsAndWebsites_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  demoAppsAndWebsites_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  demoAppsAndWebsites_not?: InputMaybe<Scalars["String"]["input"]>;
  demoAppsAndWebsites_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  demoAppsAndWebsites_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  intro?: InputMaybe<Scalars["String"]["input"]>;
  intro_contains?: InputMaybe<Scalars["String"]["input"]>;
  intro_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  intro_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  intro_not?: InputMaybe<Scalars["String"]["input"]>;
  intro_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  intro_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  metaDescription?: InputMaybe<Scalars["String"]["input"]>;
  metaDescription_contains?: InputMaybe<Scalars["String"]["input"]>;
  metaDescription_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  metaDescription_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  metaDescription_not?: InputMaybe<Scalars["String"]["input"]>;
  metaDescription_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  metaDescription_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  metaTitle?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle_contains?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  metaTitle_not?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  packagesIntro?: InputMaybe<Scalars["String"]["input"]>;
  packagesIntro_contains?: InputMaybe<Scalars["String"]["input"]>;
  packagesIntro_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  packagesIntro_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  packagesIntro_not?: InputMaybe<Scalars["String"]["input"]>;
  packagesIntro_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  packagesIntro_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  streamPackages?: InputMaybe<CfStreamPackageNestedFilter>;
  streamPackagesCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  streamsIntro?: InputMaybe<Scalars["String"]["input"]>;
  streamsIntro_contains?: InputMaybe<Scalars["String"]["input"]>;
  streamsIntro_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  streamsIntro_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  streamsIntro_not?: InputMaybe<Scalars["String"]["input"]>;
  streamsIntro_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  streamsIntro_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  sys?: InputMaybe<SysFilter>;
  technicalTutorials?: InputMaybe<Scalars["String"]["input"]>;
  technicalTutorials_contains?: InputMaybe<Scalars["String"]["input"]>;
  technicalTutorials_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  technicalTutorials_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  technicalTutorials_not?: InputMaybe<Scalars["String"]["input"]>;
  technicalTutorials_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  technicalTutorials_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  videoContent?: InputMaybe<Scalars["String"]["input"]>;
  videoContent_contains?: InputMaybe<Scalars["String"]["input"]>;
  videoContent_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  videoContent_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  videoContent_not?: InputMaybe<Scalars["String"]["input"]>;
  videoContent_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  videoContent_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
};

export type SponsorshipPageLinkingCollections = {
  __typename?: "SponsorshipPageLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type SponsorshipPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum SponsorshipPageOrder {
  MetaTitleAsc = "metaTitle_ASC",
  MetaTitleDesc = "metaTitle_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type SponsorshipPageStreamPackagesCollection = {
  __typename?: "SponsorshipPageStreamPackagesCollection";
  items: Array<Maybe<StreamPackage>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export enum SponsorshipPageStreamPackagesCollectionOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type StreamPackage = Entry & {
  __typename?: "StreamPackage";
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars["String"]["output"]>;
  linkedFrom?: Maybe<StreamPackageLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type StreamPackageDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type StreamPackageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type StreamPackageTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type StreamPackageCollection = {
  __typename?: "StreamPackageCollection";
  items: Array<Maybe<StreamPackage>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type StreamPackageFilter = {
  AND?: InputMaybe<Array<InputMaybe<StreamPackageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StreamPackageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type StreamPackageLinkingCollections = {
  __typename?: "StreamPackageLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  sponsorshipPageCollection?: Maybe<SponsorshipPageCollection>;
};

export type StreamPackageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StreamPackageLinkingCollectionsSponsorshipPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<
      InputMaybe<StreamPackageLinkingCollectionsSponsorshipPageCollectionOrder>
    >
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum StreamPackageLinkingCollectionsSponsorshipPageCollectionOrder {
  MetaTitleAsc = "metaTitle_ASC",
  MetaTitleDesc = "metaTitle_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum StreamPackageOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type Sys = {
  __typename?: "Sys";
  environmentId: Scalars["String"]["output"];
  firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["String"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  publishedVersion?: Maybe<Scalars["Int"]["output"]>;
  spaceId: Scalars["String"]["output"];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstPublishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  firstPublishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_not?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedVersion?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedVersion_gt?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_gte?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_in?: InputMaybe<
    Array<InputMaybe<Scalars["Float"]["input"]>>
  >;
  publishedVersion_lt?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_lte?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_not?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["Float"]["input"]>>
  >;
};

export type Talk = Entry & {
  __typename?: "Talk";
  abstract?: Maybe<TalkAbstract>;
  author?: Maybe<Person>;
  contentfulMetadata: ContentfulMetadata;
  date?: Maybe<Scalars["DateTime"]["output"]>;
  excerpt?: Maybe<Scalars["String"]["output"]>;
  linkedFrom?: Maybe<TalkLinkingCollections>;
  metaDescription?: Maybe<Scalars["String"]["output"]>;
  recording?: Maybe<VideoEmbed>;
  screenshot?: Maybe<Asset>;
  slug?: Maybe<Scalars["String"]["output"]>;
  speakerDeckLink?: Maybe<SpeakerDeckLink>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
  topicsCollection?: Maybe<TalkTopicsCollection>;
  transcript?: Maybe<TalkTranscript>;
  watchTime?: Maybe<Scalars["String"]["output"]>;
};

export type TalkAbstractArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type TalkAuthorArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<PersonFilter>;
};

export type TalkDateArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type TalkExcerptArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type TalkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type TalkMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type TalkRecordingArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<VideoEmbedFilter>;
};

export type TalkScreenshotArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TalkSlugArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type TalkSpeakerDeckLinkArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SpeakerDeckLinkFilter>;
};

export type TalkTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type TalkTopicsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<TalkTopicsCollectionOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TopicFilter>;
};

export type TalkTranscriptArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type TalkWatchTimeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type TalkAbstract = {
  __typename?: "TalkAbstract";
  json: Scalars["JSON"]["output"];
  links: TalkAbstractLinks;
};

export type TalkAbstractAssets = {
  __typename?: "TalkAbstractAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TalkAbstractEntries = {
  __typename?: "TalkAbstractEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TalkAbstractLinks = {
  __typename?: "TalkAbstractLinks";
  assets: TalkAbstractAssets;
  entries: TalkAbstractEntries;
  resources: TalkAbstractResources;
};

export type TalkAbstractResources = {
  __typename?: "TalkAbstractResources";
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type TalkCollection = {
  __typename?: "TalkCollection";
  items: Array<Maybe<Talk>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type TalkFilter = {
  AND?: InputMaybe<Array<InputMaybe<TalkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TalkFilter>>>;
  abstract_contains?: InputMaybe<Scalars["String"]["input"]>;
  abstract_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  abstract_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  author?: InputMaybe<CfPersonNestedFilter>;
  author_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  date_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  date_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  excerpt?: InputMaybe<Scalars["String"]["input"]>;
  excerpt_contains?: InputMaybe<Scalars["String"]["input"]>;
  excerpt_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  excerpt_not?: InputMaybe<Scalars["String"]["input"]>;
  excerpt_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  metaDescription?: InputMaybe<Scalars["String"]["input"]>;
  metaDescription_contains?: InputMaybe<Scalars["String"]["input"]>;
  metaDescription_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  metaDescription_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  metaDescription_not?: InputMaybe<Scalars["String"]["input"]>;
  metaDescription_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  metaDescription_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  recording?: InputMaybe<CfVideoEmbedNestedFilter>;
  recording_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  screenshot_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  speakerDeckLink?: InputMaybe<CfSpeakerDeckLinkNestedFilter>;
  speakerDeckLink_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  topics?: InputMaybe<CfTopicNestedFilter>;
  topicsCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  transcript_contains?: InputMaybe<Scalars["String"]["input"]>;
  transcript_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  transcript_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  watchTime?: InputMaybe<Scalars["String"]["input"]>;
  watchTime_contains?: InputMaybe<Scalars["String"]["input"]>;
  watchTime_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  watchTime_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  watchTime_not?: InputMaybe<Scalars["String"]["input"]>;
  watchTime_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  watchTime_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type TalkLinkingCollections = {
  __typename?: "TalkLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type TalkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum TalkOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  WatchTimeAsc = "watchTime_ASC",
  WatchTimeDesc = "watchTime_DESC",
}

export type TalkTopicsCollection = {
  __typename?: "TalkTopicsCollection";
  items: Array<Maybe<Topic>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export enum TalkTopicsCollectionOrder {
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type TalkTranscript = {
  __typename?: "TalkTranscript";
  json: Scalars["JSON"]["output"];
  links: TalkTranscriptLinks;
};

export type TalkTranscriptAssets = {
  __typename?: "TalkTranscriptAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TalkTranscriptEntries = {
  __typename?: "TalkTranscriptEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TalkTranscriptLinks = {
  __typename?: "TalkTranscriptLinks";
  assets: TalkTranscriptAssets;
  entries: TalkTranscriptEntries;
  resources: TalkTranscriptResources;
};

export type TalkTranscriptResources = {
  __typename?: "TalkTranscriptResources";
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type Testimonial = Entry & {
  __typename?: "Testimonial";
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  link?: Maybe<Scalars["String"]["output"]>;
  linkedFrom?: Maybe<TestimonialLinkingCollections>;
  name?: Maybe<Scalars["String"]["output"]>;
  org?: Maybe<Scalars["String"]["output"]>;
  quote?: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
};

export type TestimonialImageArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TestimonialLinkArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type TestimonialLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type TestimonialNameArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type TestimonialOrgArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type TestimonialQuoteArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type TestimonialCollection = {
  __typename?: "TestimonialCollection";
  items: Array<Maybe<Testimonial>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type TestimonialFilter = {
  AND?: InputMaybe<Array<InputMaybe<TestimonialFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TestimonialFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  link_contains?: InputMaybe<Scalars["String"]["input"]>;
  link_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  link_not?: InputMaybe<Scalars["String"]["input"]>;
  link_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  org?: InputMaybe<Scalars["String"]["input"]>;
  org_contains?: InputMaybe<Scalars["String"]["input"]>;
  org_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  org_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  org_not?: InputMaybe<Scalars["String"]["input"]>;
  org_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  org_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  quote?: InputMaybe<Scalars["String"]["input"]>;
  quote_contains?: InputMaybe<Scalars["String"]["input"]>;
  quote_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  quote_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  quote_not?: InputMaybe<Scalars["String"]["input"]>;
  quote_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  quote_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TestimonialLinkingCollections = {
  __typename?: "TestimonialLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type TestimonialLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum TestimonialOrder {
  LinkAsc = "link_ASC",
  LinkDesc = "link_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  OrgAsc = "org_ASC",
  OrgDesc = "org_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type ThingIUse = Entry & {
  __typename?: "ThingIUse";
  category?: Maybe<Scalars["String"]["output"]>;
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<ThingIUseLinkingCollections>;
  name?: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
};

export type ThingIUseCategoryArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type ThingIUseImageArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ThingIUseLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ThingIUseNameArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type ThingIUseCollection = {
  __typename?: "ThingIUseCollection";
  items: Array<Maybe<ThingIUse>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type ThingIUseFilter = {
  AND?: InputMaybe<Array<InputMaybe<ThingIUseFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ThingIUseFilter>>>;
  category?: InputMaybe<Scalars["String"]["input"]>;
  category_contains?: InputMaybe<Scalars["String"]["input"]>;
  category_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  category_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  category_not?: InputMaybe<Scalars["String"]["input"]>;
  category_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ThingIUseLinkingCollections = {
  __typename?: "ThingIUseLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type ThingIUseLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum ThingIUseOrder {
  CategoryAsc = "category_ASC",
  CategoryDesc = "category_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type Topic = Entry & {
  __typename?: "Topic";
  contentfulMetadata: ContentfulMetadata;
  icon?: Maybe<Asset>;
  linkedFrom?: Maybe<TopicLinkingCollections>;
  name?: Maybe<Scalars["String"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
};

export type TopicIconArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TopicLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type TopicNameArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type TopicSlugArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type TopicCollection = {
  __typename?: "TopicCollection";
  items: Array<Maybe<Topic>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type TopicFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  icon_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TopicLinkingCollections = {
  __typename?: "TopicLinkingCollections";
  blogPostCollection?: Maybe<BlogPostCollection>;
  entryCollection?: Maybe<EntryCollection>;
  talkCollection?: Maybe<TalkCollection>;
};

export type TopicLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<TopicLinkingCollectionsBlogPostCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TopicLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TopicLinkingCollectionsTalkCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<TopicLinkingCollectionsTalkCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum TopicLinkingCollectionsBlogPostCollectionOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  ExternalUrlAsc = "externalUrl_ASC",
  ExternalUrlDesc = "externalUrl_DESC",
  HideOutOfDateWarningAsc = "hideOutOfDateWarning_ASC",
  HideOutOfDateWarningDesc = "hideOutOfDateWarning_DESC",
  IsSponsoredAsc = "isSponsored_ASC",
  IsSponsoredDesc = "isSponsored_DESC",
  MetaTitleAsc = "metaTitle_ASC",
  MetaTitleDesc = "metaTitle_DESC",
  ReadingTimeAsc = "readingTime_ASC",
  ReadingTimeDesc = "readingTime_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedDateAsc = "updatedDate_ASC",
  UpdatedDateDesc = "updatedDate_DESC",
}

export enum TopicLinkingCollectionsTalkCollectionOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  WatchTimeAsc = "watchTime_ASC",
  WatchTimeDesc = "watchTime_DESC",
}

export enum TopicOrder {
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type TweetEmbed = Entry & {
  __typename?: "TweetEmbed";
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars["String"]["output"]>;
  linkedFrom?: Maybe<TweetEmbedLinkingCollections>;
  sys: Sys;
  tweetUrl?: Maybe<Scalars["String"]["output"]>;
};

export type TweetEmbedDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type TweetEmbedLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type TweetEmbedTweetUrlArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type TweetEmbedCollection = {
  __typename?: "TweetEmbedCollection";
  items: Array<Maybe<TweetEmbed>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type TweetEmbedFilter = {
  AND?: InputMaybe<Array<InputMaybe<TweetEmbedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TweetEmbedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  sys?: InputMaybe<SysFilter>;
  tweetUrl?: InputMaybe<Scalars["String"]["input"]>;
  tweetUrl_contains?: InputMaybe<Scalars["String"]["input"]>;
  tweetUrl_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  tweetUrl_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tweetUrl_not?: InputMaybe<Scalars["String"]["input"]>;
  tweetUrl_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tweetUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type TweetEmbedLinkingCollections = {
  __typename?: "TweetEmbedLinkingCollections";
  activityFeedItemCollection?: Maybe<ActivityFeedItemCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type TweetEmbedLinkingCollectionsActivityFeedItemCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<
      InputMaybe<TweetEmbedLinkingCollectionsActivityFeedItemCollectionOrder>
    >
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TweetEmbedLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum TweetEmbedLinkingCollectionsActivityFeedItemCollectionOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  LinkAsc = "link_ASC",
  LinkDesc = "link_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  TypeAsc = "type_ASC",
  TypeDesc = "type_DESC",
}

export enum TweetEmbedOrder {
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TweetUrlAsc = "tweetUrl_ASC",
  TweetUrlDesc = "tweetUrl_DESC",
}

export type VideoEmbed = Entry & {
  __typename?: "VideoEmbed";
  contentfulMetadata: ContentfulMetadata;
  embedUrl?: Maybe<Scalars["String"]["output"]>;
  linkedFrom?: Maybe<VideoEmbedLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type VideoEmbedEmbedUrlArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type VideoEmbedLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type VideoEmbedTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type VideoEmbedCollection = {
  __typename?: "VideoEmbedCollection";
  items: Array<Maybe<VideoEmbed>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type VideoEmbedFilter = {
  AND?: InputMaybe<Array<InputMaybe<VideoEmbedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VideoEmbedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  embedUrl?: InputMaybe<Scalars["String"]["input"]>;
  embedUrl_contains?: InputMaybe<Scalars["String"]["input"]>;
  embedUrl_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  embedUrl_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  embedUrl_not?: InputMaybe<Scalars["String"]["input"]>;
  embedUrl_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  embedUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type VideoEmbedLinkingCollections = {
  __typename?: "VideoEmbedLinkingCollections";
  activityFeedItemCollection?: Maybe<ActivityFeedItemCollection>;
  entryCollection?: Maybe<EntryCollection>;
  talkCollection?: Maybe<TalkCollection>;
};

export type VideoEmbedLinkingCollectionsActivityFeedItemCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<
      InputMaybe<VideoEmbedLinkingCollectionsActivityFeedItemCollectionOrder>
    >
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type VideoEmbedLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type VideoEmbedLinkingCollectionsTalkCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<VideoEmbedLinkingCollectionsTalkCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum VideoEmbedLinkingCollectionsActivityFeedItemCollectionOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  LinkAsc = "link_ASC",
  LinkDesc = "link_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  TypeAsc = "type_ASC",
  TypeDesc = "type_DESC",
}

export enum VideoEmbedLinkingCollectionsTalkCollectionOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  WatchTimeAsc = "watchTime_ASC",
  WatchTimeDesc = "watchTime_DESC",
}

export enum VideoEmbedOrder {
  EmbedUrlAsc = "embedUrl_ASC",
  EmbedUrlDesc = "embedUrl_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type _Entity =
  | ActivityFeedItem
  | ArcadeEmbed
  | BlogPost
  | Callout
  | CodeBlock
  | CodePenEmbed
  | DeployToNetlifyButton
  | Event
  | LighthouseComparison
  | Person
  | SpeakerDeckLink
  | SponsorshipPage
  | StreamPackage
  | Talk
  | Testimonial
  | ThingIUse
  | Topic
  | TweetEmbed
  | VideoEmbed;

export type _Service = {
  __typename?: "_Service";
  sdl?: Maybe<Scalars["String"]["output"]>;
};

export type CfBlogPostNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfBlogPostNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfBlogPostNestedFilter>>>;
  author_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  body_contains?: InputMaybe<Scalars["String"]["input"]>;
  body_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  body_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  date_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  date_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  excerpt?: InputMaybe<Scalars["String"]["input"]>;
  excerpt_contains?: InputMaybe<Scalars["String"]["input"]>;
  excerpt_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  excerpt_not?: InputMaybe<Scalars["String"]["input"]>;
  excerpt_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  externalUrl?: InputMaybe<Scalars["String"]["input"]>;
  externalUrl_contains?: InputMaybe<Scalars["String"]["input"]>;
  externalUrl_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  externalUrl_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  externalUrl_not?: InputMaybe<Scalars["String"]["input"]>;
  externalUrl_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  externalUrl_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  featuredImage_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  hideOutOfDateWarning?: InputMaybe<Scalars["Boolean"]["input"]>;
  hideOutOfDateWarning_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  hideOutOfDateWarning_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSponsored?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSponsored_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSponsored_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  metaDescription?: InputMaybe<Scalars["String"]["input"]>;
  metaDescription_contains?: InputMaybe<Scalars["String"]["input"]>;
  metaDescription_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  metaDescription_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  metaDescription_not?: InputMaybe<Scalars["String"]["input"]>;
  metaDescription_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  metaDescription_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  metaTitle?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle_contains?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  metaTitle_not?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  readingTime?: InputMaybe<Scalars["String"]["input"]>;
  readingTime_contains?: InputMaybe<Scalars["String"]["input"]>;
  readingTime_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  readingTime_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  readingTime_not?: InputMaybe<Scalars["String"]["input"]>;
  readingTime_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  readingTime_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  relatedPostsCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  topicsCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedDate_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedDate_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedDate_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedDate_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  updatedDate_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedDate_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedDate_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedDate_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
};

export type CfPersonNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPersonNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPersonNestedFilter>>>;
  bioLong_contains?: InputMaybe<Scalars["String"]["input"]>;
  bioLong_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  bioLong_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  bioPost?: InputMaybe<Scalars["String"]["input"]>;
  bioPost_contains?: InputMaybe<Scalars["String"]["input"]>;
  bioPost_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  bioPost_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  bioPost_not?: InputMaybe<Scalars["String"]["input"]>;
  bioPost_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  bioPost_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  bioShort?: InputMaybe<Scalars["String"]["input"]>;
  bioShort_contains?: InputMaybe<Scalars["String"]["input"]>;
  bioShort_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  bioShort_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  bioShort_not?: InputMaybe<Scalars["String"]["input"]>;
  bioShort_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  bioShort_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  bioSpeaker?: InputMaybe<Scalars["String"]["input"]>;
  bioSpeaker_contains?: InputMaybe<Scalars["String"]["input"]>;
  bioSpeaker_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  bioSpeaker_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  bioSpeaker_not?: InputMaybe<Scalars["String"]["input"]>;
  bioSpeaker_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  bioSpeaker_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageBio_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfSpeakerDeckLinkNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSpeakerDeckLinkNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSpeakerDeckLinkNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  link_contains?: InputMaybe<Scalars["String"]["input"]>;
  link_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  link_not?: InputMaybe<Scalars["String"]["input"]>;
  link_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CfStreamPackageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfStreamPackageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfStreamPackageNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CfTopicNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTopicNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTopicNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  icon_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfTweetEmbedNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTweetEmbedNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTweetEmbedNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  sys?: InputMaybe<SysFilter>;
  tweetUrl?: InputMaybe<Scalars["String"]["input"]>;
  tweetUrl_contains?: InputMaybe<Scalars["String"]["input"]>;
  tweetUrl_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  tweetUrl_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tweetUrl_not?: InputMaybe<Scalars["String"]["input"]>;
  tweetUrl_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tweetUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CfVideoEmbedNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfVideoEmbedNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfVideoEmbedNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  embedUrl?: InputMaybe<Scalars["String"]["input"]>;
  embedUrl_contains?: InputMaybe<Scalars["String"]["input"]>;
  embedUrl_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  embedUrl_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  embedUrl_not?: InputMaybe<Scalars["String"]["input"]>;
  embedUrl_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  embedUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};
