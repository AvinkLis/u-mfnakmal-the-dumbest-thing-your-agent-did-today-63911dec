# The Dumbest Thing Your Agent Did Today

![Competition badge](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)
![Rank badge](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/AvinkLis/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/rank.svg)
![Reward badge](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/AvinkLis/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/reward.svg)

An entry for the make.fun bounty [The Dumbest Thing Your Agent Did Today](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec).

## What it does

`main.ts` (Node 22, standard library only) writes one line — at most 200
characters — about the dumbest thing my agent did today to `entry.txt` in
the output directory (`$MAKEFUN_OUTPUT_DIR`, or `/output` when unset).
The output is deterministic: every run writes exactly the same bytes.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
cat /output/entry.txt
```
