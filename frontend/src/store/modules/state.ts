import { Module } from 'src/pages/modules'
export interface ModuleStateInterface {
  data: Module[];
}

const state: ModuleStateInterface = {
  data: [],
};

export default state;
