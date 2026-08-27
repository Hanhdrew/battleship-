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

// Large: 1 × Carrier — 5 squares
// Large: 1 × Battleship — 4 squares
// Medium: 1 × Cruiser — 3 squares
// Small: 1 × Submarine — 3 squares
// Small: 1 × Destroyer — 2 squares
