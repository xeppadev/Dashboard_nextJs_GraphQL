'use client'
import { ResponsiveLine } from '@nivo/line'

// Define un tipo para las props del componente
type MyResponsiveLineProps = {
    color: string;
    className?: string;
    data: {
        id: string;
        data: {
          x: string;
          y: number;
        }[];
      }[];
}





export const MyResponsiveLine = ({ data ,color, className, ...props }: MyResponsiveLineProps) => (
    <div className={className} {...props}>
    <ResponsiveLine
        theme={{}}
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="basis"
        axisTop={null}
        axisRight={null}
        axisBottom={null} // Aquí se elimina el eje X
        axisLeft={null}
        enableSlices="x"
        enableGridX={false}
        enableGridY={false}
        colors={[color]}
        enablePoints={false}
        pointSize={8}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        motionConfig={'wobbly'}
        enableArea={true}
        areaOpacity={0}
        crosshairType="top"
        useMesh={true}
        legends={[]}
    />
    </div>
)