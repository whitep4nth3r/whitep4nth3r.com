const accessTokenFetchUrl = `https://id.twitch.tv/oauth2/token?client_id=${
  import.meta.env.TWITCH_CLIENT_ID
}&client_secret=${
  import.meta.env.TWITCH_CLIENT_SECRET
}&grant_type=client_credentials&scope=user_read`;
const twitchId = "469006291";

let tokenInMemory = null;

export const Twitch = {
  getAccessToken: async function () {
    try {
      const response = await fetch(accessTokenFetchUrl, {
        method: "POST",
        headers: { accept: "application/vnd.twitchtv.v5+json" },
      });
      const token = await response.json();
      tokenInMemory = token;

      return token;
    } catch (error) {
      console.log(error);
    }
  },
  getfetchOptions: function (tokenResponse) {
    return {
      headers: {
        "Client-Id": import.meta.env.TWITCH_CLIENT_ID,
        Authorization: `Bearer ${tokenResponse.access_token}`,
      },
    };
  },
  getSchedule: async function () {
    const tokenResponse =
      tokenInMemory !== null ? tokenInMemory : await Twitch.getAccessToken();

    if (tokenResponse.access_token) {
      const scheduleResponse = await fetch(
        `https://api.twitch.tv/helix/schedule?broadcaster_id=${twitchId}`,
        Twitch.getfetchOptions(tokenResponse),
      );

      if (scheduleResponse.status !== 200) {
        return null;
      }

      const schedule = await scheduleResponse.json();
      return schedule;
    }
  },
  getStreams: async function () {
    const tokenResponse =
      tokenInMemory !== null ? tokenInMemory : await Twitch.getAccessToken();
    if (tokenResponse.access_token) {
      const streamsResponse = await fetch(
        `https://api.twitch.tv/helix/streams?user_id=${twitchId}`,
        Twitch.getfetchOptions(tokenResponse),
      );

      if (streamsResponse.status !== 200) {
        return null;
      }

      const streams = await streamsResponse.json();
      return streams;
    }
  },
  getVods: async function () {
    const tokenResponse =
      tokenInMemory !== null ? tokenInMemory : await Twitch.getAccessToken();
    if (tokenResponse.access_token) {
      const vodsResponse = await fetch(
        `https://api.twitch.tv/helix/videos?user_id=${twitchId}&type=archive&first=1`,
        Twitch.getfetchOptions(tokenResponse),
      );

      if (vodsResponse.status !== 200) {
        return null;
      }

      const vods = await vodsResponse.json();
      return vods;
    }
  },
};
