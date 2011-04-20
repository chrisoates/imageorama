// Filename: gridify.js
// Created April 20, 2011 by Chris Oates

var gd = {
	itemsPerRow: 3,
	currentCol: 1,
	currentRow: 1,
	
	init: function(){
		$('#main div').each( function(){
			$(this).addClass('r'+ gd.currentRow).addClass('c' + gd.currentCol);
			
			if( gd.currentCol % gd.itemsPerRow == 0 ){
				gd.currentCol = 1;
				gd.currentRow++;
			}
			else{
				gd.currentCol++;
			}
		});
		
		$('div.r2.c2').addClass('scale');
	}
};

$(document).ready(function(){
	gd.init();
});