(function(global) {

  var base_url;
  if (window._sf.staticResource) {
    base_url = window._sf.staticResource;
  }

  // map tells the System loader where to look for things
  var map = {
    'app':                        'scripts/', // 'dist',
    'rxjs':                       'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular':                   'node_modules/@angular',
    '@angular2-material':         'node_modules/@angular2-material',
    'clay-model':                 'node_modules/clay-model',
    'clay-model-salesforce-api':  'node_modules/clay-model-salesforce-api',
    'jsforce':                    'node_modules/jsforce',
    'kew':                        'node_modules/kew',
    'querystring':                'node_modules/querystring',
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'boot.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    'clay-model':                 { main: 'lib/index.js', defaultExtension: 'js' },
    'clay-model-salesforce-api':  { main: 'index.js', defaultExtension: 'js' },
    'jsforce':                    { main: 'build/jsforce.js', defaultExtension: 'js' },
    'kew':                        { main: 'kew.js', defaultExtension: 'js' },
    'querystring':                { main: 'index.js', defaultExtension: 'js' },
  };

  var angularPackages = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  angularPackages.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });
  
  var angularMaterialPackages = [
    'core',
    'button',
    'card',
    'list',
    'icon'
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  angularMaterialPackages.forEach(function(pkgName) {
    packages['@angular2-material/' + pkgName] = { main: pkgName + '.js', defaultExtension: 'js', format: 'cjs' };
  });

  var config = {
    baseURL: base_url || "",
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
