import React from "react";
import Head from "next/head";

import Globe from "../components/globeAnimation2/globe";

function App() {
  return (
    <>
      <Head>
        <title>Gudz</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"></script>
      </Head>
      <div>
        <Globe />
      </div>
    </>
  );
}

export default App;
