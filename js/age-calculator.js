export function getAgeSeconds(userAge){
  return moment().diff(userAge, 'seconds');
}
