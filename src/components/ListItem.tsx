import * as React from "react";

interface ListItemProps {
  item: string;
  idx: number;
  handleDelete: (idx: number) => void;
}

export const ListItem: React.FC<ListItemProps> = props => {
  return (
    <span>
      {props.item}
      <button onClick={() => props.handleDelete(props.idx)}>Delete</button>
    </span>
  );
};