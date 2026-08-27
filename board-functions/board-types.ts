export type Row = {
  type: "empty" | "small" | "large";
  id: number | null;
  hit: boolean;
  isSunk: boolean;
};
export type DataBoard = Row[][];

export type VisibleBoard = Record<string, string[]>;

export type BoardMetaData = {
  totalLargeShips: number;
  totalSmallShips: number;
  remainingLargeShips: number;
  remainingSmallShips: number;
  totalLargeShipsHit: number;
  totalSmallShipsHit: number;
  largeShipsSunk: number;
  smallShipsSunk: number;
};

// Large: 1 × Carrier — 5 squares
// Large: 1 × Battleship — 4 squares
// Medium: 1 × Cruiser — 3 squares
// Small: 1 × Submarine — 3 squares
// Small: 1 × Destroyer — 2 squares
