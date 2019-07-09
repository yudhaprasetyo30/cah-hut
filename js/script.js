$.getJSON('data/pizza.json', function(data){
    var menu=data.menu;
    $.each(menu, function(i,data){
       $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-4"><img src="img/pizza/'+ data.gambar+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama+'</h5><p class="card-text">'+ data.deskripsi+'</p><h5 class="card-title">'+ data.harga+'</h5><a href="#" class="btn btn-primary">Pesan</a></div></div></div>');

    });

});

$('.nav-link').on('click',function(){
    $('.nav-link').removeClass('active');
    $(this).addClass(' active');

    let  kategori = $(this).html();
    $('h1').html(kategori); 

    if(kategori=='All Menu'){
        $('#daftar-menu').html('');
        $.getJSON('data/pizza.json', function(data){
            var menu=data.menu;
            $.each(menu, function(i,data){
               $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-4"><img src="img/pizza/'+ data.gambar+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama+'</h5><p class="card-text">'+ data.deskripsi+'</p><h5 class="card-title">'+ data.harga+'</h5><a href="#" class="btn btn-primary">Pesan</a></div></div></div>');
        
            });
        
        });
        return;  
    }

    $.getJSON('data/pizza.json',function(data){
        let menu=data.menu;
        let content='';

        $.each(menu, function(i,data){
            if(data.kategori==kategori.toLowerCase()){
                content+='<div class="col-md-4"><div class="card mb-4"><img src="img/pizza/'+ data.gambar+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama+'</h5><p class="card-text">'+ data.deskripsi+'</p><h5 class="card-title">'+ data.harga+'</h5><a href="#" class="btn btn-primary">Pesan</a></div></div></div>';
            }
        });
        $('#daftar-menu').html(content);
    });
});