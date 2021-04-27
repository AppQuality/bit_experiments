Bit
-----

## Introduction

Bit is a component-based approach to modern application development.

It unlocks the development and composition of modern applications from independent components, which can be independent developed and integrated into many projects. Bit's rich and extendable toolset, with a visual UI, creates an enjoyable developer experience for every step of modular development. 

More info [here](https://harmony-docs.bit.dev/getting-started/installing-bit).

## Prerequisites

If you have bit installed in your system you can skip this.

### Install BVM
BVM is a version manager for Bit. Using BVM makes it easier to install and manage multiple versions of Bit in a single environment.

```shell
npm i -g @teambit/bvm
```
You should see a progress bar while BVM is installing and once finished you can use BVM to install Bit.


➡️ [Learn more about BVM and it's commands](https://harmony-docs.bit.dev/reference/using-bvm).


### Install Bit
Once BVM is installed you can install the latest version of Bit using the bvm install command.

```shell
bvm install
```
### BVM and Bit Versions
To check your version of BVM and Bit and see what the latest version is run the bvm version command.

```shell
bvm version
```

## Install and run
Install all required dependecies.

```shell
bit install
```

The start command starts our dev server, compiles our component and watches for changes using Hot Module Replacement. It runs different workspace tasks through workers, such as testing, linters and any workspace tasks that are defined by the component.

```shell
bit start
```

### Run Test
Tests are added by placing test files inside the component's directory. Test files should be named with the pattern set by the component environment.

## Executing the tester manually
To manually run the tester on a specific component use its component ID

```shell
bit test <component-id>
```
For example:

```shell
bit test ui/button
```
To manually run the tester on the entire workspace:

```shell
bit test
```

### Options
`--watch` `-w`
Starts the tester in 'watch mode' (re-tests when changes are made to a component).

```shell
bit test --watch
```
`--debug` `-d`
Starts the tester in 'debug mode'.

```shell
bit test --debug
```
