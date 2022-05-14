


function dateRangeOverlaps(a_start, a_end, b_start, b_end) {
    if (a_start <= b_start && b_start <= a_end) return true; // b starts in a
    if (a_start <= b_end   && b_end   <= a_end) return true; // b ends in a
    if (b_start <  a_start && a_end   <  b_end) return true; // a in b
    return false;
}
function multipleDateRangeOverlaps(booking_dates,date) {
    var i, j;
    
    for (i = 0; i < date.length ; i += 1) {
            if (
                dateRangeOverlaps(
                    booking_dates[start], booking_dates[end],
                    date[i][0], date[i][1]
                )
            ) return true;
    }
    return false;
}
    