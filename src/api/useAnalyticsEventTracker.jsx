import ReactGA from "react-ga";

const useAnalyticsEventTracker = (_category,_action,_label) => {
  ReactGA.event({_category, _action, _label});
}
export default useAnalyticsEventTracker;