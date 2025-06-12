import React from "react";
import { JapaneseViewer } from "./JapaneseViewer";

const App: React.FC = () => (
  <div style={{ height: "100vh" }}>
    <JapaneseViewer file="/samples/1.pdf" />
  </div>
);

export default App;
