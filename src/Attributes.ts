import Model from './Model'

export enum Type {
  Attr = 'Attr',
  BelongsTo = 'BelongsTo'
}

export interface Attr {
  type: Type.Attr
  value: any
}

export interface BelongsTo {
  type: Type.BelongsTo,
  model: typeof Model,
  foreignKey: string
}

export default class Attributes {
  /**
   * The generic attribute. The given value will be used as default value
   * of the property when instantiating a model.
   */
  static attr (value: any): Attr {
    return { type: Type.Attr, value }
  }

  /**
   * The belongs to relationship.
   */
  static belongsTo (model: typeof Model, foreignKey: string): BelongsTo {
    return { type: Type.BelongsTo, model, foreignKey }
  }
}
