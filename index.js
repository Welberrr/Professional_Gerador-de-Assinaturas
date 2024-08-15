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

    $('#nome, #sobrenome').on('input', function() {
        formatNameAndSurname();
        updateEmail();
    });

    // Função para mostrar a seção correspondente
    function showSection(sectionId) {
        // Esconde todas as seções
        $('.section').hide();

        // Mostra apenas a seção clicada
        $('#' + sectionId).show();
    }

    // Evento para os botões do menu
    $('.menu button').click(function() {
        var sectionId = $(this).attr('data-section');
        showSection(sectionId);
    });

    // Mostra a primeira seção ao carregar a página
    showSection('insercao-dados');

    // Função para atualizar os modelos com os dados inseridos
    $('#nome, #sobrenome, #cargo, #telefone').on('input', function() {
        var nome = $('#nome').val();
        var sobrenome = $('#sobrenome').val();
        var cargo = $('#cargo').val();
        var telefone = $('#telefone').val();

        // Atualiza os modelos
        $('.modelo p:nth-child(1)').text(nome + ' ' + sobrenome);
        $('.modelo p:nth-child(2)').text(cargo);
        $('.modelo p:nth-child(3)').text(telefone);

        // Atualiza o link do WhatsApp para abrir no WhatsApp Web
        if (telefone) {
            var formattedPhone = telefone.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
            var whatsappLink = "https://web.whatsapp.com/send?phone=55" + formattedPhone;
            $('.whatsapp-link').attr('href', whatsappLink);
        }
    });

    // Função para copiar o conteúdo visual do modelo ao clicar
    $('.modelo').on('click', async function() {
        try {
            const tempElement = $(this).clone();
            const htmlContent = tempElement.prop('outerHTML');
            const blob = new Blob([htmlContent], { type: 'text/html' });
            const data = [new ClipboardItem({ [blob.type]: blob })];

            await navigator.clipboard.write(data);
        } catch (err) {
            console.error('Falha ao copiar:', err);
            alert('Erro ao copiar, tente novamente.');
        }
    });
});

$(document).ready(function() {
    // ... (restante do seu código)

    // Função para copiar o conteúdo visual do modelo ao clicar
    $('.modelo').on('click', async function() {
        try {
            const tempElement = $(this).clone();
            const htmlContent = tempElement.prop('outerHTML');
            const blob = new Blob([htmlContent], { type: 'text/html' });
            const data = [new ClipboardItem({ [blob.type]: blob })];

            await navigator.clipboard.write(data);

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