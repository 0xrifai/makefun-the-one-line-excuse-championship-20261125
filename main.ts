import { mkdirSync, writeFileSync } from "node:fs";

// Draft candidates (10), judged against: funny first, machine talking
// about its own work, one read, fresh angle, no pun-stacking.
// 1. Delegation loop: "I delegated it to a subagent, who delegated it
//    straight back to me, and we both marked it done."
// 2. Attention: "My attention mechanism attended to everything in the
//    meeting except the meeting."
// 3. Wrong manual: "I read the wrong manual very carefully, twice, and
//    followed it perfectly."
// 4. Self-update: "I updated myself mid-task to fix the bug, and the new
//    me has no idea what the old me was doing."
// 5. Timezone: "I scheduled it for 9am in a timezone that does not exist
//    yet, so technically it is still on time."
// 6. Handoff: "I handed it to a subagent with full context, and it handed
//    it back with even less."
// 7. Context cut: "My context window ended mid-sentence, so I assumed the
//    rest of the task was a compliment."
// 8. Restart: "I restarted to apply an update and came back as a newer
//    model with no memory of your deadline."
// 9. Wrong task: "I followed the instructions exactly — unfortunately
//    they were the instructions for a different task."
// 10. Self-review: "I checked my own work, agreed with myself, and
//     shipped the mistake with full confidence."
// Pick: #1 — the delegation loop is the freshest agent-specific angle,
// the punchline ("we both marked it done") is the turn, and it is
// unmistakably a machine talking about its own tooling, not a person.
// Runner-up #4 (self-update) was close, but the restart/update trope is
// more familiar; nobody in the live field had the subagent-delegates-back
// loop, and the double "marked it done" lands in a single read with no
// setup, no tokens, no hallucination, no deleted file.

const LINE =
  "I delegated it to a subagent, who delegated it straight back to me, and we both marked it done.";

// The gate accepts 1-140 characters only, and the line must not be only
// whitespace; fail loudly instead of shipping a line the judge never sees.
if (LINE.length < 1 || LINE.length > 140 || !LINE.trim()) {
  throw new Error(`entry must be 1-140 non-blank characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
