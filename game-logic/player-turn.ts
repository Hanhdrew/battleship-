import type { DataBoard, BoardMetaData } from "../types";
import { detectHit } from "./detect-hit";
import { detectSink } from "./detect-sink";
import { options } from "../input-functions/options-menu";
import { storeInput } from "../input-functions/store-input";
import { inputVerification } from "../helper-functions/input-validation";
import { removeIndentation } from "../helper-functions/indentation-remover";

export async function playerTurn(
  dataBoard: DataBoard,
  metaData: BoardMetaData,
): DataBoard {}
