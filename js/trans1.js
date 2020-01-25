
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function sendEmail(){
                    
                    
                    var SubscribeEmail = $("#SubscribeEmail").val().trim();
                    var name = $("#SubscribeName").val().trim();
                    $.getJSON("https://spreadsheets.google.com/feeds/list/10Mwa2HM7VNGWLFonR04kkQG8au0MTgxX9NMzASL6ezM/od6/public/values?alt=json", function(data) {
                    var sheetData = data.feed.entry;
                    var password = data.feed.entry[0]['gsx$_cn6ca']['$t'];        
                    Email.send({
                        
            Host: "smtp.gmail.com",
            Username : "blithchron@iitgn.ac.in",
            Password : password,
            To : SubscribeEmail ,
            From : "blithchron@iitgn.ac.in",
            Subject : "Welcome to Blithchron!",
            Body : "Hey "+name.bold()+"!<br>Thank you for subscribing to <b>Blithchron'20</b>. We will keep you posted about all major developments and updates via email.<br>Meanwhile, you can register for our events through our website www.blithchron.iitgn.ac.in.<br>You can also have a look at our <br><b>Instagram page:</b> www.instagram.com/blithchron_iitgn/ <br> <b>Facebook:</b>https://www.facebook.com/Blithchron/ <br>So, stay tuned to experience a symphony of emotions with us at Blithchron.<br>Regards,<br>Blithchron<br>IIT Gandhinagar",
            });
                    });
            
        }
function submitSubscribeInfo() {
    
    var SubscribeName = $("#SubscribeName").val().trim();
    var SubscribeEmail = $("#SubscribeEmail").val().trim();
    if ((SubscribeName == "" || SubscribeEmail == "") || (SubscribeName == "" && SubscribeEmail == "")) {
        alert("Please fill all the details");
    } else {
        if (validateEmail(SubscribeEmail)) {
        	sendEmail()
            const scriptURL = 'https://script.google.com/a/iitgn.ac.in/macros/s/AKfycbz4IiFbYHPIj2pRezMy21NGaJLr3RGtazoXGfMJbA/exec'
            const form = document.forms['submit-to-google-sheet']
            
          
            form.addEventListener('submit', e => {
              e.preventDefault()

              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => 0)
                .catch(error => 0)
            })
            
            

        } else {
            alert("Please fill a valid email ID");
        }
    }

}





