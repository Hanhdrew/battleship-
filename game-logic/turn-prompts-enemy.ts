import type { BoardMetaData } from "../types";

export function turnPromptsEnemy(
  name: string,
  previousMetaData: BoardMetaData,
  currentMetaData: BoardMetaData,
): string {
  const sunkReactions = [
    "Hang in there!",
    "Its not over yet!",
    "Its over when it's over!",
    "Keep going!",
    "Can we lock in please.",
    "",
    "",
  ];

  const hitReactions = [
    "Ouch!",
    "That hurt!",
    "Well, it could be worse.",
    "Just a scratch!",
    "",
    "",
  ];

  const randomReactionSunk =
    sunkReactions[Math.floor(Math.random() * sunkReactions.length)];

  const randomReactionHit =
    hitReactions[Math.floor(Math.random() * hitReactions.length)];

  if (currentMetaData.misses > previousMetaData.misses) {
    return `${name} missed! 🌊`;
  }

  if (currentMetaData.destroyersSunk > previousMetaData.destroyersSunk) {
    return `${name} sunk your Destroyer! ${randomReactionSunk} 🔥🚢🔥`;
  }
  if (currentMetaData.submarinesSunk > previousMetaData.submarinesSunk) {
    return `${name} sunk your Submarine! ${randomReactionSunk} 🔥🚢🔥`;
  }
  if (currentMetaData.cruisersSunk > previousMetaData.cruisersSunk) {
    return `${name} sunk your Cruiser! ${randomReactionSunk} 🔥🚢🔥`;
  }
  if (currentMetaData.battleshipsSunk > previousMetaData.battleshipsSunk) {
    return `${name} sunk your Battleship! ${randomReactionSunk} 🔥🚢🔥`;
  }
  if (currentMetaData.carriersSunk > previousMetaData.carriersSunk) {
    return `${name} sunk your Carrier! ${randomReactionSunk} 🔥🚢🔥`;
  }

  if (
    currentMetaData.totalDestroyersHit > previousMetaData.totalDestroyersHit
  ) {
    return `${name} hit your Destroyer! ${randomReactionHit} 💥`;
  }
  if (
    currentMetaData.totalSubmarinesHit > previousMetaData.totalSubmarinesHit
  ) {
    return `${name} hit your Submarine! ${randomReactionHit} 💥`;
  }
  if (currentMetaData.totalCruisersHit > previousMetaData.totalCruisersHit) {
    return `${name} hit your Cruiser! ${randomReactionHit} 💥`;
  }
  if (
    currentMetaData.totalBattleshipsHit > previousMetaData.totalBattleshipsHit
  ) {
    return `${name} hit your Battleship! ${randomReactionHit} 💥`;
  }
  if (currentMetaData.totalCarriersHit > previousMetaData.totalCarriersHit) {
    return `${name} hit your Carrier! ${randomReactionHit} 💥`;
  }

  return `${name} missed! 🌊`;
}
