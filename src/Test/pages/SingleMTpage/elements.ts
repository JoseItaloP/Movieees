const elements = {
    returnDataTest: (type: string, name: string, BR?: boolean) => BR ? `type${type}_${name}_${BR}` : `type${type}_${name}`,
    returnDataTestSpan: (type: string, name: string, BR?: boolean) => BR ? `type${type}_${name}_${BR}_span` : `type${type}_${name}_span`,
    releseDataReturn: (RData: string) => RData.split("-").join("/"),
    budgetReturn: (budget: number) => budget.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
}

export default elements