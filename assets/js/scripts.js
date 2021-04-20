﻿var meusProjetos = [
    {
		'name': 'Troia Games (2011)',
		'image': 'assets/images/troia-games.big.png',
		'description': 'Um site de venda de chaves para jogos online, na epóca trabalhei com mais um designer. Cuidei de todo desenvolvimento do backend e frontend e design.'
	},
	{
		'name': 'Legendado (2015)',
		'image': 'assets/images/legendado.min.png',
		'description': 'Plataforma online que disponibilizava legenda para vários filmes, séries e documentários nacionais e internacionais. No projeto, cuidei do design e programação dos sistemas, incluindo painel administrativo para as necessidades do site.'
	},
	{
		'name': 'Alcance Social (2016)',
		'image': 'assets/images/alcancesocial.min.png',
		'description': 'Uma plataforma onde donos de páginas no facebook podem lucrar com seus seguidores, impulsionando suas postagens e gerando lucro com seus curtidores, nesse projeto cuideo do design e programação dos sistemas.'
	},
	{
		'name': 'Encurta me (2016)',
		'image': 'assets/images/encurtame.big.png',
		'description': 'Um sistema que permite com que os usuários que encurtem as suas urls no site ganhem dinheiro a cada 1000 acessos no link. Cuidei de todo desenvolvimento desde design, frontend, backend e um painel administrativo exclusivo para as necessidades do site. Possui integração com PayPal.'
	},
	{
		'name': 'FollowInsta (2017-2019)',
		'image': 'assets/images/followinsta.big.png',
		'description': 'Uma plataforma que permite que os usuários ganhem seguidores no instagram, no projeto, cuidei do desenvolvimento do layout, codificação frontend e backend, também possui um painel exclusivo para gerenciamento das contas, resoluão de problemas e possui integração com o PagSeguro.'
	},
	{
		'name': 'Curtidas TT (2019)',
		'image': 'assets/images/curtidastt.big.png',
		'description': 'Plataforma que permite usuários do twitter ganhem curtidas em seus posts, também cuidei do frontend e backend no projeto todo. Possui painel administrativo próprio.'
	},
	{
		'name': 'Potatos Roleplay (2019)',
		'image': 'assets/images/followinsta.big.png',
		'youtube': 'https://www.youtube.com/embed/ppox7kbFa_o',
		'description': 'A primeira comunidade de Roleplay no GTA 5 na plataforma fiveM, cuidei de todo desenvolvimento do novo servidor que possui cerca de 50 mil linhas de código, incluindo códigos do HUD.'
	},
	{
		'name': 'DOMMA - Ecommerce (2020)',
		'image': 'assets/images/dommastore.com.br.png',
		'description': 'Plataforma estilo ecommerce que permite estilização, adição de categorias, produtos, totalmente integrado com o Painel de Gestão Empresarial próprio e possível abertura para franqueados online. E é totalmente responsivo.'
	},
	{
		'name': 'SGNE - Sistema de gerenciamento de negócios especializado (2020)',
		'image': 'assets/images/painel.domma.store.png',
		'description': 'Plataforma para gestão empresarial, inclui cadastro de clientes, transportadoras, funcionário, produtos com ou sem variações, controle de estoque completo, geração de código de barras, controle financeiro, integração com ecommerce, relatórios DRE e muito mais.'
	},
];

$(document).ready(function(){
    $('.parallax').parallax();
    $('.modal').modal();
    $(document).on('click', '.modal-trigger', function() {
        let bgUrl = $(this).data('bg-url');
        $('.portifolio-img').attr('src', bgUrl);
    });

    let count = 0, htmlMount = '';
    for(let i in meusProjetos) {

        let projeto = meusProjetos[i];

        if (count == 0) {
            htmlMount += '<div class="row">';
        }

        htmlMount += `
            <div class="col s12 m6 l6">
                <div class="card hoverable work">
                    ${typeof projeto.youtube !== 'undefined'||null ? `
                        <div class="card-image">
                            <iframe style="width:100%;" height="315" src="${projeto.youtube}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>` : `
                    
                        <a href="#modal1" class="modal-trigger" data-bg-url="${projeto.image}">
                            <div class="card-image" style="min-height:250px; background:url('${projeto.image}'); background-size:cover;"></div>
                        </a>
                    `}
                    <div class="card-content">
                        <h5>${projeto.name}</h5>
                        <p>${projeto.description}</p>
                    </div>
                    <div class="card-action center-align">
                        <a href="#" target="_blank"><i aria-hidden="true" class="fa fa-codepen fa-2x"></i></a>
                    </div>
                </div>
            </div>
        `;

        if (count == 1) {
            count = 0;
            htmlMount += `</div>`;
            continue;
        }
        count++;
    }

    $('.js-projetos').html(htmlMount);
});