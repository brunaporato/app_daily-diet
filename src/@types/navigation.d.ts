export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      'new-meal': undefined
      'meal-details': {
        id: string
      }
      'edit-meal': {
        id: string
      }
      success: {
        onDiet: boolean
      }
      dashboard: undefined
    }
  }
}
