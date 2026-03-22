"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // src/constants.ts
  var constants_exports = {};
  __export(constants_exports, {
    COSMETIC_SPRITES: () => COSMETIC_SPRITES,
    COSMETIC_THEMES: () => COSMETIC_THEMES,
    CURRENT_STATE_VERSION: () => CURRENT_STATE_VERSION,
    DEFAULT_COSMETICS: () => DEFAULT_COSMETICS,
    DEFAULT_PLAYER_STATE: () => DEFAULT_PLAYER_STATE,
    DEFAULT_PLAYER_STATS: () => DEFAULT_PLAYER_STATS,
    DEFAULT_PROGRESSION_STATE: () => DEFAULT_PROGRESSION_STATE,
    DEFAULT_SETTINGS: () => DEFAULT_SETTINGS,
    DEFAULT_STATISTICS: () => DEFAULT_STATISTICS,
    DEFAULT_TASK_STATE: () => DEFAULT_TASK_STATE,
    FORMULAS: () => FORMULAS,
    STUBBORN_SOULS: () => STUBBORN_SOULS,
    UI: () => UI,
    VALIDATION: () => VALIDATION,
    getRankName: () => getRankName
  });
  function getRankName(level) {
    const roman = ["I", "II", "III", "IV", "V"];
    if (level < 5) return `Shadow Soldier ${roman[(level - 1) % 5]}`;
    if (level < 10) return `Shadow Knight ${roman[(level - 1) % 5]}`;
    if (level < 15) return `Shadow Elite ${roman[(level - 1) % 5]}`;
    if (level < 20) return `Shadow Commander ${roman[(level - 1) % 5]}`;
    if (level < 25) return `Shadow Sovereign ${roman[(level - 1) % 5]}`;
    return `Shadow Monarch`;
  }
  var STUBBORN_SOULS, FORMULAS, DEFAULT_PLAYER_STATS, DEFAULT_COSMETICS, DEFAULT_PLAYER_STATE, DEFAULT_PROGRESSION_STATE, DEFAULT_TASK_STATE, DEFAULT_SETTINGS, DEFAULT_STATISTICS, CURRENT_STATE_VERSION, VALIDATION, UI, COSMETIC_THEMES, COSMETIC_SPRITES;
  var init_constants = __esm({
    "src/constants.ts"() {
      "use strict";
      STUBBORN_SOULS = [
        {
          id: 0,
          name: "Shadow Infantry",
          backstory: "A runner who never crossed the finish line they dreamed of. They cling to the track, running endless laps.",
          initialResolve: 100,
          sprite: "athlete.png",
          unlockLevel: 1,
          finalConversation: [
            {
              speaker: "shepherd",
              text: "You've been running for so long. What are you chasing?"
            },
            {
              speaker: "soul",
              text: "The finish line... I can see it, but I can never reach it. Every step forward, it moves further away."
            },
            {
              speaker: "shepherd",
              text: "Perhaps the race was never about the finish. What did you learn along the way?"
            },
            {
              speaker: "soul",
              text: "I... I learned discipline. Perseverance. I inspired others to run their own races. Maybe that was enough."
            },
            {
              speaker: "shepherd",
              text: "Then you've already crossed every finish line that mattered. Your journey inspired countless others to begin theirs."
            }
          ],
          resolution: "The Restless Athlete finally stops running. They realize that their legacy wasn't in crossing a single finish line, but in the countless miles they ran and the inspiration they provided to others. With a peaceful smile, they take their final rest, their race complete."
        },
        {
          id: 1,
          name: "Shadow Mage",
          backstory: "A researcher who died before publishing their life's work. They haunt the library, searching for one more source.",
          initialResolve: 250,
          sprite: "scholar.png",
          unlockLevel: 3,
          finalConversation: [
            {
              speaker: "shepherd",
              text: "Your research sits unfinished. What were you trying to prove?"
            },
            {
              speaker: "soul",
              text: "Everything. I needed one more citation, one more experiment. My work was so close to completion."
            },
            {
              speaker: "shepherd",
              text: "And what did your research teach you, even incomplete?"
            },
            {
              speaker: "soul",
              text: "That knowledge builds upon itself. My notes, my methods\u2014they became the foundation for others who came after."
            },
            {
              speaker: "shepherd",
              text: "Then your work was never unfinished. You were part of something greater than any single publication."
            }
          ],
          resolution: "The Unfinished Scholar closes their final book. They understand now that scholarship is not about individual glory, but about contributing to the endless pursuit of knowledge. Their research, though unpublished, lives on in the work of those who followed. They depart in peace, knowing their contribution mattered."
        },
        {
          id: 2,
          name: "Shadow Knight",
          backstory: "A parent who missed their child's milestones. They linger at the playground, watching families.",
          initialResolve: 600,
          sprite: "parent.png",
          unlockLevel: 5,
          finalConversation: [
            {
              speaker: "shepherd",
              text: "You watch these families with such longing. What do you wish you could change?"
            },
            {
              speaker: "soul",
              text: "I missed so much. First steps, first words, birthdays. I was always working, always busy. I thought I had time."
            },
            {
              speaker: "shepherd",
              text: "What moments did you share with them?"
            },
            {
              speaker: "soul",
              text: "Quiet mornings. Bedtime stories. The way they smiled when I came home. Small moments I took for granted."
            },
            {
              speaker: "shepherd",
              text: "Those small moments were everything. Your child remembers your love, not your absence."
            }
          ],
          resolution: "The Regretful Parent finally leaves the playground. They realize that love isn't measured in milestones attended, but in the countless small moments of connection and care. Their child grew up knowing they were loved, and that is the greatest gift any parent can give. They find peace in the memories they did create."
        },
        {
          id: 3,
          name: "Shadow Assassin",
          backstory: "A painter whose masterpiece was never seen. They wander galleries, invisible among the crowds.",
          initialResolve: 1400,
          sprite: "artist.png",
          unlockLevel: 7,
          finalConversation: [
            {
              speaker: "shepherd",
              text: "Your painting sits hidden away. Does art need an audience to have meaning?"
            },
            {
              speaker: "soul",
              text: "I poured my soul into that canvas. If no one sees it, did I create anything at all?"
            },
            {
              speaker: "shepherd",
              text: "What did the act of creation give you?"
            },
            {
              speaker: "soul",
              text: "Purpose. Joy. A way to express what words couldn't capture. The painting changed me, even if it changed no one else."
            },
            {
              speaker: "shepherd",
              text: "Then it was seen by the one person who needed to see it most\u2014you. Art transforms the artist first."
            }
          ],
          resolution: "The Forgotten Artist steps away from the galleries. They understand now that creation itself is the reward, not recognition. The act of bringing beauty into the world changed them profoundly, and that transformation was their true masterpiece. They depart with the quiet satisfaction of an artist who created for the right reasons."
        },
        {
          id: 4,
          name: "Shadow Sniper",
          backstory: "A composer whose symphony was never performed. They sit at a silent piano, fingers hovering over keys.",
          initialResolve: 3200,
          sprite: "musician.png",
          unlockLevel: 10,
          finalConversation: [
            {
              speaker: "shepherd",
              text: "Your symphony remains unheard. What music did you hope to share?"
            },
            {
              speaker: "soul",
              text: "A piece that captured the beauty of fleeting moments. Joy, sorrow, hope\u2014all woven together. But silence is all that remains."
            },
            {
              speaker: "shepherd",
              text: "Did you hear it when you composed it?"
            },
            {
              speaker: "soul",
              text: "Every note, every harmony. It played in my mind like a living thing. I heard it perfectly."
            },
            {
              speaker: "shepherd",
              text: "Then it was performed, in the most intimate concert hall of all. Music exists first in the heart of its creator."
            }
          ],
          resolution: "The Lonely Musician finally plays their symphony, not for an audience, but for themselves. They realize that music's power lies not in grand performances, but in its ability to express the inexpressible. Their symphony lived fully in their imagination and heart, and that was enough. They fade away with the final, perfect note still resonating."
        },
        {
          id: 5,
          name: "Shadow Tank",
          backstory: "A botanist who never saw their rare seed bloom. They tend to a garden that exists only in memory.",
          initialResolve: 7e3,
          sprite: "gardener.png",
          unlockLevel: 13,
          finalConversation: [
            {
              speaker: "shepherd",
              text: "You planted a seed that never bloomed in your lifetime. Was your work wasted?"
            },
            {
              speaker: "soul",
              text: "I prepared the soil, provided water and care. But I never saw the flower. All that patience for nothing."
            },
            {
              speaker: "shepherd",
              text: "What did you learn from tending the garden?"
            },
            {
              speaker: "soul",
              text: "That growth takes time. That care matters even when results aren't immediate. That some seeds bloom long after the gardener is gone."
            },
            {
              speaker: "shepherd",
              text: "Your seed did bloom\u2014just not in the way you expected. You cultivated patience, dedication, and hope. Those blooms never fade."
            }
          ],
          resolution: "The Devoted Gardener sets down their tools. They understand now that a gardener's true legacy isn't in the flowers they see, but in the care they provide and the lessons they embody. Their rare seed may have bloomed years later, or perhaps it taught others the value of patient cultivation. Either way, their garden was never empty. They rest in peace, knowing they tended well."
        },
        {
          id: 6,
          name: "Shadow Elite",
          backstory: "An engineer whose breakthrough was stolen. They tinker endlessly with a machine that will never work.",
          initialResolve: 15e3,
          sprite: "inventor.png",
          unlockLevel: 16,
          finalConversation: [
            {
              speaker: "shepherd",
              text: "Your invention was taken from you. Does that erase what you created?"
            },
            {
              speaker: "soul",
              text: "They claimed it as their own. My name was forgotten while they received all the credit. My life's work, stolen."
            },
            {
              speaker: "shepherd",
              text: "But who truly invented it? Who solved the impossible problem?"
            },
            {
              speaker: "soul",
              text: "I did. I know I did. The breakthrough was mine, even if the world doesn't know it."
            },
            {
              speaker: "shepherd",
              text: "Then you carry something they never can\u2014the knowledge that you were capable of greatness. That truth can never be stolen."
            }
          ],
          resolution: "The Ambitious Inventor stops tinkering with their phantom machine. They realize that innovation lives in the mind that conceives it, not in the credit received. Their breakthrough changed the world, regardless of whose name was attached. The satisfaction of solving the unsolvable was always theirs to keep. They depart with the quiet pride of a true inventor."
        },
        {
          id: 7,
          name: "Shadow General",
          backstory: "A traveler who never reached the summit. They climb an endless mountain, always one step from the peak.",
          initialResolve: 32e3,
          sprite: "explorer.png",
          unlockLevel: 20,
          finalConversation: [
            {
              speaker: "shepherd",
              text: "The summit remains just out of reach. Why do you keep climbing?"
            },
            {
              speaker: "soul",
              text: "Because it's there. Because I came so close. One more step, one more day, and I would have made it."
            },
            {
              speaker: "shepherd",
              text: "What did you see on your journey up the mountain?"
            },
            {
              speaker: "soul",
              text: "Wonders I never imagined. Vistas that took my breath away. Challenges that made me stronger. Every step revealed something new."
            },
            {
              speaker: "shepherd",
              text: "Then you've already reached countless summits. The peak was never the destination\u2014the climb was the journey itself."
            }
          ],
          resolution: "The Wandering Explorer stops climbing and looks back at the path they've traveled. They see now that exploration is not about reaching a single destination, but about the courage to venture into the unknown. Every step of their journey was a summit in its own right. They rest at last, content with the magnificent journey they completed."
        },
        {
          id: 8,
          name: "Shadow Commander",
          backstory: "A writer whose words were burned before being read. They whisper verses to the wind that carries them away.",
          initialResolve: 65e3,
          sprite: "poet.png",
          unlockLevel: 24,
          finalConversation: [
            {
              speaker: "shepherd",
              text: "Your words were destroyed before anyone could read them. Do they still exist?"
            },
            {
              speaker: "soul",
              text: "They're gone. Ash and smoke. All those verses, all those truths I tried to capture\u2014erased."
            },
            {
              speaker: "shepherd",
              text: "But you remember them, don't you?"
            },
            {
              speaker: "soul",
              text: "Every word. Every rhythm. They live in me, even if nowhere else."
            },
            {
              speaker: "shepherd",
              text: "Then they were never destroyed. Words that change the writer have already fulfilled their purpose. You became the poem you wrote."
            }
          ],
          resolution: "The Silent Poet stops whispering to the wind. They understand now that writing is an act of self-discovery, not just communication. Their verses shaped who they became, and that transformation was the true poetry. The words lived most fully in the heart that conceived them. They depart in peace, their greatest poem complete\u2014the life they lived."
        },
        {
          id: 9,
          name: "Shadow Monarch",
          backstory: "A protector who failed their final duty. They stand watch over ruins, guarding nothing but regret.",
          initialResolve: 13e4,
          sprite: "guardian.png",
          unlockLevel: 28,
          finalConversation: [
            {
              speaker: "shepherd",
              text: "You guard ruins now. What are you protecting?"
            },
            {
              speaker: "soul",
              text: "Nothing. I failed when it mattered most. I couldn't protect what I was sworn to defend."
            },
            {
              speaker: "shepherd",
              text: "How many times did you succeed before that final moment?"
            },
            {
              speaker: "soul",
              text: "Countless times. Years of vigilance. Decades of keeping them safe. But the one time I failed..."
            },
            {
              speaker: "shepherd",
              text: "That one failure doesn't erase a lifetime of protection. You gave everything you had. That is what it means to be a guardian."
            }
          ],
          resolution: "The Eternal Guardian finally lays down their watch. They understand now that true guardianship is measured not by the one time they fell, but by the countless times they stood strong. Their lifetime of protection mattered, and their final failure was simply the moment they gave everything they had left. They rest at last, their duty fulfilled with honor."
        }
      ];
      FORMULAS = {
        // Reward Calculations
        SOUL_INSIGHT_BASE_MULTIPLIER: 10,
        SOUL_INSIGHT_SPIRIT_BONUS: 0.1,
        SOUL_EMBERS_BASE_MULTIPLIER: 2,
        SOUL_EMBERS_SOULFLOW_BONUS: 0.05,
        CRITICAL_HIT_MULTIPLIER: 1.5,
        COMPROMISE_PENALTY_MULTIPLIER: 0.7,
        BOSS_DAMAGE_MULTIPLIER: 0.5,
        // Idle Collection
        IDLE_COLLECTION_BASE_RATE: 1,
        // 1 soul per 5 minutes
        IDLE_COLLECTION_INTERVAL: 5,
        // Minutes
        IDLE_COLLECTION_SOULFLOW_BONUS: 0.1,
        CONTENT_SOUL_TO_EMBERS: 5,
        // 5 embers per content soul
        // Level Progression
        LEVEL_THRESHOLD_BASE: 100,
        LEVEL_THRESHOLD_EXPONENT: 1.5,
        SKILL_POINTS_PER_LEVEL: 1,
        // Stat Upgrades
        STAT_UPGRADE_BASE_COST: 10,
        STAT_UPGRADE_COST_MULTIPLIER: 1.5,
        // Session Validation
        IDLE_TIME_THRESHOLD_PERCENT: 0.25,
        // 25% idle time marks as compromised
        EMERGENCY_END_PENALTY: 0.5
        // 50% reward reduction
      };
      DEFAULT_PLAYER_STATS = {
        spirit: 1,
        harmony: 0.05,
        // 5% crit chance
        soulflow: 1
      };
      DEFAULT_COSMETICS = {
        ownedThemes: ["default"],
        ownedSprites: ["default"],
        activeTheme: "default",
        activeSprite: "default"
      };
      DEFAULT_PLAYER_STATE = {
        level: 1,
        soulInsight: 0,
        soulInsightToNextLevel: 100,
        soulEmbers: 0,
        stats: { ...DEFAULT_PLAYER_STATS },
        skillPoints: 0,
        cosmetics: { ...DEFAULT_COSMETICS }
      };
      DEFAULT_PROGRESSION_STATE = {
        currentBossIndex: 0,
        currentBossResolve: STUBBORN_SOULS[0].initialResolve,
        defeatedBosses: [],
        idleState: {
          lastCollectionTime: Date.now(),
          accumulatedSouls: 0
        }
      };
      DEFAULT_TASK_STATE = {
        goals: [],
        nextId: 1
      };
      DEFAULT_SETTINGS = {
        defaultSessionDuration: 25,
        defaultBreakDuration: 5,
        autoStartNextSession: false,
        autoCompleteTask: false,
        idleThreshold: 120,
        strictMode: false,
        discouragedSites: [],
        blockedSites: [],
        animationsEnabled: true,
        notificationsEnabled: true,
        soundVolume: 0.5,
        showSessionTimer: true
      };
      DEFAULT_STATISTICS = {
        totalSessions: 0,
        totalFocusTime: 0,
        currentStreak: 0,
        longestStreak: 0,
        lastSessionDate: "",
        bossesDefeated: 0,
        totalSoulInsightEarned: 0,
        totalSoulEmbersEarned: 0,
        totalIdleSoulsCollected: 0
      };
      CURRENT_STATE_VERSION = 1;
      VALIDATION = {
        MIN_SESSION_DURATION: 5,
        // Minutes
        MAX_SESSION_DURATION: 120,
        // Minutes
        MIN_BREAK_DURATION: 1,
        // Minutes
        MAX_BREAK_DURATION: 30,
        // Minutes
        IDLE_DETECTION_THRESHOLD: 120
        // Seconds (2 minutes)
      };
      UI = {
        POPUP_WIDTH: 400,
        POPUP_HEIGHT: 600,
        ANIMATION_DURATION: 300
        // Milliseconds
      };
      COSMETIC_THEMES = [
        {
          id: "default",
          name: "Twilight Veil",
          description: "The classic Soul Shepherd aesthetic",
          cost: 0,
          colors: {
            primary: "#667eea",
            secondary: "#764ba2",
            accent: "#4fc3f7",
            background: "#1a1a2e",
            backgroundGradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
          }
        },
        {
          id: "crimson-dusk",
          name: "Crimson Dusk",
          description: "A fiery theme for passionate shepherds",
          cost: 300,
          colors: {
            primary: "#ff6b6b",
            secondary: "#ee5a6f",
            accent: "#ffd93d",
            background: "#2d1b1b",
            backgroundGradient: "linear-gradient(135deg, #2d1b1b 0%, #3d1f1f 100%)"
          }
        },
        {
          id: "emerald-grove",
          name: "Emerald Grove",
          description: "A natural theme for peaceful souls",
          cost: 650,
          colors: {
            primary: "#51cf66",
            secondary: "#37b24d",
            accent: "#94d82d",
            background: "#1a2e1a",
            backgroundGradient: "linear-gradient(135deg, #1a2e1a 0%, #1f3d1f 100%)"
          }
        },
        {
          id: "golden-dawn",
          name: "Golden Dawn",
          description: "A radiant theme for enlightened guides",
          cost: 1500,
          colors: {
            primary: "#ffd700",
            secondary: "#ffed4e",
            accent: "#ffa94d",
            background: "#2e2a1a",
            backgroundGradient: "linear-gradient(135deg, #2e2a1a 0%, #3d361f 100%)"
          }
        },
        {
          id: "midnight-ocean",
          name: "Midnight Ocean",
          description: "A deep theme for contemplative shepherds",
          cost: 3750,
          colors: {
            primary: "#339af0",
            secondary: "#1c7ed6",
            accent: "#74c0fc",
            background: "#1a1e2e",
            backgroundGradient: "linear-gradient(135deg, #1a1e2e 0%, #1f2d3d 100%)"
          }
        },
        {
          id: "violet-dream",
          name: "Violet Dream",
          description: "A mystical theme for spiritual guides",
          cost: 1e4,
          colors: {
            primary: "#9775fa",
            secondary: "#845ef7",
            accent: "#d0bfff",
            background: "#221a2e",
            backgroundGradient: "linear-gradient(135deg, #221a2e 0%, #2d1f3d 100%)"
          }
        }
      ];
      COSMETIC_SPRITES = [
        {
          id: "default",
          name: "Hunter's Trench",
          description: "The classic dark trench coat of a hunter",
          cost: 0,
          imagePath: "assets/sprites/sprite_classic_shepherd.png"
        },
        {
          id: "hooded-guide",
          name: "Knight Commander",
          description: "Armor fit for a high-ranking shadow soldier",
          cost: 2e3,
          imagePath: "assets/sprites/sprite_hooded_guide.png"
        },
        {
          id: "radiant-guardian",
          name: "Monarch's Armor",
          description: "Emanating with an intimidating violet aura",
          cost: 5e3,
          imagePath: "assets/sprites/sprite_radiant_guardian.png"
        },
        {
          id: "ethereal-wanderer",
          name: "Dragon Slayer",
          description: "The ultimate armor worn by the sovereign",
          cost: 15e3,
          imagePath: "assets/sprites/sprite_ethereal_wanderer.png"
        }
      ];
    }
  });

  // src/popup.ts
  init_constants();
  var currentView = "idle" /* IDLE */;
  var currentState = null;
  function getElement(id) {
    const element = document.getElementById(id);
    if (!element) {
      throw new Error(`Element with id "${id}" not found`);
    }
    return element;
  }
  function setText(id, text) {
    const element = getElement(id);
    element.textContent = text;
  }
  function show(id) {
    const element = getElement(id);
    element.classList.remove("hidden");
  }
  function hide(id) {
    const element = getElement(id);
    element.classList.add("hidden");
  }
  function setProgress(barId, percentage) {
    const bar = getElement(barId);
    bar.style.width = `${Math.max(0, Math.min(100, percentage))}%`;
  }
  function formatNumber(value, maxDecimals = 3) {
    const rounded = Number(value.toFixed(maxDecimals));
    return rounded.toString();
  }
  function switchView(newView) {
    if (currentView === "break" /* BREAK */ && newView !== "break" /* BREAK */) {
      stopContentSoulAnimations();
    }
    const animationsEnabled = currentState?.settings.animationsEnabled ?? true;
    if (animationsEnabled) {
      const currentViewElement = getCurrentViewElement();
      if (currentViewElement && !currentViewElement.classList.contains("hidden")) {
        currentViewElement.classList.add("fade-out");
        setTimeout(() => {
          hide("idle-view");
          hide("focus-session-view");
          hide("reward-view");
          hide("break-view");
          currentViewElement.classList.remove("fade-out");
          const newViewElement = getViewElement(newView);
          newViewElement.classList.remove("hidden");
          newViewElement.classList.add("fade-in");
          setTimeout(() => {
            newViewElement.classList.remove("fade-in");
          }, 300);
          currentView = newView;
        }, 300);
      } else {
        showViewWithFade(newView);
        currentView = newView;
      }
    } else {
      hide("idle-view");
      hide("focus-session-view");
      hide("reward-view");
      hide("break-view");
      switch (newView) {
        case "idle" /* IDLE */:
          show("idle-view");
          break;
        case "focusSession" /* FOCUS_SESSION */:
          show("focus-session-view");
          break;
        case "reward" /* REWARD */:
          show("reward-view");
          break;
        case "break" /* BREAK */:
          show("break-view");
          break;
      }
      currentView = newView;
    }
  }
  function getCurrentViewElement() {
    switch (currentView) {
      case "idle" /* IDLE */:
        return document.getElementById("idle-view");
      case "focusSession" /* FOCUS_SESSION */:
        return document.getElementById("focus-session-view");
      case "reward" /* REWARD */:
        return document.getElementById("reward-view");
      case "break" /* BREAK */:
        return document.getElementById("break-view");
      default:
        return null;
    }
  }
  function getViewElement(view) {
    switch (view) {
      case "idle" /* IDLE */:
        return getElement("idle-view");
      case "focusSession" /* FOCUS_SESSION */:
        return getElement("focus-session-view");
      case "reward" /* REWARD */:
        return getElement("reward-view");
      case "break" /* BREAK */:
        return getElement("break-view");
    }
  }
  function showViewWithFade(view) {
    const viewElement = getViewElement(view);
    viewElement.classList.remove("hidden");
    viewElement.classList.add("fade-in");
    setTimeout(() => {
      viewElement.classList.remove("fade-in");
    }, 300);
  }
  function sendMessage(message) {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(message, (response) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(response);
        }
      });
    });
  }
  async function requestState() {
    try {
      const response = await sendMessage({ type: "GET_STATE" });
      return response.data || response;
    } catch (error) {
      console.error("Failed to request state:", error);
      throw error;
    }
  }
  async function startSession(duration, taskId, autoCompleteTask) {
    try {
      console.log(`[Popup] sendMessage START_SESSION - payload: ${JSON.stringify({ duration, taskId, autoCompleteTask })}`);
      await sendMessage({
        type: "START_SESSION",
        payload: { duration, taskId, autoCompleteTask }
      });
    } catch (error) {
      console.error("Failed to start session:", error);
      throw error;
    }
  }
  async function upgradeStat(statName) {
    try {
      await sendMessage({
        type: "UPGRADE_STAT",
        payload: { statName }
      });
    } catch (error) {
      console.error("Failed to upgrade stat:", error);
      throw error;
    }
  }
  async function allocateSkillPoint(statName) {
    try {
      await sendMessage({
        type: "ALLOCATE_SKILL_POINT",
        payload: { statName }
      });
    } catch (error) {
      console.error("Failed to allocate skill point:", error);
      throw error;
    }
  }
  async function purchaseCosmetic(type, itemId) {
    try {
      await sendMessage({
        type: "PURCHASE_COSMETIC",
        payload: { type, itemId }
      });
    } catch (error) {
      console.error("Failed to purchase cosmetic:", error);
      throw error;
    }
  }
  async function applyCosmetic(type, itemId) {
    try {
      await sendMessage({
        type: "APPLY_COSMETIC",
        payload: { type, itemId }
      });
    } catch (error) {
      console.error("Failed to apply cosmetic:", error);
      throw error;
    }
  }
  function updateIdleView(state) {
    setText("stat-spirit", state.player.stats.spirit.toString());
    setText("stat-harmony", `${(state.player.stats.harmony * 100).toFixed(0)}%`);
    setText("stat-soulflow", state.player.stats.soulflow.toString());
    setText("stat-level", getRankName(state.player.level));
    setText("soul-embers", formatNumber(state.player.soulEmbers));
    const xpPercentage = state.player.soulInsight / state.player.soulInsightToNextLevel * 100;
    const xpBar = getElement("xp-bar");
    if (state.settings.animationsEnabled) {
      xpBar.style.transition = "width 0.5s ease";
    } else {
      xpBar.style.transition = "none";
    }
    setProgress("xp-bar", xpPercentage);
    setText(
      "xp-text",
      `${formatNumber(state.player.soulInsight)} / ${formatNumber(state.player.soulInsightToNextLevel)}`
    );
    const boss = getCurrentBoss(state);
    if (boss) {
      setText("boss-name", boss.name);
      setText("boss-backstory", boss.backstory);
      const resolvePercentage = state.progression.currentBossResolve / boss.initialResolve * 100;
      const resolveBar = getElement("resolve-bar");
      if (state.settings.animationsEnabled) {
        resolveBar.classList.add("animate");
        setTimeout(() => {
          resolveBar.classList.remove("animate");
        }, 1200);
      }
      setProgress("resolve-bar", resolvePercentage);
      setText(
        "resolve-text",
        `${formatNumber(state.progression.currentBossResolve)} / ${formatNumber(boss.initialResolve)}`
      );
    }
    updateTaskSelector(state);
    const durationInput = getElement("duration-input");
    durationInput.value = state.settings.defaultSessionDuration.toString();
    const autoCompleteCheckbox = getElement("auto-complete-checkbox");
    autoCompleteCheckbox.checked = state.settings.autoCompleteTask;
    autoCompleteCheckbox.disabled = true;
    applyTheme(state.player.cosmetics.activeTheme);
    applySprite(state.player.cosmetics.activeSprite);
  }
  function updateBreakView(state) {
    setText("break-stat-spirit", state.player.stats.spirit.toString());
    setText(
      "break-stat-harmony",
      `${(state.player.stats.harmony * 100).toFixed(0)}%`
    );
    setText("break-stat-soulflow", state.player.stats.soulflow.toString());
    setText("break-stat-level", getRankName(state.player.level));
    setText("break-soul-embers", formatNumber(state.player.soulEmbers));
    setText("skill-points-value", state.player.skillPoints.toString());
    const shouldAnimateSkillPoints = sessionStorage.getItem(
      "pendingSkillPointAnimation"
    );
    if (shouldAnimateSkillPoints === "true" && state.player.skillPoints > 0) {
      const skillPointsElement = getElement("skill-points-value");
      skillPointsElement.classList.add("animate");
      setTimeout(() => {
        skillPointsElement.classList.remove("animate");
      }, 600);
      sessionStorage.removeItem("pendingSkillPointAnimation");
    }
    updateUpgradeButtons(state);
    updateSkillPointButtons(state);
    const boss = getCurrentBoss(state);
    if (boss) {
      setText("break-boss-name", boss.name);
      setText("break-boss-backstory", boss.backstory);
      const resolvePercentage = state.progression.currentBossResolve / boss.initialResolve * 100;
      const resolveBar = getElement("break-resolve-bar");
      if (state.settings.animationsEnabled) {
        resolveBar.classList.add("animate");
        setTimeout(() => {
          resolveBar.classList.remove("animate");
        }, 1200);
      }
      setProgress("break-resolve-bar", resolvePercentage);
      setText(
        "break-resolve-text",
        `${formatNumber(state.progression.currentBossResolve)} / ${formatNumber(boss.initialResolve)}`
      );
    }
    if (state.break) {
      updateBreakTimer(state.break.startTime, state.break.duration);
    }
    updateShop(state);
    applyTheme(state.player.cosmetics.activeTheme);
    applySprite(state.player.cosmetics.activeSprite);
    startContentSoulAnimations(state.player.stats.soulflow);
  }
  function updateUpgradeButtons(state) {
    const spiritCost = calculateUpgradeCost(state.player.stats.spirit);
    const harmonyCost = calculateUpgradeCost(state.player.stats.harmony * 100);
    const soulflowCost = calculateUpgradeCost(state.player.stats.soulflow);
    setText("upgrade-spirit-cost", spiritCost.toString());
    setText("upgrade-harmony-cost", harmonyCost.toString());
    setText("upgrade-soulflow-cost", soulflowCost.toString());
    const spiritBtn = getElement("upgrade-spirit-btn");
    const harmonyBtn = getElement("upgrade-harmony-btn");
    const soulflowBtn = getElement("upgrade-soulflow-btn");
    spiritBtn.disabled = state.player.soulEmbers < spiritCost;
    harmonyBtn.disabled = state.player.soulEmbers < harmonyCost;
    soulflowBtn.disabled = state.player.soulEmbers < soulflowCost;
  }
  function updateSkillPointButtons(state) {
    const allocateSpiritBtn = getElement(
      "allocate-spirit-btn"
    );
    const allocateHarmonyBtn = getElement(
      "allocate-harmony-btn"
    );
    const allocateSoulflowBtn = getElement(
      "allocate-soulflow-btn"
    );
    const hasSkillPoints = state.player.skillPoints > 0;
    allocateSpiritBtn.disabled = !hasSkillPoints;
    allocateHarmonyBtn.disabled = !hasSkillPoints;
    allocateSoulflowBtn.disabled = !hasSkillPoints;
  }
  function updateRewardView(result) {
    const animationsEnabled = currentState?.settings.animationsEnabled ?? true;
    if (animationsEnabled) {
      animateRewardValue("reward-soul-insight", 0, result.soulInsight, 1e3);
      animateRewardValue("reward-soul-embers", 0, result.soulEmbers, 1e3, 100);
      animateRewardValue("reward-boss-damage", 0, result.bossProgress, 1e3, 200);
    } else {
      setText("reward-soul-insight", result.soulInsight.toFixed(0));
      setText("reward-soul-embers", result.soulEmbers.toFixed(0));
      setText("reward-boss-damage", result.bossProgress.toFixed(0));
    }
    if (currentState) {
      setText(
        "reward-boss-resolve",
        currentState.progression.currentBossResolve.toString()
      );
      if (animationsEnabled) {
        animateXPBar(
          currentState.player.soulInsight,
          currentState.player.soulInsightToNextLevel,
          result.soulInsight
        );
      } else {
        const xpPercentage = currentState.player.soulInsight / currentState.player.soulInsightToNextLevel * 100;
        setProgress("reward-xp-bar", xpPercentage);
        setText(
          "reward-xp-text",
          `${formatNumber(currentState.player.soulInsight)} / ${formatNumber(currentState.player.soulInsightToNextLevel)}`
        );
      }
    }
    if (result.wasCritical) {
      show("critical-indicator");
      if (animationsEnabled) {
        const criticalEl = getElement("critical-indicator");
        criticalEl.classList.add("animate");
        setTimeout(() => {
          criticalEl.classList.remove("animate");
        }, 1500);
      }
    } else {
      hide("critical-indicator");
    }
    if (result.wasCompromised) {
      show("compromise-warning");
      if (animationsEnabled) {
        const warningEl = getElement("compromise-warning");
        warningEl.classList.add("animate");
        setTimeout(() => {
          warningEl.classList.remove("animate");
        }, 500);
      }
    } else {
      hide("compromise-warning");
    }
    const activeMinutes = Math.floor(result.activeTime / 60);
    const idleMinutes = Math.floor(result.idleTime / 60);
    setText("active-time", `${activeMinutes}m`);
    setText("idle-time", `${idleMinutes}m`);
  }
  function animateRewardValue(elementId, start, end, duration, delay = 0) {
    const element = getElement(elementId);
    element.classList.add("animate");
    setTimeout(() => {
      animateCounter(start, end, duration, (value) => {
        setText(elementId, value.toFixed(0));
      });
      setTimeout(() => {
        element.classList.remove("animate");
      }, duration);
    }, delay);
  }
  function animateXPBar(currentXP, xpToNextLevel, earnedXP) {
    const xpBar = getElement("reward-xp-bar");
    const xpText = getElement("reward-xp-text");
    const startXP = currentXP - earnedXP;
    const startPercentage = Math.max(0, startXP / xpToNextLevel * 100);
    const endPercentage = Math.min(100, currentXP / xpToNextLevel * 100);
    xpBar.style.width = `${startPercentage}%`;
    setText("reward-xp-text", `${startXP.toFixed(0)} / ${xpToNextLevel}`);
    xpBar.classList.remove("animate");
    void xpBar.offsetWidth;
    setTimeout(() => {
      xpBar.style.width = `${endPercentage}%`;
      animateCounter(startXP, currentXP, 1500, (value) => {
        setText("reward-xp-text", `${value.toFixed(0)} / ${xpToNextLevel}`);
      });
    }, 100);
  }
  function animateCounter(start, end, duration, callback) {
    const startTime = Date.now();
    const difference = end - start;
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = start + difference * easeOutQuart;
      callback(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        callback(end);
      }
    };
    requestAnimationFrame(step);
  }
  function updateTaskSelector(state) {
    const selector = getElement("task-selector");
    selector.innerHTML = '<option value="">Select a task...</option>';
    state.tasks.goals.forEach((goal) => {
      goal.tasks.forEach((task) => {
        if (!task.isComplete) {
          const option = document.createElement("option");
          option.value = task.id;
          option.textContent = `${goal.name} - ${task.name}`;
          selector.appendChild(option);
          task.subtasks.forEach((subtask) => {
            if (!subtask.isComplete) {
              const subOption = document.createElement("option");
              subOption.value = subtask.id;
              subOption.textContent = `  \u2514\u2500 ${subtask.name}`;
              selector.appendChild(subOption);
            }
          });
        }
      });
    });
  }
  function updateBreakTimer(startTime, duration) {
    const updateTimer = () => {
      const elapsed = Date.now() - startTime;
      const remaining = duration * 60 * 1e3 - elapsed;
      if (remaining <= 0) {
        setText("break-countdown", "0:00");
        return;
      }
      const minutes = Math.floor(remaining / 6e4);
      const seconds = Math.floor(remaining % 6e4 / 1e3);
      setText(
        "break-countdown",
        `${minutes}:${seconds.toString().padStart(2, "0")}`
      );
      setTimeout(updateTimer, 1e3);
    };
    updateTimer();
  }
  function updateFocusSessionTimer(startTime, duration, showTimer) {
    const timeRemainingElement = getElement("time-remaining");
    if (!showTimer) {
      timeRemainingElement.style.display = "none";
      return;
    }
    timeRemainingElement.style.display = "block";
    const updateTimer = () => {
      const elapsed = Date.now() - startTime;
      const remaining = duration * 60 * 1e3 - elapsed;
      if (remaining <= 0) {
        setText("time-remaining", "");
        return;
      }
      const minutes = Math.floor(remaining / 6e4);
      const seconds = Math.floor(remaining % 6e4 / 1e3);
      setText(
        "time-remaining",
        `${minutes}:${seconds.toString().padStart(2, "0")}`
      );
      setTimeout(updateTimer, 1e3);
    };
    updateTimer();
  }
  function getCurrentBoss(state) {
    return STUBBORN_SOULS[state.progression.currentBossIndex];
  }
  function calculateUpgradeCost(currentStatValue) {
    return Math.floor(
      FORMULAS.STAT_UPGRADE_BASE_COST * Math.pow(FORMULAS.STAT_UPGRADE_COST_MULTIPLIER, currentStatValue)
    );
  }
  function updateShop(state) {
    Promise.resolve().then(() => (init_constants(), constants_exports)).then(({ COSMETIC_THEMES: COSMETIC_THEMES2, COSMETIC_SPRITES: COSMETIC_SPRITES2 }) => {
      renderThemesList(state, COSMETIC_THEMES2);
      renderSpritesList(state, COSMETIC_SPRITES2);
    });
  }
  function renderThemesList(state, themes) {
    const themesList = getElement("themes-list");
    themesList.innerHTML = "";
    themes.forEach((theme) => {
      const isOwned = state.player.cosmetics.ownedThemes.includes(theme.id);
      const isActive = state.player.cosmetics.activeTheme === theme.id;
      const canAfford = state.player.soulEmbers >= theme.cost;
      const itemDiv = document.createElement("div");
      itemDiv.className = `cosmetic-item ${isOwned ? "owned" : ""} ${isActive ? "active" : ""}`;
      const previewDiv = document.createElement("div");
      previewDiv.className = "theme-preview";
      previewDiv.style.background = theme.colors.backgroundGradient;
      const contentDiv = document.createElement("div");
      contentDiv.className = "cosmetic-item-with-preview";
      const infoDiv = document.createElement("div");
      infoDiv.className = "cosmetic-info";
      const nameDiv = document.createElement("div");
      nameDiv.className = "cosmetic-name";
      nameDiv.textContent = theme.name;
      const descDiv = document.createElement("div");
      descDiv.className = "cosmetic-description";
      descDiv.textContent = theme.description;
      infoDiv.appendChild(nameDiv);
      infoDiv.appendChild(descDiv);
      if (isActive) {
        const statusDiv = document.createElement("div");
        statusDiv.className = "cosmetic-status";
        statusDiv.textContent = "Active";
        infoDiv.appendChild(statusDiv);
      } else if (isOwned) {
        const statusDiv = document.createElement("div");
        statusDiv.className = "cosmetic-status";
        statusDiv.textContent = "Owned";
        infoDiv.appendChild(statusDiv);
      }
      contentDiv.appendChild(previewDiv);
      contentDiv.appendChild(infoDiv);
      const actionsDiv = document.createElement("div");
      actionsDiv.className = "cosmetic-actions";
      if (!isOwned && theme.cost > 0) {
        const costDiv = document.createElement("div");
        costDiv.className = "cosmetic-cost";
        costDiv.textContent = `${theme.cost} Embers`;
        actionsDiv.appendChild(costDiv);
        const purchaseBtn = document.createElement("button");
        purchaseBtn.className = "cosmetic-button purchase";
        purchaseBtn.textContent = "Purchase";
        purchaseBtn.disabled = !canAfford;
        purchaseBtn.addEventListener("click", async () => {
          try {
            await purchaseCosmetic("theme", theme.id);
          } catch (error) {
            alert(error.message || "Failed to purchase theme");
          }
        });
        actionsDiv.appendChild(purchaseBtn);
      } else if (isOwned && !isActive) {
        const applyBtn = document.createElement("button");
        applyBtn.className = "cosmetic-button apply";
        applyBtn.textContent = "Apply";
        applyBtn.addEventListener("click", async () => {
          try {
            await applyCosmetic("theme", theme.id);
          } catch (error) {
            alert(error.message || "Failed to apply theme");
          }
        });
        actionsDiv.appendChild(applyBtn);
      }
      itemDiv.appendChild(contentDiv);
      itemDiv.appendChild(actionsDiv);
      themesList.appendChild(itemDiv);
    });
  }
  function renderSpritesList(state, sprites) {
    const spritesList = getElement("sprites-list");
    spritesList.innerHTML = "";
    sprites.forEach((sprite) => {
      const isOwned = state.player.cosmetics.ownedSprites.includes(sprite.id);
      const isActive = state.player.cosmetics.activeSprite === sprite.id;
      const canAfford = state.player.soulEmbers >= sprite.cost;
      const itemDiv = document.createElement("div");
      itemDiv.className = `cosmetic-item ${isOwned ? "owned" : ""} ${isActive ? "active" : ""}`;
      const infoDiv = document.createElement("div");
      infoDiv.className = "cosmetic-info";
      const nameDiv = document.createElement("div");
      nameDiv.className = "cosmetic-name";
      nameDiv.textContent = sprite.name;
      const descDiv = document.createElement("div");
      descDiv.className = "cosmetic-description";
      descDiv.textContent = sprite.description;
      infoDiv.appendChild(nameDiv);
      infoDiv.appendChild(descDiv);
      if (isActive) {
        const statusDiv = document.createElement("div");
        statusDiv.className = "cosmetic-status";
        statusDiv.textContent = "Active";
        infoDiv.appendChild(statusDiv);
      } else if (isOwned) {
        const statusDiv = document.createElement("div");
        statusDiv.className = "cosmetic-status";
        statusDiv.textContent = "Owned";
        infoDiv.appendChild(statusDiv);
      }
      const actionsDiv = document.createElement("div");
      actionsDiv.className = "cosmetic-actions";
      if (!isOwned && sprite.cost > 0) {
        const costDiv = document.createElement("div");
        costDiv.className = "cosmetic-cost";
        costDiv.textContent = `${sprite.cost} Embers`;
        actionsDiv.appendChild(costDiv);
        const purchaseBtn = document.createElement("button");
        purchaseBtn.className = "cosmetic-button purchase";
        purchaseBtn.textContent = "Purchase";
        purchaseBtn.disabled = !canAfford;
        purchaseBtn.addEventListener("click", async () => {
          try {
            await purchaseCosmetic("sprite", sprite.id);
          } catch (error) {
            alert(error.message || "Failed to purchase sprite");
          }
        });
        actionsDiv.appendChild(purchaseBtn);
      } else if (isOwned && !isActive) {
        const applyBtn = document.createElement("button");
        applyBtn.className = "cosmetic-button apply";
        applyBtn.textContent = "Apply";
        applyBtn.addEventListener("click", async () => {
          try {
            await applyCosmetic("sprite", sprite.id);
          } catch (error) {
            alert(error.message || "Failed to apply sprite");
          }
        });
        actionsDiv.appendChild(applyBtn);
      }
      itemDiv.appendChild(infoDiv);
      itemDiv.appendChild(actionsDiv);
      spritesList.appendChild(itemDiv);
    });
  }
  function applyTheme(themeId) {
    Promise.resolve().then(() => (init_constants(), constants_exports)).then(({ COSMETIC_THEMES: COSMETIC_THEMES2 }) => {
      const theme = COSMETIC_THEMES2.find((t) => t.id === themeId);
      if (!theme) return;
      document.documentElement.style.setProperty(
        "--theme-primary",
        theme.colors.primary
      );
      document.documentElement.style.setProperty(
        "--theme-secondary",
        theme.colors.secondary
      );
      document.documentElement.style.setProperty(
        "--theme-accent",
        theme.colors.accent
      );
      document.documentElement.style.setProperty(
        "--theme-background",
        theme.colors.background
      );
      document.body.style.background = theme.colors.backgroundGradient;
    });
  }
  function applySprite(spriteId) {
    Promise.resolve().then(() => (init_constants(), constants_exports)).then(({ COSMETIC_SPRITES: COSMETIC_SPRITES2 }) => {
      const sprite = COSMETIC_SPRITES2.find((s) => s.id === spriteId);
      if (!sprite) return;
      const idleSprite = document.getElementById(
        "character-sprite"
      );
      const breakSprite = document.getElementById(
        "break-character-sprite"
      );
      if (idleSprite) {
        idleSprite.src = sprite.imagePath;
      }
      if (breakSprite) {
        breakSprite.src = sprite.imagePath;
      }
    });
  }
  function openBossDetails(bossId) {
    const url = chrome.runtime.getURL(`options.html?tab=guided-souls&boss=${bossId}`);
    chrome.tabs.create({ url });
  }
  function setupEventHandlers() {
    const bossInfoBtn = getElement("boss-info-btn");
    bossInfoBtn.addEventListener("click", () => {
      if (currentState) {
        const bossId = currentState.progression.currentBossIndex;
        openBossDetails(bossId);
      }
    });
    const breakBossInfoBtn = getElement("break-boss-info-btn");
    breakBossInfoBtn.addEventListener("click", () => {
      if (currentState) {
        const bossId = currentState.progression.currentBossIndex;
        openBossDetails(bossId);
      }
    });
    const taskSelector = getElement("task-selector");
    const autoCompleteCheckbox = getElement("auto-complete-checkbox");
    taskSelector.addEventListener("change", () => {
      if (!currentState) return;
      const durationInput = getElement("duration-input");
      const selectedTaskId = taskSelector.value;
      if (!selectedTaskId) {
        durationInput.value = currentState.settings.defaultSessionDuration.toString();
        autoCompleteCheckbox.disabled = true;
        autoCompleteCheckbox.checked = false;
        return;
      }
      autoCompleteCheckbox.disabled = false;
      let foundDuration = null;
      for (const goal of currentState.tasks.goals) {
        for (const task of goal.tasks) {
          if (task.id === selectedTaskId) {
            const incompleteDuration = task.subtasks.filter((subtask2) => !subtask2.isComplete).reduce((sum, subtask2) => sum + subtask2.estimatedDuration, 0);
            foundDuration = incompleteDuration > 0 ? incompleteDuration : currentState.settings.defaultSessionDuration;
            break;
          }
          const subtask = task.subtasks.find((s) => s.id === selectedTaskId);
          if (subtask) {
            foundDuration = subtask.estimatedDuration;
            break;
          }
        }
        if (foundDuration !== null) break;
      }
      if (foundDuration !== null) {
        durationInput.value = foundDuration.toString();
      }
    });
    const openOptionsBtn = getElement("open-options-btn");
    openOptionsBtn.addEventListener("click", () => {
      chrome.runtime.openOptionsPage();
    });
    const startSessionBtn = getElement("start-session-btn");
    startSessionBtn.addEventListener("click", async () => {
      const durationInput = getElement("duration-input");
      const taskSelector2 = getElement("task-selector");
      const autoCompleteCheckbox2 = getElement("auto-complete-checkbox");
      const duration = parseInt(durationInput.value, 10);
      const taskId = taskSelector2.value;
      const autoCompleteTask = autoCompleteCheckbox2.checked;
      console.log(`[Popup] Starting session - duration: ${duration}, taskId: ${taskId}, autoCompleteTask: ${autoCompleteTask}, checkbox.checked: ${autoCompleteCheckbox2.checked}, checkbox.disabled: ${autoCompleteCheckbox2.disabled}`);
      if (duration < 5 || duration > 120) {
        alert("Duration must be between 5 and 120 minutes");
        return;
      }
      try {
        await startSession(duration, taskId, autoCompleteTask);
      } catch (error) {
        console.error("Failed to start session:", error);
        alert("Failed to start session. Please try again.");
      }
    });
    const continueBreakBtn = getElement("continue-break-btn");
    continueBreakBtn.addEventListener("click", () => {
      if (currentState) {
        switchView("break" /* BREAK */);
        updateBreakView(currentState);
      }
    });
    const startNextSessionBtn = getElement(
      "start-next-session-btn"
    );
    startNextSessionBtn.addEventListener("click", () => {
      switchView("idle" /* IDLE */);
      if (currentState) {
        updateIdleView(currentState);
      }
    });
    const upgradeSpiritBtn = getElement("upgrade-spirit-btn");
    upgradeSpiritBtn.addEventListener("click", async () => {
      try {
        await upgradeStat("spirit");
      } catch (error) {
        console.error("Failed to upgrade spirit:", error);
        alert("Failed to upgrade stat. Please try again.");
      }
    });
    const upgradeHarmonyBtn = getElement(
      "upgrade-harmony-btn"
    );
    upgradeHarmonyBtn.addEventListener("click", async () => {
      try {
        await upgradeStat("harmony");
      } catch (error) {
        console.error("Failed to upgrade harmony:", error);
        alert("Failed to upgrade stat. Please try again.");
      }
    });
    const upgradeSoulflowBtn = getElement(
      "upgrade-soulflow-btn"
    );
    upgradeSoulflowBtn.addEventListener("click", async () => {
      try {
        await upgradeStat("soulflow");
      } catch (error) {
        console.error("Failed to upgrade soulflow:", error);
        alert("Failed to upgrade stat. Please try again.");
      }
    });
    const allocateSpiritBtn = getElement(
      "allocate-spirit-btn"
    );
    allocateSpiritBtn.addEventListener("click", async () => {
      try {
        await allocateSkillPoint("spirit");
      } catch (error) {
        console.error("Failed to allocate skill point to spirit:", error);
        alert("Failed to allocate skill point. Please try again.");
      }
    });
    const allocateHarmonyBtn = getElement(
      "allocate-harmony-btn"
    );
    allocateHarmonyBtn.addEventListener("click", async () => {
      try {
        await allocateSkillPoint("harmony");
      } catch (error) {
        console.error("Failed to allocate skill point to harmony:", error);
        alert("Failed to allocate skill point. Please try again.");
      }
    });
    const allocateSoulflowBtn = getElement(
      "allocate-soulflow-btn"
    );
    allocateSoulflowBtn.addEventListener("click", async () => {
      try {
        await allocateSkillPoint("soulflow");
      } catch (error) {
        console.error("Failed to allocate skill point to soulflow:", error);
        alert("Failed to allocate skill point. Please try again.");
      }
    });
    const themesTab = getElement("themes-tab");
    const spritesTab = getElement("sprites-tab");
    const themesShop = getElement("themes-shop");
    const spritesShop = getElement("sprites-shop");
    themesTab.addEventListener("click", () => {
      themesTab.classList.add("active");
      spritesTab.classList.remove("active");
      themesShop.classList.remove("hidden");
      spritesShop.classList.add("hidden");
    });
    spritesTab.addEventListener("click", () => {
      spritesTab.classList.add("active");
      themesTab.classList.remove("active");
      spritesShop.classList.remove("hidden");
      themesShop.classList.add("hidden");
    });
  }
  function setupMessageListeners() {
    chrome.runtime.onMessage.addListener(
      (message, sender, sendResponse) => {
        switch (message.type) {
          case "STATE_UPDATE":
            currentState = message.payload.state;
            if (currentState) {
              handleStateUpdate(currentState);
            }
            break;
          case "SESSION_STARTED":
            const session = message.payload;
            switchView("focusSession" /* FOCUS_SESSION */);
            if (session && currentState) {
              updateFocusSessionTimer(
                session.startTime,
                session.duration,
                currentState.settings.showSessionTimer
              );
            }
            break;
          case "SESSION_ENDED":
            const result = message.payload.result;
            switchView("reward" /* REWARD */);
            updateRewardView(result);
            if (message.payload.leveledUp) {
              console.log(
                `Level up! New level: ${message.payload.newLevel}, Skill points: ${message.payload.skillPointsGranted}`
              );
              if (message.payload.skillPointsGranted > 0) {
                sessionStorage.setItem("pendingSkillPointAnimation", "true");
              }
            }
            if (message.payload.bossDefeated) {
              console.log("Boss defeated!", message.payload.nextBoss);
              showBossDefeatedNotification(message.payload.nextBoss);
            }
            break;
          case "BREAK_STARTED":
            break;
          case "BREAK_ENDED":
            handleBreakEnded(message.payload.autoStartEnabled);
            break;
          case "LEVEL_UP":
            showLevelUpNotification(
              message.payload.newLevel,
              message.payload.skillPointsGranted,
              message.payload.unlockedBoss
            );
            break;
          case "IDLE_SOULS_COLLECTED":
            if (currentState && message.payload.embersEarned > 0) {
              currentState.player.soulEmbers += message.payload.embersEarned;
              if (currentView === "break" /* BREAK */) {
                setText(
                  "break-soul-embers",
                  formatNumber(currentState.player.soulEmbers)
                );
                showEmbersIncrement(message.payload.embersEarned);
              }
            }
            break;
        }
      }
    );
  }
  function handleStateUpdate(state) {
    if (state.session?.isActive) {
      if (currentView !== "focusSession" /* FOCUS_SESSION */) {
        switchView("focusSession" /* FOCUS_SESSION */);
        updateFocusSessionTimer(
          state.session.startTime,
          state.session.duration,
          state.settings.showSessionTimer
        );
      }
    } else if (state.break?.isActive) {
      if (currentView !== "break" /* BREAK */ && currentView !== "reward" /* REWARD */) {
        switchView("break" /* BREAK */);
        updateBreakView(state);
      } else if (currentView === "break" /* BREAK */) {
        updateBreakView(state);
      }
    } else {
      if (currentView !== "idle" /* IDLE */) {
        switchView("idle" /* IDLE */);
        updateIdleView(state);
      } else {
        updateIdleView(state);
      }
    }
  }
  function handleBreakEnded(autoStartEnabled) {
    console.log("Break ended, autoStartEnabled:", autoStartEnabled);
    if (currentState) {
      switchView("idle" /* IDLE */);
      updateIdleView(currentState);
    }
    if (autoStartEnabled) {
      showAutoStartPrompt();
    }
  }
  function showAutoStartPrompt() {
    const promptOverlay = document.createElement("div");
    promptOverlay.id = "auto-start-prompt";
    promptOverlay.className = "auto-start-prompt";
    promptOverlay.innerHTML = `
    <div class="auto-start-content">
      <h3>Ready for your next session?</h3>
      <p>Your break is complete. Start another focus session to continue guiding souls.</p>
      <div class="auto-start-buttons">
        <button id="auto-start-yes" class="btn btn-primary">Start Session</button>
        <button id="auto-start-no" class="btn btn-secondary">Not Yet</button>
      </div>
    </div>
  `;
    document.body.appendChild(promptOverlay);
    const yesBtn = document.getElementById("auto-start-yes");
    const noBtn = document.getElementById("auto-start-no");
    if (yesBtn) {
      yesBtn.addEventListener("click", () => {
        document.body.removeChild(promptOverlay);
        const startBtn = getElement("start-session-btn");
        startBtn.focus();
      });
    }
    if (noBtn) {
      noBtn.addEventListener("click", () => {
        document.body.removeChild(promptOverlay);
      });
    }
  }
  function showLevelUpNotification(newLevel, skillPointsGranted, unlockedBoss) {
    const levelUpOverlay = document.createElement("div");
    levelUpOverlay.id = "level-up-overlay";
    levelUpOverlay.className = "level-up-overlay";
    let content = `
    <div class="level-up-content">
      <div class="level-up-icon">\u2B50</div>
      <h2>Level Up!</h2>
      <p class="level-up-message">You have reached level ${newLevel}</p>
      <div class="level-up-rewards">
        <p class="skill-points-granted">+${skillPointsGranted} Skill Point${skillPointsGranted > 1 ? "s" : ""}</p>
        <p class="skill-points-hint">Allocate your skill points during your break to enhance your stats.</p>
      </div>
  `;
    if (unlockedBoss) {
      content += `
      <div class="boss-unlocked">
        <h3>New Soul Unlocked!</h3>
        <div class="unlocked-boss-card">
          <h4>${unlockedBoss.name}</h4>
          <p class="unlocked-boss-backstory">${unlockedBoss.backstory}</p>
          <p class="unlocked-boss-resolve">Resolve: ${unlockedBoss.initialResolve}</p>
        </div>
      </div>
    `;
    }
    content += `
      <button id="level-up-continue" class="btn btn-primary">Continue</button>
    </div>
  `;
    levelUpOverlay.innerHTML = content;
    document.body.appendChild(levelUpOverlay);
    setTimeout(() => {
      levelUpOverlay.classList.add("show");
    }, 50);
    const continueBtn = document.getElementById("level-up-continue");
    if (continueBtn) {
      continueBtn.addEventListener("click", () => {
        levelUpOverlay.classList.remove("show");
        setTimeout(() => {
          document.body.removeChild(levelUpOverlay);
        }, 300);
      });
    }
  }
  function showBossDefeatedNotification(nextBoss) {
    const defeatOverlay = document.createElement("div");
    defeatOverlay.id = "boss-defeat-overlay";
    defeatOverlay.className = "boss-defeat-overlay";
    let content = "";
    if (nextBoss) {
      const playerLevel = currentState?.player.level || 1;
      const isLocked = playerLevel < nextBoss.unlockLevel;
      if (isLocked) {
        content = `
        <div class="boss-defeat-content">
          <div class="boss-defeat-icon">\u{1F512}</div>
          <h2>Stubborn Soul Guided!</h2>
          <p class="boss-defeat-message">The soul has found peace and moved on.</p>
          <div class="next-boss-locked">
            <h3>Next Soul: ${nextBoss.name}</h3>
            <p class="lock-message">Boss locked until level ${nextBoss.unlockLevel}</p>
            <p class="lock-hint">You are level ${playerLevel}. Keep completing sessions to level up!</p>
          </div>
          <button id="boss-defeat-continue" class="btn btn-primary">Continue</button>
        </div>
      `;
      } else {
        content = `
        <div class="boss-defeat-content">
          <div class="boss-defeat-icon">\u2728</div>
          <h2>Stubborn Soul Guided!</h2>
          <p class="boss-defeat-message">The soul has found peace and moved on.</p>
          <div class="next-boss-unlocked">
            <h3>Next Soul Awaits</h3>
            <div class="next-boss-card">
              <h4>${nextBoss.name}</h4>
              <p class="next-boss-backstory">${nextBoss.backstory}</p>
              <p class="next-boss-resolve">Resolve: ${nextBoss.initialResolve}</p>
            </div>
          </div>
          <button id="boss-defeat-continue" class="btn btn-primary">Continue</button>
        </div>
      `;
      }
    } else {
      content = `
      <div class="boss-defeat-content">
        <div class="boss-defeat-icon">\u{1F389}</div>
        <h2>Campaign Complete!</h2>
        <p class="boss-defeat-message">You have guided all the Stubborn Souls to peace.</p>
        <p class="campaign-complete-message">The Soul Shepherd's work is never truly done. Continue your focus sessions to grow stronger and collect more souls.</p>
        <button id="boss-defeat-continue" class="btn btn-primary">Continue</button>
      </div>
    `;
    }
    defeatOverlay.innerHTML = content;
    document.body.appendChild(defeatOverlay);
    setTimeout(() => {
      defeatOverlay.classList.add("show");
    }, 50);
    const continueBtn = document.getElementById("boss-defeat-continue");
    if (continueBtn) {
      continueBtn.addEventListener("click", () => {
        defeatOverlay.classList.remove("show");
        setTimeout(() => {
          document.body.removeChild(defeatOverlay);
        }, 300);
      });
    }
  }
  var soulAnimationInterval = null;
  var idleCollectionInterval = null;
  function startContentSoulAnimations(soulflow) {
    stopContentSoulAnimations();
    if (!currentState || !currentState.settings.animationsEnabled) {
      showIdleCollectionCounter();
      return;
    }
    hideIdleCollectionCounter();
    const baseInterval = 3e3;
    const spawnInterval = Math.max(1e3, baseInterval / (1 + soulflow * 0.5));
    soulAnimationInterval = window.setInterval(() => {
      spawnContentSoul();
    }, spawnInterval);
    startIdleCollectionCheck();
  }
  function stopContentSoulAnimations() {
    if (soulAnimationInterval !== null) {
      clearInterval(soulAnimationInterval);
      soulAnimationInterval = null;
    }
    if (idleCollectionInterval !== null) {
      clearInterval(idleCollectionInterval);
      idleCollectionInterval = null;
    }
    const container = document.getElementById("content-souls-container");
    if (container) {
      container.innerHTML = "";
    }
    hideIdleCollectionCounter();
  }
  function spawnContentSoul() {
    const container = document.getElementById("content-souls-container");
    if (!container) return;
    const soul = document.createElement("div");
    soul.className = "content-soul";
    const soulImage = document.createElement("img");
    soulImage.src = Math.random() < 0.5 ? "assets/icons/soul_ember.png" : "assets/icons/soul_insight.png";
    soulImage.alt = "";
    soulImage.style.width = "100%";
    soulImage.style.height = "100%";
    soul.appendChild(soulImage);
    const randomX = Math.random() * (400 - 32);
    soul.style.left = `${randomX}px`;
    soul.style.bottom = "0px";
    const drift = (Math.random() - 0.5) * 100;
    soul.style.setProperty("--drift", `${drift}px`);
    container.appendChild(soul);
    setTimeout(() => {
      soul.classList.add("floating");
    }, 50);
    setTimeout(() => {
      collectSoul(soul);
    }, 8e3);
  }
  function collectSoul(soulElement) {
    soulElement.classList.remove("floating");
    soulElement.classList.add("collecting");
    const embersEarned = 5;
    showEmbersIncrement(embersEarned);
    setTimeout(() => {
      soulElement.remove();
    }, 500);
  }
  function showEmbersIncrement(amount) {
    const incrementEl = document.getElementById("embers-increment");
    if (!incrementEl) return;
    incrementEl.textContent = `+${amount} Soul Embers`;
    incrementEl.classList.remove("show");
    void incrementEl.offsetWidth;
    incrementEl.classList.add("show");
    setTimeout(() => {
      incrementEl.classList.remove("show");
    }, 1e3);
  }
  function startIdleCollectionCheck() {
    idleCollectionInterval = window.setInterval(async () => {
      if (currentState && currentState.break?.isActive) {
        try {
          await sendMessage({ type: "COLLECT_IDLE_SOULS" });
        } catch (error) {
          console.error("Failed to collect idle souls:", error);
        }
      }
    }, 3e4);
  }
  function showIdleCollectionCounter() {
    const counter = document.getElementById("idle-collection-counter");
    if (counter && currentState) {
      counter.style.display = "flex";
      updateIdleCollectionCounter();
      idleCollectionInterval = window.setInterval(() => {
        updateIdleCollectionCounter();
      }, 5e3);
    }
  }
  function hideIdleCollectionCounter() {
    const counter = document.getElementById("idle-collection-counter");
    if (counter) {
      counter.style.display = "none";
    }
  }
  function updateIdleCollectionCounter() {
    if (!currentState) return;
    const counterValue = document.getElementById("idle-counter-value");
    if (counterValue) {
      const now = Date.now();
      const lastCollection = currentState.progression.idleState.lastCollectionTime;
      const elapsedMinutes = (now - lastCollection) / (1e3 * 60);
      const soulflow = currentState.player.stats.soulflow;
      const rate = 1 / 5 * (1 + soulflow * 0.1);
      const accumulatedSouls = Math.floor(elapsedMinutes * rate);
      counterValue.textContent = accumulatedSouls.toString();
    }
  }
  async function checkForMissedTimers(state) {
    const now = Date.now();
    let hasTimerError = false;
    let errorMessage = "";
    try {
      if (state.session?.isActive) {
        const sessionEndTime = state.session.startTime + state.session.duration * 60 * 1e3;
        const missedTime = now - sessionEndTime;
        if (missedTime > 0) {
          const missedMinutes = Math.floor(missedTime / (1e3 * 60));
          if (missedMinutes > 0) {
            hasTimerError = true;
            errorMessage = `Session timer was delayed by ${missedMinutes} minute${missedMinutes > 1 ? "s" : ""}. Applying rewards now.`;
            console.warn(
              `[Popup] Timer error detected: Session should have ended ${missedMinutes} minutes ago`
            );
            console.warn(
              `[Popup] Session start: ${new Date(
                state.session.startTime
              ).toISOString()}, Duration: ${state.session.duration}m, Expected end: ${new Date(sessionEndTime).toISOString()}`
            );
            await sendMessage({
              type: "END_SESSION_RETROACTIVE",
              payload: {
                actualEndTime: sessionEndTime,
                detectedAt: now
              }
            });
          }
        }
      }
      if (state.break?.isActive) {
        const breakEndTime = state.break.startTime + state.break.duration * 60 * 1e3;
        const missedTime = now - breakEndTime;
        if (missedTime > 0) {
          const missedMinutes = Math.floor(missedTime / (1e3 * 60));
          if (missedMinutes > 0) {
            hasTimerError = true;
            errorMessage = `Break timer was delayed by ${missedMinutes} minute${missedMinutes > 1 ? "s" : ""}. Ending break now.`;
            console.warn(
              `[Popup] Timer error detected: Break should have ended ${missedMinutes} minutes ago`
            );
            console.warn(
              `[Popup] Break start: ${new Date(
                state.break.startTime
              ).toISOString()}, Duration: ${state.break.duration}m, Expected end: ${new Date(breakEndTime).toISOString()}`
            );
            await sendMessage({
              type: "END_BREAK_RETROACTIVE",
              payload: {
                actualEndTime: breakEndTime,
                detectedAt: now
              }
            });
          }
        }
      }
      if (hasTimerError && errorMessage) {
        showTimerErrorNotification(errorMessage);
      }
    } catch (error) {
      console.error("[Popup] Error checking for missed timers:", error);
    }
  }
  function showTimerErrorNotification(message) {
    const notification = document.createElement("div");
    notification.className = "timer-error-notification";
    notification.innerHTML = `
    <div class="timer-error-content">
      <div class="timer-error-icon">\u26A0\uFE0F</div>
      <p class="timer-error-message">${message}</p>
      <button id="timer-error-dismiss" class="btn btn-secondary">Dismiss</button>
    </div>
  `;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.classList.add("show");
    }, 50);
    const dismissBtn = document.getElementById("timer-error-dismiss");
    if (dismissBtn) {
      dismissBtn.addEventListener("click", () => {
        notification.classList.remove("show");
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      });
    }
    setTimeout(() => {
      if (document.body.contains(notification)) {
        notification.classList.remove("show");
        setTimeout(() => {
          if (document.body.contains(notification)) {
            document.body.removeChild(notification);
          }
        }, 300);
      }
    }, 1e4);
  }
  async function initialize() {
    try {
      currentState = await requestState();
      await checkForMissedTimers(currentState);
      setupEventHandlers();
      setupMessageListeners();
      handleStateUpdate(currentState);
    } catch (error) {
      console.error("Failed to initialize popup:", error);
      setText("idle-view", "Failed to load. Please try reopening the popup.");
    }
  }
  document.addEventListener("DOMContentLoaded", initialize);
})();
