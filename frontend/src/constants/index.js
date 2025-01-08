export const categoryType = {
    investment: "investment",
    expense: "expense",
    saving: "saving",
};


export const color = {
    green: "rgba(75, 192, 192)",
    blue: "rgba(54, 162, 235)",
    red: "rgba(255, 99, 132)",
}


export const sampleData = {
    labels: [categoryType.saving, categoryType.expense, categoryType.investment],
    datasets: [
        {
            label: "%",
            data: [13, 8, 3],
            backgroundColor: [color.green, color.red, color.blue],
            borderColor: [color.green, color.red, color.blue],
            borderWidth: 1,
            borderRadius: 30,
            spacing: 10,
            cutout: 130,
        },
    ],
};


export const defaultEmptyData = {
    labels: [],
    datasets: [
        {
            label: "$",
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1,
            borderRadius: 30,
            spacing: 10,
            cutout: 130,
        },
    ],
}


export const categoryColorMap = {
    investment: "from-blue-700 to-blue-400",
    saving: "from-green-700 to-green-400",
    expense: "from-pink-800 to-pink-600",
    // Add more categories and corresponding color classes as needed
};