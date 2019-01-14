import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchTrades } from "../../state/actions/trades";
import { fetchByLp } from "../../state/actions/lp";
import "./table.css";
import Column from "./column";
import Row from "./row";
import _ from "lodash";
class TableView extends Component {
  state = {
    start: 0,
    end: 200,
    chunk: 200,
    loading: false,
    data: [],
    filterChanged: false
  };
  constructor(props) {
    super(props);
    this.delayScrollCB = _.debounce(
      this.loadNextChunk,
      this.props.scrollDebounce
    );
  }
  componentWillMount() {
    this.loadTrades();
  }
  onTableScroll = e => {
    e.persist();
    this.delayScrollCB(e);
  };
  loadNextChunk = e => {
    let scrollPosition = e.target.scrollHeight - e.target.scrollTop;
    let trigger = e.target.clientHeight * 2.2;
    if (scrollPosition > trigger) return;
    this.updatePagination();
    this.loadTrades();
  };
  updatePagination() {
    this.setState({
      start: this.state.start + this.state.chunk,
      end: this.state.end + this.state.chunk
    });
  }
  loadTrades() {
    this.props[this.props.action](
      this.state.start,
      this.state.end,
      this.props.data,
      this.props.filter,
      this.state.filterChanged
    );
  }
  static mapStateToProps = (state, ownProps) => {
    const model = { fetchTrades: "trades", fetchByLp: "lp" };
    return {
      data: state[model[ownProps.action]].items
    };
  };
  shouldComponentUpdate(newProps) {
    if (newProps.filter === this.props.filter) return true;
    this.setState({ filterChanged: true });
    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    if (!this.state.filterChanged) return;
    this.loadTrades();
    this.setState({ filterChanged: false });
  }
  render() {
    return (
      <React.Fragment>
        <div className="table">
          <div className="row tableHeader">{this.createColumns()}</div>
          <div className="row tableBody" onScroll={this.onTableScroll}>
            <div className="bodyWindow col-sm-12">
              <div className="row">{this.createRows()}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  createColumns() {
    if (!this.props.data) {
      return "";
    }
    return this.props.columns.map(col => {
      return (
        <Column key={"col-" + col.field} field={col.field} colWidth={col.width}>
          {col.label}
        </Column>
      );
    });
  }
  createRows() {
    const { data, columns } = this.props;
    if (!data) {
      return "";
    }
    return data.map((row, idx) => (
      <Row
        key={row.UUID}
        data={row}
        fields={columns.map(col => col.field)}
        colWidth={columns.map(col => col.width)}
        rowIdx={idx}
      />
    ));
  }
}
export default connect(
  TableView.mapStateToProps,
  { fetchTrades, fetchByLp }
)(TableView);

TableView.propTypes = {
  fetchTrades: PropTypes.func,
  data: PropTypes.array
};
