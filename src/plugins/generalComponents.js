/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';

const requireComponent = require.context(
  '../components/general/',
  false,
  /App[A-Z]\w+\.(vue|js)$/,
);

const requireComponent2 = require.context(
  '../layouts/',
  false,
  /[A-Z]\w+\.(vue|js)$/,
);

const initComponent = (fileName, component) => {
  const componentConfig = component(fileName);
  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, '')
    .match(/[A-Z][a-z]+/g)
    .join('-')
    .toLowerCase();

  Vue.component(
    componentName,
    componentConfig.default || componentConfig,
  );
};

const defaultComponents = () => requireComponent.keys().forEach((fileName) => initComponent(fileName, requireComponent));
const defaultLayouts = () => requireComponent2.keys().forEach((fileName) => initComponent(fileName, requireComponent2));

export default () => {
  defaultComponents();
  defaultLayouts();
};
