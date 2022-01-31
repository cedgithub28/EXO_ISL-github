var menuHam = document.getElementById("menu-ham");
var menuMain = document.getElementById("main-menuham");

if(menuHam != null && menuMain!= null) {
	menuHam.addEventListener('click', function(e){
		if(menuMain.className == 'main-nav is-active') {
			menuMain.className = 'main-nav';
		}
		else {
			menuMain.className = 'main-nav is-active';
		}
	});
}
else {
	alert('un des deux éléments pas présents');
}