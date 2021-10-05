import { useSelector } from 'react-redux';
import 'mapbox-gl/dist/mapbox-gl.css';
import { BASEMAPS, GoogleMap } from '@carto/react-basemaps';
import { useMapHooks } from './useMapHooks';

export default function GoogleMapsComponent({ layers }) {
  const viewState = useSelector((state) => state.carto.viewState);
  const basemap = useSelector((state) => BASEMAPS[state.carto.basemap]);
  const googleApiKey = useSelector((state) => state.carto.googleApiKey);
  const { handleSizeChange, handleTooltip, handleViewStateChange } = useMapHooks();

  return (
    <GoogleMap
      basemap={basemap}
      apiKey={googleApiKey}
      viewState={{ ...viewState }}
      layers={layers}
      onViewStateChange={handleViewStateChange}
      onResize={handleSizeChange}
      getTooltip={handleTooltip}
    />
  );
}
