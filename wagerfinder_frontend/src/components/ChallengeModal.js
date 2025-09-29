/**
 * Challenge Creation Modal
 */
import React, { useState } from "react";
import { categories, videogames } from "../theme";

// PUBLIC_INTERFACE
export default function ChallengeModal({ open, onClose, preset, onCreate }) {
  const [opponent, setOpponent] = useState(preset?.opponent || "");
  const [category, setCategory] = useState(preset?.category || "table");
  const [game, setGame] = useState(preset?.game || "8 Ball");
  const [type, setType] = useState("friendly"); // friendly | wager
  const [wager, setWager] = useState(10);
  const [notes, setNotes] = useState("");

  const isVideoCategory = category === "videogames";

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { opponent, category, game, type, wager: type === "wager" ? wager : 0, notes };
    onCreate?.(payload);
    onClose?.();
  };

  if (!open) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Create Challenge">
      <form className="modal" onSubmit={handleSubmit}>
        <div className="modal-header">
          <div className="modal-title">Create Challenge</div>
          <button type="button" className="btn" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className="modal-body">
          <div className="row">
            <div>
              <div className="filter-title">Opponent</div>
              <input
                className="input"
                value={opponent}
                onChange={(e) => setOpponent(e.target.value)}
                placeholder="Enter opponent name"
                required
              />
            </div>
            <div>
              <div className="filter-title">Category</div>
              <select className="select" value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.filter(c => c.id !== "all").map((c) => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="row">
            <div>
              <div className="filter-title">Game</div>
              {isVideoCategory ? (
                <select className="select" value={game} onChange={(e) => setGame(e.target.value)}>
                  {videogames.map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              ) : (
                <input
                  className="input"
                  value={game}
                  onChange={(e) => setGame(e.target.value)}
                  placeholder="e.g., 8 Ball, Poker"
                  required
                />
              )}
            </div>

            <div>
              <div className="filter-title">Match Type</div>
              <select className="select" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="friendly">Friendly</option>
                <option value="wager">Wager</option>
              </select>
            </div>
          </div>

          {type === "wager" && (
            <div>
              <div className="filter-title">Wager Amount ($)</div>
              <input
                type="number"
                min={1}
                className="input"
                value={wager}
                onChange={(e) => setWager(Number(e.target.value))}
                required
              />
            </div>
          )}

          <div>
            <div className="filter-title">Notes</div>
            <textarea
              className="input"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any additional rules or preferences..."
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <button type="button" className="btn" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  );
}
