"use client";

import { useState } from "react";
import DominoCard from "@/components/domino-card";
import {
  DEFAULT_DOMINOES,
  countDouble,
  sortDominoes,
  removeDuplicate,
  flipDominoes,
  removeByTotal,
  Domino,
} from "@/utils/domino";
import Controls from "@/components/controls";
import Border from "@/components/border";

export default function Home() {
  const [dominoes, setDominoes] = useState<Domino[]>(DEFAULT_DOMINOES);
  const [removeTotal, setRemoveTotal] = useState("");

  return (
    <main className="p-6 space-y-2 w-1/3">
      <h1 className="text-2xl font-bold">Dominoes</h1>

      <Border>
        <span className="font-semibold mb-4">Source</span>
        <br />
        <br />
        {JSON.stringify(dominoes)}
      </Border>

      <Border>
        <span className="font-semibold mb-4">Double Numbers</span>
        <br />
        <br />
        {countDouble(dominoes)}
      </Border>

      {/* Cards */}
      <div className="flex flex-wrap gap-2 my-4">
        {dominoes.map((d, i) => (
          <DominoCard key={i} domino={d} />
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-3">
        <Controls onClick={() => setDominoes(sortDominoes(dominoes, "asc"))}>
          Sort (ASC)
        </Controls>

        <Controls onClick={() => setDominoes(sortDominoes(dominoes, "desc"))}>
          Sort (DESC)
        </Controls>

        <Controls onClick={() => setDominoes(flipDominoes(dominoes))}>
          Flip
        </Controls>

        <Controls onClick={() => setDominoes(removeDuplicate(dominoes))}>
          Remove Dup
        </Controls>

        <Controls onClick={() => setDominoes(DEFAULT_DOMINOES)}>Reset</Controls>
      </div>

      {/* Remove by total */}
      <div className="flex flex-col gap-2 mt-4 items-start">
        <input
          placeholder="Input total number"
          value={removeTotal}
          onChange={(e) => setRemoveTotal(e.target.value)}
          className="px-2 py-1 rounded text-sm w-full border-gray-500"
        />

        <Controls
          onClick={() =>
            setDominoes(removeByTotal(dominoes, Number(removeTotal)))
          }
        >
          Remove
        </Controls>
      </div>
    </main>
  );
}
