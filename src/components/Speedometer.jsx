import React, { useState, useEffect, useRef } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const Speedometer = () => {
    const [value, setValue] = useState(0);
    const speedometerRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    setValue(5.6);
                    hasAnimated.current = true;
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (speedometerRef.current) {
            observer.observe(speedometerRef.current);
        }

        return () => {
            if (speedometerRef.current) {
                observer.unobserve(speedometerRef.current);
            }
        };
    }, []);

    return (
        <div 
            ref={speedometerRef}
            style={{ 
                width: '100%', 
                maxWidth: '340px', 
                margin: '0 auto',
                overflow: 'hidden',
                marginBottom: '-100px'
            }}
        >
            <ReactSpeedometer
                maxValue={6}
                minValue={0}
                value={value}
                currentValueText=""
                currentValueTextSize="0"
                ringWidth={20}
                segments={3}
                segmentColors={['#334155', '#334155', '#334155', '#334155', '#334155', '#06B6D4']}
                needleColor="#64748B"
                needleTransitionDuration={3000}
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