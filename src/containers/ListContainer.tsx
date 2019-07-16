import * as React from "react";
import { connect } from "react-redux";
import * as ListTypes from "ListTypes";
import { ListItem as ListItemModel } from "../models/listItem";
import { ListItem } from "../components";

interface ListContainerState {
  listInput: string;
}

interface ListContainerProps {
  count: number;
  itemList: ListItemModel[];
  addListItem: (item: ListItemModel) => object;
  deleteListItem: (idx: number) => object;
}

const initialState = { listInput: "" }
type State = Readonly<typeof initialState>

class ListContainer extends React.Component<ListContainerProps, ListContainerState> {

  state: State = initialState

  render() {
    let listJSX: JSX.Element[] | JSX.Element;
    if (!this.props.itemList.length) {
      listJSX = <p>No list items</p>
    } else {
      listJSX = this.props.itemList.map((item, idx) => {
        return (
          <ListItem item={item.item} key={idx} idx={idx} handleDelete={this.handleDeleteButtonClick} />
        );
      });
    }

    return (
      <div>
        <div>
          <input
            onChange={this.handleTextChange}
            placeholder={"New Item Here"}
            value={this.state.listInput}
          />
          <button onClick={this.handleButtonClick}>Add List Item</button>
        </div>
        <div>
          <ul>
            {listJSX}
          </ul>
        </div>
      </div>
    );
  }

  handleTextChange = (e: any) => {
    this.setState({
      listInput: e.target.value
    });
  };

  handleButtonClick = () => {
    this.props.addListItem({ item: this.state.listInput });
    this.setState({
      listInput: ""
    });
  };

  handleDeleteButtonClick = (idx: number) => {
    this.props.deleteListItem(idx);
  };
}

const MapStateToProps = (store: ListTypes.RootState) => {
  return {
    count: store.list.count,
    itemList: store.list.list
  };
};

function addListItem(item: ListItemModel) { return { type: "list/ADD", payload: item } };
function deleteListItem(idx: number) { return { type: "list/DELETE", payload: idx}};
const MapDispatchToProps = {
  addListItem,
  deleteListItem
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(ListContainer);
