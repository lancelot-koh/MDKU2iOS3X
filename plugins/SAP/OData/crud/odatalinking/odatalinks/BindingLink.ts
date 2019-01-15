import { ODataCrudOperation } from '../../BaseODataCruder';
import { ErrorMessage } from '../../../../ErrorHandling/ErrorMessage';

export class BindingLink {
  private sourceNavigationProperty: any;
  private sourceEntity: any;
  private targetEntity: any;
  private operation: ODataCrudOperation;

  public constructor(sourceNavigationProperty: any, sourceEntity: any, targetEntity: any, 
                     operation: ODataCrudOperation) {
    this.sourceNavigationProperty = sourceNavigationProperty;
    this.sourceEntity = sourceEntity;
    this.targetEntity = targetEntity;
    this.operation = operation;
  }

  public execute(): void {
    if (this.operation === ODataCrudOperation.Delete) {
      // Bind deletion is not supported by the OData SDK. Only referential constraints is currently used for deletion
      return;  
    }

    // Update and create currently do the same thing
    if (this.sourceNavigationProperty.getType().isList()) {
      throw new Error(ErrorMessage.format(ErrorMessage.ODATA_MANY_TO_ONE_LINKING_NOT_ALLOWED, 
        this.sourceEntity.getEntityType().getName(), this.sourceNavigationProperty.getName()));
    } else {
      this.sourceEntity.bindEntity(this.targetEntity, this.sourceNavigationProperty);
    }
  }
}
