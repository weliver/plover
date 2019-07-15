import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as ListTypes from "ListTypes";
import { listActionTypes } from "../actions";
import { ListItem } from "../components";

interface ListContainerState {
  listInput: string;
}

interface ListContainerProps {
  count: number;
  itemList: string[];
  addListItem: (item: string) => object;
  deleteListItem: (idx: number) => object;
}

class ListContainer extends React.Component<ListContainerProps, ListContainerState> {
  constructor(props: any) {
    super(props);
    this.state = {
      listInput: ""
    }
  }

  handleTextChange = (e: any) => {
    this.setState({
      listInput: e.target.value
    });
  };

  handleButtonClick = () => {
    this.props.addListItem(this.state.listInput);
    this.setState({
      listInput: ""
    });
  };

  handleDeleteButtonClick = (idx: number) => {
    console.log("deleting", idx);
    this.props.deleteListItem(idx);
  };


  render() {
    let listJSX: JSX.Element[] | JSX.Element;
    if (!this.props.itemList.length) {
      listJSX = <p>No list items</p>
    } else {
      listJSX = this.props.itemList.map((item, idx) => {
        return (
          <ListItem item={item} key={idx} idx={idx} handleDelete={this.handleDeleteButtonClick} />
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
}

const MapStateToProps = (store: ListTypes.RootState) => {
  return {
    count: store.list.count,
    itemList: store.list.list
  };
};

// @todo misnamed property values does not get picked up by intellisense.
const MapDispatchToProps = (dispatch: Dispatch<ListTypes.RootAction>) => ({
  addListItem: (item: string) => dispatch({ type: listActionTypes.ADD, payload: item }),
  deleteListItem: (idx: number) => dispatch({ type: listActionTypes.DELETE, payload: idx })
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(ListContainer);