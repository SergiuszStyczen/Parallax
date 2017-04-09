$(window).scroll(function(){
    
    var windowScroll = $(this).scrollTop();

    console.log(windowScroll);

    $('header h1').css({
        'transform' : 'translate(0px, '+ windowScroll/3 +'%)'
    });
    $('header h2').css({
        'transform' : 'translate(0px, '+ windowScroll +'%)'
        
    });
    
    $('.pinetree').css({
        'transform' : 'translate('+ windowScroll/90 +'%, '+ windowScroll/-70 +'%)'
    });

    $('.pinetree2').css({
        'transform' : 'translate('+ windowScroll/80 +'%, '+ windowScroll/-20 +'%)'
    });

    if(windowScroll > $('.about_content').offset().top-300){
        $('.about_content div').each(function(i){
            
            
        setTimeout(function(){
           
             $('.about_content div').eq(i).css({
                'transform' : 'translate(0px, 0px)',
                'opacity' : 1
            })
               
        

        }, 250 * (i+1));
        
    });
   
 }

    if(windowScroll > $('.projects_content').offset().top-300){
        $('.projects_content div').each(function(i){
            
            
        setTimeout(function(){
           
             $('.projects_content div').eq(i).css({
                'transform' : 'translate(0px, 0px)',
                'opacity' : 1
            })
               
        

        }, 380 * (i+1));
        
    });
   
 }

    if(windowScroll > $('.projects_content').offset().top + 80){
        $('footer').css({
            'opacity': 1,
            'transform' : 'translate(0px, 0px)',
            'transition' : 'all 1s ease-in-out '
        });
   
 }
});