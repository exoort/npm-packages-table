import {
  createVNode, render,
} from 'vue';
import type { AppContext } from 'vue';

export interface IBaseModalProps {
  initialValue?: boolean,
}

export interface IUseBaseModalArgs<T extends Record<string, any>> {
  mountNode?: Element,
  props: T,
  appContext?: AppContext,
}

export default function useBaseModal<T extends Record<string, any>>(component: any, { mountNode, props, appContext }: IUseBaseModalArgs<T>) {
  const vnode = createVNode(component, props);
  vnode.appContext = appContext ?? null;

  const hide = () => {
    const defaultNode = document.getElementById('#default-modal-container') as Element;
    render(null, mountNode ?? defaultNode);
  };

  const show = () => {
    const defaultNode = document.getElementById('#default-modal-container') as Element;

    if (!mountNode && defaultNode.children) {
      hide();
    }

    render(vnode, mountNode ?? defaultNode);
  };

  return {
    show,
    hide,
  };
}
