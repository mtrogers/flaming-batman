'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName)
    .config(function($translateProvider) {
        $translateProvider.translations('en', {
            TRANSLATE: 'Translate',
            SELECT_LANG: 'Select a language to begin',
            HELLO: 'Hello, I would like to ask you a question.',
            CONTINUE: 'Press continue if this is the correct language',
            ENTER: 'Enter text to be translated:'
        })
        .translations('es', {
            TRANSLATE: 'Tracudir',
            SELECT_LANG: 'Seleccione un idioma para comenzar',
            HELLO: 'Hola, me gustaría hacerle una pregunta.',
            CONTINUE: 'Presione continuar si este es el idioma correcto',
            ENTER: 'Introduzca el texto a traducir:'
        })
        .translations('fr', {
            TRANSLATE: 'Traduire',
            SELECT_LANG: 'Sélectionnez une langue pour commencer',
            HELLO: 'Bonjour, je voudrais vous poser une question.',
            CONTINUE: 'Appuyez continuer si ce est la bonne langue',
            ENTER: 'Entrez le texte à traduire:'
        })
        .translations('ch', {
            TRANSLATE: '翻译',
            SELECT_LANG: '选择一种语言开始',
            HELLO: '你好，我想问你一个问题。',
            CONTINUE: '新闻不断，如果这是正确的语言',
            ENTER: '输入文本翻译：'
        })
        .translations('ar', {
            TRANSLATE: 'ترجم',
            SELECT_LANG: 'اختر اللغة للبدء',
            HELLO: 'مرحبا، أود أن أسألك سؤالا.',
            CONTINUE: 'تواصل الصحافة إذا كانت هذه هي اللغة الصحيحة',
            ENTER: 'أدخل النص المراد ترجمته:'

        })
        .translations('pt', {
            TRANSLATE: 'Traduzir',
            SELECT_LANG: 'Selecione um idioma para começar',
            HELLO: 'Olá, eu gostaria de lhe fazer uma pergunta.',
            CONTINUE: 'Imprensa continuar se esta é a linguagem correta',
            ENTER: 'Digite o texto a ser traduzido:'

        })
        .translations('it', {
            TRANSLATE: 'Tradurre',
            SELECT_LANG: 'Selezionare una lingua per iniziare',
            HELLO: 'Ciao, vorrei farti una domanda.',
            CONTINUE: 'Premere continuare se questa è la lingua corretta',
            ENTER: 'Inserisci il testo da tradurre:'

        })
        .translations('kr', {
            TRANSLATE: '번역',
            SELECT_LANG: '시작 언어를 선택',
            HELLO: '안녕하세요, 저는 당신에게 질문을하고 싶습니다.',
            CONTINUE: '이 올바른 언어 인 경우 키를 눌러 계속',
            ENTER: '텍스트를 입력 번역합니다 :'
        })
        .translations('de', {
            TRANSLATE: 'Übersetzen',
            SELECT_LANG: 'Wählen Sie die Sprache zu beginnen',
            HELLO: 'Hallo, Ich möchte Ihnen eine Frage stellen.',
            CONTINUE: 'Drücken Sie weiterhin, ob dies die richtige Sprache',
            ENTER: 'Geben Sie den Text zu übersetzen:'
        })
        .translations('hi', {
            TRANSLATE: 'अनुवाद करें',
            SELECT_LANG: 'शुरू करने के लिए एक भाषा का चयन करें',
            HELLO: 'हैलो, मैं तुम्हें एक सवाल पूछना चाहूँगा।',
            CONTINUE: 'यह सही भाषा है अगर प्रेस के लिए जारी',
            ENTER: 'पाठ दर्ज करें अनुवाद किया जाना है:'

        })
        $translateProvider.preferredLanguage('en');
        /*
        $translateProvider.useStaticFilesLoader({
            prefix: '/languages',
            suffix: '.json'
        });
        */
        //$translateProvider.useLocalStorage();
    })
    .config(['$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ]);

//Then define the init function for starting up the application
angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
	if (window.location.hash === '#_=_') window.location.hash = '#!';

	//Then init the app
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});