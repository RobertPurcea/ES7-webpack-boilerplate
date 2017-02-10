// Import CSS
import "./index.css";
// IMPORTANT ==>> Without this conditional, hot reloading would not work. It allows HMR to activate
if (module.hot) module.hot.accept();
//	Clear the browser console after every JAVASCRIPT HMR update
console.clear();


console.log("JS test");