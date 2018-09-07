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
- [x] Configure `deploy` on commit and `alias` on tag with `travis-ci` and `now`
- [ ] Might be possible to deploy everything in one server on now. Think about it. Remember to consider development cycle.

## FAQ

### Why not use a spreadsheet?

Because I intend to evolve the system to something more interesting and crowd populated

## Clean deployments

```
npx now rm f1setup --safe --yes
```

## Set secrets

Reference: https://zeit.co/blog/environment-variables-secrets

```console
$ npx now secret add acme-api-key my-value-here
```
