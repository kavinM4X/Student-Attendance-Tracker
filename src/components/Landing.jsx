import React from "react";

const Landing = ({ onStart }) => {
  return (
    <div className="landing" style={styles.container}>
      <h1 style={styles.heading}>Welcome to SmartAttend</h1>
      <p style={styles.subheading}>
        A powerful, easy-to-use web tool designed to streamline student attendance tracking.
        Save time, stay organized, and ensure accurate records — all from your browser.
      </p>
      <button onClick={onStart} style={styles.button}>
        Launch Tracker
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "60px",
    background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#004d40",
  },
  heading: {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  subheading: {
    fontSize: "18px",
    maxWidth: "600px",
    lineHeight: "1.6",
  },
  button: {
    padding: "12px 28px",
    fontSize: "18px",
    fontWeight: "600",
    backgroundColor: "#00695c",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "30px",
    transition: "background 0.3s ease",
  },
};

export default Landing;
