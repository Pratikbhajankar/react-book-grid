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
				<tr key={data.title}>
					<td>{data.title}</td>
					<td>{data.authors[0].first_name}</td>
					<td>{data.timestamp}</td>
					<td>{data.price}</td>
					<td>{data.amazon_rank}</td>
					<td>{data.publisher}</td>
					<td>{data.description}</td>
				</tr>
			);
		});
	}
	getData(data)
	{
		return data && !data.books ? [] : data.books.map((data)=>{
			return ({
				id:Math.random(),
				title:data.title,
				authors:data.authors[0].first_name,
				price:data.price,
				amazon_rank:data.amazon_rank,
				publisher:data.publisher,
				description:data.description,
			})
		})
	}
	render()
	{
		console.log("here we go ...");

		return (
			<BootstrapTable data={this.getData(this.props.dataList)} striped hover search pagination>
			<TableHeaderColumn isKey dataField='id'>SR NO.</TableHeaderColumn>
			<TableHeaderColumn dataField='title'>Title</TableHeaderColumn>
			<TableHeaderColumn dataField='authors'>Authors</TableHeaderColumn>
			<TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
			<TableHeaderColumn dataField='amazon_rank'>Amazon rank</TableHeaderColumn>
			<TableHeaderColumn dataField='publisher'>Publisher</TableHeaderColumn>
			{/* <TableHeaderColumn dataField='description'>Description</TableHeaderColumn> */}
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