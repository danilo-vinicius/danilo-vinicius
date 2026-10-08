import MagneticPull from '../transitions-v2/magnetic-pull';

const registry = new Map();

// Register default magnetic-pull transition
registry.set('magnetic-pull', MagneticPull);

/**
 * Registers a transition component under a string slug
 */
export function registerTransition(slug, component) {
  registry.set(slug, component);
}

/**
 * Resolves a slug string or component function to a TransitionComponent
 */
export function resolveTransition(transition) {
  if (typeof transition === 'function') {
    return transition;
  }
  if (typeof transition === 'string' && registry.has(transition)) {
    return registry.get(transition);
  }
  return MagneticPull;
}

export default registry;
