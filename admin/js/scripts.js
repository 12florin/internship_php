$(document).ready(function() {
   $('#summernote').summernote({ 
      height: 140
   });
 });


 $(document).ready(function(){
    $('#selectallBoxes').click(function(event){
      if(this.checked){
         $('.checkBoxes').each(function(){

            this.checked = true;
         });
      }else{
         $('.checkBoxes').each(function(){

            this.checked = false;
         });

      }
    });
 });