import React from "react";
import Layout from "@theme/Layout";

function Hackathon() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>
          Edit <code>pages/helloReact.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}

export default Hackathon;
