// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
export const environment = {
  production: false,
 api_url : 'http://localhost:57580',
 // api_url: 'http://41.230.10.77:8081/GatewayCBWS',
  MaxRetraitAlimentation : 9999999999,
  MinRetraitAlimentation: 1000,
  sessionTime: 15
};
