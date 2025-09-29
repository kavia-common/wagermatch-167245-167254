/**
 * Category Tabs
 */
import React from "react";
import { categories } from "../theme";
import { useData } from "../state";

// PUBLIC_INTERFACE
export default function CategoryTabs() {
  const { activeCategory, setActiveCategory } = useData();
  return (
    <div className="tabs" role="tablist" aria-label="Game Categories">
      {categories.map((c) => (
        <button
          key={c.id}
          role="tab"
          className={`tab ${activeCategory === c.id ? "active" : ""}`}
          onClick={() => setActiveCategory(c.id)}
          aria-selected={activeCategory === c.id}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
