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

  // src/RewardCalculator.ts
  var RewardCalculator_exports = {};
  __export(RewardCalculator_exports, {
    RewardCalculator: () => RewardCalculator
  });
  var RewardCalculator;
  var init_RewardCalculator = __esm({
    "src/RewardCalculator.ts"() {
      "use strict";
      init_constants();
      RewardCalculator = class {
        /**
         * Calculate rewards for a completed session
         * @param session Session state with timing information
         * @param stats Player stats (spirit, harmony, soulflow)
         * @returns Session result with calculated rewards
         */
        calculateRewards(session, stats) {
          const elapsedMs = Date.now() - session.startTime;
          const totalMinutes = elapsedMs / (1e3 * 60);
          const activeMinutes = totalMinutes - session.idleTime / 60;
          const effectiveDuration = Math.min(session.duration, activeMinutes);
          const baseSoulInsight = effectiveDuration * FORMULAS.SOUL_INSIGHT_BASE_MULTIPLIER * (1 + stats.spirit * FORMULAS.SOUL_INSIGHT_SPIRIT_BONUS);
          const baseSoulEmbers = effectiveDuration * FORMULAS.SOUL_EMBERS_BASE_MULTIPLIER * (1 + stats.soulflow * FORMULAS.SOUL_EMBERS_SOULFLOW_BONUS);
          const wasCritical = this.checkCritical(stats.harmony);
          let finalSoulInsight = baseSoulInsight;
          let finalSoulEmbers = baseSoulEmbers;
          if (wasCritical) {
            finalSoulInsight *= FORMULAS.CRITICAL_HIT_MULTIPLIER;
            finalSoulEmbers *= FORMULAS.CRITICAL_HIT_MULTIPLIER;
            console.log(
              "[RewardCalculator] Critical hit! Rewards multiplied by 1.5x"
            );
          }
          if (session.isCompromised) {
            finalSoulInsight = this.applyCompromisePenalty(finalSoulInsight);
            finalSoulEmbers = this.applyCompromisePenalty(finalSoulEmbers);
            console.log(
              "[RewardCalculator] Session compromised. Rewards reduced by 30%"
            );
          }
          const bossProgress = stats.spirit * effectiveDuration * FORMULAS.BOSS_DAMAGE_MULTIPLIER;
          const result = {
            soulInsight: Math.round(finalSoulInsight * 100) / 100,
            soulEmbers: Math.round(finalSoulEmbers * 100) / 100,
            bossProgress: Math.round(bossProgress * 100) / 100,
            wasCritical,
            wasCompromised: session.isCompromised,
            idleTime: session.idleTime,
            activeTime: activeMinutes * 60
            // Convert back to seconds
          };
          console.log(
            `[RewardCalculator] Rewards calculated: ${result.soulInsight} Soul Insight, ${result.soulEmbers} Soul Embers, ${result.bossProgress} boss damage`
          );
          return result;
        }
        /**
         * Check if a critical hit occurs based on Harmony stat
         * @param harmony Harmony stat value (represents crit chance)
         * @returns True if critical hit occurs
         */
        checkCritical(harmony) {
          const randomRoll = Math.random();
          return randomRoll < harmony;
        }
        /**
         * Apply compromise penalty to a reward value
         * @param baseReward Base reward amount before penalty
         * @returns Reduced reward amount (70% of original)
         */
        applyCompromisePenalty(baseReward) {
          return baseReward * FORMULAS.COMPROMISE_PENALTY_MULTIPLIER;
        }
      };
    }
  });

  // src/ProgressionManager.ts
  var ProgressionManager_exports = {};
  __export(ProgressionManager_exports, {
    ProgressionManager: () => ProgressionManager
  });
  var ProgressionManager;
  var init_ProgressionManager = __esm({
    "src/ProgressionManager.ts"() {
      "use strict";
      init_constants();
      ProgressionManager = class {
        /**
         * Apply damage to the current boss and check for defeat
         * @param damage - Amount of damage to deal to boss Resolve
         * @param currentState - Current progression state
         * @param playerLevel - Current player level (for unlock checks)
         * @returns BossResult with updated Resolve and defeat status
         */
        damageBoss(damage, currentState, playerLevel) {
          const currentBoss = this.getCurrentBoss(currentState);
          const newResolve = Math.max(0, currentState.currentBossResolve - damage);
          const wasDefeated = newResolve === 0;
          let nextBoss = void 0;
          if (wasDefeated) {
            const nextBossIndex = currentState.currentBossIndex + 1;
            if (nextBossIndex < STUBBORN_SOULS.length) {
              nextBoss = STUBBORN_SOULS[nextBossIndex];
              if (playerLevel < nextBoss.unlockLevel) {
                console.log(
                  `[ProgressionManager] Next boss "${nextBoss.name}" requires level ${nextBoss.unlockLevel}, player is level ${playerLevel}`
                );
              }
            } else {
              console.log(
                "[ProgressionManager] All bosses defeated! Player has completed the campaign."
              );
            }
          }
          return {
            remainingResolve: newResolve,
            wasDefeated,
            nextBoss
          };
        }
        /**
         * Get the current Stubborn Soul boss
         * @param currentState - Current progression state
         * @returns Current StubbornSoul
         */
        getCurrentBoss(currentState) {
          const bossIndex = Math.max(
            0,
            Math.min(currentState.currentBossIndex, STUBBORN_SOULS.length - 1)
          );
          return STUBBORN_SOULS[bossIndex];
        }
        /**
         * Unlock the next boss in the sequence
         * Updates progression state to move to next boss
         * @param currentState - Current progression state
         * @param playerLevel - Current player level (for validation)
         * @returns Updated ProgressionState with next boss
         */
        unlockNextBoss(currentState, playerLevel) {
          const currentBossId = currentState.currentBossIndex;
          const nextBossIndex = currentBossId + 1;
          if (nextBossIndex >= STUBBORN_SOULS.length) {
            console.warn(
              "[ProgressionManager] Cannot unlock next boss - already at final boss"
            );
            return currentState;
          }
          const nextBoss = STUBBORN_SOULS[nextBossIndex];
          if (playerLevel < nextBoss.unlockLevel) {
            console.warn(
              `[ProgressionManager] Cannot unlock boss "${nextBoss.name}" - requires level ${nextBoss.unlockLevel}, player is level ${playerLevel}`
            );
            return currentState;
          }
          const updatedDefeatedBosses = [
            ...currentState.defeatedBosses,
            currentBossId
          ];
          console.log(
            `[ProgressionManager] Unlocking next boss: "${nextBoss.name}" (ID: ${nextBoss.id})`
          );
          return {
            ...currentState,
            currentBossIndex: nextBossIndex,
            currentBossResolve: nextBoss.initialResolve,
            defeatedBosses: updatedDefeatedBosses
          };
        }
        /**
         * Add Soul Insight experience and check for level-up
         * Formula: Level threshold = 100 * (level ^ 1.5)
         * @param soulInsight - Amount of Soul Insight to add
         * @param currentPlayer - Current player state
         * @returns LevelResult with new level and skill points granted
         */
        addExperience(soulInsight, currentPlayer) {
          const newTotalSoulInsight = currentPlayer.soulInsight + soulInsight;
          let currentLevel = currentPlayer.level;
          let skillPointsGranted = 0;
          let leveledUp = false;
          let xpToNextLevel = this.calculateLevelThreshold(currentLevel);
          while (newTotalSoulInsight >= xpToNextLevel) {
            currentLevel++;
            skillPointsGranted += FORMULAS.SKILL_POINTS_PER_LEVEL;
            leveledUp = true;
            console.log(
              `[ProgressionManager] Level up! New level: ${currentLevel}, Skill points granted: ${FORMULAS.SKILL_POINTS_PER_LEVEL}`
            );
            xpToNextLevel = this.calculateLevelThreshold(currentLevel);
          }
          return {
            newLevel: currentLevel,
            leveledUp,
            skillPointsGranted
          };
        }
        /**
         * Calculate the Soul Insight threshold for a given level
         * Formula: 100 * (level ^ 1.5)
         * @param level - Target level
         * @returns Soul Insight required to reach that level
         */
        calculateLevelThreshold(level) {
          return Math.floor(
            FORMULAS.LEVEL_THRESHOLD_BASE * Math.pow(level, FORMULAS.LEVEL_THRESHOLD_EXPONENT)
          );
        }
        /**
         * Grant skill points to the player
         * @param currentSkillPoints - Current skill points
         * @param amount - Number of skill points to grant
         * @returns Updated skill point total
         */
        grantSkillPoints(currentSkillPoints, amount) {
          return currentSkillPoints + amount;
        }
      };
    }
  });

  // src/StateManager.ts
  init_constants();
  var StateManager = class {
    constructor() {
      this.state = null;
      this.STORAGE_KEY = "soulShepherdGameState";
      this.BACKUP_KEY = "soulShepherdGameState_backup";
      this.MAX_RETRIES = 3;
      this.RETRY_DELAY_MS = 100;
    }
    /**
     * Load game state from chrome.storage.local
     * Initializes default state for new users
     * Validates and repairs corrupted state
     */
    async loadState() {
      try {
        const result = await this.retryStorageOperation(
          () => chrome.storage.local.get(this.STORAGE_KEY)
        );
        if (result[this.STORAGE_KEY]) {
          const loadedState = result[this.STORAGE_KEY];
          const migratedState = await this.migrateState(loadedState);
          const validatedState = this.validateAndRepairState(migratedState);
          try {
            const syncResult = await chrome.storage.sync.get(
              "soulShepherdCosmetics"
            );
            if (syncResult.soulShepherdCosmetics) {
              validatedState.player.cosmetics = syncResult.soulShepherdCosmetics;
              console.log("[StateManager] Cosmetics loaded from sync storage");
            }
          } catch (syncError) {
            console.warn(
              "[StateManager] Failed to load cosmetics from sync storage:",
              syncError
            );
          }
          this.state = validatedState;
          console.log("[StateManager] State loaded successfully");
          return validatedState;
        } else {
          console.log(
            "[StateManager] No existing state found, initializing defaults"
          );
          const defaultState = this.createDefaultState();
          this.state = defaultState;
          await this.saveState(defaultState);
          return defaultState;
        }
      } catch (error) {
        console.error("[StateManager] Failed to load state:", error);
        const defaultState = this.createDefaultState();
        this.state = defaultState;
        if (chrome.notifications) {
          chrome.notifications.create({
            type: "basic",
            iconUrl: chrome.runtime.getURL("assets/sprites/sprite_classic_shepherd.png"),
            title: "Soul Shepherd",
            message: "Failed to load saved progress. Starting fresh."
          });
        }
        return defaultState;
      }
    }
    /**
     * Save game state to chrome.storage.local with retry logic
     * Optimized with compression for large states
     */
    async saveState(state) {
      try {
        if (this.state && JSON.stringify(this.state) === JSON.stringify(state)) {
          console.log("[StateManager] State unchanged, skipping save");
          return;
        }
        await this.retryStorageOperation(
          () => chrome.storage.local.set({ [this.STORAGE_KEY]: state })
        );
        this.state = state;
        console.log("[StateManager] State saved successfully");
      } catch (error) {
        console.error(
          "[StateManager] Failed to save state after retries:",
          error
        );
        if (chrome.notifications) {
          chrome.notifications.create({
            type: "basic",
            iconUrl: chrome.runtime.getURL("assets/sprites/sprite_classic_shepherd.png"),
            title: "Soul Shepherd",
            message: "Failed to save progress. Your changes may be lost."
          });
        }
        throw error;
      }
    }
    /**
     * Get current in-memory state
     * Throws if state hasn't been loaded yet
     */
    getState() {
      if (!this.state) {
        throw new Error(
          "[StateManager] State not loaded. Call loadState() first."
        );
      }
      return this.state;
    }
    /**
     * Update state with partial changes and persist
     */
    async updateState(partial) {
      if (!this.state) {
        throw new Error(
          "[StateManager] State not loaded. Call loadState() first."
        );
      }
      const updatedState = {
        ...this.state,
        ...partial
      };
      await this.saveState(updatedState);
    }
    // ============================================================================
    // Private Helper Methods
    // ============================================================================
    /**
     * Create default game state for new users
     */
    createDefaultState() {
      return {
        version: CURRENT_STATE_VERSION,
        player: { ...DEFAULT_PLAYER_STATE },
        session: null,
        break: null,
        progression: { ...DEFAULT_PROGRESSION_STATE },
        tasks: { ...DEFAULT_TASK_STATE },
        settings: { ...DEFAULT_SETTINGS },
        statistics: { ...DEFAULT_STATISTICS }
      };
    }
    /**
     * Migrate state from older versions to current version
     */
    async migrateState(state) {
      const stateVersion = typeof state.version === "number" ? state.version : 0;
      if (stateVersion === CURRENT_STATE_VERSION) {
        console.log(
          "[StateManager] State is current version, no migration needed"
        );
        return state;
      }
      console.log(
        `[StateManager] Migrating state from version ${stateVersion} to ${CURRENT_STATE_VERSION}`
      );
      let migratedState = { ...state };
      if (stateVersion < 1) {
        migratedState = this.migrateToV1(migratedState);
      }
      migratedState.version = CURRENT_STATE_VERSION;
      console.log("[StateManager] Migration complete");
      return migratedState;
    }
    /**
     * Migrate from version 0 (no version field) to version 1
     */
    migrateToV1(state) {
      console.log("[StateManager] Migrating to version 1: Adding version field");
      return {
        version: 1,
        ...state
      };
    }
    /**
     * Backup corrupted state before resetting
     */
    async backupCorruptedState(state) {
      try {
        const backup = {
          timestamp: Date.now(),
          state
        };
        await this.retryStorageOperation(
          () => chrome.storage.local.set({ [this.BACKUP_KEY]: backup })
        );
        console.log("[StateManager] Corrupted state backed up successfully");
      } catch (error) {
        console.error("[StateManager] Failed to backup corrupted state:", error);
      }
    }
    /**
     * Validate state schema and repair missing or corrupted fields
     * If state is unrepairable, backup and reset to defaults
     */
    validateAndRepairState(state) {
      console.log("[StateManager] Validating state...");
      if (!state || typeof state !== "object") {
        console.warn("[StateManager] Invalid state object, using defaults");
        return this.createDefaultState();
      }
      const isCriticallyCorrupted = this.checkCriticalCorruption(state);
      if (isCriticallyCorrupted) {
        console.error(
          "[StateManager] State is critically corrupted, backing up and resetting"
        );
        this.backupCorruptedState(state).catch((error) => {
          console.error("[StateManager] Backup failed:", error);
        });
        if (chrome.notifications) {
          chrome.notifications.create({
            type: "basic",
            iconUrl: chrome.runtime.getURL("assets/sprites/sprite_classic_shepherd.png"),
            title: "Soul Shepherd - Data Reset",
            message: "Your save data was corrupted and has been reset. A backup was created."
          });
        }
        return this.createDefaultState();
      }
      const repairedState = {
        version: typeof state.version === "number" ? state.version : CURRENT_STATE_VERSION,
        player: this.validatePlayerState(state.player),
        session: this.validateSessionState(state.session),
        break: this.validateBreakState(state.break),
        progression: this.validateProgressionState(state.progression),
        tasks: this.validateTaskState(state.tasks),
        settings: this.validateSettingsState(state.settings),
        statistics: this.validateStatisticsState(state.statistics)
      };
      console.log("[StateManager] State validation complete");
      return repairedState;
    }
    /**
     * Check if state has critical corruption that cannot be repaired
     */
    checkCriticalCorruption(state) {
      const hasPlayer = state.player && typeof state.player === "object";
      const hasProgression = state.progression && typeof state.progression === "object";
      const hasSettings = state.settings && typeof state.settings === "object";
      const hasStatistics = state.statistics && typeof state.statistics === "object";
      const validSections = [
        hasPlayer,
        hasProgression,
        hasSettings,
        hasStatistics
      ].filter(Boolean).length;
      if (validSections < 2) {
        console.warn(
          `[StateManager] Only ${validSections}/4 major sections are valid`
        );
        return true;
      }
      if (hasPlayer) {
        const hasValidLevel = typeof state.player.level === "number";
        const hasValidStats = state.player.stats && typeof state.player.stats === "object";
        if (!hasValidLevel || !hasValidStats) {
          console.warn(
            "[StateManager] Player state has corrupted critical fields"
          );
          return true;
        }
      }
      return false;
    }
    /**
     * Validate PlayerState
     */
    validatePlayerState(player) {
      if (!player || typeof player !== "object") {
        return { ...DEFAULT_PLAYER_STATE };
      }
      return {
        level: typeof player.level === "number" ? player.level : 1,
        soulInsight: typeof player.soulInsight === "number" ? player.soulInsight : 0,
        soulInsightToNextLevel: typeof player.soulInsightToNextLevel === "number" ? player.soulInsightToNextLevel : 100,
        soulEmbers: typeof player.soulEmbers === "number" ? player.soulEmbers : 0,
        stats: {
          spirit: player.stats?.spirit && typeof player.stats.spirit === "number" ? player.stats.spirit : 1,
          harmony: player.stats?.harmony && typeof player.stats.harmony === "number" ? player.stats.harmony : 0.05,
          soulflow: player.stats?.soulflow && typeof player.stats.soulflow === "number" ? player.stats.soulflow : 1
        },
        skillPoints: typeof player.skillPoints === "number" ? player.skillPoints : 0,
        cosmetics: {
          ownedThemes: Array.isArray(player.cosmetics?.ownedThemes) ? player.cosmetics.ownedThemes : ["default"],
          ownedSprites: Array.isArray(player.cosmetics?.ownedSprites) ? player.cosmetics.ownedSprites : ["default"],
          activeTheme: typeof player.cosmetics?.activeTheme === "string" ? player.cosmetics.activeTheme : "default",
          activeSprite: typeof player.cosmetics?.activeSprite === "string" ? player.cosmetics.activeSprite : "default"
        }
      };
    }
    /**
     * Validate SessionState (can be null)
     */
    validateSessionState(session) {
      if (!session) return null;
      if (typeof session !== "object") return null;
      return {
        startTime: typeof session.startTime === "number" ? session.startTime : Date.now(),
        duration: typeof session.duration === "number" ? session.duration : 25,
        taskId: typeof session.taskId === "string" ? session.taskId : "",
        autoCompleteTask: typeof session.autoCompleteTask === "boolean" ? session.autoCompleteTask : false,
        isActive: typeof session.isActive === "boolean" ? session.isActive : false,
        isPaused: typeof session.isPaused === "boolean" ? session.isPaused : false,
        isCompromised: typeof session.isCompromised === "boolean" ? session.isCompromised : false,
        idleTime: typeof session.idleTime === "number" ? session.idleTime : 0,
        activeTime: typeof session.activeTime === "number" ? session.activeTime : 0
      };
    }
    /**
     * Validate BreakState (can be null)
     */
    validateBreakState(breakState) {
      if (!breakState) return null;
      if (typeof breakState !== "object") return null;
      return {
        startTime: typeof breakState.startTime === "number" ? breakState.startTime : Date.now(),
        duration: typeof breakState.duration === "number" ? breakState.duration : 5,
        isActive: typeof breakState.isActive === "boolean" ? breakState.isActive : false
      };
    }
    /**
     * Validate ProgressionState
     */
    validateProgressionState(progression) {
      if (!progression || typeof progression !== "object") {
        return { ...DEFAULT_PROGRESSION_STATE };
      }
      const currentBossIndex = typeof progression.currentBossIndex === "number" ? progression.currentBossIndex : 0;
      const validBossIndex = Math.max(
        0,
        Math.min(currentBossIndex, STUBBORN_SOULS.length - 1)
      );
      return {
        currentBossIndex: validBossIndex,
        currentBossResolve: typeof progression.currentBossResolve === "number" ? progression.currentBossResolve : STUBBORN_SOULS[validBossIndex].initialResolve,
        defeatedBosses: Array.isArray(progression.defeatedBosses) ? progression.defeatedBosses : [],
        idleState: {
          lastCollectionTime: progression.idleState?.lastCollectionTime && typeof progression.idleState.lastCollectionTime === "number" ? progression.idleState.lastCollectionTime : Date.now(),
          accumulatedSouls: progression.idleState?.accumulatedSouls && typeof progression.idleState.accumulatedSouls === "number" ? progression.idleState.accumulatedSouls : 0
        }
      };
    }
    /**
     * Validate TaskState
     */
    validateTaskState(tasks) {
      if (!tasks || typeof tasks !== "object") {
        return { ...DEFAULT_TASK_STATE };
      }
      return {
        goals: Array.isArray(tasks.goals) ? tasks.goals : [],
        nextId: typeof tasks.nextId === "number" ? tasks.nextId : 1
      };
    }
    /**
     * Validate SettingsState
     */
    validateSettingsState(settings) {
      if (!settings || typeof settings !== "object") {
        return { ...DEFAULT_SETTINGS };
      }
      return {
        defaultSessionDuration: typeof settings.defaultSessionDuration === "number" ? settings.defaultSessionDuration : 25,
        defaultBreakDuration: typeof settings.defaultBreakDuration === "number" ? settings.defaultBreakDuration : 5,
        autoStartNextSession: typeof settings.autoStartNextSession === "boolean" ? settings.autoStartNextSession : false,
        autoCompleteTask: typeof settings.autoCompleteTask === "boolean" ? settings.autoCompleteTask : false,
        idleThreshold: typeof settings.idleThreshold === "number" ? settings.idleThreshold : 120,
        strictMode: typeof settings.strictMode === "boolean" ? settings.strictMode : false,
        discouragedSites: Array.isArray(settings.discouragedSites) ? settings.discouragedSites : [],
        blockedSites: Array.isArray(settings.blockedSites) ? settings.blockedSites : [],
        animationsEnabled: typeof settings.animationsEnabled === "boolean" ? settings.animationsEnabled : true,
        notificationsEnabled: typeof settings.notificationsEnabled === "boolean" ? settings.notificationsEnabled : true,
        soundVolume: typeof settings.soundVolume === "number" ? settings.soundVolume : 0.5,
        showSessionTimer: typeof settings.showSessionTimer === "boolean" ? settings.showSessionTimer : true
      };
    }
    /**
     * Validate StatisticsState
     */
    validateStatisticsState(statistics) {
      if (!statistics || typeof statistics !== "object") {
        return { ...DEFAULT_STATISTICS };
      }
      return {
        totalSessions: typeof statistics.totalSessions === "number" ? statistics.totalSessions : 0,
        totalFocusTime: typeof statistics.totalFocusTime === "number" ? statistics.totalFocusTime : 0,
        currentStreak: typeof statistics.currentStreak === "number" ? statistics.currentStreak : 0,
        longestStreak: typeof statistics.longestStreak === "number" ? statistics.longestStreak : 0,
        lastSessionDate: typeof statistics.lastSessionDate === "string" ? statistics.lastSessionDate : "",
        bossesDefeated: typeof statistics.bossesDefeated === "number" ? statistics.bossesDefeated : 0,
        totalSoulInsightEarned: typeof statistics.totalSoulInsightEarned === "number" ? statistics.totalSoulInsightEarned : 0,
        totalSoulEmbersEarned: typeof statistics.totalSoulEmbersEarned === "number" ? statistics.totalSoulEmbersEarned : 0,
        totalIdleSoulsCollected: typeof statistics.totalIdleSoulsCollected === "number" ? statistics.totalIdleSoulsCollected : 0
      };
    }
    /**
     * Retry storage operation with exponential backoff
     */
    async retryStorageOperation(operation) {
      let lastError = null;
      for (let attempt = 1; attempt <= this.MAX_RETRIES; attempt++) {
        try {
          return await operation();
        } catch (error) {
          lastError = error;
          console.warn(
            `[StateManager] Storage operation failed (attempt ${attempt}/${this.MAX_RETRIES}):`,
            error
          );
          if (attempt < this.MAX_RETRIES) {
            const delay = this.RETRY_DELAY_MS * Math.pow(2, attempt - 1);
            await this.sleep(delay);
          }
        }
      }
      throw new Error(
        `Storage operation failed after ${this.MAX_RETRIES} attempts: ${lastError?.message}`
      );
    }
    /**
     * Sleep utility for retry delays
     */
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    /**
     * Save cosmetics to sync storage for cross-device availability
     * Uses retry logic and gracefully handles failures
     */
    async saveCosmeticsToSync(cosmetics) {
      try {
        await this.retryStorageOperation(
          () => chrome.storage.sync.set({ soulShepherdCosmetics: cosmetics })
        );
        console.log("[StateManager] Cosmetics saved to sync storage");
      } catch (error) {
        console.error(
          "[StateManager] Failed to save cosmetics to sync storage after retries:",
          error
        );
      }
    }
    /**
     * Retrieve backed up state (for recovery purposes)
     * Returns null if no backup exists
     */
    async getBackupState() {
      try {
        const result = await this.retryStorageOperation(
          () => chrome.storage.local.get(this.BACKUP_KEY)
        );
        if (result[this.BACKUP_KEY]) {
          console.log("[StateManager] Backup state retrieved");
          return result[this.BACKUP_KEY];
        }
        console.log("[StateManager] No backup state found");
        return null;
      } catch (error) {
        console.error("[StateManager] Failed to retrieve backup state:", error);
        return null;
      }
    }
    /**
     * Delete backup state
     */
    async deleteBackup() {
      try {
        await this.retryStorageOperation(
          () => chrome.storage.local.remove(this.BACKUP_KEY)
        );
        console.log("[StateManager] Backup state deleted");
      } catch (error) {
        console.error("[StateManager] Failed to delete backup state:", error);
        throw error;
      }
    }
    /**
     * Get current state version
     */
    getStateVersion() {
      return CURRENT_STATE_VERSION;
    }
  };

  // src/SessionManager.ts
  var SessionManager = class {
    constructor() {
      this.SESSION_ALARM_NAME = "soulShepherd_sessionEnd";
    }
    /**
     * Start a new focus session
     * @param duration Session duration in minutes
     * @param taskId ID of the task being worked on
     * @param autoCompleteTask Whether to mark task complete when session ends
     * @param currentSession Current session state (null if no active session)
     * @returns New session state
     * @throws Error if a session is already active
     */
    async startSession(duration, taskId, autoCompleteTask, currentSession) {
      if (currentSession && currentSession.isActive) {
        throw new Error(
          "Cannot start a new session while another session is active"
        );
      }
      if (duration < 5 || duration > 120) {
        throw new Error("Session duration must be between 5 and 120 minutes");
      }
      const newSession = {
        startTime: Date.now(),
        duration,
        taskId,
        autoCompleteTask,
        isActive: true,
        isPaused: false,
        isCompromised: false,
        idleTime: 0,
        activeTime: 0
      };
      await this.createSessionAlarm(duration);
      console.log(
        `[SessionManager] Session started: ${duration} minutes, task: ${taskId}, autoComplete: ${autoCompleteTask}`
      );
      return newSession;
    }
    /**
     * End the current focus session
     * @param session Current session state
     * @returns Session result with timing information
     * @throws Error if no active session
     */
    endSession(session) {
      if (!session || !session.isActive) {
        throw new Error("No active session to end");
      }
      const elapsedMs = Date.now() - session.startTime;
      const elapsedMinutes = elapsedMs / (1e3 * 60);
      const totalSeconds = elapsedMinutes * 60;
      const activeSeconds = totalSeconds - session.idleTime;
      this.clearSessionAlarm();
      console.log(
        `[SessionManager] Session ended: ${elapsedMinutes.toFixed(
          2
        )} minutes elapsed, ${session.idleTime}s idle, ${activeSeconds.toFixed(
          0
        )}s active`
      );
      const result = {
        soulInsight: 0,
        // To be calculated by RewardCalculator
        soulEmbers: 0,
        // To be calculated by RewardCalculator
        bossProgress: 0,
        // To be calculated by RewardCalculator
        wasCritical: false,
        // To be determined by RewardCalculator
        wasCompromised: session.isCompromised,
        idleTime: session.idleTime,
        activeTime: activeSeconds
      };
      return result;
    }
    /**
     * Pause the current session (user went idle)
     * @param session Current session state
     * @returns Updated session state
     * @throws Error if no active session or session already paused
     */
    pauseSession(session) {
      if (!session || !session.isActive) {
        throw new Error("No active session to pause");
      }
      if (session.isPaused) {
        throw new Error("Session is already paused");
      }
      console.log("[SessionManager] Session paused (user idle detected)");
      return {
        ...session,
        isPaused: true
      };
    }
    /**
     * Resume a paused session (user returned from idle)
     * @param session Current session state
     * @param idleSeconds Number of seconds user was idle
     * @returns Updated session state
     * @throws Error if no active session or session not paused
     */
    resumeSession(session, idleSeconds) {
      if (!session || !session.isActive) {
        throw new Error("No active session to resume");
      }
      if (!session.isPaused) {
        throw new Error("Session is not paused");
      }
      const updatedIdleTime = session.idleTime + idleSeconds;
      const totalSessionSeconds = session.duration * 60;
      const idlePercentage = updatedIdleTime / totalSessionSeconds * 100;
      const isCompromised = session.isCompromised || idlePercentage > 25;
      if (idlePercentage > 25 && !session.isCompromised) {
        console.log(
          `[SessionManager] Session marked as compromised due to excessive idle time (${idlePercentage.toFixed(
            1
          )}%)`
        );
      }
      console.log(
        `[SessionManager] Session resumed after ${idleSeconds}s idle (total idle: ${updatedIdleTime}s)`
      );
      return {
        ...session,
        isPaused: false,
        idleTime: updatedIdleTime,
        isCompromised
      };
    }
    /**
     * Get current session state
     * @param session Current session state
     * @returns Session state or null
     */
    getCurrentSession(session) {
      return session;
    }
    /**
     * Mark session as compromised (e.g., visited discouraged site)
     * @param session Current session state
     * @returns Updated session state
     */
    markSessionCompromised(session) {
      if (!session || !session.isActive) {
        throw new Error("No active session to mark as compromised");
      }
      console.log("[SessionManager] Session marked as compromised");
      return {
        ...session,
        isCompromised: true
      };
    }
    // ============================================================================
    // Private Helper Methods
    // ============================================================================
    /**
     * Create chrome.alarms timer for session end
     */
    async createSessionAlarm(durationMinutes) {
      try {
        await chrome.alarms.clear(this.SESSION_ALARM_NAME);
        await chrome.alarms.create(this.SESSION_ALARM_NAME, {
          delayInMinutes: durationMinutes
        });
        console.log(
          `[SessionManager] Session alarm created for ${durationMinutes} minutes`
        );
      } catch (error) {
        console.error("[SessionManager] Failed to create session alarm:", error);
        throw new Error("Failed to create session timer");
      }
    }
    /**
     * Clear session alarm
     */
    async clearSessionAlarm() {
      try {
        const wasCleared = await chrome.alarms.clear(this.SESSION_ALARM_NAME);
        if (wasCleared) {
          console.log("[SessionManager] Session alarm cleared");
        }
      } catch (error) {
        console.error("[SessionManager] Failed to clear session alarm:", error);
      }
    }
  };

  // src/IdleCollector.ts
  init_constants();
  var IdleCollector = class {
    /**
     * Collect idle souls based on time elapsed since last collection
     * Formula: 1 soul per 5 minutes * (1 + soulflow * 0.1)
     * Converts Content Souls to Soul Embers at 5 embers per soul
     *
     * @param lastCollectionTime - Timestamp of last collection
     * @param soulflow - Player's soulflow stat
     * @returns Object with souls collected and embers earned
     */
    collectIdleSouls(lastCollectionTime, soulflow) {
      const now = Date.now();
      const elapsedMs = now - lastCollectionTime;
      const elapsedMinutes = elapsedMs / (1e3 * 60);
      const idleRate = this.calculateIdleRate(soulflow);
      const intervals = elapsedMinutes / FORMULAS.IDLE_COLLECTION_INTERVAL;
      const soulsCollected = Math.floor(intervals * idleRate);
      const embersEarned = soulsCollected * FORMULAS.CONTENT_SOUL_TO_EMBERS;
      console.log(
        `[IdleCollector] Collected ${soulsCollected} souls (${embersEarned} embers) over ${elapsedMinutes.toFixed(
          1
        )} minutes`
      );
      return {
        soulsCollected,
        embersEarned,
        newCollectionTime: now
      };
    }
    /**
     * Calculate idle collection rate based on soulflow stat
     * Formula: 1 soul per 5 minutes * (1 + soulflow * 0.1)
     *
     * @param soulflow - Player's soulflow stat
     * @returns Collection rate (souls per interval)
     */
    calculateIdleRate(soulflow) {
      const rate = FORMULAS.IDLE_COLLECTION_BASE_RATE * (1 + soulflow * FORMULAS.IDLE_COLLECTION_SOULFLOW_BONUS);
      return rate;
    }
    /**
     * Get time elapsed since last collection in milliseconds
     *
     * @param lastCollectionTime - Timestamp of last collection
     * @returns Elapsed time in milliseconds
     */
    getTimeSinceLastCollection(lastCollectionTime) {
      return Date.now() - lastCollectionTime;
    }
  };

  // src/NavigationMonitor.ts
  var NavigationMonitor = class {
    constructor() {
      this.isMonitoring = false;
      this.navigationListener = null;
    }
    /**
     * Start monitoring navigation events
     * Registers chrome.webNavigation.onCommitted listener
     */
    startMonitoring() {
      if (this.isMonitoring) {
        console.warn("[NavigationMonitor] Already monitoring navigation");
        return;
      }
      this.navigationListener = (details) => {
        this.handleNavigation(details);
      };
      chrome.webNavigation.onCommitted.addListener(this.navigationListener);
      this.isMonitoring = true;
      console.log("[NavigationMonitor] Started monitoring navigation");
    }
    /**
     * Stop monitoring navigation events
     * Removes chrome.webNavigation.onCommitted listener
     */
    stopMonitoring() {
      if (!this.isMonitoring || !this.navigationListener) {
        console.warn("[NavigationMonitor] Not currently monitoring navigation");
        return;
      }
      chrome.webNavigation.onCommitted.removeListener(this.navigationListener);
      this.navigationListener = null;
      this.isMonitoring = false;
      console.log("[NavigationMonitor] Stopped monitoring navigation");
    }
    /**
     * Check if a URL is discouraged or blocked
     * @param url Full URL to check
     * @param discouragedSites List of discouraged domains
     * @param blockedSites List of blocked domains
     * @param strictMode Whether strict mode is enabled
     * @returns Site status (ALLOWED, DISCOURAGED, or BLOCKED)
     */
    checkUrl(url, discouragedSites, blockedSites, strictMode) {
      try {
        const domain = this.extractDomain(url);
        if (!domain) {
          return "ALLOWED" /* ALLOWED */;
        }
        if (this.isDomainInList(domain, blockedSites)) {
          console.log(`[NavigationMonitor] Blocked site detected: ${domain}`);
          return "BLOCKED" /* BLOCKED */;
        }
        if (this.isDomainInList(domain, discouragedSites)) {
          console.log(`[NavigationMonitor] Discouraged site detected: ${domain}`);
          return "DISCOURAGED" /* DISCOURAGED */;
        }
        return "ALLOWED" /* ALLOWED */;
      } catch (error) {
        console.error("[NavigationMonitor] Error checking URL:", error);
        return "ALLOWED" /* ALLOWED */;
      }
    }
    // ============================================================================
    // Private Helper Methods
    // ============================================================================
    /**
     * Handle navigation event
     * Checks URL and sends message to background if discouraged/blocked
     */
    handleNavigation(details) {
      if (details.frameId !== 0) {
        return;
      }
      const url = details.url;
      if (url.startsWith("chrome://") || url.startsWith("chrome-extension://")) {
        return;
      }
      console.log(`[NavigationMonitor] Navigation detected: ${url}`);
      chrome.runtime.sendMessage({
        type: "SITE_VISITED",
        payload: { url }
      }).catch((error) => {
        if (!error.message.includes("Receiving end does not exist")) {
          console.error("[NavigationMonitor] Error sending message:", error);
        }
      });
    }
    /**
     * Extract domain from URL
     * @param url Full URL
     * @returns Domain (e.g., "example.com") or null if invalid
     */
    extractDomain(url) {
      try {
        const urlObj = new URL(url);
        let hostname = urlObj.hostname;
        if (hostname.startsWith("www.")) {
          hostname = hostname.substring(4);
        }
        return hostname;
      } catch (error) {
        console.error("[NavigationMonitor] Invalid URL:", url, error);
        return null;
      }
    }
    /**
     * Check if domain matches any entry in the list
     * Supports exact matches and wildcard subdomains
     * @param domain Domain to check (e.g., "example.com")
     * @param list List of domains to check against
     * @returns True if domain matches any entry in list
     */
    isDomainInList(domain, list) {
      for (const entry of list) {
        if (domain === entry) {
          return true;
        }
        if (domain.endsWith(`.${entry}`)) {
          return true;
        }
        if (entry.startsWith("*.")) {
          const baseDomain = entry.substring(2);
          if (domain === baseDomain || domain.endsWith(`.${baseDomain}`)) {
            return true;
          }
        }
      }
      return false;
    }
    /**
     * Get monitoring status
     * @returns True if currently monitoring
     */
    isCurrentlyMonitoring() {
      return this.isMonitoring;
    }
  };

  // src/background.ts
  init_constants();
  var stateManager;
  var sessionManager;
  var idleCollector;
  var navigationMonitor;
  var initializationPromise = null;
  async function initialize() {
    if (initializationPromise) {
      return initializationPromise;
    }
    initializationPromise = (async () => {
      console.log("[Background] INITIALIZING SYSTEM...");
      if (!stateManager) stateManager = new StateManager();
      if (!sessionManager) sessionManager = new SessionManager();
      if (!idleCollector) idleCollector = new IdleCollector();
      if (!navigationMonitor) navigationMonitor = new NavigationMonitor();
      try {
        const state = await stateManager.loadState();
        console.log("[Background] State loaded successfully. Session Active:", state.session?.isActive);
        if (state.session?.isActive) {
          console.log("[Background] Active session found on init, ensuring monitoring is active");
          navigationMonitor.startMonitoring();
          startIdleDetection(state.settings.idleThreshold);
          await updateBlockingRules(state.settings.blockedSites);
        }
      } catch (error) {
        console.error("[Background] Initialization failed to load state:", error);
        initializationPromise = null;
        throw error;
      }
    })();
    return initializationPromise;
  }
  var idleDetectionActive = false;
  var idleStartTime = null;
  chrome.runtime.onInstalled.addListener(async (details) => {
    console.log("[Background] Extension installed/updated:", details.reason);
    try {
      await initialize();
      await setupIdleCollectionAlarm();
      const state = stateManager.getState();
      console.log("[Background] onInstalled check - Session Active:", state.session?.isActive);
      if (!state.session?.isActive) {
        console.log("[Background] No active session on install, clearing rules");
        await updateBlockingRules([]);
      } else {
        console.log("[Background] ACTIVE SESSION during install, keeping rules");
        await updateBlockingRules(state.settings.blockedSites);
      }
      if (details.reason === "install") {
        console.log("[Background] First install complete");
      }
    } catch (error) {
      console.error("[Background] onInstalled error:", error);
    }
  });
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "local" && changes.soulShepherdGameState) {
      const oldSession = changes.soulShepherdGameState.oldValue?.session;
      const newSession = changes.soulShepherdGameState.newValue?.session;
      if (oldSession?.isActive && !newSession?.isActive) {
        console.warn("[Background] [STORAGE WATCH] Session went from ACTIVE to INACTIVE/NULL!");
        console.trace();
      }
    }
  });
  chrome.runtime.onStartup.addListener(async () => {
    console.log("[Background] Extension starting up");
    try {
      await initialize();
      await setupIdleCollectionAlarm();
      await handleIdleCollectionAlarm();
      await checkForMissedTimersOnStartup();
    } catch (error) {
      console.error("[Background] onStartup error:", error);
    }
  });
  chrome.alarms.onAlarm.addListener(async (alarm) => {
    console.log("[Background] Alarm fired:", alarm.name);
    try {
      if (!stateManager) {
        stateManager = new StateManager();
        await stateManager.loadState();
      }
      if (!sessionManager) {
        sessionManager = new SessionManager();
      }
      if (!idleCollector) {
        idleCollector = new IdleCollector();
      }
      if (!navigationMonitor) {
        navigationMonitor = new NavigationMonitor();
      }
      switch (alarm.name) {
        case "soulShepherd_sessionEnd":
          await handleSessionAlarm();
          break;
        case "soulShepherd_breakEnd":
          await handleBreakAlarm();
          break;
        case "soulShepherd_idleCollection":
          await handleIdleCollectionAlarm();
          break;
        default:
          console.warn("[Background] Unknown alarm:", alarm.name);
      }
    } catch (error) {
      console.error(`[Background] Error handling ${alarm.name} alarm:`, error);
    }
  });
  async function handleSessionAlarm() {
    console.log("[Background] Session timer expired");
    try {
      const currentState = stateManager.getState();
      if (!currentState.session || !currentState.session.isActive) {
        console.warn(
          "[Background] Session alarm fired but no active session found"
        );
        return;
      }
      await handleEndSession();
    } catch (error) {
      console.error("[Background] Error handling session alarm:", error);
    }
  }
  async function setupIdleCollectionAlarm() {
    try {
      await chrome.alarms.clear("soulShepherd_idleCollection");
      await chrome.alarms.create("soulShepherd_idleCollection", {
        periodInMinutes: FORMULAS.IDLE_COLLECTION_INTERVAL
      });
      console.log(
        `[Background] Idle collection alarm set up (every ${FORMULAS.IDLE_COLLECTION_INTERVAL} minutes)`
      );
    } catch (error) {
      console.error(
        "[Background] Failed to set up idle collection alarm:",
        error
      );
    }
  }
  async function handleBreakAlarm() {
    console.log("[Background] Break timer expired");
    try {
      const currentState = stateManager.getState();
      if (!currentState.break || !currentState.break.isActive) {
        console.warn("[Background] Break alarm fired but no active break found");
        return;
      }
      await stateManager.updateState({
        break: null
      });
      console.log("[Background] Break ended");
      if (currentState.settings.notificationsEnabled) {
        chrome.notifications.create({
          type: "basic",
          iconUrl: chrome.runtime.getURL("assets/sprites/sprite_classic_shepherd.png"),
          title: "Soul Shepherd",
          message: "Break complete. Ready for another session?"
        });
      }
      broadcastMessage({
        type: "BREAK_ENDED",
        payload: {
          autoStartEnabled: currentState.settings.autoStartNextSession
        }
      });
      const updatedState = stateManager.getState();
      broadcastMessage({
        type: "STATE_UPDATE",
        payload: { state: updatedState }
      });
      console.log("[Background] Break end flow complete");
    } catch (error) {
      console.error("[Background] Error handling break alarm:", error);
    }
  }
  async function handleIdleCollectionAlarm() {
    console.log("[Background] Idle collection alarm fired");
    try {
      if (!stateManager) {
        stateManager = new StateManager();
        await stateManager.loadState();
      }
      const currentState = stateManager.getState();
      const { lastCollectionTime, accumulatedSouls } = currentState.progression.idleState;
      const soulflow = currentState.player.stats.soulflow;
      const { soulsCollected, embersEarned, newCollectionTime } = idleCollector.collectIdleSouls(lastCollectionTime, soulflow);
      await stateManager.updateState({
        progression: {
          ...currentState.progression,
          idleState: {
            lastCollectionTime: newCollectionTime,
            accumulatedSouls: accumulatedSouls + soulsCollected
          }
        },
        player: {
          ...currentState.player,
          soulEmbers: currentState.player.soulEmbers + embersEarned
        },
        statistics: {
          ...currentState.statistics,
          totalIdleSoulsCollected: currentState.statistics.totalIdleSoulsCollected + soulsCollected,
          totalSoulEmbersEarned: currentState.statistics.totalSoulEmbersEarned + embersEarned
        }
      });
      console.log(
        `[Background] Idle collection complete: ${soulsCollected} souls, ${embersEarned} embers`
      );
      broadcastMessage({
        type: "IDLE_SOULS_COLLECTED",
        payload: {
          soulsCollected,
          embersEarned
        }
      });
    } catch (error) {
      console.error("[Background] Error handling idle collection alarm:", error);
    }
  }
  chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse) => {
      console.log("[Background] Received message:", message.type, message);
      handleMessage(message, sender).then((response) => {
        sendResponse({ success: true, data: response });
      }).catch((error) => {
        console.error("[Background] Message handler error:", error);
        sendResponse({ success: false, error: error.message });
      });
      return true;
    }
  );
  async function handleMessage(message, sender) {
    await initialize();
    switch (message.type) {
      case "GET_STATE":
        return handleGetState();
      case "UPDATE_STATE":
        return handleUpdateState(message.payload);
      // Session management messages (to be implemented in Phase 2)
      case "START_SESSION":
        return handleStartSession(message.payload);
      case "END_SESSION":
        return handleEndSession();
      case "END_SESSION_RETROACTIVE":
        return handleEndSessionRetroactive(message.payload);
      case "END_BREAK_RETROACTIVE":
        return handleEndBreakRetroactive(message.payload);
      case "PAUSE_SESSION":
        return handlePauseSession();
      case "RESUME_SESSION":
        return handleResumeSession(message.payload);
      // Settings management messages
      case "UPDATE_SETTINGS":
        return handleUpdateSettings(message.payload);
      // Task management messages
      case "UPDATE_TASKS":
        return handleUpdateTasks(message.payload);
      // Stats upgrade messages (to be implemented in Phase 8)
      case "UPGRADE_STAT":
        return handleUpgradeStat(message.payload);
      case "ALLOCATE_SKILL_POINT":
        return handleAllocateSkillPoint(message.payload);
      // Cosmetics messages (to be implemented in Phase 13)
      case "PURCHASE_COSMETIC":
        return handlePurchaseCosmetic(message.payload);
      case "APPLY_COSMETIC":
        return handleApplyCosmetic(message.payload);
      // Navigation monitoring messages (to be implemented in Phase 6)
      case "CHECK_URL":
        return handleCheckUrl(message.payload);
      case "SITE_VISITED":
        return handleSiteVisited(message.payload);
      // Emergency session end (strict mode)
      case "EMERGENCY_END_SESSION":
        return handleEmergencyEndSession();
      // Idle soul collection (manual trigger from popup)
      case "COLLECT_IDLE_SOULS":
        return handleIdleCollectionAlarm();
      default:
        throw new Error(`Unknown message type: ${message.type}`);
    }
  }
  async function handleGetState() {
    return stateManager.getState();
  }
  async function handleUpdateState(partial) {
    await stateManager.updateState(partial);
  }
  async function handleStartSession(payload) {
    console.log(
      `[Background] Starting session: ${payload.duration} minutes, task: ${payload.taskId}, autoComplete: ${payload.autoCompleteTask}`
    );
    const currentState = stateManager.getState();
    if (currentState.break?.isActive) {
      console.log("[Background] Clearing active break to start new session");
      await chrome.alarms.clear("soulShepherd_breakEnd");
      await stateManager.updateState({ break: null });
    }
    if (!navigationMonitor) {
      navigationMonitor = new NavigationMonitor();
    }
    const newSession = await sessionManager.startSession(
      payload.duration,
      payload.taskId,
      payload.autoCompleteTask,
      currentState.session
    );
    console.log("[Background] Preparing to save new session to state manager...");
    await stateManager.updateState({
      session: newSession
    });
    console.log("[Background] Session state saved. Current memory state active:", stateManager.getState().session?.isActive);
    navigationMonitor.startMonitoring();
    console.log("[Background] Navigation monitoring started for session");
    startIdleDetection(currentState.settings.idleThreshold);
    console.log("[Background] Idle detection started for session");
    await updateBlockingRules(currentState.settings.blockedSites);
    console.log("[Background] Session blocking activated");
    const updatedState = stateManager.getState();
    broadcastMessage({
      type: "SESSION_STARTED",
      payload: newSession
    });
    broadcastMessage({
      type: "STATE_UPDATE",
      payload: { state: updatedState }
    });
    return newSession;
  }
  function handleBossDefeat(bossResult, updatedProgression, playerLevel, progressionManager) {
    if (!bossResult.wasDefeated) {
      return updatedProgression;
    }
    console.log("[Background] Boss defeated!");
    if (bossResult.nextBoss) {
      console.log(
        `[Background] Next boss available: ${bossResult.nextBoss.name}`
      );
      if (playerLevel >= bossResult.nextBoss.unlockLevel) {
        const newProgression = progressionManager.unlockNextBoss(
          updatedProgression,
          playerLevel
        );
        console.log(`[Background] Boss unlocked: ${bossResult.nextBoss.name}`);
        return newProgression;
      } else {
        console.log(
          `[Background] Boss locked: ${bossResult.nextBoss.name} requires level ${bossResult.nextBoss.unlockLevel}, player is level ${playerLevel}`
        );
        return updatedProgression;
      }
    } else {
      console.log("[Background] All bosses defeated - campaign complete!");
      return updatedProgression;
    }
  }
  function handleLevelUp(levelResult, currentPlayerLevel, currentBossIndex) {
    if (!levelResult.leveledUp) {
      return;
    }
    console.log(
      `[Background] Player leveled up to level ${levelResult.newLevel}!`
    );
    const nextBossIndex = currentBossIndex + 1;
    let unlockedBoss = void 0;
    if (nextBossIndex < STUBBORN_SOULS.length) {
      const potentialNextBoss = STUBBORN_SOULS[nextBossIndex];
      if (potentialNextBoss.unlockLevel <= levelResult.newLevel && potentialNextBoss.unlockLevel > currentPlayerLevel) {
        unlockedBoss = potentialNextBoss;
        console.log(
          `[Background] Level-up unlocked new boss: ${unlockedBoss.name}`
        );
      }
    }
    broadcastMessage({
      type: "LEVEL_UP",
      payload: {
        newLevel: levelResult.newLevel,
        skillPointsGranted: levelResult.skillPointsGranted,
        unlockedBoss
      }
    });
  }
  async function handleEndSession() {
    console.log("[Background] Ending session");
    const currentState = stateManager.getState();
    if (!currentState.session || !currentState.session.isActive) {
      console.warn("[Background] No active session to end");
      return;
    }
    if (!sessionManager) {
      sessionManager = new SessionManager();
    }
    if (!navigationMonitor) {
      navigationMonitor = new NavigationMonitor();
    }
    navigationMonitor.stopMonitoring();
    console.log("[Background] Navigation monitoring stopped");
    stopIdleDetection();
    console.log("[Background] Idle detection stopped");
    await updateBlockingRules([]);
    console.log("[Background] Blocking rules cleared");
    const { RewardCalculator: RewardCalculator2 } = await Promise.resolve().then(() => (init_RewardCalculator(), RewardCalculator_exports));
    const { ProgressionManager: ProgressionManager2 } = await Promise.resolve().then(() => (init_ProgressionManager(), ProgressionManager_exports));
    const rewardCalculator = new RewardCalculator2();
    const progressionManager = new ProgressionManager2();
    const sessionResult = sessionManager.endSession(currentState.session);
    const rewards = rewardCalculator.calculateRewards(
      currentState.session,
      currentState.player.stats
    );
    sessionResult.soulInsight = rewards.soulInsight;
    sessionResult.soulEmbers = rewards.soulEmbers;
    sessionResult.bossProgress = rewards.bossProgress;
    sessionResult.wasCritical = rewards.wasCritical;
    console.log("[Background] Rewards calculated:", rewards);
    const bossResult = progressionManager.damageBoss(
      rewards.bossProgress,
      currentState.progression,
      currentState.player.level
    );
    console.log("[Background] Boss damage applied:", bossResult);
    const levelResult = progressionManager.addExperience(
      rewards.soulInsight,
      currentState.player
    );
    console.log("[Background] Experience added:", levelResult);
    const newXPToNextLevel = progressionManager.calculateLevelThreshold(
      levelResult.newLevel
    );
    handleLevelUp(
      levelResult,
      currentState.player.level,
      currentState.progression.currentBossIndex
    );
    let updatedProgression = {
      ...currentState.progression,
      currentBossResolve: bossResult.remainingResolve
    };
    updatedProgression = handleBossDefeat(
      bossResult,
      updatedProgression,
      levelResult.newLevel,
      progressionManager
    );
    const updatedPlayer = {
      ...currentState.player,
      level: levelResult.newLevel,
      soulInsight: currentState.player.soulInsight + rewards.soulInsight,
      soulInsightToNextLevel: newXPToNextLevel,
      soulEmbers: currentState.player.soulEmbers + rewards.soulEmbers,
      skillPoints: currentState.player.skillPoints + levelResult.skillPointsGranted
    };
    const updatedStatistics = {
      ...currentState.statistics,
      totalSessions: currentState.statistics.totalSessions + 1,
      totalFocusTime: currentState.statistics.totalFocusTime + currentState.session.duration,
      totalSoulInsightEarned: currentState.statistics.totalSoulInsightEarned + rewards.soulInsight,
      totalSoulEmbersEarned: currentState.statistics.totalSoulEmbersEarned + rewards.soulEmbers,
      bossesDefeated: bossResult.wasDefeated ? currentState.statistics.bossesDefeated + 1 : currentState.statistics.bossesDefeated,
      lastSessionDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    };
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const lastSessionDate = currentState.statistics.lastSessionDate;
    if (lastSessionDate) {
      const lastDate = new Date(lastSessionDate);
      const todayDate = new Date(today);
      const daysDiff = Math.floor(
        (todayDate.getTime() - lastDate.getTime()) / (1e3 * 60 * 60 * 24)
      );
      if (daysDiff === 1) {
        updatedStatistics.currentStreak = currentState.statistics.currentStreak + 1;
        updatedStatistics.longestStreak = Math.max(
          updatedStatistics.currentStreak,
          currentState.statistics.longestStreak
        );
      } else if (daysDiff > 1) {
        updatedStatistics.currentStreak = 1;
      }
    } else {
      updatedStatistics.currentStreak = 1;
      updatedStatistics.longestStreak = 1;
    }
    let updatedTasks = currentState.tasks;
    console.log(
      `[Background] Checking task auto-complete: autoComplete=${currentState.session.autoCompleteTask}, taskId=${currentState.session.taskId}`
    );
    if (currentState.session.autoCompleteTask && currentState.session.taskId) {
      console.log(
        `[Background] Auto-completing task: ${currentState.session.taskId}`
      );
      updatedTasks = completeTask(
        currentState.tasks,
        currentState.session.taskId
      );
      console.log(
        `[Background] Task auto-completed successfully: ${currentState.session.taskId}`
      );
    } else {
      console.log(
        `[Background] Task auto-complete skipped (not enabled or no task selected)`
      );
    }
    const breakDuration = currentState.settings.defaultBreakDuration;
    const breakState = {
      startTime: Date.now(),
      duration: breakDuration,
      isActive: true
    };
    await chrome.alarms.create("soulShepherd_breakEnd", {
      delayInMinutes: breakDuration
    });
    console.log(`[Background] Break timer started: ${breakDuration} minutes`);
    await stateManager.updateState({
      session: null,
      break: breakState,
      player: updatedPlayer,
      progression: updatedProgression,
      statistics: updatedStatistics,
      tasks: updatedTasks
    });
    if (currentState.settings.notificationsEnabled) {
      chrome.notifications.create({
        type: "basic",
        iconUrl: chrome.runtime.getURL("assets/sprites/sprite_classic_shepherd.png"),
        title: "Soul Shepherd",
        message: "Your ritual is complete. Souls await you."
      });
    }
    broadcastMessage({
      type: "SESSION_ENDED",
      payload: {
        result: sessionResult,
        leveledUp: levelResult.leveledUp,
        newLevel: levelResult.newLevel,
        skillPointsGranted: levelResult.skillPointsGranted,
        bossDefeated: bossResult.wasDefeated,
        nextBoss: bossResult.nextBoss,
        playerLevel: levelResult.newLevel
      }
    });
    const updatedState = stateManager.getState();
    broadcastMessage({
      type: "STATE_UPDATE",
      payload: { state: updatedState }
    });
    console.log("[Background] Session end flow complete");
  }
  async function handleEndSessionRetroactive(payload) {
    console.log(
      "[Background] Ending session retroactively - alarm was late or missed"
    );
    console.log(
      `[Background] Actual end time: ${new Date(
        payload.actualEndTime
      ).toISOString()}, Detected at: ${new Date(
        payload.detectedAt
      ).toISOString()}`
    );
    const currentState = stateManager.getState();
    if (!currentState.session || !currentState.session.isActive) {
      console.warn(
        "[Background] No active session to end retroactively - may have already been processed"
      );
      return;
    }
    const delayMs = payload.detectedAt - payload.actualEndTime;
    const delayMinutes = Math.floor(delayMs / (1e3 * 60));
    console.log(
      `[Background] Timer was delayed by ${delayMinutes} minute(s) (${delayMs}ms)`
    );
    if (!sessionManager) {
      sessionManager = new SessionManager();
    }
    if (!navigationMonitor) {
      navigationMonitor = new NavigationMonitor();
    }
    navigationMonitor.stopMonitoring();
    console.log("[Background] Navigation monitoring stopped");
    stopIdleDetection();
    console.log("[Background] Idle detection stopped");
    await updateBlockingRules([]);
    console.log("[Background] Blocking rules cleared");
    const { RewardCalculator: RewardCalculator2 } = await Promise.resolve().then(() => (init_RewardCalculator(), RewardCalculator_exports));
    const { ProgressionManager: ProgressionManager2 } = await Promise.resolve().then(() => (init_ProgressionManager(), ProgressionManager_exports));
    const rewardCalculator = new RewardCalculator2();
    const progressionManager = new ProgressionManager2();
    const adjustedSession = {
      ...currentState.session,
      // Calculate actual active time based on when session should have ended
      activeTime: Math.max(
        0,
        (payload.actualEndTime - currentState.session.startTime) / 1e3 - currentState.session.idleTime
      )
    };
    const sessionResult = sessionManager.endSession(currentState.session);
    const rewards = rewardCalculator.calculateRewards(
      adjustedSession,
      currentState.player.stats
    );
    sessionResult.soulInsight = rewards.soulInsight;
    sessionResult.soulEmbers = rewards.soulEmbers;
    sessionResult.bossProgress = rewards.bossProgress;
    sessionResult.wasCritical = rewards.wasCritical;
    sessionResult.activeTime = adjustedSession.activeTime;
    console.log(
      "[Background] Rewards calculated (retroactive with actual timing):",
      rewards
    );
    const bossResult = progressionManager.damageBoss(
      rewards.bossProgress,
      currentState.progression,
      currentState.player.level
    );
    console.log("[Background] Boss damage applied:", bossResult);
    const levelResult = progressionManager.addExperience(
      rewards.soulInsight,
      currentState.player
    );
    console.log("[Background] Experience added:", levelResult);
    const newXPToNextLevel = progressionManager.calculateLevelThreshold(
      levelResult.newLevel
    );
    handleLevelUp(
      levelResult,
      currentState.player.level,
      currentState.progression.currentBossIndex
    );
    let updatedProgression = {
      ...currentState.progression,
      currentBossResolve: bossResult.remainingResolve
    };
    updatedProgression = handleBossDefeat(
      bossResult,
      updatedProgression,
      levelResult.newLevel,
      progressionManager
    );
    const updatedPlayer = {
      ...currentState.player,
      level: levelResult.newLevel,
      soulInsight: currentState.player.soulInsight + rewards.soulInsight,
      soulInsightToNextLevel: newXPToNextLevel,
      soulEmbers: currentState.player.soulEmbers + rewards.soulEmbers,
      skillPoints: currentState.player.skillPoints + levelResult.skillPointsGranted
    };
    const updatedStatistics = {
      ...currentState.statistics,
      totalSessions: currentState.statistics.totalSessions + 1,
      totalFocusTime: currentState.statistics.totalFocusTime + currentState.session.duration,
      totalSoulInsightEarned: currentState.statistics.totalSoulInsightEarned + rewards.soulInsight,
      totalSoulEmbersEarned: currentState.statistics.totalSoulEmbersEarned + rewards.soulEmbers,
      bossesDefeated: bossResult.wasDefeated ? currentState.statistics.bossesDefeated + 1 : currentState.statistics.bossesDefeated,
      lastSessionDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    };
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const lastSessionDate = currentState.statistics.lastSessionDate;
    if (lastSessionDate) {
      const lastDate = new Date(lastSessionDate);
      const todayDate = new Date(today);
      const daysDiff = Math.floor(
        (todayDate.getTime() - lastDate.getTime()) / (1e3 * 60 * 60 * 24)
      );
      if (daysDiff === 1) {
        updatedStatistics.currentStreak = currentState.statistics.currentStreak + 1;
        updatedStatistics.longestStreak = Math.max(
          updatedStatistics.currentStreak,
          currentState.statistics.longestStreak
        );
      } else if (daysDiff > 1) {
        updatedStatistics.currentStreak = 1;
      }
    } else {
      updatedStatistics.currentStreak = 1;
      updatedStatistics.longestStreak = 1;
    }
    const breakDuration = currentState.settings.defaultBreakDuration;
    const breakState = {
      startTime: payload.actualEndTime,
      // Use actual end time, not current time
      duration: breakDuration,
      isActive: true
    };
    const breakEndTime = payload.actualEndTime + breakDuration * 60 * 1e3;
    const remainingBreakMs = breakEndTime - payload.detectedAt;
    const remainingBreakMinutes = Math.max(0, remainingBreakMs / (1e3 * 60));
    if (remainingBreakMinutes > 0) {
      await chrome.alarms.create("soulShepherd_breakEnd", {
        delayInMinutes: remainingBreakMinutes
      });
      console.log(
        `[Background] Break timer started with ${remainingBreakMinutes.toFixed(
          1
        )} minutes remaining (adjusted for delay)`
      );
    } else {
      console.log(
        "[Background] Break time has already elapsed - ending break immediately"
      );
      breakState.isActive = false;
    }
    await stateManager.updateState({
      session: null,
      break: breakState.isActive ? breakState : null,
      player: updatedPlayer,
      progression: updatedProgression,
      statistics: updatedStatistics
    });
    if (currentState.settings.notificationsEnabled) {
      chrome.notifications.create({
        type: "basic",
        iconUrl: chrome.runtime.getURL("assets/sprites/sprite_classic_shepherd.png"),
        title: "Soul Shepherd",
        message: "Your ritual is complete. Souls await you."
      });
    }
    broadcastMessage({
      type: "SESSION_ENDED",
      payload: {
        result: sessionResult,
        leveledUp: levelResult.leveledUp,
        newLevel: levelResult.newLevel,
        skillPointsGranted: levelResult.skillPointsGranted,
        bossDefeated: bossResult.wasDefeated,
        nextBoss: bossResult.nextBoss,
        playerLevel: levelResult.newLevel,
        retroactive: true,
        delayMinutes
      }
    });
    const updatedState = stateManager.getState();
    broadcastMessage({
      type: "STATE_UPDATE",
      payload: { state: updatedState }
    });
    console.log(
      "[Background] Retroactive session end flow complete (delay: " + delayMinutes + " minutes)"
    );
  }
  async function handleEndBreakRetroactive(payload) {
    console.log(
      "[Background] Ending break retroactively - alarm was late or missed"
    );
    console.log(
      `[Background] Actual end time: ${new Date(
        payload.actualEndTime
      ).toISOString()}, Detected at: ${new Date(
        payload.detectedAt
      ).toISOString()}`
    );
    const currentState = stateManager.getState();
    if (!currentState.break || !currentState.break.isActive) {
      console.warn(
        "[Background] No active break to end retroactively - may have already been processed"
      );
      return;
    }
    const delayMs = payload.detectedAt - payload.actualEndTime;
    const delayMinutes = Math.floor(delayMs / (1e3 * 60));
    console.log(
      `[Background] Break timer was delayed by ${delayMinutes} minute(s) (${delayMs}ms)`
    );
    await stateManager.updateState({
      break: null
    });
    console.log("[Background] Break ended retroactively");
    if (currentState.settings.notificationsEnabled) {
      chrome.notifications.create({
        type: "basic",
        iconUrl: chrome.runtime.getURL("assets/sprites/sprite_classic_shepherd.png"),
        title: "Soul Shepherd",
        message: "Break complete. Ready for another session?"
      });
    }
    broadcastMessage({
      type: "BREAK_ENDED",
      payload: {
        autoStartEnabled: currentState.settings.autoStartNextSession,
        retroactive: true,
        delayMinutes
      }
    });
    const updatedState = stateManager.getState();
    broadcastMessage({
      type: "STATE_UPDATE",
      payload: { state: updatedState }
    });
    console.log(
      "[Background] Retroactive break end flow complete (delay: " + delayMinutes + " minutes)"
    );
  }
  async function handlePauseSession() {
    console.log("[Background] Pausing session");
    const currentState = stateManager.getState();
    const updatedSession = sessionManager.pauseSession(currentState.session);
    await stateManager.updateState({
      session: updatedSession
    });
    broadcastMessage({
      type: "SESSION_PAUSED",
      payload: updatedSession
    });
  }
  async function handleResumeSession(payload) {
    console.log(
      `[Background] Resuming session after ${payload.idleSeconds}s idle`
    );
    const currentState = stateManager.getState();
    const updatedSession = sessionManager.resumeSession(
      currentState.session,
      payload.idleSeconds
    );
    await stateManager.updateState({
      session: updatedSession
    });
    broadcastMessage({
      type: "SESSION_RESUMED",
      payload: updatedSession
    });
  }
  async function handleUpdateSettings(settings) {
    const currentState = stateManager.getState();
    const updatedSettings = {
      ...currentState.settings,
      ...settings
    };
    await stateManager.updateState({
      settings: updatedSettings
    });
    if (settings.blockedSites !== void 0 || settings.strictMode !== void 0) {
      if (currentState.session?.isActive && updatedSettings.strictMode && updatedSettings.blockedSites) {
        await updateBlockingRules(updatedSettings.blockedSites);
        console.log("[Background] Blocking rules updated from settings change");
      } else if (!updatedSettings.strictMode || !currentState.session?.isActive) {
        await updateBlockingRules([]);
        console.log("[Background] Blocking rules cleared from settings change");
      }
    }
  }
  async function handleUpdateTasks(tasks) {
    const currentState = stateManager.getState();
    await stateManager.updateState({
      tasks: {
        ...currentState.tasks,
        ...tasks
      }
    });
  }
  async function handleUpgradeStat(payload) {
    console.log(`[Background] Upgrading stat: ${payload.statName}`);
    const currentState = stateManager.getState();
    const { statName } = payload;
    if (!["spirit", "harmony", "soulflow"].includes(statName)) {
      throw new Error(`Invalid stat name: ${statName}`);
    }
    let currentStatValue;
    if (statName === "harmony") {
      currentStatValue = currentState.player.stats.harmony * 100;
    } else {
      currentStatValue = currentState.player.stats[statName];
    }
    const upgradeCost = Math.floor(
      FORMULAS.STAT_UPGRADE_BASE_COST * Math.pow(FORMULAS.STAT_UPGRADE_COST_MULTIPLIER, currentStatValue)
    );
    console.log(
      `[Background] Upgrade cost for ${statName}: ${upgradeCost} (current value: ${currentStatValue})`
    );
    if (currentState.player.soulEmbers < upgradeCost) {
      throw new Error(
        `Insufficient Soul Embers. Need ${upgradeCost}, have ${currentState.player.soulEmbers}`
      );
    }
    const updatedStats = { ...currentState.player.stats };
    if (statName === "harmony") {
      updatedStats.harmony = currentState.player.stats.harmony + 0.01;
    } else {
      updatedStats[statName] = currentState.player.stats[statName] + 1;
    }
    const updatedPlayer = {
      ...currentState.player,
      stats: updatedStats,
      soulEmbers: currentState.player.soulEmbers - upgradeCost
    };
    await stateManager.updateState({
      player: updatedPlayer
    });
    console.log(
      `[Background] Stat upgraded: ${statName} = ${statName === "harmony" ? updatedStats.harmony : updatedStats[statName]}, Soul Embers remaining: ${updatedPlayer.soulEmbers}`
    );
    const updatedState = stateManager.getState();
    broadcastMessage({
      type: "STATE_UPDATE",
      payload: { state: updatedState }
    });
    broadcastMessage({
      type: "STAT_UPGRADED",
      payload: {
        statName,
        newValue: statName === "harmony" ? updatedStats.harmony : updatedStats[statName],
        cost: upgradeCost,
        remainingEmbers: updatedPlayer.soulEmbers
      }
    });
  }
  async function handleAllocateSkillPoint(payload) {
    console.log(`[Background] Allocating skill point to: ${payload.statName}`);
    const currentState = stateManager.getState();
    const { statName } = payload;
    if (!["spirit", "harmony", "soulflow"].includes(statName)) {
      throw new Error(`Invalid stat name: ${statName}`);
    }
    if (currentState.player.skillPoints <= 0) {
      throw new Error(
        `No skill points available. Current: ${currentState.player.skillPoints}`
      );
    }
    const updatedStats = { ...currentState.player.stats };
    if (statName === "harmony") {
      updatedStats.harmony = currentState.player.stats.harmony + 0.01;
    } else {
      updatedStats[statName] = currentState.player.stats[statName] + 1;
    }
    const updatedPlayer = {
      ...currentState.player,
      stats: updatedStats,
      skillPoints: currentState.player.skillPoints - 1
    };
    await stateManager.updateState({
      player: updatedPlayer
    });
    console.log(
      `[Background] Skill point allocated: ${statName} = ${statName === "harmony" ? updatedStats.harmony : updatedStats[statName]}, Skill points remaining: ${updatedPlayer.skillPoints}`
    );
    const updatedState = stateManager.getState();
    broadcastMessage({
      type: "STATE_UPDATE",
      payload: { state: updatedState }
    });
    broadcastMessage({
      type: "SKILL_POINT_ALLOCATED",
      payload: {
        statName,
        newValue: statName === "harmony" ? updatedStats.harmony : updatedStats[statName],
        remainingSkillPoints: updatedPlayer.skillPoints
      }
    });
  }
  async function handlePurchaseCosmetic(payload) {
    console.log(
      `[Background] Purchasing cosmetic: ${payload.type} - ${payload.itemId}`
    );
    const state = stateManager.getState();
    const { COSMETIC_THEMES: COSMETIC_THEMES2, COSMETIC_SPRITES: COSMETIC_SPRITES2 } = await Promise.resolve().then(() => (init_constants(), constants_exports));
    let cost = 0;
    let alreadyOwned = false;
    if (payload.type === "theme") {
      const theme = COSMETIC_THEMES2.find((t) => t.id === payload.itemId);
      if (!theme) {
        throw new Error(`Theme not found: ${payload.itemId}`);
      }
      cost = theme.cost;
      alreadyOwned = state.player.cosmetics.ownedThemes.includes(payload.itemId);
    } else if (payload.type === "sprite") {
      const sprite = COSMETIC_SPRITES2.find((s) => s.id === payload.itemId);
      if (!sprite) {
        throw new Error(`Sprite not found: ${payload.itemId}`);
      }
      cost = sprite.cost;
      alreadyOwned = state.player.cosmetics.ownedSprites.includes(payload.itemId);
    }
    if (alreadyOwned) {
      throw new Error("Cosmetic already owned");
    }
    if (state.player.soulEmbers < cost) {
      throw new Error("Insufficient Soul Embers");
    }
    state.player.soulEmbers -= cost;
    if (payload.type === "theme") {
      state.player.cosmetics.ownedThemes.push(payload.itemId);
    } else if (payload.type === "sprite") {
      state.player.cosmetics.ownedSprites.push(payload.itemId);
    }
    await stateManager.saveState(state);
    await stateManager.saveCosmeticsToSync(state.player.cosmetics);
    console.log(
      `[Background] Cosmetic purchased: ${payload.type} - ${payload.itemId}`
    );
    broadcastMessage({
      type: "STATE_UPDATE",
      payload: { state }
    });
  }
  async function handleApplyCosmetic(payload) {
    console.log(
      `[Background] Applying cosmetic: ${payload.type} - ${payload.itemId}`
    );
    const state = stateManager.getState();
    if (payload.type === "theme") {
      if (!state.player.cosmetics.ownedThemes.includes(payload.itemId)) {
        throw new Error("Theme not owned");
      }
      state.player.cosmetics.activeTheme = payload.itemId;
    } else if (payload.type === "sprite") {
      if (!state.player.cosmetics.ownedSprites.includes(payload.itemId)) {
        throw new Error("Sprite not owned");
      }
      state.player.cosmetics.activeSprite = payload.itemId;
    }
    await stateManager.saveState(state);
    await stateManager.saveCosmeticsToSync(state.player.cosmetics);
    console.log(
      `[Background] Cosmetic applied: ${payload.type} - ${payload.itemId}`
    );
    broadcastMessage({
      type: "STATE_UPDATE",
      payload: { state }
    });
  }
  async function handleCheckUrl(payload) {
    console.log(`[Background] Checking URL: ${payload.url}`);
    const currentState = stateManager.getState();
    const { discouragedSites, blockedSites } = currentState.settings;
    const isSessionActive = currentState.session?.isActive;
    console.log(`[Background] CHECK_URL diagnostic \u2014 Active: ${isSessionActive}, Blocked List: ${JSON.stringify(blockedSites)}`);
    let domain = null;
    try {
      const urlObj = new URL(payload.url);
      domain = urlObj.hostname;
      if (domain.startsWith("www.")) {
        domain = domain.substring(4);
      }
    } catch (error) {
      console.error("[Background] Invalid URL:", payload.url);
    }
    if (!isSessionActive) {
      console.log("[Background] CHECK_URL result: ALLOWED (No active session)");
      return { status: "ALLOWED" /* ALLOWED */, domain };
    }
    if (!navigationMonitor) {
      navigationMonitor = new NavigationMonitor();
    }
    const status = navigationMonitor.checkUrl(
      payload.url,
      discouragedSites,
      blockedSites,
      true
    );
    console.log(`[Background] CHECK_URL result: ${status} for ${payload.url}`);
    return { status, domain };
  }
  async function handleSiteVisited(payload) {
    console.log(`[Background] Site visited: ${payload.url}`);
    const currentState = stateManager.getState();
    if (!currentState.session || !currentState.session.isActive) {
      console.log("[Background] No active session, ignoring site visit");
      return;
    }
    const { discouragedSites, blockedSites, strictMode } = currentState.settings;
    if (!navigationMonitor) {
      navigationMonitor = new NavigationMonitor();
    }
    const status = navigationMonitor.checkUrl(
      payload.url,
      discouragedSites,
      blockedSites,
      strictMode
    );
    if (status === "DISCOURAGED" /* DISCOURAGED */ || status === "BLOCKED" /* BLOCKED */) {
      console.log(
        `[Background] ${status} site visited during session, marking as compromised`
      );
      if (!sessionManager) {
        sessionManager = new SessionManager();
      }
      const updatedSession = sessionManager.markSessionCompromised(
        currentState.session
      );
      await stateManager.updateState({
        session: updatedSession
      });
      broadcastMessage({
        type: "SESSION_COMPROMISED",
        payload: {
          url: payload.url,
          status
        }
      });
      console.log("[Background] Session marked as compromised");
    }
  }
  async function handleEmergencyEndSession() {
    console.log("[Background] Emergency session end requested");
    const currentState = stateManager.getState();
    if (!currentState.session || !currentState.session.isActive) {
      console.warn("[Background] No active session to end");
      return;
    }
    if (!sessionManager) {
      sessionManager = new SessionManager();
    }
    if (!navigationMonitor) {
      navigationMonitor = new NavigationMonitor();
    }
    navigationMonitor.stopMonitoring();
    console.log("[Background] Navigation monitoring stopped");
    stopIdleDetection();
    console.log("[Background] Idle detection stopped");
    await updateBlockingRules([]);
    const { RewardCalculator: RewardCalculator2 } = await Promise.resolve().then(() => (init_RewardCalculator(), RewardCalculator_exports));
    const { ProgressionManager: ProgressionManager2 } = await Promise.resolve().then(() => (init_ProgressionManager(), ProgressionManager_exports));
    const rewardCalculator = new RewardCalculator2();
    const progressionManager = new ProgressionManager2();
    const sessionResult = sessionManager.endSession(currentState.session);
    const rewards = rewardCalculator.calculateRewards(
      currentState.session,
      currentState.player.stats
    );
    const penaltyMultiplier = 0.5;
    rewards.soulInsight = Math.floor(rewards.soulInsight * penaltyMultiplier);
    rewards.soulEmbers = Math.floor(rewards.soulEmbers * penaltyMultiplier);
    rewards.bossProgress = Math.floor(rewards.bossProgress * penaltyMultiplier);
    console.log("[Background] Emergency end - rewards reduced by 50%:", rewards);
    sessionResult.soulInsight = rewards.soulInsight;
    sessionResult.soulEmbers = rewards.soulEmbers;
    sessionResult.bossProgress = rewards.bossProgress;
    sessionResult.wasCritical = rewards.wasCritical;
    sessionResult.wasCompromised = true;
    const bossResult = progressionManager.damageBoss(
      rewards.bossProgress,
      currentState.progression,
      currentState.player.level
    );
    console.log("[Background] Boss damage applied:", bossResult);
    const levelResult = progressionManager.addExperience(
      rewards.soulInsight,
      currentState.player
    );
    console.log("[Background] Experience added:", levelResult);
    const newXPToNextLevel = progressionManager.calculateLevelThreshold(
      levelResult.newLevel
    );
    handleLevelUp(
      levelResult,
      currentState.player.level,
      currentState.progression.currentBossIndex
    );
    let updatedProgression = {
      ...currentState.progression,
      currentBossResolve: bossResult.remainingResolve
    };
    updatedProgression = handleBossDefeat(
      bossResult,
      updatedProgression,
      levelResult.newLevel,
      progressionManager
    );
    const updatedPlayer = {
      ...currentState.player,
      level: levelResult.newLevel,
      soulInsight: currentState.player.soulInsight + rewards.soulInsight,
      soulInsightToNextLevel: newXPToNextLevel,
      soulEmbers: currentState.player.soulEmbers + rewards.soulEmbers,
      skillPoints: currentState.player.skillPoints + levelResult.skillPointsGranted
    };
    const updatedStatistics = {
      ...currentState.statistics,
      totalSessions: currentState.statistics.totalSessions + 1,
      totalFocusTime: currentState.statistics.totalFocusTime + currentState.session.duration,
      totalSoulInsightEarned: currentState.statistics.totalSoulInsightEarned + rewards.soulInsight,
      totalSoulEmbersEarned: currentState.statistics.totalSoulEmbersEarned + rewards.soulEmbers,
      bossesDefeated: bossResult.wasDefeated ? currentState.statistics.bossesDefeated + 1 : currentState.statistics.bossesDefeated,
      lastSessionDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    };
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const lastSessionDate = currentState.statistics.lastSessionDate;
    if (lastSessionDate) {
      const lastDate = new Date(lastSessionDate);
      const todayDate = new Date(today);
      const daysDiff = Math.floor(
        (todayDate.getTime() - lastDate.getTime()) / (1e3 * 60 * 60 * 24)
      );
      if (daysDiff === 1) {
        updatedStatistics.currentStreak = currentState.statistics.currentStreak + 1;
        updatedStatistics.longestStreak = Math.max(
          updatedStatistics.currentStreak,
          currentState.statistics.longestStreak
        );
      } else if (daysDiff > 1) {
        updatedStatistics.currentStreak = 1;
      }
    } else {
      updatedStatistics.currentStreak = 1;
      updatedStatistics.longestStreak = 1;
    }
    const breakDuration = currentState.settings.defaultBreakDuration;
    const breakState = {
      startTime: Date.now(),
      duration: breakDuration,
      isActive: true
    };
    await chrome.alarms.create("soulShepherd_breakEnd", {
      delayInMinutes: breakDuration
    });
    console.log(`[Background] Break timer started: ${breakDuration} minutes`);
    await stateManager.updateState({
      session: null,
      break: breakState,
      player: updatedPlayer,
      progression: updatedProgression,
      statistics: updatedStatistics
    });
    if (currentState.settings.notificationsEnabled) {
      chrome.notifications.create({
        type: "basic",
        iconUrl: chrome.runtime.getURL("assets/sprites/sprite_classic_shepherd.png"),
        title: "Soul Shepherd",
        message: "Session ended early. Reduced rewards applied."
      });
    }
    broadcastMessage({
      type: "SESSION_ENDED",
      payload: {
        result: sessionResult,
        leveledUp: levelResult.leveledUp,
        newLevel: levelResult.newLevel,
        skillPointsGranted: levelResult.skillPointsGranted,
        bossDefeated: bossResult.wasDefeated,
        nextBoss: bossResult.nextBoss,
        playerLevel: levelResult.newLevel,
        emergencyEnd: true
      }
    });
    const updatedState = stateManager.getState();
    broadcastMessage({
      type: "STATE_UPDATE",
      payload: { state: updatedState }
    });
    console.log("[Background] Emergency session end flow complete");
  }
  async function updateBlockingRules(blockedSites) {
    try {
      console.log("[Background] ========== UPDATING BLOCKING RULES ==========");
      console.log("[Background] Blocked sites:", blockedSites);
      const existingRules = await chrome.declarativeNetRequest.getDynamicRules();
      console.log("[Background] Existing rules before removal:", existingRules);
      const ruleIdsToRemove = existingRules.map((rule) => rule.id);
      if (ruleIdsToRemove.length > 0) {
        await chrome.declarativeNetRequest.updateDynamicRules({
          removeRuleIds: ruleIdsToRemove
        });
        console.log(
          `[Background] Removed ${ruleIdsToRemove.length} existing rules`
        );
      }
      if (blockedSites.length === 0) {
        console.log("[Background] No sites to block, rules cleared");
        console.log("[Background] ========================================");
        return;
      }
      const newRules = [];
      let ruleId = 1;
      blockedSites.forEach((domain) => {
        newRules.push({
          id: ruleId++,
          priority: 1,
          action: {
            type: chrome.declarativeNetRequest.RuleActionType.REDIRECT,
            redirect: {
              url: chrome.runtime.getURL(
                `blocked.html?url=${encodeURIComponent(domain)}`
              )
            }
          },
          condition: {
            urlFilter: domain,
            resourceTypes: [
              chrome.declarativeNetRequest.ResourceType.MAIN_FRAME
            ]
          }
        });
        newRules.push({
          id: ruleId++,
          priority: 1,
          action: {
            type: chrome.declarativeNetRequest.RuleActionType.REDIRECT,
            redirect: {
              url: chrome.runtime.getURL(
                `blocked.html?url=${encodeURIComponent(domain)}`
              )
            }
          },
          condition: {
            urlFilter: `.${domain}`,
            resourceTypes: [
              chrome.declarativeNetRequest.ResourceType.MAIN_FRAME
            ]
          }
        });
      });
      console.log("[Background] Creating rules:", JSON.stringify(newRules, null, 2));
      await chrome.declarativeNetRequest.updateDynamicRules({
        addRules: newRules
      });
      console.log(`[Background] Successfully added ${newRules.length} blocking rules`);
      const verifyRules = await chrome.declarativeNetRequest.getDynamicRules();
      console.log("[Background] Active rules after update:", verifyRules);
      console.log("[Background] ========================================");
    } catch (error) {
      console.error("[Background] Failed to update blocking rules:", error);
      console.error("[Background] Error details:", error);
    }
  }
  function startIdleDetection(idleThreshold) {
    if (idleDetectionActive) {
      console.warn("[Background] Idle detection already active");
      return;
    }
    chrome.idle.setDetectionInterval(idleThreshold);
    chrome.idle.onStateChanged.addListener(handleIdleStateChange);
    idleDetectionActive = true;
    idleStartTime = null;
    console.log(
      `[Background] Idle detection started with threshold: ${idleThreshold}s`
    );
  }
  function stopIdleDetection() {
    if (!idleDetectionActive) {
      return;
    }
    chrome.idle.onStateChanged.removeListener(handleIdleStateChange);
    idleDetectionActive = false;
    idleStartTime = null;
    console.log("[Background] Idle detection stopped");
  }
  async function handleIdleStateChange(newState) {
    console.log(`[Background] Idle state changed: ${newState}`);
    if (!stateManager) {
      stateManager = new StateManager();
      await stateManager.loadState();
    }
    if (!sessionManager) {
      sessionManager = new SessionManager();
    }
    const currentState = stateManager.getState();
    if (!currentState.session || !currentState.session.isActive) {
      console.log("[Background] No active session, ignoring idle state change");
      return;
    }
    switch (newState) {
      case "idle":
        if (!currentState.session.isPaused) {
          idleStartTime = Date.now();
          await handlePauseSession();
          console.log("[Background] Session paused due to idle detection");
        }
        break;
      case "active":
        if (currentState.session.isPaused && idleStartTime !== null) {
          const idleSeconds = Math.floor((Date.now() - idleStartTime) / 1e3);
          await handleResumeSession({ idleSeconds });
          console.log(`[Background] Session resumed after ${idleSeconds}s idle`);
          idleStartTime = null;
        }
        break;
      case "locked":
        if (!currentState.session.isPaused) {
          idleStartTime = Date.now();
          await handlePauseSession();
          console.log("[Background] Session paused due to screen lock");
        }
        break;
    }
  }
  async function broadcastMessage(message) {
    chrome.runtime.sendMessage(message).catch((error) => {
      if (!error.message.includes("Receiving end does not exist")) {
        console.error("[Background] Broadcast error:", error);
      }
    });
    try {
      const tabs = await chrome.tabs.query({});
      for (const tab of tabs) {
        if (tab.id) {
          chrome.tabs.sendMessage(tab.id, message).catch(() => {
          });
        }
      }
    } catch (error) {
      console.error("[Background] Error broadcasting to tabs:", error);
    }
  }
  async function checkForMissedTimersOnStartup() {
    console.log("[Background] Checking for missed timers on startup");
    const currentState = stateManager.getState();
    const now = Date.now();
    try {
      if (currentState.session?.isActive) {
        const sessionEndTime = currentState.session.startTime + currentState.session.duration * 60 * 1e3;
        const missedTime = now - sessionEndTime;
        if (missedTime > 0) {
          const missedMinutes = Math.floor(missedTime / (1e3 * 60));
          console.log(
            `[Background] Missed session end detected on startup: ${missedMinutes} minutes late`
          );
          console.log(
            `[Background] Session should have ended at: ${new Date(
              sessionEndTime
            ).toISOString()}`
          );
          await handleEndSessionRetroactive({
            actualEndTime: sessionEndTime,
            detectedAt: now
          });
        }
      }
      if (currentState.break?.isActive) {
        const breakEndTime = currentState.break.startTime + currentState.break.duration * 60 * 1e3;
        const missedTime = now - breakEndTime;
        if (missedTime > 0) {
          const missedMinutes = Math.floor(missedTime / (1e3 * 60));
          console.log(
            `[Background] Missed break end detected on startup: ${missedMinutes} minutes late`
          );
          console.log(
            `[Background] Break should have ended at: ${new Date(
              breakEndTime
            ).toISOString()}`
          );
          await handleEndBreakRetroactive({
            actualEndTime: breakEndTime,
            detectedAt: now
          });
        }
      }
      console.log("[Background] Missed timer check complete");
    } catch (error) {
      console.error("[Background] Error checking for missed timers:", error);
    }
  }
  function completeTask(taskState, taskId) {
    console.log(`[completeTask] Starting task completion for ID: ${taskId}`);
    console.log(`[completeTask] Total goals: ${taskState.goals.length}`);
    let taskFound = false;
    const updatedGoals = taskState.goals.map((goal) => {
      const updatedTasks = goal.tasks.map((task) => {
        if (task.id === taskId) {
          console.log(`[completeTask] Found matching task: ${task.name} (ID: ${task.id})`);
          console.log(`[completeTask] Marking task and ${task.subtasks.length} subtasks as complete`);
          taskFound = true;
          return {
            ...task,
            isComplete: true,
            subtasks: task.subtasks.map((subtask) => ({
              ...subtask,
              isComplete: true
            }))
          };
        }
        const updatedSubtasks = task.subtasks.map((subtask) => {
          if (subtask.id === taskId) {
            console.log(`[completeTask] Found matching subtask: ${subtask.name} (ID: ${subtask.id})`);
            taskFound = true;
            return {
              ...subtask,
              isComplete: true
            };
          }
          return subtask;
        });
        return {
          ...task,
          subtasks: updatedSubtasks
        };
      });
      return {
        ...goal,
        tasks: updatedTasks
      };
    });
    if (!taskFound) {
      console.warn(`[completeTask] WARNING: Task/subtask with ID ${taskId} not found!`);
    } else {
      console.log(`[completeTask] Task completion successful`);
    }
    return {
      ...taskState,
      goals: updatedGoals
    };
  }
})();
