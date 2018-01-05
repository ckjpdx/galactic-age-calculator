export function getAgeSeconds(userAge){
  return moment().diff('1981-01-01', 'seconds');
}
