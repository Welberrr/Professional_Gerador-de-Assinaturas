$(document).ready(function() {
    // Máscara de telefone para o formato (xx) x xxxx-xxxx
    $('#telefone').mask('(00) 0 0000-0000');

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    function formatNameAndSurname() {
        var nome = $('#nome').val();
        var sobrenome = $('#sobrenome').val();
        
        if (nome) {
            $('#nome').val(capitalizeFirstLetter(nome));
        }
        if (sobrenome) {
            $('#sobrenome').val(capitalizeFirstLetter(sobrenome));
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

    function updateModel() {
        var nome = $('#nome').val();
        var sobrenome = $('#sobrenome').val();
        var cargo = $('#cargo').val();
        var telefone = $('#telefone').val();
        var email = $('#email').val();

        // Atualiza os valores nos modelos
        $('#modelo-nome').text(nome ? capitalizeFirstLetter(nome) : 'NOME');
        $('#modelo-sobrenome').text(sobrenome ? capitalizeFirstLetter(sobrenome) : 'SOBRENOME');
        $('#modelo-cargo').text(cargo ? capitalizeFirstLetter(cargo) : 'CARGO');
        $('#modelo-telefone').text(telefone ? telefone : '(00) 9 9999-9999');
        $('#modelo-email').text(email ? email : 'email.email@referenciaseguros.com.br');

        // Atualiza o link do WhatsApp
        if (telefone) {
            var whatsappLink = "https://web.whatsapp.com/send?phone=55" + telefone.replace(/\D/g, '');
            $('#modelo-whatsapp-link').attr('href', whatsappLink);
        } else {
            $('#modelo-whatsapp-link').attr('href', '#');
        }
    }

    $('#nome, #sobrenome, #cargo, #telefone, #email').on('input', function() {
        formatNameAndSurname();
        updateEmail();
        updateModel();
    });

    // Função para copiar o conteúdo visual da tabela ao clicar
    $('table').on('click', async function() {
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
            setTimeout(function() {
                popup.removeClass('show');
            }, 2000); // O popup ficará visível por 2 segundos

        } catch (err) {
            console.error('Falha ao copiar:', err);
            alert('Erro ao copiar, tente novamente.');
        }
    });
});

$(document).ready(function() {
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

    function updateModel() {
        var nome = $('#nome').val();
        var sobrenome = $('#sobrenome').val();
        var cargo = $('#cargo').val();
        var telefone = $('#telefone').val();
        var email = $('#email').val();

        // Atualiza os valores nos modelos
        $('#modelo-nome').text(nome ? capitalizeUpper(nome) : 'NOME');
        $('#modelo-sobrenome').text(sobrenome ? capitalizeUpper(sobrenome) : 'SOBRENOME');
        $('#modelo-cargo').text(cargo ? capitalizeUpper(cargo) : 'CARGO');
        $('#modelo-telefone').text(telefone ? telefone : '(00) 9 9999-9999');
        $('#modelo-email').text(email ? email : 'email.email@referenciaseguros.com.br');

        // Atualiza o link do WhatsApp
        if (telefone) {
            var whatsappLink = "https://web.whatsapp.com/send?phone=55" + telefone.replace(/\D/g, '');
            $('#modelo-whatsapp-link').attr('href', whatsappLink);
        } else {
            $('#modelo-whatsapp-link').attr('href', '#');
        }
    }

    $('#nome, #sobrenome, #cargo, #telefone, #email').on('input', function() {
        formatNameAndSurname();
        updateEmail();
        updateModel();
    });

    // Função para copiar o conteúdo visual da tabela ao clicar
    $('table').on('click', async function() {
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
            setTimeout(function() {
                popup.removeClass('show');
            }, 2000); // O popup ficará visível por 2 segundos

        } catch (err) {
            console.error('Falha ao copiar:', err);
            alert('Erro ao copiar, tente novamente.');
        }
    });
});