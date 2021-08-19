import { PieChart } from 'react-minimal-pie-chart';
import React, { useState } from "react";


export default function DefaultPieChart(props) {
    const [selected, setSelected] = useState(0);
    const [hovered, setHovered] = useState(undefined);

    const data = props.data.map((entry, i) => {
        if (hovered === i) {
            return {
                ...entry,
                color: 'grey',
            };
        }
        return entry;
    });

    const lineWidth = 60;

    return (
        <PieChart
            style={{
                fontFamily:
                    '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                fontSize: '4px',
                marginTop: "-50px"
            }}
            viewBoxSize={[150, 150]}
            center={[73, 30]}
            data={data}
            radius={20}
            // radius={PieChart.defaultProps.radius - 6}
            lineWidth={60}
            segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
            segmentsShift={(index) => (index === selected ? 1 : 1)}
            animate
            label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
            labelPosition={100 - lineWidth / 2}
            labelStyle={{
                fill: '#fff',
                opacity: 0.75,
                pointerEvents: 'none',
            }}
            onClick={(_, index) => {
                setSelected(index === selected ? undefined : index);
            }}
            onMouseOver={(_, index) => {
                setHovered(index);
            }}
            onMouseOut={() => {
                setHovered(undefined);
            }}
        />
    );
}