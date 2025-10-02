import { ScanLineEffect } from "../retro-effect";

export const TestComponent = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ScanLineEffect>
        <div
          style={{
            background: "linear-gradient(to bottom, #d8f5ff, #62c0e0, #16658c)",
            border: "2px solid #222",
            padding: "20px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          WONDER TRADE
        </div>
      </ScanLineEffect>
    </div>
  );
};
