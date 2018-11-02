/**
 * loadAllComponentFromContent returns all components that
 * are stated inside contents
 * @param {object} contents
 * @returns {object} A map of components with componentName as key
 */
export const loadAllComponentFromContent = async contents => {
  if (!contents.type) {
    return {};
  }

  let loadedComponents = {};
  let requiredComponents = _getComponentListFromContent(contents);

  if (requiredComponents.length > 0) {
    const promiseMap = requiredComponents.map(componentName => _getComponent(componentName));
    const componentMap = await Promise.all(promiseMap);

    componentMap.forEach(({ componentName, component }) => {
      loadedComponents[componentName] = component;
    });
  }

  return loadedComponents;
};

/**
 * _getComponentListFromContent generate a list of component
 * that is required by contents
 * @param {object} contents
 * @returns {array}
 */
const _getComponentListFromContent = contents => {
  let requiredComponents = [];
  let stack = [contents];

  // DFS on the component tree
  while (stack.length > 0) {
    const component = stack.pop();

    if (!requiredComponents.includes(component.type)) {
      requiredComponents.push(component.type);
    }

    if (component.children) {
      component.children.forEach(child => stack.push(child));
    }
  }
  
  return requiredComponents;
}

/**
 * _getComponent returns a promise that will be
 * resolved to a component with componentName
 * @param {string} componentName
 * @returns {Promise}
 */
const _getComponent = async componentName => {
  return import(`../components/${componentName}/${componentName}`)
    .then(component => {
      return {
        componentName,
        component: component.default
      }
    })
    .catch(err => {
      console.log(`_getComponent error: ${err}`);
      return {
        componentName,
        component: null
      }
    });
};
