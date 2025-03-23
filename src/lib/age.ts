export function calculateAge() {
  // Get the current date
  const birthDate = new Date(2001, 1, 5);
  const today = new Date();
  
  // Get the year, month, and date of the birthdate and the current date
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();
  
  // Get the current year, month, and date
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  // Calculate the age
  let age = currentYear - birthYear;

  // Adjust age if the birthday hasn't occurred yet this year
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age--;
  }

  return age;
}  