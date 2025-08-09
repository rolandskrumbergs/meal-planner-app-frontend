import {
  AppInsightsContext,
  AppInsightsErrorBoundary,
} from '@microsoft/applicationinsights-react-js';
import { reactPlugin } from './appInsights';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import { Home } from './features/home/Home';
import { MsalProvider } from '@azure/msal-react';
import { IPublicClientApplication } from '@azure/msal-browser';

const ErrorComponent = () => <h1>Something went wrong</h1>;

type AppProps = {
  pca: IPublicClientApplication;
};

function App({ pca }: Readonly<AppProps>) {
  return (
    <AppInsightsErrorBoundary onError={ErrorComponent} appInsights={reactPlugin}>
      <AppInsightsContext.Provider value={reactPlugin}>
        <MsalProvider instance={pca}>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </MsalProvider>
      </AppInsightsContext.Provider>
    </AppInsightsErrorBoundary>
  );
}

export default App;
