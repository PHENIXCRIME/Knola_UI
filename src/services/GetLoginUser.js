export default function  getLoginUser() {
  return JSON.parse(localStorage.getItem('user'));;
}