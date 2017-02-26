
/* 
http://calculatori.ru/perevod-chisel.html прикол с минусом
http://calculatori.ru/perevod-chisel.html?id=7805083
https://learn.javascript.ru/string
 */


let $s="01010101";
check_input($s);
console.log(convert($s));


function check_input($s) {

	if ($s.length!=8 ) {
		console.log("Ошибка входных данных (не 8 символов)");
		return;
	}
	let $flag=0;
	for (let $i = $s.length-1; $i >= 0 ; $i--) {
		if ($s[$i]!=0 && $s[$i]!=1) {
			$flag=1;
		}
	}
	if ($flag) {
		console.log("Ошибка входных данных (не 0 и не 1)");
		return;
	}
	return;
}

function convert($s) {
	let $sum=0;
	for (let $i = $s.length-1; $i > 0 ; $i--) {
		let $pw=$s.length-1-$i; //степень в которую нужно возвести двойку
		let $str=$s[$i]; //$i=7 , $s[$i]=1
		let $s2=Math.pow(2,$pw);
		$sum=$sum+$s2*$str;
	}
	//получаем знак числа
	let $ssign='';
	if ($s[0]==0) {

	} else {
		$ssign='-';	
	}
	return $ssign+$sum;
}

