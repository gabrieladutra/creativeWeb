aws s3 rm s3://www.gabrieladutra.com/ --recursive
aws s3 cp public/ s3://www.gabrieladutra.com --recursive
aws cloudfront create-invalidation --distribution-id E1XP1VN7BGCVA4 --paths "/*"