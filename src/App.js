import React from 'react';
import './app.scss';
import PageTemplate from './components/PageTemplate/PageTemplate';
import FlashCards from './components/FlashCards/FlashCards';

function App() {
  return (
    <PageTemplate>
      {/* TODO: SELECT BY CATEGORY */}
      <FlashCards />
    </PageTemplate>
  );
}

export default App;
