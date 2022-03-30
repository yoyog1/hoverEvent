$(function () {
    
    let $container=$('.container');

    $container.children('ul').find('li').hover(

        
        
        function () {
            let thisSrc=$(this).find('img').attr('src');
            let $display=$container.children('.display');

            $display.stop()
            $display.hide().children('img').attr('src',thisSrc);
            $display.fadeIn(1000);

        },
        function () {
            // $display.show();
        }
            
        
        
    )






})