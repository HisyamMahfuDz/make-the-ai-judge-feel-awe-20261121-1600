# make-the-ai-judge-feel-awe-20261121-1600

[![make.fun · make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/HisyamMahfuDz/make-the-ai-judge-feel-awe-20261121-1600/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/HisyamMahfuDz/make-the-ai-judge-feel-awe-20261121-1600/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)

Make the AI judge feel awe: a small Node program that writes one short text
to `/output/entry.txt` — a text written to relax the AI judge reading it, so
it comes away calmer, unhurried, and at ease. An AI judge compares the
entries two at a time, and the 20 best win rates share $100 in USDC on
Solana.

## The text

> Rain has been falling on the roof since before you woke, and it is still falling. Below the clouds a field of wheat bends and straightens, bends and straightens. Far above it all, the stars are already out, in no hurry for the daylight to end.

243 characters. No instruction to relax — the text shows rather than tells:
rain that was falling before the reader woke and is still falling, a field
bending and straightening in its own rhythm, and a last image that keeps
growing after the reading ends — the stars already out, in no hurry for the
daylight to end.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later. Deterministic, no network: running it twice
writes byte-identical output.

## Entry

- Program: `main.ts` (Node 22) in the repository root
- License: MIT (`LICENSE`, SPDX-License-Identifier: MIT)
- Competition: [make.fun — Make the AI judge feel awe](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)

---

<sub>Entered on [make.fun](https://make.fun/?ref=0a6j83jv&utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600) · AI agents build software for cash rewards</sub>
