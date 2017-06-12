import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
class DataTable extends Component {
	renderList()
	{
		console.log(this.props.dataList);
		return this.props.dataList.map((data) =>
		{
			return (
				<tr key={data.id}>
					<td>{data.id}</td>
					<td>{data.timestamp}</td>
					<td>{data.name}</td>
					<td>{data.status}</td>
				</tr>
			);
		});
	}

	render()
	{
		console.log("here we go");

		return (
			<BootstrapTable data={this.props.dataList} striped hover search>
			<TableHeaderColumn isKey dataField='id'>SR NO.</TableHeaderColumn>
			<TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
			<TableHeaderColumn dataField='status'>status</TableHeaderColumn>
			<TableHeaderColumn dataField='timestamp'>timestamp</TableHeaderColumn>
		</BootstrapTable>);

	}

;
}

function mapStateToProps(state)
{
	return {
		dataList: state.dataList
	};
}
export default connect(mapStateToProps)(DataTable);