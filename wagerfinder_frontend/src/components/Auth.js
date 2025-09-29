/**
 * Authentication forms with mocked logic
 */
import React, { useState } from "react";
import { useAuth } from "../state";

// PUBLIC_INTERFACE
export default function AuthGate({ children }) {
  const { user } = useAuth();
  if (user) return children;
  return <AuthForms />;
}

function AuthForms() {
  const { login, signup } = useAuth();
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (mode === "login") login(email);
    else signup(email);
  };

  return (
    <div className="auth-container">
      <div className="auth-title">Welcome to gamefinder</div>
      <div className="auth-subtitle">Find and challenge players nearby across multiple game categories.</div>
      <form onSubmit={submit}>
        <div className="filter-title">Email</div>
        <input
          className="input"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
        <div className="filter-title" style={{ marginTop: 10 }}>Password</div>
        <input
          className="input"
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter a password"
        />
        <div className="auth-actions">
          <button className="btn btn-primary" type="submit">{mode === "login" ? "Login" : "Create Account"}</button>
          <button
            className="btn"
            type="button"
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
          >
            {mode === "login" ? "Need an account? Sign up" : "Have an account? Login"}
          </button>
        </div>
      </form>
      <div className="small" style={{ marginTop: 8 }}>
        Auth is mocked locally. Integrate with your backend when available.
      </div>
    </div>
  );
}
