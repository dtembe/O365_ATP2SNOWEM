current.source = 'O365-ATP';
current.resource = 'CI-TSE-Security';
current.description = email.body_text;
current.time_of_event = new GlideDateTime();
current.message_key = new GlideDateTime();

if(email.body.severity!=undefined){
   current.event_class=email.body.severity;}

// if(email.body.description!=undefined){
//    current.description=email.body.description;}

if(email.body.activity!=undefined){
   current.type=email.body.activity;}

if(email.body.user!=undefined){
   current.metric_name=email.body.user;}

if(email.body_html!=undefined){
   current.additional_info=email.body_text;}

// var severityWithoutExtraChar = bodyVariable.substring(bodyVariable.lastIndexOf("Severity:") +12, bodyVariable.lastIndexOf("Severity") + 22);     //keeping in mind length of Severity does not go above 12

// var Sev = severityWithoutExtraChar.substring(0 , severityWithoutExtraChar.lastIndexOf("\nTime"));


current.insert();
