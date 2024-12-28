import React from 'react';

// Mock data for filters
export const MOCK_AREAS = [
  { id: 'coastal', name: 'Coastal' },
  { id: 'marine', name: 'Marine' },
  { id: 'terrestrial', name: 'Terrestrial' },
  { id: 'atmospheric', name: 'Atmospheric' },
];

export const MOCK_INSTRUMENTS = [
  { id: 'camera', name: 'Camera' },
  { id: 'sensor', name: 'Sensor' },
  { id: 'drone', name: 'Drone' },
  { id: 'satellite', name: 'Satellite' },
];

interface CampaignFilterToolbarProps {
  selectedArea: string;
  selectedInstrument: string;
  onAreaChange: (area: string) => void;
  onInstrumentChange: (instrument: string) => void;
}

const CampaignFilterToolbar: React.FC<CampaignFilterToolbarProps> = ({
  selectedArea,
  selectedInstrument,
  onAreaChange,
  onInstrumentChange,
}) => {
  return (
    <div className="flex gap-4 flex-wrap">
      <select
        className="p-2 border rounded-md"
        value={selectedArea}
        onChange={(e) => onAreaChange(e.target.value)}
      >
        <option value="">All Areas</option>
        {MOCK_AREAS.map((area) => (
          <option key={area.id} value={area.id}>
            {area.name}
          </option>
        ))}
      </select>

      <select
        className="p-2 border rounded-md"
        value={selectedInstrument}
        onChange={(e) => onInstrumentChange(e.target.value)}
      >
        <option value="">All Instruments</option>
        {MOCK_INSTRUMENTS.map((instrument) => (
          <option key={instrument.id} value={instrument.id}>
            {instrument.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CampaignFilterToolbar;
