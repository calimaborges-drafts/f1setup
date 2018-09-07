cd server && \
npx now --public \
--token $NOW_TOKEN \
-e MASTER_KEY=@master-key -e DB_URL=@db-url && \
npx now alias --token $NOW_TOKEN