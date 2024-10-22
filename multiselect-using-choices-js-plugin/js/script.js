$(document).ready(function() {
	const choices = new Choices($("#multi-select")[0], {
		removeItemButton: true,
	});
	$("#datepicker").datepicker();
});