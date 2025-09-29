import React, { useEffect, useState } from "react";
import "./styles.css";
import { injectCSSVariables } from "./theme";
import { Providers } from "./state";
import Header from "./components/Header";
import CategoryTabs from "./components/CategoryTabs";
import FilterBar from "./components/FilterBar";
import { UserList, ChallengeList } from "./components/Lists";
import ChallengeModal from "./components/ChallengeModal";
import AuthGate from "./components/Auth";
import MatchHistory from "./components/MatchHistory";

/**
 * Root application for gamefinder
 * - Provides Ocean Professional theme
 * - Offers mock auth, filters, category tabs, lists, and challenge creation
 */

// PUBLIC_INTERFACE
function App() {
  const [challengeOpen, setChallengeOpen] = useState(false);
  const [preset, setPreset] = useState(null);

  useEffect(() => {
    injectCSSVariables();
  }, []);

  const openChallenge = (p = null) => {
    setPreset(p);
    setChallengeOpen(true);
  };

  const onCreateChallenge = (payload) => {
    // For now, just log the created challenge. Integrate with API as needed.
    // eslint-disable-next-line no-console
    console.log("Challenge created:", payload);
  };

  const onJoinChallenge = (id) => {
    // eslint-disable-next-line no-console
    console.log("Joining challenge", id);
  };

  return (
    <Providers>
      <div className="app-shell">
        <Header onOpenChallenge={() => openChallenge(null)} />
        <main className="app-content">
          <AuthGate>
            <CategoryTabs />
            <FilterBar />
            <div style={{ marginTop: 14, display: "grid", gap: 14 }}>
              <section>
                <div className="badge" style={{ marginBottom: 8 }}>Local Users</div>
                <UserList onChallenge={(p) => openChallenge(p)} />
              </section>
              <section>
                <div className="badge" style={{ marginBottom: 8 }}>Open Challenges</div>
                <ChallengeList onJoin={onJoinChallenge} onChallenge={(p) => openChallenge(p)} />
              </section>
              <MatchHistory />
            </div>
          </AuthGate>
        </main>
        <ChallengeModal
          open={challengeOpen}
          onClose={() => setChallengeOpen(false)}
          preset={preset}
          onCreate={onCreateChallenge}
        />
      </div>
    </Providers>
  );
}

export default App;
