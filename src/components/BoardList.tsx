import dummy from "../db/dummy.json";

function BoardList() {
  interface Board {
    id: number;
    time: string;
    boardTitle: string;
    boardInfo: string;
  }

  return (
    <section>
      {dummy.map((board: Board) => {
        return (
          <>
            <span>{board.time}</span>
            <p>{board.boardTitle}</p>
            <p>{board.boardInfo}</p>
          </>
        );
      })}
      <span>PREV</span>
      <span>NEXT</span>
    </section>
  );
}

export default BoardList;
