/**
 * Filter Bar
 */
import React from "react";
import { useData } from "../state";
import { videogames } from "../theme";

// PUBLIC_INTERFACE
export default function FilterBar() {
  const {
    distance, setDistance,
    query, setQuery,
    matchType, setMatchType,
    activeCategory,
    videoGameFilter, setVideoGameFilter
  } = useData();

  return (
    <div className="filter-bar" role="region" aria-label="Filters">
      <div className="filter-card">
        <div className="filter-title">Search</div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input"
          placeholder="Search users, games, or challenges..."
          aria-label="Search"
        />
      </div>

      <div className="filter-card">
        <div className="filter-title">Distance: {distance} mi</div>
        <input
          type="range"
          min={1}
          max={25}
          value={distance}
          onChange={(e) => setDistance(Number(e.target.value))}
          className="range"
          aria-label="Distance filter"
        />
      </div>

      <div className="filter-card">
        <div className="filter-title">Match Type</div>
        <select
          className="select"
          value={matchType}
          onChange={(e) => setMatchType(e.target.value)}
          aria-label="Match type filter"
        >
          <option value="any">Any</option>
          <option value="friendly">Friendly</option>
          <option value="wager">Wager</option>
        </select>
      </div>

      <div className="filter-card">
        <div className="filter-title">Game Specific</div>
        {activeCategory === "videogames" ? (
          <select
            className="select"
            value={videoGameFilter}
            onChange={(e) => setVideoGameFilter(e.target.value)}
            aria-label="Video game filter"
          >
            <option value="Any">Any</option>
            {videogames.map((vg) => (
              <option key={vg} value={vg}>{vg}</option>
            ))}
          </select>
        ) : (
          <div className="small">Select "Video Games" category to filter specific titles.</div>
        )}
      </div>
    </div>
  );
}
