import { Page } from 'tns-core-modules/ui/page/page';
import { MDKFormCellModel } from '../FormCellFactory/FormCellFactory';

export class FormCellContainerView {

  protected page: Page;
  protected params: any;

  constructor(page: Page, params: any) {
    this.page = page;
    this.params = params;
  }

  public addFormCell(model: MDKFormCellModel) {
    // intentional no-op
  }

  public createNativeView(): Object {
    // intentional no-op
    return undefined;
  }

  public disposeNativeView(): void {
    // intentional no-op
  }

  public initNativeView(): void {
    // intentional no-op
  }

  public updateCell(params: any, row: number, section: number) {
    // intentional no-op
  }
  
  public updateCells(params: any, style: any) {
    // intentional no-op
  }
};
