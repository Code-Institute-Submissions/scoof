 $(document).ready(function(){
    
    $(".btn").hover(function(){
        $(this).css("background-color", "#e0b8d8");
        }, function(){
        $(this).css("background-color", "#C01E6A");
    });


	function changeBackground(x) {
    	if (x.matches){
        document.body.style.backgroundColor = "white";
    	} else {
        document.body.style.backgroundColor = "#F6F6F6";
    	}
	}
		var x = window.matchMedia("(max-width: 768px)")
		changeBackground(x) 
		x.addListener(changeBackground)


	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
    	acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        	var panel = this.nextElementSibling;
        	if (panel.style.display === "block") {
            	panel.style.display = "none";
        	} else {
            panel.style.display = "block";
        	}
    	});
	}
});