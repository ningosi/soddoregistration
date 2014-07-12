angular.module('EthiopiantoGregorianConverter')
.factory('EthiopiantoGregorianConverter',function(){
	    var calendar = $.calendars.instance('ethiopian');
        var date = $('#ethiopianDOB').val().split('/');
        var year = parseInt(date[2], 10);
        var month = parseInt(date[1], 10);
        var day = parseInt(date[0   ], 10);
        var jd = calendar.toJD(year, month, day);
        var gregDate = $.calendars.instance('gregorian').fromJD(jd).toString();
        //$('#gregorian').val(gregDate.replace(/-/g, "/"));
        return gregDate
})