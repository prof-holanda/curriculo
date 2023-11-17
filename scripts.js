
window.onload = function () {
	document.getElementById('form-send')
		.addEventListener('click', function() {
			
			const text = document.getElementById('form-text').value;
			
			window.location 
				= `https://api.whatsapp.com/send?phone=5567992950871&text=${text}`;
		});
}