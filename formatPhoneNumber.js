function formatPhoneNumber(numbers) {
  const [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10] = numbers;
  return `(${n1}${n2}${n3}) ${n4}${n5}${n6}-${n7}${n8}${n9}${n10}`
}
