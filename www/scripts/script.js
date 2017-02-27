$(function () {
    $("#btnRave").click(function (ev) {
        ev.preventDefault();
        getpaidSetup({
            customer_email: localStorage.email,
            customer_firstname: localStorage.custName,
            amount: sessionStorage.BookingCost,
            txref: sessionStorage.BookPayID,
            PBFPubKey: "FLWPUBK-f7e829bfb6331afb33b122edd4f67aec-X",
            meta: [{ flightid: 3849 }],
            onclose: function () { },
            callback: function (d) { }
        });
    });
});