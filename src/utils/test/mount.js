import { mount as enzymeMount } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

export const mount = (component) => enzymeMount(component);
export const mountToJson = (component) => enzymeToJson(enzymeMount(component));
export const toJson = (mountedComponent) => enzymeToJson(mountedComponent);

