import React, { useEffect, useRef, useState } from "react";

function Pageloader() {
  const pageloader = useRef(null);
  const [plActive, setPlActive] = useState(false);
  const [ilActive, setIlActive] = useState(true);

  useEffect(() => {
    if (pageloader.current) {
      setPlActive((active) => !active);
      let pageloaderTimeout = setTimeout(function () {
        setPlActive((active) => !active);
        setIlActive((active) => !active);
      }, 700);
      return () => clearTimeout(pageloaderTimeout);
    }
  }, []);

  return (
    <div>
      <div
        ref={pageloader}
        className={`pageloader ${plActive ? "is-active" : ""} `}
      ></div>
      <div className={`infraloader ${ilActive ? "is-active" : ""} `}></div>
    </div>
  );
}

export default Pageloader;
