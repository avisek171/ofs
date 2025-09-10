function show1(){
  document.getElementById('div1').style.display ='none';
}
function show2(){
  document.getElementById('div1').style.display = 'block';
}

// table total
function getTotal(row = null) {
	if(row) {
		alert('row found !! please refresh the page');
		var total = Number($("#rate"+row).val()) * Number($("#quantity"+row).val());
		total = total.toFixed(2);
		$("#total"+row).val(total);
		$("#totalValue"+row).val(total);
		
		//subAmount();

	} else {
		alert('no row !! please refresh the page');
	}
}



