import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const CalculatorModel = types
  .model("Calculator")
  .props({
    firstNumber: types.string,
    secondNumber: types.string,
    operator: types.string,
    result: types.string
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Calculator extends Instance<typeof CalculatorModel> {}
export interface CalculatorSnapshotOut extends SnapshotOut<typeof CalculatorModel> {}
export interface CalculatorSnapshotIn extends SnapshotIn<typeof CalculatorModel> {}
export const createCalculatorDefaultModel = () => types.optional(CalculatorModel, {})
