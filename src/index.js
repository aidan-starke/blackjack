import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css'
import { ThemeSwitcherProvider } from 'react-css-theme-switcher'
import { Provider } from 'react-redux'
import store from './store'

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
}

const prevTheme = window.localStorage.getItem('theme')

ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcherProvider themeMap={themes} defaultTheme={prevTheme ? prevTheme : 'light'}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeSwitcherProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
