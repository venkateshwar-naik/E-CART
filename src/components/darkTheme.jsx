// import React, { useState } from "react";
// import "./App.css";

// const Apps = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <div className={`app ${isDarkMode ? "dark" : "light"}`}>
//       <header className="header">
//         <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
//         <button onClick={toggleTheme} className="toggle-button">
//           {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//         </button>
//       </header>
//       <main>
//         <p>
//           This is a {isDarkMode ? "dark" : "light"} themed application. Click
//           the button to toggle the theme.
//         </p>
//       </main>
//     </div>
//   );
// };

// export default Apps;


// // import React, { useState } from "react";
// // import { FaSun, FaMoon } from "react-icons/fa";
// // import "./App.css";

// // const App = () => {
// //   const [isDarkMode, setIsDarkMode] = useState(false);

// //   const toggleTheme = () => {
// //     setIsDarkMode((prevMode) => !prevMode);
// //   };

// //   return (
// //     <div className={`app ${isDarkMode ? "dark" : "light"}`}>
// //       <header className="header">
// //         <button onClick={toggleTheme} className="icon-button">
// //           {isDarkMode ? <FaSun size={30} /> : <FaMoon size={30} />}
// //         </button>
// //         <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
// //       </header>
// //       <main>
// //         <p>
// //           This is a {isDarkMode ? "dark" : "light"} themed application. Click
// //           the icon to toggle the theme.
// //         </p>
// //       </main>
// //     </div>
// //   );
// // };

// // export default App;

// // import React, { useState } from 'react'

// // const App = () => {
// //     const [isDark,SetIsDark]=useState(false)
// //   return (
// //     <div className={`app ${isDark ? "dark" : "light" }`}>


// //     </div>
// //   )
// // }

// // export default App





import React, { useState } from "react";

const DynamicArrayExample = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    setItems([...items, input]);
    setInput(""); // Clear input after adding
  };

  return (
    <div>
      <h3>Items:</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        // value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default DynamicArrayExample;

