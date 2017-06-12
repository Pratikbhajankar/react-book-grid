import GetData from '../utils/apicall.js'
export default function (state = [], action) {
	switch (action.type){
		case 'DATA_FOR_DATE':
			return GetData(action.payload);
		break
	}
	return state;
}
