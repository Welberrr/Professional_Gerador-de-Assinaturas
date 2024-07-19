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
        $('#cargoAquiFourth').text(cargo);
        $('#cargoAquiFifth').text(cargo);
    });

    $('#telefone').mask('(00) 0 0000-0000').on('input', function() {
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

    var cropper;
    var image = document.getElementById('image');
    var input = document.getElementById('fotoUpload');

    $('#fotoUpload').on('change', function(event) {
        var files = event.target.files;
        var done = function(url) {
            input.value = '';
            image.src = url;
            $('#cropModal').modal('show');
        };
        var reader;
        var file;
        var url;

        if (files && files.length > 0) {
            file = files[0];

            if (URL) {
                done(URL.createObjectURL(file));
            } else if (FileReader) {
                reader = new FileReader();
                reader.onload = function(event) {
                    done(reader.result);
                };
                reader.readAsDataURL(file);
            }
        }
    });

    $('#cropModal').on('shown.bs.modal', function() {
        cropper = new Cropper(image, {
            aspectRatio: 1,
            viewMode: 3
        });
    }).on('hidden.bs.modal', function() {
        cropper.destroy();
        cropper = null;
    });

    $('#crop').click(function() {
        var canvas;
        $('#cropModal').modal('hide');

        if (cropper) {
            canvas = cropper.getCroppedCanvas({
                width: 100,
                height: 100,
            });
            canvas.toBlob(function(blob) {
                var url = URL.createObjectURL(blob);
                var reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = function() {
                    var base64data = reader.result;
                    $('#preview-image-url').attr('src', base64data).addClass('img-preview');
                    $('#preview-image-url-second').attr('src', base64data).addClass('img-preview');
                    $('#preview-image-url-third').attr('src', base64data).addClass('img-preview');
                };
            });
        }
    });
});
function copyAsImage5() {
    var target = document.getElementById('model5');

    htmlToImage.toPng(target)
        .then(function (dataUrl) {
            navigator.clipboard.write([
                new ClipboardItem({
                    'image/png': fetch(dataUrl).then(res => res.blob())
                })
            ]).then(() => {
                showPopup();
            }).catch(err => {
                console.error('Erro ao copiar a imagem: ', err);
            });
        })
        .catch(function (error) {
            console.error('Erro ao gerar a imagem: ', error);
        });
}

function copyAsImage4() {
    var target = document.getElementById('model4');

    htmlToImage.toPng(target)
        .then(function (dataUrl) {
            navigator.clipboard.write([
                new ClipboardItem({
                    'image/png': fetch(dataUrl).then(res => res.blob())
                })
            ]).then(() => {
                showPopup();
            }).catch(err => {
                console.error('Erro ao copiar a imagem: ', err);
            });
        })
        .catch(function (error) {
            console.error('Erro ao gerar a imagem: ', error);
        });
}

function copyAsImage3() {
    var target = document.getElementById('model3');

    htmlToImage.toPng(target)
        .then(function (dataUrl) {
            navigator.clipboard.write([
                new ClipboardItem({
                    'image/png': fetch(dataUrl).then(res => res.blob())
                })
            ]).then(() => {
                showPopup();
            }).catch(err => {
                console.error('Erro ao copiar a imagem: ', err);
            });
        })
        .catch(function (error) {
            console.error('Erro ao gerar a imagem: ', error);
        });
}

function copyAsImage2() {
    var target = document.getElementById('model2');

    htmlToImage.toPng(target)
        .then(function (dataUrl) {
            navigator.clipboard.write([
                new ClipboardItem({
                    'image/png': fetch(dataUrl).then(res => res.blob())
                })
            ]).then(() => {
                showPopup();
            }).catch(err => {
                console.error('Erro ao copiar a imagem: ', err);
            });
        })
        .catch(function (error) {
            console.error('Erro ao gerar a imagem: ', error);
        });
}

function copyAsImage1() {
    var target = document.getElementById('model1');

    htmlToImage.toPng(target)
        .then(function (dataUrl) {
            navigator.clipboard.write([
                new ClipboardItem({
                    'image/png': fetch(dataUrl).then(res => res.blob())
                })
            ]).then(() => {
                showPopup();
            }).catch(err => {
                console.error('Erro ao copiar a imagem: ', err);
            });
        })
        .catch(function (error) {
            console.error('Erro ao gerar a imagem: ', error);
        });
}

function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(function() {
        popup.style.display = 'none';
    }, 2000);
}