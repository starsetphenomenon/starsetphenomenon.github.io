$(document).ready(function () {
    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('.contacts__overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });
});