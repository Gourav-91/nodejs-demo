# kpt-nodejs-app

## Description
sample description

## Usage

### Fetch the package
`kpt pkg get REPO_URI[.git]/PKG_PATH[@VERSION] kpt-nodejs-app`
Details: https://kpt.dev/reference/cli/pkg/get/

### View package content
`kpt pkg tree kpt-nodejs-app`
Details: https://kpt.dev/reference/cli/pkg/tree/

### Apply the package
```
kpt live init kpt-nodejs-app
kpt live apply kpt-nodejs-app --reconcile-timeout=2m --output=table
```
Details: https://kpt.dev/reference/cli/live/
