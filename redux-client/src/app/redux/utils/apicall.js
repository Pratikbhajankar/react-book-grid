import $ from 'jquery';
export default function getData(date)
{
	return loadData(date);
}
function loadData(date)
{
	let data = [];
	$.ajax({
		method: "GET",
		url: "http://localhost:4040" ,
		async: false,
		crossDomain: true,
		success: function (res)
		{
			console.log("in success", res);
			data = res;
		},
		error: function (res)
		{
			console.log("in error", res);
		},
		done: function (res)
		{
			console.log("in done", res);
		}

	});
	return data
}