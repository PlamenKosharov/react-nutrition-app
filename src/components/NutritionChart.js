import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#FFBB28', '#00C49F'];

function NutritionPie({foodData}) {
  let data;
  try{
     data = [
      { name: 'Protein', value: foodData.items[0].protein_g },
      { name: 'Fat', value: foodData.items[0].fat_total_g  },
      { name: 'Carbs', value: foodData.items[0].carbohydrates_total_g  },
    ];
  }
  catch(error)
  {
    alert("You entered an invalid food.");
    return;
  }
  return (
    <PieChart width={250} height={250}>
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