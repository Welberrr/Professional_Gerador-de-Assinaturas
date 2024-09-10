$(document).ready(function () {
    // Máscara de telefone para o formato (xx) x xxxx-xxxx
    $('#telefone').mask('(00) 0 0000-0000');

    // Função para transformar texto em maiúsculo
    function capitalizeUpper(string) {
        return string.toUpperCase();
    }

    function formatNameAndSurname() {
        var nome = $('#nome').val();
        var sobrenome = $('#sobrenome').val();

        if (nome) {
            $('#nome').val(capitalizeUpper(nome));
        }
        if (sobrenome) {
            $('#sobrenome').val(capitalizeUpper(sobrenome));
        }
    }

    function updateEmail() {
        var nome = $('#nome').val().toLowerCase().replace(/\s/g, '');
        var sobrenome = $('#sobrenome').val().toLowerCase().replace(/\s/g, '');
        if (nome && sobrenome) {
            var email = nome + '.' + sobrenome + '@referenciaseguros.com.br';
            $('#email').val(email);
        }
    }



    $('#cropModal').on('shown.bs.modal', function () {
        cropper = new Cropper(image, {
            aspectRatio: 1,
            viewMode: 3
        });
    }).on('hidden.bs.modal', function () {
        cropper.destroy();
        cropper = null;
    });

    $('#crop').click(function () {
        var canvas;
        $('#cropModal').modal('hide');

        if (cropper) {
            canvas = cropper.getCroppedCanvas({
                width: 100,
                height: 100,
            });
            canvas.toBlob(function (blob) {
                var url = URL.createObjectURL(blob);
                var reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = function () {
                    var base64data = reader.result;
                    $('#modelo-foto3').attr('src', base64data).addClass('img-preview');
                    $('#modelo-foto4').attr('src', base64data).addClass('img-preview');
                };
            });
        }
    });


    function updateModel() {
        var nome = $('#nome').val();
        var sobrenome = $('#sobrenome').val();
        var cargo = $('#cargo').val();
        var telefone = $('#telefone').val();
        var email = $('#email').val();

        // Atualiza os valores em todos os modelos
        $('.modelo-nome').text(nome ? capitalizeUpper(nome) : 'NOME');
        $('.modelo-sobrenome').text(sobrenome ? capitalizeUpper(sobrenome) : 'SOBRENOME');
        $('.modelo-cargo').text(cargo ? capitalizeUpper(cargo) : 'CARGO');
        $('.modelo-telefone').text(telefone ? telefone : '(00) 9 9999-9999');
        $('.modelo-email').text(email ? email : 'email.email@referenciaseguros.com.br');

        // Atualiza o link do WhatsApp para abrir no WhatsApp Web
        if (telefone) {
            var formattedPhone = telefone.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
            var whatsappLink = "https://web.whatsapp.com/send?phone=55" + formattedPhone;
            $('.whatsapp-link').attr('href', whatsappLink);
        }
    }

    $('#nome, #sobrenome, #cargo, #telefone, #email').on('input', function () {
        formatNameAndSurname();
        updateEmail();
        updateModel();
    });


    // Função para copiar o conteúdo visual da tabela ao clicar
    $('table').on('click', async function () {
        try {
            const htmlContent = $(this).prop('outerHTML'); // Pega o HTML da tabela

            // Usando a API de Clipboard para copiar o conteúdo como texto HTML
            await navigator.clipboard.write([
                new ClipboardItem({
                    'text/html': new Blob([htmlContent], { type: 'text/html' })
                })
            ]);

            // Mostrar o popup estilizado
            const popup = $('#popup');
            popup.addClass('show');
            setTimeout(function () {
                popup.removeClass('show');
            }, 2000); // O popup ficará visível por 2 segundos

        } catch (err) {
            console.error('Falha ao copiar:', err);
            alert('Erro ao copiar, tente novamente.');
        }
    });












    var cropper;
    var image = document.getElementById('image');
    var input = document.getElementById('foto');  // Corrigi aqui para refletir o ID correto

    $('#foto').on('change', function (event) {
        var files = event.target.files;
        var done = function (url) {
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
                reader.onload = function (event) {
                    done(reader.result);
                };
                reader.readAsDataURL(file);
            }
        }
    });



});
