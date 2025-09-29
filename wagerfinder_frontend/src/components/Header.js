/**
 * Header component: brand and actions
 */
import React from "react";
import { useAuth } from "../state";

// PUBLIC_INTERFACE
export default function Header({ onOpenChallenge }) {
  const { user, logout } = useAuth();

  return (
    <header className="app-header">
      <div className="topbar">
        <div className="brand" aria-label="gamefinder brand">
          <div className="brand-logo" />
          <div className="brand-name">gamefinder</div>
          <span className="badge" title="Ocean Professional UI">Ocean Professional</span>
        </div>
        <div className="spacer" />
        <div className="header-actions">
          {user && (
            <button className="btn" onClick={onOpenChallenge} aria-label="Create a challenge">
              + New Challenge
            </button>
          )}
          {user ? (
            <button className="btn btn-primary" onClick={logout} aria-label="Logout">
              Logout
            </button>
          ) : null}
        </div>
      </div>
    </header>
  );
}
