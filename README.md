# Eslint IBI Config #

Eslint rules for IBI Data web developers.

Linking to a file from this module prevents you from having to install eslint modules in your local project.

## Installation ##


### NPM ###

```cmd
npm install -g eslint-config-ibi
```

and link to the config files from your local file system.

```
<USER DIRECTORY>/AppData/roaming/npm/node_modules/eslint-config-ibi/index.js    -- Config file
<USER DIRECTORY>/AppData/roaming/npm/node_modules/eslint-config-ibi/.eslintignore    -- Ignore file
<USER DIRECTORY>/AppData/roaming/npm/node_modules/eslint-config-ibi/node_modules/eslint    -- Eslint module
```

Just remember you will have to re-run the install command every time a new version of the file releases, but this will work whether you're on the network or not.

### NETWORK LINK ###

Link to our config file when on the company network:

```
J:/standard/eslint-config-ibi/index.js    -- Config file
J:/standard/eslint-config-ibi/.eslintignore    -- Ignore file
J:/standard/eslint-config-ibi/node_modules/eslint    -- Eslint module
```

This local file will be automatically updated with every push to the repository. You will only have to reload your editor to see the new file take effect, but this will only work when you're on the network.

## Notes ##

- If your editor has an option to resolve your eslint module (to a global module), you can pass in the Eslint module link above. If you do this, you will not even need to have eslint installed on your machine.