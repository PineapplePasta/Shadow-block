# Shadow Block

A Chrome extension that transforms productivity into an epic journey by combining Pomodoro-style focus sessions with engaging RPG mechanics.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Manifest](https://img.shields.io/badge/manifest-v3-green)
![License](https://img.shields.io/badge/license-MIT-orange)

## 🎮 What is Soulful Sessions?

Soulful Sessions gamifies your work sessions to help you stay focused and build better productivity habits. Complete timed focus sessions to earn rewards, level up your character, defeat bosses with meaningful backstories, and unlock cosmetic customizations.

### Core Concept

You play as a "Soul Shepherd" who helps guide "Stubborn Souls" (bosses) to find peace. Each focus session you complete deals damage to the current boss, and defeating them reveals their story and resolution. As you progress, you earn experience (Soul Insight) and currency (Soul Embers) to upgrade your character and unlock cosmetics.

## ✨ Features

### 🎯 Productivity Tools
- **Pomodoro-Style Sessions** - Customizable focus timers (5-120 minutes)
- **Automatic Break Timers** - Configurable break durations with notifications
- **Idle Detection** - Tracks when you're away from your computer during sessions
- **Task Management** - Create goals, tasks, and subtasks with estimated durations
- **Auto-Completion** - Optionally mark tasks complete when sessions end
- **Smart Duration** - Session duration auto-fills based on selected task
- **Strict Mode** - Block distracting websites during focus sessions
- **Statistics Tracking** - Monitor streaks, total focus time, and progress

### 🎮 RPG Mechanics
- **Level Progression** - Earn Soul Insight (XP) to level up
- **Character Stats** - Upgrade Spirit (damage), Harmony (crit chance), Soulflow (idle rewards)
- **Boss Battles** - Defeat 10 unique Stubborn Souls, each with their own story
- **Idle Collection** - Earn passive Soul Embers even when not in sessions
- **Critical Hits** - Chance to deal 1.5x damage based on Harmony stat
- **Session Quality** - Compromised sessions (too much idle time) reduce rewards

### 🎨 Customization
- **6 Themes** - Unlock beautiful color schemes (300-10,000 Soul Embers)
- **4 Character Sprites** - Customize your Soul Shepherd appearance (2,000-15,000 Soul Embers)
- **Animation Toggles** - Enable/disable UI animations
- **Notification Settings** - Control alerts and sound volume

## 🎭 The Stubborn Souls

Each boss represents a soul with unfinished business. As you defeat them, you engage in meaningful conversations and help them find peace:

1. **The Restless Athlete** (100 resolve) - A runner chasing an unreachable finish line
2. **The Unfinished Scholar** (250 resolve) - A researcher seeking one more source
3. **The Regretful Parent** (600 resolve) - A parent who missed milestones
4. **The Forgotten Artist** (1,400 resolve) - A painter whose masterpiece was never seen
5. **The Lonely Musician** (3,200 resolve) - A composer whose symphony was never performed
6. **The Devoted Gardener** (7,000 resolve) - A botanist whose seed never bloomed
7. **The Ambitious Inventor** (15,000 resolve) - An engineer whose breakthrough was stolen
8. **The Wandering Explorer** (32,000 resolve) - A traveler who never reached the summit
9. **The Silent Poet** (65,000 resolve) - A writer whose words were burned
10. **The Eternal Guardian** (130,000 resolve) - A protector who failed their final duty

## 🛠️ Tech Stack

- **TypeScript** (ES2020, strict mode)
- **Chrome Extension Manifest V3**
- **esbuild** for bundling
- **Jest** with Puppeteer for testing
- **Chrome APIs**: storage, alarms, idle, webNavigation, tabs, declarativeNetRequest, notifications

## 📦 Installation

### From Chrome Web Store
*(Coming soon - currently pending review)*

### From GitHub Releases (Recommended for Testing)

1. **Download the latest release**
   - Go to the [Releases page](https://github.com/AnsellMaximilian/soulful-sessions/releases/latest)
   - Download `soulful-sessions.zip` from the Assets section

2. **Extract the zip file**
   - Right-click the downloaded zip file
   - Select "Extract All..." (Windows) or double-click (Mac)
   - Choose a permanent location (e.g., `Documents/ChromeExtensions/`)
   - **Important**: Don't delete this folder - Chrome needs it to run the extension

3. **Load into Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" using the toggle in the top right corner
   - Click "Load unpacked" button
   - Navigate to and select the extracted `soulful-sessions` folder
   - The extension icon should appear in your toolbar

4. **Pin the extension** (optional but recommended)
   - Click the puzzle piece icon in Chrome's toolbar
   - Find "Soulful Sessions" and click the pin icon
   - The extension icon will now always be visible

### Manual Installation from Source (For Developers)

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/soulful-sessions.git
   cd soulful-sessions
   ```

2. Install dependencies and build:
   ```bash
   npm install
   npm run build
   ```

3. Load into Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select the project root directory (not the `dist` folder)

## 🚀 Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/soulful-sessions.git
cd soulful-sessions

# Install dependencies
npm install

# Build the extension
npm run build
```

### Available Scripts

```bash
# Build for production
npm run build

# Type checking only
npm run build:types

# Watch mode for development
npm run watch

# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Run unit tests only
npm test:unit

# Run integration tests only
npm test:integration

# Package for Chrome Web Store
npm run package
```

### Project Structure

```
soulful-sessions/
├── src/
│   ├── background.ts          # Service worker (message routing, alarms)
│   ├── popup.ts               # Popup UI logic
│   ├── content.ts             # Content script (site blocking)
│   ├── options.ts             # Settings page
│   ├── blocked.ts             # Blocked page UI
│   ├── StateManager.ts        # Central state management
│   ├── SessionManager.ts      # Focus session lifecycle
│   ├── ProgressionManager.ts  # XP, leveling, boss progression
│   ├── RewardCalculator.ts    # Session reward calculations
│   ├── IdleCollector.ts       # Passive soul collection
│   ├── NavigationMonitor.ts   # Site visit tracking
│   ├── PlayerCardManager.ts   # Player stats UI
│   ├── DOMOptimizer.ts        # Performance optimizations
│   ├── PerformanceMonitor.ts  # Performance tracking
│   ├── AssetLoader.ts         # Asset loading optimization
│   ├── types.ts               # TypeScript interfaces
│   ├── constants.ts           # Game formulas, boss data, cosmetics
│   └── __tests__/             # Jest tests
├── assets/
│   ├── backgrounds/           # UI background images
│   ├── icons/                 # Extension and UI icons
│   └── sprites/               # Boss and character sprites
├── dist/                      # Compiled output (generated)
├── manifest.json              # Chrome extension manifest
├── popup.html/css             # Popup UI
├── options.html/css           # Settings page UI
├── blocked.html               # Blocked page UI
├── build.js                   # esbuild configuration
├── package-extension.js       # Chrome Web Store packaging script
└── tsconfig.json              # TypeScript configuration
```

### Architecture

**State Management:**
- Single source of truth in `StateManager`
- Immutable state updates via `updateState(partial)`
- Persistence to `chrome.storage.local`
- State validation on load

**Message Passing:**
- Background service worker handles all state mutations
- Popup/options send messages via `chrome.runtime.sendMessage`
- Background broadcasts updates to all clients
- Request-response pattern with async/await

**Manager Separation:**
- **StateManager**: Storage and retrieval
- **SessionManager**: Session timing and lifecycle
- **ProgressionManager**: XP and boss mechanics
- **RewardCalculator**: Reward formulas
- **IdleCollector**: Passive rewards
- **NavigationMonitor**: Site tracking

## 🧪 Testing

### Running Tests

```bash
# All tests
npm test

# Unit tests only
npm test:unit

# Integration tests (requires Chrome/Chromium)
npm test:integration

# Watch mode
npm test:watch
```

### Test Coverage

- Unit tests for individual managers (StateManager, SessionManager, etc.)
- Integration tests for end-to-end workflows
- Manual testing checklists in `src/test-*.md` files

### Manual Testing

Load the extension in developer mode and test:

1. **Basic Session Flow**
   - Start a session → Complete → View rewards → Start break
   - Emergency end session (reduced rewards)
   - Idle detection during session

2. **Boss Progression**
   - Deal damage to boss
   - Defeat boss → View conversation → See resolution
   - Progress to next boss

3. **Stat Upgrades**
   - Upgrade Spirit/Harmony/Soulflow
   - Verify cost increases exponentially
   - Check stat effects on rewards

4. **Cosmetics**
   - Purchase themes and sprites
   - Apply cosmetics
   - Verify visual changes

5. **Task Management**
   - Create goals, tasks, subtasks
   - Start session with task selected
   - Auto-complete task on session end

6. **Strict Mode**
   - Add sites to blocked list
   - Start session with strict mode
   - Verify sites are blocked
   - Check blocked page appears

## 📝 Game Formulas

### Rewards
- **Soul Insight (XP)**: `sessionMinutes * 10 * (1 + spirit * 0.1)`
- **Soul Embers**: `sessionMinutes * 2 * (1 + soulflow * 0.05)`
- **Critical Hit**: 1.5x multiplier (based on Harmony stat)
- **Compromised Session**: 0.7x multiplier (>25% idle time)
- **Emergency End**: 0.5x multiplier

### Boss Damage
- **Damage**: `sessionMinutes * 0.5 * spiritMultiplier * critMultiplier`

### Progression
- **XP to Level**: `100 * (level ^ 1.5)`
- **Skill Points**: 1 per level
- **Stat Upgrade Cost**: `10 * (1.5 ^ currentStatValue)` Soul Embers

### Idle Collection
- **Rate**: `1 soul per 5 minutes * (1 + soulflow * 0.1)`
- **Conversion**: 5 Soul Embers per content soul

## 🎨 Cosmetic Pricing

### Themes
- Twilight Veil: Free (default)
- Crimson Dusk: 300 embers
- Emerald Grove: 650 embers
- Golden Dawn: 1,500 embers
- Midnight Ocean: 3,750 embers
- Violet Dream: 10,000 embers

### Sprites
- Classic Shepherd: Free (default)
- Hooded Guide: 2,000 embers
- Radiant Guardian: 5,000 embers
- Ethereal Wanderer: 15,000 embers

## 🔒 Privacy

Soulful Sessions is completely privacy-friendly:
- ✅ All data stored locally using `chrome.storage.local`
- ✅ No external servers or analytics
- ✅ No data collection or transmission
- ✅ No tracking or telemetry
- ✅ Open source code for transparency

The extension only monitors navigation during active focus sessions for the session tracking feature. This data is never stored permanently or transmitted anywhere.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

### Development Guidelines
- Follow TypeScript strict mode
- Write tests for new features
- Update documentation
- Follow existing code style
- Test manually before submitting

## 📄 License

MIT License - feel free to use this project for learning or building your own extensions.

## 🙏 Acknowledgments

- Built with [Kiro](https://kiro.ai) - AI-powered IDE
- Inspired by Pomodoro Technique and RPG progression systems
- Font: Rubik Spray Paint

## 📧 Support

For issues, questions, or feature requests, please open an issue on GitHub.

---

**Made with ❤️ and focus sessions**
