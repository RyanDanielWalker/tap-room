import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <React.Fragment>
      {props.kegList.map((keg) =>
        <Keg
          whenKegClicked={props.onKegSelection}
          name={keg.name}
          brand={keg.brand}
          abv={keg.abv}
          price={keg.price}
          pintsRemaining={keg.pintsRemaining}
          id={keg.id}
          key={keg.id} />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}

export default KegList;