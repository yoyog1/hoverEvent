$(function () {
    
    $cntn=$('.container');
    $cntnList=$('.container').children('ul').find('li');
    

    $cntnList.hover(function () {
        $Src=$(this).find('img').attr('src');
        


        $cntn.children('div').children('div').css('background-image','url("$Src")');
        
    })
            
        
        
    






})