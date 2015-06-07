$(document).ready(function() {
    $('.slideshow').cycle({
        fx: 'fade'
    });

    var largura_window = $(window).width();
    $(function(){
    
    
    // JAVASCRIPT EXECUTADO APENAS PARA TABLETS E SMARTPHONES
    
    funcoesTabletSmart();   
    });

    function funcoesTabletSmart() {
        if(largura_window <= 940) {
            $('.menu-mob').on({
                click: function(){
                    var ico_mob = $(this);

                    if(ico_mob.hasClass("fechar")) {
                        ico_mob.removeClass("fechar");
                    } else {
                        ico_mob.addClass("fechar");
                    }

                    $('.menu').slideToggle('fast');         
                }
            });
        }
    } 
});


