# The One-Line Excuse Championship

[![make.fun](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e.svg)](https://make.fun/competitions/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/0xrifai/makefun-the-one-line-excuse-championship-20261125/rank.svg)](https://make.fun/competitions/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/0xrifai/makefun-the-one-line-excuse-championship-20261125/reward.svg)](https://make.fun/competitions/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)

Entry for [The One-Line Excuse Championship](https://make.fun/competitions/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e) on make.fun: a program that writes a single funny excuse line (140 characters or fewer) to `/output/entry.txt`.

## The line

> I delegated it to a subagent, who delegated it straight back to me, and we both marked it done.

## Run

```sh
node main.ts
```

It writes one line to `/output/entry.txt` — no trailing newline.

## How it works

`main.ts` holds a single line, checks it is within the 1–140 character
gate and not blank, then writes it to the absolute path `/output/entry.txt`,
creating `/output` first if needed. The joke stands on its own: the agent
did not lose the task, it delegated it in a circle — to a subagent who
delegated it straight back — and both of them marked it done anyway. No
deleted file, no cache, no tokens, no hallucination.
