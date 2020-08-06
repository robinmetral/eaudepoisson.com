import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import PigeonMap from "pigeon-maps";
import Marker from "pigeon-marker";
import Overlay from "pigeon-overlay";

const Tooltip = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    font-size: ${theme.fontSizes[0]};
    padding: ${theme.space[0]} ${theme.space[1]};
    border-radius: 0 ${theme.radii[3]} ${theme.radii[3]} ${theme.radii[3]};
    border: 1px solid ${theme.colors.black};
  `}
`;

const Map = ({ center: defaultCenter, zoom, markers }) => {
  const [overlay, setOverlay] = useState(null);
  const [center, setCenter] = useState(defaultCenter);
  return (
    <PigeonMap
      provider={(x, y, z) => {
        const s = String.fromCharCode(97 + ((x + y + z) % 3));
        return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`;
      }}
      defaultCenter={defaultCenter}
      center={center}
      defaultZoom={zoom}
      height={400}
      attributionPrefix={false}
      onClick={() => setOverlay(null)}
    >
      {markers &&
        markers.map((marker, id) => (
          <Marker
            key={id}
            anchor={marker.anchor}
            payload={marker.content}
            onClick={({ anchor, payload }) => {
              setOverlay({ anchor, content: payload });
              setCenter(anchor);
            }}
          />
        ))}
      {overlay && (
        <Overlay anchor={overlay.anchor} offset={[0, 0]}>
          <Tooltip>{overlay.content}</Tooltip>
        </Overlay>
      )}
    </PigeonMap>
  );
};

Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      anchor: PropTypes.arrayOf(PropTypes.number).isRequired,
    }),
  ),
};

Map.defaultProps = {
  zoom: 12,
};

export default Map;
