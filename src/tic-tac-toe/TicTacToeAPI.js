import { usePostAPI } from "../componets/APIUtil";

export function useNewGame(newGame) {
  const url = "http://localhost:55227/api/tictactoe/newgame";
  const [state, setBody] = usePostAPI(url, newGame);

  return [state, setBody];
}

export function useNextMove(newMove) {
  const url = "http://localhost:55227/api/tictactoe/move";
  const [state, setBody] = usePostAPI(url, newMove);

  return [state, setBody];
}
