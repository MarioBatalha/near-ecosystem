export const GA_TRACKING_ID = ""; // took out tracking id

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window?.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window?.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
