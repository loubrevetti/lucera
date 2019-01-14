import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchTrades } from "../../state/actions/trades";
import "./table.css";
import Column from "./column";
import Row from "./row";

class TableView extends Component {
  state = {
    start: 0,
    end: 200
  };
  componentWillMount() {
    this.loadTrades();
  }
  loadTrades() {
    this.props[this.props.action](this.state.start, this.state.end);
  }
  static mapStateToProps = state => ({
    trades: state.trades.items
  });
  render() {
    return (
      <React.Fragment>
        <div className="table">
          <div className="row tableHeader">{this.createColumns()}</div>
          <div className="row tableBody">
            <div class="bodyWindow col-sm-12">
              <div class="row">{this.createRows()}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  createColumns() {
    if (!this.props.trades) {
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
    const { trades, columns } = this.props;
    if (!trades) {
      return "";
    }
    return trades.map((row, idx) => (
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
  { fetchTrades }
)(TableView);

TableView.propTypes = {
  fetchTrades: PropTypes.func,
  trades: PropTypes.array
};
