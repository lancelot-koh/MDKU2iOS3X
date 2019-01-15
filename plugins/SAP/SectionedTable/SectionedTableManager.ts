import { Page } from 'tns-core-modules/ui/page/page';

export class Section {
  public destroy() {
    // No-op
  }

  public create(params: any, callback: any) {
    // No-op
  }

  public createButtonSection(params: any, callback: any) {
    // No-op
  }

  public createContactTableSection(params: any, callback: any) {
    // No-op
  }

  public createExtensionSection(params: any, callback: any) {
    // No-op
  }

  public createGridTableSection(params: any, callback: any) {
    // No-op
  }

  public createKeyValueSection(params: any, callback: any) {
    // No-op
  }

  public createObjectCollectionSection(params: any, callback: any) {
    // No-op
  }

  public createObjectHeaderSection(params: any, callback: any) {
    // No-op
  }

  public createObjectTableSection(params: any, callback: any) {
    // No-op
  }

  public createSimplePropertySection(params: any, callback: any) {
    // No-op
  }

  public redraw(data: any) {
    //
  }

  public reloadData(itemCount: number) {
    //
  }

  public reloadRow(index: number) {
    //
  }
  
   public setIndicatorState(params: any) {
    //
  }

  public refreshIndicators() {
    //
  }

  public redrawLayout() {
    //
  }
};

export class SectionedTable {

  protected page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  public create(sections: any[]) {
    //
  }
  public destroy() {
    //
  }
};
