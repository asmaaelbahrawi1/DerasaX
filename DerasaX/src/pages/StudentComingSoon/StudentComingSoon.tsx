import { Link } from "react-router-dom";

export default function StudentComingSoon() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        fontFamily: "var(--font-main)",
        background: "#f7f8fa",
        color: "var(--color-primary)",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "28px" }}>Student Dashboard</h1>
      <p style={{ margin: 0, color: "var(--color-paragraph)" }}>
        Coming soon. This area is under development.
      </p>
      <Link
        to="/"
        style={{
          marginTop: "8px",
          color: "var(--color-secondary)",
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
