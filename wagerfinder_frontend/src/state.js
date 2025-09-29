/**
 * Simple state and mocked data for gamefinder
 */
import React, { createContext, useContext, useMemo, useState } from "react";
import { categories, videogames } from "./theme";

const sampleUsers = [
  { id: "u1", name: "Alex Johnson", distance: 1.2, rating: 4.7, games: ["8 Ball", "Basketball"], avatar: "A" },
  { id: "u2", name: "Priya Singh", distance: 3.5, rating: 4.9, games: ["Poker", "Fortnite"], avatar: "P" },
  { id: "u3", name: "Marcus Lee", distance: 2.1, rating: 4.2, games: ["Rocket League", "NBA 2K"], avatar: "M" },
  { id: "u4", name: "Sofia Ruiz", distance: 0.8, rating: 4.6, games: ["Blackjack", "Bowling"], avatar: "S" },
];

const sampleChallenges = [
  { id: "c1", host: "Alex Johnson", game: "8 Ball", type: "Friendly", distance: 1.2, when: "Today 6:30 PM" },
  { id: "c2", host: "Priya Singh", game: "Fortnite", type: "Wager $10", distance: 3.5, when: "Tonight 8:00 PM" },
  { id: "c3", host: "Marcus Lee", game: "Rocket League", type: "Friendly", distance: 2.1, when: "Tomorrow 4:00 PM" },
];

const sampleHistory = [
  { id: "h1", game: "8 Ball", opponent: "John Doe", result: "Won", date: "2025-09-14" },
  { id: "h2", game: "Fortnite", opponent: "Priya Singh", result: "Lost", date: "2025-09-12" },
  { id: "h3", game: "Poker", opponent: "Alex Johnson", result: "Won", date: "2025-09-10" },
];

// PUBLIC_INTERFACE
export const AuthContext = createContext(null);

// PUBLIC_INTERFACE
export const useAuth = () => useContext(AuthContext);

// PUBLIC_INTERFACE
export const DataContext = createContext(null);

// PUBLIC_INTERFACE
export const useData = () => useContext(DataContext);

// PUBLIC_INTERFACE
export function Providers({ children }) {
  /**
   * Mock auth state: just store user object locally.
   */
  const [user, setUser] = useState(null);

  const login = (email) => {
    setUser({ id: "me", name: email.split("@")[0] || "Player", email });
  };
  const logout = () => setUser(null);
  const signup = (email) => setUser({ id: "me", name: email.split("@")[0] || "Player", email });

  const authValue = useMemo(() => ({ user, login, logout, signup }), [user]);

  /**
   * App data state
   */
  const [activeCategory, setActiveCategory] = useState("all");
  const [distance, setDistance] = useState(5);
  const [query, setQuery] = useState("");
  const [matchType, setMatchType] = useState("any"); // any|friendly|wager
  const [videoGameFilter, setVideoGameFilter] = useState("Any");

  const filteredUsers = useMemo(() => {
    const q = query.toLowerCase();
    return sampleUsers.filter((u) => {
      const within = u.distance <= distance;
      const matchesQ = !q || u.name.toLowerCase().includes(q) || u.games.join(" ").toLowerCase().includes(q);
      const matchesCat = activeCategory === "all"
        ? true
        : activeCategory === "videogames"
          ? u.games.some((g) => videogames.includes(g))
          : u.games.includes(categories.find(c => c.id === activeCategory)?.label || "");
      return within && matchesQ && matchesCat;
    });
  }, [distance, query, activeCategory]);

  const filteredChallenges = useMemo(() => {
    return sampleChallenges.filter((c) => {
      const inDistance = c.distance <= distance;
      const catMatch = activeCategory === "all"
        ? true
        : activeCategory === "videogames"
          ? videogames.includes(c.game)
          : c.game === (categories.find(ca => ca.id === activeCategory)?.label || "");
      const typeMatch =
        matchType === "any" ||
        (matchType === "friendly" && c.type.toLowerCase().includes("friendly")) ||
        (matchType === "wager" && c.type.toLowerCase().includes("wager"));
      const vgMatch = activeCategory === "videogames"
        ? (videoGameFilter === "Any" ? true : c.game === videoGameFilter)
        : true;
      const searchMatch = !query || c.host.toLowerCase().includes(query.toLowerCase()) || c.game.toLowerCase().includes(query.toLowerCase());
      return inDistance && catMatch && typeMatch && vgMatch && searchMatch;
    });
  }, [distance, activeCategory, matchType, videoGameFilter, query]);

  const dataValue = useMemo(
    () => ({
      activeCategory,
      setActiveCategory,
      distance,
      setDistance,
      query,
      setQuery,
      matchType,
      setMatchType,
      videoGameFilter,
      setVideoGameFilter,
      users: filteredUsers,
      challenges: filteredChallenges,
      history: sampleHistory
    }),
    [
      activeCategory,
      distance,
      query,
      matchType,
      videoGameFilter,
      filteredUsers,
      filteredChallenges
    ]
  );

  return (
    <AuthContext.Provider value={authValue}>
      <DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
    </AuthContext.Provider>
  );
}
