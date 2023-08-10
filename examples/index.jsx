import React from 'react'
// import ReactDOM from 'react-dom'
// import { AppContainer } from 'react-hot-loader'
import App from './App'
//
// const render = Component => {
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     document.getElementById('app'),
//   )
// }
//
// render(App)
//
// // Webpack Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./App', () => { render(App) })
// }
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);