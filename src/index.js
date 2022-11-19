import ReactDOM from "react-dom/client"
import TagManager from "react-gtm-module";
import App from "./App"
import "./index.css"

const tagManagerArgs = {
    gtmId: 'GTM-KK464QL'
  }
  TagManager.initialize(tagManagerArgs)

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App />)