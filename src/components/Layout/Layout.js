// src/components/Layout/Layout.jsx
import React from 'react';

export default ({ children, title }) => (
  <div>
    <main role="main">
      {children}
    </main>
  </div>
);
