# Ex: TOKEN=33ad6372f795694b333ec5f329ebeaaa sh curl-scripts/auth/sign-out.sh

curl "https://rocky-lake-61968.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"
    }'

echo
