
```routes for user```

api/register
name:username,
email:email,
password:password,
address:{
    houseNo:"ramlochan shire stree",
    pincode:711202,
    city:"kolkata",
    state:"west bengal",
    country:"India"
},
phone:1234567890

api/login
email:email,
password:password

api/password/forgot
email:email

api/password/reset/:token

api/password/change
oldPassword:password,
newPassword:password,
confirmPassword:password

api/me  
get all the details of the user

api/me/update 
update the user details

api/logout 
logout the user

```routes for the medicine ```
api/donateMedicine

details of the medicine
name:name
quantity:12
expiryDate:date
condition:"perfect"
image:"url"
userId:_id of the user
note: anything extra if required
status: available or donated 

api/medicine
get all the medicine

api/nearestOrganization
get all the nearest organization in sorted order

```routes for organization```
api/organization/register

example of req.body
 name:username,
 type:NGO,
 contactPerson:"santosh kumar",
 email:email,
 phone:phone,
 address:{
  houseNo:"ramlochan shire street",
  pincode:700054,
  city:"Kolkata",
  state:"West Bengal",
  country:"India",
 },
 password:password,
 website:"www.google.com",
 moto:"We are here to help",
 certificate:"www.anything.com"
 termsAndConditions:"anything"


api/organization/login

email:email
password:"password"

api/organization/password/forgot
email:email

api/organization/password/reset/:token
password:password
confirmPassword:password

api/organization/password/change
oldPassword:password
newPassword:password
confirmPassword:password

api/organization/me 4
get all the details of the user

api/organization/me/update 
update the user details

api/organization/logout 
get request that will logout the user

api/nearestMedicine || login is required first
get all the medicine nearest to the user
