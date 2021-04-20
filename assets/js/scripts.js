$(document).ready(function(){
    $('.parallax').parallax();
    $('.modal').modal();
    $(document).on('click', '.modal-trigger', function() {
        let bgUrl = $(this).data('bg-url');
        $('.portifolio-img').attr('src', bgUrl);
    });
});