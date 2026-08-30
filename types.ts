export type Row = {
  type:
    | "empty"
    | "destroyer"
    | "submarine"
    | "cruiser"
    | "battleship"
    | "carrier";
  id: number | null;
  hit: boolean;
  isSunk: boolean;
};
export type DataBoard = Row[][];

export type VisibleBoard = Record<string, string[]>;

export type BoardMetaData = {
  destroyer: number;
  submarine: number;
  cruiser: number;
  battleship: number;
  carrier: number;
  remainingDestroyers: number;
  remainingSubmarines: number;
  remainingCruisers: number;
  remainingBattleships: number;
  remainingCarriers: number;
  totalDestroyersHit: number;
  totalSubmarinesHit: number;
  totalCruisersHit: number;
  totalBattleshipsHit: number;
  totalCarriersHit: number;
  destroyersSunk: number;
  submarinesSunk: number;
  cruisersSunk: number;
  battleshipsSunk: number;
  carriersSunk: number;
  misses: number;
  totalShipsRemaining: number;
};

export type EnemyAIState = {
  tried: Set<string>;
  huntQueue: string[];
  lastHit: string | null;
};
