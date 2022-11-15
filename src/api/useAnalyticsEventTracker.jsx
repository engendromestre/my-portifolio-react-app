import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category,_action) => {
  const eventTracker = (_action = "test action", _label = "test label") => {
    ReactGA.event({category, _action, _label});
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;