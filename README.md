# Test for LoopMe

## The first task

- ./adUnit/index.html <- **open in browser** *:)* 

## The second task

``` bash
$ cd ./dashboardModule
```

### How to install
``` bash
$ npm i

```

### Dev mode

``` bash
$ npm run watch

```


### Start test (example tests)
``` bash
$ npm run tests
$ npm run test-show-report (for show result in browser)

```

### How to use
- ./dashboardModule/src/originalAssets <- **interesting files**
#### interface module
``` html
class ClassComponent extends AbstractModule{};
 
 let newComponent = new ClassComponent(
 {
         title: 'Some Title',
         text: 'Some Text',
         model: someJsonObj
 });
 
 newComponent.showIn('someSelector'); //Component show in some tag
 
 // if you need to update the data in the component
 
 newComponent.update(someObj); //Component show new data in some tag
 
 
```

