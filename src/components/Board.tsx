"use client";
import { useState } from "react";
import Column from "./Column";
import NewColumnForm from "./forms/NewColumnForm";

const defaultcolumns = [
  { id: "col1", name: "todo", index: 0 },
  { id: "col2", name: "in progres", index: 1 },
  { id: "col3", name: "done", index: 2 },
];

export type CardType = {
  name: string;
  id: string | number;
  index: number;
  columnId: string;
};

const defaultcards = [
  { id: "a", name: "task 1", index: 0, columnId: "col1" },
  { id: "aa", name: "task 5", index: 1, columnId: "col1" },
  { id: "b", name: "task 2", index: 1, columnId: "col2" },
  { id: "c", name: "task 3", index: 2, columnId: "col3" },
];
export default function Board() {
  const [cards, setCards] = useState(defaultcards);
  const [columns, setColumn] = useState(defaultcolumns);
  return (
    <div className="flex gap-4">
      {columns.map((column) => (
        <Column
          key={column.id}
          {...column}
          setCards={setCards}
          cards={cards
            .sort((a, b) => a.index - b.index)
            .filter((c) => c.columnId === column.id)}
        />
      ))}
      <NewColumnForm />
    </div>
  );
}
