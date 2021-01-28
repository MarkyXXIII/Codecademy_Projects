const getSleepHours = day => {
  if (day === 'monday') {
    return 8;
  } else if 
    (day === 'tuesday') {
    return 7;
  } else if 
    (day === 'wednesday') {
    return 6;
  } else if 
    (day === 'thursday') {
    return 7;
  } else if 
    (day === 'friday') {
    return 5;
  } else if 
    (day === 'saturday') {
    return 8;
  } else if 
    (day === 'sunday') {
    return 9;
  }
};
const getActualSleepHours = () =>
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

console.log('Actual Sleep Hours: ' + getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};
console.log('Ideal Sleep Hours: ' + getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You have had the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
      console.log('You have had ' + (actualSleepHours - idealSleepHours) + ' more hours sleep than needed this week!');
  } else (actualSleepHours < idealSleepHours) 
      console.log('You have had ' + (idealSleepHours - actualSleepHours) + ' less hours sleep than needed this week. Get some rest!');
  }
  calculateSleepDebt();
