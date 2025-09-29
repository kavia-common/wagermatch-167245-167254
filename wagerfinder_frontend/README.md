# gamefinder Frontend

Modern React UI for locating and challenging nearby players across multiple game categories.

## Highlights
- Ocean Professional theme (blue primary, amber accents)
- Mocked authentication (login/signup)
- Filter/search (distance slider, match type, search input, game-specific for video games)
- Category tabs (8 Ball, Poker, Blackjack, Bowling, Basketball, Sprinting, Video Games)
- Lists of local users and open challenges with action buttons
- Challenge creation modal (opponent, category, game, match type, wager, notes)
- Match history for the user
- Responsive, rounded corners, subtle gradients, and transitions

## Scripts
- `npm start` - Run dev server
- `npm test` - Run tests
- `npm run build` - Production build

## Structure
- `src/theme.js` - Theme tokens and constants (categories, videogames)
- `src/styles.css` - Global Ocean Professional styles
- `src/state.js` - Context providers, mocked data, and filters
- `src/components/*` - UI components
- `src/App.js` - Assembles the UI

## Notes
- All data and auth are mocked on the frontend. Replace in `state.js` and `components/Auth.js` to integrate a backend API.
- App title and references updated to "gamefinder".
