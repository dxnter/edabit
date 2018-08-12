function celebratingTodayOrTomorrow(arry) {
  if (arry.includes('tomorrow')) return [];
  if (arry.every(s => s.toLowerCase() === 'today'))
    return ['happy Canada day', 'joyeux jour du Canada'];
}
