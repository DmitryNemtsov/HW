document.addEventListener('DOMContentLoaded', function(){
	var btn = document.querySelector('#btn');
	var nameinput = document.querySelector('#name');
	var textarea = document.querySelector('#text');
	
	btn.addEventListener('click', function(event){
		event.preventDefault();  // Отменяет стандартные действия установленные по умолчанию.
		var thisMassage = textarea.value;
		var nameVl = nameinput.value;
		var data = {
			name:nameVl,
			text:thisMassage
		};
		var request = new XMLHttpRequest(); // Создаем новый AJAX запрос 
		var url = 'http://cl303109.tmweb.ru/' + serialize(data); //Создаём URL с использованием функции преобразующей наш объкт в строку GET запроса
		request.overrideMimeType('application/json'); // Отправка и прием в формате JSON
		request.open('GET', url, true); // Открывает способ отправки 
		request.onload = function(){
			if (request.status === 200) {
				var result = JSON.parse(request.response); // Преобразование
				console.log(result);
			}
		}
		request.send(); // Отправка
	});

	function serialize(obj){  // Функция необходимая для отправки объекта на сервер, форматирует наш объект с параметра в строку подходящую под GET запрос. 
		return '?'+Object.keys(obj).reduce(function(a,k){a.push(k+'='+encodeURIComponent(obj[k])); return a},[]).join('&')
	}


});  // Добавляем событие DOMContentLoaded к document, которое отработает, когда загрузится DOM