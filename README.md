# Shadow Block

A Chrome extension that transforms productivity into an epic journey by combining Pomodoro-style focus sessions with engaging RPG mechanics.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Manifest](https://img.shields.io/badge/manifest-v3-green)
![License](https://img.shields.io/badge/license-MIT-orange)

## 🎮 What is Shadow Block?

Shadow Block gamifies your work sessions to help you stay focused and build better productivity habits. Complete timed focus sessions to earn rewards, level up your character, defeat bosses with meaningful backstories, and unlock cosmetic customizations.

### Core Concept

You play as a "Shadow Hunter" who helps guide "Stubborn Souls" (bosses) to find peace. Each focus session you complete deals damage to the current boss, and defeating them reveals their story and resolution. As you progress, you earn experience (Shadow EXP) and currency (Shadow Embers) to upgrade your character and unlock cosmetics.

## ✨ Features

### 🎯 Productivity Tools
- **Shadow Mode Sessions** - Customizable focus timers (5-120 minutes)
- **Automatic Recovery Phases** - Configurable break durations with notifications
- **Idle Detection** - Tracks when you're away from your computer during sessions
- **Task Management** - Create goals, tasks, and subtasks with estimated durations
- **Auto-Completion** - Optionally mark tasks complete when sessions end
- **Smart Duration** - Session duration auto-fills based on selected task
- **Strict Mode** - Block distracting websites during focus sessions
- **Statistics Tracking** - Monitor streaks, total focus time, and progress

### 🎮 RPG Mechanics
- **Level Progression** - Earn Shadow EXP to level up
- **Character Stats** - Upgrade Focus Power (damage), Shadow Control (crit chance), Willpower (idle rewards)
- **Boss Battles** - Defeat 10 unique Stubborn Souls, each with their own story
- **Shadow Harvest** - Earn passive Shadow Embers even when not in sessions
- **Critical Hits** - Chance to deal 1.5x damage based on Shadow Control stat
- **Session Quality** - Compromised sessions (too much idle time) reduce rewards

### 🎨 Customization
- **6 Auras** - Unlock beautiful color schemes (300-10,000 Shadow Embers)
- **4 Avatars** - Customize your Shadow Hunter appearance (2,000-15,000 Shadow Embers)
- **Animation Toggles** - Enable/disable UI animations
- **Notification Settings** - Control alerts and sound volume


## 🛠️ Tech Stack

- **TypeScript** (ES2020, strict mode)
- **Chrome Extension Manifest V3**
- **esbuild** for bundling
- **Jest** with Puppeteer for testing
- **Chrome APIs**: storage, alarms, idle, webNavigation, tabs, declarativeNetRequest, notifications

## 📦 Installation

### From GitHub Releases (Recommended for Testing)

1. **Download the latest release**
   - Go to the [Releases page](https://github.com/AnsellMaximilian/shadow-block/releases/latest)
   - Download `shadow-block.zip` from the Assets section

2. **Extract the zip file**
   - Right-click the downloaded zip file
   - Select "Extract All..." (Windows) or double-click (Mac)
   - Choose a permanent location (e.g., `Documents/ChromeExtensions/`)
   - **Important**: Don't delete this folder - Chrome needs it to run the extension

3. **Load into Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" using the toggle in the top right corner
   - Click "Load unpacked" button
   - Navigate to and select the extracted `shadow-block` folder
   - The extension icon should appear in your toolbar

4. **Pin the extension** (optional but recommended)
   - Click the puzzle piece icon in Chrome's toolbar
   - Find "Shadow Block" and click the pin icon
   - The extension icon will now always be visible

### Manual Installation from Source (For Developers)

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/shadow-block.git
   cd shadow-block
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
git clone https://github.com/yourusername/shadow-block.git
cd shadow-block

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
shadow-block/
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
│   ├── IdleCollector.ts       # Passive reward collection
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

## 🔒 Privacy

Shadow Block is completely privacy-friendly:
- ✅ All data stored locally using `chrome.storage.local`
- ✅ No external servers or analytics
- ✅ No data collection or transmission
- ✅ No tracking or telemetry
- ✅ Open source code for transparency

The extension only monitors navigation during active focus sessions for the session tracking feature. This data is never stored permanently or transmitted anywhere.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## 📄 License

MIT License - feel free to use this project for learning or building your own extensions.

