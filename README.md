# fixed-minor-patch-package-json

>Update your package.json packages to fixed/patch/minor versions using your currently installed packages

There are 2 types of flags are available:
1. dependencies to update
  * default (no flag): Both dependencies . 
  * --prod: Will update the package.json production dependencies only from the currently installed ones . 
  * --dev: Will update the package.json development dependencies only from the currently installed ones . 
2. semver type to update
  * default (no flag): Fixed
  * --minor: will update the package dependencies with the minor`^` symbol and update the packages from the currently installed ones
  * --patch: will update the package dependencies with the patch`~` symbol and update the packages from the currently installed ones

you can also use the flags together
e.g `npx fixed-minor-patch-package-json --dev --minor` or `npx fixed-minor-patch-package-json --prod --patch`

# USAGE
to use simply install ( `npm i fixed-minor-patch-package-json` )
then run the binary
  * Directly `./node_modules/.bin/fixed-minor-patch-package-json`
  * Or using `npx fixed-minor-patch-package-json`
  
