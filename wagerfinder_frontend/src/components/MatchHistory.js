/**
 * Match history display for the current user
 */
import React from "react";
import { useData } from "../state";

// PUBLIC_INTERFACE
export default function MatchHistory() {
  const { history } = useData();
  return (
    <section className="history" aria-label="Match History">
      <div className="history-title">Your Match History</div>
      {history.map((h) => (
        <div key={h.id} className="history-item">
          <div>
            <strong>{h.game}</strong> vs {h.opponent}
          </div>
          <div>
            <span className="pill" style={{ marginRight: 8 }}>{h.result}</span>
            <span className="small">{h.date}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
