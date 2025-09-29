/**
 * Lists of users and challenges
 */
import React from "react";
import { useData } from "../state";

// PUBLIC_INTERFACE
export function UserList({ onChallenge }) {
  const { users } = useData();
  return (
    <section aria-label="Local Users" className="lists">
      {users.map((u) => (
        <article key={u.id} className="card">
          <div className="avatar" aria-hidden>{u.avatar}</div>
          <div className="card-body">
            <div>
              <div className="card-title">{u.name}</div>
              <div className="card-subtitle">
                {u.distance} mi • ⭐ {u.rating} • {u.games.join(", ")}
              </div>
            </div>
            <div className="card-actions">
              <span className="pill">Nearby</span>
              <button className="btn" onClick={() => onChallenge({ opponent: u.name })}>Challenge</button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

// PUBLIC_INTERFACE
export function ChallengeList({ onJoin, onChallenge }) {
  const { challenges } = useData();
  return (
    <section aria-label="Open Challenges" className="lists">
      {challenges.map((c) => (
        <article key={c.id} className="card">
          <div className="avatar" aria-hidden>{c.host.slice(0,1)}</div>
          <div className="card-body">
            <div>
              <div className="card-title">{c.game}</div>
              <div className="card-subtitle">
                Host: {c.host} • {c.type} • {c.distance} mi • {c.when}
              </div>
            </div>
            <div className="card-actions">
              <button className="btn" onClick={() => onChallenge({ opponent: c.host, game: c.game })}>Counter</button>
              <button className="btn btn-primary" onClick={() => onJoin(c.id)}>Join</button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
