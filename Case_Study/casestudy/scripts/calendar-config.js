$().ready(function () {
    $('.pUpDate, .dOffDate').datepicker({
        numberOfMonths: 1,
        showButtonPanel: true,
        //beforeShow: customRange,
        dateFormat: 'dd-mm-yy',
        showOn: 'both',
        buttonImage: 'images/Calendar.jpg',
        buttonImageOnly: true,
        buttonText: 'Show Date Picker'
    });
});
function customRange(a) {
    var b = new Date();
    var c = new Date(b.getFullYear(), b.getMonth(), b.getDate());
    if (a.id == 'DropoffDate') {
        if ($('.pUpDate').datepicker('getDate') != null) {
            c = $('.pUpDate').datepicker('getDate');
        }
    }
    return {
        minDate: c
    }
}  