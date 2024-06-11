$(document).ready(function() {
    $('#primeiroNome').on('input', function() {
        var primeiroNome = $(this).val();
        var segundoNome = $('#segundoNome').val();
        $('#primeiroNomeAqui b').text(primeiroNome + ' ' + segundoNome);
        $('#primeiroNomeAquiAlt').text(primeiroNome + ' ' + segundoNome);
    });

    $('#segundoNome').on('input', function() {
        var primeiroNome = $('#primeiroNome').val();
        var segundoNome = $(this).val();
        $('#primeiroNomeAqui b').text(primeiroNome + ' ' + segundoNome);
        $('#primeiroNomeAquiAlt').text(primeiroNome + ' ' + segundoNome);
    });

    $('#cargo').on('input', function() {
        var cargo = $(this).val();
        $('#cargoAqui').text(cargo);
        $('#cargoAquiAlt').text(cargo);
    });

    $('#telefone').on('input', function() {
        var telefone = $(this).val();
        $('a#telefoneAqui').text('+55 ' + telefone);
        $('#telefoneAqui').attr('href', 'tel:' + telefone.replace(/[^\d]+/g, ''));
        $('a#telefoneAquiAlt').text('+55 ' + telefone);
        $('#telefoneAquiAlt').attr('href', 'tel:' + telefone.replace(/[^\d]+/g, ''));
    });

    $('#email').on('input', function() {
        var email = $(this).val();
        $('a#emailAqui').text(email);
        $('#emailAqui').attr('href', 'mailto:' + email);
        $('a#emailAquiAlt').text(email);
        $('#emailAquiAlt').attr('href', 'mailto:' + email);
    });

    $('#foto').on('input', function() {
        var foto = $(this).val();
        $("#preview-image-url").attr('src', foto);
        $("#preview-image-url-alt").attr('src', foto);
    });

    $('#site').on('input', function() {
        var primeiroNome = $('#primeiroNome').val();
        var segundoNome = $('#segundoNome').val();
        var nomeCompleto = primeiroNome + '-' + segundoNome;
        var site = $(this).val();
        $('#siteAqui').text(site);
        $('#siteAqui').attr('href', site + '?utm_source=assinatura&utm_medium=' + nomeCompleto);
        $('#siteAquiAlt').text(site);
        $('#siteAquiAlt').attr('href', site + '?utm_source=assinatura&utm_medium=' + nomeCompleto);
    });

    $('#linkedin').on('input', function() {
        var linkedin = $(this).val();
        $('#linkedinAqui').attr('href', linkedin);
        $('#linkedinAquiAlt').attr('href', linkedin);
    });

    $('#linkedinIco').on('input', function() {
        var linkedinIco = $(this).val();
        $(".linkedinIco").attr('src', linkedinIco);
        $("#preview-linkedin-url-alt").attr('src', linkedinIco);
    });

    $('#instagram').on('input', function() {
        var instagram = $(this).val();
        $('#instagramAqui').attr('href', instagram);
        $('#instagramAquiAlt').attr('href', instagram);
    });

    $('#instagramIco').on('input', function() {
        var instagramIco = $(this).val();
        $(".instagramIco").attr('src', instagramIco);
        $("#preview-instagram-url-alt").attr('src', instagramIco);
    });

    $('#facebook').on('input', function() {
        var facebook = $(this).val();
        $('#facebookAqui').attr('href', facebook);
        $('#facebookAquiAlt').attr('href', facebook);
    });

    $('#facebookIco').on('input', function() {
        var facebookIco = $(this).val();
        $(".facebookIco").attr('src', facebookIco);
        $("#preview-facebook-url-alt").attr('src', facebookIco);
    });

    $("#clickToChange").on('click', function() {
        var hexadecimal = $('#hexadecimal').val();
        $('table').css('border-color', hexadecimal);
        $('#primeiroNomeAqui').css('color', hexadecimal);
        $('#segundoNome').css('color', hexadecimal);
        $('.signature-name').css('color', hexadecimal);
    });
});

function copy() {
    var target = document.getElementById('ass');
    var range, select;
    if (document.createRange) {
        range = document.createRange();
        range.selectNode(target);
        select = window.getSelection();
        select.removeAllRanges();
        select.addRange(range);
        document.execCommand('copy');
        select.removeAllRanges();
    } else {
        range = document.body.createTextRange();
        range.moveToElementText(target);
        range.select();
        document.execCommand('copy');
    }
}

function copyAlt() {
    var target = document.getElementById('assAlt');
    var range, select;
    if (document.createRange) {
        range = document.createRange();
        range.selectNode(target);
        select = window.getSelection();
        select.removeAllRanges();
        select.addRange(range);
        document.execCommand('copy');
        select.removeAllRanges();
    } else {
        range = document.body.createTextRange();
        range.moveToElementText(target);
        range.select();
        document.execCommand('copy');
    }
}
