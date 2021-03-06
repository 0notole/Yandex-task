/**
 * Создает экземпляр космического корабля.
 * @name Vessel
 * @param {String} name Название корабля.
 * @param {Number}[] position Местоположение корабля.
 * @param {Number} capacity Грузоподъемность корабля.
 */
function Vessel(name, position, capacity) {
	this.name = name;
	if (position instanceof Planet) {
		this.position = position.position;
	}
	else {
		this.position = position;
	}
	this.capacity = capacity;
	this.occupied = 0;
}

/**
 * Выводит текущее состояние корабля: имя, местоположение, доступную грузоподъемность.
 * @example
 * vessel.report(); // Грузовой корабль. Местоположение: Земля. Товаров нет.
 * @example
 * vesserl.report(); // Грузовой корабль. Местоположение: 50,20. Груз: 200т.
 * @name Vessel.report
 */
Vessel.prototype.report = function () {
	document.write('Корабль: "' + this.name + '".<br>Местоположение: ' + this.position + '.<br>Занято: ' + this.occupied + ' из ' + this.capacity + '.<br><br>');
}

/**
 * Выводит количество свободного места на корабле.
 * @name Vessel.getFreeSpace
 */
Vessel.prototype.getFreeSpace = function () {
	document.write('Свободно: ' + (this.capacity - this.occupied) + '.<br><br>');
}

/**
 * Выводит количество занятого места на корабле.
 * @name Vessel.getOccupiedSpace
 */
Vessel.prototype.getOccupiedSpace = function () {
	document.write('Занято: ' + this.occupied + '.<br><br>');
}

/**
 * Переносит корабль в указанную точку.
 * @param {Number}[]|Planet newPosition Новое местоположение корабля.
 * @example
 * vessel.flyTo([1,1]);
 * @example
 * var earth = new Planet('Земля', [1,1]);
 * vessel.flyTo(earth);
 * @name Vessel.report
 */
Vessel.prototype.flyTo = function (newPosition) {
	if (newPosition instanceof Planet) {
		this.position = newPosition.position;
	}
	else {
		this.position = newPosition;
	}	
}

/**
 * Создает экземпляр планеты.
 * @name Planet
 * @param {String} name Название Планеты.
 * @param {Number}[] position Местоположение планеты.
 * @param {Number} availableAmountOfCargo Доступное количество груза.
 */
function Planet(name, position, availableAmountOfCargo) {
	this.name = name;
	this.position = position;
	this.availableAmountOfCargo = availableAmountOfCargo;
}

/**
 * Выводит текущее состояние планеты: имя, местоположение, количество доступного груза.
 * @name Planet.report
 */
Planet.prototype.report = function () {
	document.write('Планета: "' + this.name + '".<br>Местоположение: ' + this.position + '.<br>Доступно груза: ' + this.availableAmountOfCargo + '.<br><br>');
}

/**
 * Возвращает доступное количество груза планеты.
 * @name Vessel.getAvailableAmountOfCargo
 */
Planet.prototype.getAvailableAmountOfCargo = function () {
	document.write('Доступно груза: ' + this.availableAmountOfCargo + '.<br><br>');
}

/**
 * Загружает на корабль заданное количество груза.
 * 
 * Перед загрузкой корабль должен приземлиться на планету.
 * @param {Vessel} vessel Загружаемый корабль.
 * @param {Number} cargoWeight Вес загружаемого груза.
 * @name Vessel.loadCargoTo
 */
Planet.prototype.loadCargoTo = function (vessel, cargoWeight) {
	if(this.position == vessel.position)
		{
			if(cargoWeight <= (vessel.capacity - vessel.occupied))
				{
					vessel.occupied += cargoWeight;
					this.availableAmountOfCargo -= cargoWeight;
				}
			else
				{
					document.write("Столько не поместится!" + '.<br><br>');
				}
		}
	else
		{
			document.write("Корабль не на планете." + '.<br><br>');
		}
}

/**
 * Выгружает с корабля заданное количество груза.
 * 
 * Перед выгрузкой корабль должен приземлиться на планету.
 * @param {Vessel} vessel Разгружаемый корабль.
 * @param {Number} cargoWeight Вес выгружаемого груза.
 * @name Vessel.unloadCargoFrom
 */
Planet.prototype.unloadCargoFrom = function (vessel, cargoWeight) {
	if(this.position == vessel.position)
		{
			vessel.occupied -= cargoWeight;
			this.availableAmountOfCargo += cargoWeight;
		}
	else
		{
			document.write("Корабль не на планете." + '.<br><br>');
		}
}
