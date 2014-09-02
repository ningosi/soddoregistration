/**
 * Created by steve_w on 27/06/14.
 */
$('#gregorianDOB').calendarsPicker({calendar: $.calendars.instance('gregorian')});
$('#ethiopianDOB').calendarsPicker({calendar: $.calendars.instance('ethiopian')});
function GregToEth(){
    try {
        var calendar = $.calendars.instance('gregorian');
        var date = $('#gregorianDOB').val().split('/');
        var year = parseInt(date[2], 10);
        var month = parseInt(date[1], 10);
        var day = parseInt(date[0], 10);
        var jd = calendar.toJD(year, month, day);
        var ethDate = $.calendars.instance('ethiopian').fromJD(jd).toString();
        return ethDate
    }
    catch (e){

    }
}

function EthToGreg(ethdate){
    try {
    	var calendar = $.calendars.instance('ethiopian');
    	var date = ethdate.split('/');
    	var year = parseInt(date[2], 10);
        var month = parseInt(date[1], 10);
        var day = parseInt(date[0   ], 10);
        var jd = calendar.toJD(year, month, day);
        var gregDate = $.calendars.instance('gregorian').fromJD(jd).toString();
    	return gregDate;
    }
    catch (e){
    }
}

function GregToGreg(){
    if ($('#gregorianDOB').val() == ''){

    }
    else {
        var date = $('#gregorianDOB').val().split('/');
        var year = date[2];
        var month = date[0];
        var day = date[1];
        console.log(typeof(year));
        var newdate = year + "/" + month + "/" + day;
        $('#gregorian').val(newdate);
    }
}

function JudyTest(ethdate){
	var calendar = $.calendars.instance('ethiopian');
	var date = ethdate.split('-');
	var year = parseInt(date[0], 10);
    var month = parseInt(date[1], 10);
    var day = parseInt(date[2], 10);
    var jd = calendar.toJD(year, month, day);
    var gregDate = $.calendars.instance('gregorian').fromJD(jd).toString();
	return gregDate;
}

function gencal(){
	cal = $('#ethi').calendarsPicker({calendar: $.calendars.instance('ethiopian')}); 
	return cal
}



