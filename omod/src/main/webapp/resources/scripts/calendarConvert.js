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
        var month = parseInt(date[0], 10);
        var day = parseInt(date[1], 10);
        var jd = calendar.toJD(year, month, day);
        var ethDate = $.calendars.instance('ethiopian').fromJD(jd).toString();
        $('#ethiopian').val(ethDate.replace(/-/g, "/"));
    }
    catch (e){

    }
}
function EthToGreg(){
    try {
        var calendar = $.calendars.instance('ethiopian');
        var date = $('#ethiopianDOB').val().split('/');
        var year = parseInt(date[2], 10);
        var month = parseInt(date[1], 10);
        var day = parseInt(date[0   ], 10);
        var jd = calendar.toJD(year, month, day);
        var gregDate = $.calendars.instance('gregorian').fromJD(jd).toString();
        $('#gregorian').val(gregDate.replace(/-/g, "/"));
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