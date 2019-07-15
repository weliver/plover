import * as React from "react";

interface ListItemProps {
  item: string;
  idx: number;
  handleDelete: (idx: number) => void;
}

export const ListItem: React.FC<ListItemProps> = props => {
  return (
    <li>
      {props.item}
      <button onClick={() => props.handleDelete(props.idx)}>Delete</button>
    </li>
  );
};