# Ex: EMAIL="an@example.email" PASSWORD="anexamplepassword" sh curl-scripts/auth/sign-up.sh

curl "https://rocky-lake-61968.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
