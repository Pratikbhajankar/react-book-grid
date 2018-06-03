import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import DataTable from '../containers/dataTable';
import LoadData from '../containers/LoadData'
require('../../scss/style.scss');
import {bindActionCreators} from 'redux';
const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
	    <DataTable/>
    </div>
);
export default App;
