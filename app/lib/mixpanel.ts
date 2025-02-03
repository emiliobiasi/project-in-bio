import Mixpanel from "mixpanel";

const mixpanelEvent = Mixpanel.init("3c392e84b17d16f075d87836b6f026f5");

export function trackServerEvent(eventName: string, properties: any) {
  if (process.env.NODE_ENV === "development") return;
  mixpanelEvent.track(eventName, properties);
}
