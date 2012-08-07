/**
 * Создает объект "цена машины"
 * @this {Price}
 * @param {int} money Цена
 * @param {string} currentcy валюта
 */
function Price(price){
	this.money = Number(price.substr(1, price.length-1));
	this.currency = price.substr(0,1);
}

//конвертация валют
Price.prototype.toRubles = function(){
	if(this.currency == '€'){
		return (this.money * 39.5).toFixed(2)+" Rur";
	}
	else
	{
		return (this.money * 40.7).toFixed(2)+" Rur";
	}
}

/**
 * Создает экземпляр Машины
 * @this {Car}
 * @param {string} manufacturer Производитель
 * @param {string} model Модель
 * @param {number} year Год производство
 */
function Car(manufacturer, model, year) {
    this.manufacturer = manufacturer;
    this.model = model;
	
	/*Проверяем, что у нас есть год и если нет, подставляем текущий*/
	this.year = (year!=undefined?year:new Date().getFullYear());
	
	//@TODO заставить работать
	return this.getInfo();
}

/**Вариант 1 - с прототипами**/
//Получение краткой информации
Car.prototype.getInfo = function(){
		return this.manufacturer +" "+this.model + " " +this.year;
	};
//Получение полной информации
Car.prototype.getDetailedInfo = function(){
		return "Производитель: " + this.manufacturer +". Модель: "+this.model + ". Год: " +this.year;
	};

//Добавляем функцию getContry в прототип	
Car.prototype.getCountry = getCountry;

//Переопределение метода toString
Car.prototype.toString = Car.prototype.getInfo;

var bmw = new Car("BMW", "X5", 2010),
    audi = new Car("Audi", "Q5", 2012),
    toyota = new Car("Toyota", "Camry");
/**
 * Создает экземпляр Автосалона
 * @this {CarDealer}
 * @param {string} name Название автосалона
 */
function CarDealer(name) {
    this.name = name;
    this.cars = [];

	/*Вариант второй - без прототипов*/
	//Добавление машин в массив
	this.add = function (){
		for (i=0; i<arguments.length; i++)
			this.cars.push(arguments[i]);
		return this;
	};
	//Установка цены на машину
	this.setPrice = function(car, price){
		for (i in this.cars){
			if (this.cars[i] == car)
			{
				this.cars[i].price = new Price(price);
			}
		}
		return this;
	};
	
	//Вывод списка машин
	this.list = function(){
		var res = '';
		for (i in this.cars){
			//разнообразия ради используем функцию getInfo
			res+=this.cars[i].getInfo()+", ";
		}
		//самый простой способ убрать 2 символа
		return(res.substr(0, res.length-2));
		//return this;
	};
	
	//вывод со страной
	this.listByCountry = function(country){
		var res='';
		for (i in this.cars){
			if (this.cars[i].getCountry() == country)
			{
				res += this.cars[i] + ", ";
			}
		}
		return(res.substr(0, res.length-2));
		//return this;
	}
	
	//Бонус - выведение цены в рублях
	this.listRubles = function(){
		var res = '';
		for (i in this.cars){
			res+=this.cars[i]+" "+this.cars[i].price.toRubles()+", ";
		}
		return(res.substr(0, res.length-2));
		//return this;
	};
}

var yandex = new CarDealer('Яндекс.Авто');
yandex.add(toyota).add(bmw, audi);
	
/**
 * Установить цену на машину
 * @param {string} car идентификатор машины
 * @param {string} price стоимость
 */

// идентификатор машины составляется следующим образом "производитель модель год"
// стоимость машины может быть задана в двух валютах: йена и евро.
yandex
    .setPrice('BMW X5 2010', '€2000')
    .setPrice('Audi Q5 2012', '€3000')
    .setPrice('Toyota Camry 2012', '?3000');

function getCountry() {
    switch (this.manufacturer.toLowerCase()) {
        case 'bmw': 
		case 'audi':
            return 'Germany';
        case 'toyota':
            return 'Japan';
	}
}

yandex.list(); //BMW X5 2010, Audi Q5 2012, Toyota Camry 2012
yandex.listByCountry('Germany'); //BMW X5 2010, Audi Q5 2012
yandex.listRubles();
