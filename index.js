// for now it is necessary to have this file here. also the file paths part in
// the otu tsconfig is necessary, it has to point to the dist directory.
// otherwise it is not possible to import it, only javascript could be imported
// (found no configuration to build the library ts from the consumer). only this
// way it is possible to use the type definitions from the providing library.
// there has to be changed something when a published package is created, maybe
// there is some inspiration from the svelte package.
// so if geometric is changed, rebuild or activate the watcher

export * from "./dist";
