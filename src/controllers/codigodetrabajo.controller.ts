import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Codigodetrabajo} from '../models';
import {CodigodetrabajoRepository} from '../repositories';

export class CodigodetrabajoController {
  constructor(
    @repository(CodigodetrabajoRepository)
    public codigodetrabajoRepository : CodigodetrabajoRepository,
  ) {}

  @post('/codigodetrabajos')
  @response(200, {
    description: 'Codigodetrabajo model instance',
    content: {'application/json': {schema: getModelSchemaRef(Codigodetrabajo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Codigodetrabajo, {
            title: 'NewCodigodetrabajo',
            exclude: ['id'],
          }),
        },
      },
    })
    codigodetrabajo: Omit<Codigodetrabajo, 'id'>,
  ): Promise<Codigodetrabajo> {
    return this.codigodetrabajoRepository.create(codigodetrabajo);
  }

  @get('/codigodetrabajos/count')
  @response(200, {
    description: 'Codigodetrabajo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Codigodetrabajo) where?: Where<Codigodetrabajo>,
  ): Promise<Count> {
    return this.codigodetrabajoRepository.count(where);
  }

  @get('/codigodetrabajos')
  @response(200, {
    description: 'Array of Codigodetrabajo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Codigodetrabajo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Codigodetrabajo) filter?: Filter<Codigodetrabajo>,
  ): Promise<Codigodetrabajo[]> {
    return this.codigodetrabajoRepository.find(filter);
  }

  @patch('/codigodetrabajos')
  @response(200, {
    description: 'Codigodetrabajo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Codigodetrabajo, {partial: true}),
        },
      },
    })
    codigodetrabajo: Codigodetrabajo,
    @param.where(Codigodetrabajo) where?: Where<Codigodetrabajo>,
  ): Promise<Count> {
    return this.codigodetrabajoRepository.updateAll(codigodetrabajo, where);
  }

  @get('/codigodetrabajos/{id}')
  @response(200, {
    description: 'Codigodetrabajo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Codigodetrabajo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Codigodetrabajo, {exclude: 'where'}) filter?: FilterExcludingWhere<Codigodetrabajo>
  ): Promise<Codigodetrabajo> {
    return this.codigodetrabajoRepository.findById(id, filter);
  }

  @patch('/codigodetrabajos/{id}')
  @response(204, {
    description: 'Codigodetrabajo PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Codigodetrabajo, {partial: true}),
        },
      },
    })
    codigodetrabajo: Codigodetrabajo,
  ): Promise<void> {
    await this.codigodetrabajoRepository.updateById(id, codigodetrabajo);
  }

  @put('/codigodetrabajos/{id}')
  @response(204, {
    description: 'Codigodetrabajo PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() codigodetrabajo: Codigodetrabajo,
  ): Promise<void> {
    await this.codigodetrabajoRepository.replaceById(id, codigodetrabajo);
  }

  @del('/codigodetrabajos/{id}')
  @response(204, {
    description: 'Codigodetrabajo DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.codigodetrabajoRepository.deleteById(id);
  }
}
