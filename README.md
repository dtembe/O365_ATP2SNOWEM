# O365_ATP2SNOWEM
O365 Advanced threat protection policy violations via emails to ServiceNOW Inbound Action to Event Management. 


Currently Microsoft O365 ATP only allows email based notifications. To integrate this into ServiceNOW you will need to send emails for all policy
violations to yourinstance@service-now.com
Under Inbound Actions - you will create a new action. 
Set Target table as em_event
Action type is Record Action
Applciation is Global 
Active is checked. 
Under Menu "When to Run" 
Type is New
Condition is Headers contain "O365Alerts@microsoft.com

The Action Scipt is posted to this repo. 

PDF document has the screen shots from my ServiceNOW Dev instance showing how to configure the event rules and event field mappings. 
Only item I have not listed is the Alert to Incident Task & Action. That is specific to your own internal security processes. 
