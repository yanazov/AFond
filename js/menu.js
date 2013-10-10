function js_menu_click(current_this, number){
	for(i=0; i<2; i++ )	{
		var inner_block_number = i+1;
		var inner_block_name = "menu_cont_"+inner_block_number;
		
		document.getElementsByClassName("menu_inner_li")[i].style.color = "#adbdc5";
		document.getElementsByClassName("menu_inner_li")[i].style.background = "#fff";
		document.getElementsByClassName("menu_inner_li")[i].style.cursor = "pointer";
		document.getElementsByClassName(inner_block_name)[0].style.display = "none";
	}	
	current_this.style.color = "#fff";
	current_this.style.background = "#0068af";
	current_this.style.cursor = "default";
	
	var inner_block_name = "menu_cont_"+number;
	document.getElementsByClassName(inner_block_name)[0].style.display = "block";	
}