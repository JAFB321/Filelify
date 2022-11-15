import { ChangeEventHandler, useEffect, useState } from 'react'
import Layout from '../components/Layout'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { csvData } from '../interfaces';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'CSV Plotter',
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const IndexPage = () => {
  const [file, setFile] = useState("");
  const [csvData, setCsvData] = useState<null | csvData>(null);

  useEffect(() => {
    (async () => {

      if (file === "") return
      setInterval(async () => {
        const csv = await window.files.getDataFromCsv(file)
        setCsvData(csv)
      }, 1000)

    })()
  }, [file])


  const onFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {

    let selectedFile = e.target.files[0];
    setFile(selectedFile.path)

  };

  const data = {
    labels: csvData?.timestamp,
    datasets: [
      {
        label: 'Temperatura',
        data: csvData?.temperature,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Humedad',
        data: csvData?.humidity,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
  };


  return (
    <>
      {!csvData ?
        <Layout title="Home | Next.js + TypeScript + Electron Example">
          <div className="h-screen flex justify-center items-center bg-gray-900 px-2">
            {file}
            <div className="p-3 md:w-1/2 w-[360px] rounded-md">
              <div className="h-32 w-full overflow-hidden relative shadow-md border-2 items-center rounded-md cursor-pointer   border-gray-400 border-dotted">
                <input type="file" onChange={onFileChange} className="h-full w-full opacity-0 z-10 absolute" name="files[]" />
                <div className="h-full w-full bg-gray-200 absolute z-1 flex justify-center items-center top-0">
                  <div className="flex flex-col">
                    <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
                    <span className="text-[12px]">{`Drag and Drop a file`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </Layout> :

        <Line options={options} data={data} />
      }
    </>
  )
}

export default IndexPage
