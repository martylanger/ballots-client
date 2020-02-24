# Ex: EMAIL="an@example.email" PASSWORD="anexamplepassword" sh curl-scripts/auth/sign-in.sh

curl "https://rocky-lake-61968.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
    }
  }'

echo
