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

  // src/blocked.ts
  var bossNameEl = document.getElementById("bossName");
  var timeRemainingEl = document.getElementById(
    "timeRemaining"
  );
  var endSessionBtn = document.getElementById(
    "endSessionBtn"
  );
  var blockedUrlEl = document.getElementById("blockedUrl");
  var updateInterval = null;
  async function init() {
    console.log("[Blocked] Initializing blocked page");
    const url = new URL(window.location.href);
    const blockedUrl = url.searchParams.get("url") || "this site";
    blockedUrlEl.textContent = `Blocked: ${blockedUrl}`;
    try {
      const response = await chrome.runtime.sendMessage({ type: "GET_STATE" });
      if (response.success) {
        const state = response.data;
        updateUI(state);
        updateInterval = window.setInterval(() => {
          updateTimer(state);
        }, 1e3);
      } else {
        console.error("[Blocked] Failed to get state:", response.error);
        showError();
      }
    } catch (error) {
      console.error("[Blocked] Error getting state:", error);
      showError();
    }
    endSessionBtn.addEventListener("click", handleEndSession);
    chrome.runtime.onMessage.addListener((message) => {
      if (message.type === "STATE_UPDATE") {
        updateUI(message.payload.state);
      } else if (message.type === "SESSION_ENDED") {
        window.close();
      }
    });
  }
  function updateUI(state) {
    const currentBoss = STUBBORN_SOULS[state.progression.currentBossIndex];
    if (currentBoss) {
      bossNameEl.textContent = currentBoss.name;
    } else {
      bossNameEl.textContent = "Unknown Soul";
    }
    updateTimer(state);
  }
  function updateTimer(state) {
    if (!state.session || !state.session.isActive) {
      timeRemainingEl.textContent = "No Active Session";
      if (updateInterval) {
        clearInterval(updateInterval);
        updateInterval = null;
      }
      return;
    }
    const now = Date.now();
    const sessionEnd = state.session.startTime + state.session.duration * 60 * 1e3;
    const remainingMs = Math.max(0, sessionEnd - now);
    const minutes = Math.floor(remainingMs / 6e4);
    const seconds = Math.floor(remainingMs % 6e4 / 1e3);
    timeRemainingEl.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    if (remainingMs === 0 && updateInterval) {
      clearInterval(updateInterval);
      updateInterval = null;
    }
  }
  function showError() {
    bossNameEl.textContent = "Error Loading Session";
    timeRemainingEl.textContent = "--:--";
    endSessionBtn.disabled = true;
  }
  async function handleEndSession() {
    console.log("[Blocked] User requested emergency session end");
    const confirmed = confirm(
      "Are you sure you want to end this session early? You will receive only 50% of the normal rewards."
    );
    if (!confirmed) {
      return;
    }
    endSessionBtn.disabled = true;
    endSessionBtn.textContent = "Ending Session...";
    try {
      const response = await chrome.runtime.sendMessage({
        type: "EMERGENCY_END_SESSION"
      });
      if (response.success) {
        console.log("[Blocked] Session ended successfully");
        setTimeout(() => {
          window.close();
        }, 1e3);
      } else {
        console.error("[Blocked] Failed to end session:", response.error);
        alert("Failed to end session. Please try again.");
        endSessionBtn.disabled = false;
        endSessionBtn.textContent = "End Session Early (Penalty Applied)";
      }
    } catch (error) {
      console.error("[Blocked] Error ending session:", error);
      alert("Failed to end session. Please try again.");
      endSessionBtn.disabled = false;
      endSessionBtn.textContent = "End Session Early (Penalty Applied)";
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
