import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category,action) => {
  ReactGA.event({category, action});
}
export default useAnalyticsEventTracker;