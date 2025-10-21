import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

function NutritionPie({foodData}) {
  console.log("hi")
  const data = [
    { name: 'Protein', value: foodData.items[0].protein_g },
    { name: 'Fat', value: foodData.items[0].fat_total_g  },
    { name: 'Carbs', value: foodData.items[0].carbohydrates_total_g  },
  ];
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

export default NutritionPie;