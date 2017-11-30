$(document).ready(function(){
	
	/*TRADUCCION*/
	
	$("#ingles").click(function(){
		$("#spanish").hide();
		$("#english").fadeIn();
		$("#ingles").css({"filter":"grayscale(90%)"});
		$("#espanol").css({"filter":"none"});
	})
	
	$("#espanol").click(function(){
		$("#spanish").fadeIn();
		$("#english").hide();
		$("#espanol").css({"filter":"grayscale(90%)"});
		$("#ingles").css({"filter":"none"});
	})

	
	
	
	/*Entrevistas*/
	
$("#ritaboton").click(function(){
	$("#conjseleccion").hide();
	$("#entrrita").fadeIn();
	
	
	
})
	
	
	$("#sebaboton").click(function(){
	$("#conjseleccion").hide();
	$("#entrseba").fadeIn();
	
	
	
})
	
	$("#fabianboton").click(function(){
	$("#conjseleccion").hide();
	$("#entrfabian").fadeIn();
		
})
	
	$("#santiagoboton").click(function(){
	$("#conjseleccion").hide();
	$("#entrsantiago").fadeIn();
		
})
	
	$("#entrseba").click(function(){
	$("#conjseleccion").fadeIn();
	$("#entrseba").hide();
	
	
	
})
	
	$("#entrrita").click(function(){
	$("#conjseleccion").fadeIn();
	$("#entrrita").hide();
	
	
	
})
	
	$("#entrfabian").click(function(){
	$("#conjseleccion").fadeIn();
	$("#entrfabian").hide();
	
	
	
})
	
	$("#entrsantiago").click(function(){
	$("#conjseleccion").fadeIn();
	$("#entrsantiago").hide();
	
	
	
})
	
	/*Conceptos*/
	$("#cerrar").click(function(){
		$(".text").hide();
		$("#cerrar").hide();
	})
	
	$("#btncomp").click(function(){
		$(".text").hide();
		$("#compt").fadeIn();
		$(".close").fadeIn();
		
		
	})
	
	$("#btncomptec").click(function(){
		$(".text").hide();
		$("#comptec").fadeIn();
		$(".close").fadeIn();
		
		
	})
	
	$("#btncompmet").click(function(){
		$(".text").hide();
		$("#compmet").fadeIn();
		$(".close").fadeIn();
		
		
	})
	
	$("#btncomppart").click(function(){
		$(".text").hide();
		$("#comppart").fadeIn();
		$(".close").fadeIn();
		
		
	})
	
	$("#btncomppers").click(function(){
		$(".text").hide();
		$("#comppers").fadeIn();
		$(".close").fadeIn();
		
		
	})
	
	$("#btnhab").click(function(){
		$(".text").hide();
		$("#hab").fadeIn();
		$(".close").fadeIn();
		
		
	})
	
	$("#btnvoc").click(function(){
		$(".text").hide();
		$("#voc").fadeIn();
		$(".close").fadeIn();
		
		
	})
	
	$("#btndes").click(function(){
		$(".text").hide();
		$("#des").fadeIn();
		$(".close").fadeIn();
		
		
	})
	
	$("#btndesw").click(function(){
		$(".text").hide();
		$("#desw").fadeIn();
		$(".close").fadeIn();
		
		
	})
	
	$("#btndis").click(function(){
		$(".text").hide();
		$("#dis").fadeIn();
		$(".close").fadeIn();
		
		
	})
	
	$("#btnhtml").click(function(){
		$(".text").hide();
		$("#html").fadeIn();
		$(".close").fadeIn();
		
		
	})
	
	$("#btncss").click(function(){
		$(".text").hide();
		$("#css").fadeIn();
		$(".close").fadeIn();
		
		
	})
	
	$("#btnjs").click(function(){
		$(".text").hide();
		$("#js").fadeIn();
		$(".close").fadeIn();
		
		
	})
	
	$("#btnresdes").click(function(){
		$(".text").hide();
		$("#resdes").fadeIn();
		$(".close").fadeIn();
		
		
	})
	
	$("#btnentlab").click(function(){
		$(".text").hide();
		$("#entlab").fadeIn();
		$(".close").fadeIn();
		
		
	})
	
	$("#btncv").click(function(){
		$(".text").hide();
		$("#cv").fadeIn();
		$(".close").fadeIn();
		
		
	})
	
	$("#btncarpre").click(function(){
		$(".text").hide();
		$("#carpre").fadeIn();
		$(".close").fadeIn();
		
		
	})
	
	$("#btnscr").click(function(){
		$(".text").hide();
		$("#scr").fadeIn();
		$(".close").fadeIn();
		
		
	})
	
	
	
	
	
	
	
})