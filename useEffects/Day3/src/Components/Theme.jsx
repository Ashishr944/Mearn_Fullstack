import React, { useEffect, useState } from 'react'
// whrn you click on toggle theme button it will toggle the values light and dark
// after the value is toggled you have to save the value in local sorage
// when the theme is mounted on the screen you need to fetch the value from local storage
// and set it in theme state


const Theme = () => {
    const [ theme, setTheme] = useState('light');

    useEffect(() => {
        let themeFromLocalStorage = localStorage.getItem('theme');
        // if (themeFromLocalStorage){
        //     setTheme(themeFromLocalStorage)
        // }
        // else{
        //     setTheme('light')
        // }
    },[theme])
    const toggleTheme = () => {
        setTheme((prev) => (prev == 'light') ? 'dark' : 'light');
        localStorage.setItem('theme', theme);
    }

  return (
    <div>
        <h1>Theme : {theme}</h1>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  )
}

export default Theme
