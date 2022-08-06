import type { Component } from 'solid-js'
import { css } from 'vite-plugin-inline-css-modules'
import logo from './logo.svg'
const styles = css`
  .App {
    text-align: center;
  }

  .logo {
    animation: logo-spin infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
  }

  .header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .link {
    color: #b318f0;
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer">
          Learn Solid
        </a>
      </header>
    </div>
  )
}

export default App
