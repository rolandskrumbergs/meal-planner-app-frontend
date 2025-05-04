import { AppInsightsContext, AppInsightsErrorBoundary } from "@microsoft/applicationinsights-react-js";
import { reactPlugin } from "./appInsights";
import { BrowserRouter, Routes } from 'react-router-dom';
import Layout from "./layout/Layout";

function App() {
    return (
        <AppInsightsErrorBoundary
      onError={() => <h1>Something went wrong</h1>}
      appInsights={reactPlugin}
    >
      <AppInsightsContext.Provider value={reactPlugin}>
          <BrowserRouter>
            <Layout>
              <Routes>

              </Routes>
            </Layout>
          </BrowserRouter>
      </AppInsightsContext.Provider>
    </AppInsightsErrorBoundary>
    )
}

export default App;