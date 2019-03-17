# fixed-minor-patch-package-json

>Update your package.json packages to fixed/patch/minor versions using your currently installed packages

2 types of flags are available 
1. build
..* default: Both dependencies
..* --prod: Will update the package.json production dependencies only from the currently installed ones
..* --dev: Will update the package.json development dependencies only from the currently installed ones
2. semver
..* default: Fixed
..* --minor: will update the package dependencies with the minor`^` symbol and update the packages from the currently installed ones
..* --patch: will update the package dependencies with the patch`~` symbol and update the packages from the currently installed ones

you can also use the flags together
e.g --dev --minor or --prod --patch

# USAGE
to use simply install ( npm i fixed-minor-patch-package-json )
then run the binary
  
