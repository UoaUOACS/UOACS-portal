const initScrollVisible = false;
//https://refactoring.guru/design-patterns/singleton/typescript/example
export class ScrollUtils {
  // Private
  static #instance: ScrollUtils;
  static #visible: boolean;
  static #root = document.getElementById('root');

  private constructor(visible: boolean = initScrollVisible) {
    ScrollUtils.handleScrollbarVisiblity(visible);
    ScrollUtils.#visible = visible;
  }

  public static get instance(): ScrollUtils {
    if (!ScrollUtils.#instance) {
      ScrollUtils.#instance = new ScrollUtils();
    }

    return ScrollUtils.#instance;
  }

  public static toggleVisiblity = () => {
    ScrollUtils.#visible = !ScrollUtils.#visible;
  };

  static handleScrollbarVisiblity = (isVisible: boolean) => {
    ScrollUtils.#root?.classList.toggle('overflow-hidden');
  };
}
