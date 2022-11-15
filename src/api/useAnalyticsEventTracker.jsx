import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category,action,label) => {
  ReactGA.event({category, action, label});
}
export default useAnalyticsEventTracker;