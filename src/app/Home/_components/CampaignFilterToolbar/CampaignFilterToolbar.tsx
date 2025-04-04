import React, { useState } from 'react';
import FilteringMapButton from './_components/FilteringMapButton/FilteringMapButton';
import { LatLngBounds } from 'leaflet';
import { FilteringVariablesButton } from './_components/FilteringVariables';
interface CampaignFilterToolbarProps {
  startDate: Date | undefined;
  endDate: Date | undefined;
  onStartDateChange: (date: Date) => void;
  onEndDateChange: (date: Date) => void;
  onBoundsChange: (bounds: LatLngBounds | null) => void;
  sensorVariables: string[];
  setSensorVariables: (variables: string[]) => void;
}

const CampaignFilterToolbar: React.FC<CampaignFilterToolbarProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onBoundsChange,
  sensorVariables,
  setSensorVariables,
}) => {
  const [bounds, setBounds] = useState<LatLngBounds | null>(null);

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = e.target.value;
    onStartDateChange(new Date(newStartDate));

    // If end date becomes invalid with new start date, update it
    if (endDate && new Date(endDate) < new Date(newStartDate)) {
      onEndDateChange(new Date(newStartDate));
    }
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = e.target.value;
    // Only allow end date changes if it's after or equal to start date
    if (!startDate || new Date(newEndDate) >= new Date(startDate)) {
      onEndDateChange(new Date(newEndDate));
    }
  };

  const handleBoundingBoxSelect = (bounds: LatLngBounds | null) => {
    setBounds(bounds);
    onBoundsChange(bounds);
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-gray-800">Campaign Filters</h2>
      <div className="flex gap-4 flex-wrap">
        <div className="flex flex-col gap-1">
          <label htmlFor="start-date" className="text-sm text-gray-600">
            Start Date
          </label>
          <input
            id="start-date"
            type="date"
            className="p-2 border border-gray-300 rounded-md"
            value={startDate ? startDate.toISOString().split('T')[0] : ''}
            onChange={handleStartDateChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="end-date" className="text-sm text-gray-600">
            End Date
          </label>
          <input
            id="end-date"
            type="date"
            className="p-2 border border-gray-300 rounded-md"
            value={endDate ? endDate.toISOString().split('T')[0] : ''}
            onChange={handleEndDateChange}
          />
        </div>

        <FilteringMapButton
          onBoundingBoxSelect={handleBoundingBoxSelect}
          bounds={bounds}
        />

        <FilteringVariablesButton
          sensorVariables={sensorVariables}
          onSubmit={setSensorVariables}
          onClear={() => setSensorVariables([])}
        />
      </div>
    </div>
  );
};

export default CampaignFilterToolbar;
