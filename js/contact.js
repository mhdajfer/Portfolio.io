

$("#msg").click(function(){
    
    if ($("#bord").css('opacity') == 0) {
        $("#bord").css('opacity', 1)
        $("#bord").css('visibility', 'visible') 
    } else {
        $("#bord").css('opacity', 0)
        $("#bord").css('visibility', 'hidden') 
    }

});




$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbyCFTAiVMcHbM6czDnaJ4HyatFcXZtS8y0i5dci8Qp7Ltkla-EUj3mjrJXq7C6sTGKN/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
