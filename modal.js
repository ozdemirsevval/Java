$(document).ready(function(){
   
    $('#btn1','#btn2','#btn3').click(function(){
    
    $('.modal-title').text('Personel Update Id');
    
    const myModal = $('#myModal');
    var $row =jQuery(this).closest('tr');
    var $columns = $row.find('td');
    console.log($row);
    console.log($columns);
    
    jQuery.each($columns,function(i,item){
        
        console.log($('.model-title').val());
        
        if(i==0)
        {            
            console.log($('.model-title').val());
            $('.model-title').text($('.model-title').text()+ '-' + item.innerHTML);
        }
        else if(i==1)
            $('#ad').html= val(item.innerHTML);
        else if(i==2)
            $('#soyad').html= val(item.innerHTML);
        else if(i==3)
            $('#tel').html = val(item.innerHTML);
       
       
        //alert(values);
    });
    $('#myModal').modal('show');
    //console.log(values);
});
});
function displayAlert()
    {
        ///alert("Hello World! Gülümm :)");
    
        //Confirm Diyalog
        /*
        let result = confirm("Silmek istediğinizden Emin misiniz?");
        if (result) {
            alert("Silindi");
        }else{
            alert("Silme iptal edildi.")
        }; */
                //Prompt Diaolog Box
    var retVal = prompt("Enter your name: ", "your name here")
    let myDiv = document.getElementById("test");
    myDiv.innerHTML = retVal;
    }
   
    function OpenModel(btn){
        alert(btn.getAttribute("id"));
    } 




