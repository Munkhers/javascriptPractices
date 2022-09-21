const getSleepHours = day => {
    if ( day === 'monday') {
      return 8;
    } else if ( day === 'tuesday') {
      return 7;
    } else if ( day === 'wednesday') {
      return 7;
    } else if ( day === 'thursday') {
      return 5;   
    } else if ( day === 'friday') {
      return 6;
    } else if ( day === 'saturday') {
      return 8;
    } else if ( day === 'sunday') {
      return 5;
    }
  }
  const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  }
  const getIdealSleepHours = () => {
    const idealHours = 8
    return idealHours*7
  }
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours()
  if ( actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!')
  } else if ( actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed')
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You should get some rest')
  } else {
    console.log('Error!')
  }
  }
  calculateSleepDebt()