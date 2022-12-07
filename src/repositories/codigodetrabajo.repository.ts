import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Codigodetrabajo, CodigodetrabajoRelations} from '../models';

export class CodigodetrabajoRepository extends DefaultCrudRepository<
  Codigodetrabajo,
  typeof Codigodetrabajo.prototype.id,
  CodigodetrabajoRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Codigodetrabajo, dataSource);
  }
}
