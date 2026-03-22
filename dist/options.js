"use strict";
(() => {
  // src/constants.ts
  var STUBBORN_SOULS = [
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
  var DEFAULT_PLAYER_STATS = {
    spirit: 1,
    harmony: 0.05,
    // 5% crit chance
    soulflow: 1
  };
  var DEFAULT_COSMETICS = {
    ownedThemes: ["default"],
    ownedSprites: ["default"],
    activeTheme: "default",
    activeSprite: "default"
  };
  var DEFAULT_PLAYER_STATE = {
    level: 1,
    soulInsight: 0,
    soulInsightToNextLevel: 100,
    soulEmbers: 0,
    stats: { ...DEFAULT_PLAYER_STATS },
    skillPoints: 0,
    cosmetics: { ...DEFAULT_COSMETICS }
  };
  var DEFAULT_PROGRESSION_STATE = {
    currentBossIndex: 0,
    currentBossResolve: STUBBORN_SOULS[0].initialResolve,
    defeatedBosses: [],
    idleState: {
      lastCollectionTime: Date.now(),
      accumulatedSouls: 0
    }
  };
  var COSMETIC_THEMES = [
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
  var COSMETIC_SPRITES = [
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
  function getRankName(level) {
    const roman = ["I", "II", "III", "IV", "V"];
    if (level < 5) return `Shadow Soldier ${roman[(level - 1) % 5]}`;
    if (level < 10) return `Shadow Knight ${roman[(level - 1) % 5]}`;
    if (level < 15) return `Shadow Elite ${roman[(level - 1) % 5]}`;
    if (level < 20) return `Shadow Commander ${roman[(level - 1) % 5]}`;
    if (level < 25) return `Shadow Sovereign ${roman[(level - 1) % 5]}`;
    return `Shadow Monarch`;
  }

  // src/PlayerCardManager.ts
  function formatNumber(value, maxDecimals = 3) {
    const rounded = Number(value.toFixed(maxDecimals));
    return rounded.toString();
  }
  var PlayerCardManager = class {
    /**
     * Generate card data from game state
     * Handles missing or invalid data with sensible defaults
     */
    static generateCardData(state) {
      if (!state || !state.player) {
        console.warn("[PlayerCardManager] Invalid game state, using defaults");
        return this.getDefaultCardData();
      }
      const { player, statistics, progression } = state;
      const level = typeof player.level === "number" ? player.level : 1;
      const currentXP = typeof player.soulInsight === "number" ? player.soulInsight : 0;
      const xpToNextLevel = typeof player.soulInsightToNextLevel === "number" ? player.soulInsightToNextLevel : 100;
      const soulEmbers = typeof player.soulEmbers === "number" ? player.soulEmbers : 0;
      const stats = {
        spirit: player.stats?.spirit ?? 1,
        harmony: player.stats?.harmony ?? 0.05,
        soulflow: player.stats?.soulflow ?? 1
      };
      const achievements = {
        totalSessions: statistics?.totalSessions ?? 0,
        totalFocusTime: statistics?.totalFocusTime ?? 0,
        bossesDefeated: statistics?.bossesDefeated ?? 0,
        currentStreak: statistics?.currentStreak ?? 0
      };
      const spriteId = player.cosmetics?.activeSprite ?? "default";
      const themeId = player.cosmetics?.activeTheme ?? "default";
      const sprite = COSMETIC_SPRITES.find((s) => s.id === spriteId);
      const spritePath = sprite?.imagePath ?? COSMETIC_SPRITES[0].imagePath;
      const theme = COSMETIC_THEMES.find((t) => t.id === themeId);
      const themeName = theme?.name ?? COSMETIC_THEMES[0].name;
      const characterName = this.generateCharacterName(level);
      return {
        characterName,
        level,
        currentXP,
        xpToNextLevel,
        soulEmbers,
        stats,
        achievements,
        cosmetics: {
          spriteId,
          spritePath,
          themeId,
          themeName
        }
      };
    }
    /**
     * Get default card data for error cases
     */
    static getDefaultCardData() {
      return {
        characterName: "Novice Shepherd",
        level: 1,
        currentXP: 0,
        xpToNextLevel: 100,
        soulEmbers: 0,
        stats: {
          spirit: 1,
          harmony: 0.05,
          soulflow: 1
        },
        achievements: {
          totalSessions: 0,
          totalFocusTime: 0,
          bossesDefeated: 0,
          currentStreak: 0
        },
        cosmetics: {
          spriteId: "default",
          spritePath: COSMETIC_SPRITES[0].imagePath,
          themeId: "default",
          themeName: COSMETIC_THEMES[0].name
        }
      };
    }
    /**
     * Generate character name based on level
     */
    static generateCharacterName(level) {
      return getRankName(level);
    }
    /**
     * Show the player card modal
     * Creates modal if it doesn't exist, renders card, and sets up event listeners
     */
    static showCardModal(cardData) {
      this.modalElement = document.getElementById("player-card-modal");
      if (!this.modalElement) {
        this.createModalElement();
        this.modalElement = document.getElementById("player-card-modal");
      }
      if (!this.modalElement) {
        console.error("[PlayerCardManager] Failed to create modal element");
        return;
      }
      this.previouslyFocusedElement = document.activeElement;
      this.renderCard(cardData);
      this.modalElement.style.display = "flex";
      this.modalElement.setAttribute("aria-hidden", "false");
      this.setupEventListeners();
      this.setupFocusTrap();
      setTimeout(() => {
        if (this.modalElement) {
          this.modalElement.focus();
        }
      }, 100);
    }
    /**
     * Hide the player card modal
     * Removes event listeners and hides the modal
     */
    static hideCardModal() {
      if (!this.modalElement) {
        return;
      }
      this.modalElement.style.display = "none";
      this.modalElement.setAttribute("aria-hidden", "true");
      this.cleanupEventListeners();
      if (this.previouslyFocusedElement) {
        this.previouslyFocusedElement.focus();
        this.previouslyFocusedElement = null;
      }
      this.focusableElements = [];
      this.firstFocusableElement = null;
      this.lastFocusableElement = null;
    }
    /**
     * Convert hex color to rgba string
     */
    static hexToRgba(hex, alpha) {
      hex = hex.replace("#", "");
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    /**
     * Render card HTML into modal
     */
    static renderCard(data) {
      this.cardContentElement = document.getElementById("player-card-content");
      if (!this.cardContentElement) {
        console.error("[PlayerCardManager] Card content element not found");
        return;
      }
      const xpPercentage = data.xpToNextLevel > 0 ? data.currentXP / data.xpToNextLevel * 100 : 0;
      const hours = Math.floor(data.achievements.totalFocusTime / 60);
      const minutes = data.achievements.totalFocusTime % 60;
      const focusTimeFormatted = `${hours}h ${minutes}m`;
      const harmonyPercent = formatNumber(data.stats.harmony * 100, 3);
      const theme = COSMETIC_THEMES.find((t) => t.id === data.cosmetics.themeId);
      const themeColors = theme?.colors || COSMETIC_THEMES[0].colors;
      const primaryRgba = (alpha) => this.hexToRgba(themeColors.primary, alpha);
      const secondaryRgba = (alpha) => this.hexToRgba(themeColors.secondary, alpha);
      const accentRgba = (alpha) => this.hexToRgba(themeColors.accent, alpha);
      const cardHTML = `
      <!-- Card Header with Level, Name, and XP Bar -->
      <div class="card-header-section">
        <!-- Level badge -->
        <div class="card-level-circle" aria-label="Level ${data.level}">
          <div class="card-level-label">Level</div>
          <div class="card-level-number">${data.level}</div>
        </div>
        
        <!-- Character name -->
        <div class="card-character-title">${data.characterName}</div>
        
        <!-- XP bar with overlap -->
        <div class="card-xp-bar-wrapper" role="region" aria-label="Experience progress">
          <div class="card-xp-bar-container">
            <div class="card-xp-bar" role="progressbar" aria-valuenow="${xpPercentage}" aria-valuemin="0" aria-valuemax="100" style="width: ${xpPercentage}%"></div>
            <div class="card-xp-text">${formatNumber(data.currentXP, 3)} / ${formatNumber(data.xpToNextLevel, 3)} XP</div>
          </div>
        </div>
      </div>
      
      <!-- Row 1: Sprite and Achievements -->
      <div class="card-row-1">
        <!-- Sprite container (square) -->
        <div class="card-sprite-box" role="region" aria-label="Character sprite">
          <img 
            src="${data.cosmetics.spritePath}" 
            alt="${data.characterName} character sprite"
            class="card-sprite"
            onerror="this.src='${COSMETIC_SPRITES[0].imagePath}'; this.onerror=null;"
          />
        </div>
        
        <!-- Achievements section -->
        <div class="card-achievements-box" role="region" aria-label="Achievements">
          <div class="card-achievement-item" role="group" aria-label="Total sessions: ${data.achievements.totalSessions}">
            <div class="card-achievement-value">${data.achievements.totalSessions}</div>
            <div class="card-achievement-label">Sessions</div>
          </div>
          <div class="card-achievement-item" role="group" aria-label="Focus time: ${focusTimeFormatted}">
            <div class="card-achievement-value">${focusTimeFormatted}</div>
            <div class="card-achievement-label">Focus Time</div>
          </div>
          <div class="card-achievement-item" role="group" aria-label="Bosses defeated: ${data.achievements.bossesDefeated}">
            <div class="card-achievement-value">${data.achievements.bossesDefeated}</div>
            <div class="card-achievement-label">Bosses</div>
          </div>
          <div class="card-achievement-item" role="group" aria-label="Current streak: ${data.achievements.currentStreak}">
            <div class="card-achievement-value">${data.achievements.currentStreak}</div>
            <div class="card-achievement-label">Streak</div>
          </div>
        </div>
      </div>
      
      <!-- Row 2: Stats and Currencies -->
      <div class="card-row-2">
        <!-- Stats row -->
        <div class="card-stats-row" role="region" aria-label="Character statistics">
          <div class="card-stat-box" role="group" aria-label="Spirit stat: ${formatNumber(data.stats.spirit, 3)}">
            <div class="card-stat-value">${formatNumber(data.stats.spirit, 3)}</div>
            <div class="card-stat-label">Spirit</div>
          </div>
          <div class="card-stat-box" role="group" aria-label="Harmony stat: ${harmonyPercent} percent">
            <div class="card-stat-value">${harmonyPercent}%</div>
            <div class="card-stat-label">Harmony</div>
          </div>
          <div class="card-stat-box" role="group" aria-label="Soulflow stat: ${formatNumber(data.stats.soulflow, 3)}">
            <div class="card-stat-value">${formatNumber(data.stats.soulflow, 3)}</div>
            <div class="card-stat-label">Soulflow</div>
          </div>
        </div>
        
        <!-- Currencies section -->
        <div class="card-currencies-box" role="region" aria-label="Currencies">
          <div class="card-currency-item" role="group" aria-label="Soul Insight: ${formatNumber(data.currentXP, 3)}">
            <img src="assets/icons/soul_insight.png" alt="" class="card-currency-icon" aria-hidden="true" />
            <div class="card-currency-info">
              <div class="card-currency-label">Insight</div>
              <div class="card-currency-value">${formatNumber(data.currentXP, 3)}</div>
            </div>
          </div>
          <div class="card-currency-item" role="group" aria-label="Soul Embers: ${formatNumber(data.soulEmbers, 3)}">
            <img src="assets/icons/soul_ember.png" alt="" class="card-currency-icon" aria-hidden="true" />
            <div class="card-currency-info">
              <div class="card-currency-label">Embers</div>
              <div class="card-currency-value">${formatNumber(data.soulEmbers, 3)}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="card-footer" role="contentinfo">
        <div class="card-theme-name" aria-label="Active theme: ${data.cosmetics.themeName}">${data.cosmetics.themeName}</div>
      </div>
    `;
      this.cardContentElement.innerHTML = cardHTML;
      this.cardContentElement.style.background = themeColors.background;
      if (this.modalElement) {
        const cardContainer = this.modalElement.querySelector(".player-card-container");
        if (cardContainer) {
          cardContainer.style.background = themeColors.background;
        }
      }
      document.documentElement.style.setProperty("--xp-bar-solid-bg", themeColors.background);
    }
    /**
     * Apply theme colors as inline styles for html2canvas compatibility
     * html2canvas doesn't support color-mix() or CSS custom properties in some contexts,
     * so we inject rgba colors directly as inline styles
     */
    static applyThemeInlineStyles(container, colors) {
      const primaryRgba = (alpha) => this.hexToRgba(colors.primary, alpha);
      const header = container.querySelector(".player-card-header");
      if (header) {
        header.style.background = `linear-gradient(135deg, ${primaryRgba(0.15)} 0%, ${primaryRgba(0.05)} 100%)`;
        header.style.borderBottom = `2px solid ${primaryRgba(0.4)}`;
        const title = header.querySelector("h3");
        if (title) {
          title.style.textShadow = `0 2px 8px ${primaryRgba(0.5)}`;
        }
      }
      const charSection = container.querySelector(".card-character-section");
      if (charSection) {
        charSection.style.border = `2px solid ${primaryRgba(0.3)}`;
        const sprite = charSection.querySelector(".card-sprite");
        if (sprite) {
          sprite.style.filter = `drop-shadow(0 4px 12px ${primaryRgba(0.6)})`;
        }
      }
      const sections = container.querySelectorAll(".card-level-section, .card-stats-section, .card-resources-section, .card-achievements-section");
      sections.forEach((section) => {
        section.style.border = `1px solid ${primaryRgba(0.3)}`;
      });
      const items = container.querySelectorAll(".card-stat-item, .card-resource-item, .card-achievement-item");
      items.forEach((item) => {
        item.style.background = primaryRgba(0.05);
        item.style.border = `1px solid ${primaryRgba(0.15)}`;
      });
      const icons = container.querySelectorAll(".card-stat-icon, .card-resource-icon");
      icons.forEach((icon) => {
        icon.style.filter = `drop-shadow(0 2px 6px ${primaryRgba(0.5)})`;
      });
      const xpBar = container.querySelector(".card-xp-bar");
      if (xpBar) {
        xpBar.style.boxShadow = `0 0 12px ${primaryRgba(0.8)}`;
      }
      const xpBarContainer = container.querySelector(".card-xp-bar-container");
      if (xpBarContainer) {
        xpBarContainer.style.background = primaryRgba(0.15);
        xpBarContainer.style.border = `1px solid ${primaryRgba(0.3)}`;
      }
      const footer = container.querySelector(".card-footer");
      if (footer) {
        footer.style.background = primaryRgba(0.05);
        footer.style.borderTop = `1px solid ${primaryRgba(0.3)}`;
      }
      const values = container.querySelectorAll(".card-level-value, .card-stat-value, .card-achievement-value");
      values.forEach((value) => {
        value.style.textShadow = `0 2px 8px ${primaryRgba(0.5)}`;
      });
      const sectionTitle = container.querySelector(".card-section-title");
      if (sectionTitle) {
        sectionTitle.style.color = colors.primary;
      }
    }
    /**
     * Create modal element and append to body
     * Note: This method is not used as the modal is already in options.html
     * Keeping for backwards compatibility
     */
    static createModalElement() {
      console.warn("[PlayerCardManager] Modal element should already exist in options.html");
    }
    /**
     * Set up event listeners for modal interactions
     */
    static setupEventListeners() {
      if (!this.modalElement) return;
      const backdrop = this.modalElement.querySelector(".modal-backdrop");
      if (backdrop) {
        const backdropHandler = () => this.hideCardModal();
        backdrop.addEventListener("click", backdropHandler);
        this.eventListeners.push({ element: backdrop, event: "click", handler: backdropHandler });
      }
      const escHandler = (e) => {
        if (e.key === "Escape") {
          this.hideCardModal();
        }
      };
      document.addEventListener("keydown", escHandler);
      this.eventListeners.push({ element: document, event: "keydown", handler: escHandler });
    }
    /**
     * Clean up event listeners
     */
    static cleanupEventListeners() {
      this.eventListeners.forEach(({ element, event, handler }) => {
        element.removeEventListener(event, handler);
      });
      this.eventListeners = [];
    }
    /**
     * Set up focus trap to keep focus within modal
     * Implements keyboard navigation and prevents focus from leaving the modal
     * Note: Since we removed close buttons, the modal itself is focusable for screen readers
     */
    static setupFocusTrap() {
      if (!this.modalElement) return;
      const focusableSelectors = [
        "button:not([disabled])",
        "a[href]",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        '[tabindex]:not([tabindex="-1"])'
      ].join(", ");
      this.focusableElements = Array.from(
        this.modalElement.querySelectorAll(focusableSelectors)
      );
      if (this.focusableElements.length === 0) {
        return;
      }
      this.firstFocusableElement = this.focusableElements[0];
      this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1];
      const trapFocusHandler = (e) => {
        if (e.key !== "Tab") return;
        if (e.shiftKey && document.activeElement === this.firstFocusableElement) {
          e.preventDefault();
          this.lastFocusableElement?.focus();
        } else if (!e.shiftKey && document.activeElement === this.lastFocusableElement) {
          e.preventDefault();
          this.firstFocusableElement?.focus();
        }
      };
      this.modalElement.addEventListener("keydown", trapFocusHandler);
      this.eventListeners.push({
        element: this.modalElement,
        event: "keydown",
        handler: trapFocusHandler
      });
    }
    /**
     * Apply theme colors to the player card container
     * Sets the data-theme attribute which triggers CSS custom properties
     */
    static applyTheme(themeId) {
      const cardContainer = document.querySelector(".player-card-container");
      if (!cardContainer) {
        console.warn("[PlayerCardManager] Card container not found, cannot apply theme");
        return;
      }
      const theme = COSMETIC_THEMES.find((t) => t.id === themeId);
      if (!theme) {
        console.warn(`[PlayerCardManager] Theme '${themeId}' not found, using default`);
        cardContainer.setAttribute("data-theme", "default");
        return;
      }
      cardContainer.setAttribute("data-theme", themeId);
    }
    /**
     * Show notification toast with proper ARIA live region support
     */
    static showNotification(message, type) {
      let notificationContainer = document.getElementById("notification-container");
      if (!notificationContainer) {
        notificationContainer = document.createElement("div");
        notificationContainer.id = "notification-container";
        notificationContainer.className = "notification-container";
        notificationContainer.setAttribute("aria-live", type === "error" ? "assertive" : "polite");
        notificationContainer.setAttribute("aria-atomic", "true");
        notificationContainer.setAttribute("role", type === "error" ? "alert" : "status");
        document.body.appendChild(notificationContainer);
      } else {
        notificationContainer.setAttribute("aria-live", type === "error" ? "assertive" : "polite");
        notificationContainer.setAttribute("role", type === "error" ? "alert" : "status");
      }
      const notification = document.createElement("div");
      notification.className = `player-card-notification player-card-notification-${type}`;
      notification.textContent = message;
      notification.setAttribute("aria-label", `${type === "error" ? "Error" : "Success"}: ${message}`);
      notificationContainer.appendChild(notification);
      setTimeout(() => {
        notification.classList.add("show");
      }, 10);
      const dismissTime = type === "error" ? 5e3 : 3e3;
      setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => {
          notification.remove();
        }, 300);
      }, dismissTime);
    }
  };
  PlayerCardManager.modalElement = null;
  PlayerCardManager.cardContentElement = null;
  PlayerCardManager.eventListeners = [];
  PlayerCardManager.previouslyFocusedElement = null;
  PlayerCardManager.focusableElements = [];
  PlayerCardManager.firstFocusableElement = null;
  PlayerCardManager.lastFocusableElement = null;

  // src/options.ts
  var currentState = null;
  var currentModalMode = "add";
  var currentEditingId = null;
  var currentParentId = null;
  document.addEventListener("DOMContentLoaded", async () => {
    console.log("[Options] Initializing options page");
    createScreenReaderAnnouncementRegion();
    setupTabs();
    await loadSettings();
    setupEventListeners();
    handleURLParameters();
    setupKeyboardShortcuts();
    console.log("[Options] Options page initialized");
  });
  function setupTabs() {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const tabName = button.getAttribute("data-tab");
        tabButtons.forEach((btn) => {
          btn.classList.remove("active");
          btn.setAttribute("aria-selected", "false");
        });
        tabContents.forEach((content) => content.classList.remove("active"));
        button.classList.add("active");
        button.setAttribute("aria-selected", "true");
        const targetContent = document.getElementById(`${tabName}-section`);
        if (targetContent) {
          targetContent.classList.add("active");
        }
        if (tabName !== "statistics") {
          PlayerCardManager.hideCardModal();
        }
      });
    });
  }
  function switchToTab(tabName) {
    const tabButton = document.querySelector(
      `.tab-button[data-tab="${tabName}"]`
    );
    if (tabButton) {
      tabButton.click();
    }
  }
  function handleURLParameters() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const tab = urlParams.get("tab");
      const bossIdStr = urlParams.get("boss");
      if (tab === "guided-souls") {
        switchToTab("guided-souls");
        if (bossIdStr !== null && bossIdStr !== "") {
          const bossId = parseInt(bossIdStr);
          if (!isNaN(bossId) && bossId >= 0 && bossId <= 9) {
            showDetailView(bossId);
          } else {
            console.warn(`[Options] Invalid boss ID in URL: ${bossIdStr}`);
          }
        }
      }
    } catch (error) {
      console.error("[Options] Error handling URL parameters:", error);
    }
  }
  function renderGalleryView() {
    try {
      if (!currentState) {
        console.error("[Options] Cannot render gallery: state not loaded");
        showErrorMessage("souls-gallery", "Unable to load game state. Please refresh the page.");
        return;
      }
      const gallery = document.getElementById("souls-gallery");
      if (!gallery) {
        console.error("[Options] Gallery container not found");
        return;
      }
      gallery.innerHTML = "";
      if (!currentState.progression || !currentState.player) {
        console.error("[Options] Missing required state data");
        showErrorMessage("souls-gallery", "Game data is incomplete. Please refresh the page.");
        return;
      }
      const currentBossId = currentState.progression.currentBossIndex;
      const defeatedBosses = currentState.progression.defeatedBosses || [];
      const playerLevel = currentState.player.level || 1;
      let lockedCount = 0;
      let unlockedCount = 0;
      let defeatedCount = 0;
      STUBBORN_SOULS.forEach((soul) => {
        const isLocked = playerLevel < soul.unlockLevel;
        const isCurrent = soul.id === currentBossId;
        const isDefeated = defeatedBosses.includes(soul.id);
        if (isLocked) lockedCount++;
        else if (isDefeated) defeatedCount++;
        else unlockedCount++;
        const card = createSoulCard(soul, isLocked, isCurrent, isDefeated);
        gallery.appendChild(card);
      });
      announceToScreenReader(
        `Gallery loaded. ${defeatedCount} souls guided, ${unlockedCount} souls available, ${lockedCount} souls locked.`
      );
      console.log("[Options] Gallery view rendered");
    } catch (error) {
      console.error("[Options] Error rendering gallery view:", error);
      showErrorMessage("souls-gallery", "An error occurred while loading the gallery. Please refresh the page.");
    }
  }
  function createSoulCard(soul, isLocked, isCurrent, isDefeated) {
    const card = document.createElement("div");
    card.className = "soul-card";
    card.setAttribute("role", "listitem");
    if (isLocked) {
      card.classList.add("locked");
      card.setAttribute("aria-label", `${soul.name}, locked, requires level ${soul.unlockLevel}`);
    } else if (isCurrent) {
      card.classList.add("unlocked", "current");
      card.setAttribute("aria-label", `${soul.name}, current boss, click to view details`);
    } else if (isDefeated) {
      card.classList.add("defeated");
      card.setAttribute("aria-label", `${soul.name}, guided, click to view story`);
    } else {
      card.classList.add("unlocked");
      card.setAttribute("aria-label", `${soul.name}, unlocked, click to view details`);
    }
    const spriteContainer = document.createElement("div");
    spriteContainer.className = "soul-sprite-container";
    const sprite = document.createElement("img");
    sprite.className = "soul-sprite";
    sprite.src = `assets/sprites/${soul.sprite}`;
    sprite.alt = soul.name;
    spriteContainer.appendChild(sprite);
    if (isLocked) {
      const overlay = document.createElement("div");
      overlay.className = "unlock-level-overlay";
      overlay.textContent = soul.unlockLevel.toString();
      overlay.setAttribute("aria-hidden", "true");
      spriteContainer.appendChild(overlay);
    }
    if (isDefeated) {
      const badge = document.createElement("div");
      badge.className = "guided-badge";
      badge.textContent = "Guided";
      badge.setAttribute("aria-hidden", "true");
      spriteContainer.appendChild(badge);
    }
    card.appendChild(spriteContainer);
    const name = document.createElement("div");
    name.className = "soul-card-name";
    name.textContent = soul.name;
    card.appendChild(name);
    if (!isLocked) {
      card.style.cursor = "pointer";
      card.setAttribute("tabindex", "0");
      const clickHandler = () => {
        showDetailView(soul.id);
      };
      card.addEventListener("click", clickHandler);
      card.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          clickHandler();
        }
      });
    } else {
      card.style.cursor = "not-allowed";
      card.removeAttribute("tabindex");
    }
    return card;
  }
  function showDetailView(bossId) {
    try {
      if (!currentState) {
        console.error("[Options] Cannot show detail view: state not loaded");
        showErrorMessage("soul-detail", "Unable to load game state. Please refresh the page.");
        return;
      }
      if (typeof bossId !== "number" || bossId < 0 || bossId > 9) {
        console.error(`[Options] Invalid boss ID: ${bossId}`);
        return;
      }
      const soul = STUBBORN_SOULS.find((s) => s.id === bossId);
      if (!soul) {
        console.error(`[Options] Boss not found: ${bossId}`);
        return;
      }
      if (!soul.name || !soul.backstory || !soul.sprite) {
        console.error(`[Options] Boss ${bossId} has incomplete data`);
        showErrorMessage("soul-detail", "This soul's data is incomplete. Please contact support.");
        return;
      }
      const defeatedBosses = currentState.progression?.defeatedBosses || [];
      const isDefeated = defeatedBosses.includes(bossId);
      const gallery = document.getElementById("souls-gallery");
      const detailView = document.getElementById("soul-detail");
      if (!gallery || !detailView) {
        console.error("[Options] Required DOM elements not found");
        return;
      }
      gallery.style.display = "none";
      gallery.setAttribute("aria-hidden", "true");
      detailView.style.display = "block";
      detailView.removeAttribute("aria-hidden");
      renderDetailView(soul, isDefeated);
      const status = isDefeated ? "guided" : "unlocked";
      announceToScreenReader(`Viewing details for ${soul.name}, ${status} soul.`);
      setTimeout(() => {
        const backButton = document.getElementById("back-to-gallery-btn");
        if (backButton) {
          backButton.focus();
        }
      }, 100);
      console.log(`[Options] Detail view shown for boss: ${soul.name}`);
    } catch (error) {
      console.error("[Options] Error showing detail view:", error);
      hideDetailView();
    }
  }
  function renderDetailView(soul, isDefeated) {
    try {
      const detailView = document.getElementById("soul-detail");
      if (!detailView) {
        console.error("[Options] Detail view container not found");
        return;
      }
      detailView.innerHTML = "";
      detailView.setAttribute("role", "article");
      detailView.setAttribute("aria-labelledby", "detail-name");
      const backButton = document.createElement("button");
      backButton.id = "back-to-gallery-btn";
      backButton.className = "btn btn-secondary";
      backButton.innerHTML = "\u2190 Back to Gallery";
      backButton.setAttribute("aria-label", "Return to gallery");
      backButton.addEventListener("click", () => {
        hideDetailView();
      });
      backButton.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          hideDetailView();
        }
      });
      detailView.appendChild(backButton);
      const header = document.createElement("div");
      header.className = "soul-detail-header";
      const sprite = document.createElement("img");
      sprite.id = "detail-sprite";
      sprite.className = "soul-sprite-large";
      sprite.src = `assets/sprites/${soul.sprite}`;
      sprite.alt = soul.name;
      sprite.onerror = () => {
        console.warn(`[Options] Failed to load sprite: ${soul.sprite}`);
        sprite.style.display = "none";
      };
      header.appendChild(sprite);
      const name = document.createElement("h2");
      name.id = "detail-name";
      name.className = "soul-name";
      name.textContent = soul.name;
      header.appendChild(name);
      detailView.appendChild(header);
      const infoGrid = document.createElement("div");
      infoGrid.className = "soul-info-grid";
      const resolveItem = document.createElement("div");
      resolveItem.className = "info-item";
      resolveItem.innerHTML = `
      <span class="info-label">Initial Resolve:</span>
      <span id="detail-resolve" class="info-value">${soul.initialResolve || "Unknown"}</span>
    `;
      infoGrid.appendChild(resolveItem);
      const unlockItem = document.createElement("div");
      unlockItem.className = "info-item";
      unlockItem.innerHTML = `
      <span class="info-label">Unlock Level:</span>
      <span id="detail-unlock-level" class="info-value">${soul.unlockLevel || "Unknown"}</span>
    `;
      infoGrid.appendChild(unlockItem);
      detailView.appendChild(infoGrid);
      const backstorySection = document.createElement("div");
      backstorySection.className = "soul-backstory-section";
      backstorySection.innerHTML = `
      <h3>Backstory</h3>
      <p id="detail-backstory">${escapeHtml(soul.backstory || "No backstory available.")}</p>
    `;
      detailView.appendChild(backstorySection);
      const conversationSection = document.createElement("div");
      conversationSection.id = "final-conversation-section";
      conversationSection.className = "narrative-section";
      if (isDefeated) {
        if (soul.finalConversation && Array.isArray(soul.finalConversation) && soul.finalConversation.length > 0) {
          renderConversation(conversationSection, soul.finalConversation);
        } else {
          console.warn(`[Options] Missing conversation data for boss ${soul.id}`);
          conversationSection.innerHTML = "<h3>Final Conversation</h3><p>Conversation data unavailable.</p>";
        }
      } else {
        renderLockedPlaceholder(conversationSection, "Final Conversation");
      }
      detailView.appendChild(conversationSection);
      const resolutionSection = document.createElement("div");
      resolutionSection.id = "resolution-section";
      resolutionSection.className = "narrative-section";
      if (isDefeated) {
        if (soul.resolution && typeof soul.resolution === "string" && soul.resolution.trim().length > 0) {
          renderResolution(resolutionSection, soul.resolution);
        } else {
          console.warn(`[Options] Missing resolution data for boss ${soul.id}`);
          resolutionSection.innerHTML = "<h3>Resolution</h3><p>Resolution data unavailable.</p>";
        }
      } else {
        renderLockedPlaceholder(resolutionSection, "Resolution");
      }
      detailView.appendChild(resolutionSection);
      console.log(`[Options] Detail view rendered for: ${soul.name}, defeated: ${isDefeated}`);
    } catch (error) {
      console.error("[Options] Error rendering detail view:", error);
      showErrorMessage("soul-detail", "An error occurred while loading soul details.");
    }
  }
  function renderConversation(container, conversation) {
    container.innerHTML = "<h3>Final Conversation</h3>";
    const dialogueContainer = document.createElement("div");
    dialogueContainer.className = "dialogue-container";
    conversation.forEach((exchange) => {
      const bubble = document.createElement("div");
      bubble.className = `dialogue-bubble ${exchange.speaker}`;
      const speaker = document.createElement("div");
      speaker.className = "dialogue-speaker";
      speaker.textContent = exchange.speaker === "shepherd" ? "Soul Shepherd" : "Stubborn Soul";
      bubble.appendChild(speaker);
      const text = document.createElement("div");
      text.className = "dialogue-text";
      text.textContent = exchange.text;
      bubble.appendChild(text);
      dialogueContainer.appendChild(bubble);
    });
    container.appendChild(dialogueContainer);
  }
  function renderResolution(container, resolution) {
    container.innerHTML = "<h3>Resolution</h3>";
    const resolutionText = document.createElement("div");
    resolutionText.className = "resolution-text";
    resolutionText.textContent = resolution;
    container.appendChild(resolutionText);
  }
  function renderLockedPlaceholder(container, contentName) {
    container.innerHTML = `<h3>${contentName}</h3>`;
    const placeholder = document.createElement("div");
    placeholder.className = "locked-placeholder";
    placeholder.setAttribute("role", "status");
    placeholder.setAttribute("aria-label", `${contentName}, locked, guide this soul to unlock`);
    placeholder.textContent = `Guide this soul to unlock the ${contentName.toLowerCase()}`;
    container.appendChild(placeholder);
  }
  function hideDetailView() {
    try {
      const gallery = document.getElementById("souls-gallery");
      const detailView = document.getElementById("soul-detail");
      if (!gallery || !detailView) {
        console.error("[Options] Required DOM elements not found for navigation");
        return;
      }
      gallery.style.display = "";
      gallery.removeAttribute("aria-hidden");
      detailView.style.display = "none";
      detailView.setAttribute("aria-hidden", "true");
      announceToScreenReader("Returned to gallery view.");
      setTimeout(() => {
        if (gallery) {
          const firstUnlockedCard = gallery.querySelector('.soul-card:not(.locked)[tabindex="0"]');
          if (firstUnlockedCard) {
            firstUnlockedCard.focus();
          } else {
            gallery.setAttribute("tabindex", "-1");
            gallery.focus();
            gallery.removeAttribute("tabindex");
          }
        }
      }, 100);
      console.log("[Options] Returned to gallery view");
    } catch (error) {
      console.error("[Options] Error during navigation back to gallery:", error);
      const gallery = document.getElementById("souls-gallery");
      const detailView = document.getElementById("soul-detail");
      if (gallery) gallery.style.display = "";
      if (detailView) detailView.style.display = "none";
    }
  }
  async function loadSettings() {
    try {
      const response = await chrome.runtime.sendMessage({
        type: "GET_STATE"
      });
      if (response && response.success && response.data) {
        currentState = response.data;
        console.log("[Options] State loaded:", currentState);
        if (!currentState || !currentState.settings || !currentState.player || !currentState.progression) {
          console.error("[Options] State data is incomplete");
          showErrorMessage("souls-gallery", "Game data is incomplete. Please try reloading the extension.");
          return;
        }
        if (currentState) {
          populateSettings(currentState.settings);
          populateStatistics(currentState.statistics);
          populateTaskManagement(currentState.tasks);
          renderGalleryView();
          applyTheme(currentState.player.cosmetics.activeTheme);
          applySprite(currentState.player.cosmetics.activeSprite);
        }
      } else {
        console.error("[Options] Failed to load state: Invalid response");
        showErrorMessage("souls-gallery", "Unable to load game state. Please refresh the page.");
      }
    } catch (error) {
      console.error("[Options] Failed to load settings:", error);
      showErrorMessage("souls-gallery", "An error occurred while loading settings. Please refresh the page.");
    }
  }
  function populateSettings(settings) {
    const sessionDurationInput = document.getElementById(
      "default-session-duration"
    );
    const breakDurationInput = document.getElementById(
      "default-break-duration"
    );
    const autoStartInput = document.getElementById(
      "auto-start-next"
    );
    const idleThresholdInput = document.getElementById(
      "idle-threshold"
    );
    if (sessionDurationInput)
      sessionDurationInput.value = settings.defaultSessionDuration.toString();
    if (breakDurationInput)
      breakDurationInput.value = settings.defaultBreakDuration.toString();
    if (autoStartInput) autoStartInput.checked = settings.autoStartNextSession;
    const autoCompleteTaskInput = document.getElementById(
      "auto-complete-task"
    );
    if (autoCompleteTaskInput) autoCompleteTaskInput.checked = settings.autoCompleteTask;
    if (idleThresholdInput)
      idleThresholdInput.value = settings.idleThreshold.toString();
    const strictModeInput = document.getElementById(
      "strict-mode"
    );
    if (strictModeInput) {
      strictModeInput.checked = settings.strictMode;
      toggleBlockedSitesContainer(settings.strictMode);
    }
    populateSiteList("discouraged-sites-list", settings.discouragedSites);
    populateSiteList("blocked-sites-list", settings.blockedSites);
    const animationsInput = document.getElementById(
      "animations-enabled"
    );
    const notificationsInput = document.getElementById(
      "notifications-enabled"
    );
    const showTimerInput = document.getElementById(
      "show-session-timer"
    );
    const soundVolumeInput = document.getElementById(
      "sound-volume"
    );
    const volumeDisplay = document.getElementById("volume-display");
    if (animationsInput) animationsInput.checked = settings.animationsEnabled;
    if (notificationsInput)
      notificationsInput.checked = settings.notificationsEnabled;
    if (showTimerInput) showTimerInput.checked = settings.showSessionTimer;
    if (soundVolumeInput) {
      soundVolumeInput.value = (settings.soundVolume * 100).toString();
      if (volumeDisplay)
        volumeDisplay.textContent = `${Math.round(settings.soundVolume * 100)}%`;
    }
    if (currentState) {
      populateThemeSelector(currentState.player.cosmetics);
    }
  }
  function populateStatistics(statistics) {
    const totalSessionsEl = document.getElementById("stat-total-sessions");
    const totalTimeEl = document.getElementById("stat-total-time");
    const currentStreakEl = document.getElementById("stat-current-streak");
    const longestStreakEl = document.getElementById("stat-longest-streak");
    const bossesDefeatedEl = document.getElementById("stat-bosses-defeated");
    const currentLevelEl = document.getElementById("stat-current-level");
    const totalInsightEl = document.getElementById("stat-total-insight");
    const totalEmbersEl = document.getElementById("stat-total-embers");
    const spiritEl = document.getElementById("stat-spirit");
    const harmonyEl = document.getElementById("stat-harmony");
    const soulflowEl = document.getElementById("stat-soulflow");
    if (totalSessionsEl) {
      totalSessionsEl.textContent = statistics.totalSessions.toString();
    }
    if (totalTimeEl) {
      const hours = Math.floor(statistics.totalFocusTime / 60);
      const minutes = statistics.totalFocusTime % 60;
      totalTimeEl.textContent = `${hours}h ${minutes}m`;
    }
    if (currentStreakEl) {
      currentStreakEl.textContent = statistics.currentStreak.toString();
    }
    if (longestStreakEl) {
      longestStreakEl.textContent = statistics.longestStreak.toString();
    }
    if (bossesDefeatedEl) {
      bossesDefeatedEl.textContent = statistics.bossesDefeated.toString();
    }
    if (currentState) {
      if (currentLevelEl) {
        currentLevelEl.textContent = getRankName(currentState.player.level);
      }
      if (spiritEl) {
        spiritEl.textContent = currentState.player.stats.spirit.toFixed(1);
      }
      if (harmonyEl) {
        const harmonyPercent = (currentState.player.stats.harmony * 100).toFixed(
          1
        );
        harmonyEl.textContent = `${harmonyPercent}%`;
      }
      if (soulflowEl) {
        soulflowEl.textContent = currentState.player.stats.soulflow.toFixed(1);
      }
    }
    if (totalInsightEl) {
      totalInsightEl.textContent = statistics.totalSoulInsightEarned.toLocaleString();
    }
    if (totalEmbersEl) {
      totalEmbersEl.textContent = statistics.totalSoulEmbersEarned.toLocaleString();
    }
    const showPlayerCardBtn = document.getElementById("show-player-card-btn");
    if (currentState && showPlayerCardBtn) {
      const state = currentState;
      const sprite = COSMETIC_SPRITES.find(
        (s) => s.id === state.player.cosmetics.activeSprite
      );
      if (sprite) {
        showPlayerCardBtn.style.backgroundImage = `url('${sprite.imagePath}')`;
      }
    }
  }
  function populateTaskManagement(taskState) {
    const goalsContainer = document.getElementById("goals-container");
    if (!goalsContainer) return;
    goalsContainer.innerHTML = "";
    if (taskState.goals.length === 0) {
      goalsContainer.innerHTML = `
      <div style="text-align: center; padding: 40px; color: #808090;">
        <p>No goals yet. Click "Add Goal" to get started.</p>
      </div>
    `;
      return;
    }
    taskState.goals.forEach((goal) => {
      const goalCard = createGoalCard(goal);
      goalsContainer.appendChild(goalCard);
    });
  }
  function createGoalCard(goal) {
    const card = document.createElement("div");
    card.className = "goal-card";
    const goalHeader = document.createElement("div");
    goalHeader.className = "goal-header";
    const goalInfo = document.createElement("div");
    goalInfo.className = "goal-info";
    const goalTitle = document.createElement("div");
    goalTitle.className = "goal-title";
    goalTitle.textContent = goal.name;
    goalInfo.appendChild(goalTitle);
    if (goal.description) {
      const goalDesc = document.createElement("div");
      goalDesc.className = "goal-description";
      goalDesc.textContent = goal.description;
      goalInfo.appendChild(goalDesc);
    }
    const goalActions = document.createElement("div");
    goalActions.className = "goal-actions";
    goalActions.innerHTML = `
    <button class="btn btn-secondary btn-small btn-edit-goal" data-goal-id="${goal.id}">Edit</button>
    <button class="btn btn-danger btn-small btn-delete-goal" data-goal-id="${goal.id}">Delete</button>
  `;
    goalHeader.appendChild(goalInfo);
    goalHeader.appendChild(goalActions);
    card.appendChild(goalHeader);
    const tasksContainer = document.createElement("div");
    tasksContainer.className = "goal-tasks";
    goal.tasks.forEach((task) => {
      const taskElement = createTaskElement(task, goal.id);
      tasksContainer.appendChild(taskElement);
    });
    card.appendChild(tasksContainer);
    const addTaskBtn = document.createElement("button");
    addTaskBtn.className = "btn btn-secondary btn-add-task";
    addTaskBtn.textContent = "+ Add Task";
    addTaskBtn.setAttribute("data-goal-id", goal.id);
    addTaskBtn.classList.add("btn-add-task-to-goal");
    card.appendChild(addTaskBtn);
    return card;
  }
  function createTaskElement(task, goalId) {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";
    const taskHeader = document.createElement("div");
    taskHeader.className = "task-header";
    const taskTitleRow = document.createElement("div");
    taskTitleRow.className = "task-title-row";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.checked = task.isComplete;
    checkbox.setAttribute("data-task-id", task.id);
    checkbox.setAttribute("data-goal-id", goalId);
    const taskName = document.createElement("span");
    taskName.className = "task-name";
    if (task.isComplete) {
      taskName.classList.add("completed");
    }
    taskName.textContent = task.name;
    taskTitleRow.appendChild(checkbox);
    taskTitleRow.appendChild(taskName);
    const taskActions = document.createElement("div");
    taskActions.className = "task-actions";
    taskActions.innerHTML = `
    <button class="btn btn-secondary btn-small btn-edit-task" data-task-id="${task.id}" data-goal-id="${goalId}">Edit</button>
    <button class="btn btn-danger btn-small btn-delete-task" data-task-id="${task.id}" data-goal-id="${goalId}">Delete</button>
  `;
    taskHeader.appendChild(taskTitleRow);
    taskHeader.appendChild(taskActions);
    taskItem.appendChild(taskHeader);
    if (task.description) {
      const taskDesc = document.createElement("div");
      taskDesc.className = "task-description";
      taskDesc.textContent = task.description;
      taskItem.appendChild(taskDesc);
    }
    if (task.subtasks && task.subtasks.length > 0) {
      const subtasksContainer = document.createElement("div");
      subtasksContainer.className = "task-subtasks";
      task.subtasks.forEach((subtask) => {
        const subtaskElement = createSubtaskElement(subtask, task.id, goalId);
        subtasksContainer.appendChild(subtaskElement);
      });
      taskItem.appendChild(subtasksContainer);
    }
    const addSubtaskBtn = document.createElement("button");
    addSubtaskBtn.className = "btn btn-secondary btn-add-subtask";
    addSubtaskBtn.textContent = "+ Add Subtask";
    addSubtaskBtn.setAttribute("data-task-id", task.id);
    addSubtaskBtn.setAttribute("data-goal-id", goalId);
    addSubtaskBtn.classList.add("btn-add-subtask-to-task");
    taskItem.appendChild(addSubtaskBtn);
    return taskItem;
  }
  function createSubtaskElement(subtask, taskId, goalId) {
    const subtaskItem = document.createElement("div");
    subtaskItem.className = "subtask-item";
    const subtaskInfo = document.createElement("div");
    subtaskInfo.className = "subtask-info";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "subtask-checkbox";
    checkbox.checked = subtask.isComplete;
    checkbox.setAttribute("data-subtask-id", subtask.id);
    checkbox.setAttribute("data-task-id", taskId);
    checkbox.setAttribute("data-goal-id", goalId);
    const subtaskName = document.createElement("span");
    subtaskName.className = "subtask-name";
    if (subtask.isComplete) {
      subtaskName.classList.add("completed");
    }
    subtaskName.textContent = subtask.name;
    const subtaskDuration = document.createElement("span");
    subtaskDuration.className = "subtask-duration";
    subtaskDuration.textContent = `${subtask.estimatedDuration}m`;
    subtaskInfo.appendChild(checkbox);
    subtaskInfo.appendChild(subtaskName);
    subtaskInfo.appendChild(subtaskDuration);
    const subtaskActions = document.createElement("div");
    subtaskActions.className = "subtask-actions";
    subtaskActions.innerHTML = `
    <button class="btn btn-secondary btn-small btn-edit-subtask" data-subtask-id="${subtask.id}" data-task-id="${taskId}" data-goal-id="${goalId}">Edit</button>
    <button class="btn btn-danger btn-small btn-delete-subtask" data-subtask-id="${subtask.id}" data-task-id="${taskId}" data-goal-id="${goalId}">Delete</button>
  `;
    subtaskItem.appendChild(subtaskInfo);
    subtaskItem.appendChild(subtaskActions);
    return subtaskItem;
  }
  function populateSiteList(listId, sites) {
    const listElement = document.getElementById(listId);
    if (!listElement) return;
    listElement.innerHTML = "";
    if (sites.length === 0) {
      listElement.innerHTML = `
      <li style="text-align: center; padding: 20px; color: #808090;">
        No sites added yet
      </li>
    `;
      return;
    }
    sites.forEach((site) => {
      const listItem = document.createElement("li");
      listItem.className = "site-item";
      listItem.innerHTML = `
      <span class="site-domain">${escapeHtml(site)}</span>
      <button class="btn btn-danger btn-remove-site" data-site="${escapeHtml(
        site
      )}" data-list="${listId}">Remove</button>
    `;
      listElement.appendChild(listItem);
    });
  }
  function setupEventListeners() {
    setupInputListener("default-session-duration", (value) => {
      const input = document.getElementById(
        "default-session-duration"
      );
      const numValue = parseInt(value);
      if (numValue >= 5 && numValue <= 120) {
        updateSetting("defaultSessionDuration", numValue);
        if (input) {
          input.setCustomValidity("");
          input.style.borderColor = "";
        }
      } else {
        if (input) {
          input.setCustomValidity(
            "Session duration must be between 5 and 120 minutes"
          );
          input.style.borderColor = "#f87171";
          input.reportValidity();
        }
      }
    });
    setupInputListener("default-break-duration", (value) => {
      const input = document.getElementById(
        "default-break-duration"
      );
      const numValue = parseInt(value);
      if (numValue >= 1 && numValue <= 30) {
        updateSetting("defaultBreakDuration", numValue);
        if (input) {
          input.setCustomValidity("");
          input.style.borderColor = "";
        }
      } else {
        if (input) {
          input.setCustomValidity(
            "Break duration must be between 1 and 30 minutes"
          );
          input.style.borderColor = "#f87171";
          input.reportValidity();
        }
      }
    });
    setupCheckboxListener("auto-start-next", (checked) => {
      updateSetting("autoStartNextSession", checked);
    });
    setupCheckboxListener("auto-complete-task", (checked) => {
      updateSetting("autoCompleteTask", checked);
    });
    setupInputListener("idle-threshold", (value) => {
      const input = document.getElementById("idle-threshold");
      const numValue = parseInt(value);
      if (numValue >= 30 && numValue <= 600) {
        updateSetting("idleThreshold", numValue);
        if (input) {
          input.setCustomValidity("");
          input.style.borderColor = "";
        }
      } else {
        if (input) {
          input.setCustomValidity(
            "Idle threshold must be between 30 and 600 seconds"
          );
          input.style.borderColor = "#f87171";
          input.reportValidity();
        }
      }
    });
    setupCheckboxListener("strict-mode", (checked) => {
      updateSetting("strictMode", checked);
      toggleBlockedSitesContainer(checked);
    });
    const addDiscouragedBtn = document.getElementById("add-discouraged-site-btn");
    const discouragedInput = document.getElementById(
      "discouraged-site-input"
    );
    const discouragedError = document.getElementById("discouraged-site-error");
    if (addDiscouragedBtn && discouragedInput) {
      addDiscouragedBtn.addEventListener("click", () => {
        const domain = discouragedInput.value.trim();
        if (domain) {
          const validation = validateDomain(domain);
          if (validation.isValid) {
            addSiteToList("discouragedSites", validation.normalizedDomain);
            discouragedInput.value = "";
            if (discouragedError) {
              discouragedError.style.display = "none";
            }
          } else {
            if (discouragedError) {
              discouragedError.textContent = validation.error || "Invalid domain";
              discouragedError.style.display = "block";
            }
          }
        }
      });
      discouragedInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          addDiscouragedBtn.click();
        }
      });
      discouragedInput.addEventListener("input", () => {
        if (discouragedError) {
          discouragedError.style.display = "none";
        }
      });
    }
    const addBlockedBtn = document.getElementById("add-blocked-site-btn");
    const blockedInput = document.getElementById(
      "blocked-site-input"
    );
    const blockedError = document.getElementById("blocked-site-error");
    if (addBlockedBtn && blockedInput) {
      addBlockedBtn.addEventListener("click", () => {
        const domain = blockedInput.value.trim();
        if (domain) {
          const validation = validateDomain(domain);
          if (validation.isValid) {
            addSiteToList("blockedSites", validation.normalizedDomain);
            blockedInput.value = "";
            if (blockedError) {
              blockedError.style.display = "none";
            }
          } else {
            if (blockedError) {
              blockedError.textContent = validation.error || "Invalid domain";
              blockedError.style.display = "block";
            }
          }
        }
      });
      blockedInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          addBlockedBtn.click();
        }
      });
      blockedInput.addEventListener("input", () => {
        if (blockedError) {
          blockedError.style.display = "none";
        }
      });
    }
    const testUrlBtn = document.getElementById("test-url-btn");
    const testUrlInput = document.getElementById(
      "test-url-input"
    );
    const testUrlResult = document.getElementById("test-url-result");
    if (testUrlBtn && testUrlInput && testUrlResult) {
      testUrlBtn.addEventListener("click", () => {
        const url = testUrlInput.value.trim();
        if (url) {
          testUrl(url, testUrlResult);
        }
      });
      testUrlInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          testUrlBtn.click();
        }
      });
    }
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("btn-remove-site")) {
        const site = target.getAttribute("data-site");
        const listId = target.getAttribute("data-list");
        if (site && listId) {
          const settingKey = listId === "discouraged-sites-list" ? "discouragedSites" : "blockedSites";
          removeSiteFromList(settingKey, site);
        }
      }
    });
    setupCheckboxListener("animations-enabled", (checked) => {
      updateSetting("animationsEnabled", checked);
    });
    setupCheckboxListener("notifications-enabled", (checked) => {
      updateSetting("notificationsEnabled", checked);
    });
    setupCheckboxListener("show-session-timer", (checked) => {
      updateSetting("showSessionTimer", checked);
    });
    const soundVolumeInput = document.getElementById(
      "sound-volume"
    );
    const volumeDisplay = document.getElementById("volume-display");
    if (soundVolumeInput && volumeDisplay) {
      soundVolumeInput.addEventListener("input", () => {
        const value = parseInt(soundVolumeInput.value);
        volumeDisplay.textContent = `${value}%`;
        updateSetting("soundVolume", value / 100);
      });
    }
    const themeSelector = document.getElementById(
      "theme-selector"
    );
    if (themeSelector) {
      themeSelector.addEventListener("change", () => {
        const themeId = themeSelector.value;
        updateCosmetic("activeTheme", themeId);
        updateThemePreview(themeId);
        applyTheme(themeId);
      });
    }
    const showPlayerCardBtn = document.getElementById("show-player-card-btn");
    if (showPlayerCardBtn) {
      showPlayerCardBtn.addEventListener("click", () => {
        if (currentState) {
          const cardData = PlayerCardManager.generateCardData(currentState);
          PlayerCardManager.showCardModal(cardData);
        }
      });
    }
    const addGoalBtn = document.getElementById("add-goal-btn");
    if (addGoalBtn) {
      addGoalBtn.addEventListener("click", () => {
        openGoalModal("add", null);
      });
    }
    document.addEventListener("click", async (e) => {
      const target = e.target;
      if (target.classList.contains("btn-edit-goal")) {
        const goalId = target.getAttribute("data-goal-id");
        if (goalId) openGoalModal("edit", goalId);
      }
      if (target.classList.contains("btn-delete-goal")) {
        const goalId = target.getAttribute("data-goal-id");
        if (goalId && confirm("Are you sure you want to delete this goal and all its tasks?")) {
          await deleteGoal(goalId);
        }
      }
      if (target.classList.contains("btn-add-task-to-goal")) {
        const goalId = target.getAttribute("data-goal-id");
        if (goalId) openTaskModal("add", goalId, null);
      }
      if (target.classList.contains("btn-edit-task")) {
        const taskId = target.getAttribute("data-task-id");
        const goalId = target.getAttribute("data-goal-id");
        if (taskId && goalId) openTaskModal("edit", goalId, taskId);
      }
      if (target.classList.contains("btn-delete-task")) {
        const taskId = target.getAttribute("data-task-id");
        const goalId = target.getAttribute("data-goal-id");
        if (taskId && goalId && confirm(
          "Are you sure you want to delete this task and all its subtasks?"
        )) {
          await deleteTask(goalId, taskId);
        }
      }
      if (target.classList.contains("btn-add-subtask-to-task")) {
        const taskId = target.getAttribute("data-task-id");
        const goalId = target.getAttribute("data-goal-id");
        if (taskId && goalId) openSubtaskModal("add", goalId, taskId, null);
      }
      if (target.classList.contains("btn-edit-subtask")) {
        const subtaskId = target.getAttribute("data-subtask-id");
        const taskId = target.getAttribute("data-task-id");
        const goalId = target.getAttribute("data-goal-id");
        if (subtaskId && taskId && goalId)
          openSubtaskModal("edit", goalId, taskId, subtaskId);
      }
      if (target.classList.contains("btn-delete-subtask")) {
        const subtaskId = target.getAttribute("data-subtask-id");
        const taskId = target.getAttribute("data-task-id");
        const goalId = target.getAttribute("data-goal-id");
        if (subtaskId && taskId && goalId && confirm("Are you sure you want to delete this subtask?")) {
          await deleteSubtask(goalId, taskId, subtaskId);
        }
      }
    });
    document.addEventListener("change", async (e) => {
      const target = e.target;
      if (target.classList.contains("task-checkbox")) {
        const taskId = target.getAttribute("data-task-id");
        const goalId = target.getAttribute("data-goal-id");
        if (taskId && goalId) {
          await toggleTaskCompletion(goalId, taskId, target.checked);
        }
      }
      if (target.classList.contains("subtask-checkbox")) {
        const subtaskId = target.getAttribute("data-subtask-id");
        const taskId = target.getAttribute("data-task-id");
        const goalId = target.getAttribute("data-goal-id");
        if (subtaskId && taskId && goalId) {
          await toggleSubtaskCompletion(
            goalId,
            taskId,
            subtaskId,
            target.checked
          );
        }
      }
    });
    setupModalListeners();
  }
  function setupModalListeners() {
    const goalModal = document.getElementById("goal-modal");
    const goalModalClose = document.getElementById("goal-modal-close");
    const goalModalCancel = document.getElementById("goal-modal-cancel");
    const goalModalSave = document.getElementById("goal-modal-save");
    if (goalModalClose) {
      goalModalClose.addEventListener("click", () => closeModal("goal-modal"));
    }
    if (goalModalCancel) {
      goalModalCancel.addEventListener("click", () => closeModal("goal-modal"));
    }
    if (goalModalSave) {
      goalModalSave.addEventListener("click", () => saveGoal());
    }
    if (goalModal) {
      goalModal.addEventListener("click", (e) => {
        if (e.target === goalModal) closeModal("goal-modal");
      });
    }
    const taskModal = document.getElementById("task-modal");
    const taskModalClose = document.getElementById("task-modal-close");
    const taskModalCancel = document.getElementById("task-modal-cancel");
    const taskModalSave = document.getElementById("task-modal-save");
    if (taskModalClose) {
      taskModalClose.addEventListener("click", () => closeModal("task-modal"));
    }
    if (taskModalCancel) {
      taskModalCancel.addEventListener("click", () => closeModal("task-modal"));
    }
    if (taskModalSave) {
      taskModalSave.addEventListener("click", () => saveTask());
    }
    if (taskModal) {
      taskModal.addEventListener("click", (e) => {
        if (e.target === taskModal) closeModal("task-modal");
      });
    }
    const subtaskModal = document.getElementById("subtask-modal");
    const subtaskModalClose = document.getElementById("subtask-modal-close");
    const subtaskModalCancel = document.getElementById("subtask-modal-cancel");
    const subtaskModalSave = document.getElementById("subtask-modal-save");
    if (subtaskModalClose) {
      subtaskModalClose.addEventListener(
        "click",
        () => closeModal("subtask-modal")
      );
    }
    if (subtaskModalCancel) {
      subtaskModalCancel.addEventListener(
        "click",
        () => closeModal("subtask-modal")
      );
    }
    if (subtaskModalSave) {
      subtaskModalSave.addEventListener("click", () => saveSubtask());
    }
    if (subtaskModal) {
      subtaskModal.addEventListener("click", (e) => {
        if (e.target === subtaskModal) closeModal("subtask-modal");
      });
    }
  }
  function openGoalModal(mode, goalId) {
    currentModalMode = mode;
    currentEditingId = goalId;
    const modal = document.getElementById("goal-modal");
    const title = document.getElementById("goal-modal-title");
    const nameInput = document.getElementById("goal-name");
    const descInput = document.getElementById(
      "goal-description"
    );
    if (!modal || !title || !nameInput || !descInput) return;
    if (mode === "edit" && goalId && currentState) {
      const goal = currentState.tasks.goals.find((g) => g.id === goalId);
      if (goal) {
        title.textContent = "Edit Goal";
        nameInput.value = goal.name;
        descInput.value = goal.description || "";
      }
    } else {
      title.textContent = "Add Goal";
      nameInput.value = "";
      descInput.value = "";
    }
    modal.classList.add("active");
    nameInput.focus();
  }
  function openTaskModal(mode, goalId, taskId) {
    currentModalMode = mode;
    currentEditingId = taskId;
    currentParentId = goalId;
    const modal = document.getElementById("task-modal");
    const title = document.getElementById("task-modal-title");
    const nameInput = document.getElementById("task-name");
    const descInput = document.getElementById(
      "task-description"
    );
    if (!modal || !title || !nameInput || !descInput) return;
    if (mode === "edit" && taskId && currentState) {
      const goal = currentState.tasks.goals.find((g) => g.id === goalId);
      const task = goal?.tasks.find((t) => t.id === taskId);
      if (task) {
        title.textContent = "Edit Task";
        nameInput.value = task.name;
        descInput.value = task.description || "";
      }
    } else {
      title.textContent = "Add Task";
      nameInput.value = "";
      descInput.value = "";
    }
    modal.classList.add("active");
    nameInput.focus();
  }
  function openSubtaskModal(mode, goalId, taskId, subtaskId) {
    currentModalMode = mode;
    currentEditingId = subtaskId;
    currentParentId = taskId;
    const modal = document.getElementById("subtask-modal");
    const title = document.getElementById("subtask-modal-title");
    const nameInput = document.getElementById("subtask-name");
    const durationInput = document.getElementById(
      "subtask-duration"
    );
    if (!modal || !title || !nameInput || !durationInput) return;
    if (mode === "edit" && subtaskId && currentState) {
      const goal = currentState.tasks.goals.find((g) => g.id === goalId);
      const task = goal?.tasks.find((t) => t.id === taskId);
      const subtask = task?.subtasks.find((s) => s.id === subtaskId);
      if (subtask) {
        title.textContent = "Edit Subtask";
        nameInput.value = subtask.name;
        durationInput.value = subtask.estimatedDuration.toString();
      }
    } else {
      title.textContent = "Add Subtask";
      nameInput.value = "";
      durationInput.value = "25";
    }
    modal.classList.add("active");
    nameInput.focus();
  }
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove("active");
    }
    currentModalMode = "add";
    currentEditingId = null;
    currentParentId = null;
  }
  async function saveGoal() {
    const nameInput = document.getElementById("goal-name");
    const descInput = document.getElementById(
      "goal-description"
    );
    if (!nameInput || !currentState) return;
    const name = nameInput.value.trim();
    if (!name) {
      alert("Goal name is required");
      return;
    }
    if (currentModalMode === "add") {
      const newGoal = {
        id: `goal-${Date.now()}`,
        name,
        description: descInput.value.trim(),
        tasks: [],
        createdAt: Date.now()
      };
      currentState.tasks.goals.push(newGoal);
    } else if (currentModalMode === "edit" && currentEditingId) {
      const goal = currentState.tasks.goals.find(
        (g) => g.id === currentEditingId
      );
      if (goal) {
        goal.name = name;
        goal.description = descInput.value.trim();
      }
    }
    await updateTaskState(currentState.tasks);
    closeModal("goal-modal");
  }
  async function saveTask() {
    const nameInput = document.getElementById("task-name");
    const descInput = document.getElementById(
      "task-description"
    );
    if (!nameInput || !currentState || !currentParentId) return;
    const name = nameInput.value.trim();
    if (!name) {
      alert("Task name is required");
      return;
    }
    const goal = currentState.tasks.goals.find((g) => g.id === currentParentId);
    if (!goal) return;
    if (currentModalMode === "add") {
      const newTask = {
        id: `task-${Date.now()}`,
        goalId: currentParentId,
        name,
        description: descInput.value.trim(),
        subtasks: [],
        isComplete: false,
        createdAt: Date.now()
      };
      goal.tasks.push(newTask);
    } else if (currentModalMode === "edit" && currentEditingId) {
      const task = goal.tasks.find((t) => t.id === currentEditingId);
      if (task) {
        task.name = name;
        task.description = descInput.value.trim();
      }
    }
    await updateTaskState(currentState.tasks);
    closeModal("task-modal");
  }
  async function saveSubtask() {
    const nameInput = document.getElementById("subtask-name");
    const durationInput = document.getElementById(
      "subtask-duration"
    );
    if (!nameInput || !durationInput || !currentState || !currentParentId) return;
    const name = nameInput.value.trim();
    const duration = parseInt(durationInput.value);
    if (!name) {
      alert("Subtask name is required");
      return;
    }
    if (isNaN(duration) || duration < 5 || duration > 120) {
      alert("Duration must be between 5 and 120 minutes");
      return;
    }
    let goal;
    let task;
    for (const g of currentState.tasks.goals) {
      task = g.tasks.find((t) => t.id === currentParentId);
      if (task) {
        goal = g;
        break;
      }
    }
    if (!goal || !task) return;
    if (currentModalMode === "add") {
      const newSubtask = {
        id: `subtask-${Date.now()}`,
        taskId: currentParentId,
        name,
        estimatedDuration: duration,
        isComplete: false,
        createdAt: Date.now()
      };
      task.subtasks.push(newSubtask);
    } else if (currentModalMode === "edit" && currentEditingId) {
      const subtask = task.subtasks.find((s) => s.id === currentEditingId);
      if (subtask) {
        subtask.name = name;
        subtask.estimatedDuration = duration;
      }
    }
    await updateTaskState(currentState.tasks);
    closeModal("subtask-modal");
  }
  async function deleteGoal(goalId) {
    if (!currentState) return;
    currentState.tasks.goals = currentState.tasks.goals.filter(
      (g) => g.id !== goalId
    );
    await updateTaskState(currentState.tasks);
  }
  async function deleteTask(goalId, taskId) {
    if (!currentState) return;
    const goal = currentState.tasks.goals.find((g) => g.id === goalId);
    if (goal) {
      goal.tasks = goal.tasks.filter((t) => t.id !== taskId);
      await updateTaskState(currentState.tasks);
    }
  }
  async function deleteSubtask(goalId, taskId, subtaskId) {
    if (!currentState) return;
    const goal = currentState.tasks.goals.find((g) => g.id === goalId);
    const task = goal?.tasks.find((t) => t.id === taskId);
    if (task) {
      task.subtasks = task.subtasks.filter((s) => s.id !== subtaskId);
      await updateTaskState(currentState.tasks);
    }
  }
  async function toggleTaskCompletion(goalId, taskId, isComplete) {
    if (!currentState) return;
    const goal = currentState.tasks.goals.find((g) => g.id === goalId);
    const task = goal?.tasks.find((t) => t.id === taskId);
    if (task) {
      task.isComplete = isComplete;
      if (task.subtasks && task.subtasks.length > 0) {
        task.subtasks.forEach((subtask) => {
          subtask.isComplete = isComplete;
        });
      }
      await updateTaskState(currentState.tasks);
    }
  }
  async function toggleSubtaskCompletion(goalId, taskId, subtaskId, isComplete) {
    if (!currentState) return;
    const goal = currentState.tasks.goals.find((g) => g.id === goalId);
    const task = goal?.tasks.find((t) => t.id === taskId);
    const subtask = task?.subtasks.find((s) => s.id === subtaskId);
    if (subtask) {
      subtask.isComplete = isComplete;
      await updateTaskState(currentState.tasks);
    }
  }
  async function updateTaskState(taskState) {
    try {
      await chrome.runtime.sendMessage({
        type: "UPDATE_TASKS",
        payload: taskState
      });
      populateTaskManagement(taskState);
      console.log("[Options] Task state updated");
    } catch (error) {
      console.error("[Options] Failed to update task state:", error);
    }
  }
  function setupInputListener(elementId, callback) {
    const element = document.getElementById(elementId);
    if (element) {
      element.addEventListener("change", () => {
        callback(element.value);
      });
    }
  }
  function setupCheckboxListener(elementId, callback) {
    const element = document.getElementById(elementId);
    if (element) {
      element.addEventListener("change", () => {
        callback(element.checked);
      });
    }
  }
  async function updateSetting(key, value) {
    if (!currentState) return;
    try {
      currentState.settings[key] = value;
      await chrome.runtime.sendMessage({
        type: "UPDATE_SETTINGS",
        payload: {
          [key]: value
        }
      });
      console.log(`[Options] Setting updated: ${key} = ${value}`);
    } catch (error) {
      console.error(`[Options] Failed to update setting ${key}:`, error);
    }
  }
  async function addSiteToList(listKey, site) {
    if (!currentState) return;
    try {
      const currentList = currentState.settings[listKey];
      if (!currentList.includes(site)) {
        const updatedList = [...currentList, site];
        await updateSetting(listKey, updatedList);
        populateSiteList(
          listKey === "discouragedSites" ? "discouraged-sites-list" : "blocked-sites-list",
          updatedList
        );
      }
    } catch (error) {
      console.error(`[Options] Failed to add site to ${listKey}:`, error);
    }
  }
  async function removeSiteFromList(listKey, site) {
    if (!currentState) return;
    try {
      const currentList = currentState.settings[listKey];
      const updatedList = currentList.filter((s) => s !== site);
      await updateSetting(listKey, updatedList);
      populateSiteList(
        listKey === "discouragedSites" ? "discouraged-sites-list" : "blocked-sites-list",
        updatedList
      );
    } catch (error) {
      console.error(`[Options] Failed to remove site from ${listKey}:`, error);
    }
  }
  function toggleBlockedSitesContainer(show) {
    const container = document.getElementById("blocked-sites-container");
    if (container) {
      container.style.display = show ? "block" : "none";
    }
  }
  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
  function validateDomain(input) {
    let domain = input.trim();
    if (!domain) {
      return {
        isValid: false,
        normalizedDomain: "",
        error: "Domain cannot be empty"
      };
    }
    domain = domain.replace(/^https?:\/\//i, "");
    domain = domain.split("/")[0];
    domain = domain.split("?")[0];
    domain = domain.split("#")[0];
    domain = domain.split(":")[0];
    domain = domain.replace(/^www\./i, "");
    const domainRegex = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,}$/i;
    if (!domainRegex.test(domain)) {
      return {
        isValid: false,
        normalizedDomain: domain,
        error: "Invalid domain format. Use format: example.com"
      };
    }
    if (/[^a-z0-9\-\.]/i.test(domain)) {
      return {
        isValid: false,
        normalizedDomain: domain,
        error: "Domain contains invalid characters"
      };
    }
    if (currentState) {
      const allSites = [
        ...currentState.settings.discouragedSites,
        ...currentState.settings.blockedSites
      ];
      if (allSites.includes(domain)) {
        return {
          isValid: false,
          normalizedDomain: domain,
          error: "This domain is already in your lists"
        };
      }
    }
    return {
      isValid: true,
      normalizedDomain: domain
    };
  }
  function testUrl(url, resultElement) {
    if (!currentState) {
      resultElement.textContent = "Error: State not loaded";
      resultElement.className = "test-result";
      resultElement.style.display = "block";
      return;
    }
    let domain;
    try {
      const urlObj = new URL(url.startsWith("http") ? url : `https://${url}`);
      domain = urlObj.hostname;
    } catch (e) {
      domain = url.replace(/^https?:\/\//i, "");
      domain = domain.split("/")[0];
      domain = domain.split("?")[0];
      domain = domain.split("#")[0];
      domain = domain.split(":")[0];
    }
    const normalizedDomain = domain.replace(/^www\./i, "");
    const isDiscouraged = currentState.settings.discouragedSites.some(
      (site) => domainMatches(normalizedDomain, site)
    );
    const isBlocked = currentState.settings.blockedSites.some(
      (site) => domainMatches(normalizedDomain, site)
    );
    resultElement.style.display = "block";
    if (isBlocked) {
      resultElement.className = "test-result blocked";
      resultElement.innerHTML = `
      <strong>\u{1F6AB} BLOCKED</strong>
      This URL will be completely blocked during focus sessions when strict mode is enabled.
      <br><br>
      <strong>Domain:</strong> ${escapeHtml(normalizedDomain)}
    `;
    } else if (isDiscouraged) {
      resultElement.className = "test-result discouraged";
      resultElement.innerHTML = `
      <strong>\u26A0\uFE0F DISCOURAGED</strong>
      This URL will show a warning during focus sessions and reduce your rewards if visited.
      <br><br>
      <strong>Domain:</strong> ${escapeHtml(normalizedDomain)}
    `;
    } else {
      resultElement.className = "test-result allowed";
      resultElement.innerHTML = `
      <strong>\u2713 ALLOWED</strong>
      This URL is not in your discouraged or blocked lists. You can visit it freely during focus sessions.
      <br><br>
      <strong>Domain:</strong> ${escapeHtml(normalizedDomain)}
    `;
    }
  }
  function domainMatches(testDomain, listDomain) {
    if (testDomain === listDomain) {
      return true;
    }
    if (testDomain.endsWith(`.${listDomain}`)) {
      return true;
    }
    return false;
  }
  function populateThemeSelector(cosmetics) {
    const themeSelector = document.getElementById(
      "theme-selector"
    );
    if (!themeSelector) return;
    themeSelector.innerHTML = "";
    const ownedThemes = cosmetics.ownedThemes || ["default"];
    const activeTheme = cosmetics.activeTheme || "default";
    COSMETIC_THEMES.forEach((theme) => {
      const option = document.createElement("option");
      option.value = theme.id;
      option.textContent = theme.name;
      if (!ownedThemes.includes(theme.id)) {
        option.disabled = true;
        option.textContent = `${theme.name} (Locked - ${theme.cost} Soul Embers)`;
      }
      if (theme.id === activeTheme) {
        option.selected = true;
      }
      themeSelector.appendChild(option);
    });
    updateThemePreview(activeTheme);
  }
  function updateThemePreview(themeId) {
    const previewContainer = document.getElementById("theme-preview");
    if (!previewContainer) return;
    const theme = COSMETIC_THEMES.find((t) => t.id === themeId);
    if (!theme) return;
    previewContainer.classList.add("active");
    previewContainer.innerHTML = `
    <div class="theme-preview-header">
      <div class="theme-preview-name">${escapeHtml(theme.name)}</div>
      ${theme.cost > 0 ? `<div class="theme-preview-cost">${theme.cost} Soul Embers</div>` : ""}
    </div>
    <div class="theme-preview-description">${escapeHtml(
      theme.description
    )}</div>
    <div class="theme-preview-colors">
      <div class="theme-color-swatch" style="background: ${theme.colors.primary};" title="Primary"></div>
      <div class="theme-color-swatch" style="background: ${theme.colors.secondary};" title="Secondary"></div>
      <div class="theme-color-swatch" style="background: ${theme.colors.accent};" title="Accent"></div>
      <div class="theme-color-swatch" style="background: ${theme.colors.background};" title="Background"></div>
    </div>
  `;
  }
  async function updateCosmetic(key, value) {
    if (!currentState) return;
    try {
      const type = key === "activeTheme" ? "theme" : "sprite";
      await chrome.runtime.sendMessage({
        type: "APPLY_COSMETIC",
        payload: {
          type,
          itemId: value
        }
      });
      currentState.player.cosmetics[key] = value;
      console.log(`[Options] Cosmetic updated: ${key} = ${value}`);
    } catch (error) {
      console.error(`[Options] Failed to update cosmetic ${key}:`, error);
    }
  }
  function applyTheme(themeId) {
    const theme = COSMETIC_THEMES.find((t) => t.id === themeId);
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
  }
  function showErrorMessage(containerId, message) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`[Options] Container not found: ${containerId}`);
      return;
    }
    container.innerHTML = `
    <div class="error-message" role="alert" style="
      padding: 20px;
      text-align: center;
      color: #f87171;
      background: rgba(248, 113, 113, 0.1);
      border: 1px solid #f87171;
      border-radius: 8px;
      margin: 20px;
    ">
      <p style="margin: 0; font-weight: 500;">${escapeHtml(message)}</p>
    </div>
  `;
  }
  function createScreenReaderAnnouncementRegion() {
    if (document.getElementById("sr-announcements")) {
      return;
    }
    const liveRegion = document.createElement("div");
    liveRegion.id = "sr-announcements";
    liveRegion.setAttribute("role", "status");
    liveRegion.setAttribute("aria-live", "polite");
    liveRegion.setAttribute("aria-atomic", "true");
    liveRegion.style.position = "absolute";
    liveRegion.style.left = "-10000px";
    liveRegion.style.width = "1px";
    liveRegion.style.height = "1px";
    liveRegion.style.overflow = "hidden";
    document.body.appendChild(liveRegion);
  }
  function announceToScreenReader(message) {
    const liveRegion = document.getElementById("sr-announcements");
    if (!liveRegion) {
      console.warn("[Options] Screen reader announcement region not found");
      return;
    }
    liveRegion.textContent = "";
    setTimeout(() => {
      liveRegion.textContent = message;
    }, 100);
  }
  function setupKeyboardShortcuts() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const detailView = document.getElementById("soul-detail");
        if (detailView && detailView.style.display !== "none") {
          hideDetailView();
        }
      }
    });
  }
  function applySprite(spriteId) {
    const sprite = COSMETIC_SPRITES.find((s) => s.id === spriteId);
    if (!sprite) return;
    const statisticsSprite = document.getElementById(
      "statistics-character-sprite"
    );
    if (statisticsSprite) {
      statisticsSprite.src = sprite.imagePath;
    }
  }
})();
