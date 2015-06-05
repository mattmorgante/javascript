var car = {
  'make': 'toyota',
  'model' : 'corolla',
  'options': {
    'fourwheel' : true,
    'heatedseating' : [true, false]
  }
}; // object literal (faster in execution)

document.write(car.make);
document.write(car.model);
document.write(car['options']['fourwheel']);