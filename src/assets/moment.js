import moment from "jalali-moment";
export function changeDateshamsi(date){
    console.log(date); 
    var shamsi= moment('1989/01/24', 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')
    // moment('1989/01/24', 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD'); // 1367/11/04

    return shamsi
}
