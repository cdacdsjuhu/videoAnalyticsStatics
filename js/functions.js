$(document).ready(function () {
  var date_input = $('input[name="date"]'); //our date input has the name "date"
  var container = $('#datepicker');
  var options = {
    format: 'dd/mm/yyyy',
    container: container,
    todayHighlight: true,
    autoclose: true,
  };
  date_input.css('top', '103px');
  date_input.datepicker(options);

  $('#example').DataTable();

  $("input[name='reportFor']").change(function(){
    if (this.value=='periodic'){
      $("#indos").hide();
    }else if(this.value=='student'){
      $("#indos").show();
      //$("#center").hide();
    }
  });

})
