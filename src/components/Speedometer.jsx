import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const Speedometer = () => {
    return (
        <div style={{ 
            width: '100%', 
            maxWidth: '340px', 
            margin: '0 auto',
            overflow: 'hidden',
            marginBottom: '-100px'
        }}>
            <ReactSpeedometer
                maxValue={6}
                minValue={0}
                value={5.6}
                currentValueText=""
                currentValueTextSize="0"
                ringWidth={20}
                segments={3}
                segmentColors={['#334155', '#334155', '#334155', '#334155', '#334155', '#06B6D4']}
                needleColor="#64748B"
                needleTransitionDuration={6000}
                needleTransition="easeElastic"
                customSegmentStops={[0, 1, 2, 3, 4, 5, 6]}
                customSegmentLabels={[
                    {
                        text: '6s',
                        position: 'OUTSIDE',
                        color: '#555',
                        fontSize: '16px'
                    },
                    {
                        text: '5s',
                        position: 'OUTSIDE',
                        color: '#555',
                        fontSize: '16px'
                    },
                    {
                        text: '4s',
                        position: 'OUTSIDE',
                        color: '#555',
                        fontSize: '16px'
                    },
                    {
                        text: '3s',
                        position: 'OUTSIDE',
                        color: '#555',
                        fontSize: '16px'
                    },
                    {
                        text: '2s',
                        position: 'OUTSIDE',
                        color: '#555',
                        fontSize: '16px'
                    },
                    {
                        text: '1s',
                        position: 'OUTSIDE',
                        color: '#555',
                        fontSize: '16px'
                    },
                ]}
                valueTextFontSize={0}
                textColor="transparent"
                paddingHorizontal={0}
                paddingVertical={0}
            />
        </div>
    );
};

export default Speedometer;