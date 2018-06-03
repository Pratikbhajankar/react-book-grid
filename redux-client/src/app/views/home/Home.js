// @flow weak

import React, {
  PureComponent
}                     from 'react';
// import PropTypes      from 'prop-types';
import {Jumbotron}    from '../../components';
import cx             from 'classnames';
import { Link }       from 'react-router-dom';
import UserList from '../../redux/containers/user-list';
import UserDetails from '../../redux/containers/user-detail';
import DataTable from '../../redux/containers/dataTable';
import LoadData from '../../redux/containers/LoadData';
class Home extends PureComponent {
  state = {
    animated: true,
    viewEntersAnim: true
  };

  render() {
    const { animated, viewEntersAnim } = this.state;
    return(
      <div
        key="homeView"
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
        <Jumbotron>
	        <div>
		        {/* <LoadData/> */}
		        <DataTable/>
	        </div>

        </Jumbotron>
      </div>
    );
  }
}

export default Home;
/*
<p>
	<Link
		className="btn btn-success btn-lg"
		to={'/about'}>
		<i className="fa fa-info" />
		&nbsp;
		go to about
	</Link>
</p>*/
