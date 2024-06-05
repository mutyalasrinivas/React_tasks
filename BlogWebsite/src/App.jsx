import React from 'react';
import { BlogProvider } from './store/BlogContext';
import BlogList from './components/BlogList';
const App = () => {
  return (
    <BlogProvider>
      <BlogList />
    </BlogProvider>
  );
};

export default App;