// $(document).ready(function(){

//     $(".answer1").hide();
//     $(".answer2").hide();
//     $(".answer3").hide();
//     $(".answer4").hide();
//     $(".answer5").hide();

//     $("#ans1").click(function(){
//         $(".answer1").slideToggle(300,function(){
//             if ($(".answer1").is(":visible")) {
//                 $("#ans1").text("Hide");
//             }
//             else {
//                 $("#ans1").text("Show");
//             }
            
//         });
        
        
        
//     })
//     $("#ans2").click(function(){
//         $(".answer2").toggle(300,function(){
//             if ($(".answer2").is(":visible")){
//                 $("#ans2").text("Hide");
//             }
//             else {
//                 $("#ans2").text("Show");
//             }
           
//         });
      

        
//     })
//     $("#ans3").click(function(){
//         $(".answer3").slideToggle(300,function(){
//             if ($(".answer3").is(":visible")){
//                 $("#ans3").text("Hide");
//             }
//             else {
//                 $("#ans3").text("Show");
//             }
//         });
        
        
//     })
//     $("#ans4").click(function(){
//         $(".answer4").slideToggle(300,function(){
//             if ($(".answer4").is(":visible")){
//                 $("#ans4").text("Hide");
//             }
//             else {
//                 $("#ans4").text("Show");
//             }
            
//         });
        
//     })
//     $("#ans5").click(function(){
//         $(".answer5").slideToggle(300,function(){
//             if ($(".answer5").is(":visible")){
//                 $("#ans5").text("Hide");
//             }
//             else {
//                 $("#ans5").text("Show");
//             }
//         });
        
        
//     })


// })

$(document).ready(function() {
    // Hide all answers on load
    $("[class^='answer']").hide();

    // Handle all answer buttons
    $("button[id^='ans']").click(function() {
        const btn = $(this);
        const btnId = btn.attr("id"); // e.g., ans2
        const num = btnId.replace("ans", ""); // e.g., 2
        const answerClass = `.answer${num}`;

        $(answerClass).slideToggle(300, function() {
            if ($(this).is(":visible")) {
                btn.text("Hide");
            } else {
                btn.text("Show");
            }
        });
    });
});
