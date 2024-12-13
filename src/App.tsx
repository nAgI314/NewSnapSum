import React, { Suspense } from 'react';

const Home = React.lazy(() => import('./Home'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Home />
  </Suspense>
);


export default App
