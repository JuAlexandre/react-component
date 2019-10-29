import React from 'react';

import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Contact name="Anita Sutton" avatar="https://randomuser.me/api/portraits/women/30.jpg" online={true} />
      <Contact name="Jim George" avatar="https://randomuser.me/api/portraits/men/93.jpg" online={false} />
      <Contact name="Charlotte Ryan" avatar="https://randomuser.me/api/portraits/women/50.jpg" online={true} />
    </div>
  );
}

export default App;
