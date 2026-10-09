# coding-project-template

how the whole result should be
Legendary Performance! 🏆
Congratulations on successfully completing this assignment! Your grade has been recorded. Feel free to close this tab and return to the main course page.
Required passing grade: 70%
Status:Passed
Final Score: 30 / 30 (100%)

100%
✅
**Your completion was sent to your course platform
It may take a couple of hours for your course platform to display it. There's nothing you need to do. You can close this window.
Provide Assignment Feedback

**Question 1
Score: 2/2
Copy and paste the cURL command and its output, saved in the file named githubrepo, which shows that your GitHub repository is forked from ibm-developer-skills-network/expressBookReview.
apple@Billys-MacBook-Pro expressBookReviews % {****


echo '$ curl -s https://api.github.com/repos/jpngoga/expressBookReviews | jq -r '\''.parent.full_name'\'''

curl -s https://api.github.com/repos/jpngoga/expressBookReviews | jq -r '.parent.full_name'

} | tee githubrepo

$ curl -s https://api.github.com/repos/jpngoga/expressBookReviews | jq -r '.parent.full_name'

ibm-developer-skills-network/expressBookReviews

apple@Billys-MacBook-Pro expressBookReviews % cd ~/expressBookReviews/final_project

apple@Billys-MacBook-Pro final_project % {

echo '$ curl -s "http://localhost:5001/author/Jane%20Austen"'

curl -s "http://localhost:5001/author/Jane%20Austen"



**Question 2
Score: 2/2
Copy and paste the cURL command and its output, saved in the file named getallbooks, which displays all book(s) retrieved.**

apple@Billys-MacBook-Pro final_project % curl -i http://localhost:5001/
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 744
ETag: W/"2e8-vV2ndFHyslYEvRcTKr5Yhc7exsU"
Date: Fri, 09 Oct 2026 11:47:51 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"1":{"author":"Chinua Achebe","title":"Things Fall Apart","reviews":{}},"2":{"author":"Hans Christian Andersen","title":"Fairy tales","reviews":{}},"3":{"author":"Dante Alighieri","title":"The Divine Comedy","reviews":{}},"4":{"author":"Unknown","title":"The Epic Of Gilgamesh","reviews":{}},"5":{"author":"Unknown","title":"The Book Of Job","reviews":{}},"6":{"author":"Unknown","title":"One Thousand and One Nights","reviews":{}},"7":{"author":"Unknown","title":"Njál's Saga","reviews":{}},"8":{"author":"Jane Austen","title":"Pride and Prejudice","reviews":{}},"9":{"author":"Honoré de Balzac","title":"Le Père Goriot","reviews":{}},"10":{"author":"Samuel Beckett","title":"Molloy, Malone Dies, The Unnamable, the trilogy","reviews":{}}}% apple@Billys-MacBook-Pro final_project % curl -s http://localhost:5001/ | tee getallbooks
{"1":{"author":"Chinua Achebe","title":"Things Fall Apart","reviews":{}},"2":{"author":"Hans Christian Andersen","title":"Fairy tales","reviews":{}},"3":{"author":"Dante Alighieri","title":"The Divine Comedy","reviews":{}},"4":{"author":"Unknown","title":"The Epic Of Gilgamesh","reviews":{}},"5":{"author":"Unknown","title":"The Book Of Job","reviews":{}},"6":{"author":"Unknown","title":"One Thousand and One Nights","reviews":{}},"7":{"author":"Unknown","title":"Njál's Saga","reviews":{}},"8":{"author":"Jane Austen","title":"Pride and Prejudice","reviews":{}},"9":{"author":"Honoré de Balzac","title":"Le Père Goriot","reviews":{}},"10":{"author":"Samuel Beckett","title":"Molloy, Malone Dies, The Unnamable, the trilogy","reviews":{}}}% apple@Billys-MacBook-Pro final_project % 



**Question 3
Score: 2/2
Copy and paste the cURL command and its output, saved in the file named getbooksbyISBN, which displays all book(s) retrieved based on specified ISBN.**

apple@Billys-MacBook-Pro final_project % curl -s http://localhost:5001/isbn/1 | tee getbooksbyISBN
{"author":"Chinua Achebe","title":"Things Fall Apart","reviews":{}}% apple@Billys-MacBook-Pro final_project % 


**Question 4
Score: 2/2
Copy and paste the cURL command and its output, saved in the file named getbooksbyauthor, which displays all books retrieved based on the specified author.**


apple@Billys-MacBook-Pro final_project % {
echo '$ curl -s "http://localhost:5001/author/Jane%20Austen"'
curl -s "http://localhost:5001/author/Jane%20Austen"
echo
} | tee getbooksbyauthor
$ curl -s "http://localhost:5001/author/Jane%20Austen"
[{"author":"Jane Austen","title":"Pride and Prejudice","reviews":{}}]
apple@Billys-MacBook-Pro final_project % 




**Question 5
Score: 2/2
Copy and paste the cURL command and its output, saved in the file named getbooksbytitle, which displays all books retrieved based on the specified title.**

apple@Billys-MacBook-Pro final_project % {
echo '$ curl -s "http://localhost:5001/title/Pride"'
curl -s "http://localhost:5001/title/Pride"
echo
} | tee getbooksbytitle
$ curl -s "http://localhost:5001/title/Pride"
[{"author":"Jane Austen","title":"Pride and Prejudice","reviews":{}}]
apple@Billys-MacBook-Pro final_project % 



**Question 6
Score: 2/2
Copy and paste the cURL command and its output, saved in the file named getbookreview, which displays the initial book review.**


apple@Billys-MacBook-Pro final_project % {
echo '$ curl -s "http://localhost:5001/review/1"'
curl -s "http://localhost:5001/review/1"
echo
} | tee getbookreview
$ curl -s "http://localhost:5001/review/1"
{}
apple@Billys-MacBook-Pro final_project % 



**Question 7
Score: 3/3
Copy and paste the cURL command and its output, saved in the file named register, which displays a message confirming the successful registration of a new user.**


apple@Billys-MacBook-Pro final_project % {
echo '$ curl -s -X POST http://localhost:5001/register -H "Content-Type: application/json" -d '\''{"username":"bookfan3","password":"Pass123!"}'\'''
curl -s -X POST http://localhost:5001/register \
-H "Content-Type: application/json" \
-d '{"username":"bookfan3","password":"Pass123!"}'
echo
} | tee register
$ curl -s -X POST http://localhost:5001/register -H "Content-Type: application/json" -d '{"username":"bookfan3","password":"Pass123!"}'
{"message":"User successfully registered"}
apple@Billys-MacBook-Pro final_project % 


**Question 8
Score: 3/3
Copy and paste the cURL command and its output, saved in the file named login, which displays the result of logging in as a registered user.**


apple@Billys-MacBook-Pro final_project % {
echo '$ curl -s -X POST http://localhost:5001/customer/login -H "Content-Type: application/json" -d '\''{"username":"bookfan3","password":"Pass123!"}'\'''
curl -s -X POST http://localhost:5001/customer/login \
-H "Content-Type: application/json" \
-d '{"username":"bookfan3","password":"Pass123!"}' \
| tee /tmp/bookreview-login.json
echo
} | tee login
$ curl -s -X POST http://localhost:5001/customer/login -H "Content-Type: application/json" -d '{"username":"bookfan3","password":"Pass123!"}'
{"message":"Login successful","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvb2tmYW4zIiwiaWF0IjoxNzkxNTUwOTAxLCJleHAiOjE3OTE1NTQ1MDF9.z2t0lzi7N04KFPN_pBrv61J-xXBoDSqz3aJK41DzKps"}
apple@Billys-MacBook-Pro final_project % 


**
**Question 9
Score: 2/2
Copy and paste the cURL command and its output, saved in the file named reviewadded, which displays a message and reviews after adding or modifying a book review.****

apple@Billys-MacBook-Pro final_project % {
echo '$ curl -s -X POST http://localhost:5001/customer/login -H "Content-Type: application/json" -d '\''{"username":"bookfan3","password":"Pass123!"}'\'''
curl -s -X POST http://localhost:5001/customer/login \
-H "Content-Type: application/json" \
-d '{"username":"bookfan3","password":"Pass123!"}' \
| tee /tmp/bookreview-login.json
echo
} | tee login
$ curl -s -X POST http://localhost:5001/customer/login -H "Content-Type: application/json" -d '{"username":"bookfan3","password":"Pass123!"}'
{"message":"Login successful","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvb2tmYW4zIiwiaWF0IjoxNzkxNTUwOTAxLCJleHAiOjE3OTE1NTQ1MDF9.z2t0lzi7N04KFPN_pBrv61J-xXBoDSqz3aJK41DzKps"}
apple@Billys-MacBook-Pro final_project % TOKEN=$(jq -r '.token' /tmp/bookreview-login.json)

{
echo '$ curl -s -X PUT http://localhost:5001/customer/auth/review/1 -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '\''{"username":"bookfan3","review":"A wonderful and memorable book."}'\'''
curl -s -X PUT http://localhost:5001/customer/auth/review/1 \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN" \
-d '{"username":"bookfan3","review":"A wonderful and memorable book."}'
echo
} | tee reviewadded
$ curl -s -X PUT http://localhost:5001/customer/auth/review/1 -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"username":"bookfan3","review":"A wonderful and memorable book."}'
{"message":"Review added or updated successfully","reviews":{"bookfan3":"A wonderful and memorable book."}}
apple@Billys-MacBook-Pro final_project % 


**Question 10
Score: 2/2
Copy and paste the cURL command and its output, saved in the file named deletereview, which displays a delete message after deleting a book review.**




apple@Billys-MacBook-Pro final_project % TOKEN=$(jq -r '.token' /tmp/bookreview-login.json)

{
echo '$ curl -s -X PUT http://localhost:5001/customer/auth/review/1 -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '\''{"username":"bookfan3","review":"A wonderful and memorable book."}'\'''
curl -s -X PUT http://localhost:5001/customer/auth/review/1 \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN" \
-d '{"username":"bookfan3","review":"A wonderful and memorable book."}'
echo
} | tee reviewadded
$ curl -s -X PUT http://localhost:5001/customer/auth/review/1 -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"username":"bookfan3","review":"A wonderful and memorable book."}'
{"message":"Review added or updated successfully","reviews":{"bookfan3":"A wonderful and memorable book."}}
apple@Billys-MacBook-Pro final_project % {
echo '$ curl -s -X DELETE http://localhost:5001/customer/auth/review/1 -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '\''{"username":"bookfan3"}'\'''
curl -s -X DELETE http://localhost:5001/customer/auth/review/1 \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN" \
-d '{"username":"bookfan3"}'
echo
} | tee deletereview
$ curl -s -X DELETE http://localhost:5001/customer/auth/review/1 -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"username":"bookfan3"}'
{"message":"Review deleted successfully","reviews":{}}
apple@Billys-MacBook-Pro final_project % 

