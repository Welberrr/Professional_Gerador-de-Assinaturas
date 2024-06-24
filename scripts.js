$(document).ready(function() {
    function updateEmail() {
        var primeiroNome = $('#primeiroNome').val();
        var segundoNome = $('#segundoNome').val();
        if (primeiroNome && segundoNome) {
            var email = primeiroNome.toLowerCase() + '.' + segundoNome.toLowerCase() + '@referenciaseguros.com.br';
            $('#email').val(email);
            $('a#emailAqui').text(email);
            $('#emailAqui').attr('href', 'mailto:' + email);
            $('a#emailAquiAlt').text(email);
            $('#emailAquiAlt').attr('href', 'mailto:' + email);
            $('a#emailAquiThird').text(email);
            $('#emailAquiThird').attr('href', 'mailto:' + email);
        }
    }

    $('#primeiroNome, #segundoNome').on('input', function() {
        updateEmail();
        var primeiroNome = $('#primeiroNome').val();
        var segundoNome = $('#segundoNome').val();
        $('#primeiroNomeAqui b').text(primeiroNome + ' ' + segundoNome);
        $('#primeiroNomeAquiAlt').text(primeiroNome + ' ' + segundoNome);
        $('#primeiroNomeAquiThird').text(primeiroNome + ' ' + segundoNome);
    });

    $('#cargo').on('change', function() {
        var cargo = $(this).val();
        $('#cargoAqui').text(cargo);
        $('#cargoAquiAlt').text(cargo);
        $('#cargoAquiThird').text(cargo);
    });

    $('#telefone').on('input', function() {
        var telefone = $(this).val();
        $('a#telefoneAqui').text('+55 ' + telefone);
        $('#telefoneAqui').attr('href', 'tel:' + telefone.replace(/[^\d]+/g, ''));
        $('a#telefoneAquiAlt').text('+55 ' + telefone);
        $('#telefoneAquiAlt').attr('href', 'tel:' + telefone.replace(/[^\d]+/g, ''));
        $('#telefoneAquiThird').text('+55 ' + telefone);
    });

    $('#email').on('input', function() {
        var email = $(this).val();
        $('a#emailAqui').text(email);
        $('#emailAqui').attr('href', 'mailto:' + email);
        $('a#emailAquiAlt').text(email);
        $('#emailAquiAlt').attr('href', 'mailto:' + email);
        $('a#emailAquiThird').text(email);
        $('#emailAquiThird').attr('href', 'mailto:' + email);
    });

    $('#fotoUpload').on('change', function(event) {
        var reader = new FileReader();
        reader.onload = function() {
            var output = document.getElementById('preview-image-url');
            output.src = reader.result;
            output.style.display = 'block';
            var outputSecond = document.getElementById('preview-image-url-second');
            outputSecond.src = reader.result;
            outputSecond.style.display = 'block';
            var outputThird = document.getElementById('preview-image-url-third');
            outputThird.src = reader.result;
            outputThird.style.display = 'block';
        }
        reader.readAsDataURL(event.target.files[0]);
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
    showPopup(); // Mostrar o pop-up
}

function copyAlt() {
    var target = document.getElementById('assAlt');
    var range, select;
    var img = target.querySelector('img');
    img.classList.add('round-image');
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
    showPopup(); // Mostrar o pop-up
}

function copyThird() {
    var target = document.getElementById('assThird');
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
    showPopup(); // Mostrar o pop-up
}

function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(function() {
        popup.style.display = 'none';
    }, 2000);
}