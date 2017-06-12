export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
export const getDataForDate = (date)=>{
	return {
		type:"DATA_FOR_DATE",
		payload:date
	}
}