var formActions = ( function() {
    function showSuccess(msg) {
        alert(msg);
    }

    function showFailure(msg) {
        alert(msg);
    }


    function attachEventHandlers() {
        $('#formSubmitButton').click(function () {
            var name = $('#name').val();
            var email = $('#email').val();
            var message = $('#message').val();            
            var submiturl = 'http://jaguar-prod.apigee.net/wishes?name='+name+'&email='+email+'&message='+message;
            

            if (name && email && message) {
                var type = "GET";
                var submitURL = submiturl;

                $.ajax({
                  url: submitURL,
                  success: function(message) {
                        console.log(message);
                        console.log('Success!');                        
                    }
                });
                $("#wishes_form")[0].reset();
                swal({
                  title: "Thank you for your wishes..",
                  text: "Awaiting to see you at the wedding ceremony.",
                  timer: 3000,
                  showConfirmButton: false
                });
            } else {
                //Do Nothing
            }
        });
    }

    function init() {
        attachEventHandlers();
    }

    return {
        init: init
    }

})();

$().ready(function() {
    formActions.init();
});