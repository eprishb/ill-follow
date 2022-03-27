import React, { useEffect, useRef, useState } from "react";
import IndexRouters from "./router/index";
import Pageloader from "./components/pageloader/Pageloader";
import "./assets/scss/socialv.scss";

function App() {
	const pageloader = useRef(null);
	const [plActive, setPlActive] = useState(false);
	const [ilActive, setIlActive] = useState(true);

	useEffect(() => {
    if (!pageloader.current) return;
		
		setPlActive((active) => !active);

		const pageloaderTimeout = setTimeout(() => {
			setPlActive((active) => !active);
			setIlActive((active) => !active);
			clearTimeout(pageloaderTimeout);
		}, 700);
  }, []);

  return (
    <div className="App">
      <Pageloader ref={pageloader} plActive={plActive} ilActive={ilActive} />
      <IndexRouters />
    </div>
  );
}

export default App;
