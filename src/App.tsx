import type { Component,createSignal } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
	const liffId = '';
	return (
		<div class={styles.App}>
      {!liffId ? <><input type="text" /><button >LIFF.init</button></> : undefined}
			<div>{liffId}</div>
			<header class={styles.header}>
				<img src={logo} class={styles.logo} alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					class={styles.link}
					href="https://github.com/ryansolid/solid"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn Solid
				</a>
			</header>
		</div>
	);
};

export default App;
