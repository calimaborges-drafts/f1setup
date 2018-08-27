# F1 Setup Manager

https://f1setup.now.sh/

## Features

- [x] List setups
  - [x] Create item for list
- [x] Detail item
  - [x] Create detail page -- (on the table for now)
- [ ] Allow user to choose current (per track and weather) setup
  - [ ] Create action button for item list
  - [ ] Save preference using index db (localForage)
- [ ] Compare current setup with listed setup under mouse on mouse over
- [x] Use `now` to deploy
- [ ] Configure `deploy` on commit and `alias` on tag with `travis-ci` and `now`

## FAQ

### Why not use a spreadsheet?

Because I pretend to evolve the system to something more interesting and crowd populated

## Current production deploy method

```
yarn now
yarn now alias <full_address> f1setup
```
