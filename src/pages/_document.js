import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet" />
        </Head>
      <body>
        <Script id='theme-changer' strategy='beforeInteractive'>
          {
            `
            // when the system theme is dark, the aplication takes certain amount of time to change to dark theme so to avoid this this script is used
            // this beforeInteractive - will load this script first and set the theme based on the system prefered theme
            // On page load or when changing themes, best to add inline in "head" to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
`
        }

        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
