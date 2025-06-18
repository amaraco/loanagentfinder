jsx

import { useState } from "react";

export default function Home() {
  const [zip, setZip] = useState("");

  const handleSearch = () => {
    if (zip.trim()) {
      window.location.href = `/search?zip=${zip}`;
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      <h1>Find Trusted Loan Agents Near You</h1>
      <input
        type="text"
        placeholder="Enter ZIP code"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
        style={{ padding: "0.5rem", fontSize: "1rem", width: "60%", marginRight: "0.5rem" }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

