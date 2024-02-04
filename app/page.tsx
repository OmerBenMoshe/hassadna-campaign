import BarGraph from '@/lib/components/graphs/BarGraph';
import Pie from '@/lib/components/graphs/Pie';
import PieChartGraph from '@/lib/components/graphs/Pie';
import WebsiteScreen from '@/lib/components/website-screen';


export default function Home() {
  return (
    <WebsiteScreen>
      <Pie data={[
            { id: 0, value: 10, label: 'value A' },
            { id: 1, value: 15, label: 'value B' },
            { id: 2, value: 20, label: 'value C' },
          ]} />
        <BarGraph height={300} width={500}/>
    </WebsiteScreen>
  )
}
