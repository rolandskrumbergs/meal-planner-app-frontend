import { AppInsightsContext, AppInsightsErrorBoundary } from "@microsoft/applicationinsights-react-js";
import { reactPlugin } from "./appInsights";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./layout/Layout";
import { Home } from "./features/home/Home";

const ErrorComponent = () => <h1>Something went wrong</h1>;

function App() {
    return (
        <AppInsightsErrorBoundary
      onError={ErrorComponent}
      appInsights={reactPlugin}
    >
      <AppInsightsContext.Provider value={reactPlugin}>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Layout>
          </BrowserRouter>
      </AppInsightsContext.Provider>
    </AppInsightsErrorBoundary>
    )
}

export default App;