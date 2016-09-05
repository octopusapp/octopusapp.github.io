var isIOS=/iPad|iPhone|iPod/.test(navigator.userAgent)
var langEN=document.location.search=='?lang=en'
var langES=!langEN

function setIOSBody(){
    if (isIOS) jQuery('body').addClass('ios')
    }
function initTest(){
    setIOSBody()

    var lnd=jQuery('#lnd')[0]
    lnd.src=isIOS?'img/landing-ios.png':'img/landing-android.png'

     $('.scrollspy').scrollSpy()
 
    /*** Animate word ***/
    initHeadline()
     
    $('#preloader').hide()

    sendTracking()
    }
function getTranslationStrings(){
    var dic= {
        es:{
            'lang-head-title':'Octopus: Test de oposiciones en tu móvil',
            'lang-typewriter-header':'Oposiciones de ',
            'lang-typewriter-values':[
                'MIR',
                'Auxiliar de Bibliotecas',
                'Policía',
                'EIR',
                'Biología',
                'Química',
                'Farmacia',
                'Psicología',
                'Radiofísica',

                'Informática',
                'Telecomunicaciones',
                'Auxiliar Administrativo',
                'Agentes de Hacienda',
                'Auxiliar Judicial',
                ],
            
            'lang-intro-header':'Octopus es una nueva app para realizar',
            'lang-intro-text':  'test de oposiciones',
            'lang-intro-suffix':'desde tu móvil.',

            'lang-box1-header':'Descarga gratuita',
            'lang-box1-text':'Para teléfonos Android con versión 4 o superior y iPhone con versión 7 o superior.',

            'lang-box2-header':'Centenares de test al alcance de tu mano',
            'lang-box2-text':'Tenemos muchos de los cuestionarios que han salido en oposiciones, e iremos incorporando todos los que salgan. Están organizados para que encuentres rápidamente lo que buscas, y la mayoría (+95%) son gratuitos.',

            'lang-box3-header':'Encuentra lo que te interesa',
            'lang-box3-text':'Puedes explorar las características, buscar por año y profesión, y hasta descargar una muestra gratuita por si aún tienes dudas.',

            'lang-box4-header':'Una interfaz específicamente diseñada para que te concentres en tu test',
            'lang-box4-text':'Con la pregunta y las respuestas claramente delimitadas, la posibilidad de ver las imágenes adjuntas a pantalla completa, un rápido acceso al mapa del cuestionario o la posibilidad de marcar aquellas cuestiones que desees repasar.',

            'lang-box5-header':'El aprendizaje es un juego',
            'lang-box5-text':'Con el objetivo de estimularte en la consecución de tus objetivos hemos tomado prestadas algunas características de los videojuegos: medallero, ranking...',

            'lang-box6-header':'Múltiples profesiones',
            'lang-box6-text':'Hemos hecho un importante esfuerzo por incorporar un buen número de profesiones, e iremos incorporando otras nuevas de manera continua.',

            'lang-section-header':'Diseño',
            'lang-about-header':'Sobre Octopus',
            'lang-about-text':'Octopus es una nueva plataforma para realizar test de oposiciones cómodamente desde tu teléfono Android o iPhone.',

            'lang-author-header':'Ideado y creado por ',

        },
        en:{
            'lang-head-title':'Octopus: practice exams on your phone',
            'lang-typewriter-header':'Exams for ',
            'lang-typewriter-values':[
                // 'MIR',
                // 'Auxiliar de Bibliotecas',
                'Police',
                'NCLEX - Nursering',
                'Biologist',
                'Chemist',
                'Pharmacist',
                'Psychologist',
                // 'Radiofísica',

                'Computer engineer',
                'Telecom engineer',
                // 'Auxiliar Administrativo',
                'Tax agent',
                // 'Auxiliar Judicial',
                ],
            
            'lang-intro-header':'Octopus is a new app to prepare your',
            'lang-intro-text':  'test exams',
            'lang-intro-suffix':'on your smartphone.',

            'lang-box1-header':'Free download',
            'lang-box1-text':'On Android 4+ phones & iPhone 7+.',

            'lang-box2-header':'Hundreds of exams at your fingertips',
            'lang-box2-text':'Many official exams questionnaires are available in our app, also new test will be incorporated to our database by the time they are accessible. All of them are strictly organized so that you can find whatever you look for in an easy, quick way. Furthermore, most of them (+95%) are free!',

            'lang-box3-header':'Search and find',
            'lang-box3-text':'Explore by year, job… If you still have some doubts, just download a free sample',

            'lang-box4-header':'A delightful interface designed for you to focus on your exam',
            'lang-box4-text':'You will find every question clearly delimited with its own answer, marking those questions you want to review. You could watch conformed images in full screen mode and have a quick access to the questionnaire map.',

            'lang-box5-header':'Learning is a game',
            'lang-box5-text':'We have borrowed some features from games (medals, ranking...) aiming to fortify you to get your achievements.',

            'lang-box6-header':'Multiple professions',
            'lang-box6-text':'A large number of professions are already in. New others will be incorporated as soon as possible.',

            'lang-section-header':'Interface',
            'lang-about-header':'About Octopus',
            'lang-about-text':'Octopus is a new exam training tool for your smartphone',

            'lang-author-header':'Created by ',

            'lang-lnk-faq':'faq',
            'lang-lnk-roadmap':'roadmap',

        }
    }

    if (langEN)
        return dic.en
    else
        return dic.es
    }
function changelang(lang){
    document.location.search='?lang='+lang
}
function translate(){
    var d=getTranslationStrings()

    var keys=Object.keys(d)
    for (var i=0; i<keys.length; i++){
        var key=keys[i]
        var v=d[key]

        if (key=='lang-typewriter-values'){
            var ddd=$('.lang-typewriter-values').empty()

            for (var j=0; j<v.length; j++){

                ddd.append( 
                    creaObjProp('b', {texto:v[j], className:j==0?'is-visible':''}) 
                    )
                }
            }
        else
            $('.'+key).text(v)
        }
    }
function initHome(){
    setIOSBody()

    // if (langEN)
        translate()

    var lnd=jQuery('#lnd')[0]
    lnd.src=isIOS?'img/landing-ios.png':'img/landing-android.png'

    var listaImg
    if (isIOS){
        listaImg=[
            'ios-test-enfermeria.png',
            'ios-app-ajustes.png',
            'ios-app-menu-pausa.png',
            'ios-app-menu.png',
            'ios-medallero.png',
            'ios-ranking.png',
            
            'ios-test-mapa.png',
            'ios-test-pregunta.png',
            'ios-tienda.png',
            'ios-tutorial.png',
            ]
        }
    else {
        listaImg=[
            'android-test-pausa.png',
            'android-tienda.png',
            'android-test-teleco.png',
            'android-test-pregunta.png',
            'android-play-games.png',
            
            'android-medallero.png',
            'android-app-menu.png',
            'android-app-menu-pausa.png',
            'android-app-ajustes.png',
            'android-tutorial.png',
            'android-test-mapa.png',
            'android-test-fin.png',
            ]   
        }

    var pr=jQuery('.peques .row').empty()
    for (var i=0; i<listaImg.length; i++){
        var img=jQuery('<img class="col m3" src="img/mini/'+listaImg[i]+'" onclick="chimg(this)">')

        if (i%3==0) img.addClass('offset-m3')
        if (i==0) chimg(img[0])
        pr.append(img)
        }


    $('.button-collapse').sideNav()
    $('.scrollspy').scrollSpy()
 
    /*** Animate word ***/
    initHeadline()
     
    $('#preloader').hide()

    sendTracking()
    }
function chimg(f){
    var s=f.src
    s=s.replace('mini/', 'gigante/')
    jQuery('#gigante')[0].src=s
    }
function initFaq(){
    setIOSBody()
    $('#preloader').hide()
    sendTracking()
    }
///////
function sendTracking(){
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga')

    ga('create', 'UA-64989682-2', 'auto')
    ga('send', 'pageview')
    }
///////
//set animation timing
var animationDelay = 2500,
    //loading bar effect
    barAnimationDelay = 3800,
    barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
    //letters effect
    lettersDelay = 50,
    //type effect
    typeLettersDelay = 150,
    selectionDuration = 500,
    typeAnimationDelay = selectionDuration + 800,
    //clip effect 
    revealDuration = 600,
    revealAnimationDelay = 1500
function initHeadline() {
    //insert <i> element for each letter of a changing word
    singleLetters($('.cd-headline.letters').find('b'));
    //initialise headline animation
    animateHeadline($('.cd-headline'));
    }
function singleLetters($words) {
    $words.each(function(){
        var word = $(this),
            letters = word.text().split(''),
            selected = word.hasClass('is-visible');
        for (i in letters) {
            if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
            letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
        }
        var newLetters = letters.join('');
        word.html(newLetters).css('opacity', 1);
        })
    }
function animateHeadline($headlines) {
    var duration = animationDelay;
    $headlines.each(function(){
        var headline = $(this);
         
        if(headline.hasClass('loading-bar')) {
            duration = barAnimationDelay;
            setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
        } else if (headline.hasClass('clip')){
            var spanWrapper = headline.find('.cd-words-wrapper'),
                newWidth = spanWrapper.width() + 10
            spanWrapper.css('width', newWidth);
        } else if (!headline.hasClass('type') ) {
            //assign to .cd-words-wrapper the width of its longest word
            var words = headline.find('.cd-words-wrapper b'),
                width = 0;
            words.each(function(){
                var wordWidth = $(this).width();
                if (wordWidth > width) width = wordWidth;
            });
            headline.find('.cd-words-wrapper').css('width', width);
        };

        //trigger animation
        setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
        })
    }
function hideWord($word) {
    var nextWord = takeNext($word);
     
    if($word.parents('.cd-headline').hasClass('type')) {
        var parentSpan = $word.parent('.cd-words-wrapper');
        parentSpan.addClass('selected').removeClass('waiting'); 
        setTimeout(function(){ 
            parentSpan.removeClass('selected'); 
            $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
        }, selectionDuration);
        setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
     
    } else if($word.parents('.cd-headline').hasClass('letters')) {
        var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
        hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
        showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

    }  else if($word.parents('.cd-headline').hasClass('clip')) {
        $word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
            switchWord($word, nextWord);
            showWord(nextWord);
        });

    } else if ($word.parents('.cd-headline').hasClass('loading-bar')){
        $word.parents('.cd-words-wrapper').removeClass('is-loading');
        switchWord($word, nextWord);
        setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
        setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

    } else {
        switchWord($word, nextWord);
        setTimeout(function(){ hideWord(nextWord) }, animationDelay);
        }
    }
function showWord($word, $duration) {
    if($word.parents('.cd-headline').hasClass('type')) {
        showLetter($word.find('i').eq(0), $word, false, $duration);
        $word.addClass('is-visible').removeClass('is-hidden');

    }  else if($word.parents('.cd-headline').hasClass('clip')) {
        $word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
            setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
            })
        }
    }
function hideLetter($letter, $word, $bool, $duration) {
    $letter.removeClass('in').addClass('out');
     
    if(!$letter.is(':last-child')) {
        setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
    } else if($bool) { 
        setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
    }

    if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
        var nextWord = takeNext($word);
        switchWord($word, nextWord);
        } 
    }
function showLetter($letter, $word, $bool, $duration) {
    $letter.addClass('in').removeClass('out');
     
    if(!$letter.is(':last-child')) { 
        setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
    } else { 
        if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
        if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
        }
    }
function takeNext($word) {
    return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0)
    }
function takePrev($word) {
    return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last()
    }
function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('is-visible').addClass('is-hidden')
    $newWord.removeClass('is-hidden').addClass('is-visible')
    }
///////
function creaObjProp(tipo, dicPropiedades){
    var subtipo
    if (tipo.indexOf(':')>-1){
        var temp=tipo.split(':')
        tipo=temp[0];subtipo=temp[1]
        }
    var obj=document.createElement(tipo)
    if (subtipo) obj.type=subtipo

    modObjProp(obj, dicPropiedades)
    return obj
    }
function modObjProp(obj, dicPropiedades){
    for (var prop in dicPropiedades){
        var valor=dicPropiedades[prop]
        if (valor==null)
                 continue
        try {
            if (prop=='omiteNulo')
                continue
            else if (prop=='textos') {//separados por \n
                var trozos=valor.split('\\n')
                for (var i=0; i<trozos.length; i++){
                    var trozo=trozos[i]

                    if (trozo.indexOf('\\t')>-1){
                        var _l=trozo.split('\\t')
                        for (var j=0; j<_l.length; j++){
                            obj.appendChild( document.createTextNode('\u00a0') ) //tab='\u0009', espacio='\u00a0'
                            obj.appendChild( document.createTextNode(_l[j]) )
                            }
                        }
                    else
                        obj.appendChild( document.createTextNode(trozo) )

                    if (i<trozos.length-1) obj.appendChild(creaObjProp('BR'))
                    }
                }
            else if (prop=='texto' )
                obj.appendChild( document.createTextNode(valor))
            else if (prop=='circle'){//materialize
                // if (dicPropiedades['omiteNulo']){
                //  if ( (dicPropiedades['texto']==null || dicPropiedades['texto']=='') && 
                //      dicPropiedades['hijo']==null && 
                //      (dicPropiedades['hijos']==null || dicPropiedades['hijos'].length==0) )
                //          continue
                //      }
                // var xi=document.createElement('i')
                
                // var t=valor.split(':')
                // if (t.length==1){
                //  xi.className='material-icons circle'
                //  xi.appendChild( document.createTextNode(valor))
                //  }
                // else{
                //  xi.className='material-icons circle '+t[0]
                //  xi.appendChild( document.createTextNode(t[1]))
                //  }
                // obj.appendChild(xi)
                var xi=document.createElement('i')
                xi.className=valor

                if (obj.firstChild)
                    obj.insertBefore(xi, obj.firstChild)
                else
                    obj.appendChild(xi)
                }
            else if (prop=='i'){
                var xi=document.createElement('i')
                xi.className=valor

                if (obj.firstChild)
                    obj.insertBefore(xi, obj.firstChild)
                else
                    obj.appendChild(xi)
                }
            else if (prop=='mi'){//material icons con "ligature"
                var xi=document.createElement('i')
                
                xi.className='mdx'

                if (valor.indexOf(' left')>-1 || valor.indexOf('left ')>-1){
                    valor=valor.replace('left', '')
                    xi.className+=' left'
                    }
                else if (valor.indexOf(' right')>-1 || valor.indexOf('right ')>-1){
                    valor=valor.replace('right', '')
                    xi.className+=' right'
                    }
                
                xi.appendChild( document.createTextNode(valor) )
                
                obj.appendChild(xi)
                }
            else if (prop=='mi_circle'){
                var xi=document.createElement('i')
                        
                xi.className='mdx circle'
                xi.appendChild( document.createTextNode(valor) )
                
                obj.appendChild(xi)
                }
            // else if (prop=='fa'){
            //  if (dicPropiedades['omiteNulo']){
            //      if ( (dicPropiedades['texto']==null || dicPropiedades['texto']=='') && 
            //          dicPropiedades['hijo']==null && 
            //          (dicPropiedades['hijos']==null || dicPropiedades['hijos'].length==0) )
            //              continue
            //          }
            //  var xi=document.createElement('i')
            //  xi.className='fa '+valor

            //  if (obj.firstChild)
            //      obj.insertBefore(xi, obj.firstChild)
            //  else
            //      obj.appendChild(xi)
            //  }
            else if (prop=='stack'){
                var icon_stack=document.createElement('span')
                var lg=''
                if (valor.indexOf('fa-lg')>-1){
                    lg=' fa-lg'
                    valor=valor.replace('fa-lg', '')
                }
                icon_stack.className='fa-stack icon-stack'+lg


                var icon_circle=document.createElement('i')
                icon_circle.className='fa fa-circle fa-stack-2x'
                icon_stack.appendChild(icon_circle)

                var icon_myElement=document.createElement('i')
                icon_myElement.className='fa fa-stack-1x fa-inverse '+valor
                icon_stack.appendChild(icon_myElement)

                if (obj.firstChild)
                         obj.insertBefore(icon_stack, obj.firstChild)
                else
                         obj.appendChild(icon_stack)
                }
            else if (prop=='hijos'){
                for (var i=0; i<valor.length; i++){
                     var trozo=valor[i]
                     obj.appendChild( trozo )
                     }
                }
            else if (prop=='hijo')
                obj.appendChild(valor)
            else if (prop.indexOf('style.')==0 ) {//error setting a property that has only a getter
                prop=prop.substring(6)
                if (['left', 'top', 'width', 'height'].indexOf(prop)>-1){
                    valor=valor.toString()
                    if (valor.indexOf('px')==-1 && valor.indexOf('%')==-1)
                        valor+='px'
                    }
                obj.style[prop]=valor
                }
            //~ else if (prop=='quitaEstilo')
                    //~ quitaEstilo(obj, valor)
            else if (prop.indexOf('attr.')==0){
                prop=prop.substring(5)
                obj.setAttribute(prop, valor)
                }
            else if (prop.indexOf('data-')==0){
                obj.setAttribute(prop, valor)
                }
            else if (prop=='html')
                obj.innerHTML=valor
            else
                obj[prop]=valor
                }
        catch (e) {
            console.error('ERROR '+e.message + '\nen '+e.fileName+' linea '+e.lineNumber)
            }
        }
    }
function creaT(t){return document.createTextNode(t)}
///////
function initTL(){
    setIOSBody()
    // var datos=[{
    //             fecha:'2014-12-12',
    //             titulo:'Cuota Android Developer (25$)',
    //             // html,
    //             tipo:'gasto',
    //             img:'credit_card',
    //             color:'verde'
    //         },{
    //             fecha:'4/09/2015',
    //             titulo:'¡Nos seleccionan para la presentación de Octopus en PhonegapSpain!',
    //             html:'Este es ',
    //             tipo:'publicacion',
    //             img:'insert_drive_file',
    //             link:'',
    //             link_preview:'',
    //             color:'rojo'
    //         }
    //         ]
    var fn=function(datos){
        $('#preloader').hide()
        pintaBloques(datos.reverse())
        }
    var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1C_wMmsOSRTh0HbEEydaMWqLXv3omxjvOUvYryDOjAyw/pubhtml'
    Tabletop.init({key: public_spreadsheet_url, callback: fn, simpleSheet: true})

    $(window).on('scroll', timeline_scroll)

    sendTracking()
    }
function pintaBloques(datos){
    var h=[]
    for (var i=0; i<datos.length; i++){
        h.push( _creaBloque(datos[i]) )
        }
    $('#cd-timeline').append(h)

    timeline_scroll()
    }
function _creaBloque(f){
    var hijos=[creaObjProp('h2', {texto:f.titulo})]
    if (f.html) hijos.push( creaObjProp('p',  {html:f.html}) )
    if (f.fecha) hijos.push( creaObjProp('span', {className:'cd-date', texto:f.fecha}) )

    var ret
    if (f.link_preview){
        var a=creaObjProp('img', {className:'preview', src:f.link_preview})
        if (f.link){
            a=creaObjProp('a', {className:'preview', href:f.link, target:'_new', hijo:a})
        }

        ret=creaObjProp('div', {className:'cd-timeline-block', hijos:[
                //creaObjProp('div', {className:'col s4', hijos:[    
                    creaObjProp('div', {className:'cd-timeline-img is-hidden '+(f.color || 'gris'), mi:f.img}),
                    creaObjProp('div', {className:'cd-timeline-content is-hidden row', hijos:[
                        creaObjProp('div', {className:'col s12 m8', hijos:hijos}),
                        creaObjProp('div', {className:'col s12 m4', hijo:a}),
                        ]})
                //    ]})
                ]})
        }
    else{
        ret= creaObjProp('div', {className:'cd-timeline-block', hijos:[
                creaObjProp('div', {className:'cd-timeline-img is-hidden '+(f.color || 'gris'), mi:f.img}),
                creaObjProp('div', {className:'cd-timeline-content is-hidden', hijos:hijos})
                ]})
        }

    if (f.tipo=='futuro')
        $(ret).addClass('futuro')
    return ret
    }
function timeline_scroll(){
    $('.cd-timeline-block').each(function(){
        if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.85 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        })
    }
