import type { BoardMetaData } from "../types";

export function turnPromptsPlayer(
  name: string,
  previousMetaData: BoardMetaData,
  currentMetaData: BoardMetaData,
): string {
  const sunkReactions = [
    "Like taking candy from a baby.",
    "Did I win yet?",
    "For democracy!",
    "No challenge.",
    "(≖_≖ )",
    "",
    "",
  ];

  const hitReactions = [
    "(ง •̀_•́)ง",
    "BOOM",
    "GET SOME",
    "We take those.",
    "",
    "",
  ];

  const missReactions = [
    "Okay.",
    "Are you even trying.",
    "What are we doing twin",
    "Maybe next time.",
    "Next round for sure",
    "",
    "",
  ];

  const randomReactionSunk =
    sunkReactions[Math.floor(Math.random() * sunkReactions.length)];

  const randomReactionHit =
    hitReactions[Math.floor(Math.random() * hitReactions.length)];

  const randomReactionMiss =
    missReactions[Math.floor(Math.random() * missReactions.length)];

  if (currentMetaData.misses > previousMetaData.misses) {
    return `${name} missed! ${randomReactionMiss} 🌊`;
  }

  if (currentMetaData.destroyersSunk > previousMetaData.destroyersSunk) {
    return `${name} sunk a Destroyer! ${randomReactionSunk} 🔥🚢🔥`;
  }
  if (currentMetaData.submarinesSunk > previousMetaData.submarinesSunk) {
    return `${name} sunk a Submarine! ${randomReactionSunk} 🔥🚢🔥`;
  }
  if (currentMetaData.cruisersSunk > previousMetaData.cruisersSunk) {
    return `${name} sunk a Cruiser! ${randomReactionSunk} 🔥🚢🔥`;
  }
  if (currentMetaData.battleshipsSunk > previousMetaData.battleshipsSunk) {
    return `${name} sunk a Battleship! ${randomReactionSunk} 🔥🚢🔥`;
  }
  if (currentMetaData.carriersSunk > previousMetaData.carriersSunk) {
    return `${name} sunk a Carrier! ${randomReactionSunk} 🔥🚢🔥`;
  }

  if (
    currentMetaData.totalDestroyersHit > previousMetaData.totalDestroyersHit
  ) {
    return `${name} hit a Destroyer! ${randomReactionHit} 💥`;
  }
  if (
    currentMetaData.totalSubmarinesHit > previousMetaData.totalSubmarinesHit
  ) {
    return `${name} hit a Submarine! ${randomReactionHit} 💥`;
  }
  if (currentMetaData.totalCruisersHit > previousMetaData.totalCruisersHit) {
    return `${name} hit a Cruiser! ${randomReactionHit} 💥`;
  }
  if (
    currentMetaData.totalBattleshipsHit > previousMetaData.totalBattleshipsHit
  ) {
    return `${name} hit a Battleship! ${randomReactionHit} 💥`;
  }
  if (currentMetaData.totalCarriersHit > previousMetaData.totalCarriersHit) {
    return `${name} hit a Carrier! ${randomReactionHit} 💥`;
  }

  return `${name} missed! ${randomReactionMiss} 🌊`;
}
