export interface IIndicatorItem {
  id: number;
  // The object responsible for showing and dismissing this item
  indicatorDisplayer: {};
  text: string;
};

export class ActivityIndicator {
  public static get instance(): ActivityIndicator {
    //
    return null;
  }

  public dismiss(indicatorDisplayer: {}): void {
    // no-op
  }

  public dismissWithId(id: number): void {
    // no-op
  }

  public show(text: string, indicatorDisplayer?: {}): number {
    return -1;
  }

  public hide(): void {
    // no-op
  }

  public unhide(): void {
    // no-op
  }
};
