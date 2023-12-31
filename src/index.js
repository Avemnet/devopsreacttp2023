import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import * as Sentry from "@sentry/react";
//import { Integrations } from "@sentry/tracing";



Sentry.init({
  dsn: "https://51a62841dbb152a1ede76c4f4c5b770c@o4506190738096128.ingest.sentry.io/4506233410748416",
  release: "devops-tp-frontend@2.0.12",
  dist: "52",
  enableAutoSessionTracking: true,
  // Sessions close after app is 10 seconds in the background.
  sessionTrackingIntervalMillis: 10000,
  
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
