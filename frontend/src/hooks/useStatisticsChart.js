import { categoryType, color, defaultEmptyData } from '../constants';
import { useTransactionStatisticsQuery } from '../graphql/api';
import { useEffect, useState } from 'react'


const useStatisticsChart = () => {

    const [chartData, setChartData] = useState(defaultEmptyData);

    const { data } = useTransactionStatisticsQuery();


    useEffect(() => {

        if (data?.categoryStatistics) {

            const categories = data.categoryStatistics.map((stat) => stat.category);
            const totalAmounts = data.categoryStatistics.map((stat) => stat.totalAmount);

            const backgroundColors = [];
            const borderColors = [];

            categories.forEach((category) => {
                if (category === categoryType.saving) {
                    backgroundColors.push(color.green);
                    borderColors.push(color.green);
                } else if (category === categoryType.expense) {
                    backgroundColors.push(color.red);
                    borderColors.push(color.red);
                } else if (category === categoryType.investment) {
                    backgroundColors.push(color.blue);
                    borderColors.push(color.blue);
                }
            });

            setChartData((prev) => ({
                labels: categories,
                datasets: [
                    {
                        ...prev.datasets[0],
                        data: totalAmounts,
                        backgroundColor: backgroundColors,
                        borderColor: borderColors,
                    },
                ],
            }));
        }
    }, [data]);


    return chartData;
}

export default useStatisticsChart;