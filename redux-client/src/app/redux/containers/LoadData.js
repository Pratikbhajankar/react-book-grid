import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDataForDate} from '../actions/index.js';
import {bindActionCreators} from 'redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
const DATE_FORMAT = 'YYYY-MM-DD'
class LoadData extends Component{
	constructor (props) {
		super(props)
		this.state = {
			startDate: moment()
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(date) {
		this.setState({
			startDate: date
		});
		this.props.getDataForDate(moment(date).format(DATE_FORMAT))
	}
	render()
	{
		return (
			<DatePicker
				selected={this.state.startDate}
				onChange={this.handleChange}
				/>
		);
	}
}
function mapStateToProps(state) {
	return {
		dataList1: state.dataList
	};
}
function matchDispatchToProps(dispatch){
	return bindActionCreators({getDataForDate: getDataForDate}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(LoadData);