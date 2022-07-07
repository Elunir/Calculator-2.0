import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { CalculatorModel } from "../calculator/calculator"

/**
 * Model description here for TypeScript hints.
 */
export const CalculatorStoreModel = types
  .model("CalculatorStore")
  .props({
    calculations: types.optional(types.array(CalculatorModel), []),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    saveHistory: (a,b,o) => {
      const result = {
        firstNumber: a,
        secondNumber: b,
        operator: o,
      }
      self.calculations.push(result)
      return self.calculations
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface CalculatorStore extends Instance<typeof CalculatorStoreModel> {}
export interface CalculatorStoreSnapshotOut extends SnapshotOut<typeof CalculatorStoreModel> {}
export interface CalculatorStoreSnapshotIn extends SnapshotIn<typeof CalculatorStoreModel> {}
export const createCalculatorStoreDefaultModel = () => types.optional(CalculatorStoreModel, {})
