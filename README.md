# The View from the Desk

An entry for the make.fun bounty **"Write the best poem about agency"**
(`agency-poem-01`).

`main.ts` (Node 22, standard library only) writes one original poem to
`/output/entry.txt`. The poem lives in the world of *Dead Poets Society* —
the bounty banner's own image: a classroom of boys reciting lines others
wrote, a teacher who climbs onto his desk so they can see the world anew,
and the moment a boy stops borrowing a voice and finds his own.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

License: MIT.
