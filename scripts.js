$(document).ready(function() {
    $('#primeiroNome').on('input', function() {
        var primeiroNome = $(this).val();
        var segundoNome = $('#segundoNome').val();
        $('#primeiroNomeAqui b').text(primeiroNome + ' ' + segundoNome);
        $('#primeiroNomeAquiAlt').text(primeiroNome + ' ' + segundoNome);
        $('#primeiroNomeAquiThird').text(primeiroNome + ' ' + segundoNome);
    });

    $('#segundoNome').on('input', function() {
        var primeiroNome = $('#primeiroNome').val();
        var segundoNome = $(this).val();
        $('#primeiroNomeAqui b').text(primeiroNome + ' ' + segundoNome);
        $('#primeiroNomeAquiAlt').text(primeiroNome + ' ' + segundoNome);
        $('#primeiroNomeAquiThird').text(primeiroNome + ' ' + segundoNome);
    });

    $('#cargo').on('input', function() {
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

    html2canvas(target).then(function(canvas) {
        canvas.toBlob(function(blob) {
            navigator.clipboard.write([
                new ClipboardItem({
                    [blob.type]: blob
                })
            ]).then(function() {
                console.log('Imagem copiada com sucesso!');
                showPopup(); // Mostrar o pop-up
            }).catch(function(error) {
                console.error('Erro ao copiar imagem: ', error);
            });
        });
    });
}

function loadHtml2Canvas() {
    var script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
    script.onload = function() {
        console.log('html2canvas carregado com sucesso.');
    };
    document.head.appendChild(script);
}

window.onload = loadHtml2Canvas;

function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(function() {
        popup.style.display = 'none';
    }, 2000);
}