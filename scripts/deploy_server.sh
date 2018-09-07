cd server && \
now --public \
--token $NOW_TOKEN \
-e MASTER_KEY=@master-key -e DB_URL=@db-url && \
now alias --token $NOW_TOKEN