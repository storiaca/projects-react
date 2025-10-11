import { useState } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </div>
  );
};

export default ThemeSwitcher;

// import React, { useState } from 'react';

// export const ThemeToggle: React.FC = () => {
//   const [theme, setTheme] = useState<'light' | 'dark'>('light');

//   const toggleTheme = () => {
//     setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
//       <button onClick={toggleTheme}>
//         Switch to {theme === 'light' ? 'Dark' : 'Light'}
//       </button>
//     </div>
//   );
// };
