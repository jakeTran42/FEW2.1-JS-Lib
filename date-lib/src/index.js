export default class D {
  constructor(...args) {
    this.date = new Date(...args);
  }

  getYear() {
    return this.date.getFullYear();
  }

  getMonth() {
    const months = {1: 'January', 2: 'Febuary', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'}
    const thisMonth = months[this.date.getMonth()];
    return thisMonth;
  }

  getDay() {
    return this.date.getDate();
  }

  getHour() {
    return this.date.getHours();
  }

  getMinute() {
    return this.date.getMinutes();
  }

  getSecond() {
    return this.date.getSeconds();
  }

  format(maskStr='') {
    if(maskStr==='') {
      return `${this.getMonth()} ${this.getDay()}, ${this.getYear()}`;
    }

    const shortmonths = {'January': 'Jan', 'Febuary': 'Feb', 'March': 'March', 'April': 'April', 'May': 'May', 'June': 'June', 'July': 'Jul', 'August': 'Aug', 'September': 'Sept', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec'}
    
    const forms = {
      'Y': this.getYear(), 'y': this.getYear() % 100,
      'M': this.getMonth(), 'm': shortmonths[this.getMonth()],
      'D': this.getDay() < 10 ? '0' + this.getDay() : this.getDay(), 'd': this.getDay(),
      'H': this.getHour() < 10 ? '0' + this.getHour() : this.getHour(), 'h': this.getHour(),
      'I': this.getMinute() < 10 ? '0' + this.getMinute() : this.getDay(), 'i': this.getMinute(),
      'S': this.getSecond() < 10 ? '0' + this.getSecond() : this.getDay(), 's': this.getSecond(),
    }
    
    const formArr = maskStr.split("")

    const getCompleteForm = formArr.map(letter => {
      return letter in forms ? forms[letter] : letter
    })

    return getCompleteForm.join("")
  }

  when(now = new Date()) {
    const curr_year = now.getFullYear();
    const given_year = this.date.getFullYear();
    if (curr_year !== given_year) {
      if (curr_year < given_year) {
        return `${given_year - curr_year} year${(given_year - curr_year) === 1 ? '' : 's'} from now`;
      }
      return `${curr_year - given_year} year${(curr_year - given_year) === 1 ? '' : 's'} ago`;
    }

    const cur_month = now.getMonth();
    const given_month = this.date.getMonth();
    if (cur_month !== given_month) {
      if (cur_month < given_month) {
        return `${given_month - cur_month} month${(given_month - cur_month) === 1 ? '' : 's'} from now`;
      }
      return `${cur_month - given_month} month${(cur_month - given_month) === 1 ? '' : 's'} ago`;
    }

    const cur_day = now.getDate();
    const given_day = this.date.getDate();
    if (cur_day !== given_day) {
      if (cur_day < given_day) {
        return `${given_day - cur_day} day${(given_day - cur_day) === 1 ? '' : 's'} from now`;
      }
      return `${cur_day - given_day} day${(cur_day - given_day) === 1 ? '' : 's'} ago`;
    }

    return 'It is today';
  }
}
