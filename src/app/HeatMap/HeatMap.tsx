import { MapContainer, CircleMarker, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import { Interval } from '../../app/common/types';
import { useState } from 'react';
import Tile from '../common/Tile/Tile';
import CarLine from '../common/CarLine/CarLine';
import { MeasurementItem } from '@upstream/upstream-api';
import Legend from '../common/Legend/Legend';
import { getColorByValue } from '../common/Intervals';
import { getReducedPoints } from '../../utils/mapRendering';
import '../../utils/leaflet';

interface HeatMapProps {
  measurements: MeasurementItem[];
  intervals: Interval[];
}

export default function HeatMap({ measurements, intervals }: HeatMapProps) {
  const [selectedInterval, setSelectedInterval] = useState<Interval | null>(
    null,
  );
  const title = 'Heat Map';
  const [selectedPoint, setSelectedPoint] = useState<{
    value: number;
    percentile: number;
    position: LatLngExpression;
  } | null>(null);

  if (!measurements) return null;

  const center: LatLngExpression = [
    // @ts-expect-error
    measurements[0].geometry?.coordinates[1],
    // @ts-expect-error
    measurements[0].geometry?.coordinates[0],
  ];

  return (
    <div className="h-screen w-full ">
      <MapContainer center={center} zoom={9} className="h-full w-full">
        <Tile />
        <CarLine measurements={measurements} />
        {getReducedPoints(measurements).map((m, index) => {
          const value = m.value;
          const position: LatLngExpression = [
            // @ts-expect-error
            m.geometry?.coordinates[1],
            // @ts-expect-error
            m.geometry?.coordinates[0],
          ];

          return (
            <CircleMarker
              key={index}
              center={position}
              radius={6}
              pathOptions={{
                color: getColorByValue(value, intervals),
                fillOpacity: 1,
                weight: 1,
              }}
              eventHandlers={{
                click: () => {
                  setSelectedPoint({
                    value,
                    percentile: 0,
                    position,
                  });
                },
              }}
            />
          );
        })}

        {selectedPoint && (
          <Marker position={selectedPoint.position as LatLngExpression}>
            <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
              Value: {selectedPoint.value.toFixed(2)}
              <br />
              Position: {selectedPoint.position.toString()}
            </Tooltip>
          </Marker>
        )}
      </MapContainer>
      <Legend
        title={title ? title : ''}
        intervals={intervals}
        selectedInterval={selectedInterval}
        onIntervalSelect={setSelectedInterval}
      />
    </div>
  );
}
